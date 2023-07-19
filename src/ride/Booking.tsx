```tsx
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { RideSchema } from '../schemas/RideSchema';
import { UserSchema } from '../schemas/UserSchema';

interface BookingProps {
  user: UserSchema;
  ride: RideSchema;
  handleRideBooking: (ride: RideSchema) => void;
}

const Booking: React.FC<BookingProps> = ({ user, ride, handleRideBooking }) => {
  const [rideType, setRideType] = useState<string>('');

  const bookRide = () => {
    if (rideType) {
      handleRideBooking({
        ...ride,
        type: rideType,
        status: 'booked',
        rider: user,
      });
    }
  };

  return (
    <View>
      <Text>Select Ride Type</Text>
      <Button title="Rickshaw" onPress={() => setRideType('Rickshaw')} />
      <Button title="Auto Rickshaw" onPress={() => setRideType('Auto Rickshaw')} />
      <Button title="E-Rickshaw" onPress={() => setRideType('E-Rickshaw')} />
      <Button title="Book Ride" onPress={bookRide} disabled={!rideType} />
    </View>
  );
};

export default Booking;
```