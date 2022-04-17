import { Fragment } from "react"

const TiposBasicos = () => {

    let nombre: string = 'Jan';
    let edad: number = 26;
    let estaActivo: boolean = true;
    let poderes: string[] = ['Volar', 'Velocidad', 'Respirar en el agua'];

    return (
        <Fragment>
            <h2>Tipos basicos</h2>
            {nombre},{edad}, {(estaActivo) ? 'activo' : 'no activo'}
            <hr />
            {poderes.join(', ')}
        </ Fragment>
    )
}

export default TiposBasicos
