import { useForm } from "react-hook-form"
import { AuthRegisterEcommereceValidation, RegisterDefaultValue, type IEcommereceRegisterCredentials } from "./ecommerce.auth.contract"
import { yupResolver } from "@hookform/resolvers/yup"
import { NavLink, useNavigate } from "react-router"
import GoogleLogo from '../../assets/images/Google__G__logo.svg.png'
import FacebookLogo from '../../assets/images/Facebook_f_logo_(2021).svg.webp'
import { Divider } from "../../components/divider/Divider"
import { toast } from "sonner"
import { RegisterForm } from "../../components/form/RegisterForm"
import authSvc from "../../services/auth.services"
import { ErrorMessages, SuccessMessage } from "../../config/notification"

export const EcommereceRegisterPage = () => {
    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm({
        defaultValues: RegisterDefaultValue,
        resolver: yupResolver(AuthRegisterEcommereceValidation) as any
    });

    console.log("This is from isSubmitting", isSubmitting)

    const submitForm = async (data: IEcommereceRegisterCredentials) => {
        try {
            const subData = {
                ...data,
                dob: data.dob?.toString()
            }
            await authSvc.RegisterUser(subData)
            toast.success(SuccessMessage.RegisterSuccessMessage)
            navigate('/v1')
        } catch (exception: any) {
            console.log(exception)
            toast.error(ErrorMessages.RegisterErrorMessage)
            if (exception.code === 400) {
                Object.keys(exception.error.data).forEach((field) => {
                    setError(field as keyof IEcommereceRegisterCredentials, { message: exception.error.data[field] })
                })
            }
        }
    }

    return (<>

        <div className="flex xl:hidden 2xl:hidden flex-col w-full items-center gap-2 justify-center p-5">
            <img className="w-[10vw] h-[10vw] flex rounded-full" src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" alt="" />
            <div className="text-3xl font-semibold">Sign Up</div>
            <div className="flex flex-col border rounded-2xl p-5">
                {/* form */}
                <form onSubmit={handleSubmit(submitForm)} className="flex flex-col text-black gap-5 relative">
                    <RegisterForm control={control} errors={errors} isSubmitting={isSubmitting}/>
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
                        <NavLink className='flex italic text-blue-300 hover:text-blue-500' to={'/v1'} >
                            Sign Up
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>

        <div className="hidden 2xl:flex xl:flex w-full h-full gap-5 items-center justify-around p-10">
            <div className="flex flex-col items-center justify-center gap-5">
                <img className="w-[5vw] xl:w-[8vw] xl:h-[16vh] h-[10vh] flex rounded-full" src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" alt="" />
                <div className="text-5xl xl:text-3xl font-semibold">Hello</div>
                <div className="flex flex-col gap-5 items-center justify-center mt-5">
                    <div className="flex text-xl">
                        Sign Up using
                    </div>
                    <div className="flex gap-5">
                        <img className="w-10 h-10 " src={GoogleLogo} alt="" />
                        <img className="w-10 h-10 " src={FacebookLogo} alt="" />
                    </div>
                    <div className="flex gap-5 text-xl">
                        Already have an account?
                        <NavLink className='flex italic text-blue-300 hover:text-blue-500' to={'/v1'} >
                            Sign In
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="p-5">
                <div className="flex flex-col border w-150 xl:w-110 rounded-2xl p-5 items-center justify-center">
                    <form onSubmit={handleSubmit(submitForm)} className="flex flex-col text-black gap-5 relative">
                        <RegisterForm control={control} errors={errors} isSubmitting={isSubmitting}/>
                    </form>
                </div>
            </div>
        </div>
    </>)
}