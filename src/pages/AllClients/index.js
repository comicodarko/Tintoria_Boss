import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import CheckInactivity from "../../components/CheckInactivity";
import { HomeContainer, HomeTitle, Table, TableCell, TableHeader, TableRow, TableTitle, TableTitleWrapper } from '../Home/styles';

export default function AllClients() {
  const [header, setHeader] = useState(['Clientes', 'Qtd Pedidos']);
  const [data, setData] = useState([
    {label: 'CLIENTE 1', amount: '5', type: 'Unidades'},
    {label: 'CLIENTE 2', amount: '10', type: 'Litros'},
    {label: 'CLIENTE 3', amount: '1', type: 'Kgs'},
    {label: 'CLIENTE 4', amount: '0', type: 'Unidades'},
  ]);

  function handlePress() {
    
  }

  return (
    <CheckInactivity>
      <HomeContainer>
        <HomeTitle>Clientes</HomeTitle>
        <Table>
          <TableHeader>
          {header.map((item, index) =>
            <TableTitleWrapper isLast={index === 1} key={item}>
              <TableTitle style={{ textAlign: 'right' }}>
                {item}
              </TableTitle>
            </TableTitleWrapper>  
          )}
          </TableHeader>
          {data.map((row, index) => 
            <TouchableOpacity key={index} onPress={() => handlePress(row)}>
              <TableRow>
                <TableCell>{row.label}</TableCell>
                <TableCell>{row.amount}</TableCell>
              </TableRow>  
            </TouchableOpacity>
          )}
        </Table>
      </HomeContainer>
    </CheckInactivity>
  )
}