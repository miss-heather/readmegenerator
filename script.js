const inquirer =require("inquirer");
const fs = require("fs");

inquirer
    .prompt {[
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
            message: "What is the name of your project?",
        },
        {
            type: "input",
            name: "license",
            message: "Please provide license information.",
        },
        {
            type: "input",
            name: "questions",
            message: "What is the name of your project?",
        },

    ]}
    .then{(data_ => {
        var readme = 
    # <${data.name}>

    ## Description

    ${data.description}

    ## Table of CountQueuingStrategy

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

    ;
        fs.writeFile("./README/README.MD", README, (err) =>
        err ? console.log(err) : console.log("success!")
        );
    })}