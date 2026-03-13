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
            if (file.endsWith('.tsx') || file.endsWith('.jsx')) results.push(file);
        }
    });
    return results;
}

const files = walk('./src');

let changedFiles = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Replace roundings on any element containing bg-[#EC2028], hover:bg-red-700, bg-[#D32F2F], bg-[#E31E24]
    // Specifically looking at <button, <a, <Link, <BookNowButton, <div (for some weirdly styled buttons)
    content = content.replace(/(<(?:button|a|Link|BookNowButton|div)[^>]*className=["'{\`])([^"'{}\`>]+)(["'}\`])/gi, (match, prefix, classString, suffix) => {
        if (classString.includes('bg-[#EC2028]') || 
            classString.includes('bg-[#D32F2F]') || 
            classString.includes('bg-[#E31E24]') || 
            classString.includes('hover:bg-red-700') ||
            classString.includes('bg-gray-100 text-gray-700 p-2.5')) // social icons in footer
        {
            // Make sure we only change rounded that are sizes, not rounded-full already or rounded-t etc
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
