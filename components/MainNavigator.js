import React from 'react';
import { 
  Platform
} from 'react-native';
import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator
} from 'react-navigation';

import ListingsNavigator from './listings/ListingsNavigator';
import ProfileNavigator from './profile/ProfileNavigator';

import BaseRequester from '../requesters/BaseRequester';


let PlatformSpecificNavigator = TabNavigator;

if (Platform.OS === 'android') {
  PlatformSpecificNavigator = DrawerNavigator;
}

const MainNavigator = PlatformSpecificNavigator({
  Listings: {
    screen: ListingsNavigator,
  },
  Profile: {
    screen: ProfileNavigator,
  }
}, {
  navigationOptions: {
    headerBackTitle: null,
  }
});

export default MainNavigator;
