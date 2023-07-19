```tsx
import React, { useContext } from 'react';
import { UserContext, RideContext, WalletContext } from '../App';
import UserManagement from './UserManagement';
import RideManagement from './RideManagement';
import PaymentManagement from './PaymentManagement';
import AnalyticsReports from './AnalyticsReports';

const AdminPortal: React.FC = () => {
  const { users } = useContext(UserContext);
  const { rides } = useContext(RideContext);
  const { wallets } = useContext(WalletContext);

  return (
    <div id="adminPortalForm">
      <h1>Admin Portal</h1>
      <UserManagement users={users} />
      <RideManagement rides={rides} />
      <PaymentManagement wallets={wallets} />
      <AnalyticsReports users={users} rides={rides} wallets={wallets} />
    </div>
  );
};

export default AdminPortal;
```