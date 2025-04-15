import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function WellnessPage() {
  return (
    <>
      <Navbar />
      <div className="section-container py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-[#1F2833] dark:text-[#C5C6C7] hover:text-[#45A29E] dark:hover:text-[#66FCF1] mb-10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="grid gap-12 md:grid-cols-3">
          {/* MAIN CONTENT */}
          <div className="md:col-span-2 space-y-10">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#1F2833] dark:text-white">
                Empowering Health, Enriching Lives
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-[#1F2833] dark:text-[#C5C6C7]">
                A Decade of Wellness Advocacy
              </p>
            </div>

            <Tabs defaultValue="english" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-2 bg-muted dark:bg-[#1F2833] rounded-lg">
                <TabsTrigger
                  value="english"
                  className="data-[state=active]:bg-[#45A29E] data-[state=active]:text-white rounded-l-lg"
                >
                  English
                </TabsTrigger>
                <TabsTrigger
                  value="nepali"
                  className="data-[state=active]:bg-[#45A29E] data-[state=active]:text-white rounded-r-lg"
                >
                  नेपाली
                </TabsTrigger>
              </TabsList>

              {/* English Content */}
              <TabsContent value="english" className="mt-8">
                <div className="prose dark:prose-invert prose-lg max-w-none space-y-6">
                  <p>
                    Since 2013, I have been wholeheartedly dedicated to the food
                    supplement wellness industry, working with a mission to
                    educate, empower, and inspire thousands of people across the
                    country toward better health and a more fulfilling life.
                  </p>
                  <p>
                    Through a blend of passion and purpose, I've been guiding
                    individuals from all walks of life to make informed choices
                    about their health, with the belief that{" "}
                    <strong>
                      "a healthy body is the first step to a wealthy life."
                    </strong>
                  </p>
                  <p>
                    For over a decade, I've seen firsthand how the right
                    guidance, coupled with the right nutritional supplements –
                    including high-quality multivitamins, minerals, immune
                    boosters, and wellness products – can bring remarkable
                    transformations.
                  </p>
                  <p>
                    These changes are not only physical but deeply emotional and
                    spiritual, helping people regain their energy, confidence,
                    and zest for life.
                  </p>

                  <h2 className="text-2xl font-semibold text-[#1F2833] dark:text-white">
                    Why Wellness Matters
                  </h2>
                  <p>
                    In today's fast-paced world, where junk food, stress, and
                    sedentary lifestyles have become the norm, the need for
                    nutritional awareness and daily supplementation is more
                    important than ever.
                  </p>
                  <p>
                    My goal is not just to sell a product, but to create a
                    movement of conscious living—where individuals take charge
                    of their health, support each other, and build a stronger,
                    healthier community.
                  </p>

                  <h2 className="text-2xl font-semibold text-[#1F2833] dark:text-white">
                    Join the Wellness Movement
                  </h2>
                  <p>
                    Whether you're already into healthy living or just beginning
                    your wellness journey, I'm here to support, guide, and walk
                    with you.
                  </p>
                  <p>
                    I offer one-on-one wellness consultations, recommend the
                    best supplement solutions, and train those who are
                    passionate to learn and grow in this life-changing field.
                  </p>

                  <blockquote className="italic border-l-4 border-[#45A29E] pl-4 text-[#1F2833] dark:text-[#C5C6C7]">
                    "Fuel your body, empower your journey – because true wealth
                    begins with great health."
                  </blockquote>

                  <p>If you're someone who is:</p>
                  <ul className="list-disc list-inside">
                    <li>Struggling with low energy or immunity</li>
                    <li>
                      Looking for natural ways to feel better and stay active
                    </li>
                    <li>
                      Interested in building a side-income through wellness
                      advocacy
                    </li>
                    <li>
                      Or simply eager to learn more about nutrition and
                      lifestyle…
                    </li>
                  </ul>

                  <p>
                    Then I welcome you to connect with me directly. Together, we
                    can build a brighter, stronger, and healthier future—for
                    ourselves and for the people we love.
                  </p>
                </div>
              </TabsContent>

              {/* Nepali Content */}
              <TabsContent value="nepali" className="mt-8">
                <div className="prose dark:prose-invert prose-lg max-w-none space-y-6">
                  <p>
                    २०१३ देखि, म देशभरका हजारौं मानिसहरूलाई राम्रो स्वास्थ्य र
                    अझ पूर्ण जीवनतर्फ शिक्षित, सशक्त र प्रेरित गर्ने मिशनका साथ
                    काम गर्दै खाद्य पूरक कल्याण उद्योगमा पूर्ण हृदयले समर्पित
                    छु।
                  </p>
                  <p>
                    जोश र उद्देश्यको मिश्रण मार्फत, म जीवनका सबै क्षेत्रका
                    व्यक्तिहरूलाई उनीहरूको स्वास्थ्यको बारेमा सूचित छनौट गर्न
                    मार्गदर्शन गर्दै आएको छु, "स्वस्थ शरीर धनी जीवनको पहिलो चरण
                    हो" भन्ने विश्वासका साथ।
                  </p>
                  <p>
                    एक दशक भन्दा बढी समयदेखि, मैले प्रत्यक्ष रूपमा देखेको छु कि
                    कसरी सही मार्गदर्शन, उच्च-गुणस्तरको मल्टिभिटामिन, खनिज,
                    प्रतिरक्षा बूस्टर, र कल्याण उत्पादनहरू सहित - सही पोषण
                    पूरकहरूसँग मिलेर उल्लेखनीय परिवर्तनहरू ल्याउन सक्छ।
                  </p>
                  <p>
                    यी परिवर्तनहरू केवल शारीरिक मात्र होइन तर गहिरो भावनात्मक र
                    आध्यात्मिक छन्, जसले मानिसहरूलाई जीवनको लागि आफ्नो ऊर्जा,
                    आत्मविश्वास र उत्साह पुन: प्राप्त गर्न मद्दत गर्दछ।
                  </p>

                  <h2 className="text-2xl font-semibold text-[#1F2833] dark:text-white">
                    किन कल्याण महत्त्वपूर्ण छ
                  </h2>
                  <p>
                    आजको द्रुत गतिको संसारमा, जहाँ जंक फूड, तनाव, र आसीन
                    जीवनशैली सामान्य बनेको छ, पोषण जागरूकता र दैनिक पूरकको
                    आवश्यकता पहिले भन्दा बढी महत्त्वपूर्ण छ।
                  </p>
                  <p>
                    मेरो लक्ष्य केवल उत्पादन बेच्नु मात्र होइन, तर सचेत जीवनको
                    आन्दोलन सिर्जना गर्नु हो - जहाँ व्यक्तिहरूले आफ्नो
                    स्वास्थ्यको जिम्मा लिन्छन्, एकअर्कालाई सहयोग गर्छन्, र
                    बलियो, स्वस्थ समुदाय निर्माण गर्छन्।
                  </p>

                  <h2 className="text-2xl font-semibold text-[#1F2833] dark:text-white">
                    वेलनेस आन्दोलनमा सामेल हुनुहोस्
                  </h2>
                  <p>
                    चाहे तपाईं पहिले नै स्वस्थ जीवनमा हुनुहुन्छ वा भर्खरै आफ्नो
                    कल्याण यात्रा सुरु गर्दै हुनुहुन्छ, म तपाईंलाई समर्थन गर्न,
                    मार्गदर्शन गर्न र साथ दिन यहाँ छु।
                  </p>
                  <p>
                    म एक-एक-एक कल्याण परामर्श प्रदान गर्दछु, उत्तम पूरक
                    समाधानहरू सिफारिस गर्दछु, र यस जीवन परिवर्तन गर्ने क्षेत्रमा
                    सिक्न र बढ्न जोशिला व्यक्तिहरूलाई तालिम दिन्छु।
                  </p>

                  <blockquote className="italic border-l-4 border-[#45A29E] pl-4 text-[#1F2833] dark:text-[#C5C6C7]">
                    "आफ्नो शरीरलाई इन्धन दिनुहोस्, आफ्नो यात्रालाई सशक्त
                    बनाउनुहोस् - किनकि साँचो धन राम्रो स्वास्थ्यबाट सुरु हुन्छ।"
                  </blockquote>

                  <p>यदि तपाईं त्यस्तो व्यक्ति हुनुहुन्छ जो:</p>
                  <ul className="list-disc list-inside">
                    <li>कम ऊर्जा वा प्रतिरक्षासँग संघर्ष गर्दै</li>
                    <li>
                      राम्रो महसुस गर्ने र सक्रिय रहन प्राकृतिक तरिकाहरू खोज्दै
                    </li>
                    <li>वेलनेस वकालत मार्फत साइड-आय निर्माण गर्न इच्छुक</li>
                    <li>
                      वा पोषण र जीवनशैलीको बारेमा थप जान्न उत्सुक हुनुहुन्छ...
                    </li>
                  </ul>

                  <p>
                    त्यसो भए म तपाईंलाई मसँग प्रत्यक्ष सम्पर्क गर्न स्वागत
                    गर्दछु। सँगै, हामी आफ्नो लागि र हामीले माया गर्ने मानिसहरूको
                    लागि उज्यालो, बलियो र स्वस्थ भविष्य निर्माण गर्न सक्छौं।
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* SIDEBAR IMAGE */}
          <div className="space-y-8">
            <div className="rounded-xl overflow-hidden shadow-md dark:shadow-none">
              <Image
                src="/empowering.jpg"
                alt="Wellness advocate"
                width={400}
                height={600}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
