import { useEffect } from "react";
import { IUsuario } from "../interfaces/IReqRes";
import useUsuarios from "../Hooks/useUsuarios";

const Usuario = () => {
  const { paginaSiguiente, paginaAnterior, users } = useUsuarios();

  useEffect(() => {
    paginaSiguiente();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = ({
    id,
    avatar,
    first_name,
    last_name,
    email,
  }: IUsuario) => {
    return (
      <tr key={id}>
        <td>
          <img
            className="img-fluid"
            style={{ width: 80, borderRadius: 100 }}
            src={avatar}
            alt={first_name}
          />
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuario</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{users.map((user) => renderItem(user))}</tbody>
      </table>
      <button onClick={paginaAnterior} className="btn btn-primary">
        Anterior
      </button>
      &nbsp;
      <button onClick={paginaSiguiente} className="btn btn-primary">
        Siguiente
      </button>
    </>
  );
};

export default Usuario;
