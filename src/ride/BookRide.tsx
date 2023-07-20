```tsx
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { RideSchema } from '../schemas/RideSchema';
import { UserSchema } from '../schemas/UserSchema';
import { DriverSchema } from '../schemas/DriverSchema';

interface BookRideProps {
  user: UserSchema;
  driver: DriverSchema;
  ride: RideSchema;
  bookRide: (ride: RideSchema) => void;
}

const BookRide: React.FC<BookRideProps> = ({ user, driver, ride, bookRide }) => {
  const [isBooking, setIsBooking] = useState(false);

  const handleBookRide = () => {
    setIsBooking(true);
    bookRide(ride);
  };

  return (
    <View>
      <Text>Book a Ride</Text>
      <Text>Pickup Location: {ride.pickupLocation}</Text>
      <Text>Destination: {ride.destination}</Text>
      <Text>Estimated Fare: {ride.estimatedFare}</Text>
      <Text>Driver: {driver.name}</Text>
      <Button disabled={isBooking} onPress={handleBookRide} title="Book Ride" />
    </View>
  );
};

export default BookRide;
```