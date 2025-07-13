import React, { useState } from "react"
import FormButton from "../../../components/FormButton"
import SignInLeftInfo from "../../../components/SignInLeftInfo"

const RegisterPageDate = () => {
    const [gender, setGender] = useState("");

    const genderPlaceholder = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGender(event.target.value)
    }

    return (
        <>
            <SignInLeftInfo
                title="Basic information"
                description="Enter your brithday and gender"
                children={
                    <>
                        <form className='flex flex-col gap-1' action="">
                            <div className="flex flex-col gap-8">
                                <div className="flex gap-2">
                                    <input list="month-list" type="text" placeholder="Month" className="flex border rounded-md p-2 w-[160.14px] h-[48px]" />
                                    <datalist id="month-list">
                                        <option>January</option>
                                        <option>Ferburary</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>June</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                        <option>October</option>
                                        <option>November</option>
                                        <option>December</option>
                                    </datalist>
                                    <input type="text" autoComplete="bday-day" placeholder="Day" className="border rounded-md p-1 w-[160.14px] h-[48px]" />
                                    <input type="text" autoComplete="bday-year" placeholder="Year" className="border rounded-md p-1 w-[160.14px] h-[48px]" />
                                </div>
                                <input list="gender-options" className="border relative p-2 rounded-md w-[496.4px] h-[52px]" type="text" autoComplete="sex" placeholder="Gender" onChange={genderPlaceholder} value={gender} />
                                <datalist id="gender-options" className="absolute w-[481.2px] h-[208px]">
                                    <option>Female</option>
                                    <option>Male</option>
                                    <option>Rather not say</option>
                                    <option>Custom</option>
                                </datalist>
                            </div>
                            <a style={{ color: "#84C2FA" }} href="https://support.google.com/accounts/answer/1733224?hl=en" className="hover:underline">Why we ask for brithday and gender</a>
                            <FormButton
                                children={
                                    <>
                                        <div className="flex">
                                            <button
                                                type="submit"
                                                style={{ backgroundColor: '#B6D0FB', color: "#062E6F" }}
                                                className="flex rounded-3xl justify-center items-center w-[78.45px] h-[48px] cursor-pointer mt-[-8px]"
                                        >
                                            Next
                                        </button>
                                        </div>
                                    </>
                                }
                            />
                        </form>
                    </>
                }
            />
        </>
    )
}

export default RegisterPageDate