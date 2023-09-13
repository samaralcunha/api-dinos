import { useEffect, useState } from 'react'
import Card from './components/card'


function App() {
  const [dinos, setDinos] = useState([])

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:4000/dinos');
      const data = await response.json();
      setDinos(data);
    })()
  }, []);

  return (
    <>
      <div>
        {dinos.map((dino) => (
          <Card
            nome={dino.nome}
            nomeCien={dino.nomeCien}
            periodo={dino.periodo}
            imagem={dino.imagem}
          />
        ))}
      </div>
    </>
  )
}

export default App
