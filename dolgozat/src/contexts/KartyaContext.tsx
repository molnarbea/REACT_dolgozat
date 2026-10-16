import { createContext, useContext, useState, type ReactNode } from "react";
import {TANULOSZOBAKLISTA, type TanuloszobakTipus } from "../adat";

interface KartyaContextValue{
    lista: TanuloszobakTipus[];
    kivalaszt: (index: number) => void;
}

1.
export const KartyaContext = createContext<KartyaContextValue | undefined>(undefined);

2.
type KartyaProviderProps = {
    children: ReactNode;
}

export function KartyaProvider({children}: KartyaProviderProps){
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
      <KartyaContext.Provider value ={{kivalaszt, lista}}>
        {children}
        
      </KartyaContext.Provider>
    )
}

export function useKartyaContext(){
    const context = useContext(KartyaContext);

    if(context === undefined){
        throw new Error(
            'A useKartyaContext csak a KartyaProvider-en belül használható!'
        );
    }

    return context;
}