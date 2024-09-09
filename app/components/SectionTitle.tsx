interface SectionTitleProps {
  text: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
  return <h2 className="text-background text-6xl font-medium">{text}</h2>;
};

export default SectionTitle;
