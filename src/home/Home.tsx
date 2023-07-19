```tsx
import React from 'react';
import { View, Text } from 'react-native';
import Map from '../ui/Maps';
import TabBar from './TabBar';

const Home: React.FC = () => {
  return (
    <View>
      <Text>Welcome to Rickshaw Ride</Text>
      <Map />
      <TabBar />
    </View>
  );
};

export default Home;
```