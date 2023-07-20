```tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { user, driver } from '../../sharedDependencies';

const ChatWithDriver: React.FC = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    // Fetch chat history from server
    // This is a placeholder, replace with actual server call
    const fetchChatHistory = async () => {
      const response = await fetch('https://example.com/chatHistory');
      const data = await response.json();
      setChatHistory(data);
    };

    fetchChatHistory();
  }, []);

  const sendMessage = () => {
    // Send message to server
    // This is a placeholder, replace with actual server call
    fetch('https://example.com/sendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: user.id,
        to: driver.id,
        message,
      }),
    });

    // Clear the message input
    setMessage('');
  };

  return (
    <View>
      <Text>Chat with Driver</Text>
      {chatHistory.map((chat, index) => (
        <View key={index}>
          <Text>{chat.from === user.id ? 'You' : 'Driver'}: {chat.message}</Text>
        </View>
      ))}
      <TextInput
        value={message}
        onChangeText={setMessage}
        placeholder="Type a message"
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

export default ChatWithDriver;
```