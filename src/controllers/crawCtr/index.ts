import puppeteer from 'puppeteer';

import  { getCurrentTime, removeTagRoute } from "../../utils/common";

const scrapeMedium = async (sfrom: string, sto: string) => {
  const dateT = getCurrentTime();
  const browser = await puppeteer.launch({ headless: true, args: ['--start-maximized'] });
  const page = await browser.newPage();
  const linkPage = "https://world.jorudan.co.jp/mln/en/?p=0&xpd=1&from=" + sfrom + "&to=" + sto + "&date=" + dateT + "&time=&ft=0&ic=0&us=0&up=0&ut=0&nzm=0&sub_lang=nosub&estf=" + sfrom + "&estt=" + sto;
  await page.goto(linkPage, { waitUntil: 'networkidle0' });
  await page.waitForSelector('#result_route');
  const scrapedData = await page.evaluate(() => {
    let routeData: string = "";
    const anchors = Array.from(document.querySelectorAll('.dtl'));
    anchors.map(anchor => routeData += anchor.innerHTML);
    return routeData
  });
  await browser.close()
  return removeTagRoute(scrapedData);
}

export default scrapeMedium;
