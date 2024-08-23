/**
 * @template {keyof HTMLElementTagNameMap} T
 * @param {T} tagName
 * @param {Object} options
 * @returns {HTMLElementTagNameMap[T]}
 */
const tag = (tagName, options = {}) => {
    return document.createElement(tagName);
};

tag.get = document.querySelector.bind(document);
tag.getAll = document.querySelectorAll.bind(document);
