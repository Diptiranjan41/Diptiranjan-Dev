import React from "react";

const experiences = [
  {
    icon: "🤖",
    title: "Software Engineer Contributor — Handshake AI (Project Dynamo)",
    period: "2026 — Present",
    description:
      "Contributing to automated code review and evaluation pipelines, building deterministic tooling and improving CI reliability across the platform.",
    skills: [
      "Python",
      "Git/GitHub",
      "Automation",
      "Testing",
      "Debugging",
      "Software Engineering",
    ],
  },
  {
    icon: "🧑‍💻",
    title: "Computer Science Expert — Chegg",
    period: "2024 — 2026",
    description:
      "Providing expert-level solutions and explanations across computer science topics, from data structures to systems design.",
    skills: [
      "Data Structures",
      "Algorithms",
      "Problem Solving",
      "Technical Writing",
    ],
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
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const ExperienceCard = ({ exp }) => (
  <div className="group relative rounded-xl border border-border bg-card/50 backdrop-blur-md p-6 hover:-translate-y-2 transition-all duration-300 shadow-lg">

    <div className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />

    <div className="relative z-10">

      <div className="flex items-start gap-4 mb-4">
        <div className="text-4xl">
          {exp.icon}
        </div>

        <div>
          <h3 className="text-xl font-semibold">
            {exp.title}
          </h3>

          <p className="text-primary text-sm mt-1">
            {exp.period}
          </p>
        </div>
      </div>


      <p className="text-muted-foreground mb-5 leading-relaxed">
        {exp.description}
      </p>


      <div className="flex flex-wrap gap-3">
        {exp.skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center gap-1 text-sm bg-secondary px-3 py-1 rounded-full"
          >
            <CheckIcon />
            {skill}
          </div>
        ))}
      </div>

    </div>

  </div>
);


export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden"
    >

      {/* Background glow effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />


      <div className="container mx-auto max-w-5xl relative">

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          💼 Professional{" "}
          <span className="text-primary glow-text">
            Experience
          </span>
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {experiences.map((exp) => (
            <ExperienceCard
              key={exp.title}
              exp={exp}
            />
          ))}

        </div>

      </div>


      <style>{`
        .glow-text {
          text-shadow:
            0 0 10px rgba(var(--primary-rgb), 0.5),
            0 0 20px rgba(var(--primary-rgb), 0.3),
            0 0 30px rgba(var(--primary-rgb), 0.1);
        }
      `}</style>

    </section>
  );
};