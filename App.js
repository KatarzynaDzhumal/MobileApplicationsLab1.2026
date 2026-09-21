import React, { useState } from 'react';

import { StyleSheet, Text, View, TextInput } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [fullname, setFullname] = useState("Katarzyna Dzhumal");

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Hello, {fullname}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={fullname}
        onChangeText={(text) => setFullname(text)}
      />

      <Card>
        <AssetExample />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
});
