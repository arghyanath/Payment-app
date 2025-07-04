interface ButtonProps {
    type: "primary" | "secondary"
    text: string,
    onClick: () => void
}

const style = {
    "primary": " text-white bg-black",
    "secondary": " text-black bg-white"
}
const defaultStyle = " py-3 px-6 rounded-md outline font-bold cursor-pointer"

export function Button({ type, text, onClick }: ButtonProps) {
    return <button onClick={onClick} className={`  ${defaultStyle} ${style[type]}`}>
        {text}
    </button>
}