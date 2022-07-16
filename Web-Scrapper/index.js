const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://quotes.toscrape.com/");
 

  const Quotes = await page.evaluate(() => {
      const quotes = document.querySelectorAll(".quote");
      let quotesArray = [];
      quotes.forEach((e) => {
          const actualQuotes = e.querySelectorAll("span");
          const quotes = actualQuotes[0]
          const author = actualQuotes[1]

          const authorName = author.querySelector("small");

          quotesArray.push({
              Quote: quotes.innerText,
              Author: authorName.innerText
          });
      });
      return quotesArray;
  });
  console.log(Quotes);
  await browser.close();
})();