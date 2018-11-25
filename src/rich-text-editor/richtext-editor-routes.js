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
exports.richtext = -editorRoutes;
(React.createElement("div", null,
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
exports.richtext = -editorCategory, exports. = (_a = void 0, _b = _a["tools"], _c = _b["name"], _c === void 0 ? "Overview" : _c), exports. = (_d = _b["category"], _d === void 0 ? "RichTextEditor" : _d), exports. = (_e = _a["rich-text-editor"], _f = _e["name"], _f === void 0 ? "Default Functionalities" : _f), exports. = (_g = _e["category"], _g === void 0 ? "RichTextEditor" : _g), exports. = (_h = _a["image"], _j = _h["name"], _j === void 0 ? "Image" : _j), exports. = (_k = _h["category"], _k === void 0 ? "RichTextEditor" : _k), exports. = (_l = _a["inline"], _m = _l["name"], _m === void 0 ? "Inline" : _m), exports. = (_o = _l["category"], _o === void 0 ? "RichTextEditor" : _o), exports. = (_p = _a["iframe"], _q = _p["name"], _q === void 0 ? "IFrame" : _q), exports. = (_r = _p["category"], _r === void 0 ? "RichTextEditor" : _r), exports. = (_s = _a["print"], _t = _s["name"], _t === void 0 ? "Print" : _t), exports. = (_u = _s["category"], _u === void 0 ? "RichTextEditor" : _u), exports. = (_v = _a["ajax-load"], _w = _v["name"], _w === void 0 ? "Ajax Content" : _w), exports. = (_x = _v["category"], _x === void 0 ? "RichTextEditor" : _x), exports. = (_y = _a["api"], _z = _y["name"], _z === void 0 ? "API" : _z), exports. = (_0 = _y["category"], _0 === void 0 ? "RichTextEditor" : _0), exports. = (_1 = _a["client-side-events"], _2 = _1["name"], _2 === void 0 ? "Events" : _2), exports. = (_3 = _1["category"], _3 === void 0 ? "RichTextEditor" : _3), exports. = (_4 = _a["blog-posting"], _5 = _4["name"], _5 === void 0 ? "Use Case" : _5), exports. = (_6 = _4["category"], _6 === void 0 ? "RichTextEditor" : _6), exports. = (_7 = _a["types"], _8 = _7["name"], _8 === void 0 ? "Type" : _8), exports. = (_9 = _7["category"], _9 === void 0 ? "Toolbar" : _9), exports. = (_10 = _a["custom-toolbar"], _11 = _10["name"], _11 === void 0 ? "Custom Tool" : _11), exports. = (_12 = _10["category"], _12 === void 0 ? "Toolbar" : _12), exports. = (_13 = _a["markdown-editor"], _14 = _13["name"], _14 === void 0 ? "Overview" : _14), exports. = (_15 = _13["category"], _15 === void 0 ? "Markdown Editor" : _15), exports. = (_16 = _a["markdown-editor-preview"], _17 = _16["name"], _17 === void 0 ? "Preview" : _17), exports. = (_18 = _16["category"], _18 === void 0 ? "Markdown Editor" : _18), exports. = (_19 = _a["markdown-editor-custom-format"], _20 = _19["name"], _20 === void 0 ? "Custom Format" : _20), exports. = (_21 = _19["category"], _21 === void 0 ? "Markdown Editor" : _21), exports. = (_22 = _a["defaultSample"], _22 === void 0 ? "rich-text-editor/tools" : _22);
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22;
