```tsx
import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import { UserContext } from '../auth/UserContext';
import { TabBar } from './TabBar';

const Home: React.FC = () => {
  const { user } = useContext(UserContext);

  return (
    <View style={{ flex: 1 }}>
      <Text>Welcome, {user.name}</Text>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: user.location.latitude,
          longitude: user.location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <TabBar />
    </View>
  );
};

export default Home;
```