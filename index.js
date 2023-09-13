const langs = require('langs');
const franc = require('franc');
const log = console.log;
const str = process.argv[2];
const code = franc(str);

try {
    const language = langs.where("3", code);
    log(language.name);
} catch {
    log('Sorry not in the system.');
}
