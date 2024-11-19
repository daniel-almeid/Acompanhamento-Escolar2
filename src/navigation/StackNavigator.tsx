import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import LoginScreen from '../pages/Login';
import InstitutionScreen from '../pages/Institution';
import StudentScreen from '../pages/Student';
import MainScreen from '../pages/Main';
import PendingTasks from '../pages/Pending';
import Events from '../pages/Events';
import Bulletin from '../pages/Bulletin';
import Performance from '../screens/Performance';
import Library from '../screens/Library';
import Slides from '../screens/Slides';
import Videos from '../screens/Videos';

type RootStackParamList = {
  Login: undefined;
  Institution: undefined;
  Student: undefined;
  Main: undefined;
  PendingTasks: undefined;
  Events: undefined;
  Bulletin: undefined;
  Performance: undefined;
  Library: undefined;
  Slides: undefined;
  Videos: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function StackNavigator(): JSX.Element {
  const screenOptions: StackNavigationOptions = { headerShown: false };

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={screenOptions} />
      <Stack.Screen name="Institution" component={InstitutionScreen} options={screenOptions} />
      <Stack.Screen name="Student" component={StudentScreen} options={screenOptions} />
      <Stack.Screen name="Main" component={MainScreen} options={screenOptions} />
      <Stack.Screen name="PendingTasks" component={PendingTasks} options={screenOptions} />
      <Stack.Screen name="Events" component={Events} options={screenOptions} />
      <Stack.Screen name="Bulletin" component={Bulletin} options={screenOptions} />
      <Stack.Screen name="Performance" component={Performance} options={screenOptions} />
      <Stack.Screen name="Library" component={Library} options={screenOptions} />
      <Stack.Screen name="Slides" component={Slides} options={screenOptions} />
      <Stack.Screen name="Videos" component={Videos} options={screenOptions} />
    </Stack.Navigator>
  );
}
