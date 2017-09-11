import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

const Images = [
    {
        uri: require('../assets/images/Banana-Unpeeled.png'),
        label: "Ask me a yes or no question"
    },

    {
        uri: require('../assets/images/Banana-Peeled.png'),
        label: "Yes"
    }
];

export default class Home extends Component {
	state = {
        index: 0,
        imageWidth: null
    }

  nextImage(event) {
        const { index, imageWidth } = this.state,
              X = event.nativeEvent.locationX,
              delta = (X < imageWidth/2) ? -1 : +1;

        let newIndex = (index + delta) % Images.length;

        if (newIndex < 0) {
            newIndex = Images.length - Math.abs(newIndex);
        }

        this.setState({
            index: newIndex
        });
  }

  onImageLayout(event) {
    this.setState({
      imageWidth: event.nativeEvent.layout.width
    });
  }

  render() {
    const image = Images[this.state.index];

    return (
      <View style={styles.container}>
        <View style={styles.empty} />
          <TouchableHighlight onPress={this.nextImage.bind(this)}
          style={styles.image}>
            <Image source={image.uri}
            style={styles.image}
            onLayout={this.onImageLayout.bind(this)}>
              <Text style={styles.imageLabel}>{image.label}</Text>
            </Image>
          </TouchableHighlight>
        <View style={styles.empty} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 2,
        width: 320,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    imageLabel: {
        textAlign: 'center',
        backgroundColor: 'white',
        color: 'black',
        width: 320
    },
    empty: {
        flex: 1
    }
});

AppRegistry.registerComponent('Bananswers', () => bananswers);
