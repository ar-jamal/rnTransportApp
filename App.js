import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Signup from './src/Config/Screens/signup';
import Home from './src/Config/Screens/home';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CusHeader from './src/Config/Components/header';
import {View, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Signin from './src/Config/Screens/signin';

const Stack = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();

const tabBarOptions = {
  indicatorStyle: {backgroundColor: 'blue'},
  backgroundColor: 'green',
};

function TopTabNav() {
  return (
    <TopTab.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={{
        tabBarStyle: {backgroundColor: 'powderblue', height: "10%", minHeight: "2%"},
        tabBarIndicatorStyle: {
          backgroundColor: 'blue',
        },
      }}>
      <TopTab.Screen
        options={{
          backgroundColor: 'green',
        }}
        name="home"
        component={Home}
      />
      <TopTab.Screen name="signup" component={Signup} />
      <TopTab.Screen name="signin" component={Signin} />
    </TopTab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.mainView}>
      <CusHeader />
      {/* <View> */}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            /* options={tabba} */ name="topTabNav"
            component={TopTabNav}
          />
          {/* <Stack.Screen name="Signup" component={Signup} /> */}
        </Stack.Navigator>
      </NavigationContainer>
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    flex: 1,
  },
});
