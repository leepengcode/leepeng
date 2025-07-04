import { Globe, Smartphone, Code } from "lucide-react";

export const navLinks = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "services", title: "Services" },
    { id: "experience", title: "Work" },
    { id: "contact", title: "Contact" },
];

export const techStack = [
    "React.js", "Vue 3", "TypeScript", "Laravel",
    "Flutter", "Tailwind CSS", "JavaScript", "Git",
];

export const projects = [
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

export const services = [
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