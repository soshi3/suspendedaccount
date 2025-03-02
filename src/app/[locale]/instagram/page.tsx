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
    title: getTitleByLanguage("Instagram", locale),
    description: t("instagramDescription"),
  };
}


export default function InstagramPage() {
  const t = useTranslations("IndexPage");

  const platformData = {
    name: "Instagram",
    color: "instagram",
    title: t("title2"),
    description: t("instagramDescription"),
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
      t("instagramFeature1"),
      t("instagramFeature2"),
      t("instagramFeature3"),
      t("instagramFeature4"),
      t("instagramFeature5"),
      t("instagramFeature6"),
      t("instagramFeature7"),
      t("instagramFeature8"),
    ],
    process: [
      {
        title: t("instagramProcess1Title"),
        description: t("instagramProcess1Desc"),
      },
      {
        title: t("instagramProcess2Title"),
        description: t("instagramProcess2Desc"),
      },
      {
        title: t("instagramProcess3Title"),
        description: t("instagramProcess3Desc"),
      },
      {
        title: t("instagramProcess4Title"),
        description: t("instagramProcess4Desc"),
      },
      {
        title: t("instagramProcess5Title"),
        description: t("instagramProcess5Desc"),
      },
    ],
    expertise: [
      t("instagramExpertise1"),
      t("instagramExpertise2"),
      t("instagramExpertise3"),
      t("instagramExpertise4"),
      t("instagramExpertise5"),
      t("instagramExpertise6"),
    ],
    risks: [
      t("instagramRisk1"),
      t("instagramRisk2"),
      t("instagramRisk3"),
      t("instagramRisk4"),
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

  return <InstagramPage />;
}
