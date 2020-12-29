import styled from 'styled-components';




export const Container = styled.View`
display: flex;
flex: 1;
align-items: center;
background-color: #fff;
`;
export const WrapperImage = styled.View`
margin-top: 20px;
`;
export const Foto = styled.Image`
width: 200px;
height: 200px;    
`;
export const Title = styled.Text`
font-size: 22px;
max-width: 350px;
font-weight: bold;
margin-top: 20px;
`;
export const Price = styled.Text`
font-weight: bold;
font-size: 30px;
margin-top: 15px;

`;
export const Description = styled.View`
height: 20px;
margin-top: 60px;
flex-direction: row;
align-items: center;
justify-content: center;

`;
export const DescriptionText = styled.Text`
font-weight: bold;
font-size: 18px;
margin-left: 15px;

`;
export const Line = styled.View`
width: 80%;
height: 1px;
background-color: rgba(0,0,0,0.2);
margin-left: 1px;

`;
export const Rest = styled.Text`
margin-left: 10px;
color: rgba(0,0,0,0.4);
margin-top: 5px;
font-size: 16px;

`;

export const WrapperButton = styled.TouchableOpacity`
justify-content: center;
margin-top: 80px;
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
margin-top: 10px;
font-size: 18px;
text-transform: uppercase;
color: #F53B0B;

`;