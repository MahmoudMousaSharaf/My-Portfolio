import { Link } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  projectName: string;
  currentPage?: string;
}

const Breadcrumb = ({ projectName, currentPage }: BreadcrumbProps) => {
  return (
    <div className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-40">
      <div className="container mx-auto px-6 py-3">
        <nav className="flex items-center gap-2 text-sm">
          <Link 
            to="/" 
            className="flex items-center gap-1 text-foreground/60 hover:text-primary transition-colors"
          >
            <Home size={16} />
            <span>Portfolio</span>
          </Link>
          <ChevronRight size={16} className="text-foreground/40" />
          <Link 
            to={`/projects/${projectName.toLowerCase()}`}
            className="text-foreground/60 hover:text-primary transition-colors"
          >
            {projectName}
          </Link>
          {currentPage && (
            <>
              <ChevronRight size={16} className="text-foreground/40" />
              <span className="text-foreground font-medium">{currentPage}</span>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
