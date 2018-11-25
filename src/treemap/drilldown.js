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
/**
 * Drilldown sample for treemap
 */
var React = require("react");
var ej2_react_treemap_1 = require("@syncfusion/ej2-react-treemap");
var drilldown_sample_1 = require("./treemap-data/drilldown-sample");
var sample_base_1 = require("../common/sample-base");
var SAMPLE_CSS = "\n    .control-fluid {\n\t\tpadding: 0px !important;\n    }";
var Drilldown = (function (_super) {
    __extends(Drilldown, _super);
    function Drilldown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Drilldown.prototype.load = function (args) {
        var theme = location.hash.split('/')[1];
        theme = theme ? theme : 'Material';
        args.treemap.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
    };
    /* tslint:disable:no-string-literal */
    Drilldown.prototype.drillStart = function (args) {
        if (args.item[Object.keys(args.item)[0]].length === 1) {
            args.treemap.levels[2].showHeader = true;
        }
        else {
            args.treemap.levels[2].showHeader = false;
        }
    };
    Drilldown.prototype.tooltipRendering = function (args) {
        if (args.item['groupIndex'] !== 2) {
            args.cancel = true;
        }
    };
    Drilldown.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_treemap_1.TreeMapComponent, { drillStart: this.drillStart.bind(this), tooltipRendering: this.tooltipRendering.bind(this), load: this.load.bind(this), id: 'treemap-container', palette: ['#9999ff', '#CCFF99', '#FFFF99', '#FF9999', '#FF99FF', '#FFCC66'], titleSettings: {
                        text: 'List of countries by population',
                        textStyle: { size: '15px' }
                    }, enableDrillDown: true, format: "n", useGroupingSeparator: true, dataSource: drilldown_sample_1.DrillDown, weightValuePath: 'Population', tooltipSettings: {
                        visible: true,
                        format: '${Name} : ${Population}'
                    }, leafItemSettings: {
                        labelPath: 'Name',
                        showLabels: false,
                        labelStyle: { size: '0px' },
                        border: { color: 'black', width: 0.5 }
                    } },
                    React.createElement(ej2_react_treemap_1.Inject, { services: [ej2_react_treemap_1.TreeMapTooltip] }),
                    React.createElement(ej2_react_treemap_1.LevelsDirective, null,
                        React.createElement(ej2_react_treemap_1.LevelDirective, { groupPath: 'Continent', fill: '#336699', border: { color: 'black', width: 0.5 } }),
                        React.createElement(ej2_react_treemap_1.LevelDirective, { groupPath: 'States', fill: '#336699', border: { color: 'black', width: 0.5 } }),
                        React.createElement(ej2_react_treemap_1.LevelDirective, { groupPath: 'Region', showHeader: false, fill: '#336699', border: { color: 'black', width: 0.5 } })))),
            React.createElement("div", { style: { float: 'right', marginright: '10px' } },
                "Source:",
                React.createElement("a", { href: "https://en.wikipedia.org/wiki/List_of_continents_by_population", target: "_blank" }, "en.wikipedia.org")),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates drill-down with the continents at the top level followed by regions and countries. By clicking a continent, you can view all the countries available in that continent clearly.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "In this example you can see how to render a TreeMap with multiple items and drill it further. Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item in touch enabled devices."))));
    };
    return Drilldown;
}(sample_base_1.SampleBase));
exports.Drilldown = Drilldown;
