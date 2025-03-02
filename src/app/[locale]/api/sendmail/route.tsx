import { NextRequest, NextResponse } from "next/server";
import Mailjet from "node-mailjet";

const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY!,
  process.env.MAILJET_API_SECRET!
);

async function verifyRecaptcha(token: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY!;
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}`,
    }
  );
  const data = await response.json();
  console.log("recaptcha response", data);

  return data.success && data.score > 0.5; // Ensure reCAPTCHA score is valid
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      phone,
      messagingAPP,
      messagingAPPAccountName,
      email,
      service,
      message,
      recaptchaToken,
    } = body;

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Name, email, service, and message are required" },
        { status: 400 }
      );
    }

    // Validate reCAPTCHA
    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      return NextResponse.json(
        { error: "Failed reCAPTCHA validation" },
        { status: 403 }
      );
    }

    const request = mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.MAILJET_FROM_EMAIL!,
            Name: "Suspended Account Contact Form",
          },
          To: [
            {
              Email: process.env.MAILJET_TO_EMAIL!,
              Name: "Admin",
            },
          ],
          Subject: "Enquiry from Suspended Account Recovery Services",
          HTMLPart: `
            <h2>Enquiry from Suspended Account Recovery Services</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>messagingAPP:</strong> ${
              messagingAPP || "Not provided"
            }</p>
            <p><strong>messagingAPPAccountName:</strong> ${
              messagingAPPAccountName || "Not provided"
            }</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Message:</strong> ${message}</p>
          `,
        },
      ],
    });

    const response = await request;
    return NextResponse.json({
      message: "Thank you for your enquiry! We will get back to you soon.",
      response: response.body,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Failed to send email", details: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: "Failed to send email", details: "An unknown error occurred" },
      { status: 500 }
    );
  }
}
