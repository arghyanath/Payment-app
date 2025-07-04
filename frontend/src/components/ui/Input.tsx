interface InputProps {

    label: string,
    placeholder: string
}

export function Input({ label, placeholder }: InputProps) {
    return <div>
        <div className=" text-left font-medium">{label}</div>
        <input className="p-2 w-full border rounded border-gray-300" placeholder={placeholder} />
    </div>
}