import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import IndexClient from "@/components/ClientComponents/IndexClient";
import { ParamsProps } from "@/lib/types";

export default function IndexPage({ params }: ParamsProps) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("IndexPage");

  const platforms = [
    {
      name: "Amazon",
      path: "/amazon",
      color: "amazon",
      description: t("amazonDesc"),
    },
    {
      name: "eBay",
      path: "/ebay",
      color: "ebay",
      description: t("ebayDesc"),
    },
    {
      name: "PayPal",
      path: "/paypal",
      color: "paypal",
      description: t("paypalDesc"),
    },
    {
      name: "Payoneer",
      path: "/payoneer",
      color: "payoneer",
      description: t("payoneerDesc"),
    },
    {
      name: "Stripe",
      path: "/stripe",
      color: "stripe",
      description: t("stripeDesc"),
    },
    {
      name: "Fiverr",
      path: "/fiverr",
      color: "fiverr",
      description: t("fiverrDesc"),
    },
    {
      name: "Upwork",
      path: "/upwork",
      color: "upwork",
      description: t("upworkDesc"),
    },
    {
      name: "Facebook",
      path: "/facebook",
      color: "facebook",
      description: t("facebookDesc"),
    },
    {
      name: "Instagram",
      path: "/instagram",
      color: "instagram",
      description: t("instagramDesc"),
    },
    {
      name: "X (Twitter)",
      path: "/twitter",
      color: "twitter",
      description: t("twitterDesc"),
    },
    {
      name: "Walmart",
      path: "/walmart",
      color: "walmart",
      description: t("walmartDesc"),
    },
    {
      name: "Wise",
      path: "/wise",
      color: "wise",
      description: t("wiseDesc"),
    },
  ];

  return (
    <>
      <IndexClient
        platforms={platforms}
        title={t("title")}
        subtitle={t("subtitle")}
        viewDetails={t("viewDetails")}
        language={locale}
      />
    </>
  );
}
