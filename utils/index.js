import MarkdownIt from 'markdown-it'

export const md = new MarkdownIt({
    html: false
})

/**
 * Strips output into md'less string.
 * @param {string} md
 * @param {Object} options
 */
export const stripMd = (md, options = {}) => {
    options.listUnicodeChar = options.hasOwnProperty('listUnicodeChar')
        ? options.listUnicodeChar
        : false
    options.stripListLeaders = options.hasOwnProperty('stripListLeaders')
        ? options.stripListLeaders
        : true
    options.gfm = options.hasOwnProperty('gfm') ? options.gfm : true

    var output = md || ''

    // Remove horizontal rules (stripListHeaders conflict with this rule, which is why it has been moved to the top)
    output = output.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm, '')

    try {
        if (options.stripListLeaders) {
            if (options.listUnicodeChar)
                output = output.replace(
                    /^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,
                    options.listUnicodeChar + ' $1'
                )
            else output = output.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, '$1')
        }
        if (options.gfm) {
            output = output
                // Header
                .replace(/\n={2,}/g, '\n')
                // Fenced codeblocks
                .replace(/~{3}.*\n/g, '')
                // Strikethrough
                .replace(/~~/g, '')
                // Fenced codeblocks
                .replace(/`{3}.*\n/g, '')
        }
        output = output
            // Remove HTML tags
            .replace(/<[^>]*>/g, '')
            // Remove setext-style headers
            .replace(/^[=\-]{2,}\s*$/g, '')
            // Remove footnotes?
            .replace(/\[\^.+?\](\: .*?$)?/g, '')
            .replace(/\s{0,2}\[.*?\]: .*?$/g, '')
            // Remove images
            .replace(/\!\[.*?\][\[\(].*?[\]\)]/g, '')
            // Remove inline links
            .replace(/\[(.*?)\][\[\(].*?[\]\)]/g, '$1')
            // Remove blockquotes
            .replace(/^\s{0,3}>\s?/g, '')
            // Remove reference-style links?
            .replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, '')
            // Remove atx-style headers
            .replace(
                /^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm,
                '$1$2$3'
            )
            // Remove emphasis (repeat the line to remove double emphasis)
            .replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, '$2')
            .replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, '$2')
            // Remove code blocks
            .replace(/(`{3,})(.*?)\1/gm, '$2')
            // Remove inline code
            .replace(/`(.+?)`/g, '$1')
            // Replace two or more newlines with exactly two? Not entirely sure this belongs here...
            .replace(/\n{2,}/g, '\n\n')
    } catch (e) {
        console.error(e)
        return md
    }
    return output
}

/**
 * @param {String} string String to truncate.
 * @param {Number} max Truncate treshold. Defaults to 85
 */
export const truncateString = (string, max = 85) => {
    return string.length > max ? string.substring(0, max) + '...' : string
}