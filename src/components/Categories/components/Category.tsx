import React from 'react';
import { Box, BoxProps, Text } from '@components';
import { Pressable, StyleProp, View } from 'react-native';

interface CategoryProps {
  boxProps?: BoxProps;
  label: string;
  icon: string;
  onPress: () => void;
  isSelected: boolean;
  style?: StyleProp<any>;
}

export function Category({
  boxProps,
  label,
  icon,
  onPress,
  isSelected = false,
  style,
}: CategoryProps) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      style={[
        {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 16,
          paddingVertical: 8,
        },
        style,
      ]}>
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
          marginHorizontal="s8"
          shadowOpacity={0.8}
          shadowRadius={7.49}
          shadowOffset={{
            width: 0,
            height: 6,
          }}>
          <View
            style={{
              opacity: isSelected ? 1 : 0.3,
              height: '100%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{ transform: [{ scale: 1.5 }] }}>{icon}</Text>
          </View>
        </Box>
        <Text
          preset="paragraphMedium"
          bold
          color="gray1"
          textAlign="center"
          opacity={isSelected ? 1 : 0.3}>
          {label.length > 10 ? `${label.slice(0, 8)}...` : label}
        </Text>
      </Box>
    </Pressable>
  );
}
