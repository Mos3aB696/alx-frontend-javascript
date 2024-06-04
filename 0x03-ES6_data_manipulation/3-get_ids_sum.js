export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce((acc, current) => acc + current.id, 0);
  }
  return [];
}
