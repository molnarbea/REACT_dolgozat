import type { TanuloszobakTipus } from "../adat";
import Kartya from "./Kartya";

interface ListaProps{
    kivalaszt: (index: number) => void,
    lista: TanuloszobakTipus[],
    aktIndex: number
}
export default function Kartyak({lista, kivalaszt, aktIndex}:ListaProps){
    return(
        <div className="kartyak">
            {lista.map((e,i)=>{
                return <Kartya kartyam={e} kivalaszt={kivalaszt} index={i} key={i} isAktiv={i === aktIndex/>
            })}
        </div>
    )
}