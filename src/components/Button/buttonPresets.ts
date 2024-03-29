import { ThemeColors } from '@theme';
import { TouchableOpacityBoxProps } from '../Box';

import { ButtonPreset } from './index';

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
}

export const buttonPresets: Record<
  ButtonPreset,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'buttonPrimary',
      },
      content: 'white',
    },
    disabled: {
      container: {
        backgroundColor: 'gray1',
      },
      content: 'ice',
    },
  },
  outline: {
    default: {
      container: {
        borderWidth: 1,
        borderColor: 'gray1',
      },
      content: 'white',
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'gray4',
      },
      content: 'gray2',
    },
  },
  default: {
    default: {
      container: {
        backgroundColor: 'gray1',
      },
      content: 'white',
    },
    disabled: {
      container: {
        backgroundColor: 'gray1',
      },
      content: 'ice',
    },
  },

  underline: {
    default: {
      container: {},
      content: 'buttonPrimary',
    },
    disabled: {
      container: {},
      content: 'gray2',
    },
  },
};
