import {
  ArrowRight,
  Award,
  Calendar,
  ChevronDown,
  Code,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Smartphone,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const techStack = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Vue 3",
    "Laravel",
    "Flutter",

    "Tailwind CSS",
    "Git",
    "Cloud Server",
  ];

  const projects = [
    {
      company: "Cambodia Angkor Real Estate",
      role: "Front-End & App Developer",
      period: "Oct 2024 – Present",
      description:
        "Developed responsive web and mobile applications with API integration and cloud deployment.",
      achievements: [
        "Developed responsive web and mobile applications",
        "Integrated APIs and improved frontend performance",
        "Managed deployment to cloud servers",
      ],
      technologies: ["React.js", "Flutter", "API Integration", "Cloud"],
    },
    {
      company: "Realty One App PLC",
      role: "Full-Stack Developer",
      period: "June 2023 – Sept 2024",
      description:
        "Built complete full-stack solutions with mobile app development and comprehensive project lifecycle management.",
      achievements: [
        "Built and hosted full-stack websites",
        "Developed APIs and connected backend to frontend",
        "Designed mobile apps (Android & iOS) using Flutter",
        "Conducted testing, deployment, and user training",
        "Delivered post-launch maintenance and user support",
      ],
      technologies: ["Laravel", "Flutter", "Vue 3", "API Development"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/4 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              NorngPeng.dev
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "experience", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-300 hover:text-purple-400 ${
                    activeSection === item ? "text-purple-400" : "text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {["home", "about", "experience", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize block px-3 py-2 text-white hover:text-purple-400 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Hi, I'm Norng Peng
            </h1>
            <h2 className="text-2xl md:text-4xl font-light mb-8 text-gray-300">
              Front-End Developer
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-gray-400 max-w-4xl mx-auto leading-relaxed">
              I build clean, fast, and responsive web & mobile applications.
              <br />
              <span className="text-purple-400">2+ years</span> of professional
              experience in full-stack and mobile development.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3">
                <Code size={20} />
                <span>React.js</span>
              </div>
              <div className="flex items-center space-x-2 bg-pink-500/20 backdrop-blur-sm rounded-full px-6 py-3">
                <Globe size={20} />
                <span>Vue 3</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-6 py-3">
                <Smartphone size={20} />
                <span>Flutter</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("experience")}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>View My Work</span>
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm{" "}
                <span className="text-purple-400 font-semibold">
                  Norng Peng
                </span>
                , a front-end developer passionate about building digital
                solutions that are both beautiful and functional. I hold a{" "}
                <span className="text-pink-400 font-semibold">
                  Bachelor's Degree in Computer Science
                </span>{" "}
                from the{" "}
                <span className="text-blue-400 font-semibold">
                  Royal University of Phnom Penh
                </span>
                .
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                In my 2+ years of experience, I've worked on a variety of web
                and mobile projects, focusing on user experience, performance,
                and scalable architecture. My goal is to keep learning and
                contribute to innovative development teams.
              </p>

              <div className="flex items-center space-x-4 text-purple-400">
                <Award size={24} />
                <span className="text-lg">Bachelor's in Computer Science</span>
              </div>
              <div className="flex items-center space-x-4 text-pink-400">
                <Users size={24} />
                <span className="text-lg">
                  2+ Years Professional Experience
                </span>
              </div>
              <div className="flex items-center space-x-4 text-blue-400">
                <MapPin size={24} />
                <span className="text-lg">Phnom Penh, Cambodia</span>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-purple-400">
                  Tech Stack
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {techStack.map((tech, index) => (
                    <div
                      key={tech}
                      className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-lg p-3 text-center text-sm font-medium border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-2">
                      {project.company}
                    </h3>
                    <h4 className="text-xl text-pink-400 font-semibold">
                      {project.role}
                    </h4>
                  </div>
                  <div className="flex items-center space-x-2 text-blue-400 mt-2 md:mt-0">
                    <Calendar size={20} />
                    <span className="font-medium">{project.period}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-purple-400 mb-3">
                    Key Achievements:
                  </h5>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect!
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Whether you're hiring or just want to say hi — feel free to reach
              out.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
                  <h3 className="text-2xl font-bold mb-6 text-purple-400">
                    Get In Touch
                  </h3>

                  <div className="space-y-6">
                    <a
                      href="mailto:norngpeng.dev@gmail.com"
                      className="flex items-center space-x-4 text-gray-300 hover:text-purple-400 transition-colors duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <p className="font-semibold">norngpeng.dev@gmail.com</p>
                      </div>
                    </a>

                    <div className="flex items-center space-x-4 text-gray-300">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Location</p>
                        <p className="font-semibold">Phnom Penh, Cambodia</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
                  <h3 className="text-2xl font-bold mb-6 text-blue-400">
                    Social Links
                  </h3>

                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <MessageCircle size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/30">
                <h3 className="text-2xl font-bold mb-6 text-pink-400">
                  Quick Message
                </h3>

                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Your Message"
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-300 resize-none"
                    ></textarea>
                  </div>
                  <button
                    onClick={() => {
                      // Handle form submission here
                      alert("Message sent! (This is a demo)");
                    }}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-sm py-8 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 md:mb-0">
              NorngPeng.dev
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2024 Norng Peng. All rights reserved.</p>
              <p className="text-sm mt-1">
                Built with React, TypeScript & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
