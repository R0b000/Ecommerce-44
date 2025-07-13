import { BiPencil } from "react-icons/bi"

const GoogleMailLayoutPage = () => {
    return (<>
        <div style={{ backgroundColor: '#F8FAFD' }} className="flex flex-col w-[256px] pl-[22px]">
            <div className="flex w-[256px] h-[56px]">
                <div style={{backgroundColor: '#C2E7FF'}} className="flex items-center justify-center w-[138.45px] h-[56px] rounded-2xl p-2">
                <button className="flex gap-2 font-semibold items-center justify-center">
                    <BiPencil/>
                    Compose
                </button>
            </div>
            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
        <div style={{ backgroundColor: '#FFFFFF' }} className="w-[calc(100vw-324px)] rounded-t-2xl">
            
        </div>
    </>)
}

export default GoogleMailLayoutPage