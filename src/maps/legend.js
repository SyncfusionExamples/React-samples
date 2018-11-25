"use strict";
/**
 * Projection sample
 */
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
var ej2_maps_1 = require("@syncfusion/ej2-maps");
var ej2_react_maps_1 = require("@syncfusion/ej2-react-maps");
var sample_base_1 = require("../common/sample-base");
var SAMPLE_CSS = "\n    .control-fluid {\n\t\tpadding: 0px !important;\n    }";
var LegendMaps = (function (_super) {
    __extends(LegendMaps, _super);
    function LegendMaps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LegendMaps.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: 'control-section row' },
                React.createElement("div", { className: 'col-md-12' },
                    React.createElement(ej2_react_maps_1.MapsComponent, { id: "maps", tooltipRender: this.tooltip, loaded: this.onMapsLoad.bind(this), load: this.load, ref: function (m) { return _this.mapInstance = m; }, zoomSettings: {
                            enable: false
                        }, legendSettings: {
                            visible: true,
                            position: 'Top'
                        }, titleSettings: {
                            text: 'Population density (per square kilometers) - 2015',
                            textStyle: {
                                size: '16px'
                            }
                        } },
                        React.createElement(ej2_react_maps_1.Inject, { services: [ej2_react_maps_1.Legend, ej2_react_maps_1.MapsTooltip] }),
                        React.createElement(ej2_react_maps_1.LayersDirective, null,
                            React.createElement(ej2_react_maps_1.LayerDirective, { shapeData: new ej2_maps_1.MapAjax(location.origin + location.pathname + 'src/maps/map-data/world-map.json'), shapePropertyPath: 'name', shapeDataPath: 'name', dataSource: new ej2_maps_1.MapAjax(location.origin + location.pathname + 'src/maps/map-data/legend-datasource.json'), tooltipSettings: {
                                    visible: true,
                                    valuePath: 'name',
                                    format: '${name} : ${density} per square kms'
                                }, shapeSettings: {
                                    colorValuePath: 'density',
                                    colorMapping: [
                                        {
                                            from: 0.00001, to: 100, color: 'rgb(153,174,214)', label: '<100'
                                        },
                                        {
                                            from: 100, to: 200, color: 'rgb(115,143,199)', label: '100 - 200'
                                        },
                                        {
                                            from: 200, to: 300, color: 'rgb(77,112,184)', label: '200 - 300'
                                        },
                                        {
                                            from: 300, to: 500, color: 'rgb(38,82,168)', label: '300 - 500'
                                        },
                                        {
                                            from: 500, to: 19000, color: 'rgb(0,51,153)', label: '>500'
                                        }
                                    ]
                                } }))))),
            React.createElement("div", { style: { float: 'right', marginright: '10px' } },
                "Source:",
                React.createElement("a", { href: "https://simple.wikipedia.org/wiki/List_of_countries_by_population_density", target: "_blank" }, "simple.wikipedia.org")),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample visualizes grouping of countries in the legends based on its population density. The legend will be displayed at the top of the map.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "In this example, you can see how to render a legend in the maps. A legend item denotes the value of a shape. Any number of legend items can be added to the legend. You can bind the desired colors to the shapes, if its values are within the specified range using the ColorMapping property."),
                React.createElement("p", null, "Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over a shape or tap a shape in touch enabled devices."),
                React.createElement("br", null),
                React.createElement("p", { style: { fontweight: 500 } }, "Injecting Module"),
                React.createElement("p", null, "Maps component features are segregated into individual feature-wise modules. To use a legend, inject the Legend module using the Maps.Inject(Legend) method."))));
    };
    LegendMaps.prototype.onMapsLoad = function (args) {
        var maps = document.getElementById('maps');
        maps.setAttribute('title', '');
    };
    ;
    LegendMaps.prototype.load = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.maps.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
    };
    ;
    //tslint:disable
    LegendMaps.prototype.tooltip = function (args) {
        if (!args.options['data']) {
            args.cancel = true;
        }
    };
    return LegendMaps;
}(sample_base_1.SampleBase));
exports.LegendMaps = LegendMaps;
