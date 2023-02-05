import Link from 'next/link'
import React, { ReactElement } from 'react'
import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import {
  BookFilled,
  FundFilled,
  HomeFilled,
  LogoutOutlined,
  QuestionCircleFilled,
  SettingFilled,
  WalletFilled,
} from '@ant-design/icons/lib/icons'

const { Header, Sider, Content } = Layout
interface Props {
  children: ReactElement
}

const SideBar: React.FC<Props> = ({ children }) => {
  //-----------------------------------------------------------------------

  const menuItems1: MenuProps['items'] = [
    {
      key: '1',
      icon: <HomeFilled />,
      label: <Link href={'/dashboard'}>Dashboard</Link>,
    },
    {
      key: '2',
      icon: <FundFilled />,
      label: <Link href={'/transactions'}>Transactions</Link>,
    },
    {
      key: '3',
      icon: <BookFilled />,
      label: <Link href={'/invoices'}>Invoices</Link>,
    },
    {
      key: '4',
      icon: <WalletFilled />,
      label: <Link href={'/my_wallets'}>My Wallets</Link>,
    },
    {
      key: '5',
      icon: <SettingFilled />,
      label: <Link href={'/settings'}>Settings</Link>,
    },
  ]

  const menuItems2: MenuProps['items'] = [
    {
      key: '6',
      icon: <QuestionCircleFilled />,
      label: <Link href={'/help'}>Help</Link>,
    },
    {
      key: '7',
      icon: <LogoutOutlined />,
      label: <Link href={'/logout'}>Logout</Link>,
    },
  ]
  //-----------------------------------------------------------------------

  return (
    <Layout className="layout" style={{ height: '100vh' }}>
      <Sider trigger={null} theme="light">
        <div className="logo">LOGO.</div>
        <Menu mode="inline" items={menuItems1} />
        <Menu mode="inline" items={menuItems2} />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            background: '#fff',
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
