```tsx
import React, { useState, useEffect } from 'react';
import { UserSchema } from '../shared/schemas';
import { manageUsers } from '../shared/functions';

const ManageUsers: React.FC = () => {
  const [users, setUsers] = useState<UserSchema[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const fetchedUsers = await manageUsers();
    setUsers(fetchedUsers);
  };

  return (
    <div>
      <h1>Manage Users</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.role}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
```