import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class Quiz extends Component {
  state = {
    show: "answer",
    quiz: {
      question: "What is React?",
      answer: "A library for managing user interfaces",
    },
  };

  render() {
    const { show, quiz } = this.state;

    return (
      <View style={[styles.container, { marginTop: 24 }]}>
        <Text>2/2</Text>
        <Text style={styles.questionText}>
          {show === "question" ? quiz.question : quiz.answer}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            this.setState({ show: show === "question" ? "answer" : "question" })
          }
        >
          <Text>{show === "question" ? "Show Answer" : "Show Question"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("pressed!")}
        >
          <Text>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("pressed!")}
        >
          <Text>Incorrect</Text>
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
  questionText: {
    fontSize: 32,
    textAlign: "center",
    flexBasis: 200,
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    marginTop: 24,
    alignItems: "center",
    alignSelf: "stretch",
    padding: 10,
    backgroundColor: "#DDDDDD",
  },
});

export default Quiz;
