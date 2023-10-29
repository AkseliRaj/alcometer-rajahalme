import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { ScrollView, TextInput, StyleSheet, Text, View, Button, Pressable } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { RadioButton } from 'react-native-paper';
import RadioGroup from 'react-native-radio-buttons-group';
import styles from './styles/Styles.js';
import { Switch } from 'react-native-switch';

export default function App() {

  // Switch darkmode
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Result
  const [result, setResult] = useState(0);


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
      setHoursInput(parseFloat(hours)); // Convert the input to a number
    };
    
    

  const calculate = () => {
    // Convert input values to numbers
    const weight = parseFloat(weightInput);
    const bottles = parseFloat(value);
    const hours = parseFloat(hoursInput);
  
    // Calculate the blood alcohol level
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - burning * hours;
  
    let calculatedResult = 0;
  
    if (gender === 'Male') {
      calculatedResult = gramsLeft / (weight * 0.7);
    } else if (gender === 'Female') {
      calculatedResult = gramsLeft / (weight * 0.6);
    }
  
    // Apply the conditional check to ensure the result is not negative
    calculatedResult = Math.max(calculatedResult, 0);
  
    // Set the result in the state
    setResult(calculatedResult.toFixed(2));

  };

  return (
    <ScrollView>
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
                  onChange={handleHoursChange} // Use the correct handler
                  value={hoursInput} // Use the state variable
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
          <Text style={[styles.text, styles.calculationAnswer]}>
            {result}
          </Text>
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

