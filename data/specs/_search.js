"use strict";
var Mockgen = require("../mockgen.js");
var request = require("request");
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
     * const host = "https://SearchKits:vnvkviwh8s9nbwucsnra2rf4a0swscej@ori-eu-west-1.searchly.com"
     */
    post: {
        200: function (req, res, callback) {
            var options = {
                url: "http://demo.searchkit.co/api/movies/_search",
                method: "POST",
                body: req.body
            };
            request(options, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    callback(null, body);
                } else {
                    callback(error, null);
                }
            });
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
