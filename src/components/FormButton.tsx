import type React from "react"

interface FormButtonProps {
    children?: React.ReactNode
}

const FormButton = ({
    children,
}: Readonly<FormButtonProps>) => {
    return (
        <>
            <div 
                id='login-submit-button' 
                className='flex relative w-full gap-8 ml-10 justify-end p-10 mt-[-10px]'>
                {children}
            </div>
        </>
    )
}

export default FormButton