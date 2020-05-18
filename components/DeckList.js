import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";

import DeckListItem from "./DeckListItem";
import { handleInitialData } from "../actions/index";

class DeckList extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    const { decks } = this.props;
    return (
      <View style={[styles.container, { marginTop: 24 }]}>
        <FlatList
          data={Object.values(decks)}
          renderItem={(deck) => (
            <DeckListItem
              title={deck.item.title}
              cardsCount={deck.item.questions.length}
              navigation={this.props.navigation}
            />
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

const mapStateToProps = (state) => {
  return { decks: state };
};

export default connect(mapStateToProps, { handleInitialData })(DeckList);
