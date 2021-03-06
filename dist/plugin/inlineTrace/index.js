"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApolloServerPluginInlineTraceDisabled = exports.ApolloServerPluginInlineTrace = void 0;
const apollo_reporting_protobuf_1 = require("apollo-reporting-protobuf");
const traceTreeBuilder_1 = require("../traceTreeBuilder");
function ApolloServerPluginInlineTrace(options = Object.create(null)) {
    return {
        __internal_plugin_id__() {
            return 'InlineTrace';
        },
        requestDidStart({ request: { http } }) {
            const treeBuilder = new traceTreeBuilder_1.TraceTreeBuilder({
                rewriteError: options.rewriteError,
            });
            if ((http === null || http === void 0 ? void 0 : http.headers.get('apollo-federation-include-trace')) !== 'ftv1') {
                return;
            }
            treeBuilder.startTiming();
            return {
                executionDidStart: () => ({
                    willResolveField({ info }) {
                        return treeBuilder.willResolveField(info);
                    },
                }),
                didEncounterErrors({ errors }) {
                    treeBuilder.didEncounterErrors(errors);
                },
                willSendResponse({ response }) {
                    treeBuilder.stopTiming();
                    const encodedUint8Array = apollo_reporting_protobuf_1.Trace.encode(treeBuilder.trace).finish();
                    const encodedBuffer = Buffer.from(encodedUint8Array, encodedUint8Array.byteOffset, encodedUint8Array.byteLength);
                    const extensions = response.extensions || (response.extensions = Object.create(null));
                    if (typeof extensions.ftv1 !== 'undefined') {
                        throw new Error('The `ftv1` extension was already present.');
                    }
                    extensions.ftv1 = encodedBuffer.toString('base64');
                },
            };
        },
    };
}
exports.ApolloServerPluginInlineTrace = ApolloServerPluginInlineTrace;
function ApolloServerPluginInlineTraceDisabled() {
    return {
        __internal_plugin_id__() {
            return 'InlineTrace';
        },
    };
}
exports.ApolloServerPluginInlineTraceDisabled = ApolloServerPluginInlineTraceDisabled;
//# sourceMappingURL=index.js.map