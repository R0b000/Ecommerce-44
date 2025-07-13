import { useController, type useForm } from "react-hook-form"
import FormButton from "../../../components/FormButton"
import SignInLeftInfo from "../../../components/SignInLeftInfo"
import { AuthPasswordValidation, type ICredentialsPassword } from "./auth.contract"
import { yupResolver } from "@hookform/resolvers/yup"

const RegisterPageEmail = () => {

    // const submitForm = (data: ICredentialsPassword) => {
    //     console.log(data)
    // }

    return (
        <>
            <SignInLeftInfo
                title="Choose your Gmail Address"
                description="Pick a Gmail address or create your own"
                children={
                    <>
                        <form className='flex flex-col gap-1' action="">
                            <div className="flex flex-col gap-3">
                                <div className="flex border-b p-3 items-center gap-2">
                                    <input type="radio" name="choose-email" className="w-5 h-5" />
                                    <div >
                                        Custom
                                    </div>
                                </div>
                                <div className="flex  p-3 border-b items-center gap-2">
                                    <input type="radio" name="choose-email" className="w-5 h-5" />
                                    <div >
                                        Custom
                                    </div>
                                </div>
                                <div className="flex  p-3 border-b items-center gap-2">
                                    <input type="radio" name="choose-email" className="w-5 h-5" />
                                    <div >
                                        Custom
                                    </div>
                                </div>
                            </div>
                            <FormButton
                                children={
                                    <>
                                        <div className="flex">
                                            <button
                                                type="submit"
                                                style={{ backgroundColor: '#B6D0FB', color: "#062E6F" }}
                                                className="flex rounded-3xl justify-center items-center w-[78.45px] h-[48px] cursor-pointer mt-[-16px]"
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

export default RegisterPageEmail