import { Button } from "antd"
import { Header } from "antd/es/layout/layout"
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai"

interface IUserHeaderProps {
    collapsed: boolean,
    setCollapsed: (value: boolean) => void,
    colorBgContainer: string
}

export const UserHeader = ({ collapsed, setCollapsed, colorBgContainer }: Readonly<IUserHeaderProps>) => {
    return (<>
        <Header style={{ padding: 0, background: colorBgContainer  }}>
            <Button
                type="text"
                icon={collapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}
            />
        </Header>
    </>)
}