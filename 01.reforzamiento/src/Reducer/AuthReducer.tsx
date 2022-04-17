
interface IAuthState {
    validando: boolean,
    token: string | null,
    username: string,
    nombre: string
};

export const initialState: IAuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
};

type LoginPayload = {
    username: string;
    nombre: string
}

export type AuthAction =
    | { type: 'logout' }
    | { type: 'login', payload: LoginPayload };

export const AuthReducer = (state: IAuthState, action: AuthAction): IAuthState => {

    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }

        case 'login':

            const { username, nombre } = action.payload;

            return {
                validando: false,
                token: 'sdsdssdsds',
                username,
                nombre
            }

        default:
            return state
    }

}