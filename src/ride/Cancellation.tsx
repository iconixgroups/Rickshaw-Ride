```tsx
import React, { useState } from 'react';
import { Button, Alert } from 'react-native';
import firebase from 'firebase';

const Cancellation = ({ rideId }) => {
  const [isCancelled, setIsCancelled] = useState(false);

  const handleCancellation = async () => {
    try {
      await firebase.firestore().collection('rides').doc(rideId).update({
        status: 'cancelled',
      });
      setIsCancelled(true);
    } catch (error) {
      Alert.alert('Error', 'Unable to cancel the ride. Please try again.');
    }
  };

  return (
    <>
      {!isCancelled ? (
        <Button title="Cancel Ride" onPress={handleCancellation} />
      ) : (
        <Alert.alert('Success', 'Your ride has been cancelled successfully.')
      )}
    </>
  );
};

export default Cancellation;
```