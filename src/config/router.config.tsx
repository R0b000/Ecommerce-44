import { createBrowserRouter, RouterProvider } from "react-router"
import { UserRoles } from "./constants"
import AuthLayoutPage from "../pages/layout/AuthLayoutPage"
import LoginPage from "../pages/auth/LoginPage"
import RegisterPage from "../pages/auth/RegisterPage"
import RegisterPageDate from "../pages/auth/RegisterPageDate"
import RegisterPageEmail from "../pages/auth/RegisterPageEmail"
import HomePage from "../pages/HomePage"
import HomeLayoutPage from "../pages/layout/Ecommerce/HomeLayoutPage"
import GoogleLayoutPage from "../pages/layout/Google/GoogleLayoutPage"
import GoogleMailLayoutPage from "../pages/layout/Google/GoogleMailLayout"
import GoogleChatLayoutPage from "../pages/layout/Google/GoogleChatLayoutPage"
import GoogleMeetLayoutPage from "../pages/layout/Google/GoogleMeetLayoutPage"
import LoginPasswordPage from "../pages/auth/LoginPasswordPage"
import { Banners } from "../pages/banners/Banners"
import { Brand } from "../pages/brand/Brand"
import { Product } from "../pages/product/Product"
import { Order } from "../pages/order/Order"
import { Transaction } from "../pages/transaction/Transaction"
import { Chat } from "../pages/chat/Chat"
import { Users } from "../pages/users/Users"

const routerPathConfig = createBrowserRouter([
    {path: "/", Component: AuthLayoutPage, children: [
        {index: true, Component: LoginPage},
        {path: 'password', Component: LoginPasswordPage},
        {path: 'register', Component: RegisterPage},
        {path: 'register/date', Component: RegisterPageDate},
        {path: 'register/date/email', Component: RegisterPageEmail}
    ]},
    {path: '/v1/admin', element: <HomePage role={UserRoles.ADMIN}/>, children: [
        {path: 'banners', Component: Banners},
        {path: 'brand', Component: Brand},
        {path: 'product', Component: Product},
        {path: 'users', Component: Users},
        {path: 'order', Component: Order},
        {path: 'transaction', Component: Transaction},
        {path: 'chat', Component: Chat},
    ]},
    {path: '/v1/seller', element: <HomePage role={UserRoles.SELLER}/>, children: [
        {path: 'product', Component: Product},
        {path: 'order', Component: Order},
        {path: 'transaction', Component: Transaction},
        {path: 'chat', Component: Chat},
    ]},
    {path: '/v1/customer', element: <HomePage role={UserRoles.CUSTOMER}/>, children: [
        {path: 'order', Component: Order},
        {path: 'transaction', Component: Transaction},
        {path: 'chat', Component: Chat},
    ]},
    {path: '/v2/', Component: HomeLayoutPage},
    {path: '/gmail/', Component: GoogleLayoutPage, children: [
        {index: true, Component: GoogleMailLayoutPage},
        {path: 'mail', Component: GoogleMailLayoutPage},
        {path: 'chat', Component: GoogleChatLayoutPage},
        {path: 'meet', Component: GoogleMeetLayoutPage}
    ]},
])

const RouterConfig = () => {
    return (
        <>
            <RouterProvider router={routerPathConfig} />
        </>
    )
}

export default RouterConfig


// element: <HomePage/>