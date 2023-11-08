const moment = require('moment-timezone');

function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function formatTimestampToDateTime(timestamp: number) {
  const formattedDateTime = moment.unix(timestamp).tz('America/Argentina/Buenos_Aires').format('HH:mm');
  return formattedDateTime;
}

export function formatDateToSpanish(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }

  const formatter = new Intl.DateTimeFormat('es-ES', options)
  const capitalizeDate = capitalizeFirstLetter(formatter.format(date))
  return capitalizeDate
}