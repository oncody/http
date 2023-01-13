import Url from "./url.js";

export default class UrlBuilder {
    /**
     * @param {string} url
     * @returns {UrlBuilder}
     */
    constructor(url) {
        this._url = url;
        this._urlSearchParameters = new URLSearchParams();
    }

    /**
     * This will replace existing values. To append values, use queryparams append
     * @param {string} key
     * @param {string} value
     * @returns {UrlBuilder}
     */
    query(key, value) {
        this._urlSearchParameters.set(key, value);
        return this;
    }

    /**
     * @returns {Url}
     */
    build() {
        let url = this._url;
        if(this._urlSearchParameters.entries().next()) {
            url += '?' + this._urlSearchParameters;
        }
        return new Url(url);
    }
}