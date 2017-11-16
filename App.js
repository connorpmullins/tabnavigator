import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';


const screenStyle = { flex: 1, alignItems: 'center', justifyContent: 'center' };

const HomeScreen = () => (
  <View style={screenStyle}>
    <Text>Home Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={screenStyle}>
    <Text>Profile Screen</Text>
  </View>
);


const RootTabs = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
});

export default RootTabs;