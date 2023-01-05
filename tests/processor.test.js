/**
 * @fileoverview Tests for the Processor class.
 */
/*global describe, it*/

//-----------------------------------------------------------------------------
// Requirements
//-----------------------------------------------------------------------------

import { Processor } from "../src/processor.js";
import { expect } from "chai";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

//-----------------------------------------------------------------------------
// Helpers
//-----------------------------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const comments = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "fixtures", "nczonline-comments.json"), "utf-8")
);
const threads = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "fixtures", "nczonline-threads.json"), "utf-8")
);

//-----------------------------------------------------------------------------
// Tests
//-----------------------------------------------------------------------------

describe("Processor", () => {

    describe("process()", () => {
        
        it("should convert comments into threads", () => {
            const processor = new Processor();
            const result = processor.process(comments);
            expect(result).to.deep.equal(threads);
        });
    });

});
