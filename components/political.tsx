"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Vote, Scale, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Political() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const advocacyAreas = [
    {
      title: "Indigenous Rights",
      description: "Advocating for the recognition and protection of indigenous peoples' rights and cultural heritage.",
      icon: <Heart className="h-6 w-6 text-[#45A29E] dark:text-[#66FCF1]" />,
    },
    {
      title: "Social Justice",
      description:
        "Working towards creating a more equitable society where all individuals have access to opportunities and resources.",
      icon: <Scale className="h-6 w-6 text-[#45A29E] dark:text-[#66FCF1]" />,
    },
    {
      title: "Political Inclusion",
      description:
        "Promoting greater representation and participation of marginalized communities in political processes.",
      icon: <Vote className="h-6 w-6 text-[#45A29E] dark:text-[#66FCF1]" />,
    },
  ]

  return (
    <section id="political" className="py-20">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title">Political & Indigenous Advocacy</h2>
          <p className="mt-4 text-lg text-[#1F2833]/80 dark:text-[#C5C6C7]/80 max-w-3xl">
            Since 1990, I've been actively involved in politics, passionately advocating for indigenous rights and
            inclusion for all marginalized communities in Nepal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {advocacyAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="card-hover bg-white dark:bg-[#0B0C10]/80 border border-[#45A29E]/20 dark:border-[#66FCF1]/20 h-full">
                <CardContent className="p-6">
                  <div className="rounded-full w-12 h-12 bg-[#66FCF1]/10 flex items-center justify-center mb-4">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#1F2833] dark:text-[#C5C6C7]">{area.title}</h3>
                  <p className="text-[#1F2833]/70 dark:text-[#C5C6C7]/70">{area.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-xl italic text-[#1F2833]/80 dark:text-[#C5C6C7]/80 max-w-3xl mx-auto">
            "My heart beats for justice, equality, and empowerment for all marginalized communities in Nepal."
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
