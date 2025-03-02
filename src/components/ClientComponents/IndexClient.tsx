"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";

type Platform = {
  name: string;
  path: string;
  color: string;
  description: string;
};

const IndexClient = ({
  platforms,
  title,
  subtitle,
  viewDetails,
  language,
}: {
  platforms: Platform[];
  title: string;
  subtitle: string;
  viewDetails: string;
  language: string;
}) => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform: Platform, index: number) => (
            <motion.div
              key={platform.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <Link
                href={`/${language}${platform.path}`}
                className="block bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-all duration-300"
              >
                <h2 className="text-2xl font-semibold mb-4">{platform.name}</h2>
                <p className="text-gray-600 mb-4">{platform.description}</p>
                <div className="flex items-center text-gray-900 font-medium">
                  {viewDetails}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <ContactForm />
    </div>
  );
};

export default IndexClient;
