
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider} from 'react-native-paper';

import GlobalProvider from './contexts/GlobalContext';
import Menu from './components/Menu';
import Home from './pages/Home';
import LoadPage from './pages/LoadPage';
import Finance from './pages/Finance';
import colors from './styles/colors';
import ToReceive from './pages/Finance/ToReceive';
import Client from './pages/Finance/ToReceive/Client';
import Order from './pages/Finance/ToReceive/Order';
import Stock from './pages/Stock';
import AllClients from './pages/AllClients';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator
      initialRouteName="LoadPage"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}>
      <Stack.Screen name="LoadPage" component={LoadPage} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Finance" component={Finance} />
        <Stack.Screen name="ToReceive" component={ToReceive} />
          <Stack.Screen name="Client" component={Client} />
            <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Stock" component={Stock} />
      <Stack.Screen name="AllClients" component={AllClients} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar animated barStyle="dark-content" backgroundColor={colors.primary} />
      <Provider>
        <GlobalProvider>
          <NavigationContainer>
              <Drawer.Navigator
                screenOptions={{
                  headerShown: false,
                }}
                initialRouteName="LoadPage"
                drawerContent={props => <Menu {...props} />}>
                <Drawer.Screen name="StackNav" component={StackNav} />
              </Drawer.Navigator>
          </NavigationContainer>
        </GlobalProvider>
      </Provider>
    </SafeAreaView>
  );
}