
import { useState } from 'react';
import './style.css';
import api from './services/api.js';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (input === "") {
      alert("Preencha o campo em branco!")
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    }
    catch {
      alert("Error")
      setInput("")
    }

  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input type="text"
          placeholder="digite seu CEP..."
          value={input}

        /*salvar no input*/
         /*propriedade*/ onChange={(e /*nome evento*/) => setInput(e.target.value/*valor digitado pelo usuario*/)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          Procurar
        </button>
      </div>

      {/* acessando a useState Cep */
       Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>

          <span>{cep.logradouro}</span>
          <span>Complemento:{cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>

        </main>
      )}


    </div>
  );
}

export default App;
