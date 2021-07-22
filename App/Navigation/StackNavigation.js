import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../Screens/HomeScreen";
import NAV_CONSTANTS from "./NavigationConstants";

const Stack = createStackNavigator();

export default HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAV_CONSTANTS.HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};
