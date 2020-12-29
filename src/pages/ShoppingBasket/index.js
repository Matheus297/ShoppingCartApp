import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { 
  Container,
  ContentView,
  WrapperImage, 
  Foto, 
  Info, 
  Heade, 
  Title, 
  Bottom, 
  Category, 
  WrapperBottom, 
  Quantify, 
  Price,
  WrapperButton,
  WrapperButtonText,
  AddCar,
  AddBasket
 } from './styles';
import { removeCart, updateOrder, resetCart } from '../../redux/actions';
import { useNavigation } from '@react-navigation/native';

const ShoppingBasket = () => {

  const orders = useSelector(state => state.order);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function formattedCurrency(value){
    const formatter = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value)
    return formatter
  }

  function handledecrement(item){
    dispatch(updateOrder(item.id, item.amount - 1 ))
  }

  function handleIncrement(item){
    dispatch(updateOrder(item.id, item.amount + 1 ))
  }

  function handleDelete(id){
    dispatch(removeCart(id))
  }

  function resetState(){
    dispatch(resetCart())
  }
  return (
    <>
    <Container>
     <ScrollView style={{marginBottom: 40}} showsVerticalScrollIndicator={false}>
    {orders.map(order => (
        <ContentView key={order.id}>
        <Icon style={{position: 'absolute', bottom: 70, right: 30}} name='delete' color='rgba(0,0,0,0.4)' size={30} onPress={() => handleDelete(order.id)}/>
        <Price>{formattedCurrency(order.price * order.amount)}</Price>
        <WrapperImage>
          <Foto source={{uri: order.image}} resizeMode='contain'/>
        </WrapperImage>
        <Info>
          <Heade>
            <Title>{order.title}</Title>
          </Heade>
          <Bottom>
            <Category>{`Categoria: ${order.category}`}</Category>
            <WrapperBottom>
              <Quantify>{`Quantidade: ${order.amount}`}</Quantify>
              <TouchableOpacity style={{marginLeft: 10,}} onPress={() => handledecrement(order)}>
                <Icon name='minus' color='rgba(0,0,0,0.8)' size={25} onPress={() => handledecrement(order)} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleIncrement(order)}>
                <Icon name='plus' color='rgba(0,0,0,0.8)' size={25} />  
              </TouchableOpacity>  
            </WrapperBottom>
          </Bottom>
        </Info>
        </ContentView>
    ))}
    <TouchableOpacity onPress={() => navigation.navigate('Products')}>
      <AddBasket>adicionar produto</AddBasket>
    </TouchableOpacity>
    </ScrollView>
        <WrapperButton>
          <WrapperButtonText onPress={() => {}}>finalizar</WrapperButtonText>
        </WrapperButton>
       <TouchableOpacity activeOpacity={1} onPress={() => resetState()}>
        <AddCar>limpar carrinho</AddCar>
       </TouchableOpacity>
    </Container>
    </>
  )
}

export default ShoppingBasket;