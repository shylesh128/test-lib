const fs = require("fs");
const pdf = require("pdf-parse");

let dataBuffer = fs.readFileSync("./Alt-text-report.pdf");
// let dataBuffer = fs.readFileSync("./downloads/iot-pass (1).pdf");

pdf(dataBuffer).then(function (data) {
  console.log(data.numpages);
  console.log(data.numrender);
  console.log(data.info);
  console.log(data.metadata);
  console.log(data.version);
});
