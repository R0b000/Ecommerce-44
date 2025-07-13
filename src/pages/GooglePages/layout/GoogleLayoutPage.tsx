import { CgDetailsMore } from "react-icons/cg";
import { AiOutlineSearch } from 'react-icons/ai'
import { IoApps, IoMailSharp, IoOptionsSharp } from "react-icons/io5";
import { SlQuestion } from "react-icons/sl";
import { MdOutlineChatBubbleOutline, MdOutlineSettings } from "react-icons/md";
import { RiGeminiFill } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { SiGooglemeet } from "react-icons/si";
import { NavLink, Outlet } from "react-router";

const GoogleLayoutPage = () => {
    return (
        <>
            <div style={{ backgroundColor: '#F8FAFD' }} className="flex h-[64px] items-center">
                <div className='flex w-[238px] h-full'>
                    <div style={{ backgroundColor: "#E9EEF6" }} className="flex w-[68px] h-full items-center justify-center">
                        <div id='homepage-more-logo' className="flex items-center justify-center w-[50px] h-[48px] rounded-full">
                            <CgDetailsMore size={25} />
                        </div>
                    </div>
                    <div style={{ padding: '0px 0px 0px 22px', backgroundColor: '#F8FAFD' }} className='flex w-[131px] items-center'>
                        <img className='w-[109px] h-[40px]' src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png" alt="" />
                    </div>
                </div>

                <div className='flex w-[1150px]'>
                    <div className='flex w-[908.8px] pl-[80px]'>
                        <div id='search-container' style={{ backgroundColor: '#F8FAFD' }} className='flex w-[calc(100vw-324px)]'>
                            <div style={{ backgroundColor: "#E9EEF6" }} className='flex w-[580px] h-[46px] rounded-full items-center justify-center'>
                                <div id='homepage-more-logo' className='flex items-center justify-center w-[45px] h-[39px] rounded-full'>
                                    <AiOutlineSearch size={'21px'} />
                                </div>
                                <input className='w-[580px] h-[40px] outline-none' type="text" placeholder='Search mail' />
                                <div id='homepage-more-logo' className='flex items-center justify-center w-[45px] h-[39px] rounded-full'>
                                    <IoOptionsSharp size={21} />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="flex justify-end pr-4">
                    <div className='flex items-center justify-center w-[241.2]'>
                        <div className='flex mr-[12px] rounded-[24px] justify-center items-center' style={{ backgroundColor: '#e9eef6', height: '48px', padding: '16px 8px', width: '101.2px' }}>
                            Active
                        </div>
                        <div id="homepage-more-logo" className="flex w-[48px] h-[48px] items-center justify-center rounded-full">
                            <SlQuestion size={21} />
                        </div>
                        <div id="homepage-more-logo" className="flex w-[48px] h-[48px] items-center justify-center rounded-full">
                            <MdOutlineSettings size={21} />
                        </div>
                        <div id="homepage-more-logo" className="flex w-[48px] h-[48px] items-center justify-center rounded-full">
                            <RiGeminiFill size={21} />
                        </div>
                    </div>
                    <div className="flex items-center justify-end w-[90px]">
                        <div id="homepage-more-logo" className="flex w-[48px] h-[48px] items-center justify-center rounded-full">
                            <IoApps size={21} />
                        </div>
                        <div id="homepage-more-logo" className="flex w-[48px] h-[48px] items-center justify-center rounded-full">
                            <VscAccount size={21} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex h-[calc(100vh-64px)]">
                <div style={{ backgroundColor: "#E9EEF6" }} className="flex flex-col w-[68px] gap-5 p-5">
                    <div className="flex flex-col items-center justify-center cursor-pointer">
                        <NavLink to={'mail'} className='flex flex-col items-center justify-center'>
                            <div id="homepage-more-logo" className="flex items-center justify-center w-12 rounded-full p-2">
                                <IoMailSharp size={21} />
                            </div>
                            <div className="font-light text-sm/7 cursor-pointer text-center select-none mt-[-8px]">
                                Mail
                            </div>
                        </NavLink>
                    </div>
                    <div className="flex flex-col cursor-pointer">
                        <NavLink to={'chat'} className='flex flex-col items-center justify-center'>
                            <div id="homepage-more-logo" className="flex items-center justify-center w-12 rounded-full p-2">
                                <MdOutlineChatBubbleOutline size={21} />
                            </div>
                            <div className="font-light text-sm/7 cursor-pointer text-center select-none mt-[-8px]">
                                Chat
                            </div>
                        </NavLink>
                    </div>
                    <div className="flex flex-col cursor-pointer">
                        <NavLink to={'meet'} className='flex flex-col items-center justify-center'>
                            <div id="homepage-more-logo" className="flex items-center justify-center w-12 rounded-full p-2">
                                <SiGooglemeet size={21} />
                            </div>
                            <div className="font-light text-sm/7 cursor-pointer text-center select-none mt-[-8px]">
                                Meet
                            </div>
                        </NavLink>
                    </div>

                </div>
                <Outlet/>
            </div>
        </>
    )
}

export default GoogleLayoutPage;