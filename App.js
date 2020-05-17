import "react-native-gesture-handler";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DeckListItem from "./components/DeckListItem";
import DeckList from "./components/DeckList";
import NewDeck from "./components/NewDeck";
import DeckDetail from "./components/DeckDetail";
import NewQuestion from "./components/NewQuestion";
import Quiz from "./components/Quiz";
import QuizResult from "./components/QuizResult";
import HomeScreen from "./components/HomeScreen";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="DeckDetail" component={DeckDetail} />
          <Stack.Screen name="AddCard" component={NewQuestion} />
          <Stack.Screen name="Quiz" component={Quiz} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
