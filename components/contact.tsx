"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-[#45A29E] dark:text-[#66FCF1]" />,
      title: "Email",
      value: "iamtek2027@gmail.com",
      link: "mailto:iamtek2027@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-[#45A29E] dark:text-[#66FCF1]" />,
      title: "WhatsApp",
      value: "+977 9841319872",
      link: "https://wa.me/9779841319872",
    },
    {
      icon: <MapPin className="h-6 w-6 text-[#45A29E] dark:text-[#66FCF1]" />,
      title: "Location",
      value: "Kathmandu, Nepal",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-[#1F2833]/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title">Contact Me</h2>
          <p className="mt-4 text-lg text-[#1F2833]/80 dark:text-[#C5C6C7]/80 max-w-3xl">
            I welcome opportunities for collaboration and professional
            engagement. Please feel free to reach out through any of the
            channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="bg-white dark:bg-[#0B0C10]/80 border border-[#45A29E]/20 dark:border-[#66FCF1]/20">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-[#1F2833] dark:text-[#C5C6C7]"
                      >
                        Full Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        className="border-[#45A29E]/30 dark:border-[#66FCF1]/30 focus:border-[#45A29E] dark:focus:border-[#66FCF1]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-[#1F2833] dark:text-[#C5C6C7]"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="border-[#45A29E]/30 dark:border-[#66FCF1]/30 focus:border-[#45A29E] dark:focus:border-[#66FCF1]"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-[#1F2833] dark:text-[#C5C6C7]"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Enter the subject of your message"
                      className="border-[#45A29E]/30 dark:border-[#66FCF1]/30 focus:border-[#45A29E] dark:focus:border-[#66FCF1]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-[#1F2833] dark:text-[#C5C6C7]"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry or proposal"
                      rows={5}
                      className="border-[#45A29E]/30 dark:border-[#66FCF1]/30 focus:border-[#45A29E] dark:focus:border-[#66FCF1]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#45A29E] hover:bg-[#66FCF1] hover:text-[#1F2833] text-white"
                  >
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-white dark:bg-[#0B0C10]/80 border border-[#45A29E]/20 dark:border-[#66FCF1]/20 h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-[#1F2833] dark:text-[#C5C6C7]">
                  Professional Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="rounded-full w-10 h-10 bg-[#66FCF1]/10 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-[#1F2833] dark:text-[#C5C6C7]">
                          {item.title}
                        </h4>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-[#45A29E] dark:text-[#66FCF1] hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-[#1F2833]/70 dark:text-[#C5C6C7]/70">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-[#45A29E]/20 dark:border-[#66FCF1]/20">
                  <p className="text-[#1F2833]/70 dark:text-[#C5C6C7]/70 text-sm">
                    I strive to respond to all inquiries within 24-48 hours. For
                    urgent matters, please contact me directly via WhatsApp.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
