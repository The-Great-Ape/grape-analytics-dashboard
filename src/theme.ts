import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: 'Gilroy Bold, sans-serif',
    body: 'Gilroy Medium, sans-serif',
  },
});

export default theme;
