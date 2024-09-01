import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('')
  const [lowerLimit, setLowerLimit] = useState(0)
  const [upperLimit, setUpperLimit] = useState(0)

  const calculate = () => {
    const lower = (220 - age) * 0.65;
    const upper = (220 - age) * 0.85;
    setLowerLimit(lower);
    setUpperLimit(upper);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput 
        placeholder='Your age is...'
        value={age}
        onChangeText={text => setAge(text)}
        keyboardType='decimal-pad'
      />
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{`${lowerLimit.toFixed(0)} - ${upperLimit.toFixed(0)}`}</Text>      
      <Button title='Calculate' onPress={(calculate)}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingTop: 30,
    margin: 8,
  },
  field: {
    marginTop: 8,
    marginBottom: 8,
  }
});
