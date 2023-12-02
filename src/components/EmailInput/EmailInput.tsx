import React from 'react';

import { Icon, TextInput, TextInputProps } from '@components';

export type EmailInputProps = Omit<TextInputProps, 'LeftComponent'>;
export function EmailInput(props: EmailInputProps) {
  return (
    <TextInput
      {...props}
      LeftComponent={<Icon color="gray2" name={'userFill'} size={24} />}
    />
  );
}
