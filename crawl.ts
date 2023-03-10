function normalizeURL(urlString:string) : string {
    const url = new URL(urlString);

    let hostpath = url.hostname + url.pathname;

    if (hostpath.length > 0 && hostpath.slice(-1) === '/') {
        return hostpath.slice(0, -1);
    }

    return url.hostname + url.pathname;
}

module.exports = normalizeURL;

export{};