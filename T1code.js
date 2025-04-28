
// // #### JSON.parse ############----------------------------==========---------------->

// // var json = '{ "firstName":"ASHU", "lastName":"BHATI", "studentCode":7 }';
// // var student = JSON.parse(json);
// // console.log(student)
// // console.log(student.firstName + " " + student.lastName);


// // var json = '{ "firstName":"ASHU", "lastName":"BHATI", "studentCode":7 }';
// // console.log(json)
// // console.log(student.firstName + " " + student.lastName);


// // #### JSON.stringify #########----------------------------==========---------------->


// // var json = { firstName:"ASHU", lastName:"BHATI", studentCode:7 };
// // console.log(json)
// // var student = JSON.stringify(json);
// // console.log(student);


// // const sub =
// // {
// // "FSD": [
// // {
// // "Topic": "HTML",
// // "course": "Beginer",
// // "content": ["tags", "table", "form"],
// // },
// // {
// // "Topic": "CSS",
// // "course": "Beginer",
// // "content": ["tags", "table", "form"]
// // }
// // ]
// // };
// // for (x in sub.FSD) {
// //     console.log(x)
// //     for (y in sub.FSD[x]) {
// //         console.log("Y" + y)
// //         console.log(sub.FSD[x][y] , "<br>")
// //     console.log(sub.FSD[x][y] , "<br>")
// // }
// // }




// // var test = {
// //     "division1": {
// //     "name":["Z","B","H"]
// //     },
// //     "division2": {
// //     "name" :["Y","A","G"]
// //     }
// //     }
// //     const div1_data = test.division1.name;
// //     const div2_data = test.division2.name;
// //     var combine_data = div1_data.concat(div2_data).sort();
// //     console.log(combine_data);

// // ###### callback function ---------------=======------>

//     // function greeting(name) {
//     //     console.log("Hello, " + name);
//     // }
      
//     // function processUserInput(name,callback) {
//     //     callback(name); // calling the function passed as argument
//     // }
    
//     // var name_1 = 'Rahul';
//     // processUserInput(name_1,greeting);


// // ##### real world example ---===-->

// // setTimeout(function () {
// //     console.log("This runs after 2 seconds");
// //   }, 2000);




// const os = require('os');

// console.log("OS Type:", os.type());
// console.log("Platform:", os.platform());
// console.log("Architecture:", os.arch());
// console.log("Total Memory:", os.totalmem());
// console.log("Free Memory:", os.freemem());
// console.log("CPU Info:", os.cpus());
// console.log("Hostname:", os.hostname());
// console.log("User Info:", os.userInfo());


// const path = require('path');

// const filePath = 'C:/Users/Rahul/Desktop/test.txt';

// console.log("Base name:", path.basename(filePath));     // test.txt
// console.log("Dir name:", path.dirname(filePath));       // C:/Users/Rahul/Desktop
// console.log("Extension:", path.extname(filePath));      // .txt
// console.log("Joined Path:", path.join('folder', 'file.txt')); // folder/file.txt
// console.log("Resolved Path:", path.resolve('folder', 'file.txt')); // absolute path
// console.log("Parsed Path:", path.parse(filePath));      


var ps=require("fs");

ps.writeFileSync("s1.txt","5 9 6 1 2 0");

data=ps.readFileSync("s1.txt",'');

data=data.split(" ").sort().reverse()

console.log(data)

