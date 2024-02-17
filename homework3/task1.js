// Функція для обчислення середнього балу
function calculateAverage(grades) {
    const sum = grades.reduce((total, grade) => total + grade, 0);
    return sum / grades.length;
}

function Averages(students) {
    students.forEach(student => {
        const averageGrade = calculateAverage(student.grades);
        console.log(`${student.name}: ${averageGrade}`);
    });
}

const students = [
    { name: 'John', grades: [90, 87, 93, 88] },
    { name: 'Jane', grades: [78, 82, 80, 85] },
    { name: 'Mike', grades: [92, 89, 85, 78] },
    { name: 'Anna', grades: [75, 80, 92, 87] },
];

Averages(students);
