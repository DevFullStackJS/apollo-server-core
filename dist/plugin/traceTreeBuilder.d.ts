import { GraphQLError, GraphQLResolveInfo } from 'graphql';
import { Trace } from 'apollo-reporting-protobuf';
import { Logger } from 'apollo-server-types';
export declare class TraceTreeBuilder {
    private rootNode;
    private logger;
    trace: Trace;
    startHrTime?: [number, number];
    private stopped;
    private nodes;
    private readonly rewriteError?;
    constructor(options: {
        logger?: Logger;
        rewriteError?: (err: GraphQLError) => GraphQLError | null;
    });
    startTiming(): void;
    stopTiming(): void;
    willResolveField(info: GraphQLResolveInfo): () => void;
    didEncounterErrors(errors: readonly GraphQLError[]): void;
    private addProtobufError;
    private newNode;
    private ensureParentNode;
    private rewriteAndNormalizeError;
}
//# sourceMappingURL=traceTreeBuilder.d.ts.map