import type { TanuloszobakTipus } from "../adat";
import './kartya.css'

interface KartyaProps{
    kartyam: TanuloszobakTipus,
    index: number,
    kivalaszt: (index:number) => void
}

export default function Kartya({kartyam, index, kivalaszt}:KartyaProps){
    return(
        <>
            <div className="kartya">
                <h2>{kartyam.megnevezes}</h2>
                <p>ID   {kartyam.szobatipus}</p>
                <p>Szobatípus   {kartyam.id}</p>
                <p>Emelet   {kartyam.emelet}</p>
                <p>Férőhely {kartyam.ferohely} fő</p>
                <p>Foglalt helyek   {kartyam.foglalt} fő</p>
                <button onClick={() => kivalaszt(index)}>Helyet foglalok</button>
            </div>

        </>
    )
}