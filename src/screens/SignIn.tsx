import React from 'react';

import { Input, Button, VStack, Text } from 'native-base';

export default function SignIn() {
  return (
    <VStack alignItems="center" justifyContent="center" w="full">
      <Text color="gray.100" fontWeight="bold" fontSize="7xl" mb="10">
        Bateau
      </Text>
      <VStack space={4} alignItems="center" justifyContent="center" w="full">
        <Input
          variant="outline"
          placeholder="E-mail"
          h="12"
          _focus={{
            bgColor: 'coolGray.900',
            borderColor: 'coolGray.100',
            placeholderTextColor: 'white'
          }}
        />
        <Input
          variant="outline"
          placeholder="Senha"
          h="12"
          _focus={{
            bgColor: 'coolGray.900',
            borderColor: 'coolGray.100',
            placeholderTextColor: 'white'
          }}
          type="password"
        />
        <Button
          variant="solid"
          w="full"
          h="12"
          bg="dark.100"
          _pressed={{ bgColor: 'dark.200' }}
        >
          Entrar
        </Button>
      </VStack>
    </VStack>
  );
}
