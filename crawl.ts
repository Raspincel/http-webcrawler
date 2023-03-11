const {JSDOM} = require('jsdom');

function getURLsFromHtml(htmlBody: string, baseURL: string) : string[] {
    const urls: string[] = []
    
    const dom = new JSDOM(htmlBody);
    const links = dom.window.document.querySelectorAll('a');
    
    for (const element of links) {

        if (element.href.slice(0, 1) === '/') {
            try {
                const urlObj = new URL(baseURL + element.href);
                urls.push(baseURL + element.href);

            } catch(err: any) {
                console.log(`Error with relative URL: ${err.message}`);
            }

        } else {
            try {
                const urlObj = new URL(element.href);
                urls.push(element.href);
            } catch (err: any) {
                console.log(`Error with absolute URL: ${err.message}`);
            }
        }

    }

    return urls;
}

function normalizeURL(urlString:string) : string {
    const url = new URL(urlString);

    let hostpath = url.hostname + url.pathname;

    if (hostpath.length > 0 && hostpath.slice(-1) === '/') {
        return hostpath.slice(0, -1);
    }

    return url.hostname + url.pathname;
}

module.exports = { 
    normalizeURL,
    getURLsFromHtml
}

// Without this, there are a few errors regarding block-scope. Why? I have no idea
export{};