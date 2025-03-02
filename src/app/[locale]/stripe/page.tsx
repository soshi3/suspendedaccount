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
    title: getTitleByLanguage("Stripe", locale),
    description: t("stripeDescription"),
  };
}

export default function StripePage() {

  const t = useTranslations("IndexPage");

  const platformData = {
    name: "Stripe",
    color: "stripe",
    title: t("title2"),
    description: t("stripeDescription"),
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
      t("stripeFeature1"),
      t("stripeFeature2"),
      t("stripeFeature3"),
      t("stripeFeature4"),
      t("stripeFeature5"),
      t("stripeFeature6"),
      t("stripeFeature7"),
      t("stripeFeature8"),
    ],
    process: [
      {
        title: t("stripeProcess1Title"),
        description: t("stripeProcess1Desc"),
      },
      {
        title: t("stripeProcess2Title"),
        description: t("stripeProcess2Desc"),
      },
      {
        title: t("stripeProcess3Title"),
        description: t("stripeProcess3Desc"),
      },
      {
        title: t("stripeProcess4Title"),
        description: t("stripeProcess4Desc"),
      },
      {
        title: t("stripeProcess5Title"),
        description: t("stripeProcess5Desc"),
      },
      {
        title: t("stripeProcess6Title"),
        description: t("stripeProcess6Desc"),
      },
    ],
    expertise: [
      t("stripeExpertise1"),
      t("stripeExpertise2"),
      t("stripeExpertise3"),
      t("stripeExpertise4"),
      t("stripeExpertise5"),
      t("stripeExpertise6"),
    ],
    risks: [
      t("stripeRisk1"),
      t("stripeRisk2"),
      t("stripeRisk3"),
      t("stripeRisk4"),
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

  return <StripePage />;
}


