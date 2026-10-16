
import { useState } from 'react'
import { TANULOSZOBAKLISTA, type TanuloszobakTipus } from './adat'
import './App.css'
import Kartyak from './components/Kartyak'

function App() {

  const [lista, setLista] = useState(TANULOSZOBAKLISTA)

  function kivalaszt(index: number){
    console.log(index)
    if(lista[index].ferohely > lista[index].foglalt){
      const modositottLista: TanuloszobakTipus[] = [...lista]
      modositottLista[index].foglalt += 1
      setLista(modositottLista)
    }
    if(lista[index].ferohely == lista[index].foglalt)
    {
      const modositottLista: TanuloszobakTipus[] = [...lista]
      modositottLista[index].gomb = "MEGTELT"
      setLista(modositottLista)
    }
  }
  return (
    <>
      <header>
        <h1>TANULÓSZOBÁK</h1>
      </header>
      <article><Kartyak lista={TANULOSZOBAKLISTA} kivalaszt={kivalaszt} /></article>
      <footer>Molnár Beatrix</footer>
    </>
  )
}

export default App
