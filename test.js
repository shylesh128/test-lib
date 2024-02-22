const fs = require("fs");
const pdf2html = require("pdf2html");
const inputFile = "./Alt-text-report.pdf";
const outputFile = "./output.html";

(async () => {
  const html = await pdf2html.html(inputFile);
  fs.writeFileSync(outputFile, html);
  console.log("HTML written to", outputFile);
})();
