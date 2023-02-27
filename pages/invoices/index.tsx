import React from 'react'
import invoices from 'mocks/invoices.json'
import { ColumnsType } from 'antd/es/table'
import { TableDataTypes } from 'models/dashboard'
import { Avatar, Button, Divider, Input, Tag } from 'antd'
import DataTable from '@components/data_table'
import { EllipsisOutlined, ProjectOutlined, SearchOutlined } from '@ant-design/icons'
import style from './style.module.scss'
import { findStatusColor } from 'models/invoices'

const InvoicesPage = () => {
  //-----------------------------------------------------
  const columns: ColumnsType<TableDataTypes> = [
    {
      title: <span className={style.invoice__table__header}>NAME/CLIENT</span>,
      key: 'name',
      render: (_, record) => (
        <div className={style.invoice__table__record__name}>
          <Avatar size={40} shape="square" icon={<ProjectOutlined />} />
          <div className={style.invoice__table__record__name__content}>
            <p className={style.invoice__table__record__name__content__name}>
              {record.name}
            </p>
            <p className={style.invoice__table__record__name__content__sub_name}>
              <span>Inv: </span>
              <span>{record.invoiceId}</span>
            </p>
          </div>
        </div>
      ),
    },
    {
      title: <span className={style.invoice__table__header}>DATE</span>,
      key: 'date',
      dataIndex: 'date',
      render: (value: string) => (
        <span className={style.invoice__table__record__type__bold}>{value}</span>
      ),
    },
    {
      title: <span className={style.invoice__table__header}>ORDERS/TYPE</span>,
      key: 'orders',
      dataIndex: 'orders',
      render: (value) => (
        <span className={style.invoice__table__record__type__gray}>{value}</span>
      ),
    },
    {
      title: <span className={style.invoice__table__header}>AMOUNT</span>,
      key: 'amount',
      dataIndex: 'amount',
      render: (value: number) => (
        <span className={style.invoice__table__record__type__bold}>{`$${value.toFixed(
          2
        )}`}</span>
      ),
    },
    {
      title: <span className={style.invoice__table__header}>STATUS</span>,
      key: 'status',
      dataIndex: 'status',
      render: (value: string) => (
        <Tag
          color={findStatusColor(value)?.bgColor}
          className={style.invoice__table__record__tag}
        >
          <span style={{ color: findStatusColor(value)?.textColor }}>{value}</span>
        </Tag>
      ),
    },
    {
      title: <span className={style.invoice__table__header}>ACTION</span>,
      key: 'option',
      render: () => (
        <Button
          className={style.invoice__table__record__action__btn__secondary}
          icon={<EllipsisOutlined />}
        />
      ),
    },
  ]

  return (
    <div className={style.invoice}>
      <div className={style.invoice__header}>
        <Input
          className={style.invoice__header__input}
          prefix={<SearchOutlined className={style.invoice__header__input__icon} />}
          placeholder="Search invoices"
        />
        <div className={style.invoice__header__actions}>
          <Button className={style.invoice__header__actions__create}>
            Create Invoice
          </Button>
          <Button className={style.invoice__header__actions__filter}>Filters</Button>
        </div>
      </div>
      <Divider />
      <DataTable className={style.invoice__table} data={invoices} columns={columns} />
    </div>
  )
}

export default InvoicesPage
