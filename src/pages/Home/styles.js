import { Platform } from "react-native";
import { DataTable } from "react-native-paper";
import styled from "styled-components";
import { Container } from '../../components/Defaults';
import colors from "../../styles/colors";
import normalize from "../../utils/normalize";

export const HomeContainer = styled(Container)`
  justify-content: flex-start;
`

export const HomeTitle = styled.Text`
  font-weight: bold;
  font-family: ${Platform.OS === 'ios'
    ? 'HelveticaNeue-CondensedBlack'
    : 'sans-serif-condensed'};
  font-size: 32px;
  width: 100%;
  text-align: center;
  color: ${colors.white};
  border-color: ${colors.primary};
  border-bottom-width: 2px;
`

export const OrderText = styled.Text`
  /* font-weight: bold; */
  font-family: ${Platform.OS === 'ios'
    ? 'HelveticaNeue-CondensedBlack'
    : 'sans-serif-condensed'};
  font-size: 28px;
  margin-bottom: 16px;
  color: ${colors.white};
  width: 100%;
`

export const BoxesWrapper = styled.View`
  flex-direction: column;
  margin: 16px 0;
`

export const WashType = styled.Text`
  font-family: ${Platform.OS === 'ios'
    ? 'HelveticaNeue-CondensedBlack'
    : 'sans-serif-condensed'};
  font-size: 28px;
  color: ${colors.white};
  background-color: ${colors.secondary};
  width: 100%;
  text-align: center;
  border-radius: 5px;
`

export const Table = styled(DataTable)`
  width: 100%;
  max-height: 100%;
  background-color: #fff;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const TableHeader = styled(DataTable.Header)`
  background-color: #14bdaa;
  width: 100%;
`;

export const TableTitleWrapper = styled(DataTable.Title)`
  justify-content: center;
  /* border-right-width: ${props => props.isLast ? '0' : '1px'}; */
  border-color: #fff;
`;

export const TableTitle = styled.Text`
  color: #fff;
  font-size: ${normalize(16)}px;
  font-family: ${Platform.OS === 'ios'
    ? 'HelveticaNeue-CondensedBlack'
    : 'sans-serif-condensed'};
  font-weight: bold;
`;

export const TableRow = styled(DataTable.Row)``;
export const TableCell = styled(DataTable.Cell)`
  justify-content: center;
  /* font-size: 1px; */
`;

export const MultipleLineCell = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

export const TableCellText = styled.Text`
  color: #000;
  font-size: 13px;
`;