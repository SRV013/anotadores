import { Link } from "react-router-dom";
import style from "./style.module.css";

function Logo() {
    return (
        <Link to="/">
            <div className={style.xone}>
                <svg viewBox="0 0 24 24" className={style.xone_icon} >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 5l3.585 3.585a4.83 4.83 0 0 0 6.83 0l3.585 -3.585" />
                    <path d="M5 19l3.585 -3.585a4.83 4.83 0 0 1 6.83 0l3.585 3.584" />
                </svg>
                <span>XONE</span>
            </div>
        </Link>
    )
}
export default Logo
