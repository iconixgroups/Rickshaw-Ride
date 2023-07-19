```tsx
import React, { useState, useEffect } from 'react';
import { Payment } from '../shared/PaymentSchema';
import { handlePaymentManagement } from '../shared/FunctionNames';

const Payments: React.FC = () => {
  const [payments, setPayments] = useState<Payment[]>([]);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    const data = await handlePaymentManagement();
    setPayments(data);
  };

  return (
    <div>
      <h1>Payments</h1>
      <table>
        <thead>
          <tr>
            <th>Payment ID</th>
            <th>User ID</th>
            <th>Ride ID</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.userId}</td>
              <td>{payment.rideId}</td>
              <td>{payment.amount}</td>
              <td>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payments;
```