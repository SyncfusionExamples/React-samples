"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_react_dropdowns_2 = require("@syncfusion/ej2-react-dropdowns");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var property_pane_1 = require("../common/property-pane");
var sample_base_1 = require("../common/sample-base");
require("./api.css");
var Api = (function (_super) {
    __extends(Api, _super);
    function Api() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //Menu datasource
        _this.data = [
            {
                header: 'Events',
                subItems: [
                    { text: 'Conferences' },
                    { text: 'Music' },
                    { text: 'Workshops' }
                ]
            },
            {
                header: 'Movies',
                subItems: [
                    { text: 'Now Showing' },
                    { text: 'Coming Soon' }
                ]
            },
            {
                header: 'Directory',
                subItems: [
                    { text: 'Media Gallery' },
                    { text: 'Newsletters' }
                ]
            },
            {
                header: 'Queries',
                subItems: [
                    { text: 'Our Policy' },
                    { text: 'Site Map' },
                    { text: '24x7 Support' }
                ]
            },
            { header: 'Services' }
        ];
        //Menu fields definition
        _this.menuFields = {
            iconCss: 'icon',
            text: ['header', 'text', 'value'],
            children: ['subItems', 'options']
        };
        //DropDownList datasource
        _this.modeData = [
            { text: 'Horizontal', value: 'Horizontal' },
            { text: 'Vertical', value: 'Vertical' }
        ];
        //MultiSelect datasource
        _this.headerData = [
            { text: 'Events' }, { text: 'Movies' }, { text: 'Directory' }, { text: 'Queries' }, { text: 'Services' }
        ];
        return _this;
    }
    Api.prototype.modeChange = function (args) {
        this.menuObj.orientation = args.itemData.value;
    };
    Api.prototype.enabledisableChange = function (args) {
        if (args.value) {
            this.menuObj.enableItems(['Events', 'Movies', 'Directory', 'Queries', 'Services'], true);
            this.menuObj.enableItems(args.value, false);
        }
    };
    //CheckBox change event
    Api.prototype.showOnClickChange = function (args) {
        this.menuObj.showItemOnClick = args.checked;
    };
    Api.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: "menu-section control-section" },
                React.createElement("div", { className: "col-lg-8 control-section" },
                    React.createElement("div", { id: "apiMenu" },
                        React.createElement(ej2_react_navigations_1.MenuComponent, { items: this.data, fields: this.menuFields, ref: function (scope) { _this.menuObj = scope; } }))),
                React.createElement("div", { className: "col-lg-4 property-section" },
                    React.createElement(property_pane_1.PropertyPane, { title: 'Properties' },
                        React.createElement("table", { id: "property", title: "Properties", style: { width: '100%' } },
                            React.createElement("tbody", null,
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '50%', paddingTop: '10px' } },
                                        React.createElement("div", null, "Orientation")),
                                    React.createElement("td", { style: { width: '50%', paddingTop: '10px' } },
                                        React.createElement("div", { style: { maxWidth: '200px' } },
                                            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { value: 'Horizontal', dataSource: this.modeData, popupHeight: '200px', change: this.modeChange.bind(this) })))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '50%', paddingTop: '10px' } },
                                        React.createElement("div", null, "Enable / Disable item")),
                                    React.createElement("td", { style: { width: '50%', paddingTop: '10px' } },
                                        React.createElement("div", { style: { maxWidth: '200px' } },
                                            React.createElement(ej2_react_dropdowns_2.MultiSelectComponent, { dataSource: this.headerData, popupHeight: '250px', width: '160px', mode: 'CheckBox', placeholder: 'Select item', showDropDownIcon: true, change: this.enabledisableChange.bind(this) },
                                                React.createElement(ej2_react_dropdowns_1.Inject, { services: [ej2_react_dropdowns_2.CheckBoxSelection] }))))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '50%', paddingTop: '15px' } },
                                        React.createElement("div", null, "Show Item on Click")),
                                    React.createElement("td", { style: { width: '50%', paddingTop: '15px' } },
                                        React.createElement(ej2_react_buttons_1.CheckBoxComponent, { checked: false, change: this.showOnClickChange.bind(this) })))))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    "This sample demonstrates the customization of ",
                    React.createElement("code", null, "menu"),
                    " component by using its properties from the property pane. Select any combination of properties from the property pane to customize ",
                    React.createElement("code", null, "menu"),
                    " component.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "In this demo, default menu is rendered with minimal configuration."),
                React.createElement("p", null,
                    "This sample can be customized further with the combination of ",
                    React.createElement("code", null, "menu"),
                    " properties from the property pane. For example,"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        "You can switch to ",
                        React.createElement("b", null, "Vertical"),
                        " and ",
                        React.createElement("b", null, "Horizontal"),
                        " modes by clicking and selecting the",
                        React.createElement("code", null, "orientation"),
                        " mode from ",
                        React.createElement("i", null, "Orientation"),
                        " dropdownlist."),
                    React.createElement("li", null,
                        "You can enable or disable menu items by clicking and selecting the item from ",
                        React.createElement("i", null, "Enable item"),
                        " or ",
                        React.createElement("i", null, "Disable item"),
                        " dropdownlists."),
                    React.createElement("li", null,
                        "You can also enable the show menu item on mouse click ",
                        React.createElement("code", null, "showItemOnClick"),
                        " property by checking the",
                        React.createElement("i", null, "Show item on Click"),
                        " checkbox.")),
                React.createElement("p", null,
                    "More information about menu can be found in this ",
                    React.createElement("a", { target: "_blank", href: "http://ej2.syncfusion.com/react/documentation/menu/api.html" }, "documentation"),
                    " section."))));
    };
    return Api;
}(sample_base_1.SampleBase));
exports.Api = Api;
