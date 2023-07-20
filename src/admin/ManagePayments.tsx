```tsx
import React, { useState, useEffect } from 'react';
import { PaymentSchema } from '../shared/Schema';
import { managePayments } from '../shared/Functions';

const ManagePayments: React.FC = () => {
  const [payments, setPayments] = useState<PaymentSchema[]>([]);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    const fetchedPayments = await managePayments();
    setPayments(fetchedPayments);
  };

  return (
    <div id="paymentForm">
      <h1>Manage Payments</h1>
      <table>
        <thead>
          <tr>
            <th>Payment ID</th>
            <th>User ID</th>
            <th>Driver ID</th>
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
              <td>{payment.driverId}</td>
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

export default ManagePayments;
```