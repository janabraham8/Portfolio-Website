import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const technicalSkills = [
    "Python",
    "Java",
    "C#",
    "SQL",
    "C++",
    "Delphi",
    "Git/Github",
  ];

  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-8 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-center text-3xl font-bold text-transparent">
            About Me
          </h2>

          <div className="rounded-xl border border-white/10 p-8 transition-all hover:-translate-y-1">
            <p className="mb-4 text-gray-300">
              I'm an adaptable IT student who values clear communication, clean
              code, and practical problem-solving. Through my studies and
              hands-on projects, I've built a solid grounding in software
              engineering and database systems.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-xl p-6 transition-all hover:-translate-y-1">
                <h3 className="mb-4 text-xl font-bold">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="rounded-full bg-green-500/15 px-3 py-1 text-sm text-green-500 transition hover:bg-green-500/20 hover:shadow-[0_0_15px_rgba(34,197,94,0.15)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 p-6 transition-all hover:-translate-y-1">
              <h3 className="mb-4 text-xl font-bold">Education</h3>

              <div className="space-y-4 text-gray-300">
                <div className="border-b border-white/10 pb-3">
                  <strong className="text-blue-500">
                    BSc in Information Technology -{" "}
                  </strong>
                  North-West University (NWU), South Africa (2024 - Present)
                </div>

                <div className="border-b-4 border-white/30 pb-3">
                  <span className="font-semibold text-green-400">
                    Relevant Coursework:{" "}
                  </span>
                  Software Development, Database Management, Networking,
                  Cybersecurity, Systems Analysis, Project Management,
                  Analytical and Quantitative Foundation.
                </div>

                <div className="border-b border-white/10 pb-3">
                  <strong className="text-blue-500">
                    Cybersecurity Fundamentals -{" "}
                  </strong>
                  IBM Skills
                </div>

                <div>
                  <span className="font-semibold text-green-400">
                    View Here:{" "}
                  </span>
                  <a
                    href="https://www.credly.com/badges/7686b16c-006f-4aa2-ae89-bea13d02a832/public_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 underline transition hover:text-blue-300"
                  >
                    Link ↗
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 p-6 transition-all hover:-translate-y-1">
              <h3 className="mb-4 text-xl font-bold">Work Experience</h3>

              <div className="space-y-4 text-gray-300">
                <div className="border-b border-white/10 pb-3">
                  <strong className="text-blue-500">
                    Assistant Coder At Smart Practice -{" "}
                  </strong>
                  (November 2024)
                </div>

                <div className="border-b-4 border-white/30 pb-3">
                  <p>
                    Assisted senior developers with writing, testing, and
                    debugging code, gaining experience with codebases.
                  </p>
                  <p>Utilized Git for collaborative development.</p>
                </div>

                <div className="border-b border-white/10 pb-3">
                  <strong className="text-blue-500">
                    Waiter At Redberry Farm -{" "}
                  </strong>
                  Seasonal (2023-2025)
                </div>

                <div>
                  Three consecutive years a waiter during peak December when
                  hundreds of customers visit a day.
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
