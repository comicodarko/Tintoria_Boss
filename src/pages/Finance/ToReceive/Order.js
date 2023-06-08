import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import CheckInactivity from "../../../components/CheckInactivity";
import { HomeContainer, HomeTitle, MultipleLineCell, OrderText, Table, TableCell, TableHeader, TableRow, TableTitle, TableTitleWrapper, WashType } from "../../Home/styles";

export default function Order() {
  const header = ['Roupa', 'Serviços', 'Quantidade'];
  // const [client, setClient] = useState('Cliente 1');
  const [client, setClient] = useState('Cliente 1');
  const [washType, setWashType] = useState('AMACIADO');
  const order = '3331';
  const navigation = useNavigation();
  const data = [
    {value: 1, clothe: 'Calça', services: ['Serviço 1', 'Serviço 2'], amount: '150'},
    {value: 2, clothe: 'Short', services: ['Serviço 1'], amount: '200'},
  ]

  function handlePress(client) {
    console.log(client);
    navigation.navigate('Order');
  }

  return (
    <CheckInactivity>
      <HomeContainer>
        <HomeTitle style={{ textAlign: 'left' }}>{client}</HomeTitle>
        <OrderText style={{ textAlign: 'left' }}>Pedido: {order}</OrderText>
        <WashType>{washType}</WashType>
        <Table>
          <TableHeader>
            <TableTitleWrapper style={{ justifyContent: 'flex-start' }}>
              <TableTitle>Roupa</TableTitle>
            </TableTitleWrapper>
            <TableTitleWrapper>
              <TableTitle>Serviço(s)</TableTitle>
            </TableTitleWrapper>
            <TableTitleWrapper style={{ justifyContent: 'flex-end' }}>
              <TableTitle>Quantidade</TableTitle>
            </TableTitleWrapper>  
          </TableHeader>
          {data.map((row, index) => 
            <TouchableOpacity key={index} onPress={() => handlePress(row)}>
              <TableRow>
                <TableCell style={{ justifyContent: 'flex-start' }}>{row.clothe}</TableCell>
                <MultipleLineCell>
                  {row.services.map((service, index) => 
                    <TableCell key={index}>
                      {service}
                    </TableCell>
                  )}
                  </MultipleLineCell>
                <TableCell style={{ justifyContent: 'flex-end' }}>{row.amount}</TableCell>
              </TableRow>  
            </TouchableOpacity>
          )}
        </Table>
      </HomeContainer>
    </CheckInactivity>
  )
}