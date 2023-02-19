export interface CardItem {
  title: string
  icon: JSX.Element
  amount: string
}

export type TransactionTypes = 'Mobile' | 'Entertainment' | 'Software'
export interface Transaction {
  id: number
  name: string
  business: string
  type: string
  amount: number
  date: string
  invoiceId: string
}

export type TableDataTypes = Transaction

export interface DashboardTransfer {
  name: string
  dateTime: string
  amount: number
}
