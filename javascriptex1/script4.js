

class Student{
    constructor(name,points,grade){
        this.name=name;
        this.points=points;
        this.grade=grade;
    }
}

const s1= new Student('Bob',1000, 'A');
const s2= new Student('Phil',200,'D');
const s3= new Student('Colin',500,'C');
const s4= new Student('Rebecca',1000, 'A');
const s5= new Student('Mike',900,'A-');
const s6= new Student('Jessica',950,'B');
const s7= new Student('Ryan',800, 'B+');
const s8= new Student('Karen',950, 'B+');

const students = [s1, s2, s3, s4, s5, s6, s7, s8];

const worst = students.filter(students => students.points<800);
console.log(worst);

const phil = students.find(students => students.name === 'Phil');
console.log(phil);

const total = students.reduce((total,students)=>total+students.points,0)

const average = total/students.length;

console.log("The average is " , total/students.length);

alert("Points to calculate average are..." + " " +[s1.points, s2.points, s3.points, s4.points, s5.points, s6.points, s7.points, s8.points, ]);

alert("The average is " + total/students.length);