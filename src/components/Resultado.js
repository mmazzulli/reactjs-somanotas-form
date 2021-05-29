import React from 'react'

export default function Resultado(props){
    return (
        <div>
            <h2>A soma das notas é igual a: {props.soma}</h2>
            <h3 style={{color: 'yellow'}}>{props.soma > 50 ? "Aprovado" : "Reprovado"}</h3>
            <br/>
        </div>
    )
}