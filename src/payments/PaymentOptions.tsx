```tsx
import React, { useState } from 'react';
import { Button, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

const PaymentOptions = () => {
  const [selectedValue, setSelectedValue] = useState('cash');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <RadioGroup aria-label="payment" name="payment1" value={selectedValue} onChange={handleChange}>
        <FormControlLabel value="cash" control={<Radio />} label="Cash" />
        <FormControlLabel value="card" control={<Radio />} label="Card" />
        <FormControlLabel value="upi" control={<Radio />} label="UPI" />
      </RadioGroup>
      <Button variant="contained" color="primary" onClick={() => handlePayment(selectedValue)}>
        Pay
      </Button>
    </div>
  );
};

const handlePayment = (method: string) => {
  // Implement payment handling logic here based on the selected method
  // This could involve calling a payment API or interacting with a payment SDK
};

export default PaymentOptions;
```