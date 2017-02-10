import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class Home extends Component {
  constructor() {
    super();
  }

  getConvertionScreen(type) {
    this.props.navigator.push(type)
  }

  render () {
    return(
      <View>
        <Text style={styles.header}>Converter App</Text>

        <View style={styles.itemContainer}>
          <Button 
            onPress={() => {this.getConvertionScreen('speed')}}
            title="Distance"
            color="#841584"
          />
        </View>
        <View style={styles.itemContainer}>
          <Button
            onPress={() => {this.getConvertionScreen('temperature')}}
            title="Temperature"
            color="#841584"
          />
        </View>
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
  itemContainer: {
    margin: 10
  }
})

export default Home;