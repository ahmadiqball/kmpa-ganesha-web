export function formatDate(date?: string) {
  if (!date) {
    return null;
  };

  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
};
