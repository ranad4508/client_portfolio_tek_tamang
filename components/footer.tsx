"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F2833] text-[#C5C6C7] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <Link href="#home" className="text-2xl font-bold text-[#66FCF1]">
              Tek<span className="text-[#45A29E]">Tamang</span>
            </Link>
            <p className="mt-2 text-sm text-[#C5C6C7]/70 max-w-md">
              Passionate advocate for indigenous rights and social justice, with
              extensive experience across multiple industries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            <a
              href="https://www.facebook.com/share/1BW2CsNuh2/"
              className="w-10 h-10 rounded-full bg-[#0B0C10] flex items-center justify-center hover:bg-[#66FCF1] hover:text-[#1F2833] transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/9779841319872"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#0B0C10] flex items-center justify-center hover:bg-[#66FCF1] hover:text-[#1F2833] transition-colors"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-[#C5C6C7]/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-[#C5C6C7]/70">
            &copy; {currentYear} Tek Bahadur Tamang. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0 flex flex-wrap gap-4 justify-center">
            <Link
              href="#home"
              className="text-sm text-[#C5C6C7]/70 hover:text-[#66FCF1]"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm text-[#C5C6C7]/70 hover:text-[#66FCF1]"
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-sm text-[#C5C6C7]/70 hover:text-[#66FCF1]"
            >
              Experience
            </Link>
            <Link
              href="#contact"
              className="text-sm text-[#C5C6C7]/70 hover:text-[#66FCF1]"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
