import { useState, useRef } from "react";
import { IUsuario, IReqRes } from "../interfaces/IReqRes";
import { reqResApi } from "../api/reqRes";

const useUsuarios = () => {
  const [users, setUser] = useState<IUsuario[]>([]);
  const paginaRef = useRef(1);

  const cargarData = async () => {
    try {
      const resp = await reqResApi.get<IReqRes>("/users", {
        params: {
          page: paginaRef.current,
        },
      });

      const { data } = resp.data;

      if (data.length > 0) {
        setUser(data);
      } else {
        alert("No hay mas registros");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const paginaSiguiente = () => {
    paginaRef.current++;
    cargarData();
  };

  const paginaAnterior = () => {
    if (paginaRef.current > 1) {
      paginaRef.current--;
      cargarData();
    } else {
      alert("Estas en el primer registro");
    }
  };

  return {
    paginaSiguiente,
    paginaAnterior,
    users,
  };
};

export default useUsuarios;
