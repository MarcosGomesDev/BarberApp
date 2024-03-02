import { BarberShopInfoCard } from '@components';

const ordemDiasDaSemana: string[] = [
  'segunda',
  'terça',
  'quarta',
  'quinta',
  'sexta',
  'sábado',
  'domingo',
];

export function sortDaysOfWeek(
  weekDays: BarberShopInfoCard['schedule'],
): BarberShopInfoCard['schedule'] {
  return weekDays.sort((a, b) => {
    return (
      ordemDiasDaSemana.indexOf(a.dayName.toLowerCase()) -
      ordemDiasDaSemana.indexOf(b.dayName.toLowerCase())
    );
  });
}
