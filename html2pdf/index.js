const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
/*
const HTMLToPDF = require('convert-html-to-pdf');

const getPDF = async () => {
  const htmlToPDF = new HTMLToPDF(`
    <div>Hello world</div>
  `);

  try {
    const pdf = await htmlToPDF.convert();
    // do something with the PDF file buffer
  } catch (err) {
    // do something on error
  }
}
*/