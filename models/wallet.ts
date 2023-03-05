declare type PaymentTypes = '-' | '+'

export interface Payment {
  id: string
  name: string
  date: string
  type: PaymentTypes
  amount: number
}
