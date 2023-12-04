import React, { useState } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { Text } from '../Text/Text';
import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { useDialog, useDialogService } from '@services';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('window').width * 0.9;
const height = Dimensions.get('window').height * 0.25;
2;

export function Dialog() {
  const dialog = useDialog();
  const { hideDialog } = useDialogService();
  const navigation = useNavigation();

  const [selecteTypeCustomer, setSelectedTypeCustomer] = useState('');

  function handlePremiumCustomer() {
    setSelectedTypeCustomer('premium');
  }

  function handleNormalCustomer() {
    setSelectedTypeCustomer('normal');
  }

  function handleSave() {
    hideDialog();
    navigation.navigate('AttendanceScreen');
    setSelectedTypeCustomer('');
  }

  return (
    <Modal
      isVisible={dialog}
      hasBackdrop={false}
      animationIn={'bounceIn'}
      animationOut={'bounceOut'}
      animationOutTiming={80}>
      <Box
        backgroundColor="grayWhite"
        height={height}
        width={width}
        alignSelf="center"
        borderRadius="s24"
        paddingHorizontal="s24"
        paddingVertical="s16"
        alignContent="center"
        marginHorizontal="s8"
        shadowColor="grayBlack"
        elevation={20}
        shadowOpacity={0.8}
        shadowRadius={7.49}
        shadowOffset={{
          width: 0,
          height: 0,
        }}>
        <Box flexDirection="row" justifyContent="space-between">
          <Text weight="700" preset="paragraphLarge">
            Informe o cliente
          </Text>
          <TouchableOpacity
            onPress={hideDialog}
            hitSlop={{
              top: 10,
              bottom: 10,
              left: 10,
              right: 10,
            }}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 3,
            }}>
            <Text color="gray2" weight="700" preset="headingMedium">
              X
            </Text>
          </TouchableOpacity>
        </Box>

        <Box
          flex={1}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width={'100%'}>
          <Button
            title="Plano"
            backgroundColor="gold"
            width={'48%'}
            onPress={handlePremiumCustomer}
          />
          <Button title="Normal" width={'48%'} onPress={handleNormalCustomer} />
        </Box>
        <Button
          title="Salvar"
          disabled={!selecteTypeCustomer}
          onPress={handleSave}
        />
      </Box>
    </Modal>
  );
}
