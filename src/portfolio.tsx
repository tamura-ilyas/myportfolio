import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Cloud,
  Terminal,
  Cpu,
  Download,
  ChevronRight,
  Star,
  Briefcase,
  Award,
  TrendingUp,
  Zap,
  Globe,
} from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const canvasRef = useRef(null);

  // Particle background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(34, 211, 238, 0.5)";
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "experience",
        "projects",
        "skills",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const experiences = [
    {
      title: "Mebiocon",
      company: "Software Engineer-Contract",
      period: "June2025-Present",
      description:
        "Led development of microservices architecture serving 10M+ users. Implemented CI/CD pipelines reducing deployment time by 70%. Architected real-time data processing system handling 100K+ requests/second.",
      technologies: ["React", "Node.js", "Kubernetes", "AWS", "GraphQL"],
      achievements: [
        "Reduced infrastructure costs by 40%",
        "Mentored 5 junior developers",
        "Led team of 8 engineers",
      ],
    },
    {
      title: "UET-ACM & DigiFloat Limited",
      company: "Cloud Computing Fellowship",
      period: "2020 - 2022",
      description:
        "Built scalable web applications from scratch serving 1M+ users. Optimized database queries improving performance by 300%. Implemented advanced caching strategies.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker", "Redis"],
      achievements: [
        "Launched 3 major features",
        "Improved page load time by 60%",
        "Built CI/CD from scratch",
      ],
    },
    {
      title: "Tiers Limited",
      company: "Full Stack Intern",
      period: "2018 - 2020",
      description:
        "Developed RESTful APIs and responsive front-end interfaces. Collaborated with cross-functional teams in agile environment. Built automated testing framework.",
      technologies: ["JavaScript", "Java", "MySQL", "Git", "Jenkins"],
      achievements: [
        "Automated 80% of testing",
        "Reduced bugs by 50%",
        "Shipped 15+ features",
      ],
    },
  ];

  const projects = [
    {
      title: "Enterprise AI Voice Agent",
      description:
        "Production-deployed RAG voice agent utilizing Amazon Nova Sonic for real-time customer engagement.Designed a low-latency voice architecture that retrieves company service data dynamically from a Knowledge Base. The system handles conversational interruptions and context switching, currently live on the company's 'About Us' page to answer service queries autonomously. Achieves sub-second response times through optimized AWS infrastructure.",
      technologies: ["AMAZON NOVA SONIC ", "AWS BEDROCK", "RAG", "KNOWLEDGE BASE", "LAMBDA","PYTHON"],
      metrics: { gmv: "$5M+", users: "100K+", conversion: "12%" },
      link: "#",
      github: "ENTERPRISE",
    },
    {
      title: "SmartMedNotes",
      description:
        "Enterprise-grade cloud resource management platform with real-time monitoring, auto-scaling, and cost optimization. Features include predictive analytics and anomaly detection.",
      technologies: ["React", "TypeScript", "AWS", "Terraform", "GraphQL"],
      metrics: { users: "50K+", uptime: "99.9%", savings: "$2M+" },
      link: "#",
      github: "#",
    },
    {
      title: "Real-Time Heart Rate Monitoring Web Application",
      description:
        "High-performance data visualization platform processing millions of events per second with sub-100ms latency. Includes ML-powered insights and forecasting.",
      technologies: ["React.js", "Django", "Redis", "WebSocket", "D3.js"],
      metrics: { events: "100M+/day", latency: "<100ms", accuracy: "95%" },
      link: "#",
      github: "#",
    },
    {
      title: "Brain Tumor CNN Classifier",
      description:
        "Fault-tolerant microservices-based job scheduling system with dynamic load balancing and failure recovery. Handles complex DAG workflows.",
      technologies: ["Go", "RabbitMQ", "MongoDB", "Kubernetes", "Prometheus"],
      metrics: { jobs: "1M+/day", reliability: "99.99%", nodes: "100+" },
      link: "#",
      github: "#",
    },
  ];

  const skills = {
    CORE: {
      items: [
        "PYTHON (SYSTEM ARCHITECTURE,ASYNC/CONCURRENCY)",
        // "Next.js",
        // "Vue.js",
        // "TypeScript",
        "AWS (Bedrock, Lambda, Nova Sonic, EC2, S3)",
        "CI/CD Pipelines (GitHub Actions)",
        "Advanced Prompt Engineering & LLM Optimization",
      ],
      level: 95,
    },
    DEVELOPMENT: {
      items: [
        "REACT",
        "SQL & NoSQL Database Design (PostgreSQL, MongoDB, Redis)",
        "FastAPI (Async/High-Concurrency APIs)",
        "Express",
        "NODE.JS",
      ],
      level: 92,
    },
    AITOOLS: {
      items: ["Git", "Linux", "Nginx", "GraphQL", "REST API", "Microservices"],
      level: 93,
    },
    Database: {
      items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "DynamoDB"],
      level: 88,
    },
    DevOps: {
      items: ["AWS", "Docker", "CI/CD"],
      level: 90,
    },
   
  };

  const stats = [
    {
      icon: Code,
      label: "Years Experience",
      value: "4+",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: Briefcase,
      label: "Projects Completed",
      value: "20+",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Award,
      label: "Client Satisfaction",
      value: "100%",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: TrendingUp,
      label: "Code Quality",
      value: "A+",
      color: "from-orange-400 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{ zIndex: 0 }}
      />

      {/* Custom Cursor */}
      <div
        className="fixed w-8 h-8 border-2 border-cyan-400 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out mix-blend-difference"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: cursorVariant === "hover" ? "scale(1.5)" : "scale(1)",
        }}
      />

      {/* Gradient Overlays */}
      <div
        className="fixed inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      <div
        className="fixed top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-cyan-500/10 to-transparent blur-3xl pointer-events-none"
        style={{ zIndex: 1 }}
      />
      <div
        className="fixed bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/10 to-transparent blur-3xl pointer-events-none"
        style={{ zIndex: 1 }}
      />

      <div className="relative" style={{ zIndex: 2 }}>
        {/* Navigation */}
        <nav
          className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-cyan-500/5 border-b border-slate-800/50" : "bg-transparent"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="relative">
                  <Terminal className="w-8 h-8 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute -inset-2 bg-cyan-500/20 rounded-lg blur group-hover:bg-cyan-500/30 transition-all" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {"Tamura Ilyas"}
                </span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                {[
                  "home",
                  "about",
                  "experience",
                  "projects",
                  "skills",
                  "contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    onMouseEnter={() => setCursorVariant("hover")}
                    onMouseLeave={() => setCursorVariant("default")}
                    className={`relative px-4 py-2 capitalize transition-all group ${
                      activeSection === item
                        ? "text-cyan-400"
                        : "text-slate-300 hover:text-cyan-400"
                    }`}
                  >
                    {item}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform origin-left transition-transform ${activeSection === item ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                    />
                  </button>
                ))}
                <button
                  className="ml-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg transition-all flex items-center space-x-2 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <Download className="w-4 h-4" />
                  <span>Resume</span>
                </button>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-slate-300 hover:text-cyan-400 relative group"
              >
                <div className="absolute -inset-2 bg-cyan-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all" />
                {isMenuOpen ? (
                  <X className="w-6 h-6 relative" />
                ) : (
                  <Menu className="w-6 h-6 relative" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800/50">
              <div className="px-4 py-4 space-y-2">
                {[
                  "home",
                  "about",
                  "experience",
                  "projects",
                  "skills",
                  "contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left capitalize text-slate-300 hover:text-cyan-400 py-3 px-4 rounded-lg hover:bg-slate-800/50 transition-all"
                  >
                    {item}
                  </button>
                ))}
                <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg transition-all flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/30">
                  <Download className="w-4 h-4" />
                  <span>Resume</span>
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-4 pt-20 relative"
        >
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8 animate-fade-in">
              <span className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm backdrop-blur-sm">
                <Zap className="w-4 h-4" />
                {/* <span>Available for opportunities</span> */}
              </span>
            </div>

            <div className="mb-8 space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-up">
                <span className="text-slate-400">HELLO, I'M</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  Tamura Ilyas
                </span>
              </h1>

              <div
                className="text-2xl md:text-3xl font-mono mb-8 animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="text-cyan-400">const</span>{" "}
                <span className="text-purple-400">role</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-yellow-400">"</span>
                <span className="text-green-400 typing-animation">
                  Full Stack Software Engineer
                </span>
                <span className="text-yellow-400">";</span>
              </div>
            </div>

            <p
              className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto mb-12 leading-relaxed animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              Building the future through{" "}
              <span className="text-cyan-400 font-semibold">
                scalable architecture
              </span>
              ,{" "}
              <span className="text-purple-400 font-semibold">
                elegant code
              </span>
              , and{" "}
              <span className="text-blue-400 font-semibold">
                innovative solutions
              </span>{" "}
              that drive real-world impact.
            </p>

            <div
              className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              <button
                onClick={() => scrollToSection("projects")}
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 flex items-center space-x-2"
              >
                <span className="font-semibold">View Projects</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-xl transition-all backdrop-blur-sm hover:scale-105"
              >
                <span className="font-semibold">Get In Touch</span>
              </button>
            </div>

            <div
              className="flex items-center justify-center space-x-6 animate-slide-up"
              style={{ animationDelay: "0.8s" }}
            >
              {[
                { Icon: Github, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Mail, href: "#" },
                { Icon: Globe, href: "#" },
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                  className="group relative p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-all hover:scale-110"
                >
                  <Icon className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-all" />
                </a>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex items-start justify-center p-2">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="text-cyan-400 font-mono">//</span> ABOUT ME
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all hover:scale-105"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all`}
                  />
                  <div className="relative">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3
                      className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    >
                      {stat.value}
                    </h3>
                    <p className="text-slate-400">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-12 hover:border-cyan-500/30 transition-all">
              <div className="max-w-4xl mx-auto">
                <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-6">
                  I'm a passionate software engineer specializing in building
                  exceptional digital experiences that live at the intersection
                  of design and technology. With over 4 years of experience in
                  the industry, I've had the privilege of working on
                  cutting-edge projects that push the boundaries of what's
                  possible on the web.
                </p>
                <p className="text-slate-400 text-lg leading-relaxed">
                  My expertise lies in architecting scalable systems, optimizing
                  performance, and creating intuitive user experiences. I'm
                  driven by the challenge of transforming complex problems into
                  elegant solutions, and I thrive in environments where
                  innovation and collaboration are at the forefront. When I'm
                  not coding, you'll find me contributing to open-source
                  projects, mentoring aspiring developers, or exploring emerging
                  technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 px-4 bg-slate-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="text-cyan-400 font-mono">//</span> EXPERIENCE
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500" />

              <div className="space-y-16">
                {experiences.map((exp, idx) => (
                  <div
                    key={idx}
                    className={`relative flex flex-col md:flex-row items-start gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-cyan-400 rounded-full transform -translate-x-1.5 md:-translate-x-2 shadow-lg shadow-cyan-400/50">
                      <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-75" />
                    </div>

                    <div className="md:w-1/2" />

                    <div
                      className="md:w-1/2 ml-16 md:ml-0 group"
                      onMouseEnter={() => setCursorVariant("hover")}
                      onMouseLeave={() => setCursorVariant("default")}
                    >
                      <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all hover:scale-105">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all" />
                        <div className="relative">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                                {exp.title}
                              </h3>
                              <p className="text-xl text-slate-300 mb-1">
                                {exp.company}
                              </p>
                            </div>
                            <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm whitespace-nowrap">
                              {exp.period}
                            </span>
                          </div>

                          <p className="text-slate-400 mb-4 leading-relaxed">
                            {exp.description}
                          </p>

                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-slate-400 mb-2">
                              Key Achievements:
                            </h4>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement, i) => (
                                <li
                                  key={i}
                                  className="text-sm text-slate-500 flex items-start"
                                >
                                  <Star className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIdx) => (
                              <span
                                key={techIdx}
                                className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm hover:border-cyan-400/50 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="text-cyan-400 font-mono">//</span> FEATURED
                PROJECTS
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
              <p className="text-slate-400 text-lg mt-6">
                Showcasing production-grade solutions that drive impact
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all hover:scale-105"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <Code className="w-6 h-6 text-cyan-400/50 group-hover:text-cyan-400 transition-colors" />
                    </div>

                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-950/50 rounded-xl border border-slate-800/50">
                      {Object.entries(project.metrics).map(
                        ([key, value], i) => (
                          <div key={i} className="text-center">
                            <div className="text-lg font-bold text-cyan-400">
                              {value}
                            </div>
                            <div className="text-xs text-slate-500 capitalize">
                              {key}
                            </div>
                          </div>
                        ),
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm hover:border-cyan-400/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-4">
                      {/* <a
                        href={project.link}
                        className="flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-slate-300 hover:text-cyan-400 transition-all group/link"
                      >
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        <span>Live Demo</span>
                      </a> */}
                      <a
                        href={project.github}
                        className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-lg text-slate-400 hover:text-cyan-400 transition-all"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 px-4 bg-slate-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="text-cyan-400 font-mono">//</span> TECHNICAL
                SKILLS
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
              <p className="text-slate-400 text-lg mt-6">
                Technologies and tools I work with
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, data], idx) => (
                <div
                  key={idx}
                  className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all hover:scale-105"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        {category === "Frontend" && (
                          <Code className="w-6 h-6 text-cyan-400" />
                        )}
                        {category === "Backend" && (
                          <Terminal className="w-6 h-6 text-cyan-400" />
                        )}
                        {category === "Database" && (
                          <Database className="w-6 h-6 text-cyan-400" />
                        )}
                        {category === "DevOps" && (
                          <Cloud className="w-6 h-6 text-cyan-400" />
                        )}
                        {category === "Tools" && (
                          <Cpu className="w-6 h-6 text-cyan-400" />
                        )}
                        <h3 className="text-xl font-bold text-cyan-400">
                          {category}
                        </h3>
                      </div>
                      {/* <span className="text-2xl font-bold text-cyan-400">
                        {data.level}%
                      </span> */}
                    </div>

                    <div className="mb-6 bg-slate-950/50 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000"
                        style={{ width: `${data.level}%` }}
                      />
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {data.items.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className="px-3 py-1.5 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 text-sm hover:border-cyan-500/30 hover:text-cyan-400 transition-all hover:scale-105"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="text-cyan-400 font-mono">//</span> LET'S
                CONNECT
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6" />
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                I'm currently open to new opportunities and interesting
                projects. Whether you have a question or just want to say hi,
                feel free to reach out!
              </p>
            </div>

            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-12 hover:border-cyan-500/30 transition-all">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-0 hover:opacity-20 blur transition-all" />
              <div className="relative grid md:grid-cols-2 gap-6">
                {[
                  {
                    Icon: Mail,
                    label: "Email",
                    value: "tamurailyas@gmail.com",
                    href: "mailto:tamurailyas@gmail.com",
                  },
                  {
                    Icon: Github,
                    label: "GitHub",
                    value: "github.com/tamurailyas",
                    href: "https://github.com/chaudhry-ilyas",
                  },
                  {
                    Icon: Linkedin,
                    label: "LinkedIn",
                    value: "linkedin.com/in/tamurailyas",
                    href: "https://linkedin.com/in/tamurailyas",
                  },
                  {
                    Icon: Globe,
                    label: "Website",
                    value: "tamurailyas.dev",
                    href: "https://alexmorgan.dev",
                  },
                ].map(({ Icon, label, value, href }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    onMouseEnter={() => setCursorVariant("hover")}
                    onMouseLeave={() => setCursorVariant("default")}
                    className="group flex items-center space-x-4 p-6 bg-slate-950/50 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-all hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">{label}</div>
                      <div className="text-slate-300 group-hover:text-cyan-400 transition-colors">
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 inline-flex items-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-semibold">Send me a message</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-slate-800/50 bg-slate-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-3">
                {/* <Terminal className="w-6 h-6 text-cyan-400" /> */}
                {/* <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> */}
                {/* {"<DevPro />"} */}
                {/* </span> */}
              </div>

              <div className="flex items-center space-x-6">
                {[Github, Linkedin, Mail, Globe].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    onMouseEnter={() => setCursorVariant("hover")}
                    onMouseLeave={() => setCursorVariant("default")}
                    className="text-slate-500 hover:text-cyan-400 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-slate-500 text-sm">© 2025 Tamura Ilyas</p>
              <p className="text-slate-600 text-sm mt-2 font-mono">
                System Status: <span className="text-green-400">● ONLINE</span>{" "}
                | Response Time: <span className="text-cyan-400">42ms</span>
              </p>
            </div>
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
}
