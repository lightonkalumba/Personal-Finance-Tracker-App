import React from 'react';
import { TrendingUp, TrendingDown, Wallet } from 'lucide-react';

interface BalanceCardProps {
  balance: number;
  totalIncome: number;
  totalExpenses: number;
}

export default function BalanceCard({ balance, totalIncome, totalExpenses }: BalanceCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <Wallet size={24} />
          <span className="text-blue-100 text-sm font-medium">Balance</span>
        </div>
        <div className="text-3xl font-bold">
          ${Math.abs(balance).toFixed(2)}
        </div>
        <div className={`text-sm ${balance >= 0 ? 'text-green-200' : 'text-red-200'}`}>
          {balance >= 0 ? 'Positive' : 'Negative'} Balance
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-green-500">
        <div className="flex items-center justify-between mb-2">
          <TrendingUp className="text-green-500" size={24} />
          <span className="text-gray-500 text-sm font-medium">Income</span>
        </div>
        <div className="text-3xl font-bold text-gray-800">
          ${totalIncome.toFixed(2)}
        </div>
        <div className="text-sm text-green-600">
          This Month
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-red-500">
        <div className="flex items-center justify-between mb-2">
          <TrendingDown className="text-red-500" size={24} />
          <span className="text-gray-500 text-sm font-medium">Expenses</span>
        </div>
        <div className="text-3xl font-bold text-gray-800">
          ${totalExpenses.toFixed(2)}
        </div>
        <div className="text-sm text-red-600">
          This Month
        </div>
      </div>
    </div>
  );
}