interface ButtonProps {
    type: "primary" | "secondary"
    text: string,
}

const style = {
    "primary": " text-white bg-black",
    "secondary": " text-black bg-white"
}
const defaultStyle = " py-3 px-6 rounded-md outline font-bold cursor-pointer"

export function Button({ type, text }: ButtonProps) {
    return <button className={`  ${defaultStyle} ${style[type]}`}>
        {text}
    </button>
}