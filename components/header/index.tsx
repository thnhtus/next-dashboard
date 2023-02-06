import { Layout } from 'antd'
import { useSelector } from 'hooks'
import React from 'react'

const { Header } = Layout

const LayoutHeader: React.FC = () => {
  const { pathName } = useSelector((state) => state.route)

  //---------------------------------------------------------
  return (
    <Header
      style={{
        padding: 0,
        background: '#fff',
      }}
    >
      <p>{pathName}</p>
    </Header>
  )
}

export default LayoutHeader
