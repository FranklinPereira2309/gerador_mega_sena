import { useEffect, useState } from 'react'
import ListarNumeros from '../../components/ListarNumeros'
import { mega } from '../../functions/megasena'

export default function megasena() {

    const [arr, setArr] = useState([])
    const [qtd, setQtd] = useState(6)

    useEffect(() => {
        setArr(mega(qtd))

    }, [])

    function renderizarNumeros() {
        return arr.map(numero => <ListarNumeros key={numero} elemento={numero} />)
    }

    const estilo = {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'

    }

   
    return (
        <div style={estilo}>
            <h1 style={{fontWeight:700, fontSize:'5rem'}}>Megasena</h1>

            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                {renderizarNumeros()}
            </div>
            <input type="number" min={6} max={15} onChange={(e)=> setQtd(+e.target.value)}/>
            
            <button onClick={()=> setArr(mega(qtd))}>Gerar Números</button>
        </div>
    )
}