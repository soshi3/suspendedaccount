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
    title: getTitleByLanguage("Fiverr", locale),
    description: t("fiverrDescription"),
  };
}

export default function FiverrPage() {
  const t = useTranslations("IndexPage");

  const platformData = {
    name: "Fiverr",
    color: "fiverr",
    title: t("title2"),
    description: t("fiverrDescription"),
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
      t("fiverrFeature1"),
      t("fiverrFeature2"),
      t("fiverrFeature3"),
      t("fiverrFeature4"),
      t("fiverrFeature5"),
      t("fiverrFeature6"),
      t("fiverrFeature7"),
      t("fiverrFeature8"),
    ],
    process: [
      {
        title: t("fiverrProcess1Title"),
        description: t("fiverrProcess1Desc"),
      },
      {
        title: t("fiverrProcess2Title"),
        description: t("fiverrProcess2Desc"),
      },
      {
        title: t("fiverrProcess3Title"),
        description: t("fiverrProcess3Desc"),
      },
      {
        title: t("fiverrProcess4Title"),
        description: t("fiverrProcess4Desc"),
      },
      {
        title: t("fiverrProcess5Title"),
        description: t("fiverrProcess5Desc"),
      },
      {
        title: t("fiverrProcess6Title"),
        description: t("fiverrProcess6Desc"),
      },
    ],
    expertise: [
      t("fiverrExpertise1"),
      t("fiverrExpertise2"),
      t("fiverrExpertise3"),
      t("fiverrExpertise4"),
      t("fiverrExpertise5"),
      t("fiverrExpertise6"),
    ],
    risks: [
      t("fiverrRisk1"),
      t("fiverrRisk2"),
      t("fiverrRisk3"),
      t("fiverrRisk4"),
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

  return <FiverrPage />;
}
