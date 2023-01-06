/**
 * @fileoverview Downloader for Disqus comments.
 * @author Nicholas C. Zakas
 */

/** @typedef {import('./disqus.js').DisqusComment} DisqusComment */

//-----------------------------------------------------------------------------
// Constants
//-----------------------------------------------------------------------------

const DEFAULT_COMMENTS_LIMIT = 100;

//-----------------------------------------------------------------------------
// Helpers
//-----------------------------------------------------------------------------

/**
 * Creates the URL to use with the Disqus API.
 * @param {Object} options
 * @param {string} options.forum The name of the forum to download from.
 * @param {string} options.apiKey The API key to use with the Disqus API.
 * @param {number} options.limit The number of comments to download.
 */
function createDisqusUrl({ forum, apiKey, limit }) {
    return `https://disqus.com/api/3.0/posts/list.json?forum=${
        encodeURIComponent(forum)
    }&limit=${limit}&order=asc&related=thread&api_key=${apiKey}`;
}

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

/**
 * Encapsulates functionality for downloading comments from the Disqus API.
 */
export class Downloader {

    /**
     * Creates a new instance.
     * @param {Object} options
     * @param {string} options.forum The name of the forum to download from.
     * @param {string} options.apiKey The API key to use with the Disqus API.
     */
    constructor({ forum, apiKey }) {

        /**
         * The name of the forum to download from.
         * @type {string}
         */
        this.forum = forum;

        /**
         * The API key to use with the Disqus API.
         * @type {string}
         */
        this.apiKey = apiKey;
    }

    /**
     * Downloads the specified number of comments.
     * @returns {Promise<Array<DisqusComment>>} An array of comments.
     */
    async download() {

        const comments = [];
        let cursor;

        const baseUrl = createDisqusUrl({
            forum: this.forum,
            apiKey: this.apiKey,
            limit: DEFAULT_COMMENTS_LIMIT
        });

        do {
            
            // make the request
            const url = cursor ? `${baseUrl}&cursor=${cursor}` : baseUrl;
            const response = await fetch(url);
            const payload = await response.json();

            // process the response
            if (response.ok) {
                comments.push(...payload.response);

                // setup the next call
                cursor = payload.cursor.hasNext ? payload.cursor.next : null;

            } else {
                throw new Error(`Invalid status ${response.status}: ${payload.response}`);
            }

        } while (cursor);

        return comments;
    }
}
