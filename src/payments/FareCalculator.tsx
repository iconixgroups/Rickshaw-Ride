```tsx
import React, { useState } from 'react';

interface FareCalculatorProps {
  distance: number;
  time: number;
}

const FareCalculator: React.FC<FareCalculatorProps> = ({ distance, time }) => {
  const [fare, setFare] = useState(0);

  const calculateFare = (distance: number, time: number) => {
    // Assuming fare calculation as per the following rules:
    // Base fare: 50
    // Cost per KM: 10
    // Cost per minute: 1
    const baseFare = 50;
    const costPerKm = 10;
    const costPerMinute = 1;

    const distanceFare = distance * costPerKm;
    const timeFare = time * costPerMinute;

    const totalFare = baseFare + distanceFare + timeFare;
    setFare(totalFare);
  };

  React.useEffect(() => {
    calculateFare(distance, time);
  }, [distance, time]);

  return (
    <div>
      <h2>Fare Estimate</h2>
      <p>Distance: {distance} KM</p>
      <p>Time: {time} Minutes</p>
      <p>Estimated Fare: ₹{fare}</p>
    </div>
  );
};

export default FareCalculator;
```