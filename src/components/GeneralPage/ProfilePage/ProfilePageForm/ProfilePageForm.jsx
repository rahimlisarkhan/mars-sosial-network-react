import { Formik,Form, Field, ErrorMessage } from "formik";
import React from "react";
import { VscSaveAs } from "react-icons/vsc";
// import { Input } from "reactstrap";
import * as Yup from 'yup';


//VALIDATE MESSAGES
const UserInfoForm = Yup.object().shape({

  first_name:Yup.string()
                 .min(3, 'Too Short!')
                 .max(20, 'Too Long!')
                 .required('Required'),
  
  last_name:Yup.string()
               .min(3, 'Too Short!')
               .max(30, 'Too Long!')
               .required('Required'),

  email:Yup.string()
           .email('Invalid email')
           .required('Required'),

  birthday:Yup.string()
              .min(3, 'Too Short!')
              .max(50, 'Too Long!')
              .required('Required'),
     
  username:Yup.string()
              .min(6, 'Too Short!')
              .max(50, 'Too Long!')
              .required('Required'),

  city:Yup.string()
           .min(3, 'Too Short!')
           .max(50, 'Too Long!')
           .required('Required'),
  
  position:Yup.string()
           .min(3, 'Too Short!')
           .max(50, 'Too Long!')
           .required('Required'),

});

//FORM COMPONENTS
let ProfilePageForm = (props) => {

  console.log(props);
  return (
    //INTIAL STATE FOR FORM
    <Formik initialValues={props.userdata}
            validationSchema={UserInfoForm}
            onSubmit ={ (values) => props.formPut(values,props.userID) } >


        {/* handlesubmit,handlechange and more for form  */}
        { (formik) => (
              <Form className="user-profil-card__info__desc"
                    onSubmit={formik.handleSubmit}>

                  <div className="username-content">
                    <div className="form-group">

                     <Field type="text" name="first_name" />
                     <p> <ErrorMessage name="first_name" /></p>

                    </div>




                    <div className="form-group">
                     <Field type="text" name="last_name"/>
                     <p> <ErrorMessage name="last_name" /></p>
                    </div>
                 </div>
          
                <label htmlFor="username">
                Username:
                  <div className="form-group-field">
                    <Field id="username" name="username" type="text" />
                    <p> <ErrorMessage name="username" /></p>
                  </div>
                </label>
          
                <label htmlFor="birthday">
                  Birthday:
                  <div className="form-group-field">
                    <Field id="birthday" name="birthday" type="date" />
                    <p> <ErrorMessage name="birthday" /></p>
                  </div>
                </label>
          
                <label htmlFor="email">
                  Email:
                    <div className="form-group-field">
                    <Field id="email" name="email" type="email" />
                    <p> <ErrorMessage name="email" /></p>
                  </div>
                </label>
          
                <label htmlFor="education">
                  Education:
                  <div className="form-group-field">
                    <Field id="education" name="education" type="text" />
                    <p> <ErrorMessage name="education" /></p>
                  </div>
                </label>
          
                <label htmlFor="position">
                  Position:
                  <div className="form-group-field">
                    <Field id="position" name="position" type="text" />
                    <p> <ErrorMessage name="position" /></p>
                  </div>
                </label>
          
                <label htmlFor="city">
                  City:
                  <div className="form-group-field">
                    <Field id="city" name="city" type="text" />
                    <p> <ErrorMessage name="city" /></p>
                  </div>
                </label>

                {/* <label htmlFor="image">
                  image:
                  <div className="form-group-field">
                    <Input id="image" name="image" 
                                      type='file'
                                      onChange={(e)=>
                                      e.target.files[0]}/>
                  </div>
                </label> */}
                <button className="submit-btn" type="submit" disable={formik.isValid}>
                  <VscSaveAs className="edit-icon-btn" />
                </button>
              </Form>
        ) } 

     </Formik>
  );
};


export default ProfilePageForm;
