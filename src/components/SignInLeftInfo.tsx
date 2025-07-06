import type React from "react";

interface SignInLeftInfoProps {
    title?: string,
    description?: string;
    children?: React.ReactNode
}

const SignInLeftInfo = ({
    title,
    description,
    children,
}: Readonly<SignInLeftInfoProps>) => {
    return (
        <>
        <div className='flex mt-[-80px]'>
            <div className='flex w-[512px] h-[200px] p-1 gap-1 grid place-items-start'>
                <div className='flex flex-col gap-3'>
                    <h1 className='font-semibold text-4xl'>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
            <div className='w-[512px] h-[200px]'>
                {children}
            </div>
        </div>
        </>
    )
}

export default SignInLeftInfo