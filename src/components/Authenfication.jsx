import React, { useState } from "react";
import { connect } from "react-redux";
import { authenAction } from "../redux/action";
import logo from "../img/logo.png";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

//VALIDATE MESSAGES
const UserLogin = Yup.object().shape({
  username: Yup.string()
    .min(5, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),

  password: Yup.string()
    .min(8, "Please have at least 8 symbols")
    .max(15, "Very good!")
    .required("Required"),
});

let Authenfication = (props) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={UserLogin}
      onSubmit={(values) => props.authenAction(values, props.history.push)}
    >
        
      {({ formik }) => (
        <div className="form">
          <Form onSubmit={formik.handleSubmit}>
            <img src={logo} alt="logo" />
            <h3>Login</h3>

            <div className="login-group">
              <Field type="text" name="username" placeholder="username" />
              <p>
                <ErrorMessage name="username" />
              </p>
            </div>

            <div className="login-group">
              <Field
                type={!editMode ? "password" : "text"}
                name="password"
                placeholder="password"
              />

              <span
                className="passwordView-content"
                onClick={() => setEditMode(!editMode)}
              >
                {!editMode ? (
                  <AiFillEyeInvisible className="passwordView" />
                ) : (
                  <AiFillEye className="passwordView" />
                )}
              </span>
              <p>
                <ErrorMessage name="password" />
              </p>
            </div>
            <button type="submit"> Login</button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default connect(null, { authenAction })(Authenfication);
