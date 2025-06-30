import "boxicons/css/boxicons.min.css";

const Header = () => {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenu?.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu?.classList.add("hidden");
    }
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-sm md:text-md lg:text-xl font-bold m-0"
      >
        LEEPENG
      </h1>

      {/* Desktop Navigation*/}
      <nav className="hidden md:flex items-center gap-12 ">
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="text-base  font-bold tracking-wider transition-colors hover:text-gray-300 z-50 "
          href="#"
        >
          Home
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-base  font-bold tracking-wider transition-colors hover:text-gray-300 z-50 "
          href="#"
        >
          Project
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="text-base  font-bold tracking-wider transition-colors hover:text-gray-300 z-50 "
          href="#"
        >
          About
        </a>
      </nav>

      <button
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="2500"
        type="button"
        className="hidden md:block bg-[#a7a7a7] text-black py-2 px-3 rounded-full border-none font-medium  transition-all duration-500  hover:bg-white cursor-pointer z-50"
      >
        <i class="bx bx-message-rounded-dots"></i>
      </button>

      {/* Mobile Menu button - Visible only on Mobile*/}

      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-3xl p-2 z-50"
        type="button"
      >
        <i className="bx bx-menu"></i>
      </button>

      {/* Mobile Menu - Hidden by default*/}
      <div
        id="mobileMenu"
        className="fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70"
      >
        <nav className="flex flex-col gap-6 items-center ">
          <a
            className="text-base text-white tracking-wider transition-colors hover:text-gray-300  z-50 "
            href="#"
          >
            Home
          </a>
          <a
            className="text-base text-white tracking-wider transition-colors hover:text-gray-300 z-50 "
            href="#"
          >
            Project
          </a>
          <a
            className="text-base  text-white tracking-wider transition-colors hover:text-gray-300 z-50 "
            href="#"
          >
            About
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
