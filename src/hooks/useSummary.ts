import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

export const useSummary = () => {
  const { transaction } = useContext(TransactionsContext)

  const summary = transaction.reduce(
    (accumulator, transactions) => {
      if (transactions.type === 'income') {
        accumulator.income += transactions.price
        accumulator.total += transactions.price
      } else {
        accumulator.outcome += transactions.price
        accumulator.total -= transactions.price
      }

      return accumulator
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return summary
}
