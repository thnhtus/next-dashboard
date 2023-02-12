import React from 'react'
import { ProjectOutlined, RightOutlined } from '@ant-design/icons'
import { Avatar, Button } from 'antd'
import style from './style.module.scss'
import DataTable from '@components/data_table'
import { TableDataTypes, Transaction } from 'models/dashboard'
import type { ColumnsType } from 'antd/es/table'
import dayjs from 'dayjs'

const DashboardTransaction: React.FC = () => {
  const dataSource: Transaction[] = [
    {
      name: 'Iphone 13 Pro Max',
      business: 'Apple. Inc',
      type: 'Mobile',
      amount: 420.84,
      date: '2022-4-14',
    },
    {
      name: 'Netflix Subscription',
      business: 'Netflix',
      type: 'Entertainment',
      amount: 100,
      date: '2022-4-5',
    },
    {
      name: 'Figma Subscription',
      business: 'Figma. Inc',
      type: 'Software',
      amount: 244.2,
      date: '2022-4-2',
    },
  ]

  const columns: ColumnsType<TableDataTypes> = [
    {
      title: <span className={style.transaction__table__header}>NAME/BUSINESS</span>,
      key: 'name',
      //   dataIndex: 'name',
      render: (_, record) => (
        <div className={style.transaction__table__record__name}>
          <Avatar size={40} shape="square" icon={<ProjectOutlined />} />

          <div className={style.transaction__table__record__name__content}>
            <p className={style.transaction__table__record__name__content__name}>
              {record.name}
            </p>
            <p className={style.transaction__table__record__name__content__business}>
              {record.business}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: <span className={style.transaction__table__header}>TYPE</span>,
      key: 'type',
      dataIndex: 'type',
      render: (value: string) => (
        <span className={style.transaction__table__record__type}>{value}</span>
      ),
    },
    {
      title: <span className={style.transaction__table__header}>AMOUNT</span>,
      key: 'amount',
      dataIndex: 'amount',
      render: (value: number) => (
        <span className={style.transaction__table__record__amount}>
          ${value.toFixed(2)}
        </span>
      ),
    },
    {
      title: <span className={style.transaction__table__header}>DATE</span>,
      key: 'date',
      dataIndex: 'date',
      render: (value: string) => (
        <span className={style.transaction__table__record__date}>
          {dayjs(value).format('DD MMM YYYY')}
        </span>
      ),
    },
  ]
  //----------------------------------------------------------
  return (
    <div className={style.transaction}>
      <div className={style.transaction__header}>
        <p className={style.transaction__header__title}>Recent Transaction</p>
        <Button className={style.transaction__header__btn}>
          <span>View all</span>
          <RightOutlined />
        </Button>
      </div>
      <DataTable
        className={style.transaction__table}
        data={dataSource}
        columns={columns}
      />
    </div>
  )
}

export default DashboardTransaction
