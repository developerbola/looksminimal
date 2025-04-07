interface ButtonProps {
  title: string;
  type: "submit" | "reset" | "button" | undefined;
  className?: string | undefined;
}

const Button: React.FC<ButtonProps> = ({ title, type, className }) => {
  return (
    <button
      type={type}
      className={
        "p-2 px-4 bg-zinc-950 rounded-lg hover:bg-[#151515] border-[1px] border-[#ffffff20] transition duration-200 active:scale-95 outline-zinc-800 outline-1 outline" +
        className
      }
    >
      {title}
    </button>
  );
};

export default Button;
