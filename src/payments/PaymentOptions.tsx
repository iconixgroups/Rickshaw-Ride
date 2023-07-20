```tsx
import React, { useState } from 'react';

interface PaymentOption {
  id: string;
  type: 'card' | 'upi' | 'cash';
  details: string;
}

const PaymentOptions: React.FC = () => {
  const [paymentOptions, setPaymentOptions] = useState<PaymentOption[]>([]);

  const addPaymentOption = (option: PaymentOption) => {
    setPaymentOptions([...paymentOptions, option]);
  };

  const removePaymentOption = (id: string) => {
    setPaymentOptions(paymentOptions.filter(option => option.id !== id));
  };

  return (
    <div id="paymentForm">
      <h2>Payment Options</h2>
      {paymentOptions.map(option => (
        <div key={option.id}>
          <p>Type: {option.type}</p>
          <p>Details: {option.details}</p>
          <button onClick={() => removePaymentOption(option.id)}>Remove</button>
        </div>
      ))}
      <div>
        <h3>Add New Payment Option</h3>
        <form onSubmit={e => {
          e.preventDefault();
          const type = (e.target as any)['type'].value as PaymentOption['type'];
          const details = (e.target as any)['details'].value;
          addPaymentOption({ id: Math.random().toString(), type, details });
        }}>
          <label>
            Type:
            <select name="type">
              <option value="card">Card</option>
              <option value="upi">UPI</option>
              <option value="cash">Cash</option>
            </select>
          </label>
          <label>
            Details:
            <input type="text" name="details" />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentOptions;
```