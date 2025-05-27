import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
  With hands-on experience building secure, scalable, and ML-driven services, I specialize in developing robust backend systems and intelligent web applications using technologies like Python, Go, Node.js, and cloud-native tools on Azure and GCP.
</p>

<p className="text-muted-foreground">
  I'm passionate about designing efficient systems that solve real-world problems—whether it's streaming real-time training metrics, deploying AI-powered chatbots, or creating seamless user experiences. I’m constantly exploring new technologies like LangChain, RAG pipelines, and container orchestration to push the boundaries of what’s possible.
</p>


            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1g3lLw6a89-kkAn5-TVQGtfyEfcWDzD3h/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

       <div className="grid grid-cols-1 gap-6">
  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <Code className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-lg">Backend & Web Development</h4>
        <p className="text-muted-foreground">
          Building scalable, secure web applications and RESTful APIs using Node.js, Express.js, Django, and Golang.
        </p>
      </div>
    </div>
  </div>

  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <User className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-lg">Machine Learning & AI</h4>
        <p className="text-muted-foreground">
          Developing intelligent applications using PyTorch, TensorFlow, and LangChain, with a focus on retrieval-augmented generation and data-driven insights.
        </p>
      </div>
    </div>
  </div>

  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <Briefcase className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-lg">Cloud & DevOps</h4>
        <p className="text-muted-foreground">
          Deploying and managing cloud-native solutions on Azure and GCP using Docker, CI/CD pipelines, and orchestration tools for production-scale reliability.
        </p>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};
