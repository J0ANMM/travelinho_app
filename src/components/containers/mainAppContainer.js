import React, { Component } from 'react';
import { WebView, StyleSheet, Linking, View, StatusBar, Platform } from 'react-native';

const domain = 'travelinho.com'

class MainAppContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#0A3511"
        />
        <WebView
          ref="webview"
          style={styles.webview}
          source={{ uri: 'http://www.travelinho.com' }}
          onNavigationStateChange={(event) => {
            console.log(event)
            if (!event.url.includes(domain)) {
              this.refs.webview.stopLoading();
              Linking.openURL(event.url);
            }
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
    marginTop: (Platform.OS === 'ios') ? 20 : 0
  }
});

export default MainAppContainer;
