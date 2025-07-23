export const AchievementSection = () => {
  const certificates = [
    {
      title: "Meta Front-End Certificate",
      link: "https://coursera.org/share/meta-cert-link",
    },
    {
      title: "Google UX Design Certificate",
      link: "public/pdfs/ux.pdf",
    },
    {
      title: "Responsive Web – freeCodeCamp",
      link: "https://freecodecamp.org/certification/your-name/responsive-web-design",
    },
    {
      title: "Git & GitHub – Udemy",
      link: "https://udemy.com/certificate/git-github-link",
    },
    {
      title: "JS Algorithms – BOORD INFINITY",
      link: "/pdfs/dsajava.pdf",
    },
    {
      title: "React Basics – Coursera",
      link: "https://coursera.org/share/react-basics-link",
    },
  ];

  const internships = [
    {
      title: "FullStack Web dev – CodeAlpha",
      link: "/pdfs/CodeAlpha.pdf",
    },
    {
      title: "Web Dev – Bharat Intern",
      link: "https://yourdomain.com/bharat-certificate.pdf",
    },
    {
      title: "UX Intern – Oasis Infobyte",
      link: "https://yourdomain.com/oasis-certificate.pdf",
    },
    {
      title: "UI Intern – LetsGrowMore",
      link: "https://yourdomain.com/letsgrowmore-certificate.pdf",
    },
  ];

  return (
    <section className="py-12 px-4" id="achievements">
      <h2
        className="text-5xl md:text-6xl font-extrabold mb-12 text-center text-transparent bg-clip-text 
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
        dark:from-indigo-300 dark:via-purple-400 dark:to-pink-400 
        animate-float3D hover:scale-[1.13] transition-transform duration-500"
      >
        Achievements
      </h2>

      <div className="grid md:grid-cols-2 gap-8 perspective">
        {/* Certificates Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
            🎓 Certificates
          </h3>
          <ul className="space-y-4 px-30">
            {certificates.map((cert, index) => (
              <li
                key={index}
                className="p-4 rounded-xl shadow-xl bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 transform-gpu transition-all duration-300 hover:rotate-[1deg] hover:scale-105 hover:shadow-purple-300/40"
              >
                <div className="flex justify-between items-center">
                  <span>{cert.title}</span>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 px-3 py-1 rounded-md bg-purple-300/50 text-[#0f1729] hover:bg-purple-400 hover:scale-105 transition-all duration-300 shadow-md inline-flex items-center justify-center w-auto text-xl" // Font size increased here
                  >
                    View
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Internships Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-violet-300">
            💼 Internships
          </h3>
          <ul className="space-y-4 px-30">
            {internships.map((intern, index) => (
              <li
                key={index}
                className="p-4 rounded-xl shadow-xl bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 transform-gpu transition-all duration-300 hover:rotate-[1deg] hover:scale-105 hover:shadow-purple-300/40"
              >
                <div className="flex justify-between items-center">
                  <span>{intern.title}</span>
                  <a
                    href={intern.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 px-3 py-1 rounded-md bg-purple-300/50 text-[#0f1729] hover:bg-purple-400 hover:scale-105 transition-all duration-300 shadow-md inline-flex items-center justify-center w-auto text-xl" // Font size increased here
                  >
                    View
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
