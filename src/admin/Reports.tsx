```tsx
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

interface Report {
  id: string;
  date: string;
  totalRides: number;
  totalUsers: number;
  totalPayments: number;
}

const Reports: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    // Fetch reports from backend
    // This is a placeholder and should be replaced with actual fetch call
    const fetchReports = async () => {
      const response = await fetch('/api/reports');
      const data = await response.json();
      setReports(data);
    };

    fetchReports();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Total Rides</TableCell>
            <TableCell align="right">Total Users</TableCell>
            <TableCell align="right">Total Payments</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reports.map((report) => (
            <TableRow key={report.id}>
              <TableCell component="th" scope="row">
                {report.date}
              </TableCell>
              <TableCell align="right">{report.totalRides}</TableCell>
              <TableCell align="right">{report.totalUsers}</TableCell>
              <TableCell align="right">{report.totalPayments}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Reports;
```