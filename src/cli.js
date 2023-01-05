/**
 * @fileoverview Main command line file.
 * @author Nicholas C. Zakas
 */

//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------

import { Downloader, Processor } from "./disqus-export.js";
import fs from "node:fs/promises";
import yargs from "yargs";
import dotenv from "dotenv";
import { Env } from "@humanwhocodes/env";

dotenv.config();

//-----------------------------------------------------------------------------
// Helpers
//-----------------------------------------------------------------------------

const argv = yargs(process.argv.slice(2))
    .scriptName("disqus-export")
    .version(false)
    .options({
        o: {
            type: "string",
            describe: "The output filename."
        },
        help: {
            alias: "h",
            type: "boolean",
            describe: "Show the help screen."
        },
        version: {
            alias: "v",
            type: "boolean",
            describe: "Shows the current version."
        }
    })
    .usage("$0 [options] forum")
    .argv;

//-----------------------------------------------------------------------------
// Main
//-----------------------------------------------------------------------------

(async () => {

    // check for required environment variables
    const env = new Env();
    const DISQUS_API_KEY = env.required.DISQUS_API_KEY;

    if (!argv._.length) {
        argv.showHelp();
        process.exit(1);
    }

    // figure out where everything goes
    const forum = argv._[0];
    const outputFilePath = argv.o
        ? argv.o :
        `${forum}-export.json`;

    // download the raw data
    const downloader = new Downloader({ forum, apiKey: DISQUS_API_KEY });
    const comments = await downloader.download();

    // fixup the data
    const processor = new Processor();
    const threads = processor.process(comments);

    // output the file
    await fs.writeFile(outputFilePath, JSON.stringify(threads));
    console.log("Comment data saved to", outputFilePath);
})();
