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
    h1: {
      fontWeight: 800,
      fontFamily: "Roboto",
      fontSize: 3,
    },
    h2: {
      fontWeight: 700,
      fontFamily: "Raleway, sans-serif",
      fontSize: 2.5,
    },
    h3: {
      fontWeight: 700,
      fontFamily: "Raleway, sans-serif",
      fontSize: 1.8,
    },
    h4: {
      fontWeight: 700,
      fontFamily: "Raleway, sans-serif",
      fontSize: 1.4,
    },
    h5: {
      fontWeight: 700,
      fontFamily: "Raleway, sans-serif",
      fontSize: 1.2,
    },
    body1: {
      fontWeight: 500,
      fontFamily: "Roboto",
      fontSize: 1.1,
    },
  },
  viewports: {
    mobileS: 320,
    mobileL: 425,
    tabletS: 600,
    tablet: 768,
    laptop: 1024,
    laptopM: 1225,
    laptopL: 1448,
    desktop: 2560,
  },
  modifiers: {
    x1: 0.7,
    x2: 0.8,
    x3: 0.9,
    x4: 1,
    x5: 1.1,
    x6: 1.2,
    x7: 1.3,
  },
};

export const GlobalStyle = createGlobalStyle`

  
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src:  url(${RalewayRegularWOFF}) format('woff'),
           url(${RalewayRegularTTF}) format('ttf');
    }

    @font-face {
    font-family: 'Raleway';
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src:  url(${RalewayItalicWOFF}) format('woff'),
           url(${RalewayItalicTTF}) format('ttf');
    }

    @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src:  url(${RalewayBoldWOFF}) format('woff'),
           url(${RalewayBoldTTF}) format('ttf');
    }

    @font-face {
    font-family: 'Raleway';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src:  url(${RalewayBoldItalicWOFF}) format('woff'),
           url(${RalewayBoldItalicTTF}) format('ttf');
    }

      @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src:  url(${RalewayExtraBoldTTF}) format('woff'),
           url(${RalewayExtraBoldWOFF}) format('ttf');
    }

      @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: italic;
    font-display: swap;
    src:  url(${RalewayExtraBoldItalicTTF}) format('woff'),
           url(${RalewayExtraBoldItalicWOFF}) format('ttf');
    }

    
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: normal;
      font-display: swap;
      src:  url(${RobotoRegular1}) format('woff'),
      url(${RobotoRegular2}) format('woff2');
    }
    
    @font-face {
      font-family: 'Roboto Italic';
      font-style: italic;
      font-weight: normal;
      font-display: swap;
      src:  url(${RobotoRegularItalic1}) format('woff'),
      url(${RobotoRegularItalic2}) format('woff2');
    }
    
    @font-face {
    font-family: 'Roboto Bold';
    font-style: normal;
    font-weight: lighter;
    font-display: swap;
    src:  url(${Roboto5001}) format('woff'),
           url(${Roboto5002}) format('woff2');
    }

     @font-face {
    font-family: 'Roboto Bold Italic';
    font-style: italic;
    font-weight: lighter;
    font-display: swap;
    src:  url(${Roboto500Italic1}) format('woff'),
           url(${Roboto500Italic2}) format('woff2');
    }
     @font-face {
    font-family: 'Roboto Extra Bold';
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src:  url(${Roboto7001}) format('woff'),
           url(${Roboto7002}) format('woff2');
    }

     @font-face {
    font-family: 'Roboto Extra Bold Italic';
    font-style: italic;
    font-weight: normal;
    font-display: swap;
    src:  url(${Roboto700Italic1}) format('woff'),
           url(${Roboto700Italic2}) format('woff2');
    }
        
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 18px;
};
`;
