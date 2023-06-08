import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { ActivityIndicator, Image } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import WingsIcon from '../../assets/wings.png';

import Box from "../../components/Box";
import CheckInactivity from "../../components/CheckInactivity";
import { GlobalContext } from "../../contexts/GlobalContext";
import colors from "../../styles/colors";
import normalize from '../../utils/normalize';
import { BoxesWrapper, HomeContainer, HomeTitle } from "./styles";

export default function Home() {
  const { session } = useContext(GlobalContext);
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  
  function handleNavigate(route) {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      route && navigation.navigate(route);
    }, 2000);
  }

  return (
    <CheckInactivity>
      <HomeContainer>

        <HomeTitle>{session.laundryName}</HomeTitle>
        <BoxesWrapper>
          <Box 
            onPress={() => handleNavigate('Finance')}
            icon={<Feather name="dollar-sign" size={normalize(35)} color={colors.primary}/>}
            label="Contas a Pagar"
            info="R$ 4.000,00"
          />

          <Box 
            onPress={() => handleNavigate('Stock')}
            icon={<Feather name="dollar-sign" size={normalize(35)} color={colors.primary}/>}
            label="Contas a Receber (Ativos)" 
            labelSecondary="Contas a Receber (Inativos)"
            info="R$ 134.000,00"
            infoSecondary="R$ 134.000,00"
          />

          {/* <Box 
            onPress={handleNavigate}
            icon={<Entypo name="users" size={normalize(30)} color={colors.primary}/>}
            label="Clientes" 
            info="40"
          /> */}

          <Box 
            onPress={handleNavigate}
            icon={<MaterialCommunityIcons name="dishwasher" size={normalize(33)} color={colors.primary}/>}
            label="Relavagens" 
            info="10"
            infoSecondary="R$ 1.000"
          />
          
          <Box 
            onPress={handleNavigate}
            icon={<Octicons name="repo-deleted" size={normalize(30)} color={colors.primary}/>}
            label="Pedidos Excluídos" 
            info="20"
            infoSecondary="R$ 4.000"
          />
          
          <Box 
            onPress={handleNavigate}
            icon={<Image source={WingsIcon} style={{ width: normalize(35), height: normalize(35) }} />}
            label={`Pedidos "Voando"`} 
            info="30"
            infoSecondary="R$ 10.000"
          />
        </BoxesWrapper>
        
        {isLoading && <ActivityIndicator size="large" color={colors.primary} style={{ marginTop: 'auto', marginBottom: 'auto' }}/>}
      </HomeContainer>
    </CheckInactivity>
  )
}