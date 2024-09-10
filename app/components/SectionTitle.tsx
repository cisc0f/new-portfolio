import { cn } from "@/lib/utils";

interface SectionTitleProps {
  text: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text, className }) => {
  return (
    <h2
      className={cn(
        "text-background text-3xl md:text-6xl font-medium",
        className,
      )}
    >
      {text}
    </h2>
  );
};

export default SectionTitle;
