import { BarberShop, Service } from './barbershop';
import { Status } from './status';

export interface Reservation {
  status: Status;
  service: Service;
  barbershop: Partial<BarberShop>;
  date: Date;
}
