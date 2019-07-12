import puppeteer from 'puppeteer';

const scrapeMedium = async (sfrom:string, sto:string) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://world.jorudan.co.jp/mln/en/?c=10&sub_lang=nosub')
  await page.type('#from_value', sfrom )
  await page.type('#to_value', sto)
  await page.click('#search_button_main1')

  await page.waitFor('#result_route');
  const scrapedData = await page.$eval('#result_route', e => e.innerHTML);

  await browser.close()
  return scrapedData
}

export default scrapeMedium;
