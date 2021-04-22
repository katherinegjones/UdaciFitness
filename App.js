import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack'
import { StyleSheet, Text, View, Platform } from 'react-native';
import AddEntry from './components/AddEntry';
import History from './components/History'
import EntryDetail from './components/EntryDetail'
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducers'

import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { purple, white } from './utils/colors'
import Constants from 'expo-constants'

function UdaciStatusBar({backgroundColor, ...props}){
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}


const Tab = 
  Platform.OS === 'ios'
  ? createBottomTabNavigator()
  : createMaterialTopTabNavigator()


const TabNav = () => (
  <Tab.Navigator {...TabNavigatorConfig}>
    <Tab.Screen {...RouteConfigs['History']} />
    <Tab.Screen {...RouteConfigs['AddEntry']} />
  </Tab.Navigator>
)

const StackNavigatorConfigs = {
  headerMode: 'screen'
}

const StackConfig = {
  TabNav: {
    name: 'Home',
    component: TabNav,
    options: {headerShown: false}
  },
  EntryDetail: {
    name: 'EntryDetail',
    component: EntryDetail,
    options: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      },
      title: 'Entry Detail'
    }
  }
}

const Stack = createStackNavigator()

const MainNav = () => (
  <Stack.Navigator {...StackNavigatorConfigs}>
    <Stack.Screen {...StackConfig['TabNav']}/>
    <Stack.Screen {...StackConfig['EntryDetail']}/>
  </Stack.Navigator>
)

const RouteConfigs = {
  History: {
    name: 'History',
    component: History,
    options: {tabBarIcon: ({tintColor}) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />, title: 'History'}
  },
  AddEntry: {
    name: 'AddEntry',
    component: AddEntry,
    options: {tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={tintColor}/>, title: 'AddEntry'}
  }
}

const TabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
}

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={{flex: 1}}>
        <UdaciStatusBar backgroundColor={purple} style='light'/>
        <NavigationContainer>
        <MainNav />
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
