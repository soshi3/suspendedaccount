"use client";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Award,
  Clock,
  Users,
  BookOpen,
  AlertCircle,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

interface PlatformLandingProps {
  platform: {
    name: string;
    color: string;
    title: string;
    description: string;
    features: string[];
    process: { title: string; description: string }[];
    faq?: { question: string; answer: string }[];
    risks?: string[];
    expertise?: string[];
    benefits?: { title: string; description: string }[];
  };
}

const PlatformLanding = ({ platform }: PlatformLandingProps) => {
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
            {platform.name} {platform.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {platform.description}
          </motion.p>
        </div>

        {platform.benefits && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {platform.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 border"
              >
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <div className="bg-white rounded-xl shadow-sm p-8 border">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="h-6 w-6 mr-2 text-green-500" />
              Why Choose Us?
            </h2>
            <ul className="space-y-4">
              {platform.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 border">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Clock className="h-6 w-6 mr-2 text-blue-500" />
              Our Process
            </h2>
            <div className="space-y-6">
              {platform.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center mr-4 mt-1">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {platform.expertise && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <BookOpen className="h-6 w-6 mr-2 text-purple-500" />
              Our Expertise
            </h2>
            <div className="bg-white rounded-xl shadow-sm p-8 border">
              <ul className="space-y-4">
                {platform.expertise.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-purple-500 mr-3 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {platform.risks && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <AlertCircle className="h-6 w-6 mr-2 text-red-500" />
              Risks of Not Acting Quickly
            </h2>
            <div className="bg-white rounded-xl shadow-sm p-8 border">
              <ul className="space-y-4">
                {platform.risks.map((risk, index) => (
                  <li key={index} className="flex items-start">
                    <AlertCircle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {platform.faq && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Users className="h-6 w-6 mr-2 text-orange-500" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {platform.faq.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm p-6 border"
                >
                  <h3 className="text-lg font-medium mb-2">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
      <ContactForm />
    </div>
  );
};

export default PlatformLanding;
