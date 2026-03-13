const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) results = results.concat(walk(file));
        else if (file.endsWith('FAQ.tsx')) results.push(file);
    });
    return results;
}

const files = walk('./src/components/sections');
let changed = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const original = content;

    // Already in new format? Skip.
    if (content.includes('text-center mb-10')) {
        console.log("ALREADY DONE:", file);
        return;
    }

    // --------- Pattern A: flex flex-col + left w-1/3 + right w-2/3 ---------
    content = content.replace(
        /<div className="flex flex-col (?:md|lg):flex-row gap-\d+ (?:lg:gap-\d+ )?(?:items-start )?(?:justify-center)?">\s*(?:\/\*[^*]*\*\/\s*)?<div className="w-full (?:md|lg):w-1\/3(?: ?)?">([\s\S]*?)<\/div>\s*(?:\/\*[^*]*\*\/\s*)?<div className="w-full (?:md|lg):w-2\/3(?: max-w-3xl)?(?: ?)?">([\s\S]*?)<\/div>\s*<\/div>/g,
        (match, titleBlock, accordionBlock) => {
            return `<div className="text-center mb-10">
                    ${titleBlock.trim()}
                </div>
                ${accordionBlock.trim()}`;
        }
    );

    // --------- Pattern B: grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] ---------
    content = content.replace(
        /<div className="grid grid-cols-1 lg:grid-cols-\[1fr[^\]]*\] gap-\d+ items-start">\s*(?:\/\*[^*]*\*\/\s*)?<div>([\s\S]*?)<\/div>\s*(?:\/\*[^*]*\*\/\s*)?<div>([\s\S]*?)<\/div>\s*<\/div>/g,
        (match, titleBlock, accordionBlock) => {
            return `<div className="text-center mb-10">
                    ${titleBlock.trim()}
                </div>
                ${accordionBlock.trim()}`;
        }
    );

    // --------- Fix h2 text color for dark-bg pages (keep white text) ---------
    // Some pages have dark backgrounds, their h2 already has text-white. We won't change those.

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        changed++;
        console.log("Updated:", file);
    } else {
        console.log("SKIPPED:", file);
    }
});

console.log(`\nTotal updated: ${changed}`);
