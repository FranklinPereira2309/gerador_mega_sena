export default function ListarNumeros(props) {

    const estilo = {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        height:'200px',
        width:'200px',
        backgroundColor:'#000',
        color:'#fff',
        borderRadius:'50%',
        fontSize:'2rem',
        margin:'20px'
        
        
    }

    return (
        <div style={estilo}>
            <h1>{props.elemento}</h1>
        </div>
    )
}