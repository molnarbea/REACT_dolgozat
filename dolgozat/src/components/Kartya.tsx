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
                <h3>{kartyam.szobatipus}</h3>
                <p>ID:   {kartyam.id}</p>
                <p>Szobatípus:   {kartyam.szobatipus}</p>
                <p>Emelet:   {kartyam.emelet}</p>
                <p>Férőhely: {kartyam.ferohely} fő</p>
                <p>Foglalt helyek:   {kartyam.foglalt} fő</p>
                <button onClick={() => kivalaszt(index)} disabled={kartyam.ferohely <= kartyam.foglalt}>{kartyam.gomb} </button>
            </div>

        </>
    )
}