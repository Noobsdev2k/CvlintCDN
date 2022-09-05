import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      note: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(6, "Must be at least 6 characters long"),
      email: Yup.string()
        .required("Required")
        .matches(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "please enter a valid email address"
        ),
      note: Yup.string().required("Required"),
    }),
    onSubmit: () => {
      window.alert("Send a notification success");
    },
  });

  return (
    <form action='' className='contact_form' onSubmit={formik.handleSubmit}>
      <div className='contact_form-div'>
        <label htmlFor='' className='contact_form-tag'>
          Name
        </label>
        <input
          type='text'
          placeholder='Enter your name'
          className='contact_form-input'
          name='name'
          id='name'
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </div>
      {formik.errors.name && <p className='errorMsg'>{formik.errors.name}</p>}
      <div className='contact_form-div'>
        <label htmlFor='' className='contact_form-tag'>
          Mail
        </label>
        <input
          type='email'
          placeholder='Email address'
          className='contact_form-input'
          id='email'
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </div>
      {formik.errors.email && <p className='errorMsg'>{formik.errors.email}</p>}
      <div className='contact_form-div contact_form-area'>
        <label htmlFor='' className='contact_form-tag'>
          Message
        </label>
        <textarea
          cols='30'
          rows='10'
          placeholder='Contact Name'
          className='contact_form-input'
          name='note'
          id='note'
          value={formik.values.note}
          onChange={formik.handleChange}
        />
        
      </div>
      {formik.errors.note && <p className='errorMsg'>{formik.errors.note}</p>}
      <button type='submit' className='button'>
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
