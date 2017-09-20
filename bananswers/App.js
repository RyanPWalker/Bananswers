import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import Home from "./src/Home.js";
import cacheAssetsAsync from './cacheAssetsAsync';

export default class App extends Component {
  state = {
    appIsReady: false
  }

  componentWillMount() {
    this.loadAssetsAsync();
  }

  async loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [
          require('./assets/images/Banana-Unpeeled.png'),
          require('./assets/images/Banana-Peeled.png'),
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
      console.log('Not reading');
      return (<AppLoading />);
    }

    return (
      <View style={styles.container}>
        <Home />
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
});
