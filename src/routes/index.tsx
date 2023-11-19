import { useAuth } from '@hooks/useAuth';
import SignIn from '@screens/SignIn';
import { HStack, Spinner, Heading, Box, StatusBar, Text } from 'native-base';

export default function Routes() {
  const { isAuthenticated, loadingStorageUser, user } = useAuth();

  if (loadingStorageUser) {
    return (
      <Box
        flex={1}
        alignItems="center"
        justifyContent="center"
        bg="gray.900"
        px="16"
      >
        <HStack space={2} justifyContent="center">
          <Spinner accessibilityLabel="Loading user" />
          <Heading color="primary.500" fontSize="md">
            Carregando dados de usuário...
          </Heading>
        </HStack>
      </Box>
    );
  }

  return (
    <Box
      flex={1}
      alignItems="center"
      justifyContent="center"
      bg="gray.900"
      px="16"
    >
      <StatusBar barStyle="dark-content" />

      {!isAuthenticated ? (
        <SignIn />
      ) : (
        <Text color="white">Colé, {user.nickname}!</Text>
      )}
    </Box>
  );
}
