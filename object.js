//creating person as ibject
person ={
    name : "Lavender",
    age : 22,
    sex : "female",
   "my proffession" : "developer" ,
    friends : ["steve" ,'mummy', 'daddy']


};
person.age = 35;
console.log(person);
//we use this notation when we know the name of the property we are trying to access
console.log(person.name);

//acceisng element of ibject by using bracket notation
const proffession = person['my proffession'];
console.log("your proffession is " + proffession);
const fName = "name";
const name = person[fName];
console.log(name);
const bf = person.friends[0];
console.log(bf);
//adding new property
person.brothers = ['jeph','arsen' ,'jmm','janvier','emmy'];
console.log(person);
//deleting a property
delete person.sex;
console.log(person);
console.log(person.hasOwnProperty(friends));
/*function students(obj , prop)
{
student = {
    "registration number" : 220004209,
    department : "CSE",
    colleege : 'cst',
    school : 'ict'
};

if(obj.hasOwnProperty(prop))
{
    console.log(obj.prop);
}
else{
    return 'it is not found';
}
}
console.log(students(student,college));*/

//nested array in object
 myPlant = [{

 
    type : "flowers",
    list:[
        'rose',
        'hyacinth',
        'lavender'
    ]
 },
 {
    type : 'trees',
    list: [
        'pine',
        'bamboo'
    ]
 }
];
//const secondTree =  myPlant[0].list[2];
console.log(myPlant);

    
 