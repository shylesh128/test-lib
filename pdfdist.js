const fs = require("fs");
const pdfjs = require("pdfjs-dist");

const inputFile = "./Alt-text-report.pdf";
const outputDir = "./images/";

// Function to extract images from a page
async function extractImages(page) {
  const images = [];
  const operatorList = await page.getOperatorList();
  for (let i = 0; i < operatorList.fnArray.length; i++) {
    if (operatorList.fnArray[i] == pdfjs.OPS.paintImageXObject) {
      const image = operatorList.argsArray[i][0];
      images.push(image);
    }
  }
  return images;
}

// Function to save image data as PNG files
async function saveImages(images, pageNumber) {
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    const imageData = await image.obj.getImageData();
    const imgBytes = Buffer.from(imageData.data);
    const fileName = `${outputDir}image_page_${pageNumber}_img_${i + 1}.png`;
    fs.writeFileSync(fileName, imgBytes);
    console.log(`Image saved to: ${fileName}`);
  }
}

// Main function to extract images from the PDF file
async function extractImagesFromPDF(inputFile) {
  const data = new Uint8Array(fs.readFileSync(inputFile));
  const doc = await pdfjs.getDocument(data).promise;
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const images = await extractImages(page);
    await saveImages(images, i);
  }
}

// Call the main function
extractImagesFromPDF(inputFile);
