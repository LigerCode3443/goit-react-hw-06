import { Field, Formik, Form, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addContacts } from "../../Redux/contactSlice";

const contactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};
export const ContactForm = () => {
  const contactId = useId();
  const phoneId = useId();
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    const action = addContacts({
      name: values.name,
      number: values.number,
      id: nanoid(),
    });

    dispatch(action);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactsSchema}
    >
      <Form className={s.form}>
        <label htmlFor={contactId} className={s.label}>
          <span className={s.text}>Contact name:</span>
          <Field
            type="text"
            name="name"
            id={contactId}
            className={s.input}
            placeholder={"Name"}
          />
          <ErrorMessage name="name" component="div" className={s.error} />
        </label>

        <label htmlFor={phoneId} className={s.label}>
          <span className={s.text}>Contact Phone:</span>
          <Field
            type="text"
            name="number"
            id={phoneId}
            className={s.input}
            placeholder={"Phone"}
          />
          <ErrorMessage name="number" component="div" className={s.error} />
        </label>

        <button type="submit" className={s.btn}>
          Submit
        </button>
      </Form>
    </Formik>
  );
};
