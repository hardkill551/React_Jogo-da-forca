import { useState } from "react";
import Jogo from "./Jogo.js"
import Letras from "./Letras.js"
import arraypalavra from "./palavras.js"

function App() {
  const [habilitar,setHabilitar] = useState(true)
  const [contagemErros, setContagemErros] = useState(0)
  const [letraCerta, setLetraCerta] = useState([])
  
  return (
    <div className="App">
      <Jogo habilitar={habilitar} setHabilitar={setHabilitar} arraypalavra={arraypalavra} letraCerta={letraCerta} setLetraCerta={setLetraCerta} contagemErros={contagemErros} setContagemErros={setContagemErros}/>
      <Letras habilitar={habilitar} setHabilitar={setHabilitar} arraypalavra={arraypalavra} letraCerta={letraCerta} setLetraCerta={setLetraCerta} contagemErros={contagemErros} setContagemErros={setContagemErros}/>
    </div>
  );
}

export default App;
