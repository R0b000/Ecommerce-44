import { type InputHTMLAttributes } from "react"

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    field: any;
}

export const Input = ({ type, placeholder, autoComplete, field, ...rest }: Readonly<IInputProps>) => {
    return (
        <input 
            type={type} 
            autoComplete={autoComplete}
            placeholder={placeholder}
            className="border outline-none bg-white placeholder:text-black/29 p-3 rounded-md w-[350px] h-[30px]"
            {...field}
            {...rest}
        />
    )
}
