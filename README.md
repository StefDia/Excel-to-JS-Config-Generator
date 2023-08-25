#Excel-to-JS Config Generator
The Excel-to-JS Config Generator is a script that automates the extraction of data from Excel files and generates JavaScript configuration files. This tool is designed to assist testers and developers in efficiently creating configuration files for their projects based on data stored in Excel spreadsheets.

##Features
- Extracts specific data columns from Excel sheets.
- Generates a structured JavaScript configuration file.
- Easily configurable to match your Excel file's structure.
  
##How to Use
- Clone this repository or download the script.
- Install the required dependencies by running npm install.
- Place your Excel file in the appropriate directory.
- Configure the script to match your Excel file's structure and specify the desired output file path.
- Run the script using node excelToConfig.js.

##Example
Assuming your Excel file contains data columns like Name, Age, and Adress, the script will generate a JavaScript configuration file in the following format:

module.exports = {
    "Name": {
        "age": "22",
        "address": "Street 404"
    },
    // ... Other entries
};  
