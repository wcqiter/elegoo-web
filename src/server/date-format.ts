const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/** Today / tomorrow / the day after — else empty string */
function relativeDayLabel(date: Date, now: Date): string {
  const startOf = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  const diffDays = Math.round((startOf(date) - startOf(now)) / 86_400_000);
  switch (diffDays) {
    case 0: return 'Today';
    case 1: return 'Tomorrow';
    case 2: return 'In 2 days';
    case -1: return 'Yesterday';
    case -2: return '2 days ago';
    default: return '';
  }
}

/** "Today", "Tomorrow", "3/15 Sat" — relative label if we have one, else date + weekday. */
export function formatDateWithDay(date: Date, now = new Date()): string {
  const rel = relativeDayLabel(date, now);
  if (rel) return rel;
  const wd = WEEKDAYS[date.getDay()];
  const md = `${date.getMonth() + 1}/${date.getDate()}`;
  return `${md} ${wd}`;
}