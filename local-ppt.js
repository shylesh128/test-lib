const pptx = require("pptx");

let presentation = pptx.readFile("./example.pptx");

console.log("Number of slides:", presentation.slides.length);
console.log("Slide titles:");
presentation.slides.forEach((slide, index) => {
  console.log(`Slide ${index + 1}: ${slide.title}`);
});
