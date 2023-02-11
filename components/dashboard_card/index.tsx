import React from 'react'
import { CardItem } from 'models/dashboard'
import style from './style.module.scss'

const DashboardCard: React.FC<{ item: CardItem }> = (props) => {
  const { item } = props

  return (
    <div className={style.card}>
      <div className={style.card__icon}>{item.icon}</div>
      <div className={style.card__content}>
        <p className={style.card__content__title}>{item.title}</p>
        <h2 className={style.card__content__amount}>{item.amount}</h2>
      </div>
    </div>
  )
}

export default DashboardCard
