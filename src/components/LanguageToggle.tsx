"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const router = useRouter();
  const locale = useLocale();
  const [language, setLanguage] = useState(locale);
  const location = usePathname();
  const [open, setOpen] = useState(false); // State to control dropdown visibility

  const languages = [
    { code: "en", name: "English" },
    { code: "ja", name: "日本語" },
    { code: "ar", name: "العربية" },
    { code: "es", name: "Español" },
    { code: "zh", name: "中文" },
  ];

  type Language = "en" | "es" | "ar" | "ja" | "zh";

  const handleLanguageChange = (newLang: string) => {
    if (newLang === language) return;

    setLanguage(newLang as Language);
    setOpen(false); // Close the dropdown

    // Extract the current path without the language prefix
    const pathParts = location.split("/").filter(Boolean);
    if (
      pathParts.length > 0 &&
      languages.some((l) => l.code === pathParts[0])
    ) {
      pathParts.shift(); // Remove the old language prefix
    }

    // Construct new path with the selected language
    const newPath = `/${newLang}/${pathParts.join("/")}`;
    router.push(newPath);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="fixed top-4 right-4 z-50"
        >
          <Globe className="h-4 w-4 mr-2" />
          {languages.find((l) => l.code === language)?.name || "Language"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
