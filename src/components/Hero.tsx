import { ArrowRight } from "lucide-react";
import YourImage from "../assets/your-image.png"; // <-- REPLACE WITH YOUR IMAGE

const Hero = ({ scrollToSection }) => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20">
            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                {/* Text Content */}
                <div className="text-center md:text-left">
                    <h1
                        className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent leading-tight"
                        data-aos="fade-right"
                    >
                        I'm Norng Peng
                    </h1>
                    <h2
                        className="text-2xl md:text-3xl font-light text-gray-600 mb-8"
                        data-aos="fade-right"
                        data-aos-delay="200"
                    >
                        A Front-End Developer who crafts digital experiences.
                    </h2>
                    <p
                        className="text-lg text-gray-500 max-w-2xl mx-auto md:mx-0 mb-10"
                        data-aos="fade-right"
                        data-aos-delay="400"
                    >
                        With over 2 years of experience, I turn complex problems into
                        beautiful, intuitive, and responsive web applications.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold py-3 px-8 rounded-full transition-transform transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                        >
                            <span>Get In Touch</span>
                            <ArrowRight size={20} />
                        </button>
                        <button
                            onClick={() => scrollToSection("experience")}
                            className="border-2 border-emerald-500 text-emerald-600 font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-emerald-500 hover:text-white transform hover:scale-105"
                        >
                            View My Work
                        </button>
                    </div>
                </div>
                {/* Image */}
                <div className="flex justify-center" data-aos="fade-left">
                    <img
                        src={YourImage}
                        alt="Norng Peng"
                        className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover shadow-2xl border-4 border-white"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;