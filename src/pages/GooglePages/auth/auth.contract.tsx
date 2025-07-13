import * as Yup from 'yup'

export interface ICredentials {
    email: string,
}

export interface ICredentialsPassword {
    password: string,
}

export const AuthEmailValidation = Yup.object({
    email: Yup.string().required(),
})

export const AuthPasswordValidation = Yup.object({
    password: Yup.string().required(),
})