```tsx
import React, { useContext } from 'react';
import { UserContext } from '../App';
import crypto from 'crypto';

export const Encryption: React.FC = () => {
  const { user } = useContext(UserContext);

  const encryptData = (data: string) => {
    const cipher = crypto.createCipher('aes-256-cbc', 'encryptionKey');
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  };

  const decryptData = (encryptedData: string) => {
    const decipher = crypto.createDecipher('aes-256-cbc', 'encryptionKey');
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  };

  return (
    <div id="encryptionForm">
      <h2>Encryption</h2>
      <p>Encrypted Data: {encryptData(user.email)}</p>
      <p>Decrypted Data: {decryptData(encryptData(user.email))}</p>
    </div>
  );
};
```