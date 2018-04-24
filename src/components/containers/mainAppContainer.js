import React, { Component } from 'react';
import { WebView, StyleSheet, Linking, View, StatusBar, Platform, BackHandler } from 'react-native';

const domain = 'travelinho.com'

class MainAppContainer extends Component {
  constructor() {
    super();
    this.state = {
      canGoBack: false
    }
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandler);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandler);
  }

  backHandler = () => {
    if(this.state.canGoBack){
      this.refs.webview.goBack();
      return true;
    }
    return false;
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#0A3511"
        />
        <WebView
          ref="webview"
          style={styles.webview}
          scalesPageToFit={Platform.OS === 'ios'}
          source={{ uri: 'https://www.travelinho.com' }}
          onNavigationStateChange={(event) => {
            this.setState({ canGoBack: event.canGoBack });
            if (!event.url.includes(domain) || event.url.includes('redirect')) {
              this.refs.webview.stopLoading();
              Linking.canOpenURL(event.url).then(supported => {
                if (supported) {
                  Linking.openURL(event.url)
                    .catch(() => null);
                } else {
                  console.log("Don't know how to open URI: " + event.url);
                }
              });
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
