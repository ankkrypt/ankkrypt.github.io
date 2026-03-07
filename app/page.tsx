"use client";

import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["About", "Skills", "Projects", "Stats", "Contact"];

  const skillIcons = {
    Python: "python",
    JavaScript: "javascript",
    TypeScript: "typescript",
    Java: "java",
    C: "c",
    "C++": "cpp",
    React: "react",
    "Next.js": "nextjs",
    TailwindCSS: "tailwind",
    "Node.js": "nodejs",
    Express: "express",
    MongoDB: "mongodb",
    MySQL: "mysql",
    PostgreSQL: "postgresql",
    Docker: "docker",
    Git: "git",
    GitHub: "github",
    Linux: "linux",
    Bash: "bash",
    "VS Code": "vscode",
  };

  const getIconUrl = (skill: string) => {
    const iconName = skillIcons[skill as keyof typeof skillIcons] || skill.toLowerCase();
    return `https://skillicons.dev/icons?i=${iconName}`;
  };

  const projects = [
    {
      title: "Project One",
      description: "Problem-focused app with clean architecture and real use-case value.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/ankkrypt",
    },
    {
      title: "Project Two",
      description: "Performance-oriented backend/service with robust API design.",
      tech: ["TypeScript", "Express", "PostgreSQL"],
      link: "https://github.com/ankkrypt",
    },
    {
      title: "Project Three",
      description: "Automation/tooling project to improve development productivity.",
      tech: ["Python", "Bash", "GitHub Actions"],
      link: "https://github.com/ankkrypt",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-[#1e293b]">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo with Profile Picture */}
          <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img
              src="https://github.com/ankkrypt.png"
              alt="Ankit Dhotre"
              width={40}
              height={40}
              className="rounded-full border-2 border-[#22d3ee] w-10 h-10"
            />
            <span className="text-lg sm:text-xl font-bold text-[#22d3ee]">Ankit Dhotre</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-300 hover:text-[#22d3ee] transition-colors duration-200 text-sm"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-[#22d3ee] transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-[#22d3ee] transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-[#22d3ee] transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0f172a] border-t border-[#1e293b] py-4">
            <div className="flex flex-col gap-4 px-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-300 hover:text-[#22d3ee] transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-[#22d3ee] text-lg font-mono">Hi, I'm</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white">
              Ankit Dhotre
            </h1>
            <h2 className="text-2xl md:text-3xl text-[#06b6d4] font-semibold">
              Full Stack Developer
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Curious builder • Consistent learner • Future-ready developer
            </p>
            <p className="text-slate-300 text-base leading-relaxed">
              Building projects that actually solve problems. Learning deeply. Shipping consistently.
              Open to internships, collaborations, and impactful teams.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/ankkrypt"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#22d3ee] text-[#020617] font-semibold rounded-lg hover:bg-[#06b6d4] transition-all duration-200 hover:scale-105"
              >
                View GitHub
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-[#22d3ee] text-[#22d3ee] font-semibold rounded-lg hover:bg-[#22d3ee] hover:text-[#020617] transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#22d3ee]/20 rounded-full blur-3xl"></div>
              <img
                src="https://github.com/ankkrypt.png"
                alt="Ankit Dhotre"
                className="relative rounded-full border-4 border-[#22d3ee] shadow-2xl shadow-[#22d3ee]/20 w-96 h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            <span className="text-[#22d3ee]">01.</span> About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I'm a passionate full-stack developer who learns by building production-style projects,
                not just tutorials. I focus on creating applications that solve real problems with
                clean, maintainable code.
              </p>
              <p>
                I enjoy tackling challenging problems across the full stack and thinking about
                systems holistically. My approach emphasizes continuous improvement, performance,
                and clean architecture.
              </p>
              <p>
                Currently, I'm building full-stack applications using modern technologies and
                focusing on scalable web development patterns, backend APIs, and system design fundamentals.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-[#1e293b] p-6 rounded-lg border border-[#334155]">
                <h3 className="text-[#22d3ee] font-semibold mb-4 text-lg">🧠 Current Focus</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Scalable web development patterns</li>
                  <li>• Backend APIs and system design</li>
                  <li>• Performance and clean architecture</li>
                  <li>• Open-source collaboration</li>
                </ul>
              </div>
              <div className="bg-[#1e293b] p-6 rounded-lg border border-[#334155]">
                <h3 className="text-[#22d3ee] font-semibold mb-4 text-lg">💼 Open To</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Internship opportunities</li>
                  <li>• Serious collaborations</li>
                  <li>• Impactful teams</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            <span className="text-[#22d3ee]">02.</span> Skills & Technologies
          </h2>
          
          {/* Skills Icons Grid */}
          <div className="mb-12 p-8 bg-[#0f172a] rounded-lg border border-[#1e293b]">
            <h3 className="text-[#22d3ee] font-semibold mb-8 text-lg">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {Object.keys(skillIcons).map((skill) => (
                <div
                  key={skill}
                  className="flex flex-col items-center gap-2 hover:transform hover:scale-110 transition-transform duration-200"
                >
                  <img
                    src={`https://skillicons.dev/icons?i=${skillIcons[skill as keyof typeof skillIcons]}`}
                    alt={skill}
                    className="w-12 h-12"
                  />
                  <span className="text-slate-300 text-xs text-center">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Skills Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#0f172a] p-6 rounded-lg border border-[#1e293b] hover:border-[#22d3ee] transition-all duration-300">
              <h3 className="text-[#22d3ee] font-semibold mb-4 text-lg">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "JavaScript", "TypeScript", "Java", "C", "C++"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#1e293b] text-slate-300 rounded-full text-sm hover:bg-[#22d3ee] hover:text-[#020617] transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#0f172a] p-6 rounded-lg border border-[#1e293b] hover:border-[#22d3ee] transition-all duration-300">
              <h3 className="text-[#22d3ee] font-semibold mb-4 text-lg">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TailwindCSS"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#1e293b] text-slate-300 rounded-full text-sm hover:bg-[#22d3ee] hover:text-[#020617] transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#0f172a] p-6 rounded-lg border border-[#1e293b] hover:border-[#22d3ee] transition-all duration-300">
              <h3 className="text-[#22d3ee] font-semibold mb-4 text-lg">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#1e293b] text-slate-300 rounded-full text-sm hover:bg-[#22d3ee] hover:text-[#020617] transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#0f172a] p-6 rounded-lg border border-[#1e293b] hover:border-[#22d3ee] transition-all duration-300">
              <h3 className="text-[#22d3ee] font-semibold mb-4 text-lg">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {["MongoDB", "MySQL", "PostgreSQL"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#1e293b] text-slate-300 rounded-full text-sm hover:bg-[#22d3ee] hover:text-[#020617] transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#0f172a] p-6 rounded-lg border border-[#1e293b] hover:border-[#22d3ee] transition-all duration-300 md:col-span-2 lg:col-span-1">
              <h3 className="text-[#22d3ee] font-semibold mb-4 text-lg">Tools & Misc</h3>
              <div className="flex flex-wrap gap-2">
                {["Docker", "Git", "GitHub", "Linux", "Bash", "VS Code"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#1e293b] text-slate-300 rounded-full text-sm hover:bg-[#22d3ee] hover:text-[#020617] transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            <span className="text-[#22d3ee]">03.</span> Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#020617] p-6 rounded-lg border border-[#1e293b] hover:border-[#22d3ee] transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[#22d3ee] text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#22d3ee] hover:text-[#06b6d4] transition-colors"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="https://github.com/ankkrypt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border-2 border-[#22d3ee] text-[#22d3ee] font-semibold rounded-lg hover:bg-[#22d3ee] hover:text-[#020617] transition-all duration-200"
            >
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 px-6 bg-[#020617]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            <span className="text-[#22d3ee]">04.</span> GitHub Stats & Activity
          </h2>
          
          {/* Quick Stats Row */}
          <div className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a
                href="https://github.com/ankkrypt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center min-h-[100px] py-8 px-6 bg-[#0f172a] rounded-lg border-2 border-[#1e293b] hover:border-[#22d3ee] transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src="https://komarev.com/ghpvc/?username=ankkrypt&label=PROFILE+VIEWS&color=06b6d4&style=flat-square"
                  alt="Profile Views"
                  className="h-[28px] w-auto"
                />
              </a>
              <a
                href="https://github.com/ankkrypt?tab=followers"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center min-h-[100px] py-8 px-6 bg-[#0f172a] rounded-lg border-2 border-[#1e293b] hover:border-[#22d3ee] transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src="https://img.shields.io/github/followers/ankkrypt?label=FOLLOWERS&style=flat-square&color=0ea5e9"
                  alt="Followers"
                  className="h-[28px] w-auto"
                />
              </a>
              <a
                href="https://github.com/ankkrypt?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center min-h-[100px] py-8 px-6 bg-[#0f172a] rounded-lg border-2 border-[#1e293b] hover:border-[#22d3ee] transition-all duration-300 hover:-translate-y-1 sm:col-span-3 md:col-span-1"
              >
                <img
                  src="https://img.shields.io/github/stars/ankkrypt?affiliations=OWNER&style=flat-square&color=22d3ee"
                  alt="Stars"
                  className="h-[28px] w-auto"
                />
              </a>
            </div>
          </div>

          {/* GitHub Stats and Languages Side by Side */}
          <div className="mb-16">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <a
                href="https://github.com/ankkrypt"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#0f172a] rounded-lg border border-[#1e293b] hover:border-[#22d3ee] transition-all duration-300 hover:-translate-y-1 p-2"
              >
                <img
                  src="https://github-readme-stats-eight-theta.vercel.app/api?username=ankkrypt&show_icons=true&theme=tokyonight&hide_border=true&rank_icon=percentile&include_all_commits=true"
                  alt="GitHub Stats"
                  className="w-full rounded-lg"
                />
              </a>
              <a
                href="https://github.com/ankkrypt"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#0f172a] rounded-lg border border-[#1e293b] hover:border-[#22d3ee] transition-all duration-300 hover:-translate-y-1 p-2"
              >
                <img
                  src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=ankkrypt&layout=compact&theme=tokyonight&hide_border=true&langs_count=10"
                  alt="Top Languages"
                  className="w-full rounded-lg"
                />
              </a>
            </div>
          </div>

          {/* Contribution Streak */}
          <div className="mb-16">
            <a
              href="https://github.com/ankkrypt"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#0f172a] rounded-lg border border-[#1e293b] hover:border-[#22d3ee] transition-all duration-300 hover:-translate-y-1 p-2"
            >
              <div className="flex justify-center">
                <img
                  src="https://streak-stats.demolab.com?user=ankkrypt&theme=tokyonight&hide_border=true"
                  alt="Contribution Streak"
                  className="rounded-lg"
                />
              </div>
            </a>
          </div>

          {/* Activity Graph */}
          <div className="mb-16">
            <a
              href="https://github.com/ankkrypt"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#0f172a] rounded-lg border border-[#1e293b] hover:border-[#22d3ee] transition-all duration-300 hover:-translate-y-1 p-2"
            >
              <img
                src="https://github-readme-activity-graph.vercel.app/graph?username=ankkrypt&theme=tokyo-night&hide_border=true&bg_color=0d1117&color=22d3ee&line=06b6d4&point=67e8f9"
                alt="Activity Graph"
                className="w-full rounded-lg"
              />
            </a>
          </div>

          {/* Profile Summary */}
          <div>
            <a
              href="https://github.com/ankkrypt"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#0f172a] rounded-lg border border-[#1e293b] hover:border-[#22d3ee] transition-all duration-300 hover:-translate-y-1 p-2"
            >
              <img
                src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=ankkrypt&theme=tokyonight"
                alt="Profile Summary"
                className="w-full rounded-lg"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-[#0f172a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-[#22d3ee]">05.</span> Get In Touch
          </h2>
          <p className="text-slate-300 text-lg mb-12 leading-relaxed">
            I'm currently looking for internship opportunities and open to collaborations.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:ankitdhotre21@gmail.com"
              className="px-8 py-4 bg-[#22d3ee] text-[#020617] font-semibold rounded-lg hover:bg-[#06b6d4] transition-all duration-200 hover:scale-105"
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/ankitdhotre"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-[#22d3ee] text-[#22d3ee] font-semibold rounded-lg hover:bg-[#22d3ee] hover:text-[#020617] transition-all duration-200"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#1e293b]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            Built with Next.js & TailwindCSS by Ankit Dhotre
          </p>
          <p className="text-slate-500 text-sm mt-2">
            © 2026 • Code • Build • Evolve
          </p>
        </div>
      </footer>
    </div>
  );
}
