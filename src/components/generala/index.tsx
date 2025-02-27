import { useState } from "react";
import styles from "./style.module.css";
import { GENERALA_JUGADAS } from "@/lib/generala";
import { Delete, New } from "@/icons/actions";

export default function MyGenerala() {
    // Estado para los jugadores
    const [players, setPlayers] = useState(["Jugador 1", "Jugador 2"]);

    // Manejar el cambio de nombre de un jugador
    const handlePlayerNameChange = (index: number, newName: string) => {
        if (!players.includes(newName)) {
            const updatedPlayers = [...players];
            updatedPlayers[index] = newName;
            setPlayers(updatedPlayers);
        }
    };

    // Agregar un nuevo jugador
    const addPlayer = () => {
        let newPlayer;
        let count = players.length + 1;

        do {
            newPlayer = `Jugador ${count}`;
            count++;
        } while (players.includes(newPlayer)); // Asegura que el nombre no se repita

        setPlayers([...players, newPlayer]);
    };

    // Borrar un jugador
    const deletePlayer = (index: number) => {
        if (players.length > 2) {
            setPlayers(players.filter((_, i) => i !== index));
        }
    };

    // Manejo de selección en los select
    const handleSelect = (event: any, player: any, jugada: any) => {
        const valorObtenido = event.target.value;
        console.log(`Jugador: ${player}, Jugada: ${jugada}, Valor: ${valorObtenido}`);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>Generala Resultados</div>

            <div className={styles.generalaTable}>
                <table>
                    <thead>
                        <tr>
                            <th>Jugada</th>
                            {players.map((player, index) => (
                                <th key={index}>
                                    <input
                                        type="text"
                                        value={player}
                                        onChange={(e) => handlePlayerNameChange(index, e.target.value)}
                                        onFocus={(event) => event.target.select()}
                                    />
                                    {players.length > 2 && (
                                        <span onClick={() => deletePlayer(index)}>
                                            <Delete />
                                        </span>
                                    )}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {GENERALA_JUGADAS.map((jugada) => (
                            <tr key={jugada.id}>
                                <td>{jugada.label}</td>
                                {players.map((player, index) => (
                                    <td key={index}>
                                        <select
                                            name={jugada.label}
                                            onChange={(event) => handleSelect(event, player, jugada.label)}
                                        >
                                            <option value="">---</option>
                                            {Array.isArray(jugada.value) ? jugada.value.map((value, i) => (
                                                <option key={i} value={value}>{value}</option>
                                            )) : null}
                                            <option value="0">Tachar</option>
                                        </select>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total</th>
                            {players.map((_player, index) => (
                                <th key={index}>0</th>
                            ))}
                        </tr>
                    </tfoot>
                </table>
            </div>

            <span onClick={addPlayer}>
                <New />
                <p>Agregar Nuevo Participante</p>
            </span>
        </div>
    );
}
