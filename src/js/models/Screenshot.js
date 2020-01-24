'use strict';
//
// const puppeteer = require('puppeteer');
//
// // export const browser = await puppeteer.launch();
//
// export async function getScreenshot(url) {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(url);
//   await page.screenshot({path: 'test.png'});
//   await browser.close();
// }
//
// export async function getDimensionsAndScale() {
//
//     await page.evaluate(function getPageInfo() {
//       return {
//         width: document.documentElement.clientWidth,
//         height: document.documentElement.clientHeight,
//         deviceScaleFactor: window.devicePixelRatio
//       };
//     });
//   }
const puppeteer = require('puppeteer');


export async function tryThis() {
  // const browser = await puppeteer.launch({headless: false})
  console.log(browser);
}
