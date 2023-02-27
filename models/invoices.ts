export interface Invoice {
  invoiceId: string
  name: string
  date: string
  orders?: number | string
  amount: number
  status?: string
}

export const invoiceStatus = [
  {
    name: 'Pending',
    textColor: '#F2994A',
    bgColor: '#FFF1E5',
  },
  {
    name: 'Paid',
    textColor: '#27AE60',
    bgColor: '#D9FFE9',
  },
  {
    name: 'Unpaid',
    textColor: '#EB5757',
    bgColor: '#FFEFEF',
  },
]

export const findStatusColor = (status: string) => {
  const find = invoiceStatus.find((item) => item.name === status)

  return find
}
