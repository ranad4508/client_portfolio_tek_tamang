"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Calendar } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const educationTimeline = [
    {
      year: "1992",
      degree: "School Leaving Certificate (SLC)",
      institution: "Nandi Ratri School",
      location: "Naxal, Kathmandu",
      description:
        "Completed secondary education with a focus on building a strong academic foundation across core subjects.",
      icon: (
        <GraduationCap className="h-6 w-6 text-[#45A29E] dark:text-[#66FCF1]" />
      ),
    },
    {
      year: "1994",
      degree: "Intermediate Level",
      institution: "Hira Lal Multiple College",
      location: "Chhetrapati, Kathmandu",
      description:
        "Completed higher secondary education with a focus on Management and Business Studies.",
      icon: <BookOpen className="h-6 w-6 text-[#45A29E] dark:text-[#66FCF1]" />,
    },
    {
      year: "1997",
      degree: "Bachelor's Degree in Management",
      institution: "Hira Lal Multiple College",
      location: "Chhetrapati, Kathmandu",
      description:
        "Earned a comprehensive degree in Management, developing expertise in organizational leadership, business principles, and strategic planning.",
      icon: (
        <GraduationCap className="h-6 w-6 text-[#45A29E] dark:text-[#66FCF1]" />
      ),
    },
    {
      year: "2000-Present",
      degree: "Professional Development",
      institution: "Various Institutions",
      location: "Nepal and International",
      description:
        "Continuously engaged in professional development through workshops, seminars, and training programs related to business management, leadership, and advocacy.",
      icon: <Calendar className="h-6 w-6 text-[#45A29E] dark:text-[#66FCF1]" />,
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title">Education & Qualifications</h2>
          <p className="mt-4 text-lg text-[#1F2833]/80 dark:text-[#C5C6C7]/80 max-w-3xl">
            My educational journey has equipped me with the knowledge, skills,
            and theoretical foundation necessary to excel in my professional
            endeavors and make meaningful contributions to society.
          </p>
        </motion.div>

        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#45A29E]/30 dark:bg-[#66FCF1]/30 transform md:translate-x-px"></div>

          {educationTimeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-24 ${
                index % 2 === 0
                  ? "md:pr-12 md:text-right md:ml-0 md:mr-auto"
                  : "md:pl-12 md:ml-auto md:mr-0"
              } w-full md:w-1/2 pl-12 md:pl-0`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-auto md:right-0 top-0 w-8 h-8 rounded-full bg-[#45A29E] dark:bg-[#66FCF1] flex items-center justify-center transform translate-x-[-50%] md:translate-x-[50%]">
                {item.icon}
              </div>

              {/* Mobile timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-[#45A29E]/30 dark:bg-[#66FCF1]/30 md:hidden"></div>

              {/* Content */}
              <div className="bg-white dark:bg-[#0B0C10]/80 p-6 rounded-lg border border-[#45A29E]/20 dark:border-[#66FCF1]/20 shadow-md">
                <div className="inline-block bg-[#66FCF1]/10 px-3 py-1 rounded-full mb-3">
                  <p className="text-[#45A29E] dark:text-[#66FCF1] text-sm font-medium">
                    {item.year}
                  </p>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#1F2833] dark:text-[#C5C6C7]">
                  {item.degree}
                </h3>
                <h4 className="font-medium text-[#45A29E] dark:text-[#66FCF1] mb-1">
                  {item.institution}
                </h4>
                <p className="text-[#1F2833]/70 dark:text-[#C5C6C7]/70 mb-3">
                  {item.location}
                </p>
                <p className="text-[#1F2833]/80 dark:text-[#C5C6C7]/80">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
