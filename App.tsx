import React from 'react';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';
import { Box, NativeBaseProvider } from 'native-base';

import SignIn from './src/screens/SignIn';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold
  });

  return (
    <NativeBaseProvider>
      {!fontsLoaded ? (
        <Box>Carregando fontes...</Box>
      ) : (
        <Box
          flex={1}
          alignItems="center"
          justifyContent="center"
          bg="black"
          px="16"
        >
          <SignIn />
        </Box>
      )}
    </NativeBaseProvider>
  );
}
