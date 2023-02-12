import React from 'react'
import { Table } from 'antd'
import { TableDataTypes } from 'models/dashboard'
import type { ColumnsType, TableProps } from 'antd/es/table'

interface CustomTableProps<T> {
  data: T[]
  columns: ColumnsType<T>
  className?: string
  paging?: TableProps<T>['pagination']
}

const DataTable: React.FC<CustomTableProps<TableDataTypes>> = (props) => {
  const { data, columns, className, paging } = props
  //-------------------------------------------------------------
  return (
    <Table
      className={className}
      rowKey={'name'}
      dataSource={data}
      columns={columns}
      pagination={paging ?? false}
    />
  )
}

export default DataTable
