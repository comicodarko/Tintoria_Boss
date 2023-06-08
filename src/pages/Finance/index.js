import React, { useState } from 'react';
import {HomeContainer, HomeTitle } from '../Home/styles';
import Box from '../../components/Box';
import { PixLabel, PixLogo, PixModal, PixModalButton, PixModalButtonText, PixModalInput, PixModalLabel, PixRow, PixWrapper } from './styles';

import Pix from '../../assets/pix.png';
import DefaultModal from '../../components/DefaultModal';
import CheckInactivity from '../../components/CheckInactivity';
import { useNavigation } from '@react-navigation/native';
import colors from '../../styles/colors';
import { ActivityIndicator } from 'react-native';

export default function Finance() {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();


  function handleSavePix() {
    // ...
    setModalVisible(false)
  }

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
        <DefaultModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
          <PixModal>
            <PixModalLabel>Chave Pix</PixModalLabel>
            <PixModalInput />
            <PixModalButton onPress={handleSavePix}>
              <PixModalButtonText>Salvar</PixModalButtonText>
            </PixModalButton>
          </PixModal>
        </DefaultModal>
        <HomeTitle>Financeiro</HomeTitle>
        <Box label="Contas a receber" onPress={() => handleNavigate('ToReceive')} />
        <Box label="Contas a pagar" onPress={() => handleNavigate('ToReceive')} />
        {isLoading && <ActivityIndicator size="large" color={colors.primary} style={{ marginTop: 'auto', marginBottom: 'auto' }}/>}
        <PixWrapper onPress={() => setModalVisible(true)}>
          <PixRow>
            <PixLogo source={Pix} />
            <PixLabel>Chave Pix</PixLabel>
          </PixRow>
        </PixWrapper>
      </HomeContainer>
    </CheckInactivity>
  )
}