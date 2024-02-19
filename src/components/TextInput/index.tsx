import React, { useRef } from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';

import { useAppTheme } from '@hooks';
import { Box, BoxProps } from '../Box';
import { $fontFamily, $fontSizes, Text } from '../Text';

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  errorMessage?: string;
  RightComponent?: React.ReactElement;
  LeftComponent?: React.ReactElement;
  boxProps?: BoxProps;
}
export function TextInput({
  label,
  errorMessage,
  RightComponent,
  LeftComponent,
  boxProps,
  ...rnTextInputProps
}: TextInputProps) {
  const { colors } = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const $textInputContainer: BoxProps = {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: errorMessage ? 'error' : 'gray1',
    padding: 's12',
    borderRadius: 's12',
  };

  function focusInput() {
    inputRef.current?.focus();
  }
  return (
    <Box flexGrow={1} flexShrink={1} {...boxProps}>
      <Pressable onPress={focusInput}>
        {label && (
          <Box
            flexDirection="row"
            justifyContent="space-between"
            paddingHorizontal="s8">
            <Text preset="paragraphMedium" marginBottom="s4">
              {label}
            </Text>
            {errorMessage && (
              <Text color="error" preset="paragraphSmall" bold>
                {errorMessage}
              </Text>
            )}
          </Box>
        )}
        <Box {...$textInputContainer}>
          {LeftComponent && (
            <Box justifyContent="center" mr="s16">
              {LeftComponent}
            </Box>
          )}
          <RNTextInput
            autoCapitalize="none"
            ref={inputRef}
            placeholderTextColor={colors.gray1}
            style={$textInputStyle}
            {...rnTextInputProps}
          />
          {RightComponent && (
            <Box justifyContent="center" ml="s16">
              {RightComponent}
            </Box>
          )}
        </Box>
      </Pressable>
    </Box>
  );
}

export const $textInputStyle: TextStyle = {
  padding: 0,
  flexGrow: 1,
  flexShrink: 1,
  color: 'white',
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};
