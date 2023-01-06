/**
 * @fileoverview Formatter for Disqus comments.
 * @author Nicholas C. Zakas
 */

/** @typedef {import('./disqus.js').DisqusComment} DisqusComment */

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

/**
 * Encapsulates functionality for processing comments from the Disqus API.
 */
export class Processor {

    /**
     * Processes comments so that they are grouped by thread.
     * @param {Array<DisqusComment>} comments The Disqus comments to process.
     * @returns {Object} An object whose keys are the URLs for which there are
     *  comment threads and whose values are the threads themselves. 
     */
    process(comments) {

        /** @type {Map<string,Object>} */
        const threads = new Map();

        comments.forEach(comment => {

            let thread = threads.get(comment.thread.id);
            if (!thread) {
                thread = comment.thread;
                threads.set(thread.id, thread);
                thread.comments = [];
            }

            delete comment.thread;
            thread.comments.push(comment);
        });

        const threadsByUrl = {};

        threads.forEach(thread => {
            threadsByUrl[thread.link] = thread;
        });

        return threadsByUrl;

    }
}
