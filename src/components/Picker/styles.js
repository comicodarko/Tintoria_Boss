import styled from "styled-components";
import { Picker } from "react-native-woodpicker";

import normalize from "../../utils/normalize";
import colors from "../../styles/colors";

export const PickerView = styled.View`
  flex-direction: row;
  width: 100%;
  background-color: ${colors.white};
  border-bottom-width: 3px;
  border-color: ${colors.primary}; 
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: ${normalize(40)}px;
  margin-bottom: ${normalize(10)}px;
  margin-top: ${normalize(10)}px;
  justify-content: space-between;
  align-items: center;
  color: #000;
  z-index: -10;
`;

export const PickerContent = styled(Picker)`
  height: 100%;
  padding: 0 10px;
`