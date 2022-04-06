"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var Adress = new Schema({
    adress_id: { type: String },
    adress: { type: String }
}, { timestamps: true });
var AdressModel = mongoose_1.default.model('Adress', Adress);
exports.default = AdressModel;
