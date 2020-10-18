import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import HomeScreen from '../resources/views/screens/Home';
import { AccountScreen } from '../resources/views/screens/Account';

import { loadingSelector } from '../app/modules/common/selectors'
import { isLoginSelector } from '../app/modules/auth/selectors';


const Stack = createStackNavigator();

function RootStack({ loading, isLogin }) {
    console.log({ loading, isLogin })
    /**
     * Hide Splash after fetch data
     */
    // if (!loading) {
    //     SplashScreen.hide();
    // }
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
            <Stack.Screen name={"Account"} component={AccountScreen} />
        </Stack.Navigator>
    );
}

const mapStateToProps = (state) => {
    return {
        // isGettingStart: isGettingStartSelector(state),
        isLogin: isLoginSelector(state),
        loading: loadingSelector(state),
        // loginRequired: requiredLoginSelector(state),
    };
};

export default connect(mapStateToProps)(RootStack);
