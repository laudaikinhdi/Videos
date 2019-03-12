import React from  'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Category from './screens/Category';
import Categories from './screens/Categories';
import Cart from './screens/Cart';
import Orders from './screens/Orders';
import Settings from './screens/Settings';

const color = {
    ACTIVE: '#147efb',
    INACTIVE: '#ccc'
}

const CategoryStack = createStackNavigator({
    Categories: {
        screen: Categories
    },
    Category: {
        screen: Category
    }
});
CategoryStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({focused}) => {
        return <Ionicons
            name="ios-planet"
            size={36}
            color={focused ? color.ACTIVE : color.INACTIVE}
         />
    }
};

const CartStack = createStackNavigator({
    Cart
});

CartStack.navigationOptions = {
    tabBarLabel: 'Cart',
    tabBarIcon: ({focused}) => {
        return <Ionicons
            name="ios-cart"
            size={36}
            color={focused ? color.ACTIVE : color.INACTIVE}
         />
    }
};

const OrderStack = createStackNavigator({
    Orders
});
OrderStack.navigationOptions = {
    tabBarLabel: 'Orders',
     tabBarIcon: ({focused}) => {
        return <Ionicons
            name="ios-orders"
            size={36}
            color={focused ? color.ACTIVE : color.INACTIVE}
         />
     }
};

const SettingStack = createStackNavigator({
    Settings
});
SettingStack.navigationOptions = {
    tabBarLabel: 'Settings'
};

const AppNavigator = createBottomTabNavigator({
    CategoryStack,
    CartStack,
    OrderStack,
    SettingStack
});

export default AppNavigator


