export const bucket = count => count <= 1 ? 0 : count <= 5 ? 1 : count <= 10 ? 2 : 3;
export function summarize(visits) {
  const result = {};
  for (const visit of visits) {
    const current = result[visit.country] ||= {count: 0, first: visit.date};
    current.count += Number(visit.count);
    if (visit.date < current.first) current.first = visit.date;
  }
  return result;
}
export function validVisit(v) {
  return v && typeof v.id === 'string' && typeof v.country === 'string' && typeof v.place === 'string' && Number.isInteger(v.count) && v.count > 0 && v.count <= 999 && typeof v.date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v.date) && !Number.isNaN(Date.parse(v.date)) && v.date <= new Date().toLocaleDateString('en-CA');
}
