import forca0 from "./assets/forca0.png"

export default function Jogo(){
    return (
        <div className="jogo">
        <img src={forca0} className="imagem"></img>
        <button className="botao">Escolher Palavra</button>
        </div>
    )
}