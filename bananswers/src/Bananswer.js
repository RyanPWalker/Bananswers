import React, { PureComponent } from "react";
import { View, StyleSheet, Text } from "react-native";

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
  "I love you"
];

export default class Bananswer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { bananswerIndex, done } = this.props;
    const bananswer = Bananswers[bananswerIndex];
    return (
      <View style={styles.container}>
        <Text style={styles.imageLabel}>{done && bananswer}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageLabel: {
    textAlign: "center",
    backgroundColor: "white",
    color: "black"
  }
});
