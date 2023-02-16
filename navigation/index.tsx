import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import AvailableShifts from "../screens/AvailableShifts/AvailableShifts";

import MyShifts from "../screens/MyShifts/MyShifts";
import { RootTabParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="MyShifts">
      <BottomTab.Screen
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarLabelPosition: "beside-icon",
          tabBarLabelStyle: {
            fontWeight: "400",
            fontSize: 15,
          },
          headerShown: false,
        }}
        name="MyShifts"
        component={MyShifts}
      />
      <BottomTab.Screen
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarLabelPosition: "beside-icon",
          tabBarLabelStyle: {
            fontWeight: "400",
            fontSize: 15,
          },
          headerShown: false,
        }}
        name="AvailableShifts"
        component={AvailableShifts}
      />
    </BottomTab.Navigator>
  );
}
