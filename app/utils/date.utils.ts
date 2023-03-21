import { DaysOfWeek } from '../enums/days-of-week.enum.js';

export class DateUtils {
  static convertStringToDate(dateString: string): Date {
    const regex = /-/g;
    return new Date(dateString.replace(regex, ','));
  }

  static isBussinesDay(date: Date): boolean {
    const noWorkingDays = [DaysOfWeek.SUNDAY, DaysOfWeek.SATURDAY];

    return !noWorkingDays.includes(date.getDay());
  }
}
