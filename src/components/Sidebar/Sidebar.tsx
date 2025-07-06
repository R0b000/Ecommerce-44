import { Menu } from "antd"
import Sider from "antd/es/layout/Sider"
import { AdminMenu, CustomerMenu, SellerMenu, UserRoles } from "../../config/constants"

interface IInterfaceProps {
    collapsed: boolean,
    role: UserRoles
}

export const Sidebar = ({collapsed, role}: Readonly<IInterfaceProps>) => {
    return (<>
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={
                    role === UserRoles.ADMIN ? AdminMenu : (
                        role === UserRoles.CUSTOMER ? CustomerMenu : SellerMenu
                    )
                }
            />
        </Sider>
    </>)
}