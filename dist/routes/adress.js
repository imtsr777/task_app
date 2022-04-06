"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var adress_1 = __importDefault(require("../controllers/adress"));
var router = express_1.Router();
router.post("/add", adress_1.default.ADD);
exports.default = {
    router: router
};
