import { Controller} from "react-hook-form"
import { Input } from "./Input"

interface IInputController {
    inputName: string
    control: any,
}

export const InputController = ({inputName, control}: Readonly<IInputController>) => {
    return (<>
        <Controller
            name={inputName}
            control={control}
            render={({ field }) => (
                <Input
                    type='text'
                    placeholder="Enter username"
                    autoComplete={inputName}
                    field={field}
                />
            )}
        />
    </>)
}