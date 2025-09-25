import React, { useState, useEffect } from 'react';
import TransactionForm from './components/TransactionForm';
import BalanceCard from './components/BalanceCard';
import TransactionList from './components/TransactionList';
import { DollarSign } from 'lucide-react';

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  description: string;
  category: string;
  date: string;
}

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Load transactions from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem('finance-transactions');
    if (saved) {
      setTransactions(JSON.parse(saved));
    }
  }, []);

  // Save transactions to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem('finance-transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction: Transaction) => {
    setTransactions(prev => [...prev, transaction]);
  };

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
              <DollarSign className="text-white" size={32} />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Finance Tracker
            </h1>
          </div>
          <p className="text-gray-600 text-lg">Take control of your personal finances</p>
        </div>

        {/* Balance Cards */}
        <BalanceCard 
          balance={balance}
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
        />

        {/* Transaction Form */}
        <TransactionForm onAddTransaction={addTransaction} />

        {/* Transaction List */}
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
}

export default App;