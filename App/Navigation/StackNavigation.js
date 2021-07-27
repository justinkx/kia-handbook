import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../Screens/HomeScreen";
import NAV_CONSTANTS from "./NavigationConstants";
import DetailsScreen from "../Screens/DetailsScreen";

const Stack = createStackNavigator();

export default HomeStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={NAV_CONSTANTS.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen
        name={NAV_CONSTANTS.DETAILS_SCREEN}
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
};
