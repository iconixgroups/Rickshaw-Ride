```tsx
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList } from 'react-native';
import firebase from 'firebase';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    firebase.database().ref('messages/').on('value', snapshot => {
      const data = snapshot.val();
      if (data) {
        const initMessages = [];
        Object.keys(data).forEach(msg => initMessages.push(data[msg]));
        setMessages(initMessages);
      }
    });
  }, []);

  const sendMessage = () => {
    if (message.length > 0) {
      let msgId = firebase.database().ref('messages').push().key;
      let updates = {};
      let messageData = {
        id: msgId,
        text: message,
        time: firebase.database.ServerValue.TIMESTAMP,
      };
      updates['messages/' + msgId] = messageData;
      firebase.database().ref().update(updates);
      setMessage('');
    }
  };

  return (
    <View>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.text}</Text>
            <Text>{new Date(item.time).toLocaleDateString()}</Text>
          </View>
        )}
      />
      <TextInput
        value={message}
        onChangeText={text => setMessage(text)}
        placeholder="Type your message"
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

export default Chat;
```