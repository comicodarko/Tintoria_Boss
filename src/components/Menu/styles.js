import styled from 'styled-components/native';
import normalize from '../../utils/normalize';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: #202020;
  border-right-width: 2px;
  border-color: ${colors.primary};
  justify-content: space-evenly;
  align-items: center;
`;

export const Row = styled.View`
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  margin-right: 5px;
  flex-wrap: wrap;
`

export const Logo = styled.Image`
  width: ${normalize(100)}px;
  height: ${normalize(100)}px;
  border-radius: 100px;
  margin-bottom: ${normalize(10)}px;
  border-width: 3px;
  padding: 50px;
  border-color: ${colors.primary};
`;

export const Version = styled.Text`
  font-family: sans-serif-light;
  color: #aaa;
`;
 
export const Title = styled.Text`
  font-family: sans-serif-light;
  text-align: center;
  font-size: ${normalize(28)}px;
  color: #fff;
`