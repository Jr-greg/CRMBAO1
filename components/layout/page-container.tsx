import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div className={cn("container mx-auto px-4 py-8", className)}>
      {children}
    </div>
  );
}

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

export function Section({ children, className, title, description }: SectionProps) {
  return (
    <section className={cn("py-12", className)}>
      {(title || description) && (
        <div className="mb-8 text-center">
          {title && (
            <h2 className="text-3xl font-bold mb-3">{title}</h2>
          )}
          {description && (
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}


