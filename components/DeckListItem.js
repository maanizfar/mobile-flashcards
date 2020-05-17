import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

class DeckListItem extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.props.navigation.navigate("DeckDetail")}
      >
        <Text style={styles.name}>Deck 1</Text>
        <Text style={styles.cards}>3 Cards</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    height: 140,
    margin: 8,
  },
  name: {
    fontSize: 28,
  },
  cards: {
    fontSize: 18,
    color: "gray",
  },
});

export default DeckListItem;
