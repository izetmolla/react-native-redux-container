import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import LoadingScreen from '../resources/views/screens/loading';

import { loadingSelector } from '../app/modules/common/selectors'
import { isLoginSelector } from '../app/modules/auth/selectors';
import MainStack from './main-stack';
import AuthStack from './auth-stack';


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
            {loading ? (
                <Stack.Screen name={"LoadingScreen"} component={LoadingScreen} />
            ) : isLogin ? (
                <Stack.Screen name={rootSwitch.main} component={MainStack} options={{ animationEnabled: false, }} />
            ) : (<>
                <Stack.Screen name={rootSwitch.main} component={MainStack} options={{ animationEnabled: false, }} />
                <Stack.Screen name={rootSwitch.auth} component={AuthStack} />
            </>)}
        </Stack.Navigator>
    );
}

const mapStateToProps = (state) => {
    return {
        isLogin: isLoginSelector(state),
        loading: loadingSelector(state),
    };
};

export default connect(mapStateToProps)(RootStack);
