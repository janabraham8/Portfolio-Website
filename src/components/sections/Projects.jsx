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
            <div className="rounded-xl border border-white/10 p-6 transition hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]">
              <h3 className="mb-2 text-xl font-bold">PAWS Project (CMPG223)</h3>
              <p className="mb-4 text-gray-300">
                Group project for CMPG223 where we created an application to
                maintain animals at shelter,view outreaches hosted by PAWS, and
                manage volunteers at outreaches
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {["C#", "MySQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="my-4 text-blue-400 transition-colors hover:text-blue-300"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
