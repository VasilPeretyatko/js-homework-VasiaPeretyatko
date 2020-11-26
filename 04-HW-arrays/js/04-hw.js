const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];

const maleStudents = ["Олександр", "Ігор", "Олексій"];
const femaleStudents = ["Олена", "Іра", "Світлана"];
const marks = [4, 5, 5, 3, 4, 5];

const getPairsStudents = function (students) {
  listPairsStudents = [];
  for (let i = 0; i < students.length; i++) {
    listPairsStudents.push([maleStudents[i], femaleStudents[i]]);
    if (listPairsStudents.length === students.length / 2) {
      return listPairsStudents;
    }
  }
};

const getPairsStudentsWithThemes = function (upsetPairsStudents, themes) {
  let StudentsTheme = [];
  for (let i = 0; i < themes.length; i++) {
    StudentsTheme.push([upsetPairsStudents[i].join(" i "), themes[i]]);
  }

  return StudentsTheme;
};

getStudentsWithMarks = function (studentsList, marksList) {
  const studentsWithMarks = [];
  for (let i = 0; i < students.length; i++) {
    studentsWithMarks.push([studentsList[i], marksList[i]]);
  }

  return studentsWithMarks;
};

const getPairsStudentsWithRandomMark = function (pairsStudentsWithThemes) {
  const pairsStudentsWithRandomMark = [];
  for (let i = 0; i < pairsStudentsWithThemes.length; i++) {
    pairsStudentsWithRandomMark.push([
      ...pairsStudentsWithThemes[i],
      parseInt(Math.random() * (5 - 1) + 1),
    ]);
  }
  return pairsStudentsWithRandomMark;
};

const pairsStudents = getPairsStudents(students);
const pairsStudentsWithThemes = getPairsStudentsWithThemes(
  pairsStudents,
  themes
);
const studentsWithMarks = getStudentsWithMarks(students, marks);
const pairsStudentsWithRandomMark = getPairsStudentsWithRandomMark(
  pairsStudentsWithThemes
);

console.log(students.length);
console.log(pairsStudents);
console.log(pairsStudentsWithThemes);
console.log(studentsWithMarks);
console.log(pairsStudentsWithRandomMark);
