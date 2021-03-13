let name = "Kumar Prafull";
let age = 32;
let isActive = false;
let selectedColor = null;
let final = undefined;
console.log(name);
console.log(typeof name);
console.log(typeof age);
console.log(typeof isActive);
console.log(typeof selectedColor);
console.log(typeof final);
let person = {
    name: "Ram",
    age: 60
};
console.log(person);
console.log(typeof person);
console.log(person.age);
person.name = "Ram Chandra";
console.log(person);
let selection = "name";
console.log(person["name"]);
console.log(person[selection]);

let myColors = ["red", "blue"];
myColors[2] = 'green';
myColors[3] = 15;
console.log(myColors);
console.log(typeof myColors);
console.log(myColors.length);

function greet(firstname, lastname) {

    console.log('Hello ' + firstname + ' ' + lastname);
}

greet('Kumar', 'Prafull');
greet('Pratiksha', 'Mallik');

function square(number) {
    return number*number;
}

let sqNum = square(44);
console.log(sqNum);

function sayHello() {
    for (var i = 0; i <5; i++ ){
        console.log(i);        
    }
    console.log(i);
    console.log(i+1);
}
sayHello();

function sayHello2() {
    for (let j = 0; j <5; j++ ){
        console.log(j +100);        
    }

}
sayHello2();

const x = 1988;
console.log(x);

const heroes = {
    fname: 'Guess',
    walk: function() {
        console.log(this);
    },
    talk() {
        console.log(this.fname);
    }
}

heroes.walk();
heroes.talk();
heroes['fname'] = "Kumar";
const targetMember = 'fname';
heroes[targetMember] = 'John';
console.log(heroes);

const walk = heroes.walk;
walk();

const sheroes = {
    gname: "Jene",
    tellName() {
        console.log(this)
    }
}
const nwalk = heroes.walk.bind(heroes);
const mwalk = heroes.walk.bind(sheroes);
nwalk();
mwalk();

const sq = function(numInput) {
    return numInput*numInput;
}

const sqr = (numInput) => numInput*numInput;
console.log(sq(5));
console.log(sqr(5));

const jobs = [
    {id: 1, isAvailable: true },
    {id: 2, isAvailable: false },
    {id: 3, isAvailable: false },
]

const availableJobs = jobs.filter(function(job){ return job.isAvailable;});
console.log(availableJobs);

const availableJobs2 = jobs.filter(job => job.isAvailable);
console.log(availableJobs2);

const persons = {
    say() {
        setTimeout(() => {
            console.log("this", this);            
        }, 1);

    }
};

persons.say();

const person2 = {
    say2() {
        let self = this;
        setTimeout(function() {
            console.log("self", self);
        }, 1)
    }
}

person2.say2();

const colours = [ 'red', 'green', 'blue'];

const colours1 = colours.map(function(item){
    return '<li>' + item + '</li>';
});
console.log(colours1);

const colours2 = colours.map(item1 => `<li>${item1}</li>`);
console.log(colours2);


const address = {
    street: 'Bailey Road',
    city: 'Patna',
    country: "India"
};

const {street: st, city: town, country: nation} = address;
console.log(st, town, nation);

const first = [1,2,3];
const second = [4,5,6];

const combine = first.concat(second);
console.log(combine);
const combine1 = [...first, ' hi ', ...second, 'there'];
console.log(combine1);

const clonefirst = [...first];
console.log(clonefirst);

const first1 = { frstname: "Kumar" };
const second2 = { scndname: "Prafull" };

const objspread = {...first1, ...second2, location: "australia"};
console.log(objspread);
const objclone = {...objspread};
console.log(objclone);


