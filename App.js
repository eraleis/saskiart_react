import React from 'react';
import { StatusBar, StyleSheet, Text, View, NativeModules, Platform } from 'react-native';
import Logo from './components/logo'
import PlayButton from './components/playButton'

const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <PlayButton />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: STATUSBAR_HEIGHT,
  },
});
