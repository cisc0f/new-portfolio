import React from "react";

interface SubtitleProps {
  text: React.ReactNode;
}

const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
  return <h2 className="text-3xl font-medium">{text}</h2>;
};

export default Subtitle;
