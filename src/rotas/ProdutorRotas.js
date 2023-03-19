/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Produtor from '../telas/Produtor';
import Home from '../telas/Home';

const Stack = createNativeStackNavigator();

export default function ProdutorRotas({ ComponentePrincipal = Home }){
   return <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
         name='HomeScreen' 
         component={ComponentePrincipal} 
      />
      <Stack.Screen 
         name='Produtor' 
         component={Produtor} 
      />
   </Stack.Navigator>
}