```tsx
import React, { useContext } from 'react';
import { UserContext } from '../App';
import { auditLog } from '../services/AuditService';

const Audits = () => {
  const { user } = useContext(UserContext);

  const performAudit = async () => {
    try {
      const auditResult = await auditLog(user.id);
      if (auditResult.success) {
        alert('Audit successful');
      } else {
        alert('Audit failed');
      }
    } catch (error) {
      console.error('Audit error', error);
    }
  };

  return (
    <div id="auditsForm">
      <h2>Audit Logs</h2>
      <button onClick={performAudit}>Perform Audit</button>
    </div>
  );
};

export default Audits;
```