import { Outlet } from "react-router"

export const EcommereceAuthLayout = () => {
    return (
        <>
            <div className="flex text-white bg-[#1F1F1F] w-screen h-screen items-center justify-center">
                <div className="w-[60%] 2xl:h-[55%] h-[80%] bg-[#3B3B3F] rounded-4xl relative">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}