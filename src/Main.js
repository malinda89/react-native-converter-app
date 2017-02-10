import React, { Component } from 'react';
import { Navigator } from 'react-native';

import Home from './Home';
import Speed from './Speed';
import Temperature from './Temperature';

class Main extends Component {
  constructor() {
    super();
  }

  renderScene(route, navigator) {
    switch(route) {
      case 'speed'        : return <Speed navigator={navigator} />
      break;

      case 'temperature'  : return <Temperature navigator={navigator} />
      break;

      default             : return <Home navigator={navigator} />
    }
  }

  render () {
    return(
      <Navigator
        ref="navigator"
        configureScene={(route) => Navigator.SceneConfigs.FloatFromBottom}
        initialRoute={{}}
        renderScene={this.renderScene}
      />
    )
  }
}

export default Main;