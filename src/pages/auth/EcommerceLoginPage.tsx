import { Divider } from "../../components/divider/Divider"
import { AuthEcommereceValidation, type IEcommerceCredentials } from "./ecommerce.auth.contract"
import { yupResolver } from "@hookform/resolvers/yup"
import GoogleLogo from '../../assets/images/Google__G__logo.svg.png'
import FacebookLogo from '../../assets/images/Facebook_f_logo_(2021).svg.webp'
import { NavLink, useNavigate } from "react-router"
import { InputForm } from "../../components/form/InputForm"
import { useForm } from "react-hook-form"
import authSvc from "../../services/auth.services"
import { toast } from "sonner"
import { ErrorMessages, SuccessMessage } from "../../config/notification"
import { useAuth } from "../../context/auth.context"

const EcommerceLoginPage = () => {
    const navigate = useNavigate();
    const {setLoggedInUser} = useAuth()

    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
            email: "",
            password: ""
        } as IEcommerceCredentials,
        resolver: yupResolver(AuthEcommereceValidation)
    })

    const submitForm = async (data: IEcommerceCredentials) => {
        try {
            await authSvc.LoginUser(data);
            const loggedInUser = await authSvc.getLoggedInUser()
            console.log(loggedInUser)
            // TODO: globally set to all components
            setLoggedInUser(loggedInUser)
            toast.success("Login Successful", {
                description: SuccessMessage.LoginSuccessMsg
            })
            navigate('/v1/'+loggedInUser.role)
        } catch (exception: any) {
            console.log(exception)
            let errorMessage : string = exception?.error?.message || "Something is wrong"
            toast.error(errorMessage, {
                description: ErrorMessages.LoginErrorMsg
            })
        }
    }

    return (
        <>
            <div className="flex xl:hidden 2xl:hidden flex-col w-full h-full items-center gap-5 justify-center p-5">
                <img className="w-[80px] h-[80px] flex  2xl:w-[149px] 2xl:h-[149px] rounded-full" src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" alt="" />
                <div className="text-3xl font-semibold">Login</div>
                <div className="flex flex-col border rounded-2xl p-5">
                    <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-5 relative text-black">
                        <InputForm control={control} errors={errors} isSubmitting={isSubmitting}/>
                    </form>
                    <div className="flex w-full mt-5">
                        <Divider data="OR" />
                    </div>
                    <div className="flex flex-col gap-5 items-center justify-center mt-5">
                        <div className="flex text-xl">
                            Sign In using
                        </div>
                        <div className="flex gap-5">
                            <img className="w-10 h-10 " src={GoogleLogo} alt="" />
                            <img className="w-10 h-10 " src={FacebookLogo} alt="" />
                        </div>
                        <div className="flex gap-5 text-xl">
                            Don't have account yet?
                            <NavLink className='flex italic text-blue-300 hover:text-blue-500' to={'register'} >
                                Sign Up
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden 2xl:flex xl:flex w-full h-full gap-5 items-center justify-around p-10">
                <div className="flex flex-col items-center justify-center gap-5">
                    <img className="w-[5vw] xl:w-[80px] xl:h-[80px] h-[10vh] flex rounded-full" src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" alt="" />
                    <div className="text-5xl xl:text-3xl font-semibold">Login</div>
                </div>
                <div className="p-5">
                    <div className="flex flex-col border w-150 xl:w-110 rounded-2xl p-5 items-center justify-center">
                        <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-5 relative text-black">
                            <InputForm control={control} errors={errors} isSubmitting={isSubmitting}/>
                        </form>
                        <div className="flex w-full mt-5">
                            <Divider data="OR" />
                        </div>
                        <div className="flex flex-col gap-5 items-center justify-center mt-5">
                            <div className="flex text-xl">
                                Sign In using
                            </div>
                            <div className="flex gap-5">
                                <img className="w-10 h-10 " src={GoogleLogo} alt="" />
                                <img className="w-10 h-10 " src={FacebookLogo} alt="" />
                            </div>
                            <div className="flex gap-5 text-xl">
                                Don't have account yet?
                                <NavLink className='flex italic text-blue-300 hover:text-blue-500' to={'register'} >
                                    Sign Up
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EcommerceLoginPage