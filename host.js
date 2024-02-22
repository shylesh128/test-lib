const fs = require("fs");
const path = require("path");
const pdf = require("pdf-parse");
const axios = require("axios");

async function downloadPDF(url) {
  try {
    const response = await axios.get(url, { responseType: "arraybuffer" });
    const downloadsFolderPath = path.join(__dirname, "downloads");
    const localFilePath = path.join(downloadsFolderPath, "downloaded_file.pdf");

    if (!fs.existsSync(downloadsFolderPath)) {
      fs.mkdirSync(downloadsFolderPath);
    }

    fs.writeFileSync(localFilePath, response.data);
    console.log("PDF downloaded successfully.");

    return localFilePath;
  } catch (error) {
    console.error("Error downloading PDF:", error);
    throw error;
  }
}

async function parsePDF(localFilePath) {
  try {
    const dataBuffer = fs.readFileSync(localFilePath);
    const data = await pdf(dataBuffer);

    // Output metadata
    console.log("Metadata:");
    console.log(data.info);
  } catch (error) {
    console.error("Error parsing PDF:", error);
    throw error;
  }
}

const pdfUrl =
  "https://ansr.brightspacedemo.com/content/enforced/6632-Sandbox/iot-pass (1).pdf";

downloadPDF(pdfUrl)
  .then((localFilePath) => {
    // Parse the downloaded PDF file and extract metadata
    parsePDF(localFilePath)
      .then(() => {
        // Delete the downloaded PDF file after parsing
        fs.unlinkSync(localFilePath);
        console.log("PDF file deleted successfully.");
      })
      .catch((error) => {
        console.error("Error parsing PDF:", error);
      });
  })
  .catch((error) => {
    console.error("Error downloading PDF:", error);
  });
