import { useState } from "react"

export default function Letras({habilitar, setHabilitar, arraypalavra, letraCerta, setLetraCerta, contagemErros, setContagemErros}){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const [letraClicada, setLetraClicada] = useState([])
    console.log(arraypalavra)
    return (
        <div className="centralizarletras">
        <div className="letras" >
        {alfabeto.map(i => <button data-test="letter" key={i} onClick={Click} className="letra" disabled={habilitar || letraClicada.includes(i)}>{i.toUpperCase()}</button>)}
        </div>
        </div>
    )
    function Click(event){
        const caractere = event.target.textContent.toLowerCase()
        setLetraClicada([...letraClicada, caractere])
        for(let i = 0;i<arraypalavra.length;i++){
        if (caractere === arraypalavra[i]){
            setLetraCerta([...letraCerta, caractere])
            return
        }
        }
        setContagemErros(contagemErros+1)
    } 
}