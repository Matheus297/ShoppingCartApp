import React from 'react';
import {useSelector} from 'react-redux';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

import { Wrapper, Counter, CounterText } from './styles';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
    const CountOrder = useSelector(state => state.order);
    const navigation = useNavigation();
  return (
      <Wrapper activeOpacity={0} onPress={() => navigation.navigate('Shopping')} >
          <Icon name='shoppingcart' color='#fff' size={26}/>
          <Counter>
              <CounterText>{CountOrder.length}</CounterText>
          </Counter>
      </Wrapper>
  )
}

export default Cart;