import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { blue, white, lightBlue } from "../utils/colors";

class DeckListItem extends Component {
  render() {
    const { title, cardsCount } = this.props;

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          this.props.navigation.navigate("DeckDetail", { deckTitle: title })
        }
      >
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.cards}>{cardsCount} Cards</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    height: 140,
    margin: 8,
    backgroundColor: blue,
  },
  name: {
    fontSize: 28,
    color: white,
  },
  cards: {
    fontSize: 18,
    color: lightBlue,
  },
});

export default DeckListItem;
