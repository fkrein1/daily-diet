const formatDateToTime = (dateString: string) => {
  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${String(minutes).padStart(2, '0')}`;
};

const formatDayOfYear = (value: string) => {
  const dateObject = new Date(value);
  return dateObject.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });
};

export function formatPercentage(decimalNumber: number) {
  const percentageString =
    (decimalNumber * 100).toFixed(2).replace('.', ',') + '%';
  return percentageString;
}

export const helpers = { formatDateToTime, formatDayOfYear, formatPercentage };
