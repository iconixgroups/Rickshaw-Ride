```tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { DriverSchema } from '../../shared/DriverSchema';
import { UserSchema } from '../../shared/UserSchema';

interface MatchDriverProps {
  user: UserSchema;
}

const MatchDriver: React.FC<MatchDriverProps> = ({ user }) => {
  const [driver, setDriver] = useState<DriverSchema | null>(null);

  useEffect(() => {
    // TODO: Implement logic to fetch and set the nearest driver
    // setDriver(nearestDriver);
  }, [user]);

  const handleConfirmDriver = () => {
    // TODO: Implement logic to confirm the matched driver
  };

  return (
    <View>
      {driver ? (
        <>
          <Text>Matched with Driver: {driver.name}</Text>
          <Text>Vehicle: {driver.vehicle}</Text>
          <Button title="Confirm Driver" onPress={handleConfirmDriver} />
        </>
      ) : (
        <Text>Matching with a driver...</Text>
      )}
    </View>
  );
};

export default MatchDriver;
```