// import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
// import {createDrawerNavigator} from 'react-navigation-drawer';
import Login from '../Login';
import Home from '../Home';
import CreateAccount from '../CreateAccount';
import CustomTabBar from '../CustomTabBarComponent';
// import Profile from '../Profile';
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
      Sync: {
        screen: Sync,
      },
    },
    {
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        style: {
          backgroundColor: 'whitesmoke',
          // borderColor: 'transparent',
          // borderWidth: 0,
          elevation: 0,
        },
      },
      tabBarComponent: CustomTabBar,
    },
  );

  switchNavigator = createSwitchNavigator({
    Login: {
      screen: Login,
    },
    Home: {
      screen: this.tabNavigator,
    },
    CreateAccount: {
      screen: CreateAccount,
    },
  });
  appContainer = createAppContainer(this.switchNavigator);
}

export default new Routes().appContainer;
