```tsx
import React, { useContext, useState } from 'react';
import { UserContext } from '../App';
import { Button, TextField, Paper, Grid } from '@material-ui/core';

const UserManagement: React.FC = () => {
  const { users, manageUser } = useContext(UserContext);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleManageUser = (event) => {
    event.preventDefault();
    manageUser(selectedUser);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h2>User Management</h2>
      </Grid>
      {users.map((user) => (
        <Grid item xs={12} sm={6} md={4} key={user.id}>
          <Paper onClick={() => handleSelectUser(user)}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </Paper>
        </Grid>
      ))}
      {selectedUser && (
        <Grid item xs={12}>
          <form id="userManagementForm" onSubmit={handleManageUser}>
            <TextField
              label="Name"
              value={selectedUser.name}
              onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
            />
            <TextField
              label="Email"
              value={selectedUser.email}
              onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
            />
            <Button type="submit">Update User</Button>
          </form>
        </Grid>
      )}
    </Grid>
  );
};

export default UserManagement;
```