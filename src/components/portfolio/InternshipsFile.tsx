import { Badge } from "@/components/ui/badge";
import { Calendar, Briefcase } from "lucide-react";

const InternshipsFile = () => {
  const experiences = [
    {
      id: 1,
      role: "Software Development Engineer (SDE) Intern",
      company: "The Mother Global Foundation",
      duration: "Jun 2025 - Jul 2025",
      technologies: ["Node.js", "PostgreSQL", "Jira", "REST APIs"],
      highlights: [
        "Helped develop the backend of a Volunteer Management System using Node.js and PostgreSQL.",
        "Built APIs for managing events and user roles.",
        "Participated in requirement discussions with the team.",
        "Used Jira to organize and track development tasks.",
      ],
    },
    {
      id: 2,
      role: "Software Developer Intern",
      company: "Ausam Innovations Pvt. Ltd.",
      duration: "Jan 2024 - Apr 2024",
      technologies: ["Flutter", "Firebase", "Git"],
      highlights: [
        "Contributed to Flutter mobile app development by building user interfaces.",
        "Integrated Firebase for real-time data updates.",
        "Collaborated with the team to test features and fix bugs.",
        "Improved app functionality using Git for version control.",
      ],
    },
  ];

  return (
    <div className="p-6 font-mono text-vscode-text max-w-5xl">
      <div className="flex">
        {/* Line numbers */}
        <div className="text-vscode-text-disabled text-sm mr-4 select-none">
          {Array.from({ length: 60 }, (_, i) => (
            <div key={i + 1} className="leading-6">
              {(i + 1).toString().padStart(2, " ")}
            </div>
          ))}
        </div>

        {/* File content */}
        <div className="flex-1">
          <div className="leading-6">
            <div className="mb-6">
              <span className="text-vscode-purple">#</span>
              <span className="text-vscode-green"> Internships & Experience</span>
            </div>

            {experiences.map((exp, index) => (
              <div key={exp.id} className="mb-10">
                <div className="mb-4 pl-2">
                  <span className="text-vscode-blue">const</span>{" "}
                  <span className="text-vscode-yellow">Internship {exp.id}</span>{" "}
                  <span className="text-vscode-text">= {"{"}</span>
                </div>

                <div className="pl-6 mb-2">
                  <span className="text-vscode-green">role</span>
                  <span className="text-vscode-text">: </span>
                  <span className="text-vscode-orange">"{exp.role}"</span>,
                </div>

                <div className="pl-6 mb-2">
                  <span className="text-vscode-green">company</span>
                  <span className="text-vscode-text">: </span>
                  <span className="text-vscode-orange">"{exp.company}"</span>,
                </div>

                <div className="pl-6 mb-2">
                  <span className="text-vscode-green">duration</span>
                  <span className="text-vscode-text">: </span>
                  <span className="text-vscode-orange">"{exp.duration}"</span>,
                </div>

                <div className="pl-6 mb-2">
                  <span className="text-vscode-green">technologies</span>
                  <span className="text-vscode-text">: [</span>
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="text-vscode-orange">
                      "{tech}"{i < exp.technologies.length - 1 && ", "}
                    </span>
                  ))}
                  <span className="text-vscode-text">],</span>
                </div>

                <div className="pl-6 mb-2">
                  <span className="text-vscode-green">highlights</span>
                  <span className="text-vscode-text">: [</span>
                </div>

                {exp.highlights.map((point, i) => (
                  <div key={i} className="pl-10 text-vscode-text">
                    • {point}
                  </div>
                ))}

                <div className="pl-6">
                  <span className="text-vscode-text">]</span>
                </div>

                {/* Visual Card */}
                <div className="mt-4 pl-6 p-4 border border-vscode-border rounded-lg bg-vscode-bg-tertiary">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-vscode-blue flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-vscode-green" />
                      {exp.role}
                    </h3>
                    <span className="text-xs flex items-center gap-1 text-vscode-text-muted">
                      <Calendar className="w-3 h-3" /> {exp.duration}
                    </span>
                  </div>
                  <p className="text-vscode-orange mb-2">{exp.company}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-vscode-blue text-vscode-blue text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="list-disc list-inside text-sm text-vscode-text-secondary space-y-1">
                    {exp.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="pl-2">
                  <span className="text-vscode-text">{"}"}</span>
                  {index < experiences.length - 1 && ","}
                </div>
              </div>
            ))}

            <div className="mt-8 p-4 border border-vscode-border rounded bg-vscode-bg-tertiary">
              <div className="text-vscode-green text-sm mb-2">/* Summary */</div>
              <div className="text-vscode-text-secondary text-sm">
                • {experiences.length} internships completed <br />
                • Backend development with Node.js, PostgreSQL, and APIs <br />
                • Mobile app development with Flutter + Firebase <br />
                • Collaboration using Git, Jira, and Agile practices
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipsFile;
