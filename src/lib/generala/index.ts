export const GENERALA_JUGADAS = [
    { id: "1", label: "1", value: [1, 2, 3, 4, 5] },
    { id: "2", label: "2", value: [2, 4, 6, 8, 10] },
    { id: "3", label: "3", value: [3, 6, 9, 12, 15] },
    { id: "4", label: "4", value: [4, 8, 12, 16, 20] },
    { id: "5", label: "5", value: [5, 10, 15, 20, 25] },
    { id: "6", label: "6", value: [6, 12, 18, 24, 30] },
    { id: "escalera", label: "Escalera", value: [25, 30] },
    { id: "full", label: "Full", value: [30, 35] },
    { id: "poker", label: "Póker", value: [40, 45] },
    { id: "generala", label: "Generala", value: [50, 55] },
    { id: "generala_doble", label: "Generala II", value: [100, 120] },
] as const;

export type JugadaGenerala = (typeof GENERALA_JUGADAS)[number]["id"];
