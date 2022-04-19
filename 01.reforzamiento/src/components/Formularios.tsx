import useForm from "../Hooks/useForm";
export const Formularios = () => {

    
  const { formulario, email, password, onChange } = useForm({
    email: "test@example.com",
    password: "test",
  });

  return (
    <>
      <h3>Formularios</h3>

      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={({ target }) => onChange(target.value, "email")}
      />
      <br />
      <input
        type="password"
        className="form-control"
        placeholder="Password"
        value={password}
        onChange={({ target }) => onChange(target.value, "password")}
      />

      <br />
      <code>
        <pre>{JSON.stringify(formulario, null, 2)}</pre>
      </code>
    </>
  );
};
