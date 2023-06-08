import { useContext, useEffect } from "react";
import { ActivityIndicator, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../components/Defaults";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Logo, MainTitle, UIDText } from "./styles";

import { login } from "../../service/api";
import LogoImage from '../../assets/logo.png';
import colors from "../../styles/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function LoadPage() {
  const { UID } = useContext(GlobalContext);
  const navigation = useNavigation();
  
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, []);

  return (
    <Container>
      <MainTitle>Tintoria Boss</MainTitle>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Logo source={LogoImage} />
      </TouchableOpacity>
      <ActivityIndicator size="large" color={colors.primary} />

      <UIDText>{UID}</UIDText>    
    </Container>
  )
}