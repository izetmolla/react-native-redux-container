import React from 'react';


import { createStackNavigator } from '@react-navigation/stack';
import Home from '../resources/views/screens/Home';
import { AccountScreen } from '../resources/views/screens/Account';



const Stack = createStackNavigator();

function MainStack() {
    return (
        <Stack.Navigator initialRouteName={"HomeScreen"} screenOptions={{ gestureEnabled: false }}>
            <Stack.Screen options={{ headerShown: false }} name={"HomeScreen"} component={Home} />
            <Stack.Screen options={{ headerShown: false }} name={"AccountScreen"} component={AccountScreen} />
        </Stack.Navigator>
    );
}

export default MainStack;
