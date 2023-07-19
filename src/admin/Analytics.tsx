```tsx
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const Analytics = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    // Fetch analytics data from server
    fetch('/api/analytics')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h2>Usage Analytics</h2>
      <Bar
        data={data}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }}
      />
    </div>
  );
};

export default Analytics;
```