```tsx
import React, { useState, useEffect } from 'react';
import { UserSchema } from '../shared/schemas';
import { handleProfileUpdate } from '../shared/functions';
import { TextField, Button, Paper } from '@material-ui/core';

interface ProfileProps {
  user: UserSchema;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const [profile, setProfile] = useState<UserSchema>(user);

  useEffect(() => {
    setProfile(user);
  }, [user]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleProfileUpdate(profile);
  };

  return (
    <Paper elevation={3}>
      <form id="profileForm" onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Name"
          value={profile.name}
          onChange={handleChange}
        />
        <TextField
          name="email"
          label="Email"
          value={profile.email}
          onChange={handleChange}
        />
        <TextField
          name="phone"
          label="Phone"
          value={profile.phone}
          onChange={handleChange}
        />
        <Button type="submit">Update Profile</Button>
      </form>
    </Paper>
  );
};

export default Profile;
```