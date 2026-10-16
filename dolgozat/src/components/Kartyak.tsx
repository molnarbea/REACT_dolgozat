import type { TanuloszobakTipus } from "../adat";
import Kartya from "./Kartya";
import './kartyak.css'

interface ListaProps{
    lista: TanuloszobakTipus[]
}
export default function Kartyak({lista}:ListaProps){
    return(
        <div className="kartyak">
            {lista.map((e,i)=>{
                return <Kartya kartyam={e} index={i} key={i}/>
            })}
        </div>
    )
}