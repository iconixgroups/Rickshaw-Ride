```tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const RideType = () => {
  const [selectedRideType, setSelectedRideType] = useState<string>('');

  const rideTypes = ['Standard', 'Premium', 'Large'];

  const handleRideTypeSelection = (rideType: string) => {
    setSelectedRideType(rideType);
  };

  return (
    <View>
      <Text>Select Ride Type</Text>
      {rideTypes.map((rideType, index) => (
        <TouchableOpacity key={index} onPress={() => handleRideTypeSelection(rideType)}>
          <Text style={{ color: selectedRideType === rideType ? 'blue' : 'black' }}>{rideType}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RideType;
```