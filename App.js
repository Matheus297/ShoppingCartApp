import React from 'react';
import { View, StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import Routes from './src/routes';
import store from './src/redux';

const App = () => {
 return (
   <>
    <StatusBar  translucent backgroundColor='#D42A08' barStyle='light-content'/>
     <Provider store={store} >
       <NavigationContainer>
        <Routes />
       </NavigationContainer>
     </Provider>
   </>
 )
}

export default App;