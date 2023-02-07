import { SearchOutlined, BellOutlined, CaretDownOutlined } from '@ant-design/icons'
import { Avatar, Layout } from 'antd'
import { useSelector } from 'hooks'
import React from 'react'
// import './style.module.scss'
import style from './style.module.scss'

const { Header } = Layout

const LayoutHeader: React.FC = () => {
  const { pathName } = useSelector((state) => state.route)

  //---------------------------------------------------------
  return (
    <Header className={style.header}>
      <div className={style.header__content}>
        <p className={style.header__content__path}>{pathName}</p>
        <div className={style.header__content__playground}>
          <SearchOutlined className={style.header__content__playground__icon} />
          <BellOutlined className={style.header__content__playground__icon} />
          <div className={style.header__content__playground__info}>
            <Avatar />
            <p>Thanh Tu</p>
            <CaretDownOutlined />
          </div>
        </div>
      </div>
    </Header>
  )
}

export default LayoutHeader
