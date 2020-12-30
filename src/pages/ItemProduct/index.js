import {useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, ScrollView} from 'react-native'
import {TouchableOpacity} from 'react-native'
import { useDispatch } from 'react-redux';
import {AddCart} from  '../../redux/actions';

import { Container, WrapperImage, Foto, Title, Price, Description, DescriptionText, Line, Rest, WrapperButton, WrapperButtonText, AddCar} from './styles';

const ItemProduct = ({route}) => {
  const {item} = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function formattedCurrency(value){
    const formatter = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value)
    return formatter
  }

  function handleAddCart(){
    dispatch(AddCart(item))
    navigation.navigate('Shopping');
  }

  function add(){
    dispatch(AddCart(item))
  }

  return (
   <ScrollView style={{flex: 1, backgroundColor: "#fff"}} showsVerticalScrollIndicator={false}>
      <Container key={`${item.id}`}>
      <WrapperImage>
        <Foto source={{uri: item.image}} resizeMode='contain'/>
      </WrapperImage>
      <Title>{item.title}</Title>
      <Price>{formattedCurrency(item.price)}</Price>
      <Description>
        <DescriptionText>Descrição</DescriptionText>
        <Line />
      </Description>
      <Rest numberOfLines={5}>{item.description}</Rest>
      <WrapperButton>
          <WrapperButtonText onPress={() => handleAddCart()}>comprar</WrapperButtonText>
        </WrapperButton>
        <TouchableOpacity onPress={() => add()}>
          <AddCar>adicionar ao carrinho</AddCar>
        </TouchableOpacity>
    </Container>
   </ScrollView>
  )
}

export default ItemProduct;