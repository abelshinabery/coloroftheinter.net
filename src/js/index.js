import './../css/normalize.sass';
import './../css/styles.sass';

var searchCircle = document.getElementById('search-circle');
var urlSearchBar = document.getElementById('url-search-bar');
var palette;

searchCircle.addEventListener('click', async function sendURL(){
  var url = urlSearchBar.value;
  console.log(url);
  palette = await getPalette(url);
  console.log(palette);
});

// url must not have www. in front of it!!!
urlSearchBar.addEventListener('keyup', function redirectEnter(e){
  if (e.keyCode === 13) {
    e.preventDefault();
    searchCircle.click();
  }
});

function getPalette(url){
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/getPalette', true);
  xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var jsonData = JSON.parse(xhr.response);
      console.log(jsonData);
    }
  }
  xhr.send('url=https://'+url);
}


// const puppeteer = require('puppeteer');
//
// async function launchBrowser(){
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://ciaraobermandesigns.com');
//   await page.screenshot({
//     path: 'ciara.png',
//     fullPage: true,
//   });
//   console.log(browser);
// }
//
// launchBrowser();
