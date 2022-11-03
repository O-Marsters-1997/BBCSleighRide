import { DefaultTheme, createGlobalStyle } from "styled-components";
import RalewayRegularTTF from "../assets/fonts/RalewayRegularTTF.ttf";
import RalewayRegularWOFF from "../assets/fonts/RalewayRegularWOFF.woff";
// import RalewayItalicTTF from "../assets/fonts/RalewayItalic.ttf";
// import RalewayItalicWOFF from "../assets/fonts/RalewayItalic.woff";
// import * as RalewayBoldTTF from "../assets/fonts/RalewayBold.ttf";
// import * as RalewayBoldWOFF from "../assets/fonts/RalewayBold.woff";
// import * as RalewayBoldItalicTTF from "../assets/fonts/RalewayBoldItalic.ttf";
// import * as RalewayBoldItalicWOFF from "../assets/fonts/RalewayBoldItalic.woff";
// import * as RalewayExtraBoldTTF from "../assets/fonts/RalewayExtraBold.ttf";
// import * as RalewayExtraBoldWOFF from "../assets/fonts/RalewayExtraBold.woff";
// import * as RalewayExtraBoldItalicTTF from "../assets/fonts/RalewayExtraBoldItalic.ttf";
// import * as RalewayExtraBoldItalicWOFF from "../assets/fonts/RalewayExtraBoldItalic.woff";

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
    font-family: 'Ralewayddd';
    font-style: normal;
    font-weight: normal;
    src: url(${RalewayRegularTTF}) format('ttf'),
         url(${RalewayRegularWOFF}) format('woff');
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
