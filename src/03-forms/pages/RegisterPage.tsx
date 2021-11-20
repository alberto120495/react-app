import "../styles/styles.css";
import { FormEvent } from "react";
import useForm from "../hooks/useForm";

function RegisterPage() {
  const initialForm = {
    name: "",
    email: "",
    password1: "",
    password2: "",
  };

  const {
    name,
    email,
    password1,
    password2,
    onChange,
    resetForm,
    isValidEmail,
  } = useForm(initialForm);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email no valido</span>}

        <input
          type="password"
          placeholder="Password"
          name="password1"
          value={password1}
          onChange={(e) => onChange(e)}
        />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>Debe de ser mayor a 6 caracteres</span>
        )}

        <input
          type="password"
          placeholder="Repeat password"
          name="password2"
          value={password2}
          onChange={onChange}
        />
        {password1 !== password2 && password2.trim().length > 0 && (
          <span>Las contraseñas no coinciden</span>
        )}

        <button type="submit">Enviar</button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>
      </form>
    </div>
  );
}

export { RegisterPage };
