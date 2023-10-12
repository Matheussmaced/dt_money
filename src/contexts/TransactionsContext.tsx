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
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType)

export const TransactionsProvider = ({children}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransactions() {
    const reponse = await fetch('http://localhost:3333/transection')
    const data = await reponse.json()

    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])


  return (
    <TransactionsContext.Provider value ={{ transaction: transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}