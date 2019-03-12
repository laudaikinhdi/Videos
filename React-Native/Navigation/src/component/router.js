import React from 'react';
import {createStackNavigator,createBottomTabNavigator} from 'react-navigation';
import Home from './../screens/Home.js';
import User from './../screens/User.js';
import Detail from './../screens/Detail.js';
import Menu from './../screens/Menu.js';

export const HomeStack = createStackNavigator({
    ManHinh_Home: {
        screen: Home,
        navigationOptions: {
            title: 'Trang chủ'
        }
    },
    ManHinh_Menu: {
        screen: Menu
    },
    ManHinh_Detail: {
        screen: Detail
    }
});

export const UserStack = createStackNavigator({
    ManHinh_User: {
        screen: User,
        navigationOptions: {
            title: 'Tài khoản'
        }
    },
});

export const Tabbar = createBottomTabNavigator({
    Home:{
        screen: HomeStack,
    },
    User:{
        screen: UserStack
    }
    // Home: HomeStack,
    // User: UserStack,
});