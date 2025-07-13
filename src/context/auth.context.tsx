import React, { createContext, useContext, useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { Gender, ImageType, Status, UserRoles } from "../config/constants";
import { Spin } from "antd";
import authSvc from "../services/auth.services";

interface ILoggedInUserProps {
    dob: Date,
    email: string,
    gender: Gender,
    image: ImageType,
    name: string,
    role: UserRoles,
    status: Status,
    _id: string,
}

interface IAuthContextProps {
    loggedInUser: null | ILoggedInUserProps
    setLoggedInUser: Dispatch<SetStateAction<ILoggedInUserProps | null>>
}

interface IAuthProviderProps {
    children: React.ReactNode
}

export const AuthContext = createContext<IAuthContextProps>({
    loggedInUser: null,
    setLoggedInUser: () => { }
})

export const useAuth = () => {
    const { loggedInUser, setLoggedInUser } = useContext(AuthContext)

    return {
        loggedInUser,
        setLoggedInUser
    }
}

export const AuthProvider = ({ children }: IAuthProviderProps) => {
    const [loggedInUser, setLoggedInUser] = useState<null | ILoggedInUserProps>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const getLoggedInUserProfile = async () => {
        try {
            let response = await authSvc.getLoggedInUser();
            setLoggedInUser(response);
        } catch {
            //
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("_at_44") || null;
        if(token) {
            getLoggedInUserProfile();
        } else {
            setLoading(false)
        }
    }, [])

    return (<>
        {
            loading ?
                <Spin fullscreen /> :
                <AuthContext.Provider value={{
                    loggedInUser: loggedInUser,
                    setLoggedInUser: setLoggedInUser
                }}>
                    {children}
                </AuthContext.Provider>
        }
    </>)
}