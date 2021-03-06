import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeStack from "./StackNavigation";
import GlobalStyles from "../Styles/GlobalStyle";

export default AppNavigation = () => (
  <NavigationContainer>
    <SafeAreaProvider>
      <HomeStack />
    </SafeAreaProvider>
  </NavigationContainer>
);
