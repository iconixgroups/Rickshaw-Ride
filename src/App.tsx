import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './auth/SignUp';
import LogIn from './auth/LogIn';
import Profile from './user/Profile';
import Wallet from './user/Wallet';
import PickupLocation from './ride/PickupLocation';
import NearbyDrivers from './ride/NearbyDrivers';
import FareEstimate from './ride/FareEstimate';
import Booking from './ride/Booking';
import Cancellation from './ride/Cancellation';
import Completion from './ride/Completion';
import LiveTracking from './tracking/LiveTracking';
import RideStatusUpdates from './notifications/RideStatusUpdates';
import FareCalculator from './payments/FareCalculator';
import PaymentOptions from './payments/PaymentOptions';
import DriverPayouts from './payments/DriverPayouts';
import Users from './admin/Users';
import Rides from './admin/Rides';
import Payments from './admin/Payments';
import Analytics from './admin/Analytics';
import Reports from './admin/Reports';
import IndianLanguages from './localization/IndianLanguages';
import MaterialDesign from './design/MaterialDesign';
import Encryption from './security/Encryption';
import OTP from './security/OTP';
import Audits from './security/Audits';
import Scalability from './architecture/Scalability';
import Performance from './architecture/Performance';
import ReactNativeUI from './ui/ReactNativeUI';
import Maps from './ui/Maps';
import Accessibility from './ui/Accessibility';
import Welcome from './onboarding/Welcome';
import ProfileCreation from './onboarding/ProfileCreation';
import Home from './home/Home';
import TabBar from './home/TabBar';
import Map from './home/Map';
import DriverMatching from './booking/DriverMatching';
import DriverTracking from './booking/DriverTracking';
import Chat from './booking/Chat';
import FareBreakdown from './postRide/FareBreakdown';
import DriverRating from './postRide/DriverRating';
import Feedback from './postRide/Feedback';
import Payment from './postRide/Payment';
import SavedPaymentMethods from './wallet/SavedPaymentMethods';
import TransactionHistory from './wallet/TransactionHistory';
import PromoCodes from './wallet/PromoCodes';
import DevelopersSetup from './guide/DevelopersSetup';
import DependencyInstallation from './guide/DependencyInstallation';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        {/* Add all other routes here */}
      </Switch>
    </Router>
  );
}

export default App;