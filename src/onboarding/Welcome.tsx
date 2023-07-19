```tsx
import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Welcome: React.FC = () => {
  const history = useHistory();

  const handleSignup = () => {
    history.push('/onboarding/signup');
  };

  const handleLogin = () => {
    history.push('/auth/login');
  };

  return (
    <div>
      <Typography variant="h4" component="h1">
        Welcome to Rickshaw Ride App
      </Typography>
      <Typography variant="body1" component="p">
        Your one-stop solution for hassle-free rickshaw rides.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleSignup}>
        Sign Up
      </Button>
      <Button variant="contained" color="secondary" onClick={handleLogin}>
        Log In
      </Button>
    </div>
  );
};

export default Welcome;
```