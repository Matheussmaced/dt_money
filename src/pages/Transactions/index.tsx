import {useContext} from 'react'

import { Header } from "../../components/Header"

import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles"
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

export const Transactions = () => {
  const { transaction } = useContext(TransactionsContext)

  return(
    <div>
        <Header />
        <Summary />

       <TransactionContainer>

        <SearchForm />

       <TransactionTable>
          <tbody>
            {transaction.map((transactions)=>{
              return (
                <tr key={transactions.id}>
                <td width='50%'>{transactions.description}</td>
                  <td>
                    <PriceHighlight variant={transactions.type}>
                      {transactions.type === 'outcome' && '- '}
                      {priceFormatter.format(transactions.price)}
                    </PriceHighlight>
                  </td>
                <td>{transactions.category}</td>
                <td>{dateFormatter.format(new Date(transactions.createdAt))}</td>
              </tr>
              )
            })}
          </tbody>
        </TransactionTable>
       </TransactionContainer>
    </div>
  )
}