const puppeteer = require('puppeteer');
const path = require('path');

export async function screenshotURL(url){
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1366,
    height: 768
  });
  await page.goto(url, {
    waitUntil: 'networkidle2'
  });
  // await page.screenshot({
  //   path: `${__dirname}/${url.substr(url.indexOf(':')+3, url.length)}.png`,
  //   fullPage: true,
  // });
  // await page.screenshot({
  //   path: './dist/ss.jpeg',
  //   type: 'jpeg',
  //   quality: 10,
  //   fullPage: true,
  //   // encoding: 'base64'
  // });
  const imgBuffer = await page.screenshot({
    // type: 'jpeg',
    // quality: 100
    fullPage: true
  });

  await browser.close();

  return imgBuffer;
}
