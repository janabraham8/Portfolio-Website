import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex min-h-screen items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-8 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-center text-3xl font-bold text-transparent">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Personal Portfolio Website */}
            <div className="rounded-xl border border-white/10 p-6 transition hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]">
              <h3 className="mb-2 text-xl font-bold">
                Personal Portfolio Website
              </h3>
              <p className="mb-4 text-gray-300">
                This is the website you are looking at right now.
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {["React", "TailwindCSS", "Vite"].map((tech, key) => (
                  <span
                    key={key}
                    className="rounded-full bg-green-500/15 px-3 py-1 text-sm text-green-500 transition hover:bg-green-500/20 hover:shadow-[0_0_15px_rgba(34,197,94,0.15)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <a
                  href="https://github.com/janabraham8/j-mostert-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="my-4 text-blue-400 transition-colors hover:text-blue-300"
                >
                  View Project ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
