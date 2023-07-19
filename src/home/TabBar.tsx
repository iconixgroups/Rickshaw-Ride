```tsx
import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const TabBar: React.FC = () => {
  const [value, setValue] = React.useState('home');

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Ride" value="ride" icon={<DirectionsCarIcon />} />
      <BottomNavigationAction label="Wallet" value="wallet" icon={<AccountBalanceWalletIcon />} />
      <BottomNavigationAction label="Profile" value="profile" icon={<AccountCircleIcon />} />
    </BottomNavigation>
  );
}

export default TabBar;
```