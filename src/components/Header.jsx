import "boxicons/css/boxicons.min.css";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-3xl md:text-4xl lg:text-5xl font-light m-0"
      >
        MCODE
      </h1>

      <nav className="hidden md:flex items-center gap-12">
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          COMPANY
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          FEATURES
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          RESOURCES
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          DOCS
        </a>
      </nav>

      <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
        SIGN IN
      </button>

      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-3xl p-2 z-50"
      >
        <i className="bx bx-menu"></i>
      </button>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 bottom-6 right-0 left-0 p-5 md:hidden z-40 bg-black backdrop-blur-md"
          >
            <motion.nav
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="flex flex-col gap-6 items-center"
            >
              <a
                className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
                href="#"
              >
                COMPANY
              </a>
              <a
                className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
                href="#"
              >
                FEATURES
              </a>
              <a
                className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
                href="#"
              >
                RESOURCES
              </a>
              <a
                className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
                href="#"
              >
                DOCS
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
