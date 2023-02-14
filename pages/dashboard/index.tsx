import { WalletFilled } from '@ant-design/icons'
import DashboardCard from '@components/dashboard_card'
import DashboardChart from '@components/dashboard_chart'
import DashboardTransaction from '@components/dashboard_transaction'
import DashboardWallet from '@components/dashboard_wallet'
import { CardItem } from 'models/dashboard'
import React from 'react'
import style from './style.module.scss'

const cardItems: CardItem[] = [
  {
    title: 'Total balance',
    icon: <WalletFilled />,
    amount: '$5240.21',
  },
  {
    title: 'Total spending',
    icon: <WalletFilled />,
    amount: '$250.80',
  },
  {
    title: 'Total saved',
    icon: <WalletFilled />,
    amount: '$550.25',
  },
]

const DashboardPage: React.FC = () => {
  return (
    <div className={style.dashboard}>
      <div className={style.dashboard__statistic}>
        <div className={style.dashboard__cards}>
          {cardItems.map((item) => (
            <DashboardCard key={`key-card-${item.title}`} item={item} />
          ))}
        </div>
        <DashboardChart />
        <DashboardTransaction />
      </div>
      <div className={style.dashboard__wallets}>
        <DashboardWallet />
      </div>
    </div>
  )
}

export default DashboardPage
