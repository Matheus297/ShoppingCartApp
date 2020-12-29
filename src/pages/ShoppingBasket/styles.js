import styled from 'styled-components';
import {Dimensions} from 'react-native';

const ScreenWidth = Dimensions.get('screen').width;


export const Container = styled.View`
background-color: #fff;
justify-content: center;
flex: 1;
align-items: center;
`;


export const ContentView = styled.View`
width: 100%;
border-bottom-color: #ddd;
border-bottom-width: 2px;
flex-direction: row;
padding: 30px 20px;
`;

export const WrapperImage = styled.View`
`;

export const Foto = styled.Image`
width: 80px;
height: 100px;

`;


export const Info = styled.View`
margin-left: 10px;

`;


export const Heade = styled.View`


`;


export const Title = styled.Text`
max-width:  ${ScreenWidth < 768 ? '250px' : '300px'};
font-size: ${ScreenWidth < 768 ? '14px' : '16px'};
font-weight: bold;
`;




export const Bottom = styled.View`


`;

export const Category = styled.Text`
font-size: 15px;
margin-top: 20px;
`;


export const WrapperBottom = styled.View`
flex-direction: row;


`;

export const Quantify = styled.Text`


`;

export const Price = styled.Text`
position: absolute;
bottom: 30px;
right: 30px;
font-size: 18px;
font-weight: bold;

`;

export const WrapperButton = styled.TouchableOpacity`

justify-content: center;
align-items: center;
background-color: #F53B0B;
padding: 10px 40px;
border-radius: 4px;
elevation: 1;
`;

export const WrapperButtonText = styled.Text`
color: #fff;
font-size: 20px;
text-transform: uppercase;
`;

export const AddCar = styled.Text`
font-size: 18px;
margin-top: 10px;
margin-bottom: 20px;
text-transform: uppercase;
color: #F53B0B;
font-weight: bold;

`;


export const AddBasket = styled.Text`
text-align: center;
color: #F53B0B;
font-size: 18px;
text-transform: uppercase;


`;