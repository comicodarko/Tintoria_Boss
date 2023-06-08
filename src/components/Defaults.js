import styled from "styled-components";
import colors from "../styles/colors";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background: ${colors.gray};
  padding: 10px;
`

export const ContainerScroll = styled.ScrollView`
  flex: 1;
  background: ${colors.gray};
`