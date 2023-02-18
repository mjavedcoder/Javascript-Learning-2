// <==========================Importing & exporting in Javascript========================>

// Before going to discuss about the importing,exporting feature in modern javascript .I want to discuss about the "module" .In the early times the javascript projects used to contain one big "script.js" file or multiple files of "script", But now in javascript the developing process has changes from "script" to "module" .One javascript project is now the result of multiple "modules" . Thess modules are actually the files which means that one single file is a module . These modules can share the data with each other,these help in organizing the code as well .
// During the development process whuch contains these "modules" we can use "3rd party packages" too which is "npm"(Node-Project-Manager) .Npm contains packages and we can use them in our code ,Different types of packages are "React framework" or "J-query" .Npm conatains the code and software tools too .We use these tools to join all modules into one "bundle" and then this "bundle" converts the moders ES6 code into old ES5 code so that we can execute this code in our old browsers too . And in this way,after all this we get one "Javascript-Bundle" which is actually our last production .

//<=========How can we import and export code/data in modules====================>

// import './playSports.js'; //output => cricket chess

// As we have imported the module file(playSports) so the log which we want to be console there has been consoled here by importing it .

// How can we use the variable which has been declared in the "module" ?

// import { qas } from './playSports.js';
// console.log(qas); //output => cricket

// So we'll use curly brackets and then in those brackets we'll use the same name variable which we want to import in this module .

//How can we import multiple exports ?

// import { qas, javed } from './playSports.js';
// console.log(qas, javed); //output => cricket chess

//<==============Default export=============>//

import sports from './playSports.js';
sports('cricket', 'chess'); //output => Qasim likes to play cricket and chess

// So we can use any desireable name which we want while doing default-export . In our case we have used "sports" .
