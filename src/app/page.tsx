'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, Code2, Database, Server, Cloud, Terminal, GitBranch } from 'lucide-react'
import { useState, useEffect } from 'react'
import { 
  SiPython, SiSpring, SiDocker, 
  SiSnowflake, SiMysql, SiMongodb,
  SiTypescript
} from 'react-icons/si'

export default function Portfolio() {
  const [text, setText] = useState('')
  const roles = ['Backend Developer', 'Data Engineer', 'AI/LLM Engineer', 'Software Engineer']
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
        "Contributed to backend development of Inspire Digital Platform (IDP) supporting major restaurant brands (BWW, Sonic, Arby's, Dunkin', Baskin-Robbins, Jimmy John's)",
        "Developed secure account login flows using Auth0, integrating OTP verification through SendGrid",
        "Collaborated on microservices for payment processing, menu generation, location management, order management, wallet functionality, and tally services",
        "Implemented robust loyalty program leveraging Epsilon, driving customer engagement and retention",
        "Developed notification system integrating SFMC, MadTech, SendGrid, and Twilio for multi-channel communication",
        "Resolved critical defects within IDP, increasing platform stability and enhancing user experience"
      ]
    },
    {
      title: "Associate Software Engineer 2",
      company: "Highradius Corporation",
      period: "Jul 2022 – Aug 2024",
      location: "Hyderabad, India",
      achievements: [
        "Engineered comprehensive backend API infrastructure using Apache Airflow for CFOTech",
        "Enhanced data management platform overseeing data pipelines for financial products",
        "Designed SFTP file ingestion processes using Snowflake for 50+ clients daily",
        "Automated ETL pipelines using DBT and Apache Spark, boosting data processing efficiency by 40%",
        "Engineered integration service with Meltano and Apache Airflow, reducing tool expenses by 30%",
        "Developed 'copy workbook' feature in LiveCube with Apache Spark for 200+ users",
        "Led upgrade of data catalog projects to JDK 17",
        "Conducted POC with Apache Solr and implemented CDC using Debezium"
      ]
    },
    {
      title: "Software Developer Trainee",
      company: "Highradius Corporation",
      period: "May 2021 – Jun 2022",
      location: "Hyderabad, India",
      achievements: [
        "Developed API integrations using Workato for seamless data flow",
        "Engineered financial data parsers (MT940, BAI, BAI2) for bank statement processing",
        "Designed testing strategies, increasing code coverage by 30%"
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
    { name: 'JavaScript', icon: SiTypescript, color: '#f7df1e', category: 'Basic Web' },
    { name: 'HTML/CSS', icon: Code2, color: '#e34c26', category: 'Basic Web' }
  ]

  const aiProjects = [
    {
      title: "AI-Powered Automation Bots",
      description: "Built intelligent automation bots using OpenAI and Claude APIs for various business processes",
      tech: ["OpenAI API", "Claude API", "Python", "FastAPI"],
      highlights: ["Natural language processing", "Automated workflows", "Context-aware responses", "Multi-modal interactions"]
    },
    {
      title: "MCP Server Development",
      description: "Developed Model Context Protocol servers for enhanced AI agent capabilities and integrations",
      tech: ["MCP Protocol", "Python", "TypeScript", "REST APIs"],
      highlights: ["Custom tool integration", "Agent orchestration", "Protocol compliance", "Scalable architecture"]
    },
    {
      title: "LLM Integration Platform",
      description: "Created platform for seamless integration of multiple LLM providers with unified API",
      tech: ["OpenAI", "Claude", "Python", "Docker"],
      highlights: ["Multi-provider support", "Load balancing", "Cost optimization", "Real-time monitoring"]
    }
  ]

  const skills = {
    "Backend Development & API": ["Java (Spring Boot, J2EE)", "Python", "REST", "GraphQL", "SOAP APIs", "Microservices"],
    "AI & LLM Engineering": ["OpenAI API", "Claude API", "MCP Servers", "Bot Development", "AI Automation", "Prompt Engineering"],
    "Cloud & DevOps": ["Azure", "AWS (EC2, S3, Lambda)", "Docker", "Apache Airflow", "Argo Workflows"],
    "Data & Storage": ["Snowflake", "Apache Spark", "MySQL", "MongoDB", "ETL Pipelines", "Data Ingestion & Processing"],
    "Basic Web Technologies": ["JavaScript", "HTML", "CSS", "Basic React"]
  }

  const projects = [
    {
      title: "Inspire Digital Platform (IDP)",
      description: "Backend infrastructure supporting major restaurant brands with microservices architecture",
      tech: ["Java", "Spring Boot", "Auth0", "SendGrid", "Epsilon"],
      highlights: ["Multi-brand support", "Secure authentication", "Loyalty program", "Payment processing"]
    },
    {
      title: "CFOTech Data Platform",
      description: "Comprehensive backend API infrastructure with automated data pipelines",
      tech: ["Apache Airflow", "Python", "Snowflake", "DBT"],
      highlights: ["50+ clients", "40% efficiency boost", "30% cost reduction", "Real-time processing"]
    },
    {
      title: "LiveCube Enhancement",
      description: "Copy workbook feature with Apache Spark integration for 200+ users",
      tech: ["Apache Spark", "Java", "Microservices"],
      highlights: ["Real-time data processing", "Workflow management", "Scalable architecture"]
    }
  ]

  const awards = [
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
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 60 }).map((_, i) => (
              <motion.div
                key={i}
                className="bg-blue-500 rounded"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 2 }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex justify-center items-center gap-4 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Code2 size={48} className="text-blue-600" />
              </motion.div>
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Server size={48} className="text-purple-600" />
              </motion.div>
              <motion.div
                animate={{ rotate: [-15, 15, -15] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Database size={48} className="text-green-600" />
              </motion.div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Charan Tej Mandali
              </span>
            </h1>
            
            <div className="text-xl md:text-3xl mb-8 text-gray-300 h-12 flex items-center justify-center">
              <Terminal className="mr-3 text-cyan-400" size={32} />
              <span className="font-mono">
                {text}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-cyan-400"
                >
                  |
                </motion.span>
              </span>
            </div>

            <motion.div 
              className="flex justify-center gap-6 mb-8"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 rounded-full">
                <GitBranch className="text-cyan-400" size={20} />
                <span className="text-sm font-semibold">3+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 px-4 py-2 rounded-full">
                <Cloud className="text-purple-400" size={20} />
                <span className="text-sm font-semibold">AI & Microservices</span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            <div className="flex items-center gap-2 bg-gray-800/50 border border-gray-700 px-4 py-2 rounded-lg">
              <Mail size={20} className="text-cyan-400" />
              <span className="text-gray-300">charantejmandali18@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 border border-gray-700 px-4 py-2 rounded-lg">
              <Phone size={20} className="text-cyan-400" />
              <span className="text-gray-300">8309741626</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 border border-gray-700 px-4 py-2 rounded-lg">
              <MapPin size={20} className="text-cyan-400" />
              <span className="text-gray-300">Hyderabad, India</span>
            </div>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-4"
          >
            <motion.a
              href="https://linkedin.com/in/charan-tej-mandali"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/charan-tej-mandali"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-gray-500 hover:bg-gray-800 text-white rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              GitHub
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
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            Tech Stack & Tools
          </motion.h2>
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
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            AI & LLM Projects
          </motion.h2>
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
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            Enterprise Projects
          </motion.h2>
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
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            Professional Experience
          </motion.h2>
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
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-16"
          >
            Technical Skills
          </motion.h2>
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
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-16"
          >
            Awards & Recognition
          </motion.h2>
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
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-16"
          >
            Education
          </motion.h2>
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
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold mb-16"
          >
            Let&apos;s Connect
          </motion.h2>
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
              href="https://github.com/charan-tej-mandali"
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
      <footer className="py-8 px-6 border-t border-gray-700">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Charan Tej Mandali. Portfolio built with Next.js, Tailwind CSS & AI assistance.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Backend Engineer specializing in Java, Python, Data Engineering & AI/LLM Integration
          </p>
        </div>
      </footer>
    </div>
  )
}
