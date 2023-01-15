import Cookies from "./cookies.js";
import HttpRequest from "./http-request.js";
import Url from "./url/url.js"

export default class HttpRequestBuilder {

    /**
     * @param {Url} url
     * @returns {HttpRequestBuilder}
     */
    constructor(url) {
        this._url = url;
        this._cookies = new Cookies();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @returns HttpRequestBuilder
     */
    cookie(key, value) {
        this._cookies.add(key, value);
        return this;
    }

    /**
     * @returns {HttpRequest}
     */
    build() {
        return new HttpRequest(this._url, this._cookies);
    }
}