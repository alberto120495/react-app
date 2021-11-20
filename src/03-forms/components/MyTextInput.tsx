import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [x: string]: any;
}

function MyTextInput({ label, ...props }: Props) {
  /* const [field, meta] = useField(props); */
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>

      <input className="text-input" {...field} {...props} type={props?.type} />

      <ErrorMessage
        name={props.name}
        component="span"
        className="custom-span-eror-class"
      />

      {/* {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )} */}
    </>
  );
}

export { MyTextInput };
