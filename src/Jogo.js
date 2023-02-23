import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"

export default function Jogo({habilitar, setHabilitar, arraypalavra, letraCerta, setLetraCerta, contagemErros, setContagemErros}){
    const imagemDaForca = {
        0: forca0,
        1: forca1,
        2: forca2,
        3: forca3,
        4: forca4,
        5: forca5,
        6: forca6
    }
    return (
        <div className="jogo">
        <img src={imagemDaForca[contagemErros]} data-test="game-image" className="imagem"></img>
        <div className="end">
        <button className="botao" data-test="choose-word" onClick={habilitar => setHabilitar(false)}>Escolher Palavra</button>
        <div data-test="word" className={habilitar ? "esconder" : "palavraescolhida"}>
            {arraypalavra.map(i => <span>{letraCerta.includes(i)?i:"_"}</span>)}
        </div>
        </div>
        </div>
    )
}