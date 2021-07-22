import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import AppNavigation from "./Navigation/AppNavigation";

export default App = () => (
  <SafeAreaView>
    <StatusBar />
    <AppNavigation />
  </SafeAreaView>
);
