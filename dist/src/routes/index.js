"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var routes = express_1.Router();
routes.get('/', function (req, res) {
    return res.send({ Por: 'Rafael Santos Monte'
    });
});
exports.default = routes;