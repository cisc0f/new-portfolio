import Link from "next/link";
import { AccordionContent, AccordionItem, AccordionTrigger } from "./Accordion";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { FiArrowUpRight } from "react-icons/fi";

interface AccordionProjectProps {
  index: number;
  color: string | undefined;
  title: string;
  subtitle: string;
  description: string;
  techs: string[] | undefined;
  links: string[] | undefined;
}

const AccordionProject: React.FC<AccordionProjectProps> = ({
  index,
  color = "#000",
  title,
  subtitle,
  description,
  techs,
  links,
}) => {
  const itemNumber = "item-" + index;
  return (
    <AccordionItem value={itemNumber}>
      <AccordionTrigger>
        <div className="outline-none text-foreground flex flex-row items-center justify-center gap-5">
          <div
            className="h-5 w-5 rounded-full"
            style={{ backgroundColor: color }}
          ></div>
          <div className="flex flex-col items-start justify-center">
            <h2 className="text-start">{title}</h2>
            <p className="text-start text-sm md:text-xl text-foreground/50">
              {subtitle}
            </p>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="md:px-5">
        <div className="md:px-5 text-foreground flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-medium">Description</h3>
            <p className="text-base font-medium">{description}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-medium">Links</h3>
            <div className="flex flex-row flex-wrap gap-2">
              {links &&
                links.map((link, index) => (
                  <Button key={index} size="sm" variant="outline" asChild>
                    <Link
                      target="_blank"
                      href={link}
                      className="flex flex-row items-center justify-center gap-1"
                    >
                      Link {index + 1} <FiArrowUpRight size={15} />
                    </Link>
                  </Button>
                ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-medium">Tech Stack</h3>
            <div className="flex flex-row flex-wrap gap-2">
              {techs &&
                techs.map((tech, index) => (
                  <Badge variant="default" key={index}>
                    {tech}
                  </Badge>
                ))}
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccordionProject;
