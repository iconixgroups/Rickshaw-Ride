```tsx
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { RideContext } from '../context/RideContext';
import { DriverSchema } from '../schemas/DriverSchema';

const MatchDriver: React.FC = () => {
  const { rideData, setRideData } = useContext(RideContext);
  const [matchedDriver, setMatchedDriver] = useState<DriverSchema | null>(null);

  useEffect(() => {
    // Simulate matching with a driver
    const simulateMatchDriver = async () => {
      const driver: DriverSchema = {
        id: 'driver1',
        name: 'John Doe',
        vehicle: 'Rickshaw',
        location: { latitude: 12.9715987, longitude: 77.5945627 },
      };

      setMatchedDriver(driver);
      setRideData({ ...rideData, driver });
    };

    simulateMatchDriver();
  }, []);

  return (
    <View>
      {matchedDriver ? (
        <>
          <Text>Driver Matched!</Text>
          <Text>Name: {matchedDriver.name}</Text>
          <Text>Vehicle: {matchedDriver.vehicle}</Text>
          <Button title="Proceed to Ride" onPress={() => {}} />
        </>
      ) : (
        <Text>Matching with a driver...</Text>
      )}
    </View>
  );
};

export default MatchDriver;
```