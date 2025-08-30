import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import developerPhoto from "@/assets/developer-photo.jpg";

const ReadmeFile = () => {
  return (
    <div className="p-6 font-mono text-vscode-text max-w-4xl">
      {/* Header with line numbers */}
      <div className="flex">
      <div className="text-vscode-text-disabled text-sm mr-4 select-none">
          {Array.from({ length: 80 }, (_, i) => (
            <div key={i + 1} className="leading-6">
              {(i + 1).toString().padStart(2, " ")}
            </div>
          ))}
        </div>
        
        {/* Main content */}
        <div className="flex-1">
          <div className="leading-6">
            {/* About Me */}
            <div className="mb-6">
              <span className="text-vscode-purple">#</span>
              <span className="text-vscode-green"> About Me </span>
            </div>
            
            <div className="mb-8 flex flex-col md:flex-row md:items-start gap-6">
              {/* Avatar */}
              <div className="flex justify-center md:justify-start">
                <Avatar className="w-40 h-40 rounded-full border-2 border-vscode-border">
                  <AvatarImage src={developerPhoto} alt="Shripad Kulkarni" />
                  <AvatarFallback className="bg-vscode-bg-tertiary text-vscode-text text-2xl">
                    SK
                  </AvatarFallback>
                </Avatar>
              </div>
              
              {/* Intro Text */}
              <div className="flex-1 text-left">
                <div className="mb-4">
                  <span className="text-vscode-purple">##</span>
                  <span className="text-vscode-blue"> Hi there! 👋</span>
                </div>
                
                <div className="mb-4">
                  <span className="text-vscode-text">I'm </span>
                  <span className="text-vscode-yellow">Shripad Kulkarni</span>
                  <span className="text-vscode-text">, a Computer Engineering student and developer passionate about </span>
                  <span className="text-vscode-text">solving real-world problems through innovative applications and system design.</span>
                </div>
                
                <div className="mb-6">
                  <span className="text-vscode-text">Currently exploring </span>
                  <span className="text-vscode-green">MERN stack development</span>
                  <span className="text-vscode-text">, </span>
                  <span className="text-vscode-blue">Flutter & Firebase</span>
                  <span className="text-vscode-text">, and diving deeper into </span>
                  <span className="text-vscode-orange">understanding computers</span>
                  <span className="text-vscode-text">.</span>
                </div>
              </div>
            </div>
            
            {/* Quick Facts */}
            <div className="mb-6">
              <span className="text-vscode-purple">###</span>
              <span className="text-vscode-green"> Quick Facts</span>
            </div>
            
            <div className="mb-6 space-y-2 text-left">
              <div>
                <span className="text-vscode-text">- Currently working on: </span>
                <span className="text-vscode-yellow">Building a strong foundation in Computer Engineering</span>
              </div>
              <div>
                <span className="text-vscode-text">- Learning: </span>
                <span className="text-vscode-green">MERN stack, System Design, OOP, DBMS, OS and many more...</span>
              </div>
              <div>
                <span className="text-vscode-text">- Open to: </span>
                <span className="text-vscode-blue">Internships, Collaborations and Making friends 😄</span>
              </div>
              <div>
                <span className="text-vscode-text">- Fun fact: </span>
                <span className="text-vscode-orange">I love trekking and nature so dont be surprised if you see me somewhere in the nature with my laptop, headphones and a cup of chai 😅 </span>
              </div>
            </div>
            
            {/* Tech Stack */}
            <div className="mb-6">
              <span className="text-vscode-purple">###</span>
              <span className="text-vscode-green"> Tech Stack</span>
            </div>
            
            <div className="mb-6 flex flex-wrap gap-2">
              {[
                { name: "Java", color: "vscode-yellow" },
                { name: "Dart", color: "vscode-blue" },
                { name: "C", color: "vscode-green" },
                { name: "C++", color: "vscode-green" },
                { name: "Python", color: "vscode-yellow" },
                { name: "React", color: "vscode-blue" },
                { name: "Node.js", color: "vscode-green" },
                { name: "Flutter", color: "vscode-blue-light" },
                { name: "Firebase", color: "vscode-orange" },
                { name: "PostgreSQL", color: "vscode-blue" },
                { name: "SQL", color: "vscode-purple" },
                { name: "GCP", color: "vscode-orange" },
              ].map((tech) => (
                <Badge 
                  key={tech.name}
                  variant="outline" 
                  className={`border-${tech.color} text-${tech.color} hover:bg-${tech.color} hover:text-vscode-bg transition-colors`}
                >
                  {tech.name}
                </Badge>
              ))}
            </div>
            
            {/* Connect With Me */}
            <div className="mb-6">
              <span className="text-vscode-purple">###</span>
              <span className="text-vscode-green"> Connect With Me</span>
            </div>
            
            <div className="mb-6 flex flex-wrap gap-4">
              <Button 
                variant="outline" 
                size="sm"
                className="border-vscode-border bg-vscode-bg-tertiary hover:bg-vscode-sidebar-hover text-vscode-text"
                asChild
              >
                <a href="https://github.com/KulkarniShripad" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                  <ExternalLink className="w-3 h-3 ml-2" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="sm"
                className="border-vscode-border bg-vscode-bg-tertiary hover:bg-vscode-sidebar-hover text-vscode-text"
                asChild
              >
                <a href="https://linkedin.com/in/shripad-kulkarni-9a8464248" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                  <ExternalLink className="w-3 h-3 ml-2" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="sm"
                className="border-vscode-border bg-vscode-bg-tertiary hover:bg-vscode-sidebar-hover text-vscode-text"
                asChild
              >
                <a href="mailto:shrikulkarni2205@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </a>
              </Button>
            </div>
            
            {/* Code Block */}
            <div className="mb-6 space-y-2 text-left overflow-x-auto">
              <div>
                <span className="text-vscode-text">```</span>
              </div>
              <div>
                <span className="text-vscode-blue">const</span>
                <span className="text-vscode-text"> developer = {"{"}</span>
              </div>
              <div className="pl-4">
                <span className="text-vscode-text">  name: </span>
                <span className="text-vscode-green">"Shripad Kulkarni"</span>
                <span className="text-vscode-text">,</span>
              </div>
              <div className="pl-4">
                <span className="text-vscode-text">  location: </span>
                <span className="text-vscode-green">"Pune, India"</span>
                <span className="text-vscode-text">,</span>
              </div>
              <div className="pl-4">
                <span className="text-vscode-text">  role: </span>
                <span className="text-vscode-green">"Studnet | Developer"</span>
                <span className="text-vscode-text">,</span>
              </div>
              <div className="pl-4">
                <span className="text-vscode-text">  codeQuality: </span>
                <span className="text-vscode-green">"Clean, Maintainable & Scalable"</span>
                <span className="text-vscode-text">,</span>
              </div>
              <div className="pl-4">
                <span className="text-vscode-text">  passion: </span>
                <span className="text-vscode-green">"Building impactful solutions through code & teamwork"</span>
              </div>
              <div>
                <span className="text-vscode-text">{"}"};</span>
              </div>
              <div>
                <span className="text-vscode-text">```</span>
              </div>
            </div>
            
            <div className="text-vscode-text-muted">
              <span className="text-vscode-text"> - </span>
              <span className="text-vscode-orange">Feel free to explore my other files to learn more about my skills and projects!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadmeFile;
