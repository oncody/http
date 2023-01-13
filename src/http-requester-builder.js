import Cookies from "./cookies.js";
import HttpRequester from "./http-requester.js";
import Url from "./url/url.js"

export default class HttpRequesterBuilder {

    /**
     * @param {Url} url
     * @returns {HttpRequesterBuilder}
     */
    constructor(url) {
        this._url = url;
        this._cookies = new Cookies();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @returns HttpRequesterBuilder
     */
    cookie(key, value) {
        this._cookies.add(key, value);
        return this;
    }

    /**
     * @returns {HttpRequester}
     */
    build() {
        return new HttpRequester(this._url, this._cookies);
    }
}