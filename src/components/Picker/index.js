import React from 'react';

import IconPicker from 'react-native-vector-icons/MaterialIcons';
import { PickerView, PickerContent } from './styles';
import normalize from '../../utils/normalize';
import colors from '../../styles/colors';

export function Picker({ data, filteredData, value, setValue, placeholder }) {
  return(
    <PickerView>
      <PickerContent 
        containerStyle={{flex: 1}}
        items={filteredData.length < 1 ? data : filteredData}
        item={value}
        title={placeholder} placeholder={placeholder}
        onItemChange={setValue}
        backdropAnimation={{ opacity: 0 }}
      />
      <IconPicker 
        style={{ position: 'absolute', right: 10 }}
        name='keyboard-arrow-down'
        color={colors.primary}
        size={normalize(15)} 
      />
    </PickerView>
  )
}