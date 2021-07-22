import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import HomeStack from "./StackNavigation";
import GlobalStyles from "../Styles/GlobalStyle";

export default AppNavigation = () => (
  <NavigationContainer>
    <SafeAreaView style={GlobalStyles.flex}>
      <HomeStack />
    </SafeAreaView>
  </NavigationContainer>
);
