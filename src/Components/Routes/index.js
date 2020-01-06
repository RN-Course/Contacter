// import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import { createDrawerNavigator } from 'react-navigation-drawer';
import Login from '../Login';
import Home from '../Home';
import CreateAccount from '../CreateAccount';
import CustomTabBar from '../CustomTabBarComponent';
import Profile from '../Profile';
import Download from '../Download';
import Share from '../Share';
import Upload from '../Upload';
import Sync from '../Sync';
class Routes {
  tabNavigator = createMaterialTopTabNavigator(
    {
      Home: {
        screen: Home,
      },
      Download: {
        screen: Download,
      },
      Share: {
        screen: Share,
      },
      Upload: {
        screen: Upload,
      },
    },
    {
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        style: {
          backgroundColor: 'whitesmoke',
          elevation: 0,
        },
      },
      tabBarComponent: CustomTabBar,
    },
  );
  drawerNavigator = createDrawerNavigator(
    {
      Home: { screen: this.tabNavigator },
      Download: { screen: this.tabNavigator },
      Share: { screen: this.tabNavigator },
      Upload: { screen: this.tabNavigator },
    },

    {
      contentComponent: Profile,
      drawerWidth: '100%',
      // drawerPosition: ''
    },
  );

  switchNavigator = createSwitchNavigator({
    Login: {
      screen: Login,
    },
    Home: {
      screen: this.drawerNavigator,
    },
    CreateAccount: {
      screen: CreateAccount,
    },
  });
  appContainer = createAppContainer(this.switchNavigator);
}

export default new Routes().appContainer;
