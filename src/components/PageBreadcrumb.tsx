import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export type BreadcrumbItem = { label: string; to?: string };

type PageBreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

const PageBreadcrumb = ({ items, className = "" }: PageBreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className={`text-sm text-muted-foreground ${className}`}>
      <ol className="flex flex-wrap items-center gap-1.5">
        <li className="flex items-center gap-1.5">
          <Link to="/" className="inline-flex items-center gap-1 hover:text-gold transition-colors">
            <Home size={14} className="text-gold shrink-0" />
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5 min-w-0">
            <ChevronRight size={14} className="text-gold/60 shrink-0" />
            {item.to ? (
              <Link to={item.to} className="hover:text-gold transition-colors truncate">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium truncate">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default PageBreadcrumb;
