const fs = require('fs');
const path = require('path');

// Read the version from package.json
const packageJsonPath = path.join(__dirname, '../package.json');
const packageJson = require(packageJsonPath);
let version = packageJson.version;

// Increment the version
let [major, minor, patch] = version.split('.');

if (minor === '9' && patch === '9') {
    // Reset minor to 0 and increment major version
    major = String(Number(major) + 1);
    minor = '0';
    patch = '0';
} else if (patch === '9') {
    // Reset patch to 0 and increment minor version
    minor = String(Number(minor) + 1);
    patch = '0';
} else {
    // Increment patch version
    patch = String(Number(patch) + 1);
}

// Update the version in package.json
version = `${major}.${minor}.${patch}`;
packageJson.version = version;

// Prompt user for confirmation
process.stdout.write('Do you want to proceed? (y/n): ');

process.stdin.once('data', function (data) {
    const input = data.toString().trim().toLowerCase();
    if (input === 'y' || input === 'yes' || input === '') {
        fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), function (err) {
            if (err) {
                console.error(err);
                process.exit(1); // Exit with error code
            }
            console.log(`Version updated successfully in \u001b]8;;file://${path.resolve(packageJsonPath).replace(/\\/g, '/')} \u001b\\package.json\u001b]8;;\u001b\\.`);

            // Define the path to the math.ts file
            const filePath = path.join(__dirname, '../src/math.ts');

            // Read the math.ts file
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    console.error(err);
                    process.exit(1); // Exit with error code
                }

                // Get today's date
                const date = new Date();
                const formattedMonth = (date.getMonth() + 1).toString().padStart(2, '0');
                const formattedDate = `${date.getDate()}/${formattedMonth}/${date.getFullYear()}`;

                // Replace the version and date in the file
                let result = data.replace(/MathJS v\d+\.\d+\.\d+/, `MathJS v${version}`);
                result = result.replace(/Last Modified: \d+\/\d+\/\d+/, `Last Modified: ${formattedDate}`);

                // Write the changes back to the file
                fs.writeFile(filePath, result, 'utf8', function (err) {
                    if (err) {
                        console.error(err);
                        process.exit(1); // Exit with error code
                    }
                    console.log(`Version and date updated successfully in \u001b]8;;file://${path.resolve(filePath).replace(/\\/g, '/')} \u001b\\math.ts\u001b]8;;\u001b\\.`);
                    process.exit(0); // Exit with success code
                });
            });
        });
    } else {
        console.log('Process aborted.');
        process.exit(0); // Exit with success code
    }
});
