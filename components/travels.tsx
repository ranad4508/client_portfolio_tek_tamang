"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { MapPin, Plane } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Travels() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const countries = [
    { name: "Nepal", description: "Various locations throughout the country" },
    {
      name: "India",
      description: "Delhi, Kolkata, Manali, Siliguri, Radhikapur",
    },
    { name: "Thailand", description: "International exposure" },
    { name: "Malaysia", description: "International exposure" },
    { name: "Singapore", description: "International exposure" },
    { name: "Bangladesh", description: "International exposure" },
    { name: "China", description: "International exposure" },
  ];

  return (
    <section id="travels" className="py-20">
      <div className="section-container" ref={ref}>
        <div className="mb-12">
          <h2 className="section-title">Travels & Exposure</h2>
          <p className="mt-4 text-lg text-[#1F2833]/80 dark:text-[#C5C6C7]/80 max-w-3xl">
            My professional journey has taken me to various places in Nepal and
            abroad, broadening my worldview and deepening my understanding of
            diverse cultures.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="rounded-full w-16 h-16 bg-[#45A29E] dark:bg-[#66FCF1] flex items-center justify-center">
              <Plane className="h-8 w-8 text-white dark:text-[#1F2833]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
            {countries.map((country, index) => (
              <div key={index}>
                <Card className="card-hover bg-white dark:bg-[#0B0C10]/80 border border-[#45A29E]/20 dark:border-[#66FCF1]/20 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full w-10 h-10 bg-[#66FCF1]/10 flex items-center justify-center mt-1">
                        <MapPin className="h-5 w-5 text-[#45A29E] dark:text-[#66FCF1]" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#1F2833] dark:text-[#C5C6C7] text-lg">
                          {country.name}
                        </h3>
                        <p className="text-sm text-[#1F2833]/70 dark:text-[#C5C6C7]/70">
                          {country.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-[#1F2833]/80 dark:text-[#C5C6C7]/80 italic">
            "Traveling has broadened my perspective and enriched my
            understanding of different cultures, making me a more empathetic and
            effective advocate for social change."
          </p>
        </div>
      </div>
    </section>
  );
}
