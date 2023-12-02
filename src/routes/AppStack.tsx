import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type AppStackParamList = {};

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
      <></>
    </Stack.Navigator>
  );
}
