import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

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
   const response = await api.get('/transection', {
    params: {
      q: query,
    }
   })

    setTransactions(response.data)
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