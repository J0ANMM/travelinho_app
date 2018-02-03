import React, { Component } from 'react';
import { WebView, StyleSheet } from 'react-native';

class MainAppContainer extends Component {
  render() {
    return (
      <WebView
        style={styles.container}
        source={{ uri: 'https://www.google.com' }}
        onLoadStart={() => {
          console.log('onLoadStart')
        }}
        onLoad={() => {
          console.log('onLoad')
        }}
        onError={console.log}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default MainAppContainer;
