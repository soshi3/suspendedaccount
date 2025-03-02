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
    title: getTitleByLanguage("Payoneer", locale),
    description: t("payoneerDescription"),
  };
}

export default function PayoneerPage() {
  const t = useTranslations("IndexPage");

  const platformData = {
    name: "Payoneer",
    color: "payoneer",
    title: t("title2"),
    description: t("payoneerDescription"),
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
      t("payoneerFeature1"),
      t("payoneerFeature2"),
      t("payoneerFeature3"),
      t("payoneerFeature4"),
      t("payoneerFeature5"),
      t("payoneerFeature6"),
      t("payoneerFeature7"),
      t("payoneerFeature8"),
    ],
    process: [
      {
        title: t("payoneerProcess1Title"),
        description: t("payoneerProcess1Desc"),
      },
      {
        title: t("payoneerProcess2Title"),
        description: t("payoneerProcess2Desc"),
      },
      {
        title: t("payoneerProcess3Title"),
        description: t("payoneerProcess3Desc"),
      },
      {
        title: t("payoneerProcess4Title"),
        description: t("payoneerProcess4Desc"),
      },
      {
        title: t("payoneerProcess5Title"),
        description: t("payoneerProcess5Desc"),
      },
      {
        title: t("payoneerProcess6Title"),
        description: t("payoneerProcess6Desc"),
      },
    ],
    expertise: [
      t("payoneerExpertise1"),
      t("payoneerExpertise2"),
      t("payoneerExpertise3"),
      t("payoneerExpertise4"),
      t("payoneerExpertise5"),
      t("payoneerExpertise6"),
    ],
    risks: [
      t("payoneerRisk1"),
      t("payoneerRisk2"),
      t("payoneerRisk3"),
      t("payoneerRisk4"),
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

  return <PayoneerPage />;
}
