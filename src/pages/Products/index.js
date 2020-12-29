import React from 'react';
import { useState,useEffect } from 'react';
import {Press, WrapperCard, WrapperBottom, Title, Price, Foto, List} from './styles';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

const Products = () => {
  const [products, setProduct] = useState([]);
  const navigation = useNavigation();
  
  useEffect(() => {
    async function getProducts(){
      const response = await api.getProducts()
      setProduct(response);
    }
    getProducts();
  }, []) 


  function formattedCurrency(value){
    const formatter = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value)
    return formatter
  }

  function renderRestaurantList(){
    const renderItem = ({item}) => (
      <Press activeOpacity={0} onPress={() => {
        navigation.navigate('ItemProducts', {
          item,
        })
      }}>
        <WrapperCard>
          <Foto source={{uri: item.image}} resizeMode='contain'/>
        </WrapperCard>
        <WrapperBottom>
          <Title>{item.title}</Title>
          <Price>{formattedCurrency(item.price)}</Price>
        </WrapperBottom>
      </Press>
    
    
    )
      return (
        <List
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={2}
        />
      )
  }

  
  return (
   <>
    {renderRestaurantList()}
   </>
  )
}

export default Products;