"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var Users = new Schema({
    name: { type: String },
    surname: { type: String },
    position: String,
    adress_id: String,
}, { timestamps: true });
var UserModel = mongoose_1.default.model('User', Users);
exports.default = UserModel;
