"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersofDB = exports.usersSchema = void 0;
const mongoose_1 = require("mongoose");
exports.usersSchema = new mongoose_1.Schema({
    id: Number,
    name: String,
    mail: String,
    password: String,
    comment: String,
    experiencias: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Experience' }]
});
exports.usersofDB = (0, mongoose_1.model)('user', exports.usersSchema);
