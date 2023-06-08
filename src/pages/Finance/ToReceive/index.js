import Share from 'react-native-share';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import CheckInactivity from "../../../components/CheckInactivity";
import { HomeContainer, HomeTitle, Table, TableCell, TableCellText, TableHeader, TableTitle, TableTitleWrapper } from "../../Home/styles";
import colors from "../../../styles/colors";
import { PDFButton } from "./styles";
import { DataTable } from "react-native-paper";

export default function ToReceive() {
  const header = ['Cliente', 'Débito'];
  const navigation = useNavigation();
  const data = [
    {value: 1, label: 'Cliente 1', amount: '2.000,00'},
    {value: 2, label: 'Cliente 2', amount: '2.020,40'},
    {value: 3, label: 'Cliente 3', amount: '1.700,55'},
    {value: 4, label: 'Cliente 4', amount: '1.700,55'},
    {value: 5, label: 'Cliente 5', amount: '1.700,55'},
  ]

  function handlePress(client) {
    console.log(client);
    navigation.navigate('Client');
  }

  async function handlePDF() {
    const results = await RNHTMLtoPDF.convert({
      html: '<h1>PDF TEST</h1>',
      fileName: 'Teste - Relatório',
      base64: true,
    });

    const shareOptions = {
      url:  `data:application/pdf;base64,` + results.base64,
      social: Share.Social.WHATSAPP,
      filename: 'TESTE - RELATÓRIO'
    };

    Share.shareSingle(shareOptions)
      .then((res) => { console.log(res) })
      .catch((err) => { err && console.log(err); });
  }
  

  return (
    <CheckInactivity>
      <HomeContainer>
        <HomeTitle>Contas a Receber</HomeTitle>
        <Table>
          <TableHeader>
            <TableTitleWrapper style={{ flex: 0.55, justifyContent: 'flex-start' }}>
              <TableTitle>Cliente</TableTitle>
            </TableTitleWrapper>  
            <TableTitleWrapper style={{ flex: 0.3, justifyContent: 'flex-end'  }}>
              <TableTitle>Débito</TableTitle>
            </TableTitleWrapper>  
            <TableTitleWrapper style={{ flex: 0.15, justifyContent: 'flex-end' }}>
              <TableTitle>Ação</TableTitle>
            </TableTitleWrapper>  
          </TableHeader>
          {data.map((row, index) => 
            <DataTable.Row key={index}>
              <TableCell style={{ flex: 0.55, justifyContent: 'flex-start' }} onPress={() => handlePress(row)}>
                <TouchableOpacity>
                  <TableCellText>{row.label}</TableCellText>
                </TouchableOpacity>
              </TableCell>
              <TableCell style={{ flex: 0.3, justifyContent: 'flex-end' }}>
                <TouchableOpacity>
                  <TableCellText>R$ {row.amount}</TableCellText>
                </TouchableOpacity>
              </TableCell>
              <TableCell style={{ flex: 0.15, justifyContent: 'flex-end'  }}>
                <PDFButton onPress={handlePDF}>
                  <FontAwesome5 name="file-pdf" size={35} color={colors.secondary} />
                </PDFButton>
              </TableCell>
            </DataTable.Row>  
          )}
        </Table>
      </HomeContainer>
    </CheckInactivity>
  )
}