export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students by city
  const studentsInCity = students.filter((student) => student.location === city);
  // Map over filtered students to update their grades
  const updatedStudents = studentsInCity.map((student) => {
    let newGrade = 'N/A'; // Default grade
    // Check if the student's grade exists in newGrades
    const foundGradeObj = newGrades.find((gradeObj) => gradeObj.studentId === student.id);
    if (foundGradeObj) {
      newGrade = foundGradeObj.grade;
    }
    // Return the updated student objectnpm run dev 4-main.js
    return {
      ...student,
      grade: newGrade,
    };
  });
  return updatedStudents;
}
