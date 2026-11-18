/** Format a date for display in Bosnian, e.g. "8. oktobar 2026.". */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('bs-BA', { dateStyle: 'long' }).format(date);
}
