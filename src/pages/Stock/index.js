import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import CheckInactivity from "../../components/CheckInactivity";
import { HomeContainer, HomeTitle, Table, TableCell, TableHeader, TableRow, TableTitle, TableTitleWrapper } from '../Home/styles';

export default function Stock() {
  const [header, setHeader] = useState(['Produto', 'Quantidade']);
  const [data, setData] = useState([
    {label: 'PRODUTO 1', amount: '100', type: 'Unidades'},
    {label: 'PRODUTO 2', amount: '120', type: 'Litros'},
    {label: 'PRODUTO 3', amount: '160', type: 'Kgs'},
    {label: 'PRODUTO 4', amount: '300', type: 'Unidades'},
  ]);

  function handlePress() {
    
  }

  return (
    <CheckInactivity>
      <HomeContainer>
        <HomeTitle>Estoque</HomeTitle>
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