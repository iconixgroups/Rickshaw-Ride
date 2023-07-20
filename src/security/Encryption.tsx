```tsx
import React from 'react';
import crypto from 'crypto';

export const Encryption: React.FC = () => {
  const algorithm = 'aes-256-ctr';
  const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
  const iv = crypto.randomBytes(16);

  const encrypt = (text: string) => {
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    return {
      iv: iv.toString('hex'),
      content: encrypted.toString('hex')
    };
  };

  const decrypt = (hash: any) => {
    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));
    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);
    return decrpyted.toString();
  };

  return (
    <div>
      <h2>Encryption Module</h2>
      <p>This module provides encryption and decryption functions for secure data handling.</p>
    </div>
  );
};
```