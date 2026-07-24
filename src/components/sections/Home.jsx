import { RevealOnScroll } from "../RevealOnScroll";
import resumePdf from "../../assets/J_Mostert_CV.pdf";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center"
    >
      <RevealOnScroll>
        <div className="z-10 px-4 text-center">
          <h1 className="mb-6 bg-gradient-to-r from-blue-500 to-green-600 bg-clip-text text-5xl font-bold leading-tight text-transparent md:text-7xl">
            Hi, I'm Jan Mostert
          </h1>
          <p className="mx-auto mb-8 max-w-lg text-lg text-gray-400">
            A Final-year Information Technology student dedicated to building
            clean, functional software. Combining academic performance with
            practical development skills to solve real-world problems.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href={resumePdf}
              download="J_Mostert_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded bg-blue-500 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="rounded border border-blue-500/50 px-6 py-3 font-medium text-blue-500 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
