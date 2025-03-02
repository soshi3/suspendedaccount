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
    title: getTitleByLanguage("X (Twitter)", locale),
    description: t("twitterDescription"),
  };
}

export default function TwitterPage() {

  const t = useTranslations("IndexPage");

  const platformData = {
    name: "X (Twitter)",
    color: "twitter",
    title: t("title2"),
    description: t("twitterDescription"),
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
      t("twitterFeature1"),
      t("twitterFeature2"),
      t("twitterFeature3"),
      t("twitterFeature4"),
      t("twitterFeature5"),
      t("twitterFeature6"),
      t("twitterFeature7"),
      t("twitterFeature8"),
    ],
    process: [
      {
        title: t("twitterProcess1Title"),
        description: t("twitterProcess1Desc"),
      },
      {
        title: t("twitterProcess2Title"),
        description: t("twitterProcess2Desc"),
      },
      {
        title: t("twitterProcess3Title"),
        description: t("twitterProcess3Desc"),
      },
      {
        title: t("twitterProcess4Title"),
        description: t("twitterProcess4Desc"),
      },
      {
        title: t("twitterProcess5Title"),
        description: t("twitterProcess5Desc"),
      },
    ],
    expertise: [
      t("twitterExpertise1"),
      t("twitterExpertise2"),
      t("twitterExpertise3"),
      t("twitterExpertise4"),
      t("twitterExpertise5"),
      t("twitterExpertise6"),
    ],
    risks: [
      t("twitterRisk1"),
      t("twitterRisk2"),
      t("twitterRisk3"),
      t("twitterRisk4"),
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

  return <TwitterPage />;
}


