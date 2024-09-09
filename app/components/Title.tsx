interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <h1 className="text-3xl md:text-5xl lg:text-8xl font-semibold">{text}</h1>
  );
};

export default Title;
