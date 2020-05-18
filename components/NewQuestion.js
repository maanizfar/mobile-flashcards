import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { addCardToDeck } from "../actions/index";
import TextButton from "./TextButton";

class NewQuestion extends Component {
  state = {
    question: "",
    answer: "",
  };

  handleSubmit = () => {
    const { question, answer } = this.state;
    if (question === "" || answer === "") {
      alert("Invalid input.");
      return;
    }

    const { dispatch, route, navigation } = this.props;
    const deckId = route.params.deckId;

    dispatch(addCardToDeck(deckId, { question, answer }));
    navigation.navigate("DeckDetail", { deckTitle: deckId });
  };

  render() {
    const { question, answer } = this.state;

    return (
      <View style={[styles.container, { marginTop: 24 }]}>
        <Text style={styles.headerText}>Add a card</Text>
        <TextInput
          style={styles.input}
          placeholder={" Question"}
          value={question}
          onChangeText={(text) => this.setState({ question: text })}
        />
        <TextInput
          style={styles.input}
          placeholder={" Answer"}
          value={answer}
          onChangeText={(text) => this.setState({ answer: text })}
        />
        <TextButton text="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    flexBasis: 300,
  },
  headerText: {
    fontSize: 32,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    alignSelf: "stretch",
    marginTop: 24,
    paddingLeft: 12,
    paddingRight: 12,
  },
});

export default connect()(NewQuestion);
