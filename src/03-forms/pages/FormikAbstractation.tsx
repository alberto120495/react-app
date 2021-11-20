import * as Yup from "yup";
import { Formik, Form } from "formik";
import { MyCheckbox, MySelect, MyTextInput } from "../components/index";
import "../styles/styles.css";

function FormikAbstractation() {
  return (
    <div>
      <h1>Formik Abstractation</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("Email no tiene formato valido")
            .required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
          jobType: Yup.string()
            .required("Requerido")
            .notOneOf(["it-jr"], "Esta opcion no es permitida"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Ingresa tu nombre"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Ingresa tu Apellido"
            />

            <MyTextInput
              label="Email"
              name="email"
              placeholder="Ingresa tu email"
              type="email"
            />

            <MySelect label="Job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Jr.</option>
            </MySelect>

            <MyCheckbox label="Terminos y condiciones" name="terms" />

            <button type="submit">Enviar</button>

            <button type="button" onClick={() => formik.resetForm()}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export { FormikAbstractation };
