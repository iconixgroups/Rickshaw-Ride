```tsx
import React, { useState } from 'react';
import { Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RideSchema } from '../schemas/RideSchema';

interface CancelRideProps {
  ride: RideSchema;
}

const CancelRide: React.FC<CancelRideProps> = ({ ride }) => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const handleCancelRide = async () => {
    setIsLoading(true);
    try {
      // Here, you would typically make a request to your backend service to cancel the ride
      // For the purpose of this example, we'll just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      Alert.alert('Ride cancelled successfully');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Failed to cancel ride', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      title="Cancel Ride"
      onPress={handleCancelRide}
      disabled={isLoading}
    />
  );
};

export default CancelRide;
```