import React, { useCallback } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../Screens/HomeScreen";
import NAV_CONSTANTS from "./NavigationConstants";
import DetailsScreen from "../Screens/DetailsScreen";
import FeatureScreen from "../Screens/FeatureScreen";

const Stack = createStackNavigator();

export default HomeStack = () => {
  const titleFromParamsOptions = useCallback(
    ({ route }) => ({
      title: route?.params?.title || "Features",
      headerBackTitle: "Back",
    }),
    []
  );

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={NAV_CONSTANTS.HOME_SCREEN}
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={NAV_CONSTANTS.DETAILS_SCREEN}
        component={DetailsScreen}
      />
      <Stack.Screen
        name={NAV_CONSTANTS.FEATURES_SCREEN}
        component={FeatureScreen}
        options={titleFromParamsOptions}
      />
    </Stack.Navigator>
  );
};
