```tsx
import React from 'react';

interface AuditLog {
  id: string;
  action: string;
  timestamp: Date;
  user: string;
}

const AuditLogs: React.FC = () => {
  const [logs, setLogs] = React.useState<AuditLog[]>([]);

  React.useEffect(() => {
    // Fetch audit logs from server
    // This is a placeholder and should be replaced with actual server call
    fetch('/api/audit-logs')
      .then(response => response.json())
      .then(data => setLogs(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Audit Logs</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Action</th>
            <th>Timestamp</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(log => (
            <tr key={log.id}>
              <td>{log.id}</td>
              <td>{log.action}</td>
              <td>{log.timestamp.toString()}</td>
              <td>{log.user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuditLogs;
```