interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-foreground text-background w-full p-10 flex flex-row items-center justify-between">
      <div>
        <p className="text-sm font-medium">
          &copy;{currentYear} Francesco Coacci. All rights reserved
        </p>
      </div>
      <p className="text-sm font-medium">built with love in nyc</p>
    </div>
  );
};

export default Footer;
