import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "RIndia – Responsive Restaurant Website using React & Tailwind CSS",
    description: "RIndia is a modern, responsive restaurant website built with React and Tailwind CSS, showcasing menus, contact, and branding—perfect for enhancing a restaurant’s online presence and customer experience.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "https://rindia.netlify.app",
    githubUrl: "https://github.com/Diptiranjan41",
  },
{
  id: 2,
  title: "Travel Planner – Go Vicky Go",
  description:
    "Go Vicky Go – Your Smart Travel Planner 🌍 Currently under development and partially implemented. The core travel planning and UI features are functional, while AI-powered trip suggestions and booking modules are in progress.",
  image: "/projects/project2.png",
  tags: ["React", "TailwindCSS", "API"],
  demoUrl: "https://go-vicky-go-h2i2-git-main-diptiranjan-mahaptras-projects.vercel.app/",
  githubUrl: "https://github.com/Diptiranjan41/Go-Vicky-Go",
}
,
  {
  id: 3,
  title: "AI-Powered Career Recommendation & Internship Matching Platform",
  description:
    "An AI-driven platform designed to recommend personalized career paths and match students with relevant internships based on their skills, interests, and academic background. (Under Development)",
  image: "/projects/project3.png",
  tags: ["React", "Node.js", "Express", "MongoDB", "Machine Learning"],
  demoUrl: "#",
  githubUrl: "#",
}
,
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={`${project.id}-${tag}-${index}`} // ✅ fixed: unique key
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"  >
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Diptiranjan41"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>

      </div>




    </section>
  );
};
