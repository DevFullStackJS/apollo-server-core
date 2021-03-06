"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQLUpload = exports.gql = void 0;
require("apollo-server-env");
var runHttpQuery_1 = require("./runHttpQuery");
Object.defineProperty(exports, "runHttpQuery", { enumerable: true, get: function () { return runHttpQuery_1.runHttpQuery; } });
Object.defineProperty(exports, "HttpQueryError", { enumerable: true, get: function () { return runHttpQuery_1.HttpQueryError; } });
var graphqlOptions_1 = require("./graphqlOptions");
Object.defineProperty(exports, "resolveGraphqlOptions", { enumerable: true, get: function () { return graphqlOptions_1.resolveGraphqlOptions; } });
var apollo_server_errors_1 = require("apollo-server-errors");
Object.defineProperty(exports, "ApolloError", { enumerable: true, get: function () { return apollo_server_errors_1.ApolloError; } });
Object.defineProperty(exports, "toApolloError", { enumerable: true, get: function () { return apollo_server_errors_1.toApolloError; } });
Object.defineProperty(exports, "SyntaxError", { enumerable: true, get: function () { return apollo_server_errors_1.SyntaxError; } });
Object.defineProperty(exports, "ValidationError", { enumerable: true, get: function () { return apollo_server_errors_1.ValidationError; } });
Object.defineProperty(exports, "AuthenticationError", { enumerable: true, get: function () { return apollo_server_errors_1.AuthenticationError; } });
Object.defineProperty(exports, "ForbiddenError", { enumerable: true, get: function () { return apollo_server_errors_1.ForbiddenError; } });
Object.defineProperty(exports, "UserInputError", { enumerable: true, get: function () { return apollo_server_errors_1.UserInputError; } });
Object.defineProperty(exports, "formatApolloErrors", { enumerable: true, get: function () { return apollo_server_errors_1.formatApolloErrors; } });
var nodeHttpToRequest_1 = require("./nodeHttpToRequest");
Object.defineProperty(exports, "convertNodeHttpToRequest", { enumerable: true, get: function () { return nodeHttpToRequest_1.convertNodeHttpToRequest; } });
var playground_1 = require("./playground");
Object.defineProperty(exports, "createPlaygroundOptions", { enumerable: true, get: function () { return playground_1.createPlaygroundOptions; } });
Object.defineProperty(exports, "defaultPlaygroundOptions", { enumerable: true, get: function () { return playground_1.defaultPlaygroundOptions; } });
var ApolloServer_1 = require("./ApolloServer");
Object.defineProperty(exports, "ApolloServerBase", { enumerable: true, get: function () { return ApolloServer_1.ApolloServerBase; } });
__exportStar(require("./types"), exports);
__exportStar(require("./requestPipelineAPI"), exports);
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.gql = graphql_tag_1.default;
const runtimeSupportsUploads_1 = __importDefault(require("./utils/runtimeSupportsUploads"));
var processFileUploads_1 = require("./processFileUploads");
Object.defineProperty(exports, "processFileUploads", { enumerable: true, get: function () { return processFileUploads_1.default; } });
exports.GraphQLUpload = runtimeSupportsUploads_1.default
    ? require('graphql-upload').GraphQLUpload
    : undefined;
__exportStar(require("./plugin"), exports);
//# sourceMappingURL=index.js.map