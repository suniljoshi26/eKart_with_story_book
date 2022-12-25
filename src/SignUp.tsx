import React from "react";
import { withFormik } from "formik";

import { Link } from "react-router-dom";
import Button from "./Button";
import * as Yup from "yup";
import Input from "./Input";
import axios from "axios";
import { WithAlert, WithUser } from "./Hoc/WithProvider";

const SignUpApi = (values, bag) => {
  axios
    .post("https://myeasykart.codeyogi.io/signup", {
      fullName: values.FullName,
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      const { user, token } = response.data;

      console.log("user", user);
      localStorage.setItem("token", token);
      console.log("token", token);
      bag.props.setUser(user);
    })
    .catch(({ user }) => {
      if (!user) {
        bag.props.setAlert({ type: "error", massage: "invalid credentials" });
      } else {
        bag.props.setAlert({ type: "success", massage: "signup success" });
      }
    });
};

const schema = Yup.object().shape({
  FullName: Yup.string().min(3).max(50).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(16).required(),
});

const initialValues = {
  FullName: "",
  email: "",
  password: "",
};

const SignUp = ({
  handleSubmit,
  values,
  errors,
  handleBlur,
  handleChange,
  touched,
}) => {
  // const {

  // } = useFormik({

  //   onSubmit: SignUpApi,
  //   validationSchema: schema,
  // });

  return (
    <div className=" mt-20">
      <div className=" w-full h-screen overflow-scroll bg-gray-100 md:px-40 px-4 py-10">
        <form
          onSubmit={handleSubmit}
          className=" rounded-md flex flex-col space-y-5 shadow-md bg-white  md:p-20 p-4 "
        >
          <h1
            className="text-3xl font-bold 
           mb-4"
          >
            Sign-Up
          </h1>
          <div>
            <Input
              label="FullName"
              id="FullName"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.FullName}
              touched={touched.FullName}
              type="text"
              value={values.FullName}
              name="FullName"
              autoComplete="full name"
              required="required"
              placeholder="Full_Name"
            />
            <Input
              label="email-address"
              id="email-address "
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
              label="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              id="password"
              type="password"
              name="password"
              autoComplete=" current-password"
              required="required"
              placeholder="Passward"
              touched={touched.password}
              error={errors.password}
            />
          </div>

          <div>
            <Button type="Submit">Sign Up</Button>
          </div>
          <div className="flex justify-end items-center gap-2 mt-4 md:mt-0">
            <span>Already account?</span>
            <Link to="/login/" className="text-indigo-500">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
const myHoc = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: SignUpApi,
});

const easySignUp = myHoc(SignUp);

export default WithAlert(WithUser(easySignUp));
