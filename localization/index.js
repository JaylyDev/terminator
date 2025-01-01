const reader = require('properties-reader');
const translate = require('@iamtraction/google-translate');
const { writeFile, mkdir, copyFile } = require('fs/promises');
const behaviorLang = reader('./behavior/en_US.lang');
const resourceLang = reader('./resource/en_US.lang');
const mappings = require('./mappings.json');
const path = require('path');

/**
 * @param {import('properties-reader').Reader} sourceLang 
 * @param {string} outputDir
 * @param {'behavior'|'resource'} packType
 * @returns {Promise<void>}
 */
async function translateLangFile(sourceLang, outputDir, packType) {
    for (const lang of mappings.languages) {
        // Copy the en_US.lang file to the output directory
        if (lang.mojang === 'en_US' || lang.mojang === 'en_GB') {
            await copyFile(`./${packType}/en_US.lang`, path.resolve(outputDir, lang.mojang + '.lang'));
            continue;
        }

        console.log(`Translating ${packType}/${lang.mojang}...`);

        /** @type {(`${string}=${string}` | `##${string}`)[]} */
        const file = [
            "## Comments can be added anywhere on a valid line by starting with '##'",
            "##",
            "## Note, trailing spaces will NOT be trimmed. If you want room between the end of the string and the start of a",
            "## comment on the same line, use TABs."
        ];

        const properties = sourceLang.getAllProperties();
        for (const key in properties) {
            const value = properties[key];
            try {
                // @ts-ignore
                const translated = await translate(value, { from: 'en', to: lang.google });
                file.push(`${key}=${translated.text}`);
            } catch (error) {
                console.error(`Unable to translate ${key} (${value}) - Please fill in the gaps.`);
                file.push(`${key}=${value} ## review required`);
            }
        }
        await writeFile(path.resolve(outputDir, lang.mojang + '.lang'), file.join('\n'));
    }
}

async function main() {
    await mkdir('./behavior/texts', { recursive: true });
    await mkdir('./resource/texts', { recursive: true });
    await translateLangFile(behaviorLang, './behavior/texts', 'behavior');
    await translateLangFile(resourceLang, './resource/texts', 'resource');
};

main().catch(console.error);