```tsx
import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

interface FeedbackProps {
  rideId: string;
}

const Feedback: React.FC<FeedbackProps> = ({ rideId }) => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFeedback(event.target.value);
  };

  const submitFeedback = () => {
    // Here you would typically make a call to your backend service to store the feedback
    console.log(`Feedback for ride ${rideId}: ${feedback}`);
  };

  return (
    <div>
      <TextField
        id="feedback-input"
        label="Your Feedback"
        multiline
        rows={4}
        value={feedback}
        onChange={handleFeedbackChange}
      />
      <Button variant="contained" color="primary" onClick={submitFeedback}>
        Submit Feedback
      </Button>
    </div>
  );
};

export default Feedback;
```