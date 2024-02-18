import { HeaderSimple } from '../components/Header/Header';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import { ChakraProvider, Container } from '@chakra-ui/react';
import React, { useEffect,useMemo } from 'react';
import { Footer } from '../components/Footer/Footer';
import fonts from 'google-fonts';
import { ColorModeProvider } from '../utils/colorModeContext';

function MyApp({ Component, pageProps }) {
  function loadFonts() {
    fonts.add({
      Poppins: ['300', '400', '500', '600', '700'],
    });
  }
  useEffect(()=>{
    loadFonts();
  },[])
  return(
    <ChakraProvider>
      <ColorModeProvider>
        <HeaderSimple/>
          <Container
            maxW='100%' 
            centerContent 
            style={{ 
              paddingTop: '100px', 
              fontFamily:'Poppins,sans-serif' }}
              >
            <Component {...pageProps}/>
          </Container>
        <Footer/>
      </ColorModeProvider>
    </ChakraProvider>
  ) 
}

export default MyApp;
