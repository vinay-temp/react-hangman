import styles from "./Keyboard.module.css"

const KEYS = "abcdefghijklmnopqrstuvwxyz".split("")

type KeyboardProps = {
    disabled?: boolean
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
}

export function KeyBoard({
    disabled = false,
    activeLetters,
    inactiveLetters,
    addGuessedLetter
}: KeyboardProps) {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(3.5em, 1fr))",
                gap: ".5rem",
            }}>

            {KEYS.map(key => {
                const isActive = activeLetters.includes(key)
                const isInactive = inactiveLetters.includes(key)
                return (
                    <button
                        key = {key}
                        onClick={() => addGuessedLetter(key)}
                        disabled = {isActive || isInactive || disabled}
                        className={`${styles.btn}
                                    ${isActive ? styles.active : ""}
                                    ${isInactive ? styles.inactive : ""}`}>
                            {key}
                    </button>
                )
            })}

        </div>
    )
}