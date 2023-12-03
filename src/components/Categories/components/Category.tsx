import React from 'react';
import { Box, BoxProps, Icon, IconName, Text } from '@components';
import { Pressable, View } from 'react-native';

interface CategoryProps {
  boxProps?: BoxProps;
  label: string;
  icon: IconName;
  onPress: () => void;
  isSelected: boolean;
}

export function Category({
  boxProps,
  label,
  icon = 'bellOn',
  onPress,
  isSelected = false,
}: CategoryProps) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 18,
        paddingVertical: 8,
      }}>
      <Box flexGrow={1} flexShrink={1} {...boxProps} alignItems="center">
        <Box
          borderRadius="s22"
          alignItems="center"
          justifyContent="center"
          width={44}
          height={44}
          marginBottom="s8"
          backgroundColor="grayWhite"
          shadowColor="grayBlack"
          elevation={isSelected ? 8 : 3}
          alignContent="center"
          shadowOpacity={0.37}
          shadowRadius={7.49}
          shadowOffset={{
            width: 0,
            height: 12,
          }}>
          <View style={{ opacity: isSelected ? 1 : 0.3 }}>
            <Icon name={icon} size={20} />
          </View>
        </Box>
        <Text
          fontSize={14}
          fontWeight="600"
          color="gray1"
          textAlign="center"
          opacity={isSelected ? 1 : 0.3}>
          {label.length > 10 ? `${label.slice(0, 8)}...` : label}
        </Text>
      </Box>
    </Pressable>
  );
}
