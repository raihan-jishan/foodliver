import Link from "next/link";
const Button = ({
  path,
  label,
  icon,
  paddingMedium,
  roundedFull,
  roundedMedium,
  customBg,
  heroPadding, 
  fontMedium,
  customStyle
}) => {
  return (
    <Link
      href={path ? path : "/"}
      className={`${fontMedium ? 'font-semibold' : ''} flex items-center justify-center text-center ${
        customBg
          ? "bg-emerald-900 font-semibold text-black"
          : "bg-emerald-500  text-white dark:text-black"
      }   hover:bg-black/70  flex gap-2       max-lg:gap-2 max-lg:rounded-full    ${
        paddingMedium
          ? "p-5 px-12"
          : heroPadding
          ? "p-5 px-12 max-lg:p-4 max-lg:px-3 "
          : "p-3 px-4"
      }  ${
        roundedMedium
          ? "rounded-md"
          : roundedFull
          ? "rounded-full"
          : "rounded-xl"
      }  ${customStyle}`}
    >
      {label} {icon}
    </Link>
  );
};

export default Button;