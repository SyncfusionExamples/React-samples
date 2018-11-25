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
require("./data-binding.css");
/**
 * Menu data binding sample
 */
var DataBinding = (function (_super) {
    __extends(DataBinding, _super);
    function DataBinding() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //Menu datasource
        _this.menuDataSource = [
            { id: 'parent1', text: 'Appliances', parentId: null },
            { id: 'parent2', text: 'Accessories', parentId: null },
            { id: 'parent3', text: 'Fashion', parentId: null },
            { id: 'parent4', text: 'Home & Living', parentId: null },
            { id: 'parent5', text: 'Entertainment', parentId: null },
            { id: 'parent6', text: 'Kitchen', parentId: 'parent1' },
            { id: 'parent7', text: 'Washing Machine', parentId: 'parent1' },
            { id: 'parent8', text: 'Air Conditioners', parentId: 'parent1' },
            { id: 'parent9', text: 'Electric Cookers', parentId: 'parent6' },
            { id: 'parent10', text: 'Coffee Makers', parentId: 'parent6' },
            { id: 'parent11', text: 'Blenders', parentId: 'parent6' },
            { id: 'parent12', text: 'Fully Automatic', parentId: 'parent7' },
            { id: 'parent13', text: 'Semi Automatic', parentId: 'parent7' },
            { id: 'parent14', text: 'Inverter AC', parentId: 'parent8' },
            { id: 'parent15', text: 'Split ACs', parentId: 'parent8' },
            { id: 'parent16', text: 'Window ACs', parentId: 'parent8' },
            { id: 'parent17', text: 'Mobile', parentId: 'parent2' },
            { id: 'parent18', text: 'Computer', parentId: 'parent2' },
            { id: 'parent19', text: 'Headphones', parentId: 'parent17' },
            { id: 'parent20', text: 'Memory Cards', parentId: 'parent17' },
            { id: 'parent21', text: 'Power Banks', parentId: 'parent17' },
            { id: 'parent22', text: 'Pendrives', parentId: 'parent18' },
            { id: 'parent23', text: 'External Hard Disks', parentId: 'parent18' },
            { id: 'parent24', text: 'Monitors', parentId: 'parent18' },
            { id: 'parent25', text: 'Men', parentId: 'parent3' },
            { id: 'parent26', text: 'Women', parentId: 'parent3' },
            { id: 'parent27', text: 'Shirts', parentId: 'parent25' },
            { id: 'parent28', text: 'Jackets', parentId: 'parent25' },
            { id: 'parent29', text: 'Track Suits', parentId: 'parent25' },
            { id: 'parent30', text: 'Kurtas', parentId: 'parent26' },
            { id: 'parent31', text: 'Salwars', parentId: 'parent26' },
            { id: 'parent32', text: 'Sarees', parentId: 'parent26' },
            { id: 'parent33', text: 'Furniture', parentId: 'parent4' },
            { id: 'parent34', text: 'Decor', parentId: 'parent4' },
            { id: 'parent35', text: 'Beds', parentId: 'parent33' },
            { id: 'parent36', text: 'Mattresses', parentId: 'parent33' },
            { id: 'parent37', text: 'Dining tables', parentId: 'parent33' },
            { id: 'parent38', text: 'Clocks', parentId: 'parent34' },
            { id: 'parent39', text: 'Wall Decals', parentId: 'parent34' },
            { id: 'parent40', text: 'Paitings', parentId: 'parent34' },
            { id: 'parent41', text: 'Televisions', parentId: 'parent5' },
            { id: 'parent42', text: 'Home Theatres', parentId: 'parent5' },
            { id: 'parent43', text: 'Gaming Laptparents', parentId: 'parent5' }
        ];
        return _this;
    }
    DataBinding.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { className: 'menu-section' },
                    React.createElement("div", { id: 'dataBinding' },
                        React.createElement(ej2_react_navigations_1.MenuComponent, { items: this.menuDataSource })))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    "This sample demonstrates the way of data binding in ",
                    React.createElement("code", null, "menu"),
                    " component with JavaScript object array (local data source). Interact with ",
                    React.createElement("code", null, "menu"),
                    " using hover / click action.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The menu component loads the data through the ",
                    React.createElement("code", null, "items"),
                    " property, where the data can either be structured as hierarchical or self-referential data, i.e. mapped with id and parentId fields."),
                React.createElement("p", null, "In this demo, the component is bound with the list type data where the parent-child relation is referred by id and parentId mapping fields."),
                React.createElement("p", null,
                    "More information about menu can be found in this",
                    React.createElement("a", { target: "_blank", href: "http://ej2.syncfusion.com/react/documentation/menu/data-binding.html" }, "data binding"),
                    " section."))));
    };
    return DataBinding;
}(sample_base_1.SampleBase));
exports.DataBinding = DataBinding;
