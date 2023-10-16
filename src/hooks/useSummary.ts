import { useContextSelector } from 'use-context-selector'

import { TransactionsContext } from '../contexts/TransactionsContext'

export const useSummary = () => {
  const transaction = useContextSelector(TransactionsContext, (context) => {
    return context.transaction
  })

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
