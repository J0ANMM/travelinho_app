import React from 'react';
import { AppRegistry } from 'react-native';

import MainAppContainer from './components/containers/mainAppContainer';

const App = () => {
  return (
    <MainAppContainer />
  );
};

AppRegistry.registerComponent('travelinho_app', () => App);
