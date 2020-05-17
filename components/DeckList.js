import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import DeckListItem from "./DeckListItem";

class DeckList extends Component {
  state = {
    decks: [
      {
        title: "React",
        questions: [
          {
            question: "What is React?",
            answer: "A library for managing user interfaces",
          },
          {
            question: "Where do you make Ajax requests in React?",
            answer: "The componentDidMount lifecycle event",
          },
        ],
      },
      {
        title: "JavaScript",
        questions: [
          {
            question: "What is a closure?",
            answer:
              "The combination of a function and the lexical environment within which that function was declared.",
          },
        ],
      },
      {
        title: "hsld",
        questions: [
          {
            question: "What is a closure?",
            answer:
              "The combination of a function and the lexical environment within which that function was declared.",
          },
        ],
      },
      {
        title: "Reacsdfsdft",
        questions: [
          {
            question: "What is React?",
            answer: "A library for managing user interfaces",
          },
          {
            question: "Where do you make Ajax requests in React?",
            answer: "The componentDidMount lifecycle event",
          },
        ],
      },
      {
        title: "JavaSsdfsfcript",
        questions: [
          {
            question: "What is a closure?",
            answer:
              "The combination of a function and the lexical environment within which that function was declared.",
          },
        ],
      },
      {
        title: "hslsdfsdd",
        questions: [
          {
            question: "What is a closure?",
            answer:
              "The combination of a function and the lexical environment within which that function was declared.",
          },
        ],
      },
    ],
  };
  render() {
    const { decks } = this.state;
    return (
      <View style={[styles.container, { marginTop: 24 }]}>
        <FlatList
          data={decks}
          renderItem={(deck) => (
            <DeckListItem navigation={this.props.navigation} />
          )}
          keyExtractor={(deck) => deck.title}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});

export default DeckList;
