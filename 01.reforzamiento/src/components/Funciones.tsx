const Funciones = () => {

  const saludar = (): string => {
    return 'Hola a todos'
  }
  const sumar = (valor1: number, valor2: number): number => {
    return valor1 + valor2
  }


  return (
    <>
      <h3>Funciones</h3>
      <span> {saludar()}</span>
      <hr />
      <span>El resultado es: {sumar(50, 54)}</span>
    </>
  )
}

export default Funciones
