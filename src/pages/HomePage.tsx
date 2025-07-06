import { useState } from 'react';
import { Layout, theme } from 'antd';
import { UserRoles } from '../config/constants';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { UserHeader } from '../components/Header/Header';
import { Outlet } from 'react-router';

const { Content } = Layout;

const HomePage = ({role}: Readonly<{role: UserRoles}>) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className='h-screen'>
      <Sidebar role={role} collapsed={collapsed}/>
      <Layout>
        <UserHeader collapsed={collapsed} setCollapsed={setCollapsed} colorBgContainer={colorBgContainer}/>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default HomePage;