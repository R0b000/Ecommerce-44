import '../global.css'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import SignInLeftInfo from '../../../components/SignInLeftInfo'
import FormButton from '../../../components/FormButton'
import { AuthEmailValidation, type ICredentials } from './auth.contract'
import { useController, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const LoginPage = () => {
    const [showMessage, setShowMessage] = useState(false)
    const navigate = useNavigate();

    const createAccountSpan = () => {
        setShowMessage(prev => !prev);
    }

    const createAccountSpanLiPersonal = () => {
        navigate('/register')
    }

    // const {register, handleSubmit, formState: {errors}} = useForm({
    //     defaultValues: {
    //         email: ""
    //     } as ICredentials
    // })

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: ""
        } as ICredentials,
        resolver: yupResolver(AuthEmailValidation)
    })

    const submitForm = (data: ICredentials) => {
        console.log(data)
    }

    const { field } = useController({
        control: control,
        name: 'email'
    })

    console.log(errors)

    return (
        <>
            <SignInLeftInfo
                title='Sign In'
                description='to continue to Gmail'
                children={
                    <>
                        <form className='flex flex-col gap-1' onSubmit={handleSubmit(submitForm)} action="">
                            {/* <input className='border p-2 rounded-md w-[496.4px] h-[52px]'
                                type="email" 
                                autoComplete='email'
                                {...register('email', {required: true})}
                                placeholder='Email or Phone' 
                            /> */}
                            <input className='border p-2 rounded-md w-[496.4px] h-[52px]'
                                type="email"
                                autoComplete='email'
                                {...field}
                                placeholder='Email or Phone'
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                            {/* <Controller
                                control={control}
                                name='email'
                                render={(field) => (    
                                    <>
                                        <input className='border p-2 rounded-md w-[496.4px] h-[52px]'
                                            type="email"
                                            autoComplete='email'
                                            {...field}
                                            placeholder='Email or Phone'/>
                                    </>
                                )}
                            ></Controller> */}

                            <div id='login-form-button'>
                                <a style={{ color: "#84C2FA" }} className='w-max rounded-xl px-1' href="">Forget Email</a>
                            </div>
                            <p className='mt-5'>
                                Not your computer? Use Guest mode to sign in privately.
                                <a style={{ color: "#84C2FA" }} className='w-max rounded-xl px-1 hover:underline' href="">Learn more about using Guest mode</a>
                            </p>
                            <FormButton
                                children={
                                    <>
                                        <div className='flex gap-10'>
                                            <span style={{ color: "#84C2FA" }} onClick={createAccountSpan} className="flex justify-center items-center cursor-pointer rounded-xl px-4 relative">
                                                Create Account
                                                {showMessage && (
                                                    <ul style={{ backgroundColor: '#2D2D2D', position: 'absolute', zIndex: "50" }} className='flex flex-col rounded-xl p-3 text-white font-light w-[190.7px] h-[160px] mt-50 ml-15 gap-6'>
                                                        <li onClick={createAccountSpanLiPersonal}>For my personal use</li>
                                                        <li>For my child</li>
                                                        <li>For work or my business</li>
                                                    </ul>
                                                )}
                                            </span>
                                            <button
                                                type="submit"
                                                style={{ backgroundColor: '#B6D0FB', color: "#062E6F" }}
                                                className="flex rounded-3xl justify-center items-center w-[78.45px] h-[48px] cursor-pointer"
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </>
                                }
                            />
                        </form>
                    </>
                } />
        </>
    )
}

export default LoginPage