```tsx
import React, { useState, useEffect } from 'react';
import { RideSchema } from '../schemas/RideSchema';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const Rides: React.FC = () => {
  const [rides, setRides] = useState<RideSchema[]>([]);

  useEffect(() => {
    // Fetch rides from database
    // This is a placeholder, replace with actual fetch from database
    const fetchRides = async () => {
      const response = await fetch('/api/rides');
      const data = await response.json();
      setRides(data);
    };

    fetchRides();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ride ID</TableCell>
            <TableCell align="right">Driver</TableCell>
            <TableCell align="right">Rider</TableCell>
            <TableCell align="right">Pickup Location</TableCell>
            <TableCell align="right">Dropoff Location</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rides.map((ride) => (
            <TableRow key={ride.id}>
              <TableCell component="th" scope="row">
                {ride.id}
              </TableCell>
              <TableCell align="right">{ride.driver}</TableCell>
              <TableCell align="right">{ride.rider}</TableCell>
              <TableCell align="right">{ride.pickupLocation}</TableCell>
              <TableCell align="right">{ride.dropoffLocation}</TableCell>
              <TableCell align="right">{ride.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Rides;
```