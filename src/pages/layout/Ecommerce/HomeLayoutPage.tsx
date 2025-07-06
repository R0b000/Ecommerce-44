import { AiOutlineSearch } from "react-icons/ai"

const HomeLayoutPage = () => {
    return (<>
        <div className="flex flex-col items-center justify-center ">
            <div className="flex w-[1200px] h-[64px] p-2">
                <div className="flex items-center justify-center h-full w-[100px]">Logo</div>
                <div className="flex items-center justify-center h-full w-[300px]">
                    <span className="p-2 items-center justify-center flex">
                        Home
                    </span>
                    <span className="p-2 items-center justify-center flex">
                        Shop
                    </span>
                    <span className="p-2 items-center justify-center flex">
                        Product
                    </span>
                    <span className="p-2 items-center justify-center flex">
                        Pages
                    </span>
                    <span className="p-2 items-center justify-center flex">
                        Blog
                    </span>
                </div>
                <div className="flex items-center justify-center h-full w-[500px]">
                    <AiOutlineSearch/>
                    <input className="outline-none" type="text" />
                </div>
                <div className="flex items-center justify-center h-full w-[700px]">
                    <button>Sign In</button>
                </div>
            </div>
            <div className="flex">
                <img className="h-[400px] w-[1200px]" src="https://assets-cdn.kathmandupost.com/uploads/source/news/2024/lifestyle/Missnepal-1722752014.jpg" alt="" />
            </div>
            <div className="h-[64px] font-semibold text-2xl flex items-center justify-center">
                    Featured Product
            </div>
            <div className="flex w-[1200px] justify-center h-[200px] gap-5">
                <img className="w-50 h-50 border rounded-md hover:scale-110 hover:shadow-teal-400" src="https://img.drz.lazcdn.com/static/np/p/9a252e67487592e83ba792b5ae9f0fe9.jpg_400x400q80.jpg_.webp" alt="" />
                <img className="w-50 h-50 border rounded-md hover:scale-110 hover:shadow-teal-400" src="https://img.drz.lazcdn.com/static/np/p/9a252e67487592e83ba792b5ae9f0fe9.jpg_400x400q80.jpg_.webp" alt="" />
                <img className="w-50 h-50 border rounded-md hover:scale-110 hover:shadow-teal-400" src="https://img.drz.lazcdn.com/static/np/p/9a252e67487592e83ba792b5ae9f0fe9.jpg_400x400q80.jpg_.webp" alt="" />
                <img className="w-50 h-50 border rounded-md hover:scale-110 hover:shadow-teal-400" src="https://img.drz.lazcdn.com/static/np/p/9a252e67487592e83ba792b5ae9f0fe9.jpg_400x400q80.jpg_.webp" alt="" />
                <img className="w-50 h-50 border rounded-md hover:scale-110 hover:shadow-teal-400" src="https://img.drz.lazcdn.com/static/np/p/9a252e67487592e83ba792b5ae9f0fe9.jpg_400x400q80.jpg_.webp" alt="" />
            </div>
            <div className="flex items-center w-[1200px] mt-10">
                <span className="flex-grow border"></span>
                <span className="border rounded-md p-3">LOAD PRODUCT</span>
                <span className="flex-grow border"></span>
            </div>
        </div>
    </>)
}

export default HomeLayoutPage