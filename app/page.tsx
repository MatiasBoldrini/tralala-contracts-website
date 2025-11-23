"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Zap, Menu, X, GraduationCap, Code2, Rocket } from "lucide-react"
import { useState } from "react"

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const hoverEffect = {
  scale: 1.02,
  translateY: -4,
  boxShadow: "8px 8px 0px 0px #000000",
  transition: { duration: 0.2 },
}

const tapEffect = {
  scale: 0.98,
  translateY: 0,
  boxShadow: "0px 0px 0px 0px #000000",
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex items-center gap-1">
                <span className="font-black text-black text-xl tracking-tighter font-sans">TRALALA</span>
                <div className="bg-primary px-2 py-1 border-2 border-black">
                  <span className="font-black text-white text-xl tracking-tighter font-sans">CONTRACTS</span>
                </div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 font-bold font-body">
              {["Services", "Roadmap", "Team"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:underline decoration-4 underline-offset-4 decoration-primary hover:text-primary transition-all"
                >
                  {item}
                </Link>
              ))}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "4px 4px 0px 0px #000000" }}
                whileTap={{ scale: 0.95, boxShadow: "0px 0px 0px 0px #000000" }}
                className="bg-accent px-6 py-2 border-3 border-black font-bold text-black shadow-[4px_4px_0px_0px_#000000] font-body"
              >
                CONTACT
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 border-3 border-black hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden border-t-4 border-black bg-primary"
          >
            <div className="p-4 space-y-4 flex flex-col items-center font-bold text-white text-xl font-body">
              {["Services", "Roadmap", "Team", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="w-full text-center py-3 border-b-2 border-white/20 hover:bg-white hover:text-black transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative pt-8 pb-16 lg:pt-12 lg:pb-20 border-b-4 border-black overflow-hidden" style={{ paddingBottom: "200px", paddingTop: "110px" }}  >
          {/* Abstract Background Grid */}
          <div
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(#000 2px, transparent 2px)",
              backgroundSize: "30px 30px",
            }}
          ></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="text-center lg:text-left space-y-8"
              >
                <motion.div
                  variants={fadeInUp}
                  className="inline-block bg-accent border-3 border-black px-4 py-1 shadow-[4px_4px_0px_0px_#000000] rotate-2"
                >
                  <span className="font-bold text-sm uppercase tracking-widest font-body">Web3 for Students</span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl lg:text-6xl font-black tracking-tighter leading-none font-sans"
                >
                  <span className="text-black">SMART</span>
                  <br />
                  <span className="inline-block bg-primary px-4 py-2 border-4 border-black text-white my-2">
                    CONTRACTS.
                  </span>
                  <br />
                  <span className="text-black">NO CODE.</span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg lg:text-xl font-medium text-gray-800 max-w-lg mx-auto lg:mx-0 border-l-4 border-accent pl-6 font-body"
                >
                  The easiest way to get into Web3. Deploy your first contract on the blockchain without knowing
                  how to code. Ideal for students and universities.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Link
                    href="https://tralala-contracts.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white px-8 py-4 text-lg font-bold border-4 border-black shadow-[6px_6px_0px_0px_#000000] flex items-center justify-center gap-3 group font-sans"
                  >
                    DEPLOY NOW{" "}
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                  </Link>
                  <motion.button
                    whileHover={hoverEffect}
                    whileTap={tapEffect}
                    className="bg-white text-black px-8 py-4 text-lg font-bold border-4 border-black shadow-[6px_6px_0px_0px_#000000] font-sans"
                  >
                    VIEW DEMO
                  </motion.button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ x: 100, opacity: 0, rotate: 5 }}
                animate={{ x: 0, opacity: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 50, delay: 0.3 }}
                className="relative"
              >
                <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-full">
                  {/* Decorative elements behind video */}
                  <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 border-4 border-black rounded-3xl"></div>
                  <div className="absolute inset-0 bg-white border-4 border-black rounded-3xl overflow-hidden shadow-inner">
                    <video src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tralala-5j6hZOskwSrKk4irvdP8jM2cCgvek0.mp4" className="w-full h-full object-cover" autoPlay muted loop playsInline />
                  </div>
                  {/* Floating Badge */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
                    className="absolute -bottom-6 -left-6 bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_#000000] rotate-[-6deg] z-20"
                  >
                    <p className="font-black text-xl text-center leading-none font-sans">
                      100%
                      <br />
                      <span className="text-primary">LOW CODE</span>
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Marquee Section */}


        {/* Features Grid */}
        <section className="py-16 px-4 bg-white border-b-4 border-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4 inline-block font-sans">
                <span className="text-black">YOUR FUTURE IN </span>
                <span className="bg-primary text-white px-4 py-2 border-4 border-black">WEB3</span>
              </h2>
              <p className="text-lg font-bold text-gray-500 mt-4 font-body">More opportunities, less code.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Code2 size={48} />,
                  title: "Real Low Code",
                  desc: "Drag, drop and deploy. You don't need to be a Solidity expert to launch your idea.",
                  color: "bg-accent",
                },
                {
                  icon: <GraduationCap size={48} />,
                  title: "Scholarships and Funding",
                  desc: "We connect your university project with institutions that want to finance you.",
                  color: "bg-primary",
                  textColor: "text-white",
                },
                {
                  icon: <Rocket size={48} />,
                  title: "Launch Fast",
                  desc: "From zero to deployed Smart Contract in minutes. Validate your idea instantly.",
                  color: "bg-accent",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ translateY: -8, boxShadow: "8px 8px 0px 0px #000000" }}
                  className={`border-4 border-black p-8 ${feature.color} shadow-[4px_4px_0px_0px_#000000] relative overflow-hidden group`}
                >
                  <div className="absolute -right-8 -top-8 bg-black/10 w-32 h-32 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="bg-white w-20 h-20 border-4 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_#000000]">
                      {feature.icon}
                    </div>
                    <h3
                      className={`text-2xl font-black mb-4 leading-none font-sans ${feature.textColor || "text-black"}`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`font-bold text-lg opacity-90 leading-tight font-body ${feature.textColor || "text-black"}`}
                    >
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="py-16 px-4 bg-white border-b-4 border-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4 font-sans">
                <span className="text-black">OUR </span>
                <span className="bg-primary text-white px-4 py-2 border-4 border-black">ROADMAP</span>
              </h2>
              <p className="text-lg font-bold text-gray-500 mt-4 font-body">The journey to the future of Web3</p>
            </div>

            <div className="space-y-8">
              {[
                {
                  quarter: "Q1 2026",
                  title: "Beta Launch",
                  desc: "Low-code platform available for early users. Free testnet deployment.",
                  status: "Coming soon",
                  color: "bg-accent",
                  textColor: "text-black",
                },
                {
                  quarter: "Q2 2026",
                  title: "University Program",
                  desc: "Alliances with 10+ universities. Scholarships and workshops for students.",
                  status: "Planned",
                  color: "bg-primary",
                  textColor: "text-white",
                },
                {
                  quarter: "Q3 2026",
                  title: "Mainnet Launch",
                  desc: "Production deployment. Integration with multiple blockchains (Ethereum, Polygon, Solana).",
                  status: "Planned",
                  color: "bg-accent",
                  textColor: "text-black",
                },
                {
                  quarter: "Q4 2026",
                  title: "Templates Marketplace",
                  desc: "Community library of smart contracts. Monetization for creators.",
                  status: "Planned",
                  color: "bg-primary",
                  textColor: "text-white",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`${item.color} border-4 border-black p-8 shadow-[6px_6px_0px_0px_#000000] hover:shadow-[8px_8px_0px_0px_#000000] transition-all`}
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex-1">
                      <div
                        className={`inline-block bg-black ${item.textColor === "text-white" ? "text-white" : "text-accent"} px-4 py-1 border-2 border-black font-black mb-4 font-sans`}
                      >
                        {item.quarter}
                      </div>
                      <h3 className={`text-2xl font-black mb-2 font-sans ${item.textColor}`}>{item.title}</h3>
                      <p className={`font-bold opacity-90 font-body ${item.textColor}`}>{item.desc}</p>
                    </div>
                    <div
                      className={`px-4 py-2 border-3 border-black font-black ${item.textColor === "text-white" ? "bg-black text-white" : "bg-white text-black"} font-body`}
                    >
                      {item.status}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 px-4 bg-white border-b-4 border-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4 font-sans">
                <span className="text-black">OUR </span>
                <span className="bg-primary text-white px-4 py-2 border-4 border-black">TEAM</span>
              </h2>
              <p className="text-lg font-bold text-black mt-4 font-body">The sharks behind Tralala</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                              {
                                name: "Ticiana Angelucci",
                                role: "Blockchain Developer",
                                desc: "Blockchain Developer & Boca Juniors Fan",
                                image: "/Ticiangelucci.png",
                                color: "bg-accent",
                              },
                              {
                                name: "Matías Boldrini",
                                role: "UX & Product",
                                desc: "UX and Product Engineering",
                                image: "/Matias.png",
                                color: "bg-primary",
                                textColor: "text-white",
                              },
                              {
                                name: "Arturo Marín",
                                role: "Blockchain & ML",
                                desc: "Blockchain and ML dev",
                                image: "/Artur.png",
                                color: "bg-accent",
                              },
                              {
                                name: "Leo Cagliero",
                                role: "Financial & Web3 Strategy",
                                desc: "Financial & Management Strategy | Web3 Dev",
                                image: "/leo_cagliero.png",
                                color: "bg-primary",
                                textColor: "text-white",
                              },
                            ].map((member, idx) => (                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="group cursor-pointer"
                >
                  <div
                    className={`${member.color} border-4 border-black p-8 shadow-[6px_6px_0px_0px_#000000] group-hover:shadow-[10px_10px_0px_0px_#000000] transition-all`}
                  >
                    <div className="bg-white border-4 border-black w-32 h-32 mx-auto mb-6 flex items-center justify-center shadow-[4px_4px_0px_0px_#000000] overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className={`text-xl font-black mb-2 text-center font-sans ${member.textColor || "text-black"}`}>{member.name}</h3>
                    <p className={`font-bold text-center text-sm leading-tight ${member.textColor || "text-black"} font-body`}>{member.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 border-t-4 border-black">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="font-black text-white text-2xl tracking-tighter font-sans">TRALALA</span>
            <div className="bg-primary px-3 py-1 border-2 border-white">
              <span className="font-black text-white text-2xl tracking-tighter font-sans">CONTRACTS</span>
            </div>
          </div>
          <p className="font-bold text-lg mb-8 text-gray-300 font-body">
            Web3 without code. For students, by sharks.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-8 font-bold font-body">
            <Link href="#services" className="hover:text-accent transition-colors">
              Services
            </Link>
            <Link href="#roadmap" className="hover:text-accent transition-colors">
              Roadmap
            </Link>
            <Link href="#team" className="hover:text-accent transition-colors">
              Team
            </Link>
            <Link href="#contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
          </div>
          <div className="border-t-2 border-white/20 pt-8">
            <p className="font-bold font-body">&copy; 2026 Tralala Contracts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
