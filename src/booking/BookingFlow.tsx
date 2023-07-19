```tsx
import React, { useContext, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { RideContext } from '../context/RideContext';
import { UserContext } from '../context/UserContext';
import PickupLocation from './PickupLocation';
import RideType from './RideType';
import MatchDriver from './MatchDriver';
import TrackDriver from './TrackDriver';
import ChatWithDriver from './ChatWithDriver';

const BookingFlow = () => {
  const { user } = useContext(UserContext);
  const { ride, setRide } = useContext(RideContext);
  const [step, setStep] = useState(0);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  switch (step) {
    case 0:
      return <PickupLocation nextStep={nextStep} />;
    case 1:
      return <RideType nextStep={nextStep} prevStep={prevStep} />;
    case 2:
      return <MatchDriver nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <TrackDriver nextStep={nextStep} prevStep={prevStep} />;
    case 4:
      return <ChatWithDriver nextStep={nextStep} prevStep={prevStep} />;
    default:
      return (
        <View>
          <Text>Booking Flow Completed</Text>
          <Button title="Start Over" onPress={() => setStep(0)} />
        </View>
      );
  }
};

export default BookingFlow;
```