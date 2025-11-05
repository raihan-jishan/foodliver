const Button = ({ label, icon }) => {
  return (
    <div className="bg-green-400 hover:bg-green-400/90 hover:scale-95 transition-all duration-300 cursor-pointer p-3 px-3 max-lg:px-2 border-2 border-black/50  rounded-full font-medium flex items-center gap-1">
      {label} {icon}
    </div>
  );
};

export default Button;
