import styled from "styled-components";

export const ModalWrapper = styled.View`
  flex: 1;
  background-color: #0008;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  padding: 5px;
`