import puppeteer from 'puppeteer';

const url = 'http://localhost:5173'; // замени на адрес твоего локального сервера

const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.goto(url, { waitUntil: 'networkidle0' });

await page.pdf({
  path: 'resume.pdf',
  width: '1920px',
  height: '1080px',
  printBackground: true,
});

await browser.close();
console.log('Resume saved as resume.pdf');