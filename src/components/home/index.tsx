import { Link } from "react-router-dom";
import styles from "./style.module.css";
import Logo from "@/icons/logo";
export default function MyHome() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span><Logo /></span>
            </div>
            <div className={styles.nav}>
                <Link to="/generala">Genelara</Link>
                <Link to="/truco">Truco</Link>
            </div>
        </div>
    )
}