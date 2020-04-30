/**
 *  Корректировка окончание месяцев
 *  @summary Месяц
 *  @returns string
 */

const mapperMonth = (month: number): string => {
  switch (month) {
    case 1:
      return "месяц";
    case 2:
      return "месяца";
    case 3:
      return "месяца";
    case 4:
      return "месяца";
    default:
      return "месяцев";
  }
};

/**
 *  Проверка месяца
 *  @summary Месяц
 *  @returns boolean
 */

const monthZero = (date: number): boolean => date % 12 === 0;

/**
 *  Проверка месяца
 *  @summary Месяц
 *  @returns string
 */

export const mapper = (date: number): any => {
  if (date < 12) {
    return `${date} ${mapperMonth(date % 12)}`;
  }
  if (date >= 12 && date < 24) {
    if (monthZero(date)) {
      return "1 год";
    }
    return `1 год и ${date % 12}  ${mapperMonth(date % 12)} `;
  }
  if (date >= 24 && date < 36) {
    if (monthZero(date)) {
      return "2 года";
    }
    return `2 года и ${date % 12}  ${mapperMonth(date % 12)} `;
  }
  if (date >= 36 && date < 48) {
    if (monthZero(date)) {
      return "3 года";
    }
    return `3 года и ${date % 12}  ${mapperMonth(date % 12)} `;
  }
  if (date >= 48 && date < 60) {
    if (monthZero(date)) {
      return "4 года";
    }
    return `4 года и ${date % 12}  ${mapperMonth(date % 12)} `;
  }
  if (date >= 60) {
    return "5 лет ";
  }
};
