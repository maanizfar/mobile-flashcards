import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { blue, white, lightBlue } from "../utils/colors";

class TextButton extends Component {
  render() {
    const { text, onPress, color } = this.props;
    const extraStyles = color ? { backgroundColor: color } : {};
    return (
      <TouchableOpacity style={[styles.button, extraStyles]} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 24,
    alignItems: "center",
    alignSelf: "stretch",
    padding: 10,
    backgroundColor: blue,
  },
  text: {
    fontSize: 16,
    color: white,
  },
});

export default TextButton;
