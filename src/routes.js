import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Products from './pages/Products';
import ItemProduct from './pages/ItemProduct';
import Shopping from './pages/ShoppingBasket';
import CartIcon from './components/Cart/index';


const Routes = () => {
   return (
    <Stack.Navigator
        initialRouteName='Products'
        screenOptions={{
            headerTitleAlign: 'center',
            headerTintColor: '#fff'
        }}
    >
    <Stack.Screen 
        name='Products' 
        component={Products}
        headerTitle='Produtos'
        options={{
            headerStyle: {
                backgroundColor: '#F53B0B',
                borderBottomColor: '#F53B0B',
                borderBottomWidth: 1,
            },
            headerTitle: 'Produtos',
            headerRight: (props) => (
                <CartIcon {...props}  />
            )
        }}
        
        />
    <Stack.Screen 
        name='ItemProducts' 
        component={ItemProduct}
        options={{
            headerStyle: {
                backgroundColor: '#F53B0B',
                borderBottomColor: '#F53B0B',
                borderBottomWidth: 1,
            },
            headerTitle: '',
            headerRight: (props) => (
                <CartIcon {...props} />
            )
        }}
        />
    <Stack.Screen 
        name='Shopping' 
        component={Shopping}
        headerTitle='Carrinho de Compras'
        options={{
            headerStyle: {
                backgroundColor: '#F53B0B',
                borderBottomColor: '#F53B0B',
                borderBottomWidth: 1,
            },
            headerTitle: 'Carrinho de compra',
            headerRight: (props) => (
                <CartIcon {...props} />
            )
        }}
        />
</Stack.Navigator>
   )
}


export default Routes;