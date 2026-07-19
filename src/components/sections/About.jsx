export const About = () => {
  const frontendSkills = ["React", "TailwindCSS"];
  const backendSkills = ["Python", "Java", "C#", "SQL", "Delphi"];

  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center py-20"
    >
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-8 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-center text-3xl font-bold text-transparent">
          About Me
        </h2>

        <div className="rounded-xl border border-white/10 p-8 transition-all hover:-translate-y-1">
          <p className="mb-4 text-gray-300">
            I'm a dependable and adaptable individual with excellent
            communication and teamwork skills, eager to apply technical
            knowledge in a professional environment. Seeking an opportunity to
            contribute to innovative projects while developing practical
            experience and growing as an IT professional.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl p-6 transition-all hover:-translate-y-1">
              <h3 className="mb-4 text-xl font-bold">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 transition-all hover:-translate-y-1">
              <h3 className="mb-4 text-xl font-bold">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
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
            <ul className="list-inside list-disc space-y-2 text-gray-300">
              <li>
                <strong> BSc in Information Technology </strong> - North-West
                University (NWU), South Africa (2024 - Present)
              </li>
              <li>
                Relevant Coursework: Software Development, Database Management,
                Networking, Cybersecurity, and IT Project Management.
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 p-6 transition-all hover:-translate-y-1">
            <h3 className="mb-4 text-xl font-bold">Work Experience</h3>
            <ul className="list-inside list-disc space-y-2 text-gray-300">
              <li>
                <strong>
                  Assistant Coder at Smart Practice (November 2024)
                </strong>
                <p>
                  Assisted senior developers with writing, testing, and
                  debugging code, gaining experience with codebases.
                </p>
                <p>Utilized Git for collaborative development.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
