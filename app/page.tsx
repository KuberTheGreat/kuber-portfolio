"use client"

import { useState, useEffect } from "react"
import {
  Github,
  Twitter,
  Mail,
  Phone,
  ChevronDown,
  Code,
  Database,
  Smartphone,
  Server,
  Award,
  GraduationCap,
  User,
  Briefcase,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "education", "achievements", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const skills = {
    languages: ["Solidity", "Rust", "JavaScript", "TypeScript", "Python", "C++"],
    smartContracts: ["Solidity (Ethereum, Sepolia)", "Rust (Solana)"],
    frontend: ["React", "Next.js", "TailwindCSS", "Material UI", "Framer Motion", "Three.js", "A-Frame"],
    backend: ["Node.js", "Express.js", "Ethers.js", "Web3.js", "Wagmi"],
    softSkills: ["Leadership", "Event Management", "Public Speaking", "Teamwork", "Time Management"],
  }

  const projects = [
    {
      title: "GlobexFi - Cross Chain Bond Investment Platform",
      description:
        "GlobexFi is an AI-powered, cross-chain DeFi platform that lets users invest in synthetic government bonds using crypto. Built on Avalanche and deeply integrated with Chainlink (Data Feeds, CCIP, Automation, etc.), it automates portfolio setup, risk management, and yield optimization across chains—bridging TradFi stability with Web3 accessibility.",
      tech: ["Chainlink", "Solidity", "Wagmi", "IPFS", "React", "Blockchain", "Gemini AI", "Vercel"],
      status: "Work in Progress",
    },
    {
      title: "Vogue - Fashion IP Platform",
      description:
        "Designing a decentralized fashion IP platform, enabling creators to tokenize their designs and manage their intellectual property rights on the blockchain.",
      tech: ["Story IP Protocol", "Solidity", "Wagmi", "IPFS", "React", "Blockchain", "Aeneid", "Vercel"],
      status: "Completed",
    },
    {
      title: "NFT Event Rewarding Platform",
      description:
        "A decentralized event management dApp using Solidity, featuring NFT-based access control, ERC20 fan tokens, and React + MetaMask integration for seamless event creation and participation.",
      tech: ["Blockchain", "Solidity", "NFT", "React", "IPFS", "Gemini AI"],
      status: "Completed",
    },
    {
      title: "Grievance Redressal System",
      description:
        "Developed an AI-powered grievance redressal system using FastAPI and LangChain, integrating a classification model to auto-route public complaints to the correct department via a conversational chatbot interface.",
      tech: ["Gemini AI", "React", "FastAPI", "LangChain"],
      status: "Completed",
    },
  ]

  const achievements = [
    {
      title: "1st Rank in React Rumble",
      description: "WEB2.0 event of IIIT Lucknow",
      icon: Award,
    },
    {
      title: "2nd Position in HackOFiesta 6.1",
      description: "Among 25+ teams at IIIT Lucknow",
      icon: Award,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">Kuber Khandare</div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Education", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                    activeSection === item.toLowerCase() ? "text-purple-400" : "text-white/80"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">Kuber Khandare</h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-8 animate-fade-in-delay">
              Blockchain Developer & AI Enthusiast
            </p>
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
              Computer Science & AI student at IIIT Lucknow, passionate about building decentralized applications and
              innovative solutions using cutting-edge technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-delay-3">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full"
              >
                Get In Touch
              </Button>
            </div>
            <div className="flex justify-center space-x-6 animate-fade-in-delay-4">
              <a
                href="https://github.com/KuberTheGreat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-purple-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://x.com/kuberkhandare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-purple-400 transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="mailto:kuberkhandare@gmail.com"
                className="text-white/80 hover:text-purple-400 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/60" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center justify-center gap-3">
              <User className="text-purple-400" />
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-lg text-white/80 mb-6">
                  I'm a passionate Computer Science and AI student at IIIT Lucknow with a strong focus on blockchain
                  development and artificial intelligence. With a CGPA of 9.05, I've been consistently excelling in my
                  academic journey while building innovative projects.
                </p>
                <p className="text-lg text-white/80 mb-6">
                  My expertise spans across multiple domains including smart contract development, full-stack web
                  development, and AI integration. I'm particularly interested in DeFi applications and decentralized
                  systems.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="bg-purple-600/20 text-purple-200">
                    Blockchain Developer
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600/20 text-blue-200">
                    AI Enthusiast
                  </Badge>
                  <Badge variant="secondary" className="bg-green-600/20 text-green-200">
                    Full-Stack Developer
                  </Badge>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-2">Current Focus</h3>
                  <p className="text-white/70">
                    Building decentralized applications and exploring the intersection of AI and blockchain technology.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-2">Goals</h3>
                  <p className="text-white/70">
                    Contributing to the Web3 ecosystem and developing innovative solutions for real-world problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
              <Code className="text-purple-400" />
              Skills & Technologies
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Code className="text-purple-400" size={20} />
                    Programming Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-purple-600/20 text-purple-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Database className="text-blue-400" size={20} />
                    Smart Contracts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.smartContracts.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-blue-600/20 text-blue-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Smartphone className="text-green-400" size={20} />
                    Frontend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-green-600/20 text-green-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Server className="text-orange-400" size={20} />
                    Backend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-orange-600/20 text-orange-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10 md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <User className="text-pink-400" size={20} />
                    Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.softSkills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-pink-600/20 text-pink-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
              <Briefcase className="text-purple-400" />
              Featured Projects
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                      <Badge
                        variant={project.status === "Completed" ? "default" : "secondary"}
                        className={
                          project.status === "Completed"
                            ? "bg-green-600/20 text-green-200"
                            : "bg-yellow-600/20 text-yellow-200"
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70 mb-4 text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-purple-400/30 text-purple-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
              <GraduationCap className="text-purple-400" />
              Education
            </h2>
            <div className="space-y-6">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">
                    Bachelor of Technology - Computer Science and Artificial Intelligence
                  </CardTitle>
                  <CardDescription className="text-purple-200">
                    Indian Institute of Information Technology, Lucknow • 2024 - 2028
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white/80">
                      CGPA: <span className="text-green-400 font-semibold">9.05</span>
                    </span>
                  </div>
                  <p className="text-white/70">
                    <strong>Relevant Courses:</strong> Object Oriented Programming, Data Structures, Web Design,
                    Computer Organisation and Architecture, Databases
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Class XII</CardTitle>
                    <CardDescription className="text-purple-200">
                      Kailashvasi Dashrath Baba Uchh Madhyamik Vidyalaya, Jalna • 2022 - 2024
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-white/80">
                      Percentage: <span className="text-green-400 font-semibold">84.5%</span>
                    </span>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Class X</CardTitle>
                    <CardDescription className="text-purple-200">
                      My Rich Dad's Academy, Jalna • 2012 - 2022
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-white/80">
                      Percentage: <span className="text-green-400 font-semibold">98%</span>
                    </span>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
              <Award className="text-purple-400" />
              Achievements & Experience
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-3">
                      <achievement.icon className="text-yellow-400" size={24} />
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70 text-base">{achievement.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-white/5 backdrop-blur-sm border-white/10 md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <User className="text-blue-400" size={24} />
                    Volunteer Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-semibold text-white mb-2">HOD - Public Relations for IIITL MUN 2025</h3>
                  <CardDescription className="text-white/70 text-base">
                    Leading outreach, managing communications, and driving delegate engagement to ensure strong
                    participation and event visibility.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center justify-center gap-3">
              <Mail className="text-purple-400" />
              Get In Touch
            </h2>
            <p className="text-xl text-white/80 mb-12">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Mail className="text-purple-400 mx-auto mb-4" size={32} />
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:kuberkhandare@gmail.com"
                    className="text-purple-200 hover:text-purple-400 transition-colors"
                  >
                    kuberkhandare@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Phone className="text-green-400 mx-auto mb-4" size={32} />
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <a href="tel:+0000000000" className="text-green-200 hover:text-green-400 transition-colors">
                    +91-0000000000
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Github className="text-gray-400 mx-auto mb-4" size={32} />
                  <h3 className="text-white font-semibold mb-2">GitHub</h3>
                  <a
                    href="https://github.com/KuberTheGreat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-gray-400 transition-colors"
                  >
                    KuberTheGreat
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Twitter className="text-blue-400 mx-auto mb-4" size={32} />
                  <h3 className="text-white font-semibold mb-2">Twitter</h3>
                  <a
                    href="https://x.com/kuberkhandare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-blue-400 transition-colors"
                  >
                    @kuberkhandare
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/40 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60">© 2025 Kuber Khandare.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.2s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.4s both;
        }
        
        .animate-fade-in-delay-3 {
          animation: fade-in 1s ease-out 0.6s both;
        }
        
        .animate-fade-in-delay-4 {
          animation: fade-in 1s ease-out 0.8s both;
        }
      `}</style>
    </div>
  )
}
