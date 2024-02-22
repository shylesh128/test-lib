const xlsx = require("xlsx");

let workbook = xlsx.readFile("./Format-Errors.xlsx");
let sheetName = workbook.SheetNames[0];
let sheet = workbook.Sheets[sheetName];

// Get workbook properties
let workbookProps = workbook.Props;

let output = {
  numberOfSheets: workbook.SheetNames.length,
  sheetName: sheetName,
  rangeOfSheet: sheet["!ref"],
  ...workbookProps,
};

console.log(output);
