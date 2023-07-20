```tsx
import React, { useEffect, useState } from 'react';
import { UserSchema, RideSchema, PaymentSchema } from '../shared/Schemas';
import { generateReport } from '../shared/Functions';

const AnalyticsReports: React.FC = () => {
  const [users, setUsers] = useState<UserSchema[]>([]);
  const [rides, setRides] = useState<RideSchema[]>([]);
  const [payments, setPayments] = useState<PaymentSchema[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchRides();
    fetchPayments();
  }, []);

  const fetchUsers = async () => {
    // Fetch users data from API or database
    // This is a placeholder, replace with actual fetch call
    const fetchedUsers: UserSchema[] = [];
    setUsers(fetchedUsers);
  };

  const fetchRides = async () => {
    // Fetch rides data from API or database
    // This is a placeholder, replace with actual fetch call
    const fetchedRides: RideSchema[] = [];
    setRides(fetchedRides);
  };

  const fetchPayments = async () => {
    // Fetch payments data from API or database
    // This is a placeholder, replace with actual fetch call
    const fetchedPayments: PaymentSchema[] = [];
    setPayments(fetchedPayments);
  };

  const generateUsersReport = () => {
    const report = generateReport(users);
    // Display or download report
  };

  const generateRidesReport = () => {
    const report = generateReport(rides);
    // Display or download report
  };

  const generatePaymentsReport = () => {
    const report = generateReport(payments);
    // Display or download report
  };

  return (
    <div>
      <h1>Analytics Reports</h1>
      <button onClick={generateUsersReport}>Generate Users Report</button>
      <button onClick={generateRidesReport}>Generate Rides Report</button>
      <button onClick={generatePaymentsReport}>Generate Payments Report</button>
    </div>
  );
};

export default AnalyticsReports;
```