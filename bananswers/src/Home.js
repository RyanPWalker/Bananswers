import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback
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

const Bananswers = [
    "",
    "Yes",
    "No",
    "It is certain",
    "As I see it, yes",
    "Most likely",
    "Outlook is good",
    "Reply hazy try again",
    "Ask again later",
    "It's better I don't tell you",
    "Think of a better question",
    "Concentrate and ask again",
    "Don't count on it",
    "My sources say no",
    "The answer is no",
    "Nay",
    "Of course",
    "Very doubtful",
    "You need to think about this more",
    "Nope",
    "Go for it",
    "If you're still not sure, then just don't",
    "Speak louder",
    "I love you"
];

export default class Home extends Component {
	state = {
    index: 0,
    bananswerIndex: 0,
    imageWidth: null
  }

  nextImage(event) {
    const { index, bananswerIndex, imageWidth } = this.state;
    let newIndex = 0;

    if (index == 0) { newIndex = 1; }
    else { newIndex = 0; }
    console.log('index: ' + index + ' newIndex: ' + newIndex);

    this.setState({
        index: newIndex,
        bananswerIndex: 0
    });
    console.log('function called');

    this.nextBananswer(newIndex, bananswerIndex);
  }

  nextBananswer(index, bananswerIndex) {
    const min = 1;
    const max = 24;
    let newIndex = 0;
    console.log('nextBananswer');
    console.log('index: ' + index);

    if (index == 0) { }
    else { newIndex = Math.floor(Math.random() * (max - min)) + min; }

    this.setState({
      bananswerIndex: newIndex
    });

    console.log('bananswerIndex: ' + bananswerIndex);

  }

  onImageLayout(event) {
    this.setState({
      imageWidth: event.nativeEvent.layout.width
    });
  }

  render() {
    const image = Images[this.state.index];
    const bananswer = Bananswers[this.state.bananswerIndex];
    console.log('rendering');
    console.log('index: ' + this.state.index + ' bananswerIndex: ' + this.state.bananswerIndex);

    return (
      <View style={styles.container}>
        <View style={styles.empty} />
          <TouchableWithoutFeedback onPress={this.nextImage.bind(this)}
          style={styles.image}>
            <Image source={image.uri}
            style={styles.image}
            onLayout={this.onImageLayout.bind(this)}>
              <Text style={styles.imageLabel}>{bananswer}</Text>
            </Image>
          </TouchableWithoutFeedback>
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