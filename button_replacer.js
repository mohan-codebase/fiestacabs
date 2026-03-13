const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx')) results.push(file);
        }
    });
    return results;
}

const files = walk('./src');

let changedFiles = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    content = content.replace(/(<(?:button|a|BookNowButton|typeof Link)[^>]*className=["'{\`])([^"'{}\`>]+)(["'}\`])/gi, (match, prefix, classString, suffix) => {
        // If it looks like a button
        if (classString.includes('px-') && classString.includes('py-') && classString.includes('bg-')) {
            classString = classString.replace(/\brounded-(?:md|lg|xl|sm|2xl|3xl)\b/g, 'rounded-full');
        }
        return prefix + classString + suffix;
    });

    // Also look for Link elements like <Link href="..." className="...">
    content = content.replace(/(<Link[^>]*className=["'{\`])([^"'{}\`>]+)(["'}\`])/gi, (match, prefix, classString, suffix) => {
        // If it looks like a button
        if (classString.includes('px-') && classString.includes('py-') && classString.includes('bg-')) {
            classString = classString.replace(/\brounded-(?:md|lg|xl|sm|2xl|3xl)\b/g, 'rounded-full');
        }
        return prefix + classString + suffix;
    });

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        changedFiles++;
        console.log('Updated: ' + file);
    }
});
console.log('Total files updated: ' + changedFiles);
