const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

//1.
const getSubjects = function (student) {
  const subjestsItems = Object.keys(student.subjects);
  return subjestsItems.map(
    (subject) =>
      subject[0].toUpperCase() +
      subject.slice(1).toLowerCase().replace(/_/gi, " ")
  );
};

const resultGetSubjects = getSubjects(students[0]);
console.log(
  "🚀 ~ file: 06-hw.js ~ line 40 ~ resultGetSubjects",
  resultGetSubjects
);

//2.
const getAverageMark = function (student) {
  const allMarks = Object.values(student.subjects)
    .flat(Infinity)
    .filter((mark) => Number.isInteger(mark))
    .sort((a, b) => a - b);

  const markAverage =
    allMarks.reduce(function (total, mark) {
      return total + mark;
    }, 0) / allMarks.length;
  return parseFloat(markAverage.toFixed(2));
};

const resultGetAverageMark = getAverageMark(students[0]);
console.log(
  "🚀 ~ file: 06-hw.js ~ line 61 ~ resultGetAverageMark",
  resultGetAverageMark
);

//3
const getStudentInfo = function (studentInfo) {
  const studentItem = {};
  studentItem["course"] = studentInfo.course;
  studentItem["name"] = studentInfo.name;
  studentItem["averageMark"] = getAverageMark(studentInfo).toFixed(2);
  return studentItem;
};

const resultStudentInfo = getStudentInfo(students[0]);
console.log(
  "🚀 ~ file: 06-hw.js ~ line 77 ~ resultStudentInfo",
  resultStudentInfo
);

//4
const getStudentsNames = function (studentsAtoZ) {
  return studentsAtoZ.map((studentsAtoZ) => studentsAtoZ.name).sort();
};

const resultgetStudentsNames = getStudentsNames(students);
console.log(
  "🚀 ~ file: 06-hw.js ~ line 82 ~ resultgetStudentsNames",
  resultgetStudentsNames
);

//5 null
//6 null
