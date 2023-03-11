export{};

const { normalizeURL, getURLsFromHtml, crawlPage } = require('./crawl.ts');
const {JSDOM} = require('jsdom');

const main = ()=> {
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

    console.log("starting crawl of ");
    for (const item of baseURLs)
        console.log(` ${item}`);

    for (const item of baseURLs)
        crawlPage(item);

}

main();