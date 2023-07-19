```tsx
import React, { useState, useEffect } from 'react';
import { User, Payment } from '../shared/types';
import firebase from 'firebase/app';
import 'firebase/database';

const DriverPayouts: React.FC = () => {
  const [payouts, setPayouts] = useState<Payment[]>([]);

  useEffect(() => {
    const db = firebase.database();
    const userId = firebase.auth().currentUser?.uid;

    if (userId) {
      db.ref(`users/${userId}/payouts`).on('value', (snapshot) => {
        const data = snapshot.val();
        const payoutList: Payment[] = [];
        for (let id in data) {
          payoutList.push(data[id]);
        }
        setPayouts(payoutList);
      });
    }
  }, []);

  return (
    <div>
      <h1>Driver Payouts</h1>
      {payouts.map((payout, index) => (
        <div key={index}>
          <p>Ride ID: {payout.rideId}</p>
          <p>Amount: {payout.amount}</p>
          <p>Date: {new Date(payout.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default DriverPayouts;
```