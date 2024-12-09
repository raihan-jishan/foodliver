import { LoadAnimation } from "./Animation";

const Wrapper = ({ children, className, widthFull }) => {
  return (
    <div
      className={`h-full mx-auto ${
        widthFull ? "w-full max-w-screen-2xl " : "w-full max-w-screen-xl"
      } px-4 md:px-20 ${className}`}
    >
      <LoadAnimation>
      {children}
      </LoadAnimation>
    </div>
  );
};

export default Wrapper;
