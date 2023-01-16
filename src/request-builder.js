import {Cookies} from "./cookies.js";
import {Request} from "./request.js";
import {Url} from "./url/url.js"

class RequestBuilder {
    /**
     * @param {Url} url
     * @returns {RequestBuilder}
     */
    constructor(url) {
        this._url = url;
        this._cookies = new Cookies();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @returns RequestBuilder
     */
    cookie(key, value) {
        this._cookies.add(key, value);
        return this;
    }

    /**
     * @returns {Request}
     */
    build() {
        return new Request(this._url, this._cookies);
    }
}

export {RequestBuilder}