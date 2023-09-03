import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './components/home/home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import signup from './components/home/signup';
import test from './components/home/test';
import tab1 from './components/home/tab1';
import tab2 from './components/home/tab2';
import tab3 from './components/home/tab3';
import tab4 from './components/home/tab4';

const App = () => {
    const Stack = createNativeStackNavigator();
    const Tab= createBottomTabNavigator()
    const Stacknavigation=()=> {
        return (
            <Stack.Navigator   screenOptions={{
                headerShown: false
              }}>
              <Stack.Screen name="login" component={Home} />
              <Stack.Screen name="signup" component={signup} />
              <Stack.Screen name="test" component={TabNavigation} />
            </Stack.Navigator>
        );
      }

      const TabNavigation = ()=>{
        return( <Tab.Navigator
         screenOptions={({ route }) => ({
           tabBarIcon: ({ focused, color, size }) => {
             let iconName;
      
             if (route.name === 'tab4') {
               iconName = focused
                 ? 'document-text'
                 : 'document-text';
             } else if (route.name === 'tab4') {
               iconName = focused ? 'scan-circle-outline' : 'scan-circle-outline';
             }else if (route.name === 'Profile') {
               iconName = focused ? 'person-outline' : 'person-outline';
             }
             else if (route.name === 'tab4') {
               iconName = focused ? 'people-circle-sharp' : 'people-circle-sharp';
             }
             else if (route.name === 'tab4') {
               iconName = focused ? 'home-outline' : 'home-outline';
             }
             
             // You can return any component that you like here!
             return <Ionicons name={iconName} size={25} color={color} />;
           },
           tabBarActiveTintColor: 'tomato',
           tabBarInactiveTintColor: 'gray',
         })}
        >
         <Tab.Screen name="tab1" component={tab1} options={{headerShown:false}} />
         <Tab.Screen name="tab2" component={tab2} options={{headerShown:false}} />
         <Tab.Screen  name="tab3" component={tab3}  options={{headerShown:false}}/>
         <Tab.Screen  name="tab4" component={tab4} options={{headerShown:false}}/>
       </Tab.Navigator>)
       }



       const Final= ()=>{
        return(
          <NavigationContainer>
           <Stacknavigation />
          </NavigationContainer>
        )
      }
    console.log("Heyy Debug")
    return (
        <View style={{flex:1}}>
         <Final />
        </View>

    )
}

export default App

const styles = StyleSheet.create({})



