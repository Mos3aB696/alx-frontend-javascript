export default function cleanSet(set, startString) {
  if (!set || set.size === 0) return '';
  if (typeof set !== 'object' || !set instanceof Set) return '';
  if (startString === '') return '';

  let result = '';
  for (const item of set) {
    if (typeof item === 'string' && item.startsWith(startString)) {
      result += item.slice(startString.length) + '-';
    }
  }

  // Remove the trailing dash if present
  return result.slice(0, -1);
}
