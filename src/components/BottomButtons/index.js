import { TouchableOpacity } from "react-native-gesture-handler";
import { BottomButtonsWrapper } from "./styles";

export default function BottomButtons({buttons}) {
  return (
    <BottomButtonsWrapper>
      {buttons?.map(button =>
        <TouchableOpacity>
          {button}
        </TouchableOpacity>
      )}
    </BottomButtonsWrapper>
  )
}