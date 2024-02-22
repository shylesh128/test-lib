const fs = require("fs");
const mammoth = require("mammoth");

const docxFilePath = "./Hi Joshua.docx";

fs.readFile(docxFilePath, (err, data) => {
  if (err) throw err;

  mammoth
    .extractMetadata({ buffer: data })
    .then((metadata) => {
      console.log(metadata);
    })
    .catch((error) => {
      console.error("Error extracting metadata:", error);
    });
});
