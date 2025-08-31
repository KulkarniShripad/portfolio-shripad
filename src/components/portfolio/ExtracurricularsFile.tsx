import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const ExtracurricularsFile = () => {
  return (
    <div className="p-6 font-mono text-vscode-text max-w-4xl">
      <div className="flex">
        {/* Line Numbers */}
        <div className="text-vscode-text-disabled text-sm mr-4 select-none">
          {Array.from({ length: 60 }, (_, i) => (
            <div key={i + 1} className="leading-6">
              {(i + 1).toString().padStart(3, " ")}
            </div>
          ))}
        </div>

        {/* File Content */}
        <div className="flex-1 leading-6">
          <div className="mb-6">
            <span className="text-vscode-purple">#</span>
            <span className="text-vscode-green"> Extracurricular Activities</span>
          </div>

          {/* Volunteering Section */}
          <div className="mb-8">
            <span className="text-vscode-purple">##</span>
            <span className="text-vscode-blue"> Volunteering</span>
          </div>

          <div className="mb-6 space-y-4">
            {/* GDG Devfest */}
            <div className="p-4 border border-vscode-border rounded bg-vscode-bg-tertiary">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-vscode-yellow font-semibold">
                  Google Developers Group - Devfest
                </h3>
                <Badge
                  variant="outline"
                  className="border-vscode-green text-vscode-green"
                >
                  Nov 2024
                </Badge>
              </div>
              <p className="text-sm text-vscode-text-secondary mb-2">
                <strong>Role:</strong> App Development Team Volunteer
              </p>
              <ul className="list-disc list-inside text-sm text-vscode-text-secondary space-y-1">
                <li>Technical Team Member & Volunteer for Devfest Pune 2024.</li>
                <li>Contributed to developing web app for Devfest attendees.</li>
              </ul>
            </div>

            {/* CSI COEP */}
            <div className="p-4 border border-vscode-border rounded bg-vscode-bg-tertiary">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-vscode-yellow font-semibold">
                  Computer Society of India - Student Chapter (COEP)
                </h3>
                <Badge
                  variant="outline"
                  className="border-vscode-blue text-vscode-blue"
                >
                  Sep 2024 - Apr 2025
                </Badge>
              </div>
              <p className="text-sm text-vscode-text-secondary mb-2">
                <strong>Role:</strong> Finance Coordinator
              </p>
              <ul className="list-disc list-inside text-sm text-vscode-text-secondary space-y-1">
                <li>
                  Pitched and secured{" "}
                  <span className="text-vscode-green font-semibold">₹1,00,000</span>{" "}
                  title sponsorship for a national-level hackathon.
                </li>
                <li>Significantly enhanced the event's scale and impact.</li>
              </ul>
            </div>
          </div>

          {/* Hackathons Section */}
          <div className="mb-8">
            <span className="text-vscode-purple">##</span>
            <span className="text-vscode-blue"> Hackathons & Competitions</span>
          </div>

          <div className="mb-6">
            {/* Single Hackathon Experience */}
            <div className="p-4 border border-vscode-border rounded bg-vscode-bg-tertiary">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-vscode-yellow font-semibold">
                  MasterCard {"<"}Code for Change{">"} – NGO Solution Challenge
                </h3>
                <Badge className="bg-vscode-blue text-vscode-bg">25 Aug 2025</Badge>
              </div>
              <div className="flex items-center space-x-2 text-xs text-vscode-text-muted mb-2">
                <Calendar className="w-3 h-3" />
                <span>Held at MasterCard Office</span>
              </div>
              <ul className="list-disc list-inside text-sm text-vscode-text-secondary space-y-1 mb-2">
                <li>
                  Built an application tracking & student outreach system for{" "}
                  <strong>Katalyst India (NGO)</strong>.
                </li>
                <li>Led a team of 7 developers in a 12-hour hackathon sprint.</li>
                <li>
                  Tech Stack: Node.js, Express (backend), PostgreSQL (database),
                  React (frontend).
                </li>
              </ul>
              <p className="text-sm text-vscode-text-secondary">
                <strong>Things learned:</strong> time management, team leadership,
                rapid prototyping.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtracurricularsFile;
