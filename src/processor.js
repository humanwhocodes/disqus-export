/**
 * @fileoverview Formatter for Disqus comments.
 * @author Nicholas C. Zakas
 */

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

/**
 * Encapsulates functionality for processing comments from the Disqus API.
 */
export class Processor {

    /**
     * Processes comments so that they are grouped by thread.
     * @param {Array<Object>} comments The Disqus comments to process. 
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
