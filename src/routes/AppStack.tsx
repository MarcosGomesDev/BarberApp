import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AttendanceScreen, HomeScreen } from '@screens';

export type AppStackParamList = {
  HomeScreen: undefined;
  AttendanceScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

// interface Props {
//   initialRouteName?: keyof AppStackParamList;
// }
export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AttendanceScreen" component={AttendanceScreen} />
    </Stack.Navigator>
  );
}
