import React from 'react'
import { Avatar, Button, Divider, Input } from 'antd'
import { ProjectOutlined, SearchOutlined } from '@ant-design/icons'
import transactions from 'mocks/transactions.json'
import DataTable from '@components/data_table'
import style from './style.module.scss'
import { ColumnsType } from 'antd/es/table'
import { TableDataTypes } from 'models/dashboard'
import dayjs from 'dayjs'

const TransactionsPage: React.FC = () => {
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
            <p className={style.transaction__table__record__name__content__sub_name}>
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
    {
      title: <span className={style.transaction__table__header}>INVOICE ID</span>,
      key: 'invoiceId',
      dataIndex: 'invoiceId',
      render: (value: string) => (
        <span className={style.transaction__table__record__invoice}>{value}</span>
      ),
    },
    {
      title: <span className={style.transaction__table__header}>ACTION</span>,
      align: 'center',
      render: () => (
        <Button className={style.transaction__table__record__action__btn}>View</Button>
      ),
    },
  ]

  //----------------------------------------------------------

  return (
    <div className={style.transaction}>
      <div className={style.transaction__header}>
        <Input
          className={style.transaction__header__input}
          prefix={<SearchOutlined className={style.transaction__header__input__icon} />}
          placeholder="Search anything on Transactions"
        />
      </div>
      <Divider />
      <DataTable
        className={style.transaction__table}
        data={transactions}
        columns={columns}
      />
    </div>
  )
}

export default TransactionsPage
