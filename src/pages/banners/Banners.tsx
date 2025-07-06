import { IoMdAdd } from "react-icons/io"

export const Banners = () => {
    return (<>
        <div className="flex flex-col w-full">
            <div className="flex w-full h-[64px] text-2xl font-semibold items-center justify-between pl-10 pr-10 p-2">
                <p className="text-3xl">Banners</p>
                <div className="flex text-[20px] text-white font-light items-center justify-center w-[280px]">
                    <button className="flex items-center justify-center gap-2 rounded-full p-2 pl-4 pr-4 bg-[#3B3B3F]">
                        <IoMdAdd size={28} />
                        Add Banners
                    </button>
                </div>
            </div>
            <div className="flex items-center pt-4">
                <span className="flex-grow border h-0 w-full"></span>
                <span></span>
                <span className="flex-grow border h-0 w-full"></span>
            </div>
            <div className="w-full pt-5">
                <table className="w-full">
                <thead>
                    <tr className= "border w-full">
                        <th className="p-2 border-r">Title</th>
                        <th className="p-2 border-r">Url</th>
                        <th className="p-2 border-r">Status</th>
                        <th className="p-2 border-r">Images</th>
                        <th className="p-2 border-r">Action</th>
                    </tr>
                </thead>
                <tbody className="border border-r">
                    <tr>
                        
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </>)
}