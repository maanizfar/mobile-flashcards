import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import TextButton from "./TextButton";
import { lightBlue, darkBlue } from "../utils/colors";

class QuizResult extends Component {
  state = {};

  render() {
    const { navigation } = this.props;
    const { correctAnswers, totalQuestions, deckId } = this.props.route.params;

    const percentage = ((correctAnswers / totalQuestions) * 100).toFixed(0);

    return (
      <View style={[styles.container, { marginTop: 24 }]}>
        <Text style={styles.headerText}>Quiz Completed!</Text>
        <View style={styles.scoreCard}>
          <Text style={styles.percentage}>{percentage}%</Text>
          <Text style={styles.scoreText}>
            {correctAnswers} correct answers out of {totalQuestions}
          </Text>
        </View>
        <TextButton
          text="Restart Quiz"
          onPress={() => navigation.navigate("Quiz", { deckId })}
        />
        <TextButton
          text="Back to Deck"
          onPress={() => navigation.navigate("DeckDetail", { deckId })}
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
  headerText: {
    fontSize: 32,
    textAlign: "center",
  },
  scoreCard: {
    marginBottom: 40,
    marginTop: 40,
    backgroundColor: lightBlue,
    borderWidth: 1,
    alignSelf: "stretch",
    flexBasis: 200,
    justifyContent: "center",
  },

  scoreText: {
    fontSize: 20,
    textAlign: "center",

    color: darkBlue,
  },
  percentage: {
    fontSize: 48,
    textAlign: "center",
  },
});

export default QuizResult;
