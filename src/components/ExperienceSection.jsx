import React from "react";

const experiences = [
  {
    icon: "🤖",
    title: "Software Engineer Contributor — Handshake AI (Project Dynamo)",
    period: "2026 — Present",
    description:
      "Contributing to automated code review and evaluation pipelines, building deterministic tooling and improving CI reliability across the platform.",
    skills: ["Python", "Git/GitHub", "Automation", "Testing", "Debugging", "Software Engineering"],
  },
  {
    icon: "🧑‍💻",
    title: "Computer Science Expert — Chegg",
    period: "2024 — 2026",
    description:
      "Providing expert-level solutions and explanations across computer science topics, from data structures to systems design.",
    skills: ["Data Structures", "Algorithms", "Problem Solving", "Technical Writing"],
  },
];

const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-green-500 flex-shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ExperienceCard = ({ exp }) => (
  <div className="backdrop-blur-md bg-background/40 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-xl group">
    <div className="flex items-start gap-4">
      <div className="text-3xl">{exp.icon}</div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {exp.title}
        </h3>
        {exp.period && (
          <p className="text-sm text-muted-foreground mb-3">
            {exp.period}
          </p>
        )}
        <p className="text-foreground/80 mb-4 leading-relaxed">
          {exp.description}
        </p>
        <ul className="space-y-2">
          {exp.skills.map((skill) => (
            <li key={skill} className="flex items-center gap-2 text-foreground/70 text-sm">
              <CheckIcon />
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-[128px] animate-pulse delay-700" />
      </div>

      <div className="container mx-auto max-w-5xl relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          💼 Professional <span className="text-primary glow-text">Experience</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.title} exp={exp} />
          ))}
        </div>
      </div>

      {/* Add custom styles for glow text */}
      <style>{`
        .glow-text {
          text-shadow: 0 0 10px rgba(var(--primary-rgb), 0.5),
                       0 0 20px rgba(var(--primary-rgb), 0.3),
                       0 0 30px rgba(var(--primary-rgb), 0.1);
        }
      `}</style>
    </section>
  );
};