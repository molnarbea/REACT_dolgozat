export interface TanuloszobakTipus{
    readonly id: number
    megnevezes: string
    szobatipus: string
    emelet: number
    ferohely: number
    foglalt: number
    gomb: string
}

export const TANULOSZOBAKLISTA: TanuloszobakTipus[] = [{
    id: 1,
    megnevezes: "Csendes sarok",
    szobatipus: "Egyéni tanulás",
    emelet: 1,
    ferohely: 12,
    foglalt: 7,
    gomb: "Helyet foglalok"
    },
    {id: 2,
    megnevezes: "Közös ötletelő",
    szobatipus: "Csoportmunka",
    emelet: 2,
    ferohely: 20,
    foglalt: 11,
    gomb: "Helyet foglalok"
    },
    {id: 3,
    megnevezes: "Digitális műhely",
    szobatipus: "Számítógépes terem",
    emelet: 3,
    ferohely: 16,
    foglalt: 9,
    gomb: "Helyet foglalok"
    }
]