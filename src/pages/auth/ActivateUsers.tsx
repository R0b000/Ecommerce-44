import { Spin } from "antd"
import { BiLoaderCircle } from "react-icons/bi"
import { useNavigate, useParams } from "react-router"
import authSvc from "../../services/auth.services";
import { useCallback, useEffect } from "react";
import { toast } from "sonner";
import { ErrorMessages, SuccessMessage } from "../../config/notification";

export const ActivateUser = () => {
    const navigate = useNavigate();

    const params = useParams();

    const activateUser = useCallback(
        async () => {
            try {
                await authSvc.ActivateAccount(params.token as string);
                toast.success(SuccessMessage.ActivateAccountSuccessMsg)
            } catch {
                toast.error(ErrorMessages.ActivateAccountErrorMsg)
            } finally {
                navigate('/v1')
            }
        }, [params, navigate])

    // const activateUser = async () => {
    //     try {
    //         await authSvc.ActivateAccount(params.token as string);
    //         toast.success(SuccessMessage.ActivateAccountSuccessMsg)
    //         navigate('/v1')
    //     } catch {
    //         toast.error(ErrorMessages.ActivateAccountErrorMsg)
    //         navigate('/v1')
    //     }
    // }

    useEffect(() => {
        activateUser();
    }, [activateUser])

    console.log(params)
    return (<>
        <div className="flex flex-col text-3xl text-blue-400 gap-2 w-full h-full items-center justify-center">
            <Spin indicator={<BiLoaderCircle style={{ fontSize: 80 }} className="animate-spin" />} />
            Activating Account!
        </div>
    </>)
}