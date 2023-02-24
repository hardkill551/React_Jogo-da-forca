import { useState } from "react"
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"
import palavras from "./palavras.js"

export default function Jogo({habilitar, setHabilitar, arraypalavra, letraCerta, setLetraCerta, contagemErros, setContagemErros, errou, setErrou, acertou, setAcertou,setLetraClicada, setArrayPalavra}){
    const imagemDaForca = {
        0: forca0,
        1: forca1,
        2: forca2,
        3: forca3,
        4: forca4,
        5: forca5,
        6: forca6
    }
    const [contador, setContador] = useState(0)
    return (
        <div className="jogo">
        <img src={imagemDaForca[contagemErros]} alt="forca" data-test="game-image" className="imagem"></img>
        <div className="end">
        <button className="botao" data-test="choose-word" onClick={Reiniciar}>Escolher Palavra</button>
        <div data-test="word" className={`${habilitar ? "esconder" : "palavraescolhida"} ${errou ? "erro" : ""} ${acertou ? "acerto" : ""}`}>
            {arraypalavra.map(i => <span>{letraCerta.includes(i)||contagemErros===6?i:"_"}</span>)}
        </div>
        </div>
        </div>
    )

    function Reiniciar(){
        if(contador===0){
        setHabilitar(false)
        setContador(contador+1)
        }
        else{
            const palavra = Math.floor(Math.random() * palavras.length);
            console.log(palavra)
            setArrayPalavra(palavras[palavra].split(""))
            setErrou(false)
            setContagemErros(0)
            setLetraCerta([])
            setAcertou(false)
            setLetraClicada([])
        }
    }
}