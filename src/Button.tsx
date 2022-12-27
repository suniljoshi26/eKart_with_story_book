import { ButtonHTMLAttributes, FC, memo } from "react";

type ButtonProps = {
  type?: String;
  children: String;
  them?: "highlight" | "secondary" | "primary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ them, children, ...rest }) => {
  let themeClasses =
    " text-white rounded-md bg-yellow-500 border-transparent  hover:bg-yellow-600 ";
  let radiusClass = "rounded-md";

  if (them === "highlight") {
    radiusClass = "rounded-full";
  }
  if (them === "secondary") {
    themeClasses =
      "text-blue-gray-900 bg-white border-gray-300 hover:bg-blue-gray-500;";
  }

  return (
    <>
      <button
        className={
          " mt-3 inline-flex justify-center px-4 py-2 text-sm font-medium  border  shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 " +
          themeClasses +
          "" +
          radiusClass
        }
        {...rest}
      >
        {children}
      </button>
    </>
  );
};

Button.defaultProps = {};

export default memo(Button);
