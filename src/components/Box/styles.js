import styled from "styled-components";
import colors from "../../styles/colors";
import normalize from "../../utils/normalize";

export const BoxWrapper = styled.TouchableOpacity`
  min-width: 100%;
  height: ${normalize(65)}px;
  background-color: ${colors.white};
  border-radius: 8px;
  border-left-width: 10px;
  border-color: ${colors.primary};
  align-items: center;
  flex-direction: row;
  margin-top: 16px;
`

export const BoxIcon = styled.View`
  height: 100%;
  width: ${normalize(32)}px;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
`

export const BoxLabelsWrapper = styled.View`
  height: 100%;
  justify-content: center;
  flex: 0.7;
`

export const BoxLabel = styled.Text`
  font-weight: bold;
  font-family: ${Platform.OS === 'ios'
    ? 'HelveticaNeue-CondensedBlack'
    : 'sans-serif-condensed'};
  font-size: 24px;
  font-weight: bold;
  color: ${colors.black};
  margin-left: ${props => props.haveIcon ? '16px' : '0'};
  /* background: #000; */
  border-top-width: ${props => props.secondary ? '2px' : '0'};
  border-color: ${colors.primary};
`

export const BoxInfos = styled.View`
  border-left-width: 4px;
  border-color: ${colors.primary};
  height: 100%;
  flex: 0.3;
  margin-left: auto;
  justify-content: center;
  align-items: center;
`

export const InfoPrimary = styled.Text`
  color: ${colors.black};
  width: 100%;
  font-weight: bold;
  text-align: right;
  padding-right: 8px;
  font-size: 16px;
`

export const InfoSecondary = styled(InfoPrimary)`
  border-top-width: 2px;
  border-color: ${colors.primary};
`