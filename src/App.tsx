```tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './auth/SignUp';
import LogIn from './auth/LogIn';
import Profile from './user/Profile';
import Wallet from './user/Wallet';
import PickupLocation from './ride/PickupLocation';
import NearbyDrivers from './ride/NearbyDrivers';
import FareEstimate from './ride/FareEstimate';
import BookRide from './ride/BookRide';
import CancelRide from './ride/CancelRide';
import CompleteRide from './ride/CompleteRide';
import LiveTracking from './tracking/LiveTracking';
import RideStatusUpdates from './notifications/RideStatusUpdates';
import FareCalculator from './payments/FareCalculator';
import PaymentOptions from './payments/PaymentOptions';
import DriverPayouts from './payments/DriverPayouts';
import ManageUsers from './admin/ManageUsers';
import ManageRides from './admin/ManageRides';
import ManagePayments from './admin/ManagePayments';
import AnalyticsReports from './admin/AnalyticsReports';
import IndianLanguages from './localization/IndianLanguages';
import Encryption from './security/Encryption';
import OTP from './security/OTP';
import Audits from './security/Audits';
import WelcomeScreen from './ui/Onboarding/WelcomeScreen';
import ProfileCreation from './ui/Onboarding/ProfileCreation';
import HomeTab from './ui/HomeScreen/HomeTab';
import RideTab from './ui/HomeScreen/RideTab';
import WalletTab from './ui/HomeScreen/WalletTab';
import ProfileTab from './ui/HomeScreen/ProfileTab';
import PickupLocationUI from './ui/BookingFlow/PickupLocation';
import RideType from './ui/BookingFlow/RideType';
import MatchDriver from './ui/BookingFlow/MatchDriver';
import TrackDriver from './ui/BookingFlow/TrackDriver';
import ChatWithDriver from './ui/BookingFlow/ChatWithDriver';
import FareBreakdown from './ui/PostRide/FareBreakdown';
import RateDriver from './ui/PostRide/RateDriver';
import Payment from './ui/PostRide/Payment';
import SavedPaymentMethods from './ui/Wallet/SavedPaymentMethods';
import TransactionHistory from './ui/Wallet/TransactionHistory';
import PromoCodes from './ui/Wallet/PromoCodes';
import DevelopersSetupGuide from './setup/DevelopersSetupGuide';
import DependencyInstallationGuide from './setup/DependencyInstallationGuide';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Route path="/profile" component={Profile} />
        <Route path="/wallet" component={Wallet} />
        <Route path="/pickup" component={PickupLocation} />
        <Route path="/nearby-drivers" component={NearbyDrivers} />
        <Route path="/fare-estimate" component={FareEstimate} />
        <Route path="/book-ride" component={BookRide} />
        <Route path="/cancel-ride" component={CancelRide} />
        <Route path="/complete-ride" component={CompleteRide} />
        <Route path="/live-tracking" component={LiveTracking} />
        <Route path="/ride-status-updates" component={RideStatusUpdates} />
        <Route path="/fare-calculator" component={FareCalculator} />
        <Route path="/payment-options" component={PaymentOptions} />
        <Route path="/driver-payouts" component={DriverPayouts} />
        <Route path="/manage-users" component={ManageUsers} />
        <Route path="/manage-rides" component={ManageRides} />
        <Route path="/manage-payments" component={ManagePayments} />
        <Route path="/analytics-reports" component={AnalyticsReports} />
        <Route path="/indian-languages" component={IndianLanguages} />
        <Route path="/encryption" component={Encryption} />
        <Route path="/otp" component={OTP} />
        <Route path="/audits" component={Audits} />
        <Route path="/welcome" component={WelcomeScreen} />
        <Route path="/profile-creation" component={ProfileCreation} />
        <Route path="/home" component={HomeTab} />
        <Route path="/ride" component={RideTab} />
        <Route path="/wallet-tab" component={WalletTab} />
        <Route path="/profile-tab" component={ProfileTab} />
        <Route path="/pickup-location" component={PickupLocationUI} />
        <Route path="/ride-type" component={RideType} />
        <Route path="/match-driver" component={MatchDriver} />
        <Route path="/track-driver" component={TrackDriver} />
        <Route path="/chat-with-driver" component={ChatWithDriver} />
        <Route path="/fare-breakdown" component={FareBreakdown} />
        <Route path="/rate-driver" component={RateDriver} />
        <Route path="/payment" component={Payment} />
        <Route path="/saved-payment-methods" component={SavedPaymentMethods} />
        <Route path="/transaction-history" component={TransactionHistory} />
        <Route path="/promo-codes" component={PromoCodes} />
        <Route path="/developers-setup-guide" component={DevelopersSetupGuide} />
        <Route path="/dependency-installation-guide" component={DependencyInstallationGuide} />
      </Switch>
    </Router>
  );
}

export default App;
```