import forca0 from "./assets/forca0.png"

export default function Jogo({habilitar, setHabilitar, arraypalavra}){
    return (
        <div className="jogo">
        <img src={forca0} className="imagem"></img>
        <div className="end">
        <button className="botao" onClick={habilitar => setHabilitar(false)}>Escolher Palavra</button>
        <div className={habilitar ? "esconder" : "palavraescolhida"}>
            {arraypalavra.map(i => <p>_</p>)}
        </div>
        </div>
        </div>
    )
}