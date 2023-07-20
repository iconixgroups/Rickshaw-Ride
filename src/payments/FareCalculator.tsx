```tsx
import React, { useState } from 'react';

interface FareCalculatorProps {
  distance: number;
  time: number;
}

const BASE_FARE = 50;
const COST_PER_KM = 10;
const COST_PER_MIN = 1;

const FareCalculator: React.FC<FareCalculatorProps> = ({ distance, time }) => {
  const [fare, setFare] = useState(0);

  React.useEffect(() => {
    calculateFare(distance, time);
  }, [distance, time]);

  const calculateFare = (distance: number, time: number) => {
    const distanceFare = distance * COST_PER_KM;
    const timeFare = time * COST_PER_MIN;
    const totalFare = BASE_FARE + distanceFare + timeFare;
    setFare(totalFare);
  };

  return (
    <div>
      <h2>Fare Estimate</h2>
      <p>{`The estimated fare for your ride is ₹${fare}`}</p>
    </div>
  );
};

export default FareCalculator;
```