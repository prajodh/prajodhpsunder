import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "PDF Research Paper Q&A AI-Agent",
    description:
      "Built an AI-based Q&A system using LangChain and FAISS for real-time PDF querying, enabling users to extract insights from research documents.",
    image: "./projects/image.png",
    tags: ["Python", "LangChain", "FAISS", "Streamlit"],
    demoUrl: "#",
    githubUrl: "https://github.com/prajodh/pdf-qa-agent",
  },
  {
    id: 2,
    title: "Pokedex CLI",
    description:
      "Developed an interactive CLI-based Pokédex using Golang with real-time Pokémon data fetching and REPL interface.",
    image: "/projects/image1.png",
    tags: ["Golang", "REST APIs", "CLI", "Caching"],
    demoUrl: "#",
    githubUrl: "https://github.com/prajodh/go-pokedex-cli",
  },
  {
    id: 3,
    title: "Car Rental Management System",
    description:
      "Architected a secure backend system with JWT authentication, microservices, and an AI-powered chatbot for rentals and analytics.",
    image: "/projects/hpass.png",
    tags: ["Node.js", "Express.js", "MongoDB", "Docker"],
    demoUrl: "#",
    githubUrl: "https://github.com/prajodh/car-rental-backend",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
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
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
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
            href="https://github.com/prajodh"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
