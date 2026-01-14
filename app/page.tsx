"use client";

import Link from "next/link"
import {
  ArrowRight,
  Download,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Youtube,
  Code2,
  Database,
  Globe,
  Server,
  Cloud,
  GitBranch,
  Zap,
  Terminal
} from "lucide-react"
import abhi from 'public/abhi.jpg'
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { ContactForm } from "@/components/contact-form"
import { ThemeToggle } from "@/components/theme-toggle"
import { HeroAnimation } from "@/components/hero-animation"
import TypeWriter from "@/components/typewriter";
import Certificates from "@/components/certificates";
import Workshops from "@/components/workshops";
import NameAnimation from "@/components/name-animation";
import { SplashCursor } from "@/components/ui/splash-cursor"
import LoaderOne from "@/components/ui/loader-one"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import RadialOrbitalTimeline from "@/components/ui/radial-orital-timeline"

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // simulate loading time
    return () => clearTimeout(timer);
  }, []);

  const skillsTimelineData = [
    {
      id: 1,
      title: "React",
      date: "2022",
      content: "Building modern, responsive web applications with React and its ecosystem",
      category: "Frontend",
      icon: Code2,
      relatedIds: [2, 4],
      status: "completed" as const,
      energy: 95
    },
    {
      id: 2,
      title: "Next.js",
      date: "2023",
      content: "Server-side rendering and static site generation with Next.js",
      category: "Frontend",
      icon: Globe,
      relatedIds: [1, 5],
      status: "completed" as const,
      energy: 90
    },
    {
      id: 3,
      title: "Node.js",
      date: "2022",
      content: "Backend development with Node.js and Express for scalable APIs",
      category: "Backend",
      icon: Server,
      relatedIds: [4, 5],
      status: "completed" as const,
      energy: 88
    },
    {
      id: 4,
      title: "MongoDB",
      date: "2022",
      content: "NoSQL database design and management with MongoDB",
      category: "Database",
      icon: Database,
      relatedIds: [3, 5],
      status: "completed" as const,
      energy: 85
    },
    {
      id: 5,
      title: "AWS",
      date: "2023",
      content: "Cloud infrastructure and deployment with AWS services",
      category: "Cloud",
      icon: Cloud,
      relatedIds: [2, 3, 6],
      status: "in-progress" as const,
      energy: 75
    },
    {
      id: 6,
      title: "Git",
      date: "2021",
      content: "Version control and collaboration with Git and GitHub",
      category: "Tools",
      icon: GitBranch,
      relatedIds: [1, 2, 3],
      status: "completed" as const,
      energy: 92
    },
    {
      id: 7,
      title: "Docker",
      date: "2023",
      content: "Containerization and deployment with Docker",
      category: "DevOps",
      icon: Terminal,
      relatedIds: [5],
      status: "in-progress" as const,
      energy: 70
    },
    {
      id: 8,
      title: "Python",
      date: "2021",
      content: "Machine learning and backend development with Python",
      category: "Language",
      icon: Zap,
      relatedIds: [4],
      status: "completed" as const,
      energy: 90
    }
  ];

  if (loading) return <LoaderOne />;
  return (
  
    <div className="min-h-screen bg-background">
      
      <SplashCursor/>
      {/* Header */}
      
      <header className="fixed top-0 w-full border-b border-border/40 bg-background/80 backdrop-blur-md z-50">
      <div className="inset-0 rounded-full bg-gradient-to-r from-primary bg-right to-green-600 blur-3xl opacity-20"></div>
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            <span className="text-primary">Abhishek</span>Madhura
          </Link>
          <div className="flex items-center gap-1 md:gap-4">
            <nav className="hidden md:flex gap-6">
              <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#certificates" className="text-sm font-medium hover:text-primary transition-colors">
                Certificates
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
            <ThemeToggle />
            <Button asChild size="sm" variant="outline" className="flex">
              <Link href="/Resume.pdf" download="Resume.pdf"
                     target="_blank">
                Resume  <Download className="ml-1 md:ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container w-full max-w-full pt-24 pb-16 overflow-x-hidden ">
        {/* Hero Section */}
      
        <section className="py-20 md:py-30 flex flex-col md:flex-row items-center gap-10  ">
          
          <div className="flex-1 space-y-6 ">
            
            <h1 className=" text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {/*Building the <span className="text-primary">future</span> with code*/}
             {/*<span className={"text-primary"} >Abhishek </span>GUBBALA*/}
              <NameAnimation/>
            </h1>
            <p className="text-xl text-muted-foreground">
              {/*I'm Abhishek, a computer science student passionate about AI, web development, and solving complex problems.*/}
              <span className="text-3xl font-bold text-primary">I'm</span> <TypeWriter/>
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#projects">View Projects</Link>
              </Button>

            </div>
            <div className="flex gap-4 pt-4">
              <Link
                href="https://github.com/AbhishekMadhura"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/abhishek-madhura"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.instagram.com/official_abhi1_/"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                  href="https://www.youtube.com/@abhiofficial860"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">Youtube</span>
              </Link>
            </div>
          </div>
          <div className="">
          <div className=" rounded-full bg-gradient-to-r from-primary to-green-600 blur-3xl opacity-10"></div>
          
            <img src="/me.png"
            className="shadow-xl rounded-full z-10 w-full max-w-md mx-auto md:mx-0 right-0 h-auto mx-auto"
            // width={520}
            // height={400}
            />
          </div>
          
        </section>
         
        {/* About Section */}
        <section id="about" className="py-16 scroll-mt-20">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-lg">
                <p>
                  I’m a final-year Computer Science student at BVC Engineering College, specializing  web development to build scalable and efficient applications.
                </p>
                <p>
                  Experienced in React, Flask, Firebase, MongoDB and Docker, I develop secure web applications and integrate machine learning models into real-world projects
                  </p>
                <p>
                  Passionate about Full Stack Development, I have worked on Different MERN Stack Projects while actively contributing to open-source projects and hackathons.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4 py-2 relative">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={3}
                    />
                    <div className="text-sm text-muted-foreground">2023 - Present</div>
                    <div className="font-medium">BTech in CSE</div>
                    <div>BVC Engineering College, Odalarevu </div>
                  </div>
                  <div className="border-l-2 border-primary/70 pl-4 py-2 relative">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={3}
                    />
                    <div className="text-sm text-muted-foreground">2020 - 2023</div>
                    <div className="font-medium">Diploma in Computer Engineering</div>
                    <div>BVC Institute Of Tech & Science, Amalapuram</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 -mt-20 flex items-center justify-center">
              <RadialOrbitalTimeline timelineData={skillsTimelineData} />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 border border-border/50 relative">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Python" />
                <SkillBadge name="Java" />
                <SkillBadge name="JavaScript" />
                <SkillBadge name="TypeScript" />
                <SkillBadge name="SQL" />
                <SkillBadge name="C++" />
                
              </div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border/50 relative">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <h3 className="text-xl font-semibold mb-4">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="React" />
                <SkillBadge name="Next.js" />
                  {/* <Image src= "abhi" alt="Abhishek" className="w-full h-full object-cover" /> */}

                <SkillBadge name="Flask" />
                <SkillBadge name="Express" />
                <SkillBadge name="Scikit-Learn" />
                {/*<SkillBadge name="PyTorch" />*/}
              </div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border/50 relative">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Git" />
                <SkillBadge name="Github Actions" />
                <SkillBadge name="AWS" />
                <SkillBadge name="Firebase" />
                <SkillBadge name="MongoDB" />
                <SkillBadge name="Azure" />
                <SkillBadge name="PostgreSQL" />
                <SkillBadge name="Docker" />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <ProjectCard
              title="AIMock"
              description="An AI-powered interview platform built with MERN stack that conducts real-time mock interviews using artificial intelligence. Features include live feedback, performance analytics, and socket-based communication for seamless interview experiences."
              tags={["NextJS", "Node.js", "Express", "MongoDB", "AI", "Socket.io"]}
              image="projects/aimock.png"
              link="https://github.com/AbhishekMadhura/AIMock"
              deployed={{
                live: false,
                site: ""
              }}
            />
            <ProjectCard
              title="SentimentAnalysis"
              description="Developed a machine learning model using Natural Language Processing (NLP) to classify the sentiment  of customer reviews, enabling the company to identify key areas for improvement and enhance customer satisfaction."
              tags={["Python", "Scikit-Learn","pandas"]}
              image="projects/sen.png" 
              
              link="https://github.com/AbhishekMadhura/Sentiment-Analysisc"
              deployed={{
                live: false,
                site: "https://predict-ab05c.web.app/"
              }}
            />
            <ProjectCard
              title="IPO WebApp and RESTAPI"
              description="A full-stack IPO tracking platform that allows users to explore and manage data about newly listed companies in the stock market. Designed to provide actionable insights with an intuitive UI and a robust backend."
              tags={["React", "Tailwind", "Node", "MongoDB","Express"]}
              image="projects/ipo.png"
              link="https://github.com/AbhishekMadhura/Bluestock-IPO"
              deployed={{
                      live: false,
                      site: ""
              }}
            />
            <ProjectCard
              title="E-Commerce Using React"
              description="A responsive and modern e-commerce web app built using React.js, showcasing a product listing, cart functionality, and user interface best practices."
              tags={["React", "React-Router", "Firebase" ,"RESTAPI"]}
              image="projects/ec.png"
              link="https://github.com/AbhishekMadhura/E-commerce-React"
              deployed={{
                      live: true,
                      site: "https://e-commerce-react-zeta-one.vercel.app/"
              }}
            />
            <ProjectCard
              title="Staff Management System"
              description="The system allows easy access and updating of employee data. It generates timely reports to help monitor employees and support tasks like performance appraisals and promotions"
              tags={["HTML", "JavaScript", "MySql", "PHP"]}
              image="projects/Staff.png"
              link="https://github.com/AbhishekMadhura/StaffManagementSystem"
              deployed={{
                      live: false,
                      site: ""
              }}
            />
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="https://github.com/AbhishekMadhura" target="_blank">
                View All Projects on GitHub <Github className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
        <section id="certificates" className="py-16 scroll-mt-20">
          
          <h2 className="text-3xl font-bold mb-12 text-center">My Certificates</h2>
            <Certificates/>
          <h2 className="text-3xl font-bold my-12 text-center">Internships</h2>
            <Workshops/>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-16 scroll-mt-20">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-lg mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <span>abhishekmadhura34@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <span>https://www.linkedin.com/in/abhishek-madhura-003829298/</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-card rounded-xl p-6 border border-border/50 relative">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <ContactForm />
              </div>
            </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-xl font-bold tracking-tighter">
                <span className="text-primary">Abhishek</span>Madhura
              </Link>
              <p className="text-sm text-muted-foreground mt-1">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <Link
                href="https://github.com/AbhishekMadhura"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/abhishek-madhura-003829298/"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.instagram.com/_gnk_9/"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
   
  )
}
