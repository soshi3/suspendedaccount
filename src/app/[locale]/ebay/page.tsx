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
    title: getTitleByLanguage("Ebay", locale),
    description: t("ebayDescription"),
  };
}

export default function EbayPage() {
  const t = useTranslations("IndexPage");

  const platformData = {
    name: "eBay",
    color: "ebay",
    description: t("ebayDescription"),
    title: t("title2"),
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
      t("ebayFeature1"),
      t("ebayFeature2"),
      t("ebayFeature3"),
      t("ebayFeature4"),
      t("ebayFeature5"),
      t("ebayFeature6"),
      t("ebayFeature7"),
      t("ebayFeature8"),
    ],
    process: [
      {
        title: t("ebayProcess1Title"),
        description: t("ebayProcess1Desc"),
      },
      {
        title: t("ebayProcess2Title"),
        description: t("ebayProcess2Desc"),
      },
      {
        title: t("ebayProcess3Title"),
        description: t("ebayProcess3Desc"),
      },
      {
        title: t("ebayProcess4Title"),
        description: t("ebayProcess4Desc"),
      },
      {
        title: t("ebayProcess5Title"),
        description: t("ebayProcess5Desc"),
      },
    ],
    expertise: [
      t("ebayExpertise1"),
      t("ebayExpertise2"),
      t("ebayExpertise3"),
      t("ebayExpertise4"),
      t("ebayExpertise5"),
      t("ebayExpertise6"),
    ],
    risks: [t("ebayRisk1"), t("ebayRisk2"), t("ebayRisk3"), t("ebayRisk4")],
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
  return <PlatformLanding platform={platformData} />;
}

export async function page({ params }: ParamsProps) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return <EbayPage />;
}
