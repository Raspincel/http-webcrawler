const { normalizeURL, getURLsFromHtml } = require('./crawl.ts');
const { test, expect } = require('@jest/globals');

// normalize URL tests
test('normalizeURL strip protocol', ()=> {
    const input = 'https://blog.boot.dev/path';
    const expected = 'blog.boot.dev/path';

    const received: string = normalizeURL(input);
    expect(received).toEqual(expected);
})

test('normalizeURL strip trailing slashes', ()=> {
    const input = 'https://blog.boot.dev/path/';
    const expected = 'blog.boot.dev/path';

    const received: string = normalizeURL(input);
    expect(received).toEqual(expected);
})

test('normalizeURL capitals', ()=> {
    const input = 'https://BLOG.boot.dev/path/';
    const expected = 'blog.boot.dev/path';

    const received: string = normalizeURL(input);
    expect(received).toEqual(expected);
})

test('normalizeURL strip http protocol', ()=> {
    const input = 'http://blog.boot.dev/path/';
    const expected = 'blog.boot.dev/path';

    const received: string = normalizeURL(input);
    expect(received).toEqual(expected);
})

// get URL tests
test('getURLsFromHTML absolute URLs', ()=> {
    const inputHTMLBody = 
    `<html>
        <body>
            <a href="https://blog.boot.dev/path/">Boot.dev Blog</a>
        </body>
    </html>`;
    const inputBaseURL = "https://blog.boot.dev/path/";
    const expected = ["https://blog.boot.dev/path/"];

    const received = getURLsFromHtml(inputHTMLBody, inputBaseURL);
    expect(received).toEqual(expected);
})

test('getURLsFromHTML relative URLS', ()=> {
    const inputHTMLBody = 
    `<html>
        <body>
            <a href="/path/">Boot.dev Blog</a>
        </body>
    </html>`;
    const inputBaseURL = "https://blog.boot.dev";
    const expected = ["https://blog.boot.dev/path/"];

    const received = getURLsFromHtml(inputHTMLBody, inputBaseURL);
    expect(received).toEqual(expected);
})

test('getURLsFromHTML invalid URLS', ()=> {
    const inputHTMLBody = 
    `<html>
        <body>
            <a href="baaah">Link 1</a>
        </body>
    </html>`;
    const inputBaseURL = "https://blog.boot.dev";
    const expected: string[] = [];

    const received = getURLsFromHtml(inputHTMLBody, inputBaseURL);
    expect(received).toEqual(expected);
})