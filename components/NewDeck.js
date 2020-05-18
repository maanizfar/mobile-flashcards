import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { addDeck } from "../actions/index";
import TextButton from "./TextButton";

class NewDeck extends Component {
  state = {
    title: "",
  };

  handleSubmit = () => {
    const { title } = this.state;

    if (this.state.title === "") {
      alert("Invalid name");
      return;
    }

    const { dispatch, navigation } = this.props;

    dispatch(addDeck(this.state.title));
    navigation.navigate("DeckDetail", { deckTitle: title });

    this.setState({ title: "" });
  };

  render() {
    const { title } = this.state;
    return (
      <View style={[styles.container, { marginTop: 24 }]}>
        <Text style={styles.headerText}>
          What is the title of your new deck?
        </Text>
        <TextInput
          style={styles.input}
          placeholder=" Name of deck"
          value={title}
          onChangeText={(text) => this.setState({ title: text })}
        />
        <TextButton text="Create Deck" onPress={this.handleSubmit} />
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

export default connect()(NewDeck);
