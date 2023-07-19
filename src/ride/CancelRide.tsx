```tsx
import React, { useContext } from 'react';
import { Button } from 'react-native-elements';
import { RideContext } from '../contexts/RideContext';

const CancelRide: React.FC = () => {
  const { ride, cancelRide } = useContext(RideContext);

  return (
    <div id="cancelRideForm">
      {ride && (
        <div>
          <h2>Ride Details</h2>
          <p>Pickup: {ride.pickup}</p>
          <p>Destination: {ride.destination}</p>
          <p>Driver: {ride.driver.name}</p>
          <Button title="Cancel Ride" onPress={cancelRide} />
        </div>
      )}
    </div>
  );
};

export default CancelRide;
```