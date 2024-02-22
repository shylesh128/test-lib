const getDocumentProperties = require("office-document-properties");

// const filePath = "./Hi Joshua.docx";
// const filePath = "./alt-text-ui.pptx";
const filePath = "./Format-Errors.xlsx";

getDocumentProperties.fromFilePath(filePath, function (err, data) {
  if (err) throw err;
  console.log(data);
});

const word = {
  application: "Microsoft Office Word",
  applicationVersion: "16.0000",
  characters: 738,
  charactersWithSpaces: 866,
  created: "2024-01-24T09:08:00Z",
  createdBy: "Shylesh S",
  modified: "2024-01-24T10:20:00Z",
  modifiedBy: "Shylesh S",
  pages: 1,
  paragraphs: 1,
  revision: 1,
  template: "Normal",
  totalTime: 72,
  words: 129,
};

const ppt = {
  application: "Microsoft Office PowerPoint",
  applicationVersion: "16.0000",
  created: "2023-08-07T10:49:07Z",
  createdBy: "Shylesh S",
  hiddenSlides: 0,
  modified: "2023-10-03T07:13:42Z",
  modifiedBy: "Nagaraj V L",
  notes: 0,
  paragraphs: 41,
  revision: 3,
  slides: 11,
  title: "PowerPoint Presentation",
  totalTime: 0,
  words: 306,
};

const xlsx = {
  application: "Microsoft Excel Online",
  applicationVersion: "16.0300",
  created: "2015-06-05T18:17:20Z",
  createdBy: "ANSR Work",
  modified: "2023-04-18T12:49:39Z",
  modifiedBy: "Guest User",
  revision: 0,
};
