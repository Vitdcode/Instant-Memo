interface ElevationColors {
  level0: string;
  level1: string;
  level2: string;
  level3: string;
  level4: string;
  level5: string;
}

interface ColorPalette {
  textColor: string;
  primary: string;
  onPrimary: string;
  red: string;
  lightRed: string;
  gray: string;
  lightGray: string;
  blue: string;
  yellow: string;
  lightYellow: string;
  purple: string;
  lightPurple: string;
  green: string;
  dialog: string;
  statusBar: string;
  semiTransparent: string;
  pickerColor: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;
  error: string; // Note: Ensure this is intended to be a color string (like hex, rgba, rgb)
  onError: string;
  errorContainer: string;
  onErrorContainer: string;
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  outline: string;
  outlineVariant: string;
  shadow: string;
  scrim: string;
  inverseSurface: string;
  inverseOnSurface: string;
  inversePrimary: string;
  elevation: ElevationColors; // Use the ElevationColors interface here
  surfaceDisabled: string;
  onSurfaceDisabled: string;
  backdrop: string;
}

interface AppColors {
  light: ColorPalette;
  dark: ColorPalette;
}

const Colors: AppColors = {
  light: {
    textColor: "rgb(29, 30, 32)",
    primary: "rgb(34, 116, 106)",
    onPrimary: "rgb(255, 255, 255)",
    red: "rgb(219, 85, 85)",
    lightRed: "rgba(167, 63, 63, 0.3)",
    gray: "#3b3b3b",
    lightGray: "hsl(213, 31.00%, 94.30%)",
    blue: "rgb(70, 122, 172)",
    yellow: "rgb(245, 226, 171)",
    lightYellow: "rgb(248, 243, 228)",
    purple: "rgb(148, 101, 255)",
    lightPurple: "rgb(148, 101, 255)",
    green: "rgb(105, 182, 125)",
    dialog: "rgb(240, 239, 237)",
    statusBar: "rgb(228, 228, 218)",
    semiTransparent: "rgba(233, 233, 233, 0.32)",
    pickerColor: "rgb(236, 239, 244)",
    primaryContainer: "rgb(118, 248, 226)",
    onPrimaryContainer: "rgb(0, 32, 27)",
    secondary: "rgb(149, 195, 166)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(224, 209, 209)",
    onSecondaryContainer: "rgb(6, 32, 27)",
    tertiary: "rgb(68, 97, 121)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(202, 230, 255)",
    onTertiaryContainer: "rgb(0, 30, 48)",
    error: "rgba(245, 243, 241, 0.76)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(247, 248, 252)",
    onBackground: "rgb(25, 28, 27)",
    surface: "rgb(250, 253, 251)",
    onSurface: "rgb(25, 28, 27)",
    surfaceVariant: "rgb(218, 229, 225)",
    onSurfaceVariant: "rgb(63, 73, 70)",
    outline: "rgb(111, 121, 118)",
    outlineVariant: "rgb(190, 201, 197)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(45, 49, 48)",
    inverseOnSurface: "rgb(239, 241, 239)",
    inversePrimary: "rgb(85, 219, 198)",
    elevation: {
      level0: "transparent",
      level1: "rgb(236, 241, 239)",
      level2: "rgb(230, 241, 238)",
      level3: "rgb(223, 237, 234)",
      level4: "rgb(220, 236, 232)",
      level5: "rgb(215, 233, 229)",
    },
    surfaceDisabled: "rgba(25, 28, 27, 0.12)",
    onSurfaceDisabled: "rgba(25, 28, 27, 0.38)",
    backdrop: "rgba(41, 50, 48, 0.4)",
  },
  dark: {
    textColor: "rgb(255, 255, 255)",
    primary: "rgb(72, 129, 123)",
    onPrimary: "rgb(45, 55, 72)",
    red: "rgb(219, 85, 85)",
    lightRed: "rgb(255, 204, 204)",
    gray: "rgb(206, 206, 206)",
    lightGray: "rgb(55, 62, 75)",
    blue: "rgb(70, 122, 172)",
    yellow: "rgb(254, 239, 195)",
    lightYellow: "rgb(58, 57, 54)",
    purple: "rgb(148, 101, 255)",
    lightPurple: "rgba(71, 160, 130, 0.79)",
    green: "rgb(105, 182, 125)",
    dialog: "rgb(97, 96, 94)",
    statusBar: "rgb(31, 31, 30)",
    semiTransparent: "rgba(255, 255, 255, 0.3)",
    pickerColor: "rgb(49, 62, 68)",
    primaryContainer: "rgb(0, 80, 71)",
    onPrimaryContainer: "rgb(118, 248, 226)",
    secondary: "rgb(149, 195, 166)",
    onSecondary: "rgb(28, 53, 48)",
    secondaryContainer: "rgb(51, 75, 70)",
    onSecondaryContainer: "rgb(205, 232, 225)",
    tertiary: "rgb(172, 202, 229)",
    onTertiary: "rgb(19, 51, 72)",
    tertiaryContainer: "rgb(44, 74, 96)",
    onTertiaryContainer: "rgb(202, 230, 255)",
    error: "rgb(255, 180, 171)",
    onError: "rgb(105, 0, 5)",
    errorContainer: "rgb(147, 0, 10)",
    onErrorContainer: "rgb(255, 180, 171)",
    background: "rgb(26, 32, 44)",
    onBackground: "rgb(224, 227, 225)",
    surface: "rgb(25, 28, 27)",
    onSurface: "rgb(224, 227, 225)",
    surfaceVariant: "rgb(63, 73, 70)",
    onSurfaceVariant: "rgb(190, 201, 197)",
    outline: "rgb(137, 147, 144)",
    outlineVariant: "rgb(63, 73, 70)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(224, 227, 225)",
    inverseOnSurface: "rgb(45, 49, 48)",
    inversePrimary: "rgb(0, 107, 94)",
    elevation: {
      level0: "transparent",
      level1: "rgb(47, 54, 53)",
      level2: "rgb(30, 43, 41)",
      level3: "rgb(32, 49, 46)",
      level4: "rgb(32, 51, 48)",
      level5: "rgb(50, 70, 66)",
    },
    surfaceDisabled: "rgba(224, 227, 225, 0.12)",
    onSurfaceDisabled: "rgba(224, 227, 225, 0.38)",
    backdrop: "rgba(41, 50, 48, 0.4)",
  },
};

export default Colors;
