import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from './src/screens/Settings';
import Details from './src/screens/Details';
import { FontAwesome  ,Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
const  HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen!this is the changes!</Text>
      <Text>Home Screen!is the main Screen</Text>
     
    </View>
  ); 
}


const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} 
      options={{ tabBarIcon: () =>  <FontAwesome name="home" size={30} /> }}
     />
      <Tab.Screen name="Settings" component={Settings} 
      options={{ tabBarIcon: () =>  <Ionicons name="ios-settings" size={30} /> }}
      />
      <Tab.Screen name="Details" component={Details} 
      options={{ tabBarIcon: () =>  <MaterialCommunityIcons name="account-details" size={30} /> }}
      /> 
      
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
