const fs = require('fs');
const path = require('path');


const users = [
    {name: 'katya', gender: 'female', age: 18},
    {name: 'oliaya', gender: 'female', age: 23},
    {name: 'petro', gender: 'male', age: 27},
    {name: 'ulia', gender: 'female', age: 29},
    {name: 'vasiul', gender: 'male', age: 19},
    {name: 'myhailo', gender: 'male', age: 21},
];


function createUsersFile() {
    users.forEach(({name, gender, age}) => {
        if (age > 20 && gender === 'male') {
            fs.writeFile(
                path.join(__dirname, 'manOlder20', name + '.json'),
                JSON.stringify({name, gender, age}),
                () => {}
            )
        } else if (age > 20 && gender === 'female') {
            fs.writeFile(
                path.join(__dirname, 'womanOlder20', name + '.json'),
                JSON.stringify({name, gender, age}),
                () => { }
            )
        } else if (age < 20 && gender === 'male') {
            fs.writeFile(
                path.join(__dirname, 'manYounger20', name + '.json'),
                JSON.stringify({name, gender, age}),
                () => {}
            )
        } else if (age < 20 && gender === 'female') {
            fs.writeFile(
                path.join(__dirname, 'womanYounger20', name + '.json'),
                JSON.stringify({name, gender, age}),
                () => {}
            )
        }

    })
}

createUsersFile()