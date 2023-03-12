import React, { useState } from 'react';
import TransactionItem from '../../models/TransactionItem'
interface Props {
  data: TransactionItem[];
}

  const RecentTransactions: React.FC<Props> = ({ data }) => {
    return (
      <div className="col-md-6">
      <div className="bg-black shadow p-3 mb-3 rounded">
        <div className="d-flex w-100 mb-2"><h4 className="text-white me-auto">Recent Transactions</h4> <div className="text-warning fs-7 d-flex justify-content-end">View All</div></div>

        {data.map((transactiontitem) => (
       123
        ))}
      </div>
  </div>
    );
  };
  
  export default RecentTransactions;