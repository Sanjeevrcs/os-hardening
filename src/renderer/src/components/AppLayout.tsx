import { ReactNode, useState } from 'react'
import { Layout, Menu, Avatar, Switch } from 'antd'
import { WiDaySunny, WiMoonWaningCrescent4 } from 'react-icons/wi'
import { Typography } from 'antd'
import routes from '@renderer/configs/routes'
import { MenuItemType } from 'antd/es/menu/hooks/useItems'
import { UserOutlined } from '@ant-design/icons'
import { Input, Space } from 'antd'
import { ConfigProvider, theme } from 'antd'
const { Search } = Input

interface DashboardProps {
  children: ReactNode
}
const menuItems: MenuItemType[] = []

routes.map((route) => {
  if (route.isNavItem) {
    menuItems.push({
      label: <a href={route.path}>{route.label}</a>,
      icon: route.icon,
      key: route.path
    })
  }
})

const AppLayout = ({ children }: DashboardProps) => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  const [isDark, setIsDark] = useState(false)

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        components: {
          Collapse: {
            headerPadding: '24px 16px',
            contentPadding: '24px 24px'
          }
        }
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <Layout.Header>
          <Space style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography.Title level={4} style={{ color: colorBgContainer }}>
              OS-Hardening
            </Typography.Title>
            <Space align="center">
              <Search style={{ marginTop: '1rem' }} placeholder="input search text" enterButton />
              <Switch
                checked={isDark}
                checkedChildren={<WiDaySunny />}
                unCheckedChildren={<WiMoonWaningCrescent4 />}
                onClick={() => setIsDark(!isDark)}
              />
              <Avatar
                style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}
                icon={<UserOutlined />}
              />
              <Typography.Text style={{ color: colorBgContainer }}>User </Typography.Text>
            </Space>
          </Space>
        </Layout.Header>
        <Layout hasSider>
          <Layout.Sider width={250} style={{ background: colorBgContainer }}>
            <Menu items={menuItems} />
          </Layout.Sider>
          <Layout style={{ padding: '24px' }}>
            <Layout.Content>{children}</Layout.Content>
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default AppLayout
