"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var userSchema = new mongoose_1.default.Schema({
    id: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String,
        minlength: 5
    }
});
var commentSchema = new mongoose_1.default.Schema({
    id: {
        type: String
    },
    comment: {
        type: String
    },
    author: {
        type: userSchema
    },
    date: {
        type: String
    }
});
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
        type: userSchema
    },
    comments: [{
            type: commentSchema
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