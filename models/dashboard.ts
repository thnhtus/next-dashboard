export interface CardItem {
  title: string
  icon: JSX.Element
  amount: string
}

export type TransactionTypes = 'Mobile' | 'Entertainment' | 'Software'
export interface Transaction {
  name: string
  business: string
  type: TransactionTypes
  amount: number
  date: string
}

export type TableDataTypes = Transaction

export interface DashboardTransfer {
  name: string
  dateTime: string
  amount: number
}
