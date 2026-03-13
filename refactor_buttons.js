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
    // Skip Button components themselves
    if (file.includes('Button.tsx') || file.includes('BookNowButton.tsx')) return;
    
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Pattern to match full <button>, <a>, or <Link> tags (non-nested elements of same type)
    const pattern = /<(button|a|Link)(\s+[^>]*)>([\s\S]*?)<\/\1>/gi;

    content = content.replace(pattern, (match, tag, attrs, children) => {
        // Only target buttons with our brand red colors
        if (!attrs.includes('bg-[#EC2028]') && !attrs.includes('bg-[#D32F2F]') && !attrs.includes('bg-[#E31E24]') && !attrs.includes('hover:bg-red-700')) {
            return match;
        }

        let cleanedAttrs = attrs
             .replace(/\bbg-\[#(EC2028|D32F2F|E31E24)\]\b/g, '')
             .replace(/\bhover:bg-(red-\d+|\[#B71C1C\])\b/g, '')
             .replace(/\btext-white\b/g, '')
             .replace(/\brounded-(?:full|md|lg|xl|sm|2xl|3xl)\b/g, '')
             .replace(/\binline(?:-block|-flex)?\b/g, '')
             .replace(/\bflex\b/g, '')
             .replace(/\bitems-center\b/g, '')
             .replace(/\bjustify-center\b/g, '')
             .replace(/\bfont-(bold|semibold|medium)\b/g, '')
             .replace(/\bpx-\d+(\.\d+)?\b/g, '')
             .replace(/\bpy-\d+(\.\d+)?\b/g, '')
             .replace(/\bshadow(?:-(md|lg|xl))?\b/g, '')
             .replace(/\btransition-(all|colors)\b/g, '')
             .replace(/\btext-(sm|md|lg|xl)\b/g, '')
             .replace(/\btracking-wide\b/g, '')
             .replace(/\bclass(?:Name)?=["']\s+["']/g, ''); // empty classes

        // Clean up multiple spaces
        cleanedAttrs = cleanedAttrs.replace(/\s+/g, ' ').replace('className=" "', '').replace("className=' '", "");
        
        let props = cleanedAttrs.trim();
        // Return replaced button
        return `<Button ${props}>${children}</Button>`;
    });

    if (content !== original) {
        // Add import
        if (!content.includes('import Button from')) {
            // tsconfig.json has "@/*": ["./*"], but it points to root instead of src!
            // Wait, looking at tsconfig: `"paths": { "@/*": ["./*"] }` 
            // So @/components is actually src/components if src is in root. No, if paths is "@/*": ["./*"], it's relative to tsconfig.
            // Let's use relative paths.
            
            // file path looks like ./src/components/layout/Header.tsx
            const parts = file.split('/'); // ['.', 'src', 'components', 'layout', 'Header.tsx']
            const depth = parts.length - 3; // depth from src. src is 0, app is 1. Header is 2.
            let prefix = depth === 0 ? './' : '../'.repeat(depth);
            let importStatement = `import Button from "${prefix}components/common/Button";\n`;
            
            // Insert after the last import, or at the top
            const lastImportIndex = content.lastIndexOf('import ');
            if (lastImportIndex !== -1) {
                const endOfLine = content.indexOf('\n', lastImportIndex);
                content = content.slice(0, endOfLine + 1) + importStatement + content.slice(endOfLine + 1);
            } else {
                content = importStatement + content;
            }
        }
        
        fs.writeFileSync(file, content, 'utf8');
        changedFiles++;
        console.log("Updated: " + file);
    }
});
console.log("Total files updated: " + changedFiles);
