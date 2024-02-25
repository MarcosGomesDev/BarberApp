import { Status } from '@interfaces';
import { ResponsiveValue } from '@shopify/restyle';

export function getStatusColor(status: Status):
  | ResponsiveValue<
      'gray3' | 'purple' | 'redError',
      // @ts-ignore
      unknown
    >
  | undefined {
  switch (status) {
    case Status.FINISHED:
      return 'gray3';
    case Status.CONFIRMED:
      return 'purple';
    case Status.CANCELLED:
      return 'redError';
  }
}

export function getStatusBackgroundColor(status: Status):
  | ResponsiveValue<
      'gray1' | 'darkPurple' | 'lightRed',
      // @ts-ignore
      unknown
    >
  | undefined {
  switch (status) {
    case Status.FINISHED:
      return 'gray1';
    case Status.CONFIRMED:
      return 'darkPurple';
    case Status.CANCELLED:
      return 'lightRed';
    default:
      return undefined;
  }
}

export function translateStatus(status: Status): string {
  switch (status) {
    case Status.FINISHED:
      return 'Finalizado';
    case Status.CONFIRMED:
      return 'Confirmado';
    case Status.CANCELLED:
      return 'Cancelado';
  }
}
