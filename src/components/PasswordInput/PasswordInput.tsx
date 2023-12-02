import React, { useState } from 'react';

import { Icon, TextInput, TextInputProps } from '@components';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;
export function PasswordInput(props: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  function toggleSecureTextEntry() {
    setIsSecureTextEntry(prev => !prev);
  }
  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...props}
      LeftComponent={<Icon color="gray2" name={'lockFill'} size={24} />}
      RightComponent={
        <Icon
          onPress={toggleSecureTextEntry}
          color="gray2"
          size={24}
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
        />
      }
    />
  );
}
