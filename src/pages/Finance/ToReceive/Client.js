import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import CheckInactivity from "../../../components/CheckInactivity";
import { HomeContainer, HomeTitle, MultipleLineCell, Table, TableCell, TableCellText, TableHeader, TableRow, TableTitle, TableTitleWrapper } from "../../Home/styles";

export default function Client() {
  const header = ['Pedido', 'Lavado', 'Roupa', 'Débito'];
  const [client, setClient] = useState('Cliente 1');
  const navigation = useNavigation();
  const data = [
    {value: 1, label: '3331', washType: 'Lavado 1', clothes: ['Roupa 1', 'Roupa 2'], amount: '1.000,00'},
    {value: 2, label: '3332', washType: 'Lavado 1', clothes: ['Roupa 1'], amount: '500,40'},
    {value: 3, label: '3333', washType: 'Lavado 1', clothes: ['Roupa 1'], amount: '200,55'},
  ]

  function handlePress(client) {
    console.log(client);
    navigation.navigate('Order');
  }

  return (
    <CheckInactivity>
      <HomeContainer>
        <HomeTitle>{client}</HomeTitle>
        <Table>
          <TableHeader>
            <TableTitleWrapper style={{ flex: 0.13 }}>
              <TableTitle>Pedido</TableTitle>
            </TableTitleWrapper>
            <TableTitleWrapper style={{ flex: 0.32 }}>
              <TableTitle>Lavado</TableTitle>
            </TableTitleWrapper>
            <TableTitleWrapper style={{ flex: 0.3 }}>
              <TableTitle>Roupa(s)</TableTitle>
            </TableTitleWrapper>
            <TableTitleWrapper style={{ flex: 0.25 }}>
              <TableTitle>Débito</TableTitle>
            </TableTitleWrapper>
          </TableHeader>
          {data.map((row, index) => 
            <TouchableOpacity key={index} onPress={() => handlePress(row)}>
              <TableRow>
                <TableCell style={{ flex: 0.13 }}>
                  <TableCellText>{row.label}</TableCellText>
                </TableCell>
                <TableCell style={{ flex: 0.32 }}>
                  <TableCellText>{row.washType}</TableCellText>
                </TableCell>
                <MultipleLineCell style={{ flex: 0.3 }}>
                  {row.clothes.map((clothe, index) => 
                    <TableCell key={index}>
                      <TableCellText>
                        {clothe}
                      </TableCellText>
                    </TableCell>
                  )}
                </MultipleLineCell>
                <TableCell style={{ flex: 0.25, justifyContent: 'flex-end' }}>
                  <TableCellText>R$ {row.amount}</TableCellText>
                </TableCell>
              </TableRow>  
            </TouchableOpacity>
          )}
        </Table>
      </HomeContainer>
    </CheckInactivity>
  )
}