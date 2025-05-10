const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    py: 'Python',
    swift: "Swift by Apple"
}

//For in loop for objects 
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "cpp", "py", "java"]

for (const key in object) {
    console.log(programming[key]);
}


