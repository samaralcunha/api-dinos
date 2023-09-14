import { useEffect, useState } from 'react'
import Card from './components/card'


function App() {
  const [dinos, setDinos] = useState([])
  const [filtro, setFiltro] = useState("dinos")

  useEffect(() => {
    (async () => {
      console.log(filtro)
      const response = await fetch(`http://localhost:4000/${filtro}`);
      const data = await response.json();
      setDinos(data);
    })()
  }, [filtro]);

  return (
    <>
      <div className="min-h-screen justify-center items-center flex flex-col flex-wrap gap-8 p-8 bg-[#40916c] ">
        <div className="flex flex-wrap gap-8">
          <button className="w-32 border-double border-4 rounded-sm bg-[#52b69a] shadow-lg font-period text-lg" onClick={() => setFiltro("dinos")}>Todos</button>
          <button className="w-32 border-double border-4 rounded-sm bg-[#52b69a] shadow-lg font-period text-lg" onClick={() => setFiltro("Jurassico")}>Jurássico</button>
          <button className="w-32 border-double border-4 rounded-sm bg-[#52b69a] shadow-lg font-period text-lg" onClick={() => setFiltro("Cretaceo")}>Cretáceo</button>
          <button className="w-32 border-double border-4 rounded-sm bg-[#52b69a] shadow-lg font-period text-lg" onClick={() => setFiltro("Triassico")}>Triássico</button>
        </div>
        <div className="flex flex-wrap gap-8 p-8 justify-center items-center" >
        {dinos.map((dino) => (
          <Card
            key={dino.id}
            nome={dino.nome}
            nomeCien={dino.nomeCien}
            periodo={dino.periodo}
            imagem={dino.imagem}
          />
        ))}
        </div>
      </div>
    </>
  )
}

export default App
