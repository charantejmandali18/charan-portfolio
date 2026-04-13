'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, ArrowUpRight, Sparkles } from 'lucide-react'
import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'

export default function Portfolio() {
  const [text, setText] = useState('')
  const roles = useMemo(() => ['AI Automation Engineer', 'AI Agent Developer', 'Backend Engineer', 'MCP Builder'], [])
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
        }, 2200)
      }
    }, 90)
    return () => clearInterval(timer)
  }, [roleIndex, roles])

  const fadeUp = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  }

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  }

  const experience = [
    {
      title: 'Software Engineer',
      company: 'Inspire Brands',
      period: '2024 — Present',
      location: 'Hyderabad, IN',
      tags: ['Java', 'Spring Boot', 'Auth0', 'SFMC', 'Twilio'],
      points: [
        "Integrated online ordering via Walmart app for Dunkin' — orchestrated cross-platform data flows at scale",
        'Partnered with HMS Host (Avolta) for online ordering at airports, transit stations, metros',
        'Built backend microservices for IDP powering 6 brands (BWW, Sonic, Arby\'s, Dunkin\', Baskin-Robbins, Jimmy John\'s)',
        'Automated multi-channel notifications (SFMC, MadTech, SendGrid, Twilio) across millions of users',
        'Implemented Epsilon-driven loyalty program automation across all brands',
        'Resolved high-severity production defects, maintaining platform reliability',
      ],
    },
    {
      title: 'Associate Software Engineer 2',
      company: 'Highradius Corporation',
      period: '2022 — 2024',
      location: 'Hyderabad, IN',
      tags: ['Apache Airflow', 'Spark', 'Snowflake', 'DBT', 'Meltano'],
      points: [
        'Built Meltano + Airflow integration service — automated pipeline orchestration, cut tool costs by 30%',
        'Automated ETL pipelines (DBT + Spark) from ERP systems (Netsuite, Salesforce) — 40% efficiency gain',
        'Engineered backend API infrastructure with Apache Airflow for CFOTech',
        'Designed automated SFTP ingestion with Snowflake serving 50+ enterprise clients daily',
        "Built 'copy workbook' feature in LiveCube with Apache Spark for 200+ users",
        'Ran POC integrating Apache Solr + CDC mechanism using Debezium for real-time data sync',
      ],
    },
    {
      title: 'Software Developer Trainee',
      company: 'Highradius Corporation',
      period: '2021 — 2022',
      location: 'Hyderabad, IN',
      tags: ['Workato', 'Java', 'API Integration'],
      points: [
        'Built API integrations using Workato — automating data flow across enterprise systems',
        'Engineered financial data parsers (MT940, BAI, BAI2) for automated bank statement processing',
        'Designed testing strategies that increased code coverage by 30%',
      ],
    },
  ]

  const aiProjects = [
    {
      title: 'MCP Server Development',
      tag: 'Agent Infrastructure',
      description: 'Built Model Context Protocol servers — gives AI agents the ability to interact with external systems through standardized tool interfaces.',
      tech: ['MCP Protocol', 'Python', 'TypeScript', 'REST APIs'],
      accent: 'tangerine',
    },
    {
      title: 'AI Chat Automation',
      tag: 'Production AI',
      description: 'Designed intelligent chat automation systems using LLM APIs with context-aware response pipelines for support and internal ops.',
      tech: ['OpenAI API', 'Claude API', 'FastAPI', 'Python'],
      accent: 'teal',
    },
    {
      title: 'Slack Automation Bots',
      tag: 'Workflow Automation',
      description: 'Built AI-powered Slack bots automating team workflows with LLM APIs, webhook integrations, and event-driven triggers.',
      tech: ['Slack API', 'OpenAI API', 'Python', 'Webhooks'],
      accent: 'mustard',
    },
  ]

  const enterpriseProjects = [
    {
      title: 'Inspire Digital Platform',
      stat: '6 brands',
      statLabel: 'in production',
      description: 'Backend microservices powering 6 major restaurant brands with Walmart and HMS Host integrations.',
      tech: ['Java', 'Spring Boot', 'Auth0', 'Epsilon'],
    },
    {
      title: 'CFOTech Data Platform',
      stat: '50+ clients',
      statLabel: 'served daily',
      description: 'Automated data pipeline infrastructure with workflow orchestration for enterprise financial products.',
      tech: ['Airflow', 'Meltano', 'Snowflake', 'DBT'],
    },
    {
      title: 'LiveCube Enhancement',
      stat: '200+ users',
      statLabel: 'real-time processing',
      description: 'Copy workbook feature with Apache Spark integration for real-time data processing.',
      tech: ['Spark', 'Java', 'Microservices'],
    },
  ]

  const skillCategories = [
    { name: 'AI & Automation', items: ['MCP Servers', 'OpenAI API', 'Claude API', 'AI Agents', 'Agentic Workflows', 'Slack Bots', 'Chat Automation', 'Prompt Engineering', 'LLM Integration'] },
    { name: 'Backend & API', items: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'REST', 'GraphQL', 'Microservices', 'Distributed Systems'] },
    { name: 'Data & Orchestration', items: ['Apache Airflow', 'Apache Spark', 'Snowflake', 'DBT', 'Meltano', 'ETL Pipelines', 'CDC (Debezium)'] },
    { name: 'Cloud & DevOps', items: ['AWS', 'Azure', 'Docker', 'Argo Workflows'] },
  ]

  const awards = [
    { title: 'Maverick Award', org: 'Inspire Brands', year: '2025', emoji: '🏆' },
    { title: 'Award of Applause — Highflyer Q1', org: 'Highradius', year: '2023', emoji: '⭐' },
    { title: 'Highflyer of the Year — Nomination', org: 'Highradius', year: '2023', emoji: '🎯' },
    { title: 'Highako Q3 — Best Trainee', org: 'Highradius', year: '2022', emoji: '🥇' },
  ]

  return (
    <div className="min-h-screen paper-bg text-ink">
      {/* Header */}
      <header className="border-b-2 border-ink bg-paper sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-ink text-paper flex items-center justify-center font-bold text-lg border-2 border-ink shadow-brutal-sm">
              CTM
            </div>
            <div className="font-mono text-sm hidden md:block">
              <div className="font-bold">Charan Tej Mandali</div>
              <div className="text-xs opacity-60">v2026.04 · last deploy: now</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-1">
            {['work', 'projects', 'skills', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="px-3 py-2 font-mono text-sm uppercase tracking-wider hover:bg-ink hover:text-paper transition-colors border border-transparent hover:border-ink"
              >
                {section}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO TAG STRIP — density up top */}
      <div className="border-b-2 border-ink bg-paper">
        <div className="container mx-auto px-6 py-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono uppercase tracking-widest">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#f26b5e' }}></span>
              available for AI roles
            </span>
            <span className="opacity-30">·</span>
            <span>4+ yrs shipping</span>
            <span className="opacity-30">·</span>
            <span>6 brands</span>
            <span className="opacity-30">·</span>
            <span>50+ clients</span>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <span className="opacity-60">based in Hyderabad, IN</span>
            <span className="opacity-30">·</span>
            <span style={{ color: '#0f766e' }}>UTC+5:30</span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="container mx-auto px-6 pt-6 md:pt-10 pb-10">
        <div className="grid md:grid-cols-12 gap-6 items-start">
          {/* Left: Headline */}
          <motion.div
            className="md:col-span-7"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} className="font-mono text-sm mb-4 flex items-center gap-2">
              <span className="inline-block w-8 h-px bg-ink"></span>
              <span className="uppercase tracking-widest">01 / Hello, internet</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-5"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              I build <span className="italic" style={{ color: '#f26b5e' }}>AI systems</span>
              <br />
              that <span className="underline decoration-4 underline-offset-8" style={{ textDecorationColor: '#0f766e' }}>actually</span> ship.
            </motion.h1>

            <motion.div variants={fadeUp} className="font-mono text-base md:text-lg mb-5 inline-block bg-ink text-paper px-3 py-1.5">
              <span className="opacity-60">$ role:</span> {text}
              <span className="animate-pulse">▊</span>
            </motion.div>

            <motion.p variants={fadeUp} className="text-base md:text-lg max-w-2xl leading-relaxed mb-6">
              4+ years building production backend systems at enterprise scale.
              Currently obsessed with <strong>MCP servers, AI agents, and automation that doesn&apos;t suck</strong>.
              Backend muscle meets LLM ambition.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="bg-ink text-paper px-6 py-3 font-mono text-sm uppercase tracking-wider border-2 border-ink shadow-brutal brutal-hover flex items-center gap-2"
              >
                Get in touch <ArrowUpRight size={16} />
              </a>
              <a
                href="#work"
                className="bg-paper text-ink px-6 py-3 font-mono text-sm uppercase tracking-wider border-2 border-ink shadow-brutal brutal-hover"
              >
                See the work
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Photo + Info card */}
          <motion.div
            className="md:col-span-5 md:mt-8 space-y-4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Photo card */}
            <div className="relative transform -rotate-2">
              <div className="border-2 border-ink shadow-brutal-lg bg-paper p-3">
                <div className="relative w-full aspect-[4/5] overflow-hidden border-2 border-ink bg-ink/10">
                  {/* Drop your photo at /public/charan-profile.jpg to replace the placeholder */}
                  <Image
                    src="/charan-profile.svg"
                    alt="Charan Tej Mandali"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="font-mono text-xs uppercase tracking-widest mt-3 px-1 flex justify-between">
                  <span>charan.jpg</span>
                  <span style={{ color: '#f26b5e' }}>● live</span>
                </div>
              </div>
              {/* Decorative tape */}
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 border border-ink/40 opacity-80 rotate-3"
                style={{ backgroundColor: '#fcd6c2' }}
              ></div>
            </div>

            {/* Stats card */}
            <div
              className="border-2 border-ink shadow-brutal p-6 transform rotate-1"
              style={{ backgroundColor: '#f59e42' }}
            >
              <div className="font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                <Sparkles size={14} /> Quick stats
              </div>
              <ul className="space-y-3 font-mono">
                <li className="flex justify-between border-b border-ink/30 pb-2">
                  <span className="opacity-70">years_shipping</span>
                  <span className="font-bold">4+</span>
                </li>
                <li className="flex justify-between border-b border-ink/30 pb-2">
                  <span className="opacity-70">brands_at_scale</span>
                  <span className="font-bold">6</span>
                </li>
                <li className="flex justify-between border-b border-ink/30 pb-2">
                  <span className="opacity-70">enterprise_clients</span>
                  <span className="font-bold">50+</span>
                </li>
                <li className="flex justify-between border-b border-ink/30 pb-2">
                  <span className="opacity-70">timezone</span>
                  <span className="font-bold">IST</span>
                </li>
                <li className="flex justify-between">
                  <span className="opacity-70">chai_consumed</span>
                  <span className="font-bold">∞</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 flex gap-3 transform -rotate-1">
              <a
                href="https://github.com/charantejmandali18"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-paper border-2 border-ink p-3 hover:bg-ink hover:text-paper transition-colors flex items-center justify-center"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/charan-tej-mandali"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-paper border-2 border-ink p-3 hover:bg-ink hover:text-paper transition-colors flex items-center justify-center"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:charantejmandali18@gmail.com"
                className="flex-1 bg-paper border-2 border-ink p-3 hover:bg-ink hover:text-paper transition-colors flex items-center justify-center"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="border-t-2 border-ink bg-ink text-paper py-3">
        <div className="container mx-auto px-6 font-mono text-sm uppercase tracking-widest flex justify-between">
          <span>02 / Selected Work</span>
          <span className="hidden md:block">↓ scroll</span>
        </div>
      </div>

      {/* WORK / EXPERIENCE */}
      <section id="work" className="container mx-auto px-6 py-10 md:py-16">
        <h2 className="text-4xl md:text-6xl font-black mb-8" style={{ fontFamily: 'Georgia, serif' }}>
          The track <span className="italic" style={{ color: '#f26b5e' }}>record</span>.
        </h2>

        <div className="space-y-8">
          {experience.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="bg-paper border-2 border-ink shadow-brutal-lg p-6 md:p-8"
              style={{ backgroundColor: idx === 0 ? '#f59e42' : '#f5ead4' }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest mb-2 opacity-70">
                    #{String(idx + 1).padStart(2, '0')} · {job.location}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                    {job.title}
                  </h3>
                  <div className="text-lg font-mono">@ {job.company}</div>
                </div>
                <div className="font-mono text-sm bg-ink text-paper px-3 py-1 self-start whitespace-nowrap">
                  {job.period}
                </div>
              </div>

              <ul className="space-y-2 mb-5">
                {job.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="font-mono opacity-50 mt-1">→</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono uppercase tracking-wider border border-ink px-2 py-1 bg-paper"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div className="border-t-2 border-ink py-3" style={{ backgroundColor: '#0f766e', color: '#fff6e6' }}>
        <div className="container mx-auto px-6 font-mono text-sm uppercase tracking-widest flex justify-between">
          <span>03 / AI &amp; Automation</span>
          <span className="hidden md:block">↓ projects</span>
        </div>
      </div>

      {/* AI PROJECTS */}
      <section id="projects" className="container mx-auto px-6 py-10 md:py-16">
        <div className="max-w-3xl mb-8">
          <h2 className="text-4xl md:text-6xl font-black mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Side projects, <span className="italic" style={{ color: '#0f766e' }}>real intent</span>.
          </h2>
          <p className="text-lg opacity-80">
            I don&apos;t just integrate APIs — I build the infrastructure agents need to be reliable in production.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {aiProjects.map((project, idx) => {
            const accentMap: Record<string, string> = {
              tangerine: '#f26b5e',
              teal: '#0f766e',
              mustard: '#f59e42',
            }
            const bgColor = accentMap[project.accent]
            const textColor = project.accent === 'mustard' ? '#1a1f3d' : '#fff6e6'

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border-2 border-ink shadow-brutal brutal-hover p-6"
                style={{ backgroundColor: bgColor, color: textColor }}
              >
                <div className="font-mono text-xs uppercase tracking-widest mb-4 opacity-80">
                  /* {project.tag} */
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  {project.title}
                </h3>
                <p className="leading-relaxed mb-5 opacity-90">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-4 border-t" style={{ borderColor: textColor + '40' }}>
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-2 py-1 border"
                      style={{ borderColor: textColor + '60' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ENTERPRISE PROJECTS */}
      <section className="container mx-auto px-6 py-10 md:py-16 border-t-2 border-ink">
        <div className="font-mono text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="inline-block w-8 h-px bg-ink"></span>
          <span>04 / Enterprise systems</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-8" style={{ fontFamily: 'Georgia, serif' }}>
          Built at <span className="italic" style={{ color: '#f26b5e' }}>scale</span>.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {enterpriseProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-paper border-2 border-ink shadow-brutal brutal-hover p-6"
            >
              <div className="text-5xl font-black mb-1" style={{ color: '#f26b5e', fontFamily: 'Georgia, serif' }}>
                {project.stat}
              </div>
              <div className="font-mono text-xs uppercase tracking-widest mb-4 opacity-70">
                {project.statLabel}
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4 opacity-80">{project.description}</p>
              <div className="flex flex-wrap gap-2 pt-3 border-t border-ink/30">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-mono opacity-70">
                    {tech}
                  </span>
                )).reduce((prev: React.ReactNode[], curr, i) => {
                  return i === 0 ? [curr] : [...prev, <span key={`sep-${i}`} className="text-xs opacity-50">·</span>, curr]
                }, [] as React.ReactNode[])}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-ink text-paper py-10 md:py-16">
        <div className="container mx-auto px-6">
          <div className="font-mono text-sm uppercase tracking-widest mb-4 flex items-center gap-2 opacity-70">
            <span className="inline-block w-8 h-px bg-paper"></span>
            <span>05 / The toolkit</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8" style={{ fontFamily: 'Georgia, serif' }}>
            What I <span className="italic" style={{ color: '#f59e42' }}>reach for</span>.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border-2 border-paper p-6"
              >
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif', color: '#f59e42' }}>
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, i) => (
                    <span
                      key={i}
                      className="text-sm font-mono border border-paper/50 px-3 py-1 hover:bg-paper hover:text-ink transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="container mx-auto px-6 py-10 md:py-16">
        <div className="font-mono text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="inline-block w-8 h-px bg-ink"></span>
          <span>06 / Wall of stickers</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-8" style={{ fontFamily: 'Georgia, serif' }}>
          Things I&apos;ve <span className="italic" style={{ color: '#f26b5e' }}>broken open</span>.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {awards.map((award, idx) => {
            const rotations = ['rotate-2', '-rotate-1', 'rotate-1', '-rotate-2']
            const colors = ['#f59e42', '#f26b5e', '#0f766e', '#f5ead4']
            const textColors = ['#1a1f3d', '#fff6e6', '#fff6e6', '#1a1f3d']
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ rotate: 0, scale: 1.05 }}
                className={`border-2 border-ink shadow-brutal p-6 ${rotations[idx]} cursor-default`}
                style={{ backgroundColor: colors[idx], color: textColors[idx] }}
              >
                <div className="text-4xl mb-3">{award.emoji}</div>
                <h3 className="text-lg font-bold mb-2 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                  {award.title}
                </h3>
                <div className="font-mono text-xs uppercase tracking-wider opacity-80">
                  {award.org} · {award.year}
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Marquee strip — leads into contact CTA */}
      <div className="bg-ink text-paper border-y-2 border-ink overflow-hidden py-3">
        <div className="marquee whitespace-nowrap text-base font-mono uppercase tracking-wider flex">
          <span className="mx-6">★ Available for AI Automation roles</span>
          <span className="mx-6">/ Hyderabad · Remote India · Remote worldwide</span>
          <span className="mx-6">★ MCP · Agents · Backend at scale</span>
          <span className="mx-6">/ Built for 6 brands · 50+ clients · Millions of users</span>
          <span className="mx-6">★ Let&apos;s ship something</span>
          <span className="mx-6">/ charantejmandali18@gmail.com</span>
          <span className="mx-6">★ Available for AI Automation roles</span>
          <span className="mx-6">/ Hyderabad · Remote India · Remote worldwide</span>
          <span className="mx-6">★ MCP · Agents · Backend at scale</span>
          <span className="mx-6">/ Built for 6 brands · 50+ clients · Millions of users</span>
          <span className="mx-6">★ Let&apos;s ship something</span>
          <span className="mx-6">/ charantejmandali18@gmail.com</span>
        </div>
      </div>

      {/* CONTACT */}
      <section id="contact" className="py-10 md:py-16" style={{ backgroundColor: '#f26b5e' }}>
        <div className="container mx-auto px-6 text-paper" style={{ color: '#1a1f3d' }}>
          <div className="font-mono text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="inline-block w-8 h-px bg-ink"></span>
            <span>07 / Let&apos;s build something</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black mb-8 leading-[0.95]" style={{ fontFamily: 'Georgia, serif' }}>
            Got an AI thing<br />
            that needs <span className="italic underline decoration-4 underline-offset-8">shipping?</span>
          </h2>
          <p className="text-xl mb-10 max-w-2xl">
            I&apos;m available for AI Automation Engineer roles — Hyderabad, remote India, or remote worldwide with sensible comp.
            If you&apos;re building agents, MCPs, or production AI systems — let&apos;s talk.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:charantejmandali18@gmail.com"
              className="bg-ink text-paper px-6 py-4 font-mono text-sm uppercase tracking-wider border-2 border-ink shadow-brutal-lg brutal-hover flex items-center gap-2"
            >
              <Mail size={18} /> charantejmandali18@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/charan-tej-mandali"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-paper text-ink px-6 py-4 font-mono text-sm uppercase tracking-wider border-2 border-ink shadow-brutal-lg brutal-hover flex items-center gap-2"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href="https://github.com/charantejmandali18"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-paper text-ink px-6 py-4 font-mono text-sm uppercase tracking-wider border-2 border-ink shadow-brutal-lg brutal-hover flex items-center gap-2"
            >
              <Github size={18} /> GitHub
            </a>
          </div>

          <div className="mt-12 font-mono text-sm flex items-center gap-2">
            <MapPin size={16} /> Hyderabad, India · UTC+5:30 · Replies within 24h (usually faster)
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-paper py-8 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-mono text-sm">
          <div>
            <span className="opacity-60">© 2025</span> Charan Tej Mandali ·{' '}
            <span style={{ color: '#f59e42' }}>AI Automation Engineer</span>
          </div>
          <div className="opacity-60">
            built with Next.js + Tailwind, no template was harmed.
          </div>
        </div>
      </footer>
    </div>
  )
}
