type HangmanWordProps = {
    guessedLetters: string[]
    word: string
    reveal: boolean
}

export function HangmanWord({ reveal, guessedLetters, word }: HangmanWordProps) {
    return (
        <div style={{
            display: "flex",
            gap: ".25em",
            fontSize: "4rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontFamily: "monospace",
        }}>
            {word.split("").map((letter, index) => (
                <span
                style={{
                    borderBottom: ".1em solid black"
                }}
                key = {index}
                >
                    <span style={{
                        visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
                        color: !guessedLetters.includes(letter) && reveal ? "red" : "black",
                    }}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    )
}