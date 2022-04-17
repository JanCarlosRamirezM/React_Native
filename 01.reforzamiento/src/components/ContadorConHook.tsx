import useCounter from '../Hooks/useCounter';

const ContadorConHook = () => {

    const { valor, acumular } = useCounter(10);

    return (
        <>
            <h3>Contador Con Hook: <small> {valor} </small>  </h3>


            <button className="btn btn-primary " onClick={() => acumular(1)}>+1</button>
            <span>  </span>
            <button className="btn btn-danger" onClick={() => acumular(-1)}>-1</button>

        </>
    )
}

export default ContadorConHook;
