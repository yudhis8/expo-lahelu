import React from 'react';
import {AppRegistry} from 'react-native';
import name from './app.json';
import App from './App';
import {Platform} from 'react-native';
import {createRoot} from 'react-dom/client';

if (Platform.OS === 'web') {
  const rootElement = document.getElementById('app-root') || document.createElement('div');
  if (!rootElement.id) {
    rootElement.id = 'root';
    document.body.appendChild(rootElement);
  }
  createRoot(rootElement).render(<App />);
} else {
  AppRegistry.registerComponent(name, () => App);
}
