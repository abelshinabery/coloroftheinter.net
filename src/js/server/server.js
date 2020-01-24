const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
import { screenshotURL } from './../getScreenshot';
import { getImageColorPalette } from './../color';

const app = express(),
            DIST_DIR = __dirname,
            SRC_DIR = path.join(__dirname, "/../src"),
            INDEX_HTML = path.join(DIST_DIR, 'index.html');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(DIST_DIR));
app.get('/', (req, res) => res.sendFile(INDEX_HTML));

app.post('/', async (req, res) => {
  const url = req.body.url;
  const imgBuffer = await screenshotURL(url);
  console.log('done!');
  // res.sendFile(`${DIST_DIR}/${url.substr(url.indexOf(':')+3, url.length)}.png`);
  // const palette = await getImageColorPalette(`${DIST_DIR}/ss.jpeg`);
  const palette = await getImageColorPalette(imgBuffer);
  console.log(JSON.stringify(palette));
  app.set('views', `${SRC_DIR}/js/server`);
  app.set('view engine', 'pug');
  res.render('colors', {title: 'Color Palette'});
});

const PORT = 3000;
app.listen(PORT);

//{"Vibrant":{"rgb":[39,102,191],"population":2985},"LightVibrant":{"rgb":[143,151,229],"population":911},"DarkVibrant":{"rgb":[62,46,167],"population":297},"Muted":{"rgb":[163,126,87],"population":341},"LightMuted":{"rgb":[211,203,183],"population":54},"DarkMuted":{"rgb":[48,55,77],"population":1086}}
