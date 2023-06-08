import { BoxIcon, BoxInfos, BoxLabel, BoxWrapper, InfoPrimary, InfoSecondary, BoxLabelsWrapper } from "./styles";

export default function Box(props) {
  return (
    <BoxWrapper {...props}>
      <BoxIcon>
        {props.icon}
      </BoxIcon>
      <BoxLabelsWrapper>
        <BoxLabel haveIcon={props.icon}>{props.label}</BoxLabel>
        {props.labelSecondary && 
          <BoxLabel haveIcon={props.icon} secondary>{props.labelSecondary}</BoxLabel>
        }
      </BoxLabelsWrapper>
      <BoxInfos>
        <InfoPrimary >{props.info}</InfoPrimary>
        {props.infoSecondary 
          && <InfoSecondary>{props.infoSecondary}</InfoSecondary>
        }
      </BoxInfos>
    </BoxWrapper>
  )
}