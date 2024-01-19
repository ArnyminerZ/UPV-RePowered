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
    /** @type {HTMLDivElement[]|null} */
    const containers = $$('.containerurl');
    if (containers == null || containers.length <= 0) return;

    for (const container of containers) {
        const ol = $('ol', container);
        /** @type {string} */
        const link = $('.conturltext', ol).value;
        const code = link
            .replace('http://www.upv.es/ical/', '');
        const upvFixLink = `https://upvfix.arnyminerz.com/intranet/${code}`;

        const item = document.createElement('li');
        item.innerHTML = localizedString('upvfix_message');
        item.innerHTML += `<br/><br/><div class="conturl"><textarea class="conturltext" readonly>${upvFixLink}</textarea></div>`
        ol.appendChild(item);
    }

    const portletBody = $('.portletBody');
    const well = $('.well', portletBody);
    if (well == null) return;

    /** @type {HTMLAnchorElement[]|null} */
    const links = $$('a', well);
    if (links == null || links.length <= 0) return;

    const httpsLink = links[1].innerText;
    const uuid = httpsLink
        .replace('http://www.upv.es/ical/', '');
    const upvFixLink = `https://upvfix.arnyminerz.com/intranet/${uuid}`;

    const paragraph = document.createElement('p');
    paragraph.innerHTML = localizedString('upvfix_link')?.replaceAll('{upvFixLink}', upvFixLink);
    well.appendChild(paragraph);
}

// Run all the logic
run();
