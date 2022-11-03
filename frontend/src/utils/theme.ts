import { DefaultTheme, createGlobalStyle } from "styled-components";
import RalewayRegularTTF from "../assets/fonts/RalewayRegularTTF.ttf";
import RalewayRegularWOFF from "../assets/fonts/RalewayRegularWOFF.woff";
import RalewayItalicTTF from "../assets/fonts/RalewayItalic.ttf";
import RalewayItalicWOFF from "../assets/fonts/RalewayItalic.woff";
import RalewayBoldTTF from "../assets/fonts/RalewayBold.ttf";
import RalewayBoldWOFF from "../assets/fonts/RalewayBold.woff";
import RalewayBoldItalicTTF from "../assets/fonts/RalewayBoldItalic.ttf";
import RalewayBoldItalicWOFF from "../assets/fonts/RalewayBoldItalic.woff";
import RalewayExtraBoldTTF from "../assets/fonts/RalewayExtraBold.ttf";
import RalewayExtraBoldWOFF from "../assets/fonts/RalewayExtraBold.woff";
import RalewayExtraBoldItalicTTF from "../assets/fonts/RalewayExtraBoldItalic.ttf";
import RalewayExtraBoldItalicWOFF from "../assets/fonts/RalewayExtraBoldItalic.woff";
import RobotoRegular1 from "../assets/fonts/RobotoLatinRegular.woff";
import RobotoRegular2 from "../assets/fonts/RobotoLatinRegular.woff2";
import RobotoRegularItalic1 from "../assets/fonts/roboto-v30-latin-italic.woff";
import RobotoRegularItalic2 from "../assets/fonts/roboto-v30-latin-italic.woff2";
import Roboto7001 from "../assets/fonts/roboto-v30-latin-700.woff";
import Roboto7002 from "../assets/fonts/roboto-v30-latin-700.woff2";
import Roboto700Italic1 from "../assets/fonts/roboto-v30-latin-700italic.woff";
import Roboto700Italic2 from "../assets/fonts/roboto-v30-latin-700italic.woff2";
import Roboto5001 from "../assets/fonts/roboto-v30-latin-500.woff";
import Roboto5002 from "../assets/fonts/roboto-v30-latin-500.woff2";
import Roboto500Italic1 from "../assets/fonts/roboto-v30-latin-500italic.woff";
import Roboto500Italic2 from "../assets/fonts/roboto-v30-latin-500italic.woff2";

export const theme: DefaultTheme = {
  borderRadius: "4px",
  palette: {
    primary: {
      main: "rgb(157,10,14)",
      contrastText: "#c7080f",
    },
    secondary: {
      main: "rgb(37,119,35)",
      contrastText: "#ffffff",
    },
    grey: {
      main: "rgb(49, 54, 56)",
      contrastText: "rgb(151, 151, 151)",
    },
    primaryText: {
      main: "rgba(242, 242, 242, 1)",
      contrastText: "rgba(0, 0, 0, 1)",
    },
  },
  typography: {
    fontWeight: {
      light: 300,
      regular: 500,
      bold: 700,
      extraBold: 800,
    },
    fontFamily: {
      body: "Roboto",
      headings: "Raleway",
    },
    fontSize: {
      small: 12,
      medium: 14,
      mediumLarge: 16,
      extraLarge: 80,
    },
  },
};

export const GlobalStyle = createGlobalStyle`

  
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: normal;
    src:  url(${RalewayRegularWOFF}) format('woff'),
           url(${RalewayRegularTTF}) format('ttf');
    }

    @font-face {
    font-family: 'Raleway Italic';
    font-style: italic;
    font-weight: normal;
    src:  url(${RalewayItalicWOFF}) format('woff'),
           url(${RalewayItalicTTF}) format('ttf');
    }

    @font-face {
    font-family: 'Raleway Bold';
    font-style: normal;
    font-weight: bold;
    src:  url(${RalewayBoldWOFF}) format('woff'),
           url(${RalewayBoldTTF}) format('ttf');
    }

    @font-face {
    font-family: 'Raleway Bold Italic';
    font-style: italic;
    font-weight: bold;
    src:  url(${RalewayBoldItalicWOFF}) format('woff'),
           url(${RalewayBoldItalicTTF}) format('ttf');
    }

      @font-face {
    font-family: 'Raleway Extra Bold';
    font-style: italic;
    font-weight: bold;
    src:  url(${RalewayExtraBoldTTF}) format('woff'),
           url(${RalewayExtraBoldWOFF}) format('ttf');
    }

      @font-face {
    font-family: 'Raleway Extra Bold Italic';
    font-style: italic;
    font-weight: bold;
    src:  url(${RalewayExtraBoldItalicTTF}) format('woff'),
           url(${RalewayExtraBoldItalicWOFF}) format('ttf');
    }

    
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: normal;
      src:  url(${RobotoRegular1}) format('woff'),
      url(${RobotoRegular2}) format('woff2');
    }
    
    @font-face {
      font-family: 'Roboto Italic';
      font-style: italic;
      font-weight: normal;
      src:  url(${RobotoRegularItalic1}) format('woff'),
      url(${RobotoRegularItalic2}) format('woff2');
    }
    
    @font-face {
    font-family: 'Roboto Bold';
    font-style: normal;
    font-weight: lighter;
    src:  url(${Roboto5001}) format('woff'),
           url(${Roboto5002}) format('woff2');
    }

     @font-face {
    font-family: 'Roboto Bold Italic';
    font-style: italic;
    font-weight: lighter;
    src:  url(${Roboto500Italic1}) format('woff'),
           url(${Roboto500Italic2}) format('woff2');
    }
     @font-face {
    font-family: 'Roboto Extra Bold';
    font-style: normal;
    font-weight: normal;
    src:  url(${Roboto7001}) format('woff'),
           url(${Roboto7002}) format('woff2');
    }

     @font-face {
    font-family: 'Roboto Extra Bold Italic';
    font-style: italic;
    font-weight: normal;
    src:  url(${Roboto700Italic1}) format('woff'),
           url(${Roboto700Italic2}) format('woff2');
    }
        
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
};

h1 {
  font-size: ${({ theme }) => theme.typography?.fontSize?.extraLarge}px;
  color: ${({ theme }) => theme.palette.primaryText.main};
}

p {
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography?.fontSize?.medium}px;
  font-weight: ${({ theme }) => theme.typography?.fontWeight?.regular};
}

`;
