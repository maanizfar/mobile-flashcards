import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

class NewQuestion extends Component {
  render() {
    return (
      <View style={[styles.container, { marginTop: 24 }]}>
        <Text style={styles.text}>Add a question</Text>
        <TextInput
          style={styles.input}
          placeholder={" Question"}
          onChangeText={(text) => console.log("")}
        />
        <TextInput
          style={styles.input}
          placeholder={" Answer"}
          onChangeText={(text) => console.log("")}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("pressed!")}
        >
          <Text>Submit</Text>
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
    flexBasis: 300,
  },
  text: {
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
  button: {
    marginTop: 24,
    alignItems: "center",
    alignSelf: "stretch",
    padding: 10,
    backgroundColor: "#DDDDDD",
  },
});

export default NewQuestion;
