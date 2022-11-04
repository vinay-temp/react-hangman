const HEAD = (
    <div style={{
        width: "2.5em",
        height: "2.5em",
        borderRadius: "50%",
        border: ".3em solid black",
        position: "absolute",
        top: "1em",
        right: "-1.5em",
    }}></div>
)

const BODY = (
    <div style={{
        width: ".3em",
        height: "5em",
        background: "black",
        position: "absolute",
        top: "4em",
        right: "0",
    }}></div>
)

const RIGHT_ARM = (
    <div style={{
        width: "4em",
        height: ".3em",
        background: "black",
        position: "absolute",
        rotate: "-30deg",
        transformOrigin: "left bottom",
        top: "5em",
        right: "-4em",
    }}></div>
)

const LEFT_ARM = (
    <div style={{
        width: "4em",
        height: ".3em",
        background: "black",
        position: "absolute",
        rotate: "30deg",
        transformOrigin: "right bottom",
        top: "5em",
        right: ".3em",
    }}></div>
)

const RIGHT_LEG = (
    <div style={{
        width: "4em",
        height: ".3em",
        background: "black",
        position: "absolute",
        rotate: "50deg",
        transformOrigin: "left bottom",
        top: "8.5em",
        right: "-3.7em",
    }}></div>
)

const LEFT_LEG = (
    <div style={{
        width: "4em",
        height: ".3em",
        background: "black",
        position: "absolute",
        rotate: "-50deg",
        transformOrigin: "right bottom",
        top: "8.5em",
        right: "0",
    }}></div>
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return (
        <div style={{
            position: "relative",
        }}>
            {BODY_PARTS.slice(0, numberOfGuesses)}

            <div style={{
                height: "1em",
                width: ".3em",
                background: "black",
                position: "absolute",
                top: "0",
                right: "0",
            }}></div>

            <div style={{
                height: ".3em",
                width: "5em",
                background: "black",
                marginLeft: "4em",
            }}></div>

            <div style={{
                height: "15em",
                width: ".3em",
                background: "black",
                marginLeft: "4em",
            }}></div>

            <div style={{
                height: ".3em",
                width: "8em",
                background: "black",
            }}></div>

        </div>
    )
}