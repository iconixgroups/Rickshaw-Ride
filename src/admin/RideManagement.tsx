```tsx
import React, { useContext, useState } from 'react';
import { RideContext } from '../contexts/RideContext';
import { Button, Table } from 'react-native-paper';

const RideManagement = () => {
  const { rides, manageRide } = useContext(RideContext);
  const [selectedRide, setSelectedRide] = useState(null);

  const handleSelectRide = (ride) => {
    setSelectedRide(ride);
  };

  const handleManageRide = () => {
    manageRide(selectedRide);
  };

  return (
    <div id="rideManagementForm">
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Cell>Ride ID</Table.Cell>
            <Table.Cell>Driver</Table.Cell>
            <Table.Cell>Rider</Table.Cell>
            <Table.Cell>Status</Table.Cell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {rides.map((ride) => (
            <Table.Row key={ride.id} onPress={() => handleSelectRide(ride)}>
              <Table.Cell>{ride.id}</Table.Cell>
              <Table.Cell>{ride.driver}</Table.Cell>
              <Table.Cell>{ride.rider}</Table.Cell>
              <Table.Cell>{ride.status}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      {selectedRide && (
        <Button mode="contained" onPress={handleManageRide}>
          Manage Selected Ride
        </Button>
      )}
    </div>
  );
};

export default RideManagement;
```