"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import {
  Building,
  Tv,
  Users,
  X,
  Calendar,
  MapPin,
  Briefcase,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function Experience() {
  const ref = useRef(null);

  type ExperienceItem = {
    id: string;
    company: string;
    location: string;
    position: string;
    period: string;
    description: string;
    image: string;
  };

  const [selectedItem, setSelectedItem] = useState<ExperienceItem | null>(null);

  const openDialog = (item: any) => {
    setSelectedItem(item);
    document.body.style.overflow = "hidden";
  };

  const closeDialog = () => {
    setSelectedItem(null);
    document.body.style.overflow = "auto";
  };

  const experienceCategories = [
    {
      id: "hospitality",
      title: "Hospitality",
      icon: <Building className="h-5 w-5" />,
      items: [
        {
          id: "hotel-central",
          company: "Hotel Central",
          location: "Jamal, Kathmandu",
          position: "Guest Relations Manager",
          period: "2005-2007",
          description:
            "Managed guest relations and front desk operations for a premier hotel in central Kathmandu. Oversaw a team of 10 staff members and implemented customer service improvements that increased guest satisfaction ratings by 25%.",
          image: "/hotel central.jpg",
        },
        {
          id: "holy-lodge",
          company: "Holy Lodge",
          location: "Thamel, Kathmandu",
          position: "Operations Manager",
          period: "2003-2005",
          description:
            "Directed daily operations of a boutique lodge in Thamel's tourist district. Responsible for staff management, inventory control, and maintaining high service standards for international clientele.",
          image: "/holy lodge.jpg",
        },
        {
          id: "tayoma-hotel",
          company: "Tayoma Hotel",
          location: "Thamel, Kathmandu",
          position: "Assistant Manager",
          period: "2001-2003",
          description:
            "Assisted in managing hotel operations with a focus on improving service delivery and guest experience. Implemented new booking and inventory management systems that improved operational efficiency.",
          image: "/hotel tayoma.jpg",
        },
        {
          id: "prince-guest",
          company: "Prince Guest House",
          location: "Thamel, Kathmandu",
          position: "Front Office Supervisor",
          period: "1999-2001",
          description:
            "Supervised front office operations including reservations, check-in/check-out procedures, and guest services. Trained and mentored junior staff in customer service excellence.",
          image: "/prince guest house.jpg",
        },
        {
          id: "mezman",
          company: "Mezman Dance & Bar",
          location: "Putalisadak, Kathmandu",
          position: "Venue Manager",
          period: "1998-1999",
          description:
            "Managed all aspects of venue operations including staff scheduling, inventory management, and event coordination. Increased venue bookings by 40% through strategic marketing initiatives.",
          image: "/dance bar.jpg",
        },
        {
          id: "moonlight",
          company: "Moonlight Resort",
          location: "Lakeside, Pokhara",
          position: "Hospitality Consultant",
          period: "1997-1998",
          description:
            "Provided consulting services for resort operations, staff training, and service quality improvement. Developed and implemented standard operating procedures that enhanced guest experience and operational efficiency.",
          image: "/hotel-moonlight-resort.jpg",
        },
      ],
    },
    {
      id: "manpower",
      title: "Manpower & Agency",
      icon: <Users className="h-5 w-5" />,
      items: [
        {
          id: "sharma-travels",
          company: "Sharma Travels",
          location: "Lazimpat, Kathmandu",
          position: "Travel Consultant",
          period: "2008-2010",
          description:
            "Provided comprehensive travel consulting services for domestic and international clients. Specialized in coordinating travel arrangements for business professionals and managing corporate accounts.",
          image: "/sharma-tours-travels.jpg",
        },
        {
          id: "caravan-manpower",
          company: "Caravan Manpower International",
          location: "Kalanki, Kathmandu",
          position: "Operations Director",
          period: "2010-2012",
          description:
            "Directed all operational aspects of an international manpower agency. Facilitated employment opportunities abroad for Nepalese workers and ensured compliance with international labor standards and regulations.",
          image: "/caravan manpower.jpeg",
        },
        {
          id: "my-manpower",
          company: "My Manpower",
          location: "Kings Way, Kathmandu",
          position: "Senior Recruitment Specialist",
          period: "2012-2014",
          description:
            "Led recruitment initiatives for international placements. Developed and maintained relationships with employers across multiple countries and industries to create employment opportunities.",
          image:
            "https://play-lh.googleusercontent.com/Ogau1kD5rbmxi4URV_n8-koMpIVHYlWA9LvzkaxvTwAkbkzHFzkFGRizABGcLeNqww",
        },
        {
          id: "shuvo-agency",
          company: "Shuvo Agency Pvt. Ltd.",
          location: "Kings Way, Radhikapur, Rani, Kakarvitta",
          position: "Customs Clearing Agent",
          period: "2014-2015",
          description:
            "Managed customs clearance processes for international shipments. Ensured compliance with customs regulations and facilitated efficient movement of goods across borders.",
          image: "/caravan manpower.jpeg",
        },
        {
          id: "unity-life",
          company: "Unity Life International",
          location: "Lagankhel, Lalitpur",
          position: "Business Development Manager",
          period: "2015-2016",
          description:
            "Spearheaded business development initiatives and strategic partnerships. Expanded the organization's reach and impact through innovative programs and collaborations.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB1M1lLC3PViqssx-tW8yqICCVNWI0UcDdJA&s",
        },
        {
          id: "green-hope",
          company: "Green Hope International",
          location: "Bijulibazar, Kathamdu",
          position: "Program Director",
          period: "2016-2017",
          description:
            "Directed program implementation and management. Oversaw multiple initiatives focused on sustainable development and community empowerment.",
          image:
            "https://media.licdn.com/dms/image/v2/C4D03AQHH9x4tcyqMfw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517255987930?e=1750291200&v=beta&t=_9TG6Fpl9FT3X_x33YVxrPSJpJjyhTqzbpvc0yoLBMs",
        },
        {
          id: "heramba",
          company: "Heramba International",
          location: "Sinamangal, Kathmandu",
          position: "International Relations Manager",
          period: "2017-2018",
          description:
            "Managed international partnerships and collaborations. Facilitated cross-border initiatives and represented the organization in international forums and negotiations.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRCIEcyY3dO6YA_vy5sC54u-Yv-U6WWhr4lw&s",
        },
        {
          id: "iboss",
          company: "I Boss Global International",
          location: "Chuchepati, Kathmandu",
          position: "Executive Director",
          period: "2018-2020",
          description:
            "Led overall organizational strategy and operations. Responsible for business development, stakeholder relations, and ensuring alignment with organizational mission and values.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdwle53J4Mv9bFxvQKhq0T0TuVPpgcmvKezA&s",
        },
        {
          id: "global-meta",
          company: "Meta Global Multi Trade Pvt. Ltd.",
          location: "in Gongabu Tokiyo Tole, Kathmandu",
          position: "Product Coordinator",
          period: "",
          description:
            "Based in Gongabu Tokiyo Tole, Meta Global Multi Trade is a dynamic company engaged in export, import, and trade of all kinds of goods, including food supplements.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB1M1lLC3PViqssx-tW8yqICCVNWI0UcDdJA&s",
        },
      ],
    },
    {
      id: "media",
      title: "Media",
      icon: <Tv className="h-5 w-5" />,
      items: [
        {
          id: "dharma-tv",
          company: "Dharma Television",
          location: "Jorpati, Kathmandu",
          position: "Program Presenter",
          period: "2007-2009",
          description:
            "Hosted and presented cultural and social affairs programs focused on indigenous communities and their heritage. Conducted interviews with community leaders, activists, and policymakers on issues related to indigenous rights and cultural preservation.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdYysfqrvalS-TerkBDcijeup1P4ez5WSPkg&s",
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-[#1F2833]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-[#45A29E]/10 dark:bg-[#66FCF1]/10 text-[#45A29E] dark:text-[#66FCF1] font-medium text-sm mb-4">
            Career Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2833] dark:text-white mb-6">
            Professional Experience
          </h2>
          <p className="mt-4 text-lg text-[#1F2833]/80 dark:text-[#C5C6C7]/80 max-w-3xl">
            My career spans multiple industries including hospitality, media,
            and manpower, where I've developed expertise in operations
            management, client relations, and strategic leadership.
          </p>
        </div>

        <div>
          <Tabs defaultValue="hospitality" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              {experienceCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 px-4 py-2 data-[state=active]:bg-[#45A29E] dark:data-[state=active]:bg-[#66FCF1] data-[state=active]:text-white dark:data-[state=active]:text-[#1F2833]"
                >
                  {category.icon}
                  <span className="hidden sm:inline">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {experienceCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-0"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => openDialog(item)}
                      className="cursor-pointer"
                    >
                      <Card className="hover:shadow-lg transition-all duration-300 bg-white dark:bg-[#0B0C10]/80 border border-[#45A29E]/20 dark:border-[#66FCF1]/20 hover:border-[#45A29E]/50 dark:hover:border-[#66FCF1]/50 h-full">
                        <CardContent className="p-6">
                          <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-[#66FCF1]/10 flex items-center justify-center mb-4 p-1 border-2 border-[#45A29E]/30 dark:border-[#66FCF1]/30">
                              <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.company}
                                className="w-full h-full rounded-full object-cover"
                              />
                            </div>
                            <h3 className="font-semibold text-lg text-[#1F2833] dark:text-[#C5C6C7] mb-1">
                              {item.company}
                            </h3>
                            <p className="text-sm text-[#1F2833]/70 dark:text-[#C5C6C7]/70 mb-3">
                              {item.position}
                            </p>
                            <div className="w-16 h-1 bg-[#45A29E] dark:bg-[#66FCF1] mb-3 rounded-full opacity-70"></div>
                            <p className="text-sm text-[#1F2833]/80 dark:text-[#C5C6C7]/80 line-clamp-2">
                              {item.location}
                            </p>
                            <p className="text-sm font-medium text-[#45A29E] dark:text-[#66FCF1] mt-2">
                              {item.period}
                            </p>
                            <Button
                              className="mt-4 bg-[#45A29E] dark:bg-[#66FCF1] hover:bg-[#45A29E]/80 dark:hover:bg-[#66FCF1]/80 text-white dark:text-[#1F2833]"
                              size="sm"
                            >
                              View Details
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={closeDialog}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-white dark:bg-[#1F2833] rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#45A29E]/20 dark:from-[#66FCF1]/20 to-transparent"></div>

                  <div className="p-6 flex justify-end">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={closeDialog}
                      className="rounded-full h-8 w-8 bg-white dark:bg-[#0B0C10] shadow-md hover:bg-[#45A29E]/10 dark:hover:bg-[#66FCF1]/10 z-10"
                    >
                      <X className="h-4 w-4 text-[#45A29E] dark:text-[#66FCF1]" />
                    </Button>
                  </div>

                  <div className="px-6 pb-6 -mt-4">
                    <div className="flex flex-col items-center mb-6">
                      <div className="w-20 h-20 rounded-full border-4 border-[#45A29E] dark:border-[#66FCF1] bg-white dark:bg-[#0B0C10] p-1 mb-4">
                        <img
                          src={selectedItem.image || "/placeholder.svg"}
                          alt={selectedItem.company}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <h2 className="text-2xl font-bold text-center text-[#1F2833] dark:text-white mb-1">
                        {selectedItem.company}
                      </h2>
                      <p className="text-lg text-[#45A29E] dark:text-[#66FCF1] font-medium mb-2">
                        {selectedItem.position}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-[#1F2833]/70 dark:text-[#C5C6C7]/70">
                        <Calendar className="h-4 w-4" />
                        <span>{selectedItem.period}</span>
                      </div>
                    </div>

                    <div className="mb-6 flex items-center justify-center">
                      <div className="px-4 py-2 bg-[#45A29E]/10 dark:bg-[#66FCF1]/10 rounded-full flex items-center gap-2 text-sm text-[#45A29E] dark:text-[#66FCF1]">
                        <MapPin className="h-4 w-4" />
                        <span>{selectedItem.location}</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold flex items-center gap-2 mb-3 text-[#1F2833] dark:text-white">
                          <Briefcase className="h-5 w-5 text-[#45A29E] dark:text-[#66FCF1]" />
                          Responsibilities & Achievements
                        </h3>
                        <div className="bg-[#F5F5F5] dark:bg-[#0B0C10] p-4 rounded-lg">
                          <p className="text-[#1F2833]/80 dark:text-[#C5C6C7]/90 leading-relaxed">
                            {selectedItem.description}
                          </p>
                        </div>
                      </div>

                      <div className="bg-[#45A29E]/5 dark:bg-[#66FCF1]/5 rounded-lg p-4">
                        <h3 className="font-medium text-[#45A29E] dark:text-[#66FCF1] mb-2">
                          Key Skills Utilized
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Leadership",
                            "Operations Management",
                            "Team Building",
                            "Client Relations",
                            "Strategic Planning",
                          ].map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white dark:bg-[#0B0C10] text-sm rounded-full text-[#1F2833]/80 dark:text-[#C5C6C7]/80 border border-[#45A29E]/20 dark:border-[#66FCF1]/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
