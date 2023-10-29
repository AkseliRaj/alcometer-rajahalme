import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { ScrollView, TextInput, StyleSheet, Text, View, Button, Pressable } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { RadioButton } from 'react-native-paper';
import RadioGroup from 'react-native-radio-buttons-group';
import styles from './styles/Styles.js';
import { Switch } from 'react-native-switch';

export default function App() {

  // Radio buttons
  const [gender, setGender] = useState('Male')

  // Bottles and hours buttons
  const [value, setValue] = useState(0);

  const [weightInput, setWeightInput] = useState('');
  const [bottlesInput, setBottlesInput] = useState('');
  const [hoursInput, setHoursInput] = useState('');

    // Update weight, bottles, and hours input values
    const handleWeightChange = (weight) => {
      setWeightInput(weight);
    };
  
    const handleBottlesChange = (bottles) => {
      setValue(bottles);
    };
  
    const handleHoursChange = (hours) => {
      setHoursInput(hours);
    };

  const calculate = () => {
    // Convert input values to numbers
    const weight = parseFloat(weightInput);
    const bottles = value; // Using the state variable
    const hours = parseFloat(hoursInput);
  
    // Calculate the blood alcohol level
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - burning * hours;
  
    let result = 0;
  
    if (gender === 'Male') {
      result = gramsLeft / (weight * 0.7);
    } else if (gender === 'Female') {
      result = gramsLeft / (weight * 0.6);
    }
  
    // Update the state to display the result
    console.log(`Blood Alcohol Level: ${result.toFixed(2)} PROMILLEA`);
  };

  return (
    <ScrollView >
      <View style={styles.switchContainer}>
          <Switch 
          style={styles.switch}
          />
        </View>
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
            <Text style={[styles.text, styles.calculationAnswer]}>8 PROMILLEA</Text>
            <Pressable
            style={styles.button}
            onPress={calculate}
            >
            <Text style={[styles.buttonText]}>Calculate</Text>
            </Pressable>
            <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

