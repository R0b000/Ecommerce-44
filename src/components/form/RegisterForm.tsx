import { Controller } from "react-hook-form"
import { ErrorMessage } from "../../pages/auth/ecommerce.auth.contract"
import { InputController } from "../input/InputController"
import { useState } from "react"
import { Input } from "../input/Input"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { Gender, UserRoles } from "../../config/constants"
import { Button, DatePicker, Upload } from "antd"
import dayjs from "dayjs"
import { AiOutlineUpload } from "react-icons/ai"

interface IRegisterFormProps {
    control: any,
    errors: any,
    isSubmitting: boolean
}

export const RegisterForm = ({control, errors, isSubmitting}: Readonly<IRegisterFormProps>) => {
    const [visiblePassword, setVisiblePassword] = useState(false)
    const handleVisiblePassword = () => {
        setVisiblePassword(prev => !prev)
    }


    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(prev => !prev)
    }

    return (<>
        <InputController inputName={'name'} control={control} />
        <ErrorMessage errors={errors.name} />
        <InputController inputName={'email'} control={control} />
        <ErrorMessage errors={errors.email} />
        <div className="relative">
            <Controller
                name="password"
                control={control}
                render={({ field }) => (
                    <Input
                        type={visiblePassword ? 'text' : 'password'}
                        placeholder="Enter password"
                        autoComplete="new-password"
                        field={field}
                    />
                )}
            />
            <span
                onClick={handleVisiblePassword}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
                {visiblePassword ? <FaEyeSlash className="text-black" size={20} /> : <FaEye className="text-black" size={20} />}
            </span>
            <ErrorMessage errors={errors.password} />
        </div>
        <div className="relative">
            <Controller
                name="conformPassword"
                control={control}
                render={({ field }) => (
                    <Input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Enter password"
                        autoComplete="current-password"
                        field={field}
                    />
                )}
            />
            <span
                onClick={handleShowConfirmPassword}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
                {showConfirmPassword ? <FaEyeSlash className="text-black" size={20} /> : <FaEye className="text-black" size={20} />}
            </span>
            <ErrorMessage errors={errors.conformPassword} />
        </div>
        <Controller
            name="role"
            control={control}
            render={({ field }) => (
                <div >
                    <select id="role" {...field} className="flex w-full bg-white rounded-md h-[29px] text-black px-2 text-sm outline-none border">
                        <option value="">Select Role</option>
                        {Object.values(UserRoles).map((items) => (
                            <option value={items} key={items}>
                                {items.charAt(0).toUpperCase() + items.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
            )}
        />
        <ErrorMessage errors={errors.role} />
        <Controller
            name="gender"
            control={control}
            render={({ field }) => (
                <>
                    <select
                        {...field}
                        id="gender"
                        value={field.value ?? ""}
                        className="bg-white rounded-md h-[29px] text-black px-2 font-light text-sm outline-none"
                    >
                        <option value="" className="text-black">Select Gender</option>
                        {Object.values(Gender).map((value) => (
                            <option key={value} value={value} className="">
                                {value.charAt(0).toUpperCase() + value.slice(1)}
                            </option>
                        ))}
                    </select>
                </>
            )}
        />
        <ErrorMessage errors={errors.gender} />
        <Controller
            name="dob"
            control={control}
            render={({ field }) => (
                <DatePicker
                    style={{ width: "100%" }}
                    value={field.value ? dayjs(field.value) : null}
                    onChange={(dob) => field.onChange(dob ? dob.toDate() : null)}
                    placeholder="Select Date of Birth"
                />
            )}
        />
        <ErrorMessage errors={errors.dob} />
        <Controller
            name="image"
            control={control}
            render={({ field: { onChange } }) => (
                <Upload
                    beforeUpload={(file) => {
                        onChange(file)
                        return false
                    }}
                    showUploadList={true}
                >
                    <Button icon={<AiOutlineUpload />}>Select File</Button>
                </Upload>
            )}
        />
        <ErrorMessage errors={errors.image} />
        <div className="flex items-center justify-center">
            <button disabled={isSubmitting} type='submit' className="border p-3 w-[350px] text-white cursor-pointer hover:bg-teal-400 rounded-2xl text-xl font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed">Sign Up</button>
        </div>
    </>)
}