import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Experience from "@/components/experience"
import Travels from "@/components/travels"
import Social from "@/components/social"
import Political from "@/components/political"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0B0C10] text-[#1F2833] dark:text-[#C5C6C7] transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Travels />
      <Social />
      <Political />
      <Contact />
      <Footer />
    </main>
  )
}
