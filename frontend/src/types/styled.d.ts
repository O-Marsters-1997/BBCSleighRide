// styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      primary: Utils.Palette;
      secondary: Utils.Palette;
      primaryText: Utils.Palette;
      grey: Utils.Palette;
    };
    typography: {
      fontWeight?: Utils.FontWeight;
      fontFamily: Utils.FontFamily;
      fontSize: Utils.FontSize;
    };
  }
}
