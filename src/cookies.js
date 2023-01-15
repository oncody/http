import Objects from "@oncody/objects";

export default class Cookies {
    /**
     * @returns {Cookies}
     */
    constructor() {
        /**
         * @type {Object.<string, string>}
         * @private
         */
        this._cookies = {};
    }

    /**
     * @param {string} key
     * @param {string} value
     * @returns {Cookies}
     */
    add(key, value) {
        this._cookies[key] = value;
        return this;
    }

    /**
     * @returns {string}
     */
    toString() {
        return Objects.join(this._cookies, '=', '; ');
    }
}