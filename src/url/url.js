class Url {
    /**
     * @param {string} url
     * @returns {Url}
     */
    constructor(url) {
        this._url = url;
    }

    /**
     *
     * @returns {string}
     */
    toString() {
        return this._url;
    }
}

export {Url}
