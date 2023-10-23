import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, TextInput, StyleSheet, Text, View, Button, Pressable } from 'react-native';
import NumericInput from 'react-native-numeric-input';


export default function App() {

  const [value, setValue] = useState(0);
  const [radioval, setRadioval] = useState('male');

  return (
    <ScrollView>
        <View style={styles.background}>
          <Text style={styles.header}>Alcometer</Text>
          <View style={styles.alcometerContainer}>
            <Text style={styles.label}>Weight</Text>
            <TextInput style={styles.weightLabel}>
            </TextInput>
          </View>
        <View>
        <View style={styles.alcometerContainer}>
              <Text style={styles.label}>Bottles</Text>
              <View>
                <NumericInput
                  onChange={v => setValue(v)}
                  value={value}
                  rounded
                  borderColor='#ffffff'
                  iconStyle={{ color: '#272626' }}
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
                  borderColor='#ffffff'
                  iconStyle={{ color: '#272626' }}
                />
              </View>
            </View>
          </View>

            
            <Text>{radioval}</Text>

            <Pressable
            style={styles.button}>
              <Text style={styles.buttonText}>Calculate</Text>
            </Pressable>

            <Text>8 PROMILLEA</Text>
            <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: '#fffafa',
    alignItems: 'center',
    justifyContent: 'center',
  },

  alcometerContainer:{
    backgroundColor: '#cfbeee',
    borderRadius: 10,
    padding: 35,
  },

  header: {
    fontSize: 30,
    color: '#ffffff',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  label: {
    color: '#ffffff',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 8,
  },

  weightLabel: {
    
    padding: 10, 
    width: 250,
    backgroundColor: 'white',
    borderRadius: 10,
  },


  //Button styling
  button: {
    padding: 13,
    width: 200,
    borderRadius: 15,
    backgroundColor: "#b59ce0",
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color:"#ffffff",
    fontSize: 20,
  },
});

