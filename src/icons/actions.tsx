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
        <svg viewBox="0 0 24 24" className={`${style.icon} ${style.delete}`}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm-1.489 7.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z" fill="currentColor" strokeWidth={0} />
        </svg>
    )
}
function Reset() {
    return (
        <svg viewBox="0 0 24 24" className={`${style.icon} ${style.reset}`}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3.06 13a9 9 0 1 0 .49 -4.087" />
            <path d="M3 4.001v5h5" />
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
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
function Back() {
    return (
        <svg viewBox="0 0 24 24" className={`${style.icon} ${style.back}`}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 20l-3 -8l3 -8" />
        </svg>
    )
}

export { Delete, New, Reset, Crown , Back }