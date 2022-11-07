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
      h1: Utils.FontVariant;
      h2: Utils.FontVariant;
      h3?: Utils.FontVariant;
      h4?: Utils.FontVariant;
      h5?: Utils.FontVariant;
      h6?: Utils.FontVariant;
      subtitle1?: Utils.FontVariant;
      subtitle2?: Utils.FontVariant;
      body1: Utils.FontVariant;
      body2?: Utils.FontVariant;
      caption?: Utils.FontVariant;
      overline?: Utils.FontVariant;
      inherit?: Utils.FontVariant;
    };
  }
}
