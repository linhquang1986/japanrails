import puppeteer from 'puppeteer';

function removeTag(modifyHtml: string) {
  modifyHtml = modifyHtml.replace(/(<(pre|script|style|textarea)[^]+?<\/\2)|(^|>>)\s+|\s+(?=<|$)/g, " ");
  // modifyHtml = modifyHtml.replace(/<div.*class=.bnr_default.*[\n]+.*?<\/div>/g, " ");
  modifyHtml = modifyHtml.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/ig, " ")
  modifyHtml = modifyHtml.replace(/<a\b[^<]*(?:(?!<\/a>)<[^<]*)*<\/a>/ig, " ")
  // modifyHtml = modifyHtml.replace(/<div class="hyouka".*?<\/div>/ig, " ");

  return modifyHtml;
}
const scrapeMedium = async (sfrom: string, sto: string) => {
  const browser = await puppeteer.launch({ headless: true});
  const page = await browser.newPage();
  let element;

await page.goto(`https://www.navitime.co.jp/transfer/`);

element = await page.$x(`//*[@name="orvStationName"]`);
await element[0].type(`akihabara`);

element = await page.$x(`//*[@name="dnvStationName"]`);
await element[0].type(`shin-kiba`);

element = await page.$x(`//*[@id="submit_route_search"]`);
await element[0].click();

// const scrapedData = document.querySelectorAll('.route_detail')
// const scrapedData = await page.evaluate(() => {
//   let data = [];
//   let elements = document.getElementsByClassName('route_detail');
//   for (let element of elements)
//       data.push(element.textContent);
//   return data;
// });
const scrapedData = await page.evaluate(() => {
  return document.getElementsByClassName('route_detail');
});
// = await page.$eval('#detail_route_0', e => e.innerHTML);
await browser.close();
console.log(scrapedData.item.toString());
// return removeTag(scrapedData.);
};

// let element;
// const scrapeMedium = async (sfrom: string, sto: string) => {
//   const browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 1920, height: 1080 }, args: ['--start-maximized'] });
//   const page = await browser.newPage();

//   await page.goto(`https://world.jorudan.co.jp/mln/en/?c=10&sub_lang=nosub`, { waitUntil: 'networkidle0' });

//   element = await page.$x(`//*[@id="from_value"]`);
//   await element[0].click();

//   element = await page.$x(`//*[@id="from_value"]`);
//   await element[0].type(`Akabane-Iwabuchi`);

//   element = await page.$x(`(.//*[normalize-space(text()) and normalize-space(.)='Setting'])[1]/following::div[8]`);
//   await element[0].click();

//   element = await page.$x(`//*[@id="to_value"]`);
//   await element[0].click();

//   element = await page.$x(`//*[@id="to_value"]`);
//   await element[0].type(`Akabane`);

//   element = await page.$x(`//*[@id="js_search"]`);
//   await element[0].click();

//   // await page.click('.item > #part_wrapper > #part_main #from_value')
//   // await page.type('#from_value', sfrom)

//   // await page.click('.item > #part_wrapper_to > #part_main_to #to_value')
//   // await page.type('#to_value', sto)

//   await page.click('.content_main_inner #search_button_main1')

//   await page.waitFor('#result_route');

//   const scrapedData = await page.$eval('#result_route', e => e.innerHTML);
//   await browser.close()
//   return removeTag(scrapedData.toString());
// }

export default scrapeMedium;
