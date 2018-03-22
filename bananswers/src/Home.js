import React, { PureComponent } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';
import Bananswer from './Bananswer';

const win = Dimensions.get('window');
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

export default class Home extends PureComponent {
	state = {
    index: 0,
    bananswerIndex: 0,
    imageWidth: null,
    done: false,
  }

  nextImage = (event) => {
    const { index } = this.state;
    let newIndex = 0;

    if (index === 0) { newIndex = 1; }

    this.nextBananswer(newIndex);
  }

  nextBananswer(index) {
    const min = 1;
    const max = 23;
    let newIndex = 0;

    if (index !== 0) {
      newIndex = Math.floor(Math.random() * (max - min)) + min;
    }

    this.setState({
      bananswerIndex: newIndex,
      index,
      done: false,
    });

  }

  onImageLayout = (event) => {
    this.setState({
      imageWidth: event.nativeEvent.layout.width
    });
  }

  handleLoad = () => {
    this.setState({ done: true });
  }

  render() {
    const { index, bananswerIndex, done } = this.state;
    const image = Images[index];

    return (
      <View style={styles.container}>
      	<Image source={require('../assets/images/logo.png')}
    			style={styles.logo}
    		/>
        <View style={styles.empty} />
          <TouchableWithoutFeedback
            onPress={this.nextImage}
            style={styles.image}
          >
            <Image
              source={image.uri}
              style={styles.image}
              onLayout={this.onImageLayout}
              onLoad={this.handleLoad}
            />
          </TouchableWithoutFeedback>
          <Bananswer bananswerIndex={bananswerIndex} done={done} />
        <View style={styles.empty} />
        {/*<View style={styles.tabBarInfoContainer}>
                  <Text style={styles.tabBarInfoText}>
                    Put adds here?
                  </Text>
                </View>*/}
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
    logo: {
    	flex: 1,
      alignSelf: 'stretch',
      width: win.width,
      height: win.height,
      marginTop: '20%',
  	},
    image: {
        flex: 2,
        width: 320,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    empty: {
        flex: 1
    }
});

AppRegistry.registerComponent('Bananswers', () => bananswers);