"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const common_1 = require("../../utils/common");
const scrapeMedium = (sfrom, sto) => __awaiter(this, void 0, void 0, function* () {
    const dateT = common_1.getCurrentTime();
    const browser = yield puppeteer_1.default.launch({ headless: true, args: ['--start-maximized'] });
    const page = yield browser.newPage();
    const linkPage = "https://world.jorudan.co.jp/mln/en/?p=0&xpd=1&from=" + sfrom + "&to=" + sto + "&date=" + dateT + "&time=&ft=0&ic=0&us=0&up=0&ut=0&nzm=0&sub_lang=nosub&estf=" + sfrom + "&estt=" + sto;
    yield page.goto(linkPage, { waitUntil: 'networkidle0' });
    yield page.waitForSelector('#result_route');
    const scrapedData = yield page.evaluate(() => {
        let routeData = "";
        const anchors = Array.from(document.querySelectorAll('.dtl'));
        anchors.map(anchor => routeData += anchor.innerHTML);
        return routeData;
    });
    yield browser.close();
    return common_1.removeTagRoute(scrapedData);
});
exports.default = scrapeMedium;
