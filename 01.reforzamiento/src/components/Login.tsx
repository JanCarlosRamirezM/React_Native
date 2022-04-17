
import { useEffect, useReducer } from "react"
import { AuthReducer, initialState } from '../Reducer/AuthReducer';



const Login = () => {


    const [state, dispatch] = useReducer(AuthReducer, initialState)

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
            console.log('GHol')
        }, 1500)
    }, [])

    const login = () => {
        dispatch({ type: 'login', payload: { username: 'Jan_123', nombre: 'jan' } })
    }
    const logout = () => {
        dispatch({ type: 'logout' })
    }

    if (state.validando) {
        return <>
            <h3>Login</h3>
            <div className="alert alert-info">Validando...</div>
        </>
    }

    return (
        <>
            {
                (state.token)
                    ? <div className="alert alert-success">Autenticado como: {state.nombre}</div>
                    : <div className="alert alert-danger">No autenticado</div>
            }
            {
                (state.token)
                    ? <button className="btn btn-danger" onClick={() => logout()}>Logout</button>
                    : <button className="btn btn-primary" onClick={() => { login() }}>Login</button>
            }
        </>
    )
}

export default Login
