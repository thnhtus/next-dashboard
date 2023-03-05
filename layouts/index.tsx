import Link from 'next/link'
import React, { ReactElement, useEffect, useState } from 'react'
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

const menuItems1: MenuProps['items'] = [
  {
    key: '1',
    icon: <HomeFilled />,
    title: paths.dashboard.name,
    label: <Link href={paths.dashboard.path}>{paths.dashboard.name}</Link>,
  },
  {
    key: '2',
    icon: <FundFilled />,
    title: paths.transactions.name,
    label: <Link href={paths.transactions.path}>{paths.transactions.name}</Link>,
  },
  {
    key: '3',
    icon: <BookFilled />,
    title: paths.invoices.name,
    label: <Link href={paths.invoices.path}>{paths.invoices.name}</Link>,
  },
  {
    key: '4',
    icon: <WalletFilled />,
    title: paths.my_wallets.name,
    label: <Link href={paths.my_wallets.path}>{paths.my_wallets.name}</Link>,
  },
  {
    key: '5',
    icon: <SettingFilled />,
    title: paths.settings.name,
    label: <Link href={paths.settings.path}>{paths.settings.name}</Link>,
  },
]

const menuItems2: MenuProps['items'] = [
  {
    key: '6',
    icon: <QuestionCircleFilled />,
    title: paths.help.name,
    label: <Link href={paths.help.path}>{paths.help.name}</Link>,
  },
  {
    key: '7',
    icon: <LogoutOutlined />,
    title: paths.logout.name,
    label: <Link href={paths.logout.path}>{paths.logout.name}</Link>,
  },
]

const findPathName = (path: string) => {
  const find = Object.values(paths).find((item) => item.path === path)

  return find?.name ?? ''
}

const findSelectedMenuKey = (path: string) => {
  const find = Object.values(paths).find((item) => item.path === path)

  return find?.key ?? ''
}

const SideBar: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const dispatch = useDispatch()

  const [currentSelectedMenu, setCurrentSelectedMenu] = useState<string>()

  // console.log(router)

  useEffect(() => {
    if (router.pathname !== '/') {
      const pathName = findPathName(router.pathname)
      dispatch(setPathName({ path: pathName }))

      setCurrentSelectedMenu(findSelectedMenuKey(router.pathname))
    }
  }, [dispatch, router])

  //-----------------------------------------------------------------------

  //-----------------------------------------------------------------------

  return (
    <Layout className={style.layout}>
      <Sider trigger={null} theme="light">
        <div className={style.layout__logo}>LOGO.</div>
        <div className={style.layout__menu}>
          <Menu
            mode="inline"
            items={menuItems1}
            style={{ border: 'none' }}
            selectedKeys={[currentSelectedMenu ?? '']}
          />
          <Menu
            mode="inline"
            items={menuItems2}
            style={{ border: 'none' }}
            selectedKeys={[currentSelectedMenu ?? '']}
          />
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
