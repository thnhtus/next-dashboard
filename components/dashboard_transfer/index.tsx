import React from 'react'
import { Avatar, Button, List } from 'antd'
import style from './style.module.scss'
import { DashboardTransfer } from 'models/dashboard'
import dayjs from 'dayjs'
import { RightOutlined, UserOutlined } from '@ant-design/icons'

const data: DashboardTransfer[] = [
  {
    name: 'Saleh Ahmed',
    dateTime: '2022-4-28 11:00',
    amount: 435,
  },
  {
    name: 'Delowar Hossain',
    dateTime: '2022-4-25 11:00',
    amount: 132,
  },
  {
    name: 'Moinul Hasan Nayem',
    dateTime: '2022-4-25 11:00',
    amount: 826,
  },
  {
    name: 'Dr. Jubed Ahmed',
    dateTime: '2022-4-16 11:00',
    amount: 435,
  },
  {
    name: 'AR. Jakir Alp',
    dateTime: '2022-4-14 11:00',
    amount: 228,
  },
]

const DashboardTransfer: React.FC = () => {
  return (
    <div className={style.transfer}>
      <div className={style.transfer__header}>
        <p className={style.transfer__header__title}>Scheduled Transfers</p>
        <Button type="link">
          <span>View all</span>
          <RightOutlined />
        </Button>
      </div>
      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar icon={<UserOutlined />} />}
              title={item.name}
              description={<>{dayjs(item.dateTime).format('MMM DD, YYYY [at] HH:mm')}</>}
            />

            <span className={style.transfer__amount}>
              {`- $${item.amount.toFixed(2)}`}
            </span>
          </List.Item>
        )}
      />
    </div>
  )
}

export default DashboardTransfer
