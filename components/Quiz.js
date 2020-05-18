import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import {
  setLocalNotification,
  clearLocalNotification,
} from "../utils/notifications";
import TextButton from "./TextButton";
import { lightBlue, darkBlue, white, red, green } from "../utils/colors";

class Quiz extends Component {
  state = {
    show: "question",
    currentQuestion: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
  };

  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
  }

  handleAnswer = (ans) => {
    this.setState(
      {
        [ans]: this.state[ans] + 1,
      },
      () => {
        const totalQuestions = this.props.questions.length;
        const { currentQuestion, correctAnswers } = this.state;

        if (currentQuestion === totalQuestions - 1) {
          this.setState({
            show: "question",
            currentQuestion: 0,
            correctAnswers: 0,
            incorrectAnswers: 0,
          });

          this.props.navigation.navigate("QuizResult", {
            correctAnswers,
            totalQuestions,
            deckId: this.props.deckId,
          });
        } else {
          this.setState({ currentQuestion: currentQuestion + 1 });
        }
      }
    );
  };

  render() {
    const { show, currentQuestion } = this.state;
    const { questions } = this.props;
    const totalQuestions = questions.length;

    if (totalQuestions === 0) {
      return (
        <View style={[styles.container, { marginTop: 24 }]}>
          <Text>This deck has no cards</Text>
        </View>
      );
    }

    return (
      <View style={[styles.container, { marginTop: 24 }]}>
        <Text style={{ marginBottom: 8 }}>
          {currentQuestion + 1}/{totalQuestions}
        </Text>
        <View style={styles.card}>
          <View style={styles.cardTitle}>
            <Text style={{ color: white, fontSize: 16 }}>
              {show === "question" ? "Front" : "Back"}
            </Text>
          </View>
          <Text style={styles.questionText}>
            {show === "question"
              ? questions[currentQuestion].question
              : questions[currentQuestion].answer}
          </Text>
        </View>

        <TextButton
          text={show === "question" ? "Show Answer" : "Show Question"}
          onPress={() =>
            this.setState({ show: show === "question" ? "answer" : "question" })
          }
        />
        <TextButton
          text="Correct"
          onPress={() => this.handleAnswer("correctAnswers")}
          color={green}
        />
        <TextButton
          text="Incorrect"
          onPress={() => this.handleAnswer("incorrectAnswers")}
          color={red}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 24,
  },
  card: {
    borderWidth: 1,
    alignSelf: "stretch",
    backgroundColor: lightBlue,
  },
  cardTitle: {
    alignItems: "center",
    backgroundColor: darkBlue,
    padding: 6,
  },
  questionText: {
    fontSize: 24,
    textAlign: "center",
    textAlignVertical: "center",
    height: 300,
  },
});

const mapStateToProps = (state, { route }) => {
  const { deckId } = route.params;
  return {
    deckId,
    questions: state[deckId].questions,
  };
};

export default connect(mapStateToProps)(Quiz);
