import { useState } from "react";
import Jogo from "./components/Jogo.js"
import Letras from "./components/Letras.js"
import Chute from "./components/Chute.js"
import palavras from "./palavras.js"

const palavra = Math.floor(Math.random() * palavras.length);


function App() {
  const [arraypalavra, setArrayPalavra] = useState(palavras[palavra].split(""))
  const [habilitar,setHabilitar] = useState(true)
  const [errou,setErrou] = useState(false)
  const [contagemErros, setContagemErros] = useState(0)
  const [letraCerta, setLetraCerta] = useState([])
  const [acertou,setAcertou] = useState(false)
  const [letraClicada, setLetraClicada] = useState([])
  
  return (
    <div className="App">
      <Jogo habilitar={habilitar} setHabilitar={setHabilitar} arraypalavra={arraypalavra} letraCerta={letraCerta} setLetraCerta={setLetraCerta} contagemErros={contagemErros} setContagemErros={setContagemErros} errou={errou} setErrou={setErrou} acertou={acertou} setAcertou={setAcertou} setLetraClicada={setLetraClicada} setArrayPalavra={setArrayPalavra}/>
      <Letras habilitar={habilitar} arraypalavra={arraypalavra} letraCerta={letraCerta} setLetraCerta={setLetraCerta} contagemErros={contagemErros} setContagemErros={setContagemErros} errou={errou}setErrou={setErrou} acertou={acertou} setAcertou={setAcertou} letraClicada={letraClicada} setLetraClicada={setLetraClicada}/>
      <Chute arraypalavra={arraypalavra} letraCerta={letraCerta} setLetraCerta={setLetraCerta} setAcertou={setAcertou} setErrou={setErrou} setContagemDeErros={setContagemErros} habilitar={habilitar} errou={errou} acertou={acertou}/>
    </div>
  );
}

export default App;
