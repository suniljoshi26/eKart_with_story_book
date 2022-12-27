import { withFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import * as Yup from "yup";
import Input from "./Input";
import axios from "axios";
import { WithAlert, WithUser } from "../Hoc/WithProvider";

const LoginApiCall = (values, bag) => {
  axios
    .post("https://myeasykart.codeyogi.io/login", {
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      console.log("bag", bag.props.setUser);
      bag.props.setUser(user);
    })
    .catch(() => {
      bag.props.setAlert({ type: "error", massage: "invalid credentials" });
    }, []);
};

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(16).required(),
});

// const {
//   handleChange,
//   values,
//   handleSubmit,
//   errors,
//   handleBlur,
//   touched,
//   isValid,
//   placeholder,
// } = useFormik({
//   initialValues: {},
//   onSubmit: LoginApiCall,
//   initialValues: schema,
// });
const initialValues = {
  email: "",
  password: "",
};

export const LoginPage = ({
  errors,
  touched,
  values,
  handleBlur,
  handleChange,
  handleSubmit,
}) => {
  // console.log("error valus", errors, values);
  return (
    <div className="mt-20 ">
      <div className=" w-full h-screen overflow-scroll  bg-gray-100 md:px-40  px-6 py-10">
        <form
          onSubmit={handleSubmit}
          className=" rounded-md flex flex-col space-y-5 shadow-md bg-white  md:p-20 p-4 "
        >
          <h1
            className="text-3xl font-bold 
           "
          >
            Login easycart
          </h1>

          <Input
            label="Email-address"
            id="Email-address "
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            name="email"
            autoComplete="email"
            required="required"
            placeholder="Email address"
            touched={touched.email}
            error={errors.email}
          />

          <Input
            label="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            id="Password"
            type="password"
            name="password"
            autoComplete=" current-password"
            required="required"
            placeholder="Passward"
            touched={touched.password}
            error={errors.password}
          />

          <div>
            <div className="flex justify-between">
              <span>
                <input type="checkbox" className="w-3 h-3" />
                <span className="ml-2">Remember me</span>
              </span>
              <Link to="/forget password"> Forget Passward</Link>
            </div>
          </div>

          <div className="md:flex justify-between">
            <Button type="Submit">Login</Button>
            <div className="flex justify-end items-center gap-2 mt-4 md:mt-0">
              <span>Don't have any account?</span>
              <Link to="/signup" className="text-indigo-500">
                Sing Up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const FormikLogin = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: LoginApiCall,
})(LoginPage);

export default WithAlert(WithUser(FormikLogin));
