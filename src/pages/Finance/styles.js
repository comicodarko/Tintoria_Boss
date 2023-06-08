import styled from "styled-components";
import colors from "../../styles/colors";

export const PixWrapper = styled.TouchableOpacity`
  margin-top: auto;
  margin-bottom: 16px;
  border-width: 2px;
  width: 100%;
  border-color: ${colors.primary};
  background-color: #fff2;
  border-radius: 16px;
  padding: 8px;
`

export const PixRow = styled.View`
  flex-direction: row;
  align-items: center;
`

export const PixLabel = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: 18px;
  margin-left: 16px;
`

export const PixLogo = styled.Image`
  width: 50px;
  height: 50px;
`

export const PixModal = styled.View`
  width: 90%;
  background: ${colors.gray};
  border-radius: 5px;
  border-width: 2px;
  border-color: ${colors.white};
  padding: 5px;
`

export const PixModalLabel = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  font-weight: bold;
`

export const PixModalInput = styled.TextInput`
  width: 100%;
  height: 40px;
  background-color: ${colors.white};
  border-radius: 5px;
  color: #000;
  font-size: 22px;
`

export const PixModalButton = styled.TouchableOpacity`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  border-width: 2px;
  border-color: ${colors.white};
  padding: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  border-radius: 5px;
  position: relative;
  background-color: ${colors.primary};

`

export const PixModalButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.white};
` 
