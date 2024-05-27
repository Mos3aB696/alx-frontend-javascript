export default function iterateThroughObject(reportWithIterator) {
  const employees = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const employee of reportWithIterator) {
    employees.push(employee);
  }
  // eslint-disable-next-line no-undef
  return employees.join(' | ');
}
