import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { ScrollView, TextInput, StyleSheet, Text, View, Button, Pressable } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { RadioButton } from 'react-native-paper';
import RadioGroup from 'react-native-radio-buttons-group';

export default function App() {

  // Radio buttons
  const [gender, setGender] = useState('Male')

  // Bottles and hours buttons
  const [value, setValue] = useState(0);

  const [weightInput, setWeightInput] = useState('');
  const [bottlesInput, setBottlesInput] = useState('');
  const [hoursInput, setHoursInput] = useState('');

  return (
    <ScrollView >
        <View style={styles.background}>
          <Text style={[styles.text, styles.header,]}>Alcometer</Text>
          <View style={styles.alcometerContainer}>
            <Text style={[styles.text, styles.label]}>Weight</Text>
            <TextInput 
              style={styles.weightLabel}
              placeholder="Enter your weight"
              keyboardType="numeric"
              onChangeText={(weight) => setWeightInput(weight)}
            />
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

          <View style={styles.alcometerContainer}>
          <RadioButton.Group value={gender} onValueChange={g => setGender(g)}>
            <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
              <RadioButton value='Male'/>
              <Text style={[styles.text, styles.radiobuttonText]}>Male</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
              <RadioButton 
              value='Female'/>
              <Text style={[styles.text, styles.radiobuttonText]}>Female</Text>
            </View>
          </RadioButton.Group>
          </View>
          
            <Pressable
            style={styles.button}>
              <Text style={[styles.buttonText]}>Calculate</Text>
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

  radiobuttonText: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  calculationAnswer: {
    fontWeight: 'bold',
    fontSize: 25,
    padding: 30,
  },
});

