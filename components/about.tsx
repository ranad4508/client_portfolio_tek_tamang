"use client";

import {
  Calendar,
  MapPin,
  Users,
  Heart,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const professionalHighlights = [
    {
      title: "Professional Background",
      description:
        "Over 25 years of diverse experience across hospitality, media, and manpower industries, developing a comprehensive understanding of business operations and human resource management.",
      icon: (
        <Briefcase className="h-6 w-6 text-[#45A29E] dark:text-[#66FCF1]" />
      ),
    },
    {
      title: "Leadership",
      description:
        "Proven leadership capabilities demonstrated through various executive roles in organizations, including serving as Vice Chairman of Constellation Saving & Credit Cooperative.",
      icon: <Award className="h-6 w-6 text-[#45A29E] dark:text-[#66FCF1]" />,
    },
    {
      title: "Education",
      description:
        "Bachelor's Degree in Management from Hira Lal Multiple College, providing a strong foundation in business principles and organizational leadership.",
      icon: (
        <GraduationCap className="h-6 w-6 text-[#45A29E] dark:text-[#66FCF1]" />
      ),
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-[#1F2833]/30">
      <div className="section-container">
        <div className="mb-12">
          <h2 className="section-title">Professional Profile</h2>
          <p className="mt-4 text-lg text-[#1F2833]/80 dark:text-[#C5C6C7]/80 max-w-3xl">
            I am a seasoned professional with extensive experience across
            multiple industries and a dedicated advocate for indigenous rights
            and social justice. My career spans hospitality, media, and manpower
            sectors, complemented by significant involvement in community
            service and political advocacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <Card className="card-hover bg-white dark:bg-[#0B0C10]/80 border border-[#45A29E]/20 dark:border-[#66FCF1]/20">
            <CardContent className="p-6">
              <div className="rounded-full w-12 h-12 bg-[#66FCF1]/10 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-[#45A29E] dark:text-[#66FCF1]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Born</h3>
              <p className="text-[#1F2833]/70 dark:text-[#C5C6C7]/70">
                August 8, 1974
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover bg-white dark:bg-[#0B0C10]/80 border border-[#45A29E]/20 dark:border-[#66FCF1]/20">
            <CardContent className="p-6">
              <div className="rounded-full w-12 h-12 bg-[#66FCF1]/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-[#45A29E] dark:text-[#66FCF1]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Origin</h3>
              <p className="text-[#1F2833]/70 dark:text-[#C5C6C7]/70">
                Netrawati Dabjong, Dhading, Nepal
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover bg-white dark:bg-[#0B0C10]/80 border border-[#45A29E]/20 dark:border-[#66FCF1]/20">
            <CardContent className="p-6">
              <div className="rounded-full w-12 h-12 bg-[#66FCF1]/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[#45A29E] dark:text-[#66FCF1]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Family</h3>
              <p className="text-[#1F2833]/70 dark:text-[#C5C6C7]/70">
                Wife: Chandrakala Radakhu Rai
                <br />
                Daughter: Sarmin Waiba
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover bg-white dark:bg-[#0B0C10]/80 border border-[#45A29E]/20 dark:border-[#66FCF1]/20">
            <CardContent className="p-6">
              <div className="rounded-full w-12 h-12 bg-[#66FCF1]/10 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-[#45A29E] dark:text-[#66FCF1]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Core Values</h3>
              <p className="text-[#1F2833]/70 dark:text-[#C5C6C7]/70">
                Integrity, Equality, Advocacy, Service
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {professionalHighlights.map((highlight, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-[#0B0C10]/80 border border-[#45A29E]/20 dark:border-[#66FCF1]/20 h-full"
            >
              <CardContent className="p-6">
                <div className="rounded-full w-12 h-12 bg-[#66FCF1]/10 flex items-center justify-center mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#1F2833] dark:text-[#C5C6C7]">
                  {highlight.title}
                </h3>
                <p className="text-[#1F2833]/80 dark:text-[#C5C6C7]/80">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-[#0B0C10]/80 p-8 rounded-lg border border-[#45A29E]/20 dark:border-[#66FCF1]/20 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-[#1F2833] dark:text-[#C5C6C7]">
            Heritage & Background
          </h3>
          <p className="text-[#1F2833]/80 dark:text-[#C5C6C7]/80 mb-6 leading-relaxed">
            I come from a respected Tamang family with deep roots in Nepal's
            cultural heritage. My family background has instilled in me a
            profound appreciation for our indigenous traditions and a commitment
            to preserving and advocating for our cultural identity. This
            foundation has shaped my professional journey and my dedication to
            social service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-[#45A29E] dark:text-[#66FCF1] mb-3">
                Family Lineage
              </h4>
              <ul className="space-y-2 text-[#1F2833]/80 dark:text-[#C5C6C7]/80">
                <li className="flex items-start">
                  <span className="text-[#45A29E] dark:text-[#66FCF1] mr-2">
                    •
                  </span>
                  <span>Grandfather: Chokre Tamang</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#45A29E] dark:text-[#66FCF1] mr-2">
                    •
                  </span>
                  <span>Father: Mr. Purna Bahadur Tamang</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#45A29E] dark:text-[#66FCF1] mr-2">
                    •
                  </span>
                  <span>Mother: Asha Maya Tamang</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#45A29E] dark:text-[#66FCF1] mr-2">
                    •
                  </span>
                  <span>Siblings: Two brothers and two sisters</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#45A29E] dark:text-[#66FCF1] mb-3">
                Professional Philosophy
              </h4>
              <p className="text-[#1F2833]/80 dark:text-[#C5C6C7]/80 leading-relaxed">
                My professional approach is guided by a commitment to integrity,
                cultural sensitivity, and social responsibility. I believe in
                leveraging business expertise to create positive social impact,
                particularly for marginalized communities. This philosophy has
                informed my work across various sectors and my advocacy efforts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
