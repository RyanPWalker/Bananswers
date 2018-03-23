import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, NetInfo, Platform } from 'react-native';
import { AppLoading, FacebookAds } from 'expo';
import Home from "./src/Home.js";
import cacheAssetsAsync from './cacheAssetsAsync';
import AdBanner from './src/AdBanner';
const ads = require('./assets/config.json');

let adType = 'standard';

if (Dimensions.get('window').width > 600) {
  adType = 'large';
}

FacebookAds.AdSettings.addTestDevice(FacebookAds.AdSettings.currentDeviceHash);

export default class App extends Component {
  state = {
    appIsReady: false,
    online: false,
  }

  componentWillMount() {
    this.loadAssetsAsync();
  }

  componentDidMount() {
    NetInfo.addEventListener('connectionChange', (connectionInfo) => {
      this.setState({ online: connectionInfo.type !== 'none' });
    });
  }

  async loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [
          require('./assets/images/Banana-Unpeeled.png'),
          require('./assets/images/Banana-Peeled.png'),
          require('./assets/images/logo.png'),
        ]
      });
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: app.js), perhaps due to a ' +
        'network timeout, so we skipped caching. Reload the app to try again.',
      );
    } finally {
      this.setState({ appIsReady: true });
    }
  }

  render() {
    if (!this.state.appIsReady) {
      return (<AppLoading />);
    }

    return (
      <View style={styles.container}>
        <Home />
        <AdBanner
          id={Platform.OS === 'ios' ? ads.ios : ads.android}
          style={styles.ad}
          online={this.state.online}
          type={adType}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ad: {
    position: 'absolute',
    bottom: 20,
    height: 40,
  },
});
