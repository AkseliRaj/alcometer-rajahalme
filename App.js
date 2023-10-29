import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, TextInput, StyleSheet, Text, View, Button, Pressable } from 'react-native';
import NumericInput from 'react-native-numeric-input';




export default function App() {

  const [value, setValue] = useState(0);
  const [radioval, setRadioval] = useState('male');

  return (
    <ScrollView >
        <View style={styles.background}>
          <Text style={[styles.text, styles.header,]}>Alcometer</Text>
          <View style={styles.alcometerContainer}>
            <Text style={[styles.text, styles.label]}>Weight</Text>
            <TextInput style={styles.weightLabel}>
            </TextInput>
          </View>
        <View>
        <View style={styles.alcometerContainer}>
              <Text style={[styles.text, styles.label]}>Bottles</Text>
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
            <View style={styles.alcometerContainer}>
              <Text style={[styles.text, styles.label]}>Hours</Text>
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

          
          
          
            <Pressable
            style={styles.button}>
              <Text style={styles.buttonText}>Calculate</Text>
            </Pressable>

            <Text style={[styles.text, styles.calculationAnswer]}>8 PROMILLEA</Text>
            <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // Background & container styling
  background: {
    backgroundColor: '#cfbeee',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
    flex: 1,
  },

  alcometerContainer:{
    backgroundColor: '#cfbeee',
    borderRadius: 10,
    padding: 35,
  },

  // Text styling
  text: {
    color: '#ffffff',
    fontFamily: 'Arial',
    fontSize: 20,
  },

  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  label: {
    fontWeight: 'bold',
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

  calculationAnswer: {
    fontWeight: 'bold',
    fontSize: 25,
  },
});

