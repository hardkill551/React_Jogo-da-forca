export default function Letras({habilitar, arraypalavra, letraCerta, setLetraCerta, contagemErros, setContagemErros, errou, setErrou, acertou, setAcertou, letraClicada ,setLetraClicada}){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return (
        <div className="centralizarletras">
        <div className="letras" >
        {alfabeto.map(i => <button data-test="letter" key={i} onClick={Click} className="letra" disabled={habilitar || letraClicada.includes(i) || errou || acertou}>{i.toUpperCase()}</button>)}
        </div>
        </div>
    )
    function Click(event){
        const caractere = event.target.textContent.toLowerCase()
        setLetraClicada([...letraClicada, caractere])
        let letraCertaAtualizada = [...letraCerta]
        let x = 0
        for(let i = 0;i<arraypalavra.length;i++){
        if (caractere === arraypalavra[i]){
            letraCertaAtualizada.push(caractere)
            setLetraCerta(letraCertaAtualizada)
            x++
            if (letraCertaAtualizada.length === arraypalavra.length){
                setAcertou(true)
            }
            if (i==arraypalavra.length-1){
                return
            }
        }
        }
        if(x==0){
        setContagemErros(contagemErros+1)
        if (contagemErros+1 === 6){
            setErrou(true)
        }
        }
        
    } 
}