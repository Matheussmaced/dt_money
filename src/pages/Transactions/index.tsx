import { useEffect, useState } from "react"
import { Header } from "../../components/Header"

import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles"


interface Transaction {
  id: number;
  description: string;
  type: "outcome" | "income";
  price: number;
  category: string;
  createdAt: string;
}

export const Transactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])


  async function loadTransactions() {
    const reponse = await fetch('http://localhost:3333/transection')
    const data = await reponse.json()

    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])


  return(
    <div>
        <Header />
        <Summary />

       <TransactionContainer>

        <SearchForm />

       <TransactionTable>
          <tbody>
            {transactions.map((transaction)=>{
              return (
                <tr key={transaction.id}>
                <td width='50%'>{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighlight>
                  </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
              )
            })}
          </tbody>
        </TransactionTable>
       </TransactionContainer>
    </div>
  )
}