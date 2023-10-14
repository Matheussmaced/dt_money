import { createContext, ReactNode, useEffect, useState } from "react";

interface Transaction {
  id: number;
  description: string;
  type: "outcome" | "income";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transaction: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType)

export const TransactionsProvider = ({children}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const url = new URL('http://localhost:3333/transection')

    if (query) {
      url.searchParams.append('q', query)
    }

    const reponse = await fetch(url)
    const data = await reponse.json()

    setTransactions(data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])


  return (
    <TransactionsContext.Provider value ={{
      transaction: transactions,
      fetchTransactions,
      }}>
        {children}
    </TransactionsContext.Provider>
  )
}