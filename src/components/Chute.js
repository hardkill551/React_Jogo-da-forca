import { useState } from "react"

export default function Chute({arraypalavra, setLetraCerta, setAcertou, setErrou, setContagemDeErros, habilitar, errou, acertou}){
    const [input, setInput] = useState("")
    return (
        <div className="chute">
            <span className="chuteSpan">Já sei a palavra!</span>
            <input data-test="guess-input" value={input} disabled={habilitar||errou||acertou} onChange={e => setInput(e.target.value)} className="chuteInput"></input>
            <button data-test="guess-button" onClick={comparar} className="chuteButton letra" disabled={habilitar||errou||acertou}>Chutar</button>
        </div>
    )

    function comparar(){
        let x = input.split("")
        let ct = 0
        console.log(x)
        for(let i = 0; i<arraypalavra.length;i++){
            if(x[i]===arraypalavra[i]){
                ct+=1
            }
            
        }
        setInput("")
        setLetraCerta(arraypalavra)
        if(ct===arraypalavra.length){
            setAcertou(true)
            
        }
        else{
            setErrou(true)
            setContagemDeErros(6)
        }
    }
}