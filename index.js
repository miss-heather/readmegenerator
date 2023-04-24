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
            name: "table",
            message: "Please enter the Table of Contents.",
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
            name: "questions",
            message: "Enter contact info here.",
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
            writeToFile('readme.md', generateMarkdown(data))
        })
    }

    // .then 
    {(data) => {
        var readme = `
    # <${data.name}>

    ## Description

    ${data.description}

    ## Table of Contents

    ${data.table}

    ## Installation

    ${data.installation}

    ## Usage

    ${data.usage}

    ## Contributions

    ${data.contribute}

    ## Tests

    ${data.tests}

    ## Licensing

    ${data.license}

    ## Questions

    ${data.questions}

    // `;

    }}
    
    init();