import { useState, useEffect } from "react";
import styles from "./style.module.css";
import { GENERALA_JUGADAS } from "@/lib/generala";
import { Delete, New, Crown, Reset, Back } from "@/icons/actions";
import { Link } from "react-router-dom";

const STORAGE_KEY = "generala_game";

export default function MyGenerala() {
    // Estado inicial vacío, se llenará con `localStorage` si hay datos
    const [players, setPlayers] = useState<string[]>([]);
    const [scores, setScores] = useState<{ [key: number]: { [key: string]: number } }>({});

    // Cargar datos desde localStorage al iniciar
    useEffect(() => {
        const savedData = localStorage.getItem(STORAGE_KEY);
        if (savedData) {
            const { players: savedPlayers, scores: savedScores } = JSON.parse(savedData);
            setPlayers(savedPlayers || ["Jugador 1", "Jugador 2"]);
            setScores(savedScores || {});
        } else {
            // Si no hay datos en localStorage, inicializar con 2 jugadores
            setPlayers(["Jugador 1", "Jugador 2"]);
        }
    }, []);

    // Guardar en localStorage cada vez que cambian los jugadores o los puntajes
    useEffect(() => {
        if (players.length > 0) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify({ players, scores }));
        }
    }, [players, scores]);

    const handlePlayerNameChange = (index: number, newName: string) => {
        const updatedPlayers = [...players];
        updatedPlayers[index] = newName;
        setPlayers(updatedPlayers);
    };

    const addPlayer = () => {
        const newPlayerName = `Jugador ${players.length + 1}`;
        setPlayers([...players, newPlayerName]);
    };

    const deletePlayer = (index: number) => {
        if (players.length > 2) {
            const updatedPlayers = players.filter((_, i) => i !== index);
            const updatedScores = { ...scores };
            delete updatedScores[index];

            setPlayers(updatedPlayers);
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

    const handleReset = () => {
        setPlayers(["Jugador 1", "Jugador 2"]);
        setScores({});
        localStorage.removeItem(STORAGE_KEY);
    };

    const getTotalScore = (playerIndex: number) => {
        return Object.values(scores[playerIndex] || {}).reduce((sum, value) => sum + value, 0);
    };

    const totalScores = players.map((_player, index) => getTotalScore(index));
    const maxScore = Math.max(...totalScores);
    const leaders = totalScores.map((score) => score === maxScore);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link to="/"><Back /></Link>
                <span>Generala Resultados</span>
            </div>
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
                                            value={scores[index]?.[jugada.label] ?? ""}
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
                                    <span>
                                        {getTotalScore(index)}
                                        {getTotalScore(index) > 0 &&
                                            leaders[index] && <Crown />
                                        }
                                    </span>
                                </th>
                            ))}
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className={styles.footer}>
                <span onClick={handleReset}>
                    <Reset />
                    <p>Reinicar</p>
                </span>
                <span onClick={addPlayer}>
                    <New />
                    <p>Participante</p>
                </span>
            </div>
        </div>
    );
}
