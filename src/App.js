import { useState } from "react";
import Jogo from "./Jogo.js"
import Letras from "./Letras.js"
import palavras from "./palavras.js"

function App() {
  const [habilitar,setHabilitar] = useState(true)
  const [contagemerros, setContagemErros] = useState(0)
  const palavra = Math.floor(Math.random() * palavras.length);
  const arraypalavra = palavras[palavra].split("")
  return (
    <div className="App">
      <Jogo habilitar={habilitar} setHabilitar={setHabilitar} arraypalavra={arraypalavra}/>
      <Letras habilitar={habilitar} setHabilitar={setHabilitar}/>
    </div>
  );
}

export default App;
