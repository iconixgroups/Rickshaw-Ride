```tsx
import React, { useState, useEffect } from 'react';
import { RideSchema } from '../schemas/RideSchema';
import { manageRides } from '../functions/manageRides';

const ManageRides: React.FC = () => {
  const [rides, setRides] = useState<RideSchema[]>([]);

  useEffect(() => {
    fetchRides();
  }, []);

  const fetchRides = async () => {
    const fetchedRides = await manageRides();
    setRides(fetchedRides);
  };

  return (
    <div>
      <h1>Manage Rides</h1>
      <table>
        <thead>
          <tr>
            <th>Ride ID</th>
            <th>Driver</th>
            <th>Rider</th>
            <th>Pickup Location</th>
            <th>Destination</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rides.map((ride) => (
            <tr key={ride.id}>
              <td>{ride.id}</td>
              <td>{ride.driver}</td>
              <td>{ride.rider}</td>
              <td>{ride.pickupLocation}</td>
              <td>{ride.destination}</td>
              <td>{ride.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageRides;
```