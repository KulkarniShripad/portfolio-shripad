import { useState } from "react";
import { Menu, X, Folder, FolderOpen, File, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "../hooks/use-mobile";

interface VSCodeLayoutProps {
  children: React.ReactNode;
  activeFile: string;
  onFileChange: (fileName: string) => void;
}

const files = [
  { name: "README.md", icon: File, type: "file" },
  { name: "skills.json", icon: File, type: "file" },
  { name: "projects.ts", icon: File, type: "file" },
  { name: "Internships.ts", icon: File, type: "file" },
  { name: "extracurriculars.md", icon: File, type: "file" },
];

const VSCodeLayout = ({ children, activeFile, onFileChange }: VSCodeLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="h-screen bg-vscode-bg font-mono flex flex-col">
      {/* Title Bar */}
      <div className="h-8 bg-vscode-bg-secondary border-b border-vscode-border flex items-center px-2">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <Circle className="w-3 h-3 text-vscode-red fill-current" />
            <Circle className="w-3 h-3 text-vscode-yellow fill-current" />
            <Circle className="w-3 h-3 text-vscode-green fill-current" />
          </div>
        </div>
        <div className="flex-1 text-center text-sm text-vscode-text-muted">
          Shripad Kulkarni - Portfolio
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Mobile Menu Button */}
        <div className="md:hidden absolute top-10 left-2 z-50">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="bg-vscode-bg-secondary hover:bg-vscode-sidebar-hover text-vscode-text"
          >
            {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Activity Bar */}
        <div className="hidden md:block w-12 bg-vscode-activity-bar border-r border-vscode-border">
          <div className="flex flex-col items-center py-4 space-y-4">
            <FolderOpen className="w-6 h-6 text-vscode-blue" />
          </div>
        </div>

        {/* Sidebar */}
        <div
          className={cn(
            isMobile ? "w-48" : "w-64",
            "bg-vscode-sidebar-bg border-r border-vscode-border transition-transform duration-300 ease-in-out",
            "md:translate-x-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full",
            "md:relative absolute z-40 h-full"
          )}
        >
          <div className="p-3">
            <div className="flex items-center mb-4">
              <Folder className="w-4 h-4 text-vscode-text-muted mr-2" />
              <span className="text-xs text-vscode-text-muted uppercase tracking-wide">
                Portfolio Explorer
              </span>
            </div>

            <div className="space-y-1">
              {files.map((file) => (
                <button
                  key={file.name}
                  onClick={() => {
                    onFileChange(file.name);
                    setSidebarOpen(false); // Close mobile menu on selection
                  }}
                  className={cn(
                    "w-full flex items-center space-x-2 px-2 rounded transition-colors",
                    isMobile ? "text-xs py-1" : "text-sm py-1.5",
                    activeFile === file.name
                      ? "bg-vscode-blue text-white"
                      : "text-vscode-text hover:bg-vscode-sidebar-hover"
                  )}
                >
                  <file.icon className={isMobile ? "w-3 h-3" : "w-4 h-4"} />
                  <span className="truncate">{file.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Tab Bar */}
          <div className="bg-vscode-tab-inactive border-b border-vscode-border overflow-x-auto">
            <div className="flex">
              {files.map((file) => (
                <button
                  key={file.name}
                  onClick={() => onFileChange(file.name)}
                  className={cn(
                    "flex items-center border-r border-vscode-border transition-colors max-w-xs",
                    isMobile ? "px-2 py-1 text-xs" : "px-4 py-2 text-sm",
                    activeFile === file.name
                      ? "bg-vscode-tab-active text-vscode-text"
                      : "bg-vscode-tab-inactive text-vscode-text-muted hover:bg-vscode-tab-hover"
                  )}
                >
                  <file.icon className={isMobile ? "w-3 h-3" : "w-4 h-4"} />
                  <span className="truncate">{file.name}</span>
                  {activeFile === file.name && (
                    <Circle className={isMobile ? "w-1.5 h-1.5" : "w-2 h-2"} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 bg-vscode-bg-secondary overflow-auto">
            {children}
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div
        className={cn(
          "h-6 bg-vscode-blue border-t border-vscode-border flex items-center justify-between",
          isMobile ? "px-2 text-[10px]" : "px-4 text-xs"
        )}
      >
        <div className="text-white">Portfolio v1.0.0</div>
        <div className="text-white">TypeScript • Portfolio</div>
      </div>
    </div>
  );
};

export default VSCodeLayout;
