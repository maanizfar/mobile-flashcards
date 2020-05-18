import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { getDecks, addDeck, addCard, getDeck, resetData } from "../utils/api";

class API_TEST extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => getDeck("Music").then((res) => console.log(res))}
        >
          <Text>Get Deck with title Music</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => getDecks().then((res) => console.log(res))}
        >
          <Text>Get Decks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => addDeck("Music")}>
          <Text>Add Deck with title Music</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            addCard("Music", {
              question: "Who sang moth",
              answer: "Faraz Haider",
            })
          }
        >
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => resetData()}>
          <Text>Reset data</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
  },
  btn: {
    backgroundColor: "red",
    padding: 20,
    margin: 10,
  },
});

export default API_TEST;
