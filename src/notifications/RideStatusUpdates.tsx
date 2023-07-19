```tsx
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';

const RideStatusUpdates = () => {
  const [rideStatus, setRideStatus] = useState('');

  useEffect(() => {
    const rideRef = firebase.database().ref('rides');
    rideRef.on('value', (snapshot) => {
      const rides = snapshot.val();
      const rideStatus = rides ? rides.status : '';
      setRideStatus(rideStatus);
    });
  }, []);

  return (
    <View>
      <Text>Ride Status: {rideStatus}</Text>
    </View>
  );
};

export default RideStatusUpdates;
```