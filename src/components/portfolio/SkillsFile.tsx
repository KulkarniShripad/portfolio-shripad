import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const SkillsFile = () => {
  const skillCategories = [
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 70, color: "vscode-green" },
        { name: "Express.js", level: 60, color: "vscode-text" },
        { name: "REST APIs", level: 70, color: "vscode-green" },
        { name: "JWT Auth", level: 60, color: "vscode-orange" },
      ]
    },
    {
      name: "Database",
      skills: [
        { name: "PostgreSQL", level: 70, color: "vscode-blue" },
        { name: "MongoDB", level: 60, color: "vscode-green" },
      ]
    },
    {
      name: "Frontend",
      skills: [
        { name: "Flutter", level: 60, color: "vscode-yellow" },
        { name: "React.js", level: 20, color: "vscode-blue" },
      ]
    },
    {
      name: "Tools and Technologies",
      skills: [
        { name: "Git & GitHub", level: 90, color: "vscode-red" },
        { name: "Linux", level: 60, color: "vscode-yellow" },
        { name: "Postman", level: 70, color: "vscode-orange" },
      ]
    },
    {
      name: "Other Skills",
      skills: [
        { name: "Data Structures & Algorithms", level: 80, color: "vscode-purple" },
        { name: "Operating Systems", level: 70, color: "vscode-text" },
        { name: "Object Oriented Programming", level: 80, color: "vscode-green" },
        { name: "DBMS", level: 70, color: "vscode-blue" },
      ]
    }
  ];

  return (
    <div className="p-6 font-mono text-vscode-text max-w-4xl">
      <div className="flex">
        <div className="text-vscode-text-disabled text-sm mr-4 select-none">
          {Array.from({ length: 80 }, (_, i) => (
            <div key={i + 1} className="leading-6">
              {(i + 1).toString().padStart(2, " ")}
            </div>
          ))}
        </div>
        
        <div className="flex-1">
          <div className="leading-6">
            <div className="mb-6">
              <span className="text-vscode-text">{"{"}</span>
            </div>
            
            <div className="mb-6 pl-4">
              <span className="text-vscode-green">"skillsData"</span>
              <span className="text-vscode-text">: {"{"}</span>
            </div>
            
            <div className="pl-8 mb-6">
              <span className="text-vscode-green">"lastUpdated"</span>
              <span className="text-vscode-text">: </span>
              <span className="text-vscode-orange">"2025-08-30"</span>
              <span className="text-vscode-text">,</span>
            </div>
            
            <div className="pl-8 mb-6">
              <span className="text-vscode-green">"version"</span>
              <span className="text-vscode-text">: </span>
              <span className="text-vscode-orange">"3.0.0"</span>
              <span className="text-vscode-text">,</span>
            </div>
            
            <div className="pl-8 mb-4">
              <span className="text-vscode-green">"categories"</span>
              <span className="text-vscode-text">: [</span>
            </div>
            
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.name} className="mb-8">
                <div className="pl-12 mb-4">
                  <span className="text-vscode-text">{"{"}</span>
                </div>
                
                <div className="pl-16 mb-2">
                  <span className="text-vscode-green">"name"</span>
                  <span className="text-vscode-text">: </span>
                  <span className="text-vscode-orange">"{category.name}"</span>
                  <span className="text-vscode-text">,</span>
                </div>
                
                <div className="pl-16 mb-2">
                  <span className="text-vscode-green">"skills"</span>
                  <span className="text-vscode-text">: [</span>
                </div>
                
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="mb-4">
                    <div className="pl-20 mb-1">
                      <span className="text-vscode-text">{"{"}</span>
                    </div>
                    
                    <div className="pl-24">
                      <span className="text-vscode-green">"name"</span>
                      <span className="text-vscode-text">: </span>
                      <span className="text-vscode-orange">"{skill.name}"</span>
                      <span className="text-vscode-text">,</span>
                    </div>
                    
                    <div className="pl-24">
                      <span className="text-vscode-green">"proficiency"</span>
                      <span className="text-vscode-text">: </span>
                      <span className="text-vscode-yellow">{skill.level}</span>
                      <span className="text-vscode-text">,</span>
                    </div>
                    
                    <div className="pl-24 mb-2">
                      <span className="text-vscode-green">"level"</span>
                      <span className="text-vscode-text">: </span>
                      <span className="text-vscode-orange">"{skill.level >= 85 ? 'Proficient' : skill.level >= 70 ? 'Advanced' : skill.level >= 30 ? 'Intermediate' : 'Beginner'}"</span>
                    </div>
                    
                    {/* Visual Progress Bar */}
                    <div className="pl-24 mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-32">
                          <Progress 
                            value={skill.level} 
                            className="h-2 bg-vscode-bg-quaternary"
                          />
                        </div>
                        <Badge 
                          variant="outline" 
                          className={`text-xs border-${skill.color} text-${skill.color}`}
                        >
                          {skill.level}%
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="pl-20">
                      <span className="text-vscode-text">{"}"}</span>
                      {skillIndex < category.skills.length - 1 && <span className="text-vscode-text">,</span>}
                    </div>
                  </div>
                ))}
                
                <div className="pl-16 mb-2">
                  <span className="text-vscode-text">]</span>
                </div>
                
                <div className="pl-12">
                  <span className="text-vscode-text">{"}"}</span>
                  {categoryIndex < skillCategories.length - 1 && <span className="text-vscode-text">,</span>}
                </div>
              </div>
            ))}
            
            <div className="pl-8 mb-4">
              <span className="text-vscode-text">]</span>
            </div>
            
            <div className="pl-4 mb-4">
              <span className="text-vscode-text">{"}"}</span>
            </div>
            
            <div className="mb-6">
              <span className="text-vscode-text">{"}"}</span>
            </div>
            
            <div className="mt-8 p-4 border border-vscode-border rounded bg-vscode-bg-tertiary">
              <div className="text-vscode-green text-sm mb-2">// Skills Summary</div>
              <div className="text-vscode-text-secondary text-sm">
                <div>• {skillCategories.reduce((total, cat) => total + cat.skills.length, 0)} Total Skills</div>
                <div>• Hands-on experience with MERN stack and problem solving</div>
                <div>• Strong foundation in DSA, OS, CN, and DBMS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsFile;
