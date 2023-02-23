import { useState } from "react"

export default function Letras({habilitar}){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return (
        <div className="centralizarletras">
        <div className="letras" >
        {alfabeto.map(i => <button className="letra" disabled={habilitar}>{i.toUpperCase()}</button>)}
        </div>
        </div>
    )
    
    
}