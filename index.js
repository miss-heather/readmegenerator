const inquirer =require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
        {
            type: "input",
            name: "name",
            message: "What is the title name of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a description of your project.",
        },
        {
            type: "input",
            name: "installation",
            message: "Please provide installation instructions for your project.",
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide usage instructions for your project.",
        },
        {
            type: "input",
            name: "contribute",
            message: "Please provide contributor information.",
        },
        {
            type: "input",
            name: "tests",
            message: "What methods of testing did you utilize?",
        },
        {
            type: "list",
            name: "license",
            message: "Please select appropriate license information.",
            choices:["Mozilla","Eclipse", "MIT", "Apache", "None"]
        },
        {
            type: "input",
            name: "contact",
            message: "Please provide GitHub user name and email.",
        },
    ];

    function writeToFile(fileName,data) {
        fs.writeFile(fileName, data, (err) => {
            if (err) throw err;
            console.log('Success!');
    });
    }

    function init() {
        inquirer.prompt(questions)
        .then (data=>{
            console.log(data)
            writeToFile('preview.md', generateMarkdown(data))
            
        })
    }
    
    init();