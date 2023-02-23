import { useState } from "react";
import Jogo from "./Jogo.js"
import Letras from "./Letras.js"
import palavras from "./palavras.js"

const palavra = Math.floor(Math.random() * palavras.length);
const arraypalavra = palavras[palavra].split("")

function App() {
  const [habilitar,setHabilitar] = useState(true)
  const [errou,setErrou] = useState(false)
  const [contagemErros, setContagemErros] = useState(0)
  const [letraCerta, setLetraCerta] = useState([])
  const [acertou,setAcertou] = useState(false)
  
  return (
    <div className="App">
      <Jogo habilitar={habilitar} setHabilitar={setHabilitar} arraypalavra={arraypalavra} letraCerta={letraCerta} setLetraCerta={setLetraCerta} contagemErros={contagemErros} setContagemErros={setContagemErros} errou={errou} setErrou={setErrou} acertou={acertou} setAcertou={setAcertou}/>
      <Letras habilitar={habilitar} setHabilitar={setHabilitar} arraypalavra={arraypalavra} letraCerta={letraCerta} setLetraCerta={setLetraCerta} contagemErros={contagemErros} setContagemErros={setContagemErros} errou={errou}setErrou={setErrou} acertou={acertou} setAcertou={setAcertou}/>
    </div>
  );
}

export default App;
