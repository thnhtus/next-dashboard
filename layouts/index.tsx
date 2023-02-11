import Link from 'next/link'
import React, { ReactElement, useEffect } from 'react'
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
import { useRouter } from 'next/router'
import { setPathName } from '../slices/route'
import { useDispatch } from 'hooks'
import LayoutHeader from '@components/header'
import paths from 'routers/paths'
import style from './style.module.scss'

const { Sider, Content } = Layout
interface Props {
  children: ReactElement
}

const findPathName = (path: string) => {
  const find = Object.values(paths).find(
    (item: { name: string; path: string }) => item.path === path
  )

  return find?.name ?? ''
}

const SideBar: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const dispatch = useDispatch()

  // console.log(router)

  useEffect(() => {
    if (router.pathname !== '/') {
      const pathName = findPathName(router.pathname)
      dispatch(setPathName({ path: pathName }))
    }
  }, [dispatch, router])

  //-----------------------------------------------------------------------

  const menuItems1: MenuProps['items'] = [
    {
      key: '1',
      icon: <HomeFilled />,
      label: <Link href={paths.dashboard.path}>{paths.dashboard.name}</Link>,
    },
    {
      key: '2',
      icon: <FundFilled />,
      label: <Link href={paths.transactions.path}>{paths.transactions.name}</Link>,
    },
    {
      key: '3',
      icon: <BookFilled />,
      label: <Link href={paths.invoices.path}>{paths.invoices.name}</Link>,
    },
    {
      key: '4',
      icon: <WalletFilled />,
      label: <Link href={paths.my_wallets.path}>{paths.my_wallets.name}</Link>,
    },
    {
      key: '5',
      icon: <SettingFilled />,
      label: <Link href={paths.settings.path}>{paths.settings.name}</Link>,
    },
  ]

  const menuItems2: MenuProps['items'] = [
    {
      key: '6',
      icon: <QuestionCircleFilled />,
      label: <Link href={paths.help.path}>{paths.help.name}</Link>,
    },
    {
      key: '7',
      icon: <LogoutOutlined />,
      label: <Link href={paths.logout.path}>{paths.logout.name}</Link>,
    },
  ]
  //-----------------------------------------------------------------------

  return (
    <Layout className={style.layout}>
      <Sider trigger={null} theme="light">
        <div className="logo">LOGO.</div>
        <div>
          <Menu mode="inline" items={menuItems1} />
          <Menu mode="inline" items={menuItems2} />
        </div>
      </Sider>
      <Layout>
        <LayoutHeader />
        <Content className={style.layout__content}>{children}</Content>
      </Layout>
    </Layout>
  )
}

export default SideBar
