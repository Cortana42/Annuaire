import { Formik, Form, useField } from "formik";
import { useCallback, useContext } from "react";
import Button from "../components/Button";
import InfoContext from "../components/InfoContext";
import * as yup from "yup";
import Link from "next/link";

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="test-input" {...field} {...props}></input>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

function Annuaire() {
  const { addEntry, entries } = useContext(InfoContext);
  const handleFormSubmit = useCallback(
    (item, { resetForm }) => {
      addEntry(item);
      resetForm();
      console.log(entries);
    },
    [addEntry, entries]
  );

  const validationSchema = yup.object({
    nom: yup
      .string()
      .min(3, "Must be at least 3 characters")
      .max(15, "Must be 15 characters or less")
      .required("Remplissez l'input"),
    prénom: yup
      .string()
      .min(3, "Must be at least 3 characters")
      .max(15, "Must be 15 characters or less")
      .required("ERREUR"),
    ville: yup.string().required("Required"),
    adresse: yup.string().required("Required"),
    Âge: yup.number().required("required"),
  });

  return (
    <>
      <Formik
        initialValues={{
          nom: "",
          prénom: "",
          ville: "",
          adresse: "",
          Âge: 0,
        }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ isSubmitting, isValid, handleSubmit }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <CustomTextInput
              label="Nom"
              name="nom"
              type="text"
              placeholder="Nom"
            />
            <CustomTextInput
              label="Prénom"
              name="prénom"
              type="text"
              placeholder="Prénom"
            />
            <CustomTextInput
              label="Ville"
              name="ville"
              type="text"
              placeholder="Ville"
            />
            <CustomTextInput
              label="Adresse"
              name="adresse"
              type="text"
              placeholder="Adresse"
            />
            <CustomTextInput
              label="Âge"
              name="Âge"
              type="text"
              placeholder="Âge"
            />
            <Button type="submit" disabled={isSubmitting || !isValid}>
              ADD
            </Button>
          </Form>
        )}
      </Formik>
      <Link href="/array">
        <a>Array</a>
      </Link>
    </>
  );
}

export default Annuaire;
