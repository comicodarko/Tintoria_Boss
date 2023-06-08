import { Modal } from "react-native";
import { CloseButton, ModalWrapper } from "./styles";

export default function DefaultModal({modalVisible, setModalVisible, children}) {
  return (
    <Modal animationType="fade" transparent visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
      <ModalWrapper>
        <CloseButton></CloseButton>
        {children}
      </ModalWrapper>
    </Modal>
  )
}