const normalizeURL = require('./crawl.ts');
const { test, expect } = require('@jest/globals');

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