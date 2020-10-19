import React from 'react';


import { createStackNavigator } from '@react-navigation/stack';

import { mainStack } from '../config/navigator';

import HomeScreen from '../resources/views/screens/Home';
import { AccountScreen } from '../resources/views/screens/Account';



const Stack = createStackNavigator();

function MainStack() {
    return (
        <Stack.Navigator initialRouteName={"HomeScreen"} screenOptions={{ gestureEnabled: false }}>
            <Stack.Screen options={{ headerShown: false }} name={mainStack.home_screen} component={HomeScreen} />
            <Stack.Screen options={{ headerShown: false }} name={mainStack.account_screen} component={AccountScreen} />
        </Stack.Navigator>
    );
}

export default MainStack;
