const fs = require("fs");
const { PDFDocument } = require("pdf-lib");

const inputFile = "./Alt-text-report.pdf";
const outputDir = "./images/";

(async () => {
  // Read the PDF file
  const pdfBytes = fs.readFileSync(inputFile);

  // Load the PDF document
  const pdfDoc = await PDFDocument.load(pdfBytes);

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  // Extract images from each page
  for (let i = 0; i < pdfDoc.getPageCount(); i++) {
    const page = pdfDoc.getPage(i);

    const images = page
      .getDrawables()
      .filter((drawable) => drawable.type === "Image");

    for (let j = 0; j < images.length; j++) {
      const image = images[j];
      const imgBytes = await image.image.toPng();

      const fileName = `${outputDir}image_page_${i + 1}_img_${j + 1}.png`;
      fs.writeFileSync(fileName, imgBytes);
      console.log(`Image saved to: ${fileName}`);
    }
  }
})();
