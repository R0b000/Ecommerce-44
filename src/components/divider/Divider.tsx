interface IDividerProps {
    data?: string
}

export const Divider = ({ data }: Readonly<IDividerProps>) => {
    return (<>
        <div className="flex h-full w-full items-center">
            <span className="flex-grow border h-0"></span>
            {
                data && (
                    <span className="mx-4 text-sm whitespace-nowrap">{data}</span>
                )
            }
            <span className="flex-grow border h-0"></span>
        </div>
    </>)
}