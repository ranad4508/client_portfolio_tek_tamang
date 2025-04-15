"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";

export default function WellnessPortfolioSection() {
  const [language, setLanguage] = useState<"en" | "ne">("en");
  const { theme } = useTheme();

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50 dark:from-[#1F2833] dark:to-[#0B0C10]">
      <div className="section-container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-[#45A29E]/10 px-3 py-1 text-sm text-[#45A29E] dark:text-[#45A29E]">
            Wellness Journey
          </div>
          <h2 className="section-title">
            {language === "en"
              ? "Empowering Health, Enriching Lives"
              : "स्वास्थ्य सशक्तिकरण, जीवन समृद्ध बनाउने"}
          </h2>
          <p className="max-w-[700px] text-[#1F2833] dark:text-[#C5C6C7] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {language === "en"
              ? "A decade of wellness advocacy dedicated to helping people achieve better health and a more fulfilling life."
              : "कल्याण वकालतको एक दशक जुन मानिसहरूलाई राम्रो स्वास्थ्य र अझ पूर्ण जीवन प्राप्त गर्न मद्दत गर्न समर्पित छ।"}
          </p>
          <Tabs defaultValue="en" className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-2 bg-muted dark:bg-[#1F2833]">
              <TabsTrigger
                value="en"
                onClick={() => setLanguage("en")}
                className="data-[state=active]:bg-[#45A29E] data-[state=active]:text-[#45A29E]-foreground"
              >
                English
              </TabsTrigger>
              <TabsTrigger
                value="ne"
                onClick={() => setLanguage("ne")}
                className="data-[state=active]:bg-[#45A29E] data-[state=active]:text-[#45A29E]-foreground"
              >
                नेपाली
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-[#1F2833] dark:text-[#C5C6C7]">
                {language === "en"
                  ? "A Decade of Wellness Advocacy"
                  : "कल्याण वकालतको एक दशक"}
              </h3>
              <p className="max-w-[600px] text-[#1F2833] dark:text-[#C5C6C7] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {language === "en"
                  ? "Since 2013, I have been wholeheartedly dedicated to the food supplement wellness industry, working with a mission to educate, empower, and inspire thousands of people across the country toward better health and a more fulfilling life."
                  : "२०१३ देखि, म देशभरका हजारौं मानिसहरूलाई राम्रो स्वास्थ्य र अझ पूर्ण जीवनतर्फ शिक्षित, सशक्त र प्रेरित गर्ने मिशनका साथ काम गर्दै खाद्य पूरक कल्याण उद्योगमा पूर्ण हृदयले समर्पित छु।"}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-[#1F2833] dark:text-[#C5C6C7]">
                {language === "en"
                  ? "Why Wellness Matters"
                  : "किन कल्याण महत्त्वपूर्ण छ"}
              </h3>
              <p className="max-w-[600px] text-[#1F2833] dark:text-[#C5C6C7] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {language === "en"
                  ? "In today's fast-paced world, where junk food, stress, and sedentary lifestyles have become the norm, the need for nutritional awareness and daily supplementation is more important than ever."
                  : "आजको द्रुत गतिको संसारमा, जहाँ जंक फूड, तनाव, र आसीन जीवनशैली सामान्य बनेको छ, पोषण जागरूकता र दैनिक पूरकको आवश्यकता पहिले भन्दा बढी महत्त्वपूर्ण छ।"}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/wellness"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#45A29E] px-8 text-sm font-medium text-[#45A29E]-foreground shadow transition-colors hover:bg-[#45A29E]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50"
              >
                <span>{language === "en" ? "View More" : "थप हेर्नुहोस्"}</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last card-hover">
            <Image
              src="/empowering.jpg"
              alt="Wellness advocacy"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
