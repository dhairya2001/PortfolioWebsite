import { useColorMode } from '@chakra-ui/react';
import { createContext, useContext, useState } from 'react';

const ColorModeContext = createContext();

export const useColorModeContext = () => useContext(ColorModeContext);

export const ColorModeProvider = ({ children }) => {
//   const [colorMode, setColorMode] = useState('light'); 
    const {colorMode,toggleColorMode}=useColorMode();
//   const toggleColorMode = () => {
//     setColorMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//   };

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};
