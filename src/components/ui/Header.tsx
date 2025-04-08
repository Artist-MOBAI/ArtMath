import { HeaderProps } from "@/interfaces/ui";

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="p-4">
      <h1 className="font-serif text-1.5xl font-extrabold text-[var(--background)]">
        {title}
      </h1>
    </div>
  );
};

export default Header;
