import { useState } from "react";
import styles from "./style.module.css";
import { GENERALA_JUGADAS } from "@/lib/generala";
import { Delete, New, Crown } from "@/icons/actions";

export default function MyGenerala() {
    const [players, setPlayers] = useState(["Jugador 1", "Jugador 2"]);
    const [scores, setScores] = useState<{ [key: number]: { [key: string]: number } }>({});

    const handlePlayerNameChange = (index: number, newName: string) => {
        const updatedPlayers = [...players];
        updatedPlayers[index] = newName;
        setPlayers(updatedPlayers);
    };

    const addPlayer = () => {
        const newPlayerName = `Jugador ${players.length + 1}`;
        if (!players.includes(newPlayerName)) {
            setPlayers([...players, newPlayerName]);
        }
    };

    const deletePlayer = (index: number) => {
        if (players.length > 2) {
            setPlayers(players.filter((_, i) => i !== index));

            const updatedScores = { ...scores };
            delete updatedScores[index];
            setScores(updatedScores);
        }
    };

    const handleSelect = (event: any, playerIndex: number, jugada: string) => {
        const valorObtenido = Number(event.target.value) || 0;
        setScores((prevScores) => ({
            ...prevScores,
            [playerIndex]: {
                ...prevScores[playerIndex],
                [jugada]: valorObtenido,
            },
        }));
    };

    const getTotalScore = (playerIndex: number) => {
        return Object.values(scores[playerIndex] || {}).reduce((sum, value) => sum + value, 0);
    };

    const totalScores = players.map((_player, index) => getTotalScore(index));
    const maxScore = Math.max(...totalScores);
    const leaders = totalScores.map((score) => score === maxScore); // Identifica a los líderes

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
                                {players.map((_player, index) => (
                                    <td key={index}>
                                        <select
                                            name={jugada.label}
                                            onChange={(event) => handleSelect(event, index, jugada.label)}
                                        >
                                            <option value="">---</option>
                                            {Array.isArray(jugada.value)
                                                ? jugada.value.map((value, i) => (
                                                    <option key={i} value={value}>
                                                        {value}
                                                    </option>
                                                ))
                                                : null}
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
                                <th key={index}>
                                    {getTotalScore(index)}
                                    {getTotalScore(index) >  0 &&
                                        <span>
                                            {leaders[index] && <Crown />}
                                        </span>
                                    }
                                </th>
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
