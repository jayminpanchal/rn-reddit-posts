import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './store';

import Home from './screens/Home';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <StatusBar barStyle={'dark-content'} />
        <Home />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
});

export default App;
