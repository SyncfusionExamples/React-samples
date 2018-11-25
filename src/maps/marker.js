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
var marker_location_1 = require("./map-data/marker-location");
var SAMPLE_CSS = "\n    .control-fluid {\n\t\tpadding: 0px !important;\n    }";
var MarkerMaps = (function (_super) {
    __extends(MarkerMaps, _super);
    function MarkerMaps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MarkerMaps.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: 'control-section row' },
                React.createElement("div", { className: 'col-md-12' },
                    React.createElement(ej2_react_maps_1.MapsComponent, { id: "maps", loaded: this.onMapsLoad.bind(this), load: this.load, ref: function (m) { return _this.mapInstance = m; }, useGroupingSeparator: true, format: "n", zoomSettings: {
                            enable: false
                        }, titleSettings: {
                            text: 'Top 25 populated cities in the world',
                            textStyle: {
                                size: '16px'
                            }
                        } },
                        React.createElement(ej2_react_maps_1.Inject, { services: [ej2_react_maps_1.Marker, ej2_react_maps_1.MapsTooltip] }),
                        React.createElement(ej2_react_maps_1.LayersDirective, null,
                            React.createElement(ej2_react_maps_1.LayerDirective, { shapeData: new ej2_maps_1.MapAjax(location.origin + location.pathname + 'src/maps/map-data/world-map.json'), shapePropertyPath: 'name', shapeDataPath: 'Country', dataSource: marker_location_1.topPopulation, shapeSettings: {
                                    fill: '#C3E6ED'
                                } },
                                React.createElement(ej2_react_maps_1.MarkersDirective, null,
                                    React.createElement(ej2_react_maps_1.MarkerDirective, { visible: true, animationDuration: 0, shape: 'Circle', fill: 'white', width: 4, border: {
                                            color: '#285255',
                                            width: 2
                                        }, dataSource: marker_location_1.topPopulation, tooltipSettings: {
                                            template: '<div id="markertooltiptemplate" style="width: 170px;opacity: 90%;background: rgba(53, 63, 76, 0.90);box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.40);padding:10px;border: 1px #abb9c6;border-radius: 4px;">' +
                                                '<div style="font-size:13px;color:#ffffff;font-weight: 500;"><center>${name}</center></div>' +
                                                '<hr style="margin-top: 2px;margin-bottom:5px;border:0.5px solid #DDDDDD">' +
                                                '<div><span style="font-size:13px;color:#cccccc">Country : </span><span style="font-size:13px;color:#ffffff;font-weight: 500;">${Country}</span></div>' +
                                                '<div><span style="font-size:13px;color:#cccccc">Population : </span><span style="font-size:13px;color:#ffffff;font-weight: 500;">${population}</span></div></div>',
                                            visible: true,
                                            valuePath: 'population'
                                        } })))))),
                React.createElement("div", { style: { float: 'right', marginright: '10px' } },
                    "Source:",
                    React.createElement("a", { href: "http://www.citymayors.com/statistics/largest-cities-population-125.html", target: "_blank" }, "www.citymayors.com")),
                React.createElement("div", null)),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample visualizes the top 25 populated cities in the world by displaying the markers in their locations.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "In this example, you can see how to render the data labels for each shape in a map. Data labels are used to display the values of the shapes. You can use the ",
                    React.createElement("code", null, "autoFill"),
                    " property in the ",
                    React.createElement("code", null, "shapeSettings"),
                    " to apply the default palette colors to the shapes."),
                React.createElement("p", null, "Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over a shape or tap a shape in touch enabled devices."),
                React.createElement("br", null),
                React.createElement("p", { style: { fontweight: 500 } }, "Injecting Module"),
                React.createElement("p", null,
                    "Maps component features are segregated into individual feature-wise modules. To use a data label, inject the ",
                    React.createElement("code", null, "DataLabel"),
                    " module using the ",
                    React.createElement("code", null, "Maps.Inject(DataLabel)"),
                    " method."))));
    };
    MarkerMaps.prototype.onMapsLoad = function (args) {
        var maps = document.getElementById('maps');
        maps.setAttribute('title', '');
    };
    ;
    MarkerMaps.prototype.load = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.maps.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
    };
    ;
    return MarkerMaps;
}(sample_base_1.SampleBase));
exports.MarkerMaps = MarkerMaps;
