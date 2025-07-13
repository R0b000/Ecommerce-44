import { AiOutlineBold, AiOutlineDollarCircle, AiOutlineFileImage, AiOutlineHome, AiOutlineMessage, AiOutlineSetting, AiOutlineShopping, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { NavLink } from "react-router";

export const UserRoles = {
    ADMIN: 'admin',
    SELLER: 'seller',
    CUSTOMER: 'customer'
} as const;

export const Gender = {
    MALE: 'male',
    FEMALE: 'female',
    OTHER: 'other'
} as const;

export const Status = {
    ACTIVE: 'active',
    INACTIVE: 'inactive'
}

export interface ImageType {
    optimizedUrl: string,
    publicId: string,
    url: string,
}

export type Status = typeof Status[keyof typeof Status]

export const AdminMenu = [
    {
        key: '1',
        icon: <AiOutlineHome />,
        label: <NavLink to={'/'}>Home</NavLink>,
    },
    {
        key: '2',
        icon: <AiOutlineSetting />,
        label: <NavLink to={'/v1/admin'} >Dashboard</NavLink>
    },
    {
        key: '3',
        icon: <AiOutlineFileImage />,
        label: <NavLink to={'/v1/admin/banners'} >Banners</NavLink>
    },
    {
        key: '4',
        icon: <AiOutlineBold />,
        label: <NavLink to={'/v1/admin/brand'} >Brand</NavLink>
    },
    {
        key: '5',
        icon: <AiOutlineUser />,
        label: <NavLink to={'/v1/admin/users'} >Users</NavLink>,
    },
    {
        key: '6',
        icon: <AiOutlineShopping />,
        label: <NavLink to={'/v1/admin/product'} >Product</NavLink>,
    },
    {
        key: '7',
        icon: <AiOutlineShoppingCart />,
        label: <NavLink to={'/v1/admin/order'} >Order</NavLink>,
    },
    {
        key: '8',
        icon: <AiOutlineDollarCircle />,
        label: <NavLink to={'/v1/admin/transaction'} >Transaction</NavLink>,
    },
    {
        key: '9',
        icon: <AiOutlineMessage />,
        label: <NavLink to={'/v1/admin/chat'} >Chat</NavLink>,
    },
]

export const SellerMenu = [
    {
        key: '1',
        icon: <AiOutlineHome />,
        label: <NavLink to={'/'} >Home</NavLink>
    },
    {
        key: '2',
        icon: <AiOutlineSetting />,
        label: <NavLink to={'/v1/seller/'} >Dashboard</NavLink>
    },
    {
        key: '3',
        icon: <AiOutlineShopping />,
        label: <NavLink to={'/v1/seller/product'} >Product</NavLink>
    },
    {
        key: '4',
        icon: <AiOutlineShoppingCart />,
        label: <NavLink to={'/v1/seller/order'} >Order</NavLink>
    },
    {
        key: '5',
        icon: <AiOutlineDollarCircle />,
        label: <NavLink to={'/v1/seller/transaction'} >Transations</NavLink>
    },
    {
        key: '6',
        icon: <AiOutlineMessage />,
        label: <NavLink to={'/v1/seller/chat'} >Chat</NavLink>
    },
]

export const CustomerMenu = [
    {
        key: '1',
        icon: <AiOutlineHome />,
        label: <NavLink to={'/'} >Home</NavLink>
    },
    {
        key: '2',
        icon: <AiOutlineSetting />,
        label: <NavLink to={'/v1/customer/'} >Dashboard</NavLink>
    },
    {
        key: '3',
        icon: <AiOutlineShoppingCart />,
        label: <NavLink to={'/v1/customer/order'} >Order</NavLink>
    },
    {
        key: '4',
        icon: <AiOutlineDollarCircle />,
        label: <NavLink to={'/v1/customer/transaction'} >Transactions</NavLink>
    },
    {
        key: '5',
        icon: <AiOutlineMessage />,
        label: <NavLink to={'/v1/customer/chat'} >Chat</NavLink>
    },
]

export type UserRoles = typeof UserRoles[keyof typeof UserRoles];
export type Gender = typeof Gender[keyof typeof Gender]