import { useState } from 'react';

const useCounter = (initial: number =5) => {

    const [valor, setValor] = useState<number>(initial)

    const acumular = (numero: number) => {
        setValor(valor + numero);
    }

    return {
        valor,
        acumular
    }
}

export default useCounter
