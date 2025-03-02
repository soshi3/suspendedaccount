"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Home } from "lucide-react";
import { useLocale } from "next-intl"; 

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();

  const platforms = [
    { name: "Amazon", path: "/amazon" },
    { name: "PayPal", path: "/paypal" },
    { name: "Stripe", path: "/stripe" },
    { name: "eBay", path: "/ebay" },
    { name: "Payoneer", path: "/payoneer" },
    { name: "Fiverr", path: "/fiverr" },
    { name: "Upwork", path: "/upwork" },
    { name: "Facebook", path: "/facebook" },
    { name: "Instagram", path: "/instagram" },
    { name: "X (Twitter)", path: "/twitter" },
    { name: "Walmart", path: "/walmart" },
    { name: "Wise", path: "/wise" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
        <div className="flex justify-between h-16">
          {/* Home Button */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href={`/${locale}/`} // ✅ Dynamic Home URL
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Home size={24} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex xl:items-center xl:space-x-4">
            {platforms.map((platform) => (
              <Link
                key={platform.path}
                href={`/${locale}${platform.path}`} // ✅ Dynamic URL with locale
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-100"
              >
                {platform.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {platforms.map((platform) => (
              <Link
                key={platform.path}
                href={`/${locale}${platform.path}`} // ✅ Dynamic URL with locale
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {platform.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
