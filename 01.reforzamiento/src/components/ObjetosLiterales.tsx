

interface IPersona {
  nombre: string,
  edad: number,
  direccion: IDireccion
}

interface IDireccion {
  pais: string,
  casaNumero: number
}

const ObjetosLiterales = () => {

  const persona: IPersona = {
    nombre: "Jan Carlos",
    edad: 26,
    direccion: {
      pais: 'Republica dominicana',
      casaNumero: 50
    }
  }
  return (
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>
          {JSON.stringify(persona, null, 2)}
        </pre>
      </code>
    </>
  )
}

export default ObjetosLiterales
