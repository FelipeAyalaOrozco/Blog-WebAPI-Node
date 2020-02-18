"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var user_1 = __importDefault(require("./user"));
var commentSchema = new mongoose_1.default.Schema({
    id: {
        type: String
    },
    comment: {
        type: String
    },
    author: {
        type: user_1.default
    },
    date: {
        type: String
    }
});
var Comment = mongoose_1.default.model('Comment', commentSchema);
exports.default = Comment;
//# sourceMappingURL=comment.js.map