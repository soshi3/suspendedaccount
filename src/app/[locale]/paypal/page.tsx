import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { ParamsProps } from "@/lib/types";
import PlatformLanding from "@/components/PlatformLanding";
import { getTitleByLanguage } from "@/lib/getTitle";

type Props = {
  params: { locale: string };
};

// Function to Generate Metadata
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;

  // Load translations on the server
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = (key: string) => messages.IndexPage[key] || key; // Fallback to key if not found

  return {
    title: getTitleByLanguage("Paypal", locale),
    description: t("paypalDescription"),
  };
}

export default function PaypalPage() {
  const t = useTranslations("IndexPage");

  const platformData = {
    name: "PayPal",
    color: "paypal",
    title: t("title2"),
    description: t("paypalDescription"),
    benefits: [
      {
        title: t("benefit1Title"),
        description: t("benefit1Desc"),
      },
      {
        title: t("benefit2Title"),
        description: t("benefit2Desc"),
      },
      {
        title: t("benefit3Title"),
        description: t("benefit3Desc"),
      },
    ],
    features: [
      t("paypalFeature1"),
      t("paypalFeature2"),
      t("paypalFeature3"),
      t("paypalFeature4"),
      t("paypalFeature5"),
      t("paypalFeature6"),
      t("paypalFeature7"),
      t("paypalFeature8"),
    ],
    process: [
      {
        title: t("paypalProcess1Title"),
        description: t("paypalProcess1Desc"),
      },
      {
        title: t("paypalProcess2Title"),
        description: t("paypalProcess2Desc"),
      },
      {
        title: t("paypalProcess3Title"),
        description: t("paypalProcess3Desc"),
      },
      {
        title: t("paypalProcess4Title"),
        description: t("paypalProcess4Desc"),
      },
      {
        title: t("paypalProcess5Title"),
        description: t("paypalProcess5Desc"),
      },
    ],
    expertise: [
      t("paypalExpertise1"),
      t("paypalExpertise2"),
      t("paypalExpertise3"),
      t("paypalExpertise4"),
      t("paypalExpertise5"),
      t("paypalExpertise6"),
    ],
    risks: [
      t("paypalRisk1"),
      t("paypalRisk2"),
      t("paypalRisk3"),
      t("paypalRisk4"),
    ],
    faq: [
      {
        question: t("recoveryPeriod"),
        answer: t("recoveryAnswer"),
      },
      {
        question: t("previousAppealQuestion"),
        answer: t("previousAppealAnswer"),
      },
      {
        question: t("feeQuestion"),
        answer: t("standardFeeAnswer"),
      },
      {
        question: t("requiredDocsQuestion"),
        answer: t("requiredDocsAnswer"),
      },
    ],
  };
  return (
    <>
      <PlatformLanding platform={platformData} />
    </>
  );
}

export async function page({ params }: ParamsProps) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);

  return <PaypalPage />;
}
