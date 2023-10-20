import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, TextInput, StyleSheet, Text, View, Button } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import styles from  '/'


export default function App() {

  const [value, setValue] = useState(0);
  const [radioval, setRadioval] = useState('male');

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Alcometer</Text>
        <Text style={styles.label}>Weight</Text>
        <TextInput
          style={styles.weightLabel}
        >
        </TextInput>
        <View>
          <Text style={styles.label}>Bottles</Text>
          <View>
            <NumericInput
              onChange={v => setValue(v)}
              value={value}
              rounded
              borderColor='#272626'
            />
          </View>
        </View>
        <View>
          <Text style={styles.label}>Hours</Text>
          <View>
            <NumericInput
              onChange={v => setValue(v)}
              value={value}
              rounded
              borderColor='#272626'
              iconStyle={{ color: 'white' }}
            />
          </View>
        </View>

        
        <Text>{radioval}</Text>

        <Button title='CALCULATE'></Button>

        <Text>8 PROMILLEA</Text>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: '#fffafa',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    fontSize: 30,
    color: '#e78080',
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },

  label: {
    color: '#e78080',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 8,
  },

  weightLabel: {
    borderWidth: 1,
    padding: 10, 
    width: 250,
    backgroundColor: 'white',
    borderRadius: 10,
  },

  numberInput: {
    backgroundColor: '#272626',
  }
});
