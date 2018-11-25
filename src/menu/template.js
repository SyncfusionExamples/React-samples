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
var sample_base_1 = require("../common/sample-base");
require("./template.css");
/**
 * Menu Template sample
 */
var Template = (function (_super) {
    __extends(Template, _super);
    function Template() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //Template datasource
        _this.menuitems = [
            {
                category: 'Products',
                options: [
                    { value: 'JavaScript', url: 'javascript' },
                    { value: 'Angular', url: 'angular' },
                    { value: 'ASP.NET Core', url: 'core' },
                    { value: 'ASP.NET MVC', url: 'mvc' }
                ]
            },
            {
                category: 'Services',
                options: [
                    {
                        support: [
                            { value: 'Application Development', count: '1200+' },
                            { value: 'Maintenance & Support', count: '3700+' },
                            { value: 'Quality Assurance' },
                            { value: 'Cloud Integration', count: '900+' }
                        ]
                    }
                ]
            },
            {
                category: 'About Us',
                options: [
                    {
                        about: {
                            value: "We are on a mission to provide world-class best software solutions for web, mobile and desktop platforms. Around 900+ applications are desgined and delivered to our customers to make digital & strengthen their businesses."
                        }
                    }
                ]
            },
            { category: 'Careers' },
            { category: 'Sign In' }
        ];
        //Menu fields definition
        _this.menuFields = {
            text: ['category', 'value'],
            children: ['options']
        };
        return _this;
    }
    Template.prototype.menuTemplate = function (data) {
        return (data.category ? React.createElement("span", null, data.category) :
            (data.value && data.url) ?
                React.createElement("div", { className: 'e-avatar e-avatar-small image', style: { backgroundImage: 'url(src/menu/images/' + data.url + '.png)' } }, data.value) :
                data.support ?
                    React.createElement("ul", null, data.support.map(function (supp) { return React.createElement("li", null,
                        supp.value,
                        supp.count ? React.createElement("span", { className: 'e-badge e-badge-success' }, supp.count) : ""); })) :
                    React.createElement("div", { tabIndex: 0, className: "e-card" },
                        React.createElement("div", { className: "e-card-header" },
                            React.createElement("div", { className: "e-card-header-caption" },
                                React.createElement("div", { className: "e-card-header-title" }, "About Us"))),
                        React.createElement("div", { className: "e-card-content" }, data.about.value),
                        React.createElement("div", { className: "e-card-actions" },
                            React.createElement("button", { className: "e-btn e-outline" }, "Read More"))));
    };
    Template.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { className: 'menu-section' },
                    React.createElement("div", { className: 'template-menu-control' },
                        React.createElement(ej2_react_navigations_1.MenuComponent, { items: this.menuitems, fields: this.menuFields, template: this.menuTemplate })))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    "This sample demonstrates the template functionalities of the ",
                    React.createElement("code", null, "menu"),
                    " component. Interact with ",
                    React.createElement("code", null, "menu"),
                    " using hover / click to display sub menu pop-up items with its customized templates.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The menu component has an option to customize menu items using the ",
                    React.createElement("code", null, "template"),
                    " property, so that the menu items can be rendered according to the requirement."),
                React.createElement("p", null,
                    "In this demo, the below customization are demonstrated.",
                    React.createElement("ul", null,
                        React.createElement("li", null,
                            "Header menu items and the 'Products' sub menu items represents the customization of default rendering of li elements i.e. ",
                            React.createElement("b", null, "data.category"),
                            " in template."),
                        React.createElement("li", null,
                            "'Services' sub menu item represent the customization of single li element with simulate the default rendering of Products sub menu items i.e. ul li elements with added ",
                            React.createElement("code", null, "badge"),
                            " component are rendered in a single li with customized css styles."),
                        React.createElement("li", null,
                            "'About Us' sub menu item showed with ",
                            React.createElement("code", null, "card"),
                            " component in a single li."))),
                React.createElement("p", null,
                    "For more information, refer to the",
                    React.createElement("a", { target: "_blank", href: "http://ej2.syncfusion.com/react/documentation/menu/template.html" }, "templates"),
                    " section in the documentation."))));
    };
    return Template;
}(sample_base_1.SampleBase));
exports.Template = Template;
