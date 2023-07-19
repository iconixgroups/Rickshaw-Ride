```tsx
import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { UserContext, RideContext, WalletContext } from '../App';
import { generateAnalyticsReport } from '../utils';

const AnalyticsReports = () => {
  const { users } = useContext(UserContext);
  const { rides } = useContext(RideContext);
  const { wallets } = useContext(WalletContext);

  const [report, setReport] = useState(null);

  useEffect(() => {
    const report = generateAnalyticsReport(users, rides, wallets);
    setReport(report);
  }, [users, rides, wallets]);

  return (
    <View id="analyticsReportsForm">
      <Text>Analytics Reports</Text>
      {report ? (
        <View>
          <Text>{`Total Users: ${report.totalUsers}`}</Text>
          <Text>{`Total Rides: ${report.totalRides}`}</Text>
          <Text>{`Total Revenue: ${report.totalRevenue}`}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default AnalyticsReports;
```