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
  const { addEntry } = useContext(InfoContext);
  const handleFormSubmit = useCallback(
    (item) => {
      addEntry(item);
    },
    [addEntry]
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
    Âge: yup
      .string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .max(3, "You can't be serious !")
      .required("required"),
  });

  return (
    <>
      <Formik
        initialValues={{
          nom: "",
          prénom: "",
          ville: "",
          adresse: "",
          Âge: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ isSubmitting, isValid, handleSubmit }) => (
          <Form className="block" noValidate onSubmit={handleSubmit}>
            <h1 className="italic text-4xl text-center mt-24 mb-24">Sign Up</h1>
            <div className="block text-center ">
              <div className="block">
                <CustomTextInput
                  className="ml-10 mb-10 shadow appearance-none border rounded w-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  label="Nom"
                  name="nom"
                  type="text"
                  placeholder="Nom"
                />
                <br></br>
                <CustomTextInput
                  className="ml-10 mb-10 shadow appearance-none border rounded w-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  label="Prénom"
                  name="prénom"
                  type="text"
                  placeholder="Prénom"
                />
              </div>
              <div className="block">
                <CustomTextInput
                  className="ml-10 mb-10 shadow appearance-none border rounded w-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  label="Ville"
                  name="ville"
                  type="text"
                  placeholder="Ville"
                />
                <br></br>
                <CustomTextInput
                  className="ml-10 mb-10 shadow appearance-none border rounded w-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  label="Adresse"
                  name="adresse"
                  type="text"
                  placeholder="Adresse"
                />
                <br></br>
              </div>
              <CustomTextInput
                className="ml-10 mb-10 shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                label="Âge"
                name="Âge"
                type="text"
                placeholder="Âge"
              />
              <br></br>
              <Button type="submit" disabled={isSubmitting || !isValid}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  ADD
                </button>
              </Button>
              <br></br>
            </div>
          </Form>
        )}
      </Formik>
      <Link href="/Array">
        <a>
          <button className="ml-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Information
          </button>
        </a>
      </Link>
    </>
  );
}

export default Annuaire;
