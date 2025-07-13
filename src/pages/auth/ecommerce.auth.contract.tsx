import * as Yup from 'yup'
import { UserRoles } from '../../config/constants';

export interface IEcommerceCredentials {
    email: string,
    password: string
}

export interface IEcommereceRegisterCredentials {
    name: string;
    email: string;
    password: string;
    conformPassword: string;
    role: UserRoles;
    gender?: string | null | undefined;
    dob?: Date | null | undefined | string;
    image?: File | null | undefined;
}

export const AuthEcommereceValidation = Yup.object({
    email: Yup.string().email("Please enter a valid email").required("Email is required"),
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
})

export const AuthRegisterEcommereceValidation = Yup.object({
    name: Yup.string().min(2, "Username must be at least 2 characters").required(),
    email: Yup.string().email("Please enter a valid email").required("Email is required"),
    password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[\W_]).{8,25}$/).required("Password is required"),
    conformPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Please confirm your password'),
    role: Yup.mixed<UserRoles>()
        .oneOf(Object.values(UserRoles))
        .default(UserRoles.CUSTOMER)
        .required("Role is required"),
    gender: Yup.string()
        .matches(/^(male|female|other)$/)
        .nullable()
        .notRequired()
        .transform((value, originalValue) => originalValue === '' ? undefined : value),
    dob: Yup.date()
        .nullable()
        .notRequired()
        .transform((value, originalValue) => originalValue === '' ? undefined : value),
    image: Yup.mixed<File>()
        .nullable()
        .notRequired()
        .transform((value, originalValue) => originalValue === '' ? undefined : value),
})

export const ErrorMessage = ({ errors }: Readonly<any>) => {
    return (<>
        {errors && (
            <p className="text-red-500 text-sm mt-1 italic">{errors.message}</p>
        )}
    </>)
}

export const RegisterDefaultValue: IEcommereceRegisterCredentials = {
    name: "",
    email: "",
    password: "",
    conformPassword: "",
    role: UserRoles.CUSTOMER,
    gender: null,
    dob: null,
    image: null,

}