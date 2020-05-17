import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class QuizResult extends Component {
  state = {};

  render() {
    return (
      <View style={[styles.container, { marginTop: 24 }]}>
        <Text style={styles.questionText}>Quiz Completed!</Text>
        <Text style={styles.scoreText}>Score 85%</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("pressed!")}
        >
          <Text>Restart Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("pressed!")}
        >
          <Text>Back to Deck</Text>
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
  scoreText: {
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

export default QuizResult;
