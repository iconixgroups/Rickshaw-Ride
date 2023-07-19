```tsx
import React, { useContext, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { UserContext, RideContext } from '../App';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { bookRide } from '../services/rideService';

const BookRide = () => {
  const { user } = useContext(UserContext);
  const { dispatch } = useContext(RideContext);
  const [pickupLocation, setPickupLocation] = useState(null);
  const [rideType, setRideType] = useState(null);

  const handleBookRide = async () => {
    if (pickupLocation && rideType) {
      const ride = await bookRide(user, pickupLocation, rideType);
      dispatch({ type: 'BOOK_RIDE', payload: ride });
    }
  };

  return (
    <View>
      <Text>Book a Ride</Text>
      <GooglePlacesAutocomplete
        placeholder='Enter pickup location'
        onPress={(data, details = null) => {
          setPickupLocation(details.geometry.location);
        }}
        query={{
          key: 'YOUR_GOOGLE_MAPS_API_KEY',
          language: 'en',
        }}
      />
      <Button title="Rickshaw" onPress={() => setRideType('Rickshaw')} />
      <Button title="Auto Rickshaw" onPress={() => setRideType('Auto Rickshaw')} />
      <Button title="Book Ride" onPress={handleBookRide} />
    </View>
  );
};

export default BookRide;
```