import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import TextButton from "./TextButton";

class DeckDetail extends Component {
  state = {};

  render() {
    const { deck, navigation } = this.props;

    return (
      <View style={[styles.container, { marginTop: 24 }]}>
        <View style={styles.titleContainer}>
          <Text style={styles.deckName}>{deck.title}</Text>
          <Text style={styles.cardsText}>{deck.questions.length} Cards</Text>
        </View>
        <TextButton
          text="Add Card"
          onPress={() => navigation.navigate("AddCard", { deckId: deck.title })}
        />
        <TextButton
          text="Start Quiz"
          onPress={() => navigation.navigate("Quiz", { deckId: deck.title })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    margin: 24,
  },
  titleContainer: {
    marginTop: 100,
    marginBottom: 100,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  deckName: {
    fontSize: 32,
  },
  cardsText: {
    fontSize: 18,
    color: "gray",
  },
});

const mapStateToProps = (state, { route }) => {
  const { deckTitle } = route.params;
  const deck = state[deckTitle];

  return {
    deck,
  };
};

export default connect(mapStateToProps)(DeckDetail);
