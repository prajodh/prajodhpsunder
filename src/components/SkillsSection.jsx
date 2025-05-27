import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming Languages
  { name: "Python", level: 95, category: "programming" },
  { name: "Golang", level: 90, category: "programming" },
  { name: "JavaScript", level: 90, category: "programming" },
  { name: "Java", level: 85, category: "programming" },
  { name: "C", level: 80, category: "programming" },

  // Web Development
  { name: "Django", level: 90, category: "web" },
  { name: "Node.js", level: 85, category: "web" },
  { name: "Express.js", level: 80, category: "web" },
  { name: "Golang (net/http)", level: 80, category: "web" },
  { name: "RESTful APIs", level: 90, category: "web" },

  // Machine Learning
  { name: "TensorFlow", level: 85, category: "ml" },
  { name: "PyTorch", level: 85, category: "ml" },
  { name: "Scikit-Learn", level: 80, category: "ml" },
  { name: "LangChain / RAG", level: 90, category: "ml" },
  { name: "LangGraph", level: 80, category: "ml" },

  // Cloud & DevOps
  { name: "Azure", level: 85, category: "cloud" },
  { name: "GCP", level: 80, category: "cloud" },
  { name: "Docker", level: 85, category: "cloud" },
  { name: "CI/CD", level: 80, category: "cloud" },
  { name: "GitHub Actions", level: 75, category: "cloud" },

  // Tools & Infra
  { name: "Redis", level: 90, category: "infra" },
  { name: "RabbitMQ", level: 75, category: "infra" },
  { name: "Celery", level: 85, category: "infra" },
  { name: "Linux CLI", level: 90, category: "infra" },
  { name: "Shell Scripting", level: 75, category: "infra" },

  // Databases
  { name: "MongoDB", level: 85, category: "database" },
  { name: "PostgreSQL", level: 80, category: "database" },
  { name: "MySQL", level: 80, category: "database" },
  { name: "SQLite", level: 75, category: "database" },
  { name: "Neo4j", level: 70, category: "database" },

  // Data Analysis
  { name: "Pandas", level: 90, category: "data" },
  { name: "NumPy", level: 90, category: "data" },
  { name: "Matplotlib", level: 85, category: "data" },
  { name: "Seaborn", level: 80, category: "data" },
  { name: "OpenCV", level: 75, category: "data" },
];

const categories = [
  "all",
  "programming",
  "web",
  "ml",
  "cloud",
  "infra",
  "database",
  "data"
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

