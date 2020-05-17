import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

class DeckDetail extends Component {
  state = {};

  render() {
    const { value } = this.state;
    const { navigation } = this.props;

    return (
      <View style={[styles.container, { marginTop: 24 }]}>
        <View style={styles.titleContainer}>
          <Text style={styles.name}>Deck 1</Text>
          <Text style={styles.cards}>3 Cards</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AddCard")}
        >
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Quiz")}
        >
          <Text>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    margin: 24,
  },
  titleContainer: {
    marginTop: 100,
    marginBottom: 100,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    borderWidth: 1,
    flexBasis: 140,
  },
  name: {
    fontSize: 28,
  },
  cards: {
    fontSize: 18,
    color: "gray",
  },
  text: {
    fontSize: 32,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    alignSelf: "stretch",
    marginTop: 24,
  },
  button: {
    marginTop: 24,
    alignItems: "center",
    alignSelf: "stretch",
    padding: 10,
    backgroundColor: "#DDDDDD",
  },
});

export default DeckDetail;
