```tsx
import React, { useEffect, useState } from 'react';
import { UserSchema } from '../shared/schemas';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const Users: React.FC = () => {
  const [users, setUsers] = useState<UserSchema[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const db = firebase.firestore();
      const usersCollection = db.collection('users');
      const snapshot = await usersCollection.get();
      const usersData: UserSchema[] = [];
      snapshot.forEach(doc => usersData.push(doc.data() as UserSchema));
      setUsers(usersData);
    };

    fetchUsers();
  }, []);

  const handleUserManagement = (user: UserSchema) => {
    // Implement user management logic here
  };

  return (
    <div>
      <h1>Manage Users</h1>
      {users.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <button onClick={() => handleUserManagement(user)}>Manage User</button>
        </div>
      ))}
    </div>
  );
};

export default Users;
```