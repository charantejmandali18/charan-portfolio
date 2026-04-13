'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, Code2, Database, Server, Cloud, Terminal, GitBranch } from 'lucide-react'
import { useState, useEffect, useMemo } from 'react'
import { 
  SiPython, SiSpring, SiDocker, 
  SiSnowflake, SiMysql, SiMongodb,
  SiTypescript
} from 'react-icons/si'

export default function Portfolio() {
  const [text, setText] = useState('')
  const roles = useMemo(() => ['AI Automation Engineer', 'AI/LLM Engineer', 'Backend Developer', 'Software Engineer'], [])
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let i = 0
    const timer = setInterval(() => {
      setText(currentRole.slice(0, i))
      i++
      if (i > currentRole.length) {
        clearInterval(timer)
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }, 2000)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [roleIndex, roles])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const experience = [
    {
      title: "Software Engineer",
      company: "Inspire Brands",
      period: "Aug 2024 – Present",
      location: "Hyderabad, India",
      achievements: [
        "Integrated online ordering via Walmart app for Dunkin', orchestrating cross-platform data flows between enterprise systems at scale",
        "Partnered with HMS Host (Avolta) to enable online ordering at airports, bus stations, and metro stations",
        "Built backend microservices for IDP supporting 6 major brands (BWW, Sonic, Arby's, Dunkin', Baskin-Robbins, Jimmy John's) — payments, menus, orders, wallet, notifications",
        "Automated multi-channel communication (email, SMS, push) integrating SFMC, MadTech, SendGrid, and Twilio",
        "Implemented loyalty program automation with Epsilon driving engagement across multiple brands",
        "Developed secure Auth0 login flows with OTP verification through SendGrid for millions of users",
        "Resolved high-severity production defects, maintaining platform reliability across all brands"
      ]
    },
    {
      title: "Associate Software Engineer 2",
      company: "Highradius Corporation",
      period: "Jul 2022 – Aug 2024",
      location: "Hyderabad, India",
      achievements: [
        "Built a scalable integration service using Meltano + Apache Airflow, automating pipeline orchestration and cutting tool expenses by 30%",
        "Automated ETL pipelines using DBT and Apache Spark pulling from ERP systems (Netsuite, Salesforce), boosting processing efficiency by 40%",
        "Engineered backend API infrastructure using Apache Airflow for CFOTech, automating data integration across platforms",
        "Designed automated SFTP file ingestion with Snowflake for high-volume data transfers serving 50+ clients daily",
        "Built 'copy workbook' feature in LiveCube with Apache Spark for real-time data processing serving 200+ users",
        "Ran POC integrating Apache Solr for search + CDC mechanism using Debezium for real-time data sync"
      ]
    },
    {
      title: "Software Developer Trainee",
      company: "Highradius Corporation",
      period: "May 2021 – Jun 2022",
      location: "Hyderabad, India",
      achievements: [
        "Built API integrations using Workato, automating data flow across enterprise systems",
        "Engineered financial data parsers (MT940, BAI, BAI2) for automated bank statement processing and reconciliation",
        "Designed testing strategies that increased code coverage by 30%"
      ]
    }
  ]

  const techStack = [
    { name: 'Java', icon: Code2, color: '#f89820', category: 'Backend' },
    { name: 'Python', icon: SiPython, color: '#3776ab', category: 'Backend' },
    { name: 'Spring Boot', icon: SiSpring, color: '#6db33f', category: 'Framework' },
    { name: 'Docker', icon: SiDocker, color: '#2496ed', category: 'DevOps' },
    { name: 'AWS', icon: Cloud, color: '#ff9900', category: 'Cloud' },
    { name: 'Azure', icon: Cloud, color: '#0078d4', category: 'Cloud' },
    { name: 'Apache Airflow', icon: Server, color: '#017cee', category: 'Data' },
    { name: 'Apache Spark', icon: Database, color: '#e25a1c', category: 'Data' },
    { name: 'Snowflake', icon: SiSnowflake, color: '#29b5e8', category: 'Database' },
    { name: 'MySQL', icon: SiMysql, color: '#4479a1', category: 'Database' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47a248', category: 'Database' },
    { name: 'OpenAI API', icon: Code2, color: '#00a67e', category: 'AI/LLM' },
    { name: 'Claude API', icon: Terminal, color: '#ff6b35', category: 'AI/LLM' },
    { name: 'MCP Servers', icon: Server, color: '#9333ea', category: 'AI/LLM' },
    { name: 'Slack Bots', icon: Terminal, color: '#4a154b', category: 'AI/LLM' },
    { name: 'Chat Automation', icon: Code2, color: '#25d366', category: 'AI/LLM' },
    { name: 'JavaScript', icon: SiTypescript, color: '#f7df1e', category: 'Basic Web' },
    { name: 'HTML/CSS', icon: Code2, color: '#e34c26', category: 'Basic Web' }
  ]

  const aiProjects = [
    {
      title: "MCP Server Development",
      description: "Built Model Context Protocol servers that give AI agents the ability to interact with external systems through standardized tool interfaces",
      tech: ["MCP Protocol", "Python", "TypeScript", "REST APIs"],
      highlights: ["Custom tool servers for AI agents", "Standardized agent-tool orchestration", "Protocol-compliant architecture", "Extensible integration framework"]
    },
    {
      title: "AI-Powered Chat Automation",
      description: "Designed and built intelligent chat automation systems using LLM APIs with context-aware response pipelines for customer support and internal ops",
      tech: ["OpenAI API", "Claude API", "Python", "FastAPI"],
      highlights: ["Context-aware response pipelines", "Multi-platform automation", "LLM-powered intent routing", "24/7 automated support"]
    },
    {
      title: "Slack Automation Bots",
      description: "Built AI-powered Slack bots that automate team workflows using LLM APIs, webhook integrations, and event-driven triggers",
      tech: ["Slack API", "OpenAI API", "Python", "Webhooks"],
      highlights: ["AI-driven workflow automation", "Custom slash commands", "Event-driven triggers", "Team productivity automation"]
    }
  ]

  const skills = {
    "AI & Automation": ["MCP Servers", "OpenAI API", "Claude API", "AI Agents", "Agentic Workflows", "Slack Bots", "Chat Automation", "Prompt Engineering", "LLM Integration"],
    "Backend & API": ["Java (Spring Boot, J2EE)", "Python", "FastAPI", "REST", "GraphQL", "Microservices", "Distributed Systems"],
    "Data & Orchestration": ["Apache Airflow", "Apache Spark", "Snowflake", "DBT", "Meltano", "ETL Pipelines", "CDC (Debezium)"],
    "Cloud & DevOps": ["Azure", "AWS (EC2, S3, Lambda)", "Docker", "Argo Workflows"],
    "Databases": ["MySQL", "MongoDB", "Snowflake", "Apache Solr"]
  }

  const projects = [
    {
      title: "Inspire Digital Platform (IDP)",
      description: "Backend microservices powering 6 major restaurant brands with Walmart and HMS Host integrations",
      tech: ["Java", "Spring Boot", "Auth0", "Epsilon", "SFMC", "Twilio"],
      highlights: ["6 brands, millions of users", "Walmart online ordering integration", "HMS Host airport/transit ordering", "Multi-channel notification automation"]
    },
    {
      title: "CFOTech Data Platform",
      description: "Automated data pipeline infrastructure with workflow orchestration for enterprise financial products",
      tech: ["Apache Airflow", "Meltano", "Snowflake", "DBT", "Apache Spark"],
      highlights: ["50+ clients daily", "40% processing efficiency gain", "30% tool cost reduction", "Automated ERP data ingestion"]
    },
    {
      title: "LiveCube Enhancement",
      description: "Copy workbook feature with Apache Spark integration for real-time data processing",
      tech: ["Apache Spark", "Java", "Microservices"],
      highlights: ["200+ active users", "Real-time data processing", "Workflow automation", "Scalable architecture"]
    }
  ]

  const awards = [
    {
      title: "Maverick Award",
      company: "Inspire Brands",
      year: "2025",
      description: "Recognized for outstanding contribution and impact across the platform"
    },
    {
      title: "Award of Applause (Highflyer Q1)",
      company: "Highradius",
      year: "2023",
      description: "Exceptional work for Q1 in CFOTech Department"
    },
    {
      title: "Nomination (Highflyer of the year)",
      company: "Highradius",
      year: "2023",
      description: "Nominated for Highflyer of the year in CFOTech Department"
    },
    {
      title: "Certificate of Appreciation (Highako Q3)",
      company: "Highradius",
      year: "2022",
      description: "Best Trainee for the Quarter in CFOTech Department"
    }
  ]

  const education = [
    {
      degree: "B.Tech (Electronics and Communication Engineering)",
      institution: "Lovely Professional University",
      period: "2018 – 2022",
      location: "Punjab, India",
      grade: "CGPA - 8.41"
    },
    {
      degree: "Intermediate/ XII (TSBIE)",
      institution: "Narayana Junior College",
      period: "2017 – 2018",
      location: "Hyderabad, India",
      grade: "Percentage - 93.7%"
    },
    {
      degree: "Xth (CBSE)",
      institution: "GMR Chinmaya Vidyalaya",
      period: "2015 – 2016",
      location: "Hyderabad, India",
      grade: "CGPA - 10.0"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <motion.header 
        className="fixed top-0 w-full z-50 backdrop-blur-md bg-gray-900/90 border-b border-gray-700"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Charan Tej Mandali
          </motion.h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#ai-projects" className="hover:text-cyan-400 transition-colors">AI Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        className="pt-24 pb-20 px-6 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto relative z-10 max-w-5xl">
          {/* Status pill */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-full">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm font-mono text-green-400">open_to_opportunities = true</span>
            </div>
          </motion.div>

          {/* Terminal window */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-950 border border-gray-700 rounded-xl shadow-2xl shadow-cyan-500/10 overflow-hidden mb-10"
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-gray-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs text-gray-500 font-mono ml-3">~/charan/portfolio — zsh</span>
            </div>

            {/* Terminal body */}
            <div className="p-6 md:p-8 font-mono text-sm md:text-base">
              <div className="mb-2">
                <span className="text-green-400">charan@hyderabad</span>
                <span className="text-gray-500">:</span>
                <span className="text-cyan-400">~</span>
                <span className="text-gray-500">$ </span>
                <span className="text-gray-300">whoami</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Charan Tej Mandali
                </span>
              </h1>

              <div className="mb-4">
                <span className="text-green-400">charan@hyderabad</span>
                <span className="text-gray-500">:</span>
                <span className="text-cyan-400">~</span>
                <span className="text-gray-500">$ </span>
                <span className="text-gray-300">cat ./role.txt</span>
              </div>

              <div className="text-xl md:text-2xl text-gray-200 mb-6 flex items-center">
                <span className="text-purple-400 mr-2">&gt;</span>
                <span>{text}</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-cyan-400 ml-1"
                >
                  ▊
                </motion.span>
              </div>

              <div className="mb-2">
                <span className="text-green-400">charan@hyderabad</span>
                <span className="text-gray-500">:</span>
                <span className="text-cyan-400">~</span>
                <span className="text-gray-500">$ </span>
                <span className="text-gray-300">cat about.md</span>
              </div>

              <div className="text-gray-300 leading-relaxed mb-6 pl-4 border-l-2 border-cyan-500/40">
                Backend engineer turned <span className="text-cyan-400">AI automation builder</span>.
                Shipping production systems for <span className="text-purple-400">6 restaurant brands</span> at Inspire Brands.
                Built data pipelines for <span className="text-pink-400">50+ enterprise clients</span> at Highradius.
                Currently building <span className="text-green-400">MCP servers</span>, intelligent bots, and LLM-powered automation.
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg px-3 py-2">
                  <div className="text-cyan-400 text-2xl font-bold">4+</div>
                  <div className="text-gray-500 text-xs">years shipping</div>
                </div>
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg px-3 py-2">
                  <div className="text-purple-400 text-2xl font-bold">6</div>
                  <div className="text-gray-500 text-xs">brands at scale</div>
                </div>
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg px-3 py-2">
                  <div className="text-pink-400 text-2xl font-bold">50+</div>
                  <div className="text-gray-500 text-xs">enterprise clients</div>
                </div>
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg px-3 py-2">
                  <div className="text-green-400 text-2xl font-bold">∞</div>
                  <div className="text-gray-500 text-xs">cups of chai</div>
                </div>
              </div>

              <div>
                <span className="text-green-400">charan@hyderabad</span>
                <span className="text-gray-500">:</span>
                <span className="text-cyan-400">~</span>
                <span className="text-gray-500">$ </span>
                <span className="text-gray-300">./contact.sh</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-cyan-400 ml-1"
                >
                  ▊
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* Contact + CTA row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-6"
          >
            <a
              href="mailto:charantejmandali18@gmail.com"
              className="flex items-center gap-2 bg-gray-800/60 border border-gray-700 hover:border-cyan-500/50 px-4 py-2 rounded-lg transition-all font-mono text-sm"
            >
              <Mail size={16} className="text-cyan-400" />
              <span className="text-gray-300">charantejmandali18@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 bg-gray-800/60 border border-gray-700 px-4 py-2 rounded-lg font-mono text-sm">
              <MapPin size={16} className="text-cyan-400" />
              <span className="text-gray-300">Hyderabad, IN (UTC+5:30)</span>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-3"
          >
            <motion.a
              href="https://linkedin.com/in/charan-tej-mandali"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg transition-all font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={18} />
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/charantejmandali18"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 border border-gray-600 hover:border-cyan-500/50 hover:bg-gray-800 text-white rounded-lg transition-all font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
              GitHub
            </motion.a>
            <motion.a
              href="#experience"
              className="flex items-center gap-2 px-5 py-3 border border-gray-600 hover:border-cyan-500/50 hover:bg-gray-800 text-white rounded-lg transition-all font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code2 size={18} />
              See my work
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Tech Stack Section */}
      <motion.section 
        className="py-20 px-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="text-cyan-400/70 font-mono text-sm mb-2">// the_arsenal.json</div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Tech Stack &amp; Tools
            </h2>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center group cursor-pointer"
                whileHover={{ scale: 1.1, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-4 bg-gray-800/50 border border-gray-700 rounded-xl group-hover:border-cyan-500/50 group-hover:bg-gray-700/50 transition-all duration-300 backdrop-blur-sm">
                  <tech.icon 
                    size={40} 
                    color={tech.color}
                    className="mx-auto"
                  />
                </div>
                <span className="mt-3 text-sm font-semibold text-center text-gray-200">{tech.name}</span>
                <span className="text-xs text-gray-400">{tech.category}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* AI Projects Section */}
      <motion.section 
        id="ai-projects"
        className="py-20 px-6 bg-gray-800/30"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="text-cyan-400/70 font-mono text-sm mb-2">/* the_fun_stuff */</div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI &amp; Automation Projects
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg">
                    <Terminal className="text-cyan-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm text-cyan-400">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 text-xs rounded-full text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-sm text-purple-400">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enterprise Projects Section */}
      <motion.section 
        className="py-20 px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="text-purple-400/70 font-mono text-sm mb-2">// production.systems[]</div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Enterprise Projects
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/20 border border-purple-500/30 rounded-lg">
                    <Server className="text-purple-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm text-purple-400">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 text-xs rounded-full text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-sm text-cyan-400">Impact:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        id="experience"
        className="py-20 px-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="text-cyan-400/70 font-mono text-sm mb-2">$ git log --oneline --author=&quot;charan&quot;</div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
          </motion.div>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">{job.title}</h3>
                    <h4 className="text-xl font-semibold mb-2 text-purple-400">{job.company}</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-300 font-medium">{job.period}</p>
                    <p className="text-gray-400">{job.location}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1 text-lg">▸</span>
                      <span className="text-gray-300 leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills"
        className="py-20 px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="text-cyan-400/70 font-mono text-sm mb-2">// import * as Skills from &apos;./brain&apos;</div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-600">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Awards Section */}
      <motion.section 
        className="py-20 px-6 bg-gray-50 dark:bg-gray-800"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="text-yellow-400/70 font-mono text-sm mb-2">// achievements.unlocked()</div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Awards &amp; Recognition
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                <p className="text-blue-600 font-semibold mb-2">{award.company} • {award.year}</p>
                <p className="text-gray-600 dark:text-gray-400">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        className="py-20 px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="text-cyan-400/70 font-mono text-sm mb-2">// the_paperwork.edu</div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Education
            </h2>
          </motion.div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <h4 className="text-lg text-blue-600 mb-2">{edu.institution}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{edu.location}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="text-gray-600 dark:text-gray-400">{edu.period}</p>
                    <p className="font-semibold text-green-600">{edu.grade}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact"
        className="py-20 px-6 bg-gray-50 dark:bg-gray-800"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto text-center">
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-cyan-400/70 font-mono text-sm mb-2">$ ssh charan@hire.me</div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let&apos;s Connect
            </h2>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.a
              href="mailto:charantejmandali18@gmail.com"
              className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={24} />
              Email Me
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/charan-tej-mandali"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={24} />
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/charantejmandali18"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={24} />
              GitHub
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-700/50 bg-gray-950">
        <div className="container mx-auto text-center font-mono">
          <p className="text-gray-400 text-sm">
            <span className="text-gray-600">{`<`}</span>
            <span className="text-cyan-400">footer</span>
            <span className="text-purple-400"> built-with</span>
            <span className="text-gray-500">=</span>
            <span className="text-green-400">&quot;Next.js + Tailwind + ☕&quot;</span>
            <span className="text-gray-600">{` />`}</span>
          </p>
          <p className="text-gray-600 text-xs mt-3">
            © 2025 Charan Tej Mandali // <span className="text-cyan-400">AI Automation Engineer</span> // <span className="text-gray-500">no rights reserved, just copy</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
