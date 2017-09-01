'use strict';
var dataProvider = require('../../data/specs/_search.js');
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
     */
    post: function searchApiSpecs(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
