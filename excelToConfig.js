const XLSX = require('xlsx');
const fs = require('fs');

// Read existing config if it exists
let existingConfig = {};
try {
    existingConfig = require('./path/to/output/config.js');
} catch (error) {
    // Ignore error if the config file doesn't exist yet
}

// Read Excel data
const workbook = XLSX.readFile('path/to/your/excel-file.xlsx');
const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
const worksheet = workbook.Sheets[sheetName];

// Extract values and merge with existing config
for (let i = 1; i <= 100; i++) { // in case you need to access a specific interval of elements
    const cellB = worksheet[`A${i}`]; 
    const cellC = worksheet[`B${i}`];
    const cellD = worksheet[`C${i}`];

    const name = cellB ? cellB.v : null;
    const age = cellC ? cellC.v : null;
    const adress = cellD ? cellD.v : null;

    if (name && age && adress) {
    // optionally you can add more verifications for the values extracted 
    // Example :  if (name.startsWith('John'))
        existingConfig[name] = {
            age,
            adress: adress
        };
    }
}

// Generate .js config file
const configString = `module.exports = ${JSON.stringify(existingConfig, null, 2)};`;

// Write to the existing .js file
fs.writeFileSync('path/to/output/config.js', configString);

console.log('Config file updated with new values.');
