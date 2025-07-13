import { useState } from "react"
import { Controller, useController } from "react-hook-form"
import { Input } from "../input/Input"
import { FaEye, FaEyeSlash } from "react-icons/fa"

interface IInputFormProps {
    control: any, 
    errors: any, 
    isSubmitting: boolean,
}

export const InputForm = ({control, errors, isSubmitting}: Readonly<IInputFormProps>) => {
    const [visiblePassword, setVisiblePassword] = useState(false)

    const handleVisiblePassword = () => {
        setVisiblePassword(prev => !prev)
    }
    const { field } = useController({
        name: 'email',
        control: control
    })

    return (<>
        <Input
            type="email"
            placeholder="Enter email or Phone"
            field={field}
            autoComplete="email"
        />
        {errors.email && (
            <div className="text-red-500 p-1 italic absolute top-6">
                {errors.email.message}
            </div>
        )}
        <Controller
            name="password"
            control={control}
            render={({ field }) => (
                <Input
                    type={(visiblePassword ? 'text' : 'password')}
                    placeholder="Enter password"
                    autoComplete="current-password"
                    field={field}
                />
            )}
        />
        <div className="flex relative z-10 bottom-12 left-80">
            {(visiblePassword === false) ?
                <>
                    <span onClick={handleVisiblePassword} className="absolute cursor-pointer"><FaEye size={21} /></span>
                </>
                :
                <>
                    <span onClick={handleVisiblePassword} className="absolute cursor-pointer"><FaEyeSlash size={21} /></span>
                </>
            }
        </div>
        {errors.password && (
            <div className="text-red-500 p-1 italic absolute top-30">
                {errors.password.message}
            </div>
        )}

        <div className="flex items-center justify-center">
            <button disabled={isSubmitting} type='submit' className="border text-white p-3 w-[350px] cursor-pointer hover:bg-teal-400 rounded-2xl text-xl font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed">Sign In</button>
        </div>
    </>)
}