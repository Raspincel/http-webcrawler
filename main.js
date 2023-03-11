"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { normalizeURL, getURLsFromHtml } = require('./crawl.ts');
const { JSDOM } = require('jsdom');
const main = () => {
    if (process.argv.length < 3) {
        console.log("No website provided");
        process.exit(1);
    }
    for (const arg of process.argv) {
        console.log(arg);
    }
    console.log("starting crawl");
};
main();
