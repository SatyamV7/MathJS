const fs = require('fs');
const path = require('path');

// Read the version from package.json
const packageJson = require('../package.json');
const version = packageJson.version;

// Get today's date
const date = new Date();
const month = date.getMonth() + 1;
const formattedMonth = month < 10 ? `0${month}` : month;
const formattedDate = `${date.getDate()}/${formattedMonth}/${date.getFullYear()}`;

// Define the path to the math.ts file
const filePath = path.join('./src/math.ts');

// Read the math.ts file
fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }

    // Replace the version and date in the file
    let result = data.replace(/MathJS v\d+\.\d+\.\d+/, `MathJS v${version}`);
    result = result.replace(/Last Modified: \d+\/\d+\/\d+/, `Last Modified: ${formattedDate}`);

    // Write the changes back to the file
    fs.writeFile(filePath, result, 'utf8', function(err) {
        if (err) return console.log(err);
    });
});