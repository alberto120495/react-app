import "../styles/styles.css";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { MyTextInput } from "../components";

function RegisterFormikPage() {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .min(2, "Al menos dos caracteres")
            .required("Requerido"),
          lastName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("Email no tiene formato valido")
            .required("Requerido"),
          password: Yup.string()
            .min(6, "La contraseña debe de ser de almenos 6 caracteres")
            .required("Requerido"),
          password2: Yup.string()
            .min(6, "La contraseña debe de ser de almenos 6 caracteres")
            .required("Requerido")
            .oneOf(
              [Yup.ref("password"), null],
              "Las contraseñas deben coincidir"
            ),
        })}
      >
        {({ handleReset }) => (
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
            <MyTextInput
              label="Password"
              name="password"
              placeholder="Ingresa tu contraseña"
              type="password"
            />
            <MyTextInput
              label="Confirma tu contraseña"
              name="password2"
              placeholder="Repite tu contraseña"
              type="password"
            />

            <button type="submit">Enviar</button>

            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export { RegisterFormikPage };
