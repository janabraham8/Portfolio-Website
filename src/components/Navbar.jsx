import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 z-40 w-full border-b border-white/10 bg-[rgba(10,10,10,0.8)] shadow-lg backdrop-blur-lg">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            jan<span className="text-blue-500">.dev</span>{" "}
          </a>

          <div
            className="relative z-40 h-5 w-7 cursor-pointer md:hidden"

            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden items-center md:flex md:space-x-8">
            <a
              href="#home"

              className="text-gray-300 transition-colors hover:text-white"
            >
              Home
            </a>

            <a
              href="#about"

              className="text-gray-300 transition-colors hover:text-white"
            >
              About
            </a>

            <a
              href="#projects"

              className="text-gray-300 transition-colors hover:text-white"
            >
              Projects
            </a>

            <a
              href="#contact"

              className="text-gray-300 transition-colors hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
