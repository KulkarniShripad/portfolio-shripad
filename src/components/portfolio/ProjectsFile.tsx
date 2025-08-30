import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, Calendar } from "lucide-react";

const ProjectsFile = () => {
  const projects = [
    {
      id: 1,
      name: "ELA App - Android App",
      description:
        "Developed an app streamlining payments and processes for MSEB employees, targeted at Workers Union (ELA) members.",
      technologies: ["Flutter", "Firebase"],
      githubUrl: "#", // add repo if public
      liveUrl: "#",
      stars: 0,
      status: "Completed",
      lastUpdated: "2024-06", // May 2024 - Jun 2024
      highlights: [
        "Manage yearly fees for association members",
        "Daily updates from admin with real-time notifications",
        "Grievances submission and resolution system",
        "Authentication with multiple conditional checks",
      ],
    },
    {
      id: 2,
      name: "HP Tracker",
      description:
        "Centralized medical app automating medicine reminders with e-prescriptions and unifying patient history.",
      technologies: ["Flutter", "Dart", "Flask", "Firebase", "APIs"],
      githubUrl: "https://github.com/KulkarniShripad/hptracker",
      liveUrl: "#",
      stars: 0,
      status: "Completed",
      lastUpdated: "2024-04", // adjust if resume date differs
      highlights: [
        "Generates automated medicine reminders from prescriptions",
        "Maintains unified patient medical history for better diagnosis",
        "Built with Flutter for cross-platform compatibility",
        "Secure backend with Flask and Firebase integration",
      ],
    },
    {
      id: 3,
      name: "Trackit - Version Control System",
      description:
        "A custom version control system in C, built with linked lists and hashing to mimic git-like functionality.",
      technologies: ["C", "File Handling", "Data Structures"],
      githubUrl:
        "https://github.com/KulkarniShripad/trackit-version-control-system",
      liveUrl: "#",
      stars: 0,
      status: "Completed",
      lastUpdated: "2024-11", // Aug 2024 - Nov 2024
      highlights: [
        "Implemented commands: help, init, add, commit, log, revert, restore",
        "Command-line interface for repo and branch management",
        "Efficient commit tracking with linked lists & hashing",
      ],
    },
    {
      id: 4,
      name: "Advertisement Personalization System for Digital Screens",
      description:
        "Built a real-time system using YOLO + OpenCV to detect people and display personalized ads tailored to detected attributes.",
      technologies: ["Python", "YOLO", "OpenCV", "Deep Learning"],
      githubUrl:
        "https://github.com/KulkarniShripad/Advertisement-personalisation-system-for-digital-screens",
      liveUrl: "#",
      stars: 0,
      status: "Completed",
      lastUpdated: "2024-11", // Jul 2023 - Nov 2024
      highlights: [
        "Real-time detection of people with YOLO and OpenCV",
        "Displays ads tailored to detected demographic attributes",
        "Improves ad relevance & engagement through personalization",
      ],
    },
  ] as const;

  return (
    <div className="p-6 font-mono text-vscode-text max-w-6xl">
      <div className="flex">
        <div className="text-vscode-text-disabled text-sm mr-4 select-none">
          {Array.from({ length: 120 }, (_, i) => (
            <div key={i + 1} className="leading-6">
              {(i + 1).toString().padStart(3, " ")}
            </div>
          ))}
        </div>

        <div className="flex-1">
          <div className="leading-6">
            <div className="mb-6">
              <span className="text-vscode-blue">interface</span>
              <span className="text-vscode-text"> </span>
              <span className="text-vscode-yellow">Project</span>
              <span className="text-vscode-text"> {"{"}</span>
            </div>

            <div className="pl-4 mb-2">
              <span className="text-vscode-text">  id: </span>
              <span className="text-vscode-blue">number</span>
              <span className="text-vscode-text">;</span>
            </div>

            <div className="pl-4 mb-2">
              <span className="text-vscode-text">  name: </span>
              <span className="text-vscode-blue">string</span>
              <span className="text-vscode-text">;</span>
            </div>

            <div className="pl-4 mb-2">
              <span className="text-vscode-text">  description: </span>
              <span className="text-vscode-blue">string</span>
              <span className="text-vscode-text">;</span>
            </div>

            <div className="pl-4 mb-2">
              <span className="text-vscode-text">  technologies: </span>
              <span className="text-vscode-blue">string</span>
              <span className="text-vscode-text">[];</span>
            </div>

            <div className="pl-4 mb-2">
              <span className="text-vscode-text">  status: </span>
              <span className="text-vscode-green">'Completed'</span>
              <span className="text-vscode-text"> | </span>
              <span className="text-vscode-green">'In Progress'</span>
              <span className="text-vscode-text">;</span>
            </div>

            <div className="mb-6">
              <span className="text-vscode-text">{"}"}</span>
            </div>

            <div className="mb-6">
              <span className="text-vscode-blue">const</span>
              <span className="text-vscode-text"> </span>
              <span className="text-vscode-yellow">portfolioProjects</span>
              <span className="text-vscode-text">: </span>
              <span className="text-vscode-blue">Project</span>
              <span className="text-vscode-text">[] = [</span>
            </div>

            {projects.map((project, index) => (
              <div key={project.id} className="mb-12">
                <div className="pl-4 mb-4">
                  <span className="text-vscode-text">{"{"}</span>
                </div>

                <div className="pl-8 mb-2">
                  <span className="text-vscode-green">id</span>
                  <span className="text-vscode-text">: </span>
                  <span className="text-vscode-yellow">{project.id}</span>
                  <span className="text-vscode-text">,</span>
                </div>

                <div className="pl-8 mb-2">
                  <span className="text-vscode-green">name</span>
                  <span className="text-vscode-text">: </span>
                  <span className="text-vscode-orange">"{project.name}"</span>
                  <span className="text-vscode-text">,</span>
                </div>

                <div className="pl-8 mb-4">
                  <span className="text-vscode-green">description</span>
                  <span className="text-vscode-text">: </span>
                  <span className="text-vscode-orange">"{project.description}"</span>
                  <span className="text-vscode-text">,</span>
                </div>

                {/* Visual Project Card */}
                <div className="pl-8 mb-6 p-6 border border-vscode-border rounded-lg bg-vscode-bg-tertiary">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-vscode-blue mb-2">{project.name}</h3>
                      <p className="text-vscode-text-secondary mb-3">{project.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-vscode-yellow" />
                      <span className="text-vscode-yellow">{project.stars}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-vscode-blue text-vscode-blue hover:bg-vscode-blue hover:text-vscode-bg text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-vscode-green mb-2">Key Features:</h4>
                    <ul className="text-sm text-vscode-text-secondary space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-vscode-green mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1 text-xs text-vscode-text-muted">
                        <Calendar className="w-3 h-3" />
                        <span>{project.lastUpdated || "—"}</span>
                      </div>
                      <Badge
                        variant= "secondary"
                        className={`text-xs "bg-vscode-blue text-white"
                        `}
                      >
                        {project.status}
                      </Badge>
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-vscode-border bg-vscode-bg-secondary hover:bg-vscode-sidebar-hover text-vscode-text"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </a>
                      </Button>

                      <Button
                        size="sm"
                        className="bg-vscode-blue hover:bg-vscode-blue-light text-white"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="pl-4">
                  <span className="text-vscode-text">{"}"}</span>
                  {index < projects.length - 1 && <span className="text-vscode-text">,</span>}
                </div>
              </div>
            ))}

            <div className="mb-6">
              <span className="text-vscode-text">];</span>
            </div>

            <div className="mb-6">
              <span className="text-vscode-purple">export</span>
              <span className="text-vscode-text"> </span>
              <span className="text-vscode-blue">default</span>
              <span className="text-vscode-text"> portfolioProjects;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsFile;
