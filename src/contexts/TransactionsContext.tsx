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

interface CreateTransactionInput {
  description: string,
  price: number,
  category: string,
  type: 'income' | 'outcome',
}

interface TransactionContextType {
  transaction: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>
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
      _sort: 'createdAt',
      _order: 'desc',
      q: query,
    }
   })

    setTransactions(response.data)
  }

  async function createTransaction(data: CreateTransactionInput) {
    const { description, price, category, type } = data

    const response = await api.post('transection', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })

    setTransactions(state => [...state, response.data])
  } 

  useEffect(() => {
    fetchTransactions()
  }, [])


  return (
    <TransactionsContext.Provider value ={{
      transaction: transactions,
      fetchTransactions,
      createTransaction,
      }}>
        {children}
    </TransactionsContext.Provider>
  )
}