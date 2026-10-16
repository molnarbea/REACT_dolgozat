import type { TanuloszobakTipus } from "../adat";
import Kartya from "./Kartya";
import './kartyak.css'

interface ListaProps{
    kivalaszt: (index: number) => void,
    lista: TanuloszobakTipus[]
}
export default function Kartyak({lista, kivalaszt}:ListaProps){
    return(
        <div className="kartyak">
            {lista.map((e,i)=>{
                return <Kartya kartyam={e} kivalaszt={kivalaszt} index={i} key={i}/>
            })}
        </div>
    )
}