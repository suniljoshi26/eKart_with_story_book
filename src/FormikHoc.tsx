import { useField } from "formik";
import React from "react";

const FormikHoc = (IncomingComponent) => {
  const outgoingComponent = ({ name, ...rest }) => {
    const [data, mata] = useField(name);
    const { value, onBlur, onChange } = data;
    const { touched, error } = mata;

    let borderClass = "border-gray-300 focus-indigo-500";
    if (touched && error) {
      borderClass = "border-red-500";
    }
    return (
      <IncomingComponent
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        touched={touched}
        error={error}
        name={name}
        {...rest}
      />
    );
  };
  return outgoingComponent;
};
export default FormikHoc;
