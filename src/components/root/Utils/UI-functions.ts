
export function formatDateDifference(date: Date): string {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
  
    const targetDate = new Date(date);
    targetDate.setHours(0, 0, 0, 0);
  
    const dayDifference = Math.floor((targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    const weekDifference = Math.floor(dayDifference / 7);
  
    if (dayDifference === 0) {
      return 'היום';
    } else if (dayDifference === 1) {
      return 'מחר';
    } else if (dayDifference === -1) {
      return 'אתמול';
    } else if (dayDifference > 1 && dayDifference < 7) {
      return `${dayDifference} ימים מעכשיו`;
    } else if (dayDifference < -1 && dayDifference > -7) {
      return `${-dayDifference} ימים עברו `;
    } else if (weekDifference === 1) {
      return 'A week from now';
    } else if (weekDifference === -1) {
      return 'לפני שבוע';
    } else if (dayDifference > 6) {
      return `${weekDifference} weeks from now`;
    } else if (dayDifference < -6) {
      return `${-weekDifference} לפני יותר משבוע`;
    } else {
      return 'Unknown';
    }
  }