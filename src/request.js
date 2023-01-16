import axios from "axios";

import {Url} from "./url/Url.js";

class Request {
    /**
     *
     * @param {Url} url
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

export {Request}