import React from 'react';
import { Alert } from 'react-native';
import { useContext } from 'react';

import { GlobalContext } from '../../contexts/GlobalContext';
import { version } from '../../../package.json';
import Logo from '../../assets/logo.png';

import * as S from './styles';

export default function Menu({ navigation }) {
  const { UID } = useContext(GlobalContext);

  return (
    <S.Container>
      <S.Logo source={Logo} />
      <S.Version>Versão {version}</S.Version>
      <S.Title>Tintoria Boss</S.Title>
      <S.Version>{UID}</S.Version>
    </S.Container>
  );
};