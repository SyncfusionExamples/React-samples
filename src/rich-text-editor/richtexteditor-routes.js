"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var React = require("react");
var tools_1 = require("./tools");
var rich_text_editor_1 = require("./rich-text-editor");
var image_1 = require("./image");
var inline_1 = require("./inline");
var iframe_1 = require("./iframe");
var print_1 = require("./print");
var ajax_load_1 = require("./ajax-load");
var api_1 = require("./api");
var client_side_events_1 = require("./client-side-events");
var blog_posting_1 = require("./blog-posting");
var types_1 = require("./types");
var custom_toolbar_1 = require("./custom-toolbar");
var markdown_editor_1 = require("./markdown-editor");
var markdown_editor_preview_1 = require("./markdown-editor-preview");
var markdown_editor_custom_format_1 = require("./markdown-editor-custom-format");
exports.richtexteditorRoutes = (React.createElement("div", null,
    React.createElement(react_router_dom_1.Route, { path: '/:theme/rich-text-editor/tools', component: tools_1.Overview }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/rich-text-editor/rich-text-editor', component: rich_text_editor_1.Default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/rich-text-editor/image', component: image_1.ImageSample }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/rich-text-editor/inline', component: inline_1.Inline }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/rich-text-editor/iframe', component: iframe_1.IFrame }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/rich-text-editor/print', component: print_1.Print }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/rich-text-editor/ajax-load', component: ajax_load_1.AjaxContent }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/rich-text-editor/api', component: api_1.RTEApi }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/rich-text-editor/client-side-events', component: client_side_events_1.RTEEvents }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/rich-text-editor/blog-posting', component: blog_posting_1.Forums }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/rich-text-editor/types', component: types_1.Type }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/rich-text-editor/custom-toolbar', component: custom_toolbar_1.CustomTool }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/rich-text-editor/markdown-editor', component: markdown_editor_1.MarkDown }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/rich-text-editor/markdown-editor-preview', component: markdown_editor_preview_1.Preview }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/rich-text-editor/markdown-editor-custom-format', component: markdown_editor_custom_format_1.CustomFormat })));
exports.richtexteditorCategory = { "tools": { "name": "Overview", "category": "RichTextEditor" }, "rich-text-editor": { "name": "Default Functionalities", "category": "RichTextEditor" }, "image": { "name": "Image", "category": "RichTextEditor" }, "inline": { "name": "Inline", "category": "RichTextEditor" }, "iframe": { "name": "IFrame", "category": "RichTextEditor" }, "print": { "name": "Print", "category": "RichTextEditor" }, "ajax-load": { "name": "Ajax Content", "category": "RichTextEditor" }, "api": { "name": "API", "category": "RichTextEditor" }, "client-side-events": { "name": "Events", "category": "RichTextEditor" }, "blog-posting": { "name": "Use Case", "category": "RichTextEditor" }, "types": { "name": "Type", "category": "Toolbar" }, "custom-toolbar": { "name": "Custom Tool", "category": "Toolbar" }, "markdown-editor": { "name": "Overview", "category": "Markdown Editor" }, "markdown-editor-preview": { "name": "Preview", "category": "Markdown Editor" }, "markdown-editor-custom-format": { "name": "Custom Format", "category": "Markdown Editor" }, "defaultSample": "rich-text-editor/tools" };
