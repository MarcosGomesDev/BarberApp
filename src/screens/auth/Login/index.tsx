import {
  Box,
  Button,
  FormPasswordInput,
  FormTextInput,
  Icon,
  Screen,
  Text,
} from '@components';
import React from 'react';
import { useForm } from 'react-hook-form';
import { LoginSchema, loginSchema } from './loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToastService } from '@services';

export function LoginScreen() {
  const { showToast } = useToastService();

  const { control, formState, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({ email, password }: LoginSchema) {
    showToast({
      type: 'error',
      message: `E-mail: ${email} ou Senha: ${password} inválidos`,
    });
  }

  return (
    <Screen scrollable>
      <Box style={{ width: '100%', alignItems: 'center' }}>
        <Icon name="logo" size={200} color="white" />
      </Box>
      <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>
      <Text mb="s40" preset="paragraphLarge">
        Digite seu e-mail e senha para entrar
      </Text>
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's24' }}
      />
      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: 's20' }}
      />
      <Button
        title="Entrar"
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
      />
      <Button
        onPress={() => {}}
        preset="underline"
        marginTop="s12"
        textPreset="paragraphSmall"
        title="Criar uma conta"
      />
    </Screen>
  );
}
