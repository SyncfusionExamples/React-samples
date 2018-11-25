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
 * Dynamic gauge
 */
var React = require("react");
var ej2_react_circulargauge_1 = require("@syncfusion/ej2-react-circulargauge");
var ej2_circulargauge_1 = require("@syncfusion/ej2-circulargauge");
var dynamic_service_1 = require("./dynamic-service");
var sample_base_1 = require("../common/sample-base");
var SAMPLE_CSS = "\n    .control-fluid {\n\t\tpadding: 0px !important;\n    }";
var Dynamic = (function (_super) {
    __extends(Dynamic, _super);
    function Dynamic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GEARS = [0.14, 0.06, 0.035, 0.027, 0.019];
        _this.speed = 0;
        _this.skip = 0;
        _this.gear = 0;
        _this.count = 0;
        _this.start = true;
        _this.gauge1StartAngle = 200;
        _this.gauge1EndAngle = 365;
        _this.gauge2StartAngle = 110;
        _this.gauge2EndAngle = 180;
        _this.gauge3StartAngle = 0;
        _this.gauge3EndAngle = 70;
        _this.gauge1Interval = 1;
        _this.gauge1FontSize = '14px';
        _this.gauge1Radius = '95%';
        _this.subGauge1Radius = '95%';
        _this.subGauge2Radius = '75%';
        _this.tickWidth = 3;
        _this.annotationContent = '<div><span>RPM <br/>X 1000</span></div>';
        _this.annotationRadius = '40%';
        _this.annotationAngle = 200;
        _this.centerX = '47%';
        _this.centerY = '50%';
        _this.fuelRadius = '40%';
        _this.gauge1LineWidth = 10;
        _this.cloudAngle = 10;
        _this.tickHeight = 10;
        _this.gaugeLineStyle = { width: 0 };
        _this.gaugeLabelStyle = {
            position: 'Inside', format: '####', font: { size: '14px', color: '#565656' }
        };
        _this.gaugeMajorTicks = {
            width: 3, height: 15, color: '#565656', interval: 20
        };
        _this.gaugeMinorTicks = {
            width: 2, height: 10, color: '#565656'
        };
        _this.gaugePointers = [{
                value: 0, radius: '65%',
                pointerWidth: 8,
                cap: { color: '#FF9200', radius: 9, border: { width: 0, color: '#FF7A00' } },
                needleTail: { length: '20%', color: '#FF9200' },
                color: '#FF9200',
                animation: {
                    enable: true
                }
            }];
        _this.gaugeLineStyle1 = { width: 10, color: '#565656' };
        _this.gaugeLabelStyle1 = {
            font: { size: '0px' }
        };
        _this.gaugeMajorTicks1 = {
            height: 0
        };
        _this.gaugeMinorTicks1 = {
            height: 0
        };
        _this.gaugePointers1 = [];
        _this.gaugeAnnotations1 = [{
                zIndex: '1', angle: 270, radius: '100%'
            }, {
                zIndex: '1', angle: 90, radius: '110%'
            }, {
                zIndex: '1', angle: 90, radius: '110%'
            }, {
                zIndex: '1', angle: 180, radius: '40%', content: '0 KM/H'
            }];
        return _this;
    }
    Dynamic.prototype.load = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
    };
    Dynamic.prototype.gaugeLoad = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        var width = args.gauge.element.offsetWidth;
        var height = args.gauge.element.offsetHeight;
        if (width < 700) {
            this.gauge1StartAngle = 310;
            this.gauge1EndAngle = 50;
            this.gauge2StartAngle = 10;
            this.gauge2EndAngle = 90;
            this.gauge3StartAngle = 270;
            this.gauge3EndAngle = 350;
            this.gauge1Interval = 2;
            this.gauge1FontSize = '10px';
            this.gauge1Radius = '70%';
            this.subGauge1Radius = '85%';
            this.subGauge2Radius = '65%';
            this.centerX = '50%';
            this.centerY = '30%';
            this.cloudAngle = 300;
            this.annotationContent = '<div style="font-size: 8px;"><span>RPM X 1000</span></div>';
            this.annotationAngle = 180;
            this.fuelRadius = '-25%';
            this.annotationRadius = '10';
            this.tickWidth = 2;
            this.tickHeight = 8;
            this.gauge1LineWidth = 0;
            args.gauge.axes[1].annotations[0].radius = '110%';
            args.gauge.axes[1].annotations[0].angle = 180;
            args.gauge.axes[1].annotations[1].radius = '20%';
            args.gauge.axes[1].annotations[1].angle = 40;
            args.gauge.axes[1].annotations[2].radius = '20%';
            args.gauge.axes[1].annotations[2].angle = 320;
            args.gauge.axes[1].annotations[0].content = '<div id="rpm" style="width:' + 200 + 'px;height:' + 200 + 'px;"></div>';
            args.gauge.axes[1].annotations[1].content = '<div id="fuel" style="width:' + 200 + 'px;height:' + 200 + 'px;"></div>';
            args.gauge.axes[1].annotations[2].content = '<div id="battery" style="width:' + 200 + 'px;height:' + 200 + 'px;"></div>';
        }
        else {
            width = width / 3;
            args.gauge.axes[1].annotations[0].content =
                '<div id="rpm" style="width:' + width + 'px;height:' + width + 'px;"></div>';
            args.gauge.axes[1].annotations[1].content =
                '<div id="fuel" style="width:' + width + 'px;height:' + width + 'px;"></div>';
            args.gauge.axes[1].annotations[2].content =
                '<div id="battery" style="width:' + width + 'px;height:' + width + 'px;"></div>';
        }
    };
    ;
    Dynamic.prototype.gaugeResize = function (args) {
        location.reload();
    };
    Dynamic.prototype.gaugeLoaded = function (args) {
        var _this = this;
        document.getElementById(args.gauge.element.id).setAttribute('title', '');
        this.circularGauge2 = new ej2_circulargauge_1.CircularGauge(dynamic_service_1.DynamicDataSerive.prototype.GetSubGauge1().gauge1);
        this.circularGauge2.appendTo('#rpm');
        this.circularGauge2.centerX = this.centerX;
        this.circularGauge2.centerY = this.centerY;
        this.circularGauge2.axes[0].annotations = [{
                content: this.annotationContent,
                angle: this.annotationAngle,
                radius: this.annotationRadius
            }];
        this.circularGauge2.axes[0].startAngle = this.gauge1StartAngle;
        this.circularGauge2.axes[0].endAngle = this.gauge1EndAngle;
        this.circularGauge2.axes[0].labelStyle.font.size = this.gauge1FontSize;
        this.circularGauge2.axes[0].majorTicks = {
            width: this.tickWidth,
            height: this.tickHeight,
            interval: this.gauge1Interval,
            useRangeColor: true
        };
        this.circularGauge2.axes[0].minorTicks = {
            height: this.tickHeight,
            width: this.tickWidth,
            useRangeColor: true
        };
        this.circularGauge2.axes[0].radius = this.gauge1Radius;
        this.circularGauge2.axes[1].lineStyle.width = this.gauge1LineWidth;
        this.circularGauge2.refresh();
        this.circularGauge3 = new ej2_circulargauge_1.CircularGauge(dynamic_service_1.DynamicDataSerive.prototype.GetSubGauge1().gauge2);
        this.circularGauge3.appendTo('#fuel');
        this.circularGauge3.axes[0].startAngle = this.gauge2StartAngle;
        this.circularGauge3.axes[0].endAngle = this.gauge2EndAngle;
        this.circularGauge3.axes[0].majorTicks = {
            width: this.tickWidth,
            height: this.tickHeight,
            interval: 40,
            useRangeColor: true
        };
        this.circularGauge3.axes[0].minorTicks = {
            height: this.tickHeight,
            width: this.tickWidth,
            useRangeColor: true,
            interval: 5
        };
        this.circularGauge3.axes[0].radius = this.subGauge2Radius;
        this.circularGauge3.axes[0].annotations = [{
                radius: this.fuelRadius,
                content: '<div id="templateWrap"><img src="src/circulargauge/images/fuel.png"></div>',
                angle: 180
            }];
        this.circularGauge3.refresh();
        this.circularGauge4 = new ej2_circulargauge_1.CircularGauge(dynamic_service_1.DynamicDataSerive.prototype.GetSubGauge1().gauge3);
        this.circularGauge4.appendTo('#battery');
        this.circularGauge4.axes[0].startAngle = this.gauge3StartAngle;
        this.circularGauge4.axes[0].endAngle = this.gauge3EndAngle;
        this.circularGauge4.axes[0].majorTicks = {
            width: this.tickWidth,
            height: this.tickHeight,
            interval: 40,
            useRangeColor: true
        };
        this.circularGauge4.axes[0].minorTicks = {
            height: this.tickHeight,
            width: this.tickWidth,
            useRangeColor: true,
            interval: 5
        };
        this.circularGauge4.axes[0].radius = this.subGauge1Radius;
        this.circularGauge4.axes[0].annotations = [{
                radius: '50%',
                content: '<div id="templateWrap"><img src="src/circulargauge/images/battery.png"></div>',
                angle: this.cloudAngle
            }];
        this.circularGauge4.axes[1].lineStyle.width = this.gauge1LineWidth;
        this.circularGauge4.refresh();
        this.tooltipInterval1 = setInterval(function () {
            if (document.getElementById('dynamic-container')) {
                if (_this.speed < 200 && _this.start) {
                    _this.count = 0;
                    _this.circularGauge1.axes[0].pointers[0].animation.duration = 30;
                    _this.circularGauge2.axes[0].pointers[0].animation.duration = 30;
                    if (_this.GEARS[_this.gear] * _this.speed > 4 && _this.gear < _this.GEARS.length) {
                        _this.gear++;
                        _this.skip = 400 / 50;
                    }
                    if (_this.skip-- < 0) {
                        _this.speed += 0.6 - (0.0017 * _this.speed);
                    }
                    _this.circularGauge1.setPointerValue(0, 0, _this.speed);
                    _this.circularGauge1.setAnnotationValue(1, 3, Math.round(_this.speed) + ' KM/H');
                    _this.circularGauge2.setPointerValue(0, 0, _this.GEARS[_this.gear] * _this.speed + 0.9);
                }
                else {
                    _this.count = _this.count + 1;
                    if (_this.start) {
                        if (_this.count < 200) {
                            _this.circularGauge1.setAnnotationValue(1, 3, Math.round((Math.random() * (200 - 202) + 202)) + ' KM');
                            _this.circularGauge1.setPointerValue(0, 0, Math.random() * (200 - 202) + 202);
                        }
                        else {
                            _this.speed = 0;
                            _this.gear = 0;
                            _this.circularGauge1.axes[0].pointers[0].animation.duration = 2000;
                            _this.circularGauge2.axes[0].pointers[0].animation.duration = 2000;
                            _this.circularGauge1.setPointerValue(0, 0, _this.speed);
                            _this.circularGauge1.setAnnotationValue(1, 3, Math.round(_this.speed) + ' KM/H');
                            _this.circularGauge2.setPointerValue(0, 0, 0);
                            _this.start = false;
                        }
                    }
                    else {
                        _this.start = _this.count > 350;
                    }
                }
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 50);
    };
    Dynamic.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_circulargauge_1.CircularGaugeComponent, { id: 'dynamic-container', load: this.gaugeLoad.bind(this), loaded: this.gaugeLoaded.bind(this), resized: this.gaugeResize.bind(this), ref: function (gauge) { return _this.circularGauge1 = gauge; } },
                    React.createElement(ej2_react_circulargauge_1.Inject, { services: [ej2_react_circulargauge_1.Annotations] }),
                    React.createElement(ej2_react_circulargauge_1.AxesDirective, null,
                        React.createElement(ej2_react_circulargauge_1.AxisDirective, { lineStyle: this.gaugeLineStyle, majorTicks: this.gaugeMajorTicks, minorTicks: this.gaugeMinorTicks, labelStyle: this.gaugeLabelStyle, minimum: 0, maximum: 220, radius: '100%', startAngle: 240, endAngle: 120, pointers: this.gaugePointers }),
                        React.createElement(ej2_react_circulargauge_1.AxisDirective, { lineStyle: this.gaugeLineStyle1, majorTicks: this.gaugeMajorTicks1, minorTicks: this.gaugeMinorTicks1, pointers: this.gaugePointers1, labelStyle: this.gaugeLabelStyle1, annotations: this.gaugeAnnotations1, radius: '90%', startAngle: 0, endAngle: 0 })))),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "Pointer values in the gauge can be updated dynamically using ",
                    React.createElement("code", null, "setPointerValue"),
                    " method. In this example a speedometer is depicted with speed and fuel changes has been updated dynamically."),
                React.createElement("p", null,
                    "More information on the gauge can be found in this",
                    React.createElement("a", { target: "_blank", href: "http://ej2.syncfusion.com/documentation" }, " documentation section"),
                    "."))));
    };
    return Dynamic;
}(sample_base_1.SampleBase));
exports.Dynamic = Dynamic;
