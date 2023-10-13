import {useContext} from 'react'

import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react"
import { SummaryCard, SummaryContainer } from "./styles"
import { TransactionsContext } from "../../contexts/TransactionsContext"
import { priceFormatter } from '../../utils/formatter'

export const Summary = () => {
  const { transaction } = useContext(TransactionsContext)

  const summary = transaction.reduce(
    (accumulator, transactions) => {
      if(transactions.type === 'income') {
        accumulator.income += transactions.price
        accumulator.total += transactions.price
      } else {
        accumulator.outcome += transactions.price
        accumulator.total -= transactions.price
      }

      return accumulator
    },
    {
      income:0,
      outcome: 0,
      total: 0
    }
  )

  return(
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}