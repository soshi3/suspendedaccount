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
    title: getTitleByLanguage("Upwork", locale),
    description: t("upworkDescription"),
  };
}

export default function UpworkPage() {
  const t = useTranslations("IndexPage");

  const platformData = {
    name: "Upwork",
    color: "upwork",
    title: t("title2"),
    description: t("upworkDescription"),
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
      t("upworkFeature1"),
      t("upworkFeature2"),
      t("upworkFeature3"),
      t("upworkFeature4"),
      t("upworkFeature5"),
      t("upworkFeature6"),
      t("upworkFeature7"),
      t("upworkFeature8"),
    ],
    process: [
      {
        title: t("upworkProcess1Title"),
        description: t("upworkProcess1Desc"),
      },
      {
        title: t("upworkProcess2Title"),
        description: t("upworkProcess2Desc"),
      },
      {
        title: t("upworkProcess3Title"),
        description: t("upworkProcess3Desc"),
      },
      {
        title: t("upworkProcess4Title"),
        description: t("upworkProcess4Desc"),
      },
      {
        title: t("upworkProcess5Title"),
        description: t("upworkProcess5Desc"),
      },
    ],
    expertise: [
      t("upworkExpertise1"),
      t("upworkExpertise2"),
      t("upworkExpertise3"),
      t("upworkExpertise4"),
      t("upworkExpertise5"),
      t("upworkExpertise6"),
    ],
    risks: [
      t("upworkRisk1"),
      t("upworkRisk2"),
      t("upworkRisk3"),
      t("upworkRisk4"),
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

  return <UpworkPage />;
}
