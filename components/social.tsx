"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Users, Building2, Landmark } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Social() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const socialInvolvements = [
    {
      organization: "Lions Horizon Club International District 325-A",
      role: "Secretary, Chairman, Zone Chairman",
      period: "2001–2010",
      icon: <Award className="h-6 w-6 text-[#45A29E] dark:text-[#66FCF1]" />,
    },
    {
      organization: "Mukti Bal Kalyan Kendra",
      location: "Naya Bazar",
      role: "Treasurer",
      icon: <Users className="h-6 w-6 text-[#45A29E] dark:text-[#66FCF1]" />,
    },
    {
      organization: "Aahana Nepal Foundation",
      location: "Lazimpat",
      role: "Secretary",
      icon: <Building2 className="h-6 w-6 text-[#45A29E] dark:text-[#66FCF1]" />,
    },
    {
      organization: "Constellation Saving & Credit Cooperative",
      location: "CTL Mall",
      role: "Vice Chairman",
      icon: <Landmark className="h-6 w-6 text-[#45A29E] dark:text-[#66FCF1]" />,
    },
  ]

  return (
    <section id="social" className="py-20 bg-gray-50 dark:bg-[#1F2833]/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title">Social Involvement</h2>
          <p className="mt-4 text-lg text-[#1F2833]/80 dark:text-[#C5C6C7]/80 max-w-3xl">
            I'm deeply committed to social service and have proudly served with several organizations dedicated to
            making a positive impact in our communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {socialInvolvements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="card-hover bg-white dark:bg-[#0B0C10]/80 border border-[#45A29E]/20 dark:border-[#66FCF1]/20 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full w-12 h-12 bg-[#66FCF1]/10 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#1F2833] dark:text-[#C5C6C7]">{item.organization}</h3>
                      {item.location && (
                        <p className="text-[#1F2833]/70 dark:text-[#C5C6C7]/70 text-sm">{item.location}</p>
                      )}
                      <div className="mt-2 inline-block bg-[#66FCF1]/10 px-3 py-1 rounded-full">
                        <p className="text-[#45A29E] dark:text-[#66FCF1] text-sm font-medium">{item.role}</p>
                      </div>
                      {item.period && <p className="mt-2 text-[#1F2833]/70 dark:text-[#C5C6C7]/70">{item.period}</p>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-white dark:bg-[#0B0C10]/80 p-8 rounded-lg border border-[#45A29E]/20 dark:border-[#66FCF1]/20"
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#1F2833] dark:text-[#C5C6C7]">
            Political & Indigenous Advocacy
          </h3>
          <p className="text-[#1F2833]/80 dark:text-[#C5C6C7]/80">
            Since 1990, I've been actively involved in politics, passionately advocating for indigenous rights and
            inclusion. My heart beats for justice, equality, and empowerment for all marginalized communities in Nepal.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
