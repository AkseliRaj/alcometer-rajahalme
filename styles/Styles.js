import { StyleSheet } from "react-native";


export default StyleSheet.create({
  // Background & container styling
  background: {
    backgroundColor: '#cfbeee',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
    flex: 1,
    padding: 80
  },
  alcometerContainer:{
    backgroundColor: '#cfbeee',
    borderRadius: 10,
    padding: 15,
  },

  // Switch styling
  switchContainer: {
    paddingTop: 70,
    paddingLeft: 40,
    backgroundColor: "#cfbeee",
  },
  switch: {
    marginStart: 30,
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
    textAlign: 'center',
    marginBottom: 20,
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
    marginTop: 20,
    padding: 15,
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

  // Radio button styling
  radiobuttonText: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  //Calculation answer styling
  calculationAnswer: {
    fontWeight: 'bold',
    fontSize: 25,
    padding: 10,
    marginTop: 5
  },
});
  