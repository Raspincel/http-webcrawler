const { normalizeURL, getURLsFromHtml, crawlPage } = require('./crawl.ts');
const { JSDOM } = require('jsdom');

import { urlCount } from "./crawl";

const main = async ()=> {
    if (process.argv.length < 3) {
        console.log("No website provided");
        process.exit(1);
    }

    const baseURLs: string[] = [];

    for (const arg of process.argv) {
        try {
            const url = new URL(arg);
            baseURLs.push(arg);
        } catch(error: any) {
            console.log(`Argument is not a valid URL: ${error}`);
            continue;
        }
    }

    let pages : urlCount = {};

    console.log("starting crawl of ");
    for (const item of baseURLs) {
        console.log(` ${item}`);
        pages = await crawlPage(item, item, pages);
    }

    const sortedPages = Object.entries(pages).sort((a, b)=> {
        return b[1] - a[1];
    });

    console.log('\n\nInfos about the crawling: ')
    for (const [pageURL, linksNumber] of sortedPages) {
        console.log(`Found [${linksNumber}] links to the page: ${pageURL}`);
    }

}

main();
export{};