import { useState } from "react"

function Home() {
    return (
        <div>
            <h2>Seja Bem Vindos a Pagina de <strong>Autenticação</strong> do Sistema:</h2>
            <h1><strong>GrFood</strong></h1>
            <Contador />
        </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(1);

    function addContador() {
        setContador(contador + 1)
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={addContador}>Click Aqui!</button>
        </div>
    )
}

export default Home