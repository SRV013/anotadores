import style from "./style.module.css";

function New() {
    return (
        <svg viewBox="0 0 24 24" className={`${style.icon}  ${style.new}`}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M9 12h6" /><path d="M12 9v6" />
        </svg>
    )
}
function Delete() {
    return (
        <svg viewBox="0 0 24 24" className={`${style.icon} ${style.delete}`} style={{ stroke: 'red' }} >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 7l16 0" />
            <path d="M10 11l0 6" />
            <path d="M14 11l0 6" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        </svg>
    )
}
function Crown() {
    return (
        <svg viewBox="0 0 24 24" className={`${style.icon} ${style.crown}`}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z" />
        </svg>
    )
}

export { Delete, New, Crown }