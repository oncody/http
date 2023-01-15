import axios from "axios";

export default class HttpRequest {
    /**
     *
     * @param {URL} url
     * @param {Cookies} cookies
     */
    constructor(url, cookies) {
        this._url = url;
        this._cookies = cookies;
    }

    async get() {
        return await axios.get(this._url.toString(), {
            headers: {
                cookie: this._cookies.toString()
            }
        });
    }

}