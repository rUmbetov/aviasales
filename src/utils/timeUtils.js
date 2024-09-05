import { addMinutes } from 'date-fns';

export function formatTime(dateString) {
  const date = new Date(dateString);
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

export function calculateEndTime(date, duration) {
  const startDate = new Date(date);
  const endDate = addMinutes(startDate, duration);
  return formatTime(endDate.toISOString());
}

export const convertTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${hours}ч ${remainingMinutes}мин`;
};