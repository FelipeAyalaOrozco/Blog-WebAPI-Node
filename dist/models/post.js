"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var user_1 = __importDefault(require("./user"));
var comment_1 = __importDefault(require("./comment"));
var postSchema = new mongoose_1.default.Schema({
    id: {
        type: String
    },
    title: {
        type: String
    },
    date: {
        type: String
    },
    author: {
        type: user_1.default
    },
    comments: [{
            type: comment_1.default
        }],
    totalComments: {
        type: Number
    },
    content: {
        type: String
    }
});
var Post = mongoose_1.default.model('Post', postSchema);
exports.default = Post;
//# sourceMappingURL=post.js.map