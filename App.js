import "react-native-gesture-handler";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DeckDetail from "./components/DeckDetail";
import NewQuestion from "./components/NewQuestion";
import Quiz from "./components/Quiz";
import QuizResult from "./components/QuizResult";
import HomeScreen from "./components/HomeScreen";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/index";
import middlewares from "./middleware/index";
import { setLocalNotification } from "./utils/notifications";
import { blue, white } from "./utils/colors";

const store = createStore(reducers, middlewares);

const Stack = createStackNavigator();

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      // <API_TEST />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: blue,
              },
              headerTintColor: white,
            }}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DeckDetail"
              component={DeckDetail}
              options={({ route }) => ({ title: route.params.deckTitle })}
            />
            <Stack.Screen
              name="AddCard"
              component={NewQuestion}
              options={{ title: "Add Card" }}
            />
            <Stack.Screen name="Quiz" component={Quiz} />
            <Stack.Screen
              name="QuizResult"
              component={QuizResult}
              options={{ title: "Result" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
