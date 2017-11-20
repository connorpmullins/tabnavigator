import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from './components/header';
import Newsfeed from './scenes/newsfeed';
import Whispers from './scenes/whispers';

const screenStyle = { flex: 1, alignItems: 'center', justifyContent: 'center' };

const Feed = () => (
  <View>
    <Newsfeed />
  </View>
);

const WhisperScreen = () => (
  <View>
    <Whispers />
  </View>
);

const Questions = () => (
  <View>
    <Newsfeed />
  </View>
);

const Notifications = () => (
  <View style={screenStyle}>
    <Text>Profile Screen</Text>
  </View>
);

const Profile = () => (
  <View style={screenStyle}>
    <Text>Profile Screen</Text>
  </View>
);

const RootTabs = TabNavigator({
  Home: {
    screen: Feed,
    navigationOptions: {
      tabBarLabel: 'Newsfeed',
      tabBarIcon: ({ tintColor, focused }) => (
        <MaterialCommunityIcons
          name={focused ? 'format-float-right' : 'format-float-right'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Whispers: {
    screen: WhisperScreen,
    navigationOptions: {
      tabBarLabel: 'Whispers',
      tabBarIcon: ({ tintColor, focused }) => (
        <MaterialCommunityIcons
          name={focused ? 'message-text-outline' : 'message-text-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Questions: {
    screen: Questions,
    navigationOptions: {
      tabBarLabel: 'Questions',
      tabBarIcon: ({ tintColor, focused }) => (
        <MaterialCommunityIcons
          name={focused ? 'help' : 'help'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      tabBarLabel: 'Notifications',
      tabBarIcon: ({ tintColor, focused }) => (
        <MaterialCommunityIcons
          name={focused ? 'bell-outline' : 'bell-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor, focused }) => (
        <MaterialCommunityIcons
          name={focused ? 'home' : 'home'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
});

export default RootTabs;
