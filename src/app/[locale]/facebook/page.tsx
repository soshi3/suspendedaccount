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
    title: getTitleByLanguage("Facebook", locale),
    description: t("facebookDescription"),
  };
}

export default function FacebookPage() {
  const t = useTranslations("IndexPage");

  const platformData = {
    name: "Facebook",
    color: "facebook",
    title: t("title2"),
    description: t("facebookDescription"),
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
      t("facebookFeature1"),
      t("facebookFeature2"),
      t("facebookFeature3"),
      t("facebookFeature4"),
      t("facebookFeature5"),
      t("facebookFeature6"),
      t("facebookFeature7"),
      t("facebookFeature8"),
    ],
    process: [
      {
        title: t("facebookProcess1Title"),
        description: t("facebookProcess1Desc"),
      },
      {
        title: t("facebookProcess2Title"),
        description: t("facebookProcess2Desc"),
      },
      {
        title: t("facebookProcess3Title"),
        description: t("facebookProcess3Desc"),
      },
      {
        title: t("facebookProcess4Title"),
        description: t("facebookProcess4Desc"),
      },
      {
        title: t("facebookProcess5Title"),
        description: t("facebookProcess5Desc"),
      },
    ],
    expertise: [
      t("facebookExpertise1"),
      t("facebookExpertise2"),
      t("facebookExpertise3"),
      t("facebookExpertise4"),
      t("facebookExpertise5"),
      t("facebookExpertise6"),
    ],
    risks: [
      t("facebookRisk1"),
      t("facebookRisk2"),
      t("facebookRisk3"),
      t("facebookRisk4"),
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

  return <FacebookPage />;
}
