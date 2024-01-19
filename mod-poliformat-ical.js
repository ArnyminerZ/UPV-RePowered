/**
 * Alias for document.querySelector.
 * @param {string} selector The selector for searching for the element. # prefix for id, . for class names, and no prefix for tag name.
 * @param {ParentNode|null} parent The parent element to search into.
 * @returns {Node|null}
 */
const $ = (selector, parent = document) => parent?.querySelector(selector);

/**
 * Alias for document.querySelectorAll.
 * @param {string} selector The selector for searching for the element. # prefix for id, . for class names, and no prefix for tag name.
 * @param {ParentNode|null} parent The parent element to search into.
 * @returns {Node[]|null}
 */
const $$ = (selector, parent = document) => parent?.querySelectorAll(selector);

/**
 * @param {string} key
 * @return {string|null}
 */
const localizedString = (key) => {
    if(chrome != null)
        return chrome.i18n.getMessage(key);
    else if(firefox != null)
        return firefox.i18n.getMessage(key);
    else
        return null;
}

function run() {
    // For detecting if we are in the correct page, we check that the regenerate links button exists, and that there's a
    // ".portletBody" with ".well" inside. And it has two links, one for webcals and another for https.

    const regenerateButton = $('[name="eventSubmit_doOpaqueUrlRegenerate"]');
    // Only continue if the link regeneration button exists.
    if (regenerateButton == null) return;

    const portletBody = $('.portletBody');
    const well = $('.well', portletBody);
    if (well == null) return;

    /** @type {HTMLAnchorElement[]|null} */
    const links = $$('a', well);
    if (links == null || links.length <= 0) return;
    const httpsLink = links[1].innerText;
    const uuid = httpsLink
        .replace('https://poliformat.upv.es/access/calendar/opaq/', '')
        .replace('/main.ics', '');
    const upvFixLink = `https://upvfix.arnyminerz.com/poliformat/${uuid}`;

    const paragraph = document.createElement('p');
    paragraph.innerHTML = localizedString('upvfix_link')?.replaceAll('{upvFixLink}', upvFixLink);
    well.appendChild(paragraph);
}

// Run all the logic
run();
