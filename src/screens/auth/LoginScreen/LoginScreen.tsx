import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useToastService } from '@services';
import { useForm } from 'react-hook-form';

import {
  Text,
  Screen,
  Button,
  FormEmailInput,
  FormPasswordInput,
  Icon,
} from '@components';

import { LoginSchema, loginSchema } from './loginSchema';
import { View } from 'react-native';

export function LoginScreen({ navigation }: any) {
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

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <Screen scrollable>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Icon name="logoFill" size={130} color="gray0" />
      </View>
      <Text
        marginBottom="s8"
        marginTop="s20"
        preset="headingLarge"
        textAlign="center">
        Bem Vindo
      </Text>

      <FormEmailInput
        control={control}
        name="email"
        label="Email"
        placeholder="email@teste.com"
        boxProps={{ mb: 's20' }}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="********"
        boxProps={{ mb: 's20' }}
      />

      <Text
        onPress={navigateToForgotPasswordScreen}
        color="primary"
        preset="paragraphSmall"
        bold>
        Esqueci minha senha
      </Text>

      <Button
        // disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        marginTop="s32"
        title="Entrar"
      />
      <Button
        onPress={navigateToSignUpScreen}
        preset="outline"
        marginTop="s12"
        title="Criar uma conta"
      />
    </Screen>
  );
}
