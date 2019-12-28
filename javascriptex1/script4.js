/* //object literal

const person1= {
    //atributes
    name:'Gill',
    age:29,
    job: true,
    music:["Maroon Five","Elton John","Chicago"],
    address:{
        street:"Beryl St",
        number:1067
    },
    birthday:function(){
        let date = new Date();
        return date.getFullYear()-this.age;
    }
}

const person2= {
    name:'Bob',
    age:25,
    job: false,
    music:["AC-DC","Rush","Green Day"],
    address:{
        street:"Jump Street",
        number:21
    },
    birthday:function(){
        let date= new Date();
        return date.getFullYear()-this.age;
    }
}

console.log(person1['address']['number']); */
// powerful dot

// object constructor
/* 
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const p1 = new Person("Frank", 35);
const p2 = new Person("Matt", 38);
const p3 = new Person("Karter", 30);

console.log(p3); */
/* 
class Task {
    constructor(name, priority, date) {
        this.name = name;
        this.priority = priority;
        this.date = date;
    }
}

var task1 = new Task('Exam', 'High', '09/10/19');
var task2 = new Task('Homework', 'Medium', '09/11/19');
var task3 = new Task('TTH', 'Medium', '09/10/19');

const tasks = [task1, task2, task3];


var text = "";
for (var i = 0; i < tasks.length; i++) {
    text += `<h2> <br>` + tasks[i].name + `</h2>`;
}
document.getElementById('task-div').innerHTML = text;

const client = {
    name: 'John',
    type: 'Premium',
    data: {
        location: {
            country: 'USA',
            city: 'San Diego'
        },
        account: {
            data: 2012,
            number: '284217'
        }
    }
}
var cityClient = client.data.location.city;
console.log(cityClient);

// object destructuring

let {type} =client;
let {data:{location:{city}}} = client;
console.log(city); */

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