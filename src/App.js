/**
 *
 * Main app
 *
 * App Name:          Oreo fashion
 * Author:            Rnlab.io
 *
 * @since             1.0.0
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';


import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppRouter from './AppRouter';

import NavigationService from './vendor/utils/navigation';
import configureStore from './config-store';
// import { tokenSelector } from './modules/auth/selectors';
import globalConfig from './vendor/utils/global';

const { store, persistor } = configureStore();

type Props = {};

class App extends Component<Props> {
  componentDidMount() {


    store.subscribe(() => {
      const state = store.getState();
      // globalConfig.setToken(tokenSelector(state));
    });
  }




  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer
            ref={(navigationRef) =>
              NavigationService.setTopLevelNavigator(navigationRef)
            }>
            <SafeAreaProvider>
              <AppRouter />
            </SafeAreaProvider>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
