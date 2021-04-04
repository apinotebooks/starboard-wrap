import { ContentUpdateMessage, InboundNotebookMessage, NotebookMessage, OutboundNotebookMessage, ReadySignalMessage, SaveMessage } from "../messages/types";
export declare type StarboardNotebookIFrameOptions<ReceivedMessageType = OutboundNotebookMessage> = {
    src: string;
    autoResize: boolean;
    inPageLinks: boolean;
    notebookContent?: string;
    notebookContainer?: object;
    notebookVariables?: any;
    onNotebookReadySignalMessage(payload: ReadySignalMessage['payload']): void;
    onSaveMessage(payload: SaveMessage['payload']): void;
    onContentUpdateMessage(payload: ContentUpdateMessage['payload']): void;
    onMessage(message: ReceivedMessageType): void;
    sandbox: string;
    debug: boolean;
};
export declare type StarboardNotebookMessage = {
    type: "SIGNAL_READY" | "SET_NOTEBOOK_CONTENT" | "NOTEBOOK_CONTENT_UPDATE" | "SAVE";
};
export declare class StarboardNotebookIFrame extends HTMLIFrameElement {
    private options?;
    private constructorOptions;
    private notebookVariables?;
    private _notebookContent;
    get notebookContent(): string;
    set notebookContent(content: string);
    version: string;
    /**
     * This is set automatically by iframeResizer.
     */
    private iFrameResizer;
    constructor(opts?: Partial<StarboardNotebookIFrameOptions>);
    connectedCallback(): void;
    sendMessage(message: InboundNotebookMessage): void;
    sendCustomMessage(message: NotebookMessage<string, any>): void;
    dispose(): void;
}
