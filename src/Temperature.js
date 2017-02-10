import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Picker,
  TextInput,
  Button
} from 'react-native';

class Temperature extends Component {
  
  constructor() {
    super();

    this.convert = this.convert.bind(this);

    // Initial state
    this.state = {
      input: '',
      conversion: 'km_mi',
      output: ''
    };
  }

  convert() {
    let output;

    if (this.state.conversion === 'centigrade_fahrenheit') {
      // centigrade to fahrenheit
      output = (((Number(this.state.input) * 9) / 5) + 32) + ' °F';
    } else {
      // fahrenheit to centigrade
      output = (((Number(this.state.input) - 32) * 5) / 9) + ' °C';
    }

    this.setState({
      output: output
    });
  }


  render () {
    return(
      <View>
        <Text style={styles.header}>Temperature</Text>

        <View style={styles.itemContainer}>
          <Text>Enter Value</Text>
          <TextInput
            keyboardType = 'numeric'
            style={{height: 40}}
            onChangeText={(input) => this.setState({input: input})}
            value={this.state.input}
          />
        </View>

        <View style={styles.itemContainer}>
          <Text>Select conversion</Text>
          <Picker selectedValue={this.state.conversion} onValueChange={(conversion) => this.setState({conversion: conversion})}>
            <Picker.Item label="Centigrade to Fahrenheit" value="centigrade_fahrenheit" />
            <Picker.Item label="Fahrenheit to Centigrade" value="fahrenheit_centigr" />
          </Picker>
        </View>

        <View style={styles.itemContainer}> 
          <Button
            onPress={this.convert}
            title="Convert"
            color="#841584"
          />
        </View>

        <Text style={styles.output}>{this.state.output}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  header: {
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    fontSize: 17
  },

  output: {
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 30,
    fontSize: 17
  },

  itemContainer: {
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15
  }
})

export default Temperature;