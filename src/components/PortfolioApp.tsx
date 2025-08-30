import { useState } from "react";
import VSCodeLayout from "./VSCodeLayout";
import ReadmeFile from "./portfolio/ReadmeFile";
import SkillsFile from "./portfolio/SkillsFile";
import ProjectsFile from "./portfolio/ProjectsFile";
import ExtracurricularsFile from "./portfolio/ExtracurricularsFile";
import InternshipsFile from "./portfolio/InternshipsFile";

const PortfolioApp = () => {
  const [activeFile, setActiveFile] = useState("README.md");

  const renderFileContent = () => {
    switch (activeFile) {
      case "README.md":
        return <ReadmeFile />;
      case "skills.json":
        return <SkillsFile />;
      case "projects.ts":
        return <ProjectsFile />;
      case "Internships.ts":
        return <InternshipsFile />;
      case "extracurriculars.md":
        return <ExtracurricularsFile />;
      default:
        return <ReadmeFile />;
    }
  };

  return (
    <div className="dark text-sm md:text-base lg:text-lg">
      <VSCodeLayout activeFile={activeFile} onFileChange={setActiveFile}>
        {renderFileContent()}
      </VSCodeLayout>
    </div>
  );
};

export default PortfolioApp;
