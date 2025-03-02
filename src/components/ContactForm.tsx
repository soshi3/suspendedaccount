"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

/* eslint-disable @typescript-eslint/no-unused-vars */

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [messagingAPP, setMessagingAPP] = useState("");
  const [messagingAPPAccountName, setMessagingAPPAccountName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");

  const { executeRecaptcha } = useGoogleReCaptcha();

  const t = useTranslations("ContactForm");

  const services = [
    "Amazon",
    "eBay",
    "PayPal",
    "Stripe",
    "Payoneer",
    "Facebook",
    "Instagram",
    "X (Twitter)",
    "Walmart",
    "Wise",
    "Fiverr",
    "Upwork",
  ];
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResponse(null);

    if (!executeRecaptcha) {
      setError("reCAPTCHA not available");
      setLoading(false);
      return;
    }

    try {
      const recaptchaToken = await executeRecaptcha("contact_form");
      const response = await fetch(`/api/sendmail`, {
        method: "POST",
        body: JSON.stringify({
          name,
          phone,
          messagingAPP,
          messagingAPPAccountName,
          email,
          service,
          message,
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email.");
      }

      setResponse(data.message);
    } catch (error) {
      setError("Failed to send enquiry.Please try again later.");
    } finally {
      // Reset form fields
      setName("");
      setPhone("");
      setMessagingAPP("");
      setMessagingAPPAccountName("");
      setEmail("");
      setService("");
      setMessage("");
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.4 }}
      className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-8 border mt-16"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">
        {t("contactForm")}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t("nameLabel")}
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t("phoneLabelOptional")}
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t("messagingAPPLabelOptional")}
          </label>
          <div className="flex space-x-4">
            {["Telegram", "WhatsApp", "Messenger"].map((app) => (
              <label key={app} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="messagingAPP"
                  value={app === "None" ? "" : app}
                  checked={messagingAPP === (app === "None" ? "" : app)}
                  onChange={(e) => setMessagingAPP(e.target.value)}
                  className="form-radio text-blue-600"
                />
                <span>{app}</span>
              </label>
            ))}
          </div>

          {messagingAPP && (
            <div className="mt-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {messagingAPP} {t("messagingAPPAccountNameLabelOptional")}
              </label>
              <input
                type="text"
                value={messagingAPPAccountName}
                placeholder="Please leave your account number / name of your messanger app"
                onChange={(e) => setMessagingAPPAccountName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              />
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t("emailLabel")}
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t("targetServiceLabel")}
          </label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">{t("selectService")}</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t("messageLabel")}
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          disabled={loading}
        >
          {loading ? "Sending..." : t("submit")}
        </button>
      </form>
      {response && <p className="mt-4 text-green-600">{response}</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </motion.div>
  );
};

export default ContactForm;
