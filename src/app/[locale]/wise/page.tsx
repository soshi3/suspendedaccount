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
    title: getTitleByLanguage("Wise", locale),
    description: t("wiseDescription"),
  };
}

export default function WisePage() {
  const t = useTranslations("IndexPage");

  const platformData = {
    name: "Wise",
    color: "wise",
    title: t("title2"),
    description: t("wiseDescription"),
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
      t("wiseFeature1"),
      t("wiseFeature2"),
      t("wiseFeature3"),
      t("wiseFeature4"),
      t("wiseFeature5"),
      t("wiseFeature6"),
      t("wiseFeature7"),
      t("wiseFeature8"),
    ],
    process: [
      {
        title: t("wiseProcess1Title"),
        description: t("wiseProcess1Desc"),
      },
      {
        title: t("wiseProcess2Title"),
        description: t("wiseProcess2Desc"),
      },
      {
        title: t("wiseProcess3Title"),
        description: t("wiseProcess3Desc"),
      },
      {
        title: t("wiseProcess4Title"),
        description: t("wiseProcess4Desc"),
      },
      {
        title: t("wiseProcess5Title"),
        description: t("wiseProcess5Desc"),
      },
    ],
    expertise: [
      t("wiseExpertise1"),
      t("wiseExpertise2"),
      t("wiseExpertise3"),
      t("wiseExpertise4"),
      t("wiseExpertise5"),
      t("wiseExpertise6"),
    ],
    risks: [t("wiseRisk1"), t("wiseRisk2"), t("wiseRisk3"), t("wiseRisk4")],
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

  return <WisePage />;
}
