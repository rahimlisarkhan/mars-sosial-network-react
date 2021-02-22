import React, { useState } from "react";
import { connect } from "react-redux";
import { authenSignUpAction } from "../../redux/action";
import logo from "../../img/logo.png";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { RiFolderUploadFill } from "react-icons/ri";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import { ToastContainer } from "react-toastify";
import { Input } from "reactstrap";

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

  password2: Yup.string()
    .min(8, "Please have at least 8 symbols")
    .max(15, "Very good!")
    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),

  city: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  position: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  education: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

let AuthLogin = (props) => {
  const [editModeP1, setEditMode] = useState(false);
  const [editModeP2, setEditModeP2] = useState(false);
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        password2: "",
        first_name: "",
        last_name: "",
        education: "",
        position: "",
        image: "",
        cover_image: "",
        city: "",
      }}
      validationSchema={UserLogin}
      onSubmit={(values) => {
        let data = new FormData();
        data.append("username", values.username);
        data.append("password", values.password);
        data.append("password2", values.password2);
        data.append("image", values.image);
        data.append("cover_image", values.cover_image);
        data.append("education", values.education);
        data.append("position", values.position);
        data.append("city", values.city);
        data.append("email", values.email);

        props.authenSignUpAction(data, props.history.push);
      }}
    >
      {(formik) => (
        <div className="form">
          <Form onSubmit={formik.handleSubmit}>
            <img src={logo} alt="logo" />
            <h3>Sign up</h3>
            <div className="signup-content">
              <div className="login-group">
                <Field
                  type="first_name"
                  name="first_name"
                  placeholder="first_name"
                />
                <p>
                  <ErrorMessage name="first_name" />
                </p>
              </div>
              <div className="login-group">
                <Field
                  type="last_name"
                  name="last_name"
                  placeholder="last_name"
                />
                <p>
                  <ErrorMessage name="last_name" />
                </p>
              </div>
              <div className="login-group">
                <Field type="text" name="username" placeholder="username" />
                <p>
                  <ErrorMessage name="username" />
                </p>
              </div>
              <div className="login-group">
                <Field type="email" name="email" placeholder="email" />
                <p>
                  <ErrorMessage name="email" />
                </p>
              </div>
            
              <div className="login-group">
                <Field
                  type={!editModeP1 ? "password" : "text"}
                  name="password"
                  placeholder="password"
                />

                <span
                  className="passwordView-content"
                  onClick={() => setEditMode(!editModeP1)}
                >
                  {!editModeP1 ? (
                    <AiFillEyeInvisible className="passwordView" />
                  ) : (
                    <AiFillEye className="passwordView" />
                  )}
                </span>
                <p>
                  <ErrorMessage name="password" />
                </p>
              </div>
              <div className="login-group">
                <Field
                  type={!editModeP2 ? "password" : "text"}
                  name="password2"
                  placeholder="repeat password "
                />

                <span
                  className="passwordView-content"
                  onClick={() => setEditModeP2(!editModeP2)}
                >
                  {!editModeP2 ? (
                    <AiFillEyeInvisible className="passwordView" />
                  ) : (
                    <AiFillEye className="passwordView" />
                  )}
                </span>
                <p>
                  <ErrorMessage name="password2" />
                </p>
              </div>
              <div className="login-group">
                <Field
                  type="education"
                  name="education"
                  placeholder="education"
                />
                <p>
                  <ErrorMessage name="education" />
                </p>
              </div>
              <div className="login-group">
                <Field type="position" name="position" placeholder="position" />
                <p>
                  <ErrorMessage name="position" />
                </p>
              </div>
             
              <div className="login-group">
                <label htmlFor="image">
                  <Input
                    type="file"
                    name="image"
                    id="image"
                    placeholder="image"
                    onChange={(e) =>
                      formik.setFieldValue("image", e.target.files[0])
                    }
                  />
                  <RiFolderUploadFill /> <span>Upload profile image </span>
                </label>
                <p>
                  <ErrorMessage name="image" />
                </p>
              </div>
              <div className="login-group">
                <label htmlFor="image">
                  <Input
                    type="file"
                    name="cover image"
                    id="cover image"
                    placeholder="cover image"
                    onChange={(e) =>
                      formik.setFieldValue("cover image", e.target.files[0])
                    }
                  />
                  <RiFolderUploadFill />{" "}
                  <span>Upload profile cover image </span>
                </label>
                <p>
                  <ErrorMessage name="cover image" />
                </p>
              </div>
               <div className="login-group">
                <Field type="city" name="city" placeholder="city" />
                <p>
                  <ErrorMessage name="city" />
                </p>
              </div>
            </div>

            <button type="submit"> Sign up</button>
          </Form>

          <ToastContainer className="font-size" />
        </div>
      )}
    </Formik>
  );
};

export default connect(null, { authenSignUpAction })(AuthLogin);
