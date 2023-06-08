import styled from "styled-components";
import colors from "../../styles/colors";
import normalize from '../../utils/normalize';

export const MainTitle = styled.Text`
  color: ${colors.white};
  font-size: 30px;
  border-bottom-width: 2px;
  border-color: ${colors.primary};
  margin-bottom: 32px;
`

export const Logo = styled.Image`
  height: ${normalize(150)}px;
  width: ${normalize(150)}px;
  margin-bottom: 32px;
  border-width: 3px;
  border-radius: 20px;
  border-color: ${colors.primary};
`

export const UIDText = styled.Text`
  font-size: 14px;
  color: #888;
  position: absolute;
  bottom: 10px;
`