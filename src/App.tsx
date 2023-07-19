```tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './auth/SignUp';
import LogIn from './auth/LogIn';
import Home from './home/Home';
import Profile from './user/Profile';
import Wallet from './user/Wallet';
import Ride from './ride/Ride';
import BookRide from './ride/BookRide';
import CancelRide from './ride/CancelRide';
import CompleteRide from './ride/CompleteRide';
import DriverTracking from './tracking/DriverTracking';
import RideStatusUpdates from './notifications/RideStatusUpdates';
import FareCalculator from './payments/FareCalculator';
import PaymentOptions from './payments/PaymentOptions';
import DriverPayouts from './payments/DriverPayouts';
import AdminPortal from './admin/AdminPortal';
import UserManagement from './admin/UserManagement';
import RideManagement from './admin/RideManagement';
import PaymentManagement from './admin/PaymentManagement';
import AnalyticsReports from './admin/AnalyticsReports';
import Localization from './localization/Localization';
import Encryption from './security/Encryption';
import OTP from './security/OTP';
import Audits from './security/Audits';
import ReactNativeUIComponents from './ui/ReactNativeUIComponents';
import Maps from './ui/Maps';
import Accessibility from './ui/Accessibility';
import Welcome from './onboarding/Welcome';
import ProfileCreation from './onboarding/ProfileCreation';
import TabBar from './home/TabBar';
import BookingFlow from './booking/BookingFlow';
import PickupLocation from './booking/PickupLocation';
import RideType from './booking/RideType';
import MatchDriver from './booking/MatchDriver';
import TrackDriver from './booking/TrackDriver';
import ChatWithDriver from './booking/ChatWithDriver';
import FareBreakdown from './postRide/FareBreakdown';
import RateDriver from './postRide/RateDriver';
import Payment from './postRide/Payment';
import SavedPaymentMethods from './wallet/SavedPaymentMethods';
import TransactionHistory from './wallet/TransactionHistory';
import PromoCodes from './wallet/PromoCodes';
import DevelopersSetUpGuide from './devGuide/DevelopersSetUpGuide';
import DependencyInstallationGuide from './devGuide/DependencyInstallationGuide';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="Ride" component={Ride} />
        <Stack.Screen name="BookRide" component={BookRide} />
        <Stack.Screen name="CancelRide" component={CancelRide} />
        <Stack.Screen name="CompleteRide" component={CompleteRide} />
        <Stack.Screen name="DriverTracking" component={DriverTracking} />
        <Stack.Screen name="RideStatusUpdates" component={RideStatusUpdates} />
        <Stack.Screen name="FareCalculator" component={FareCalculator} />
        <Stack.Screen name="PaymentOptions" component={PaymentOptions} />
        <Stack.Screen name="DriverPayouts" component={DriverPayouts} />
        <Stack.Screen name="AdminPortal" component={AdminPortal} />
        <Stack.Screen name="UserManagement" component={UserManagement} />
        <Stack.Screen name="RideManagement" component={RideManagement} />
        <Stack.Screen name="PaymentManagement" component={PaymentManagement} />
        <Stack.Screen name="AnalyticsReports" component={AnalyticsReports} />
        <Stack.Screen name="Localization" component={Localization} />
        <Stack.Screen name="Encryption" component={Encryption} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Audits" component={Audits} />
        <Stack.Screen name="ReactNativeUIComponents" component={ReactNativeUIComponents} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="Accessibility" component={Accessibility} />
        <Stack.Screen name="ProfileCreation" component={ProfileCreation} />
        <Stack.Screen name="TabBar" component={TabBar} />
        <Stack.Screen name="BookingFlow" component={BookingFlow} />
        <Stack.Screen name="PickupLocation" component={PickupLocation} />
        <Stack.Screen name="RideType" component={RideType} />
        <Stack.Screen name="MatchDriver" component={MatchDriver} />
        <Stack.Screen name="TrackDriver" component={TrackDriver} />
        <Stack.Screen name="ChatWithDriver" component={ChatWithDriver} />
        <Stack.Screen name="FareBreakdown" component={FareBreakdown} />
        <Stack.Screen name="RateDriver" component={RateDriver} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="SavedPaymentMethods" component={SavedPaymentMethods} />
        <Stack.Screen name="TransactionHistory" component={TransactionHistory} />
        <Stack.Screen name="PromoCodes" component={PromoCodes} />
        <Stack.Screen name="DevelopersSetUpGuide" component={DevelopersSetUpGuide} />
        <Stack.Screen name="DependencyInstallationGuide" component={DependencyInstallationGuide} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```