```tsx
import React, { useState } from 'react';

interface PromoCode {
  code: string;
  discount: number;
}

const PromoCodes: React.FC = () => {
  const [promoCodes, setPromoCodes] = useState<PromoCode[]>([]);

  const fetchPromoCodes = async () => {
    // Fetch promo codes from server or Firebase
    // This is a placeholder, replace with actual fetch call
    const fetchedPromoCodes: PromoCode[] = await new Promise((resolve) =>
      setTimeout(() => resolve([{ code: 'RIDE50', discount: 50 }]), 2000)
    );
    setPromoCodes(fetchedPromoCodes);
  };

  React.useEffect(() => {
    fetchPromoCodes();
  }, []);

  return (
    <div>
      <h1>Promo Codes</h1>
      {promoCodes.length === 0 ? (
        <p>No promo codes available</p>
      ) : (
        promoCodes.map((promoCode) => (
          <div key={promoCode.code}>
            <h2>{promoCode.code}</h2>
            <p>{promoCode.discount}% off</p>
          </div>
        ))
      )}
    </div>
  );
};

export default PromoCodes;
```