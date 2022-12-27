import React from "react";
import FormikHoc from "./FormikHoc";
const Input = ({ id, label, name, touched, className, error, ...rest }) => {
  let borderClass = "border-gray-300 focus-indigo-500";
  if (touched && error) {
    borderClass = "border-red-500";
  }
  return (
    <div>
      <label
        htmlFor={id}
        className="
                font-semibold"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        className={
          " w-full border border-gray-300 appearance-none rounded-t-md  focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm focus:z-10 px-3 py-2 block placeholder-gray-500 text-gray-900 relative " +
          borderClass +
          " " +
          className
        }
        {...rest}
      />
      {touched && error && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export const FormikInput = FormikHoc(Input);
export default Input;
