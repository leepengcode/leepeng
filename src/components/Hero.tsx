import Spline from "@splinetool/react-spline";
import AOS from "aos";
import "aos/dist/aos.css";
import "boxicons/css/boxicons.min.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <main className="flex  lg:mt-20 flex-row lg-flex-col items-center justify-between min-h-[calc(90vh-6rem)]">
      <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
        <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-br from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
          <div
            data-aos="fade-right"
            className="absolute inset-[3px] bg-black rounded-full flex justify-center items-center gap-1"
          >
            <i class="bx bx-diamond"></i>
            <h1>INTRODUCING</h1>
          </div>
        </div>

        <h1
          data-aos="fade-right"
          className="text-3xl sm:test-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8"
        >
          EMAIL FORM
          <br />
          DEVELOPER
        </h1>

        <p
          data-aos="fade-right"
          className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]"
        >
          Switching to boxicons is easy and can be done in 2 steps. There are
          more features than just the icons set. Boxicons also follows the
          official Google Material Design guidelines
        </p>

        <div data-aos="zoom-in" className="flex gap-4 mt-12">
          <a
            className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm 
          font-semibold tracking-wider translate-all duration-300 hover:bg-[#1a1a1a]"
            href="#"
          >
            Documentation <i class="bx bx-link-external"></i>
          </a>
          <a
            className="border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm 
          font-semibold tracking-wider translate-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white"
            href="#"
          >
            Get Started <i class="bx bx-link-external"></i>
          </a>
        </div>
      </div>

      {/* 3D */}
      <Spline
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        className="absolute lg:top-0 top-[-20%] buttom-0 lg:left-[25%] sm:-[-2%] h-full"
        scene="https://prod.spline.design/tmkaeGNh5SDQIIHs/scene.splinecode"
      />
    </main>
  );
};

export default Hero;
