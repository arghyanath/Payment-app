interface InputProps {

    label: string,
    placeholder: string,
    reference: any
}

export function Input({ label, placeholder, reference }: InputProps) {
    return <div>
        <div className=" text-left font-medium">{label}</div>
        <input ref={reference} className="p-2 w-full border rounded border-gray-300" placeholder={placeholder} />
    </div>
}