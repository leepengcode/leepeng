import {
  ArrowRight,
  Award,
  Calendar,
  Code,
  Github,
  Globe,
  MapPin,
  Menu,
  MessageCircle,
  Smartphone,
  Users,
  X
} from "lucide-react";
import { useEffect, useState } from "react";
import Peng from "../assets/peng.png";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // --- Effects ---
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "services", "experience", "contact"];
      let currentSection = "home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 150) {
          currentSection = section;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // --- Handlers ---
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  // --- Data ---
  const navLinks = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "services", title: "Services" },
    { id: "experience", title: "Work" },
    { id: "contact", title: "Contact" },
  ];

  const techStack = [
    "React.js", "Vue 3", "TypeScript", "Laravel",
    "Flutter", "Tailwind CSS", "JavaScript", "Git", "Docker",
  ];

  const projects = [
    {
      company: "Cambodia Angkor Real Estate",
      role: "Front-End & App Developer",
      period: "Oct 2024 – Present",
      description: "Led the development of responsive web and mobile applications, focusing on intuitive user interfaces and seamless API integrations. Managed cloud deployment and continuous integration pipelines.",
      achievements: [
        "Developed high-performance web and mobile apps.",
        "Integrated complex APIs, boosting frontend speed.",
        "Managed scalable cloud server deployments.",
      ],
      technologies: ["React.js", "Flutter", "API Integration", "Cloud"],
    },
    {
      company: "Realty One App PLC",
      role: "Full-Stack Developer",
      period: "June 2023 – Sept 2024",
      description: "Engineered end-to-end full-stack solutions, including mobile app development and complete project lifecycle management. Delivered robust and user-centric products.",
      achievements: [
        "Built and deployed full-stack web platforms.",
        "Developed and maintained RESTful APIs.",
        "Designed and launched cross-platform mobile apps.",
        "Provided post-launch maintenance and support.",
      ],
      technologies: ["Laravel", "Flutter", "Vue 3", "API Development"],
    },
  ];

  const services = [
    {
      icon: <Globe className="w-8 h-8 text-emerald-600" />,
      title: "Web Development",
      description: "Modern, responsive websites with cutting-edge tech.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-emerald-600" />,
      title: "Mobile Apps",
      description: "Cross-platform mobile apps for iOS and Android.",
    },
    {
      icon: <Code className="w-8 h-8 text-emerald-600" />,
      title: "API Integration",
      description: "Seamless backend integration and API development.",
    },
  ];

  // --- Render ---
  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      {/* ===== Header ===== */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <button
              onClick={() => scrollToSection("home")}
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"
            >
              NP.
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === link.id
                    ? "bg-emerald-500 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                    }`}
                >
                  {link.title}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-800 z-50 relative p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white transition-transform duration-300 ease-in-out z-40 ${isMenuOpen ? "transform translate-y-0" : "transform -translate-y-full"
            }`}
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-2xl font-medium text-gray-700 hover:text-emerald-600 transition-colors"
              >
                {link.title}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* ===== Hero Section ===== */}
        <section
          id="home"
          className="min-h-screen flex items-center pt-16 sm:pt-20"
        >
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            {/* Text Content */}
            <div className="text-center md:text-left order-2 md:order-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                I'm NORNG PENG
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-600 mb-6 sm:mb-8">
                A Front-End Developer who crafts digital experiences.
              </h2>
              <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto md:mx-0 mb-8 sm:mb-10">
                With over 2 years of experience, I turn complex problems into
                beautiful, intuitive, and responsive web applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold py-3 px-6 sm:px-8 rounded-full transition-transform transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Get In Touch</span>
                  <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="border-2 border-emerald-500 text-emerald-600 font-semibold py-3 px-6 sm:px-8 rounded-full transition-all duration-300 hover:bg-emerald-500 hover:text-white transform hover:scale-105"
                >
                  View My Work
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center order-1 md:order-2">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-emerald-200 to-blue-200 flex items-center justify-center shadow-2xl border-4 border-white">

                <div
                  className="flex justify-center"
                  data-aos="fade-left"
                >
                  <img
                    src={Peng}
                    alt="Norng Peng"
                    className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover shadow-2xl border-4 border-white"
                  />

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== About Section ===== */}
        <section id="about" className="py-16 sm:py-24">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 items-center">
            <div className="lg:col-span-3 space-y-6">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                I'm a passionate developer with a Bachelor's Degree in Computer
                Science from the{" "}
                <span className="font-semibold text-emerald-600">
                  Royal University of Phnom Penh
                </span>
                . My journey in tech is driven by a love for clean code, great
                design, and solving real-world problems.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                I specialize in building user-centric applications with modern
                technologies. I'm always eager to learn and adapt to the
                ever-evolving landscape of web and mobile development.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500" />
                  <div>
                    <p className="font-bold text-sm sm:text-base">2+ Years</p>
                    <p className="text-xs sm:text-sm text-gray-500">Experience</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
                  <div>
                    <p className="font-bold text-sm sm:text-base">3+ Projects</p>
                    <p className="text-xs sm:text-sm text-gray-500">Completed</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-teal-500" />
                  <div>
                    <p className="font-bold text-sm sm:text-base">Phnom Penh</p>
                    <p className="text-xs sm:text-sm text-gray-500">Location</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-4 sm:p-6 rounded-xl border">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-emerald-600">
                  My Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-md px-3 py-1 text-xs sm:text-sm font-medium text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Services Section ===== */}
        <section id="services" className="py-16 sm:py-24 bg-gray-50 -mx-4 sm:-mx-6 px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">What I Do</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Experience Section ===== */}
        <section id="experience" className="py-16 sm:py-24">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">My Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="space-y-8 sm:space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="grid md:grid-cols-3 gap-6"
              >
                <div className="md:col-span-1">
                  <h3 className="text-lg sm:text-xl font-bold text-emerald-600">
                    {project.company}
                  </h3>
                  <p className="text-gray-500 font-medium text-sm sm:text-base">{project.role}</p>
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-teal-600 mt-1">
                    <Calendar size={14} />
                    <span>{project.period}</span>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">{project.description}</p>
                  <div className="space-y-2 mb-4">
                    {project.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 mt-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm sm:text-base">{achievement}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 border border-gray-200 rounded-full px-3 py-1 text-xs sm:text-sm font-medium text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Contact Section ===== */}
        <section id="contact" className="py-16 sm:py-24 bg-gray-50 -mx-4 sm:-mx-6 px-4 sm:px-6">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Let's Connect!</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-base sm:text-lg text-gray-600">
              Have a project in mind or just want to say hello? My inbox is
              always open. I'll get back to you as soon as possible!
            </p>
          </div>
          <div className="max-w-md mx-auto text-center">
            <a
              href="mailto:norngliipeng98@gmail.com"
              className="text-lg sm:text-2xl font-semibold text-emerald-600 hover:text-emerald-500 transition-colors break-all"
            >
              norngliipeng98@gmail.com
            </a>
            <div className="flex justify-center space-x-6 mt-6 sm:mt-8">
              <a
                href="https://github.com/leepengcode"
                className="text-gray-500 hover:text-gray-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} className="sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://t.me/Norngliipeng"
                className="text-gray-500 hover:text-teal-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={24} className="sm:w-7 sm:h-7" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="bg-gray-900 text-white">
        <div className="w-full flex items-center justify-center px-4 sm:px-6 py-6 sm:py-8">
          <p className="text-sm sm:text-base text-center">
            &copy; {new Date().getFullYear()} Norng Peng. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;