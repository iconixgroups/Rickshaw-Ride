```tsx
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { User } from '../auth/User';
import firebase from 'firebase';

const SavedPaymentMethods: React.FC = () => {
  const [paymentMethods, setPaymentMethods] = useState<Array<string>>([]);

  useEffect(() => {
    const user = firebase.auth().currentUser;
    if (user) {
      const db = firebase.firestore();
      db.collection('users').doc(user.uid).collection('paymentMethods')
        .get()
        .then((querySnapshot) => {
          const methods: Array<string> = [];
          querySnapshot.forEach((doc) => {
            methods.push(doc.data().method);
          });
          setPaymentMethods(methods);
        });
    }
  }, []);

  return (
    <View>
      <Text>Saved Payment Methods</Text>
      <FlatList
        data={paymentMethods}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default SavedPaymentMethods;
```