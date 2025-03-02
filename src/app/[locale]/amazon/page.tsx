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
    title: getTitleByLanguage("Amazon", locale),
    description: t("amazonDescription"),
  };
}

export default function AmazonPage() {
  const t = useTranslations("IndexPage");

  const platformData = {
    name: "Amazon",
    color: "amazon",
    title: t("title2"),
    description: t("amazonDescription"),
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
      t("amazonFeature1"),
      t("amazonFeature2"),
      t("amazonFeature3"),
      t("amazonFeature4"),
      t("amazonFeature5"),
      t("amazonFeature6"),
      t("amazonFeature7"),
      t("amazonFeature8"),
    ],
    process: [
      {
        title: t("amazonProcess1Title"),
        description: t("amazonProcess1Desc"),
      },
      {
        title: t("amazonProcess2Title"),
        description: t("amazonProcess2Desc"),
      },
      {
        title: t("amazonProcess3Title"),
        description: t("amazonProcess3Desc"),
      },
      {
        title: t("amazonProcess4Title"),
        description: t("amazonProcess4Desc"),
      },
      {
        title: t("amazonProcess5Title"),
        description: t("amazonProcess5Desc"),
      },
    ],
    expertise: [
      t("amazonExpertise1"),
      t("amazonExpertise2"),
      t("amazonExpertise3"),
      t("amazonExpertise4"),
      t("amazonExpertise5"),
      t("amazonExpertise6"),
    ],
    risks: [
      t("amazonRisk1"),
      t("amazonRisk2"),
      t("amazonRisk3"),
      t("amazonRisk4"),
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

  return <AmazonPage />;
}
