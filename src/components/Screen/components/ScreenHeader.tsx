import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Box, Icon, Text, TouchableOpacityBox } from '@components';

import { ScreenProps } from '../index';

const ICON_SIZE = 20;
type Props = Pick<
  ScreenProps,
  'title' | 'canGoBack' | 'HeaderComponent' | 'isHome'
>;
export function ScreenHeader({
  canGoBack,
  isHome,
  title,
  HeaderComponent,
}: Props) {
  const navigation = useNavigation();

  const showBackLabel = !title && !HeaderComponent;

  return (
    <Box
      flexDirection="row"
      pb="s8"
      paddingHorizontal="s16"
      alignItems="center"
      borderBottomColor="gray1"
      borderBottomWidth={0.4}
      justifyContent="space-between">
      {canGoBack && (
        <TouchableOpacityBox
          testID="screen-back-button"
          flexDirection="row"
          alignItems="center"
          mr="s10"
          onPress={navigation.goBack}>
          <Icon size={ICON_SIZE} name="arrowLeft" color="primary" />
          {showBackLabel && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {isHome && (
        <TouchableOpacityBox
          testID="screen-home-button"
          flexDirection="row"
          alignItems="center"
          mr="s10"
          onPress={() => {}}>
          <Icon size={24} name="menu" color="white" />
        </TouchableOpacityBox>
      )}
      {HeaderComponent}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box backgroundColor="carrotSecondary" width={ICON_SIZE} />}
    </Box>
  );
}
