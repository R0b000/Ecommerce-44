import { useState, type BaseSyntheticEvent, type SyntheticEvent } from "react"
import FormButton from "../../components/FormButton"
import SignInLeftInfo from "../../components/SignInLeftInfo"

const LoginPasswordPage = () => {
    const [credentials, setCredentials] = useState({
        password: '',
    });

    const [visiblePassword, setVisiblePassword] = useState(false)

    const submitForm = (e: SyntheticEvent) => {
        e.preventDefault();
    }

    const handleInputChange = (e: BaseSyntheticEvent) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    console.log(credentials)

    return (
        <>
            {/* <SignInLeftInfo
                title='Welcome'
                children={
                    <>
                        <form className='flex flex-col gap-1' onSubmit={submitForm} action="">
                            <input className='border p-2 rounded-md w-[496.4px] h-[52px]'
                                type={
                                    visiblePassword ? 'text' : 'password'
                                }
                                autoComplete='password'
                                onChange={handleInputChange}
                                name='password'
                                placeholder='Enter you password'
                            />
                            <div className="flex gap-3 text-lg items-center p-2">
                                <input 
                                    className="flex w-5 h-5 mt-1" 
                                    type="checkbox"
                                    checked={visiblePassword}
                                    onChange={() => setVisiblePassword(prev => !prev)} />
                                Show Password
                            </div>
                        </form>
                    </>
                } />
            <FormButton
                children={
                    <>
                        <span style={{ backgroundColor: '#B6D0FB', color: "#062E6F" }} onClick={submitForm} className="flex rounded-3xl justify-center items-center w-[78.45px] h-[48px] cursor-pointer">
                            Next
                        </span>
                    </>
                } />
        </> */}
            <SignInLeftInfo
                title='Welcome'
                children={
                    <>
                        <form className='flex flex-col gap-1' onSubmit={submitForm} action="">
                            <input className='border p-2 rounded-md w-[496.4px] h-[52px]'
                                type={
                                    visiblePassword ? 'text' : 'password'
                                }
                                autoComplete='password'
                                onChange={handleInputChange}
                                name='password'
                                placeholder='Enter you password'
                            />
                            <div className="flex gap-3 text-lg items-center p-2">
                                <input 
                                    className="flex w-5 h-5 mt-1" 
                                    type="checkbox"
                                    checked={visiblePassword}
                                    onChange={() => setVisiblePassword(prev => !prev)} />
                                Show Password
                            </div>
                            <FormButton
                                children={
                                    <>
                                        <div className="flex">
                                            <button
                                            type="submit"
                                            style={{ backgroundColor: '#B6D0FB', color: "#062E6F" }}
                                            className="flex rounded-3xl justify-center items-center w-[78.45px] h-[48px] cursor-pointer mt-13"
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

export default LoginPasswordPage