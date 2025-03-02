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
    title: getTitleByLanguage("Walmart", locale),
    description: t("walmartDescription"),
  };
}

export default function WalmartPage() {
  const t = useTranslations("IndexPage");

  const platformData = {
    name: "Walmart",
    color: "walmart",
    title: t("title2"),
    description: t("walmartDescription"),
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
      t("walmartFeature1"),
      t("walmartFeature2"),
      t("walmartFeature3"),
      t("walmartFeature4"),
      t("walmartFeature5"),
      t("walmartFeature6"),
      t("walmartFeature7"),
      t("walmartFeature8"),
    ],
    process: [
      {
        title: t("walmartProcess1Title"),
        description: t("walmartProcess1Desc"),
      },
      {
        title: t("walmartProcess2Title"),
        description: t("walmartProcess2Desc"),
      },
      {
        title: t("walmartProcess3Title"),
        description: t("walmartProcess3Desc"),
      },
      {
        title: t("walmartProcess4Title"),
        description: t("walmartProcess4Desc"),
      },
      {
        title: t("walmartProcess5Title"),
        description: t("walmartProcess5Desc"),
      },
    ],
    expertise: [
      t("walmartExpertise1"),
      t("walmartExpertise2"),
      t("walmartExpertise3"),
      t("walmartExpertise4"),
      t("walmartExpertise5"),
      t("walmartExpertise6"),
    ],
    risks: [
      t("walmartRisk1"),
      t("walmartRisk2"),
      t("walmartRisk3"),
      t("walmartRisk4"),
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

  return <WalmartPage />;
}

