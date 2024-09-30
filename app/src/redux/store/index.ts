import {Action, configureStore, Reducer} from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer, {RootState} from '../reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistConfig} from 'redux-persist/es/types';

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'], // Specify which reducers you want to persist
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer as unknown as Reducer<RootState, Action>);

// Configure the store`
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializableCheck for redux-persist
    }).concat(thunk),
});

// Create the persistor to persist the store
export const persistor = persistStore(store);

// Export RootState and AppDispatch for TypeScript
export type RootStates = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
