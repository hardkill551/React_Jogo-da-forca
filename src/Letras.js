export default function Letras(){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return (
        <div className="centralizarletras">
        <div className="letras">
        {alfabeto.map(i => <button className="letra" onClick={enable}>{i.toUpperCase()}</button>)}
        </div>
        </div>
    )

    function enable(){

    }
}