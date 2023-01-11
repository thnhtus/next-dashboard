import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import { Layout, Menu } from 'antd'

const { Header, Sider, Content } = Layout
interface Props {
  children: ReactElement
}

const SideBar: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const menuItems = [
    {
      href: '/',
      title: 'Homepage',
    },
    {
      href: '/about',
      title: 'About',
    },
  ]

  return (
    <Layout className="layout" style={{ height: '100vh' }}>
      <Sider trigger={null}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              label: <Link href={'/'}>Home</Link>,
            },
            {
              key: '2',
              label: <Link href={'/about'}>About</Link>,
            },
            {
              key: '3',
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        ></Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default SideBar
