```tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import firebase from 'firebase';

const DriverMatching = () => {
  const [drivers, setDrivers] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null);

  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = async () => {
    const db = firebase.firestore();
    const driversData = await db.collection('drivers').get();
    setDrivers(driversData.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  const handleDriverSelect = (driver) => {
    setSelectedDriver(driver);
  };

  return (
    <View>
      <Text>Select a Driver</Text>
      {drivers.map((driver, index) => (
        <View key={index}>
          <Text>{driver.name}</Text>
          <Button title="Select" onPress={() => handleDriverSelect(driver)} />
        </View>
      ))}
      {selectedDriver && (
        <View>
          <Text>Selected Driver: {selectedDriver.name}</Text>
        </View>
      )}
    </View>
  );
};

export default DriverMatching;
```