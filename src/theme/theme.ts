import { createTheme } from '@shopify/restyle';
import { ViewStyle } from 'react-native/types';

export const palette = {
  greenPrimary: '#074C4E',
  greenPrimaryLight: '#EAF6F6',
  carrotSecondary: '#F86F2D',
  carrotSecondaryLight: '#FAE6DD',
  greenSuccess: '#4ABC86',
  greenSuccessLight: '#D8FFEC',
  redError: '#EA3838',
  redErrorLight: '#FBECEC',
  gold: '#CCAC00',
  purple: '#8162FF',

  white: '#FFFFFF',
  black: '#000000',
  gray1: '#2C2C2C',
  gray2: '#1A1B1F',
  gray3: '#B3B3B3',
  gray4: '#E1E1E1',
  gray5: '#F5F5F5',
  grayWhite: '#141518',
};

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.gold,
    primaryContrast: palette.grayWhite,

    buttonPrimary: palette.purple,

    background: palette.grayWhite,
    backgroundContrast: palette.black,

    error: palette.redError,
    errorLight: palette.redErrorLight,

    success: palette.greenSuccess,
    successLight: palette.greenSuccessLight,

    market: palette.carrotSecondary,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
  },
  borderRadii: {
    s8: 8,
    s12: 12,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
  },

  textVariants: {
    defaults: {},
  },
});

export const $shadowProps: ViewStyle = {
  elevation: 10,
  shadowColor: '#000',
  shadowOpacity: 0.05,
  shadowRadius: 12,
  shadowOffset: { width: 0, height: -3 },
};

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
