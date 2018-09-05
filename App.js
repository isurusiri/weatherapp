import React from 'react';
import { YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Home from './Home';
import SearchResults from './SearchResults';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is depricated',
  'Warning: componentWillReceiveProps is depricated'
]);

export default createStackNavigator({
  home: {
    screen: Home,
    navigationOptions: () => ({
      title: 'WeatherApp'
    })
  },
  results: {
    screen: SearchResults,
    navigationOptions: () => ({
      title: 'Results'
    })
  }
},
{
  initialRouteName: 'home',
});
