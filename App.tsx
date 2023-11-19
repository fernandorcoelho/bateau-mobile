import React from 'react';

import { AuthContextProvider } from '@contexts/AuthContext';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';
import Routes from '@routes/index';
import { Box, NativeBaseProvider } from 'native-base';

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
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      )}
    </NativeBaseProvider>
  );
}
