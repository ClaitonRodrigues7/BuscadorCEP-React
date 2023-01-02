import { useState } from "react";
import { FiSearch } from 'react-icons/fi'
import './styles.css';
import api from './services/api';

function App() {

  const [input, setInput] = useState('')

  async function handleSearch(){
    //x/json/
    if(input === ''){
      alert("Preencha algum cep!")
      return;
    }
    try{
      const response = await api.get('${input}/json');
      console.log(response)
    }catch{
      alert("Ops erro ao buscar");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
      <input 
      type="text"
      placeholder="Digite seu CEP..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />

      <button className="buttonSearch" onClick={handleSearch}>
      <FiSearch size={25} color="#FFF"/>
      </button>
      </div>
  
      <main className='main'>
        <h2>CEP: 79003222</h2>

        <span>Rua teste algum</span>
        <span>Complemento: Algum Complemento</span>
        <span>Vila Rosa</span>
        <span>Campo Grande - MS</span>
      </main>

    </div>
  );
}

export default App;
