import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data";

const Header = ({ activeSection, scrollToSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? "bg-white/90 backdrop-blur-sm shadow-md" : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center h-20">
                    <a
                        href="#home"
                        onClick={() => scrollToSection("home")}
                        className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"
                    >
                        NorngPeng.dev
                    </a>

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
                        className="md:hidden text-gray-800 z-50"
                        onClick={() => setIsMenuOpen(!isMenuОpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? "transform-none" : "-translate-y-full"
                    }`}
            >
                <nav className="flex flex-col items-center justify-center h-full space-y-6">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => {
                                scrollToSection(link.id);
                                setIsMenuOpen(false);
                            }}
                            className="text-2xl font-medium text-gray-700 hover:text-emerald-600 transition-colors"
                        >
                            {link.title}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;