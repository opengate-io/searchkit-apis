"use strict";
var Mockgen = require("../mockgen.js");
/**
 * Operations on /specs/_search
 */
module.exports = {
    /**
     * summary: 
     * description: Search &#39;API&#39; specs against ElasticSearch.
     * parameters: body
     * produces: application/json
     * responses: 200, default
     * operationId: searchApiSpecs
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: "/specs/_search",
                operation: "post",
                response: "200"
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: "/specs/_search",
                operation: "post",
                response: "default"
            }, callback);
        }
    }
};
