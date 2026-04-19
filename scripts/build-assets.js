'use strict';

const renderAssets = require('./render-assets');

const fs = require('fs');
const path = require('path');

// Your existing asset copying code...

// Copy sitemap.xml
if (fs.existsSync('public/sitemap.xml')) {
    fs.copyFileSync('public/sitemap.xml', 'dist/sitemap.xml');
    console.log('Copied sitemap.xml');
}

// Copy robots.txt
if (fs.existsSync('public/robots.txt')) {
    fs.copyFileSync('public/robots.txt', 'dist/robots.txt');
    console.log('Copied robots.txt');
}

// Copy llms.txt
if (fs.existsSync('src/llms.txt')) {
    fs.copyFileSync('src/llms.txt', 'dist/llms.txt');
    console.log('Copied llms.txt');
}

renderAssets();