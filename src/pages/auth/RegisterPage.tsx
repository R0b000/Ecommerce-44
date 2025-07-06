import { useState } from "react"
import FormButton from "../../components/FormButton"
import SignInLeftInfo from "../../components/SignInLeftInfo"

const RegisterPage = () => {
    const [firstName, setFirstName] = useState("");

    const firstNamePlaceholder = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value)
    }

    return (
        <>
            <SignInLeftInfo
                title="Create a Google Account"
                description="Enter your name"
                children={
                    <>
                        <form className='flex flex-col gap-1' action="">
                            <div className="flex flex-col gap-8">
                                <input className="border p-2 rounded-md w-[496.4px] h-[52px]" type="text" autoComplete="given-name" placeholder="First Name" onChange={firstNamePlaceholder} value={firstName} />
                                <input className="border p-2 rounded-md w-[496.4px] h-[52px]" type="text" autoComplete="family-name" placeholder="Last name (optional)" />
                            </div>
                            <FormButton
                                children={
                                    <>
                                        <div className="flex">
                                            <button
                                                type="submit"
                                                style={{ backgroundColor: '#B6D0FB', color: "#062E6F" }}
                                                className="flex rounded-3xl justify-center items-center w-[78.45px] h-[48px] cursor-pointer mt-4"
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

export default RegisterPage