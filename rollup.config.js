/**
 * @fileoverview Rollup config file
 */

export default [
    {
        input: "src/disqus-export.js",
        output: [
            {
                file: "dist/disqus-export.cjs",
                format: "cjs"
            },
            {
                file: "dist/disqus-export.js",
                format: "esm"
            }
        ]
    },
    {
        input: "src/cli.js",
        output: [
            {
                banner: "#!/usr/bin/env node\n",
                file: "dist/cli.js",
                format: "esm"
            }
        ]
    }
];
