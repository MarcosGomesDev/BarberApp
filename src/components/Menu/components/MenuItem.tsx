import React from 'react';
import { Box, CategoryProp, Icon, Text } from '@components';
import { TouchableOpacity } from 'react-native';
import { useDialogService } from '@services';

export interface MenuItemProps {
  item: {
    _id: string;
    title: string;
    description: string;
    price: string;
    type: CategoryProp['type'];
  };
}

export function MenuItem({ item }: MenuItemProps) {
  const { showDialog } = useDialogService();

  function handleSelectService() {
    showDialog();
  }

  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      paddingVertical="s20">
      <Box justifyContent="space-between" height={90} flex={1}>
        <Text bold preset="paragraphLarge" weight="700">
          {item.title}
        </Text>
        <Text color="gray2" preset="paragraphMedium">
          {item.description}
        </Text>
        <Text bold weight="700">
          R$ {item.price}
        </Text>
      </Box>
      <TouchableOpacity
        onPress={handleSelectService}
        hitSlop={{
          top: 10,
          bottom: 10,
          left: 10,
          right: 10,
        }}>
        <Icon name="plus" color="gold" size={24} />
      </TouchableOpacity>
    </Box>
  );
}
