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
var ej2_react_diagrams_1 = require("@syncfusion/ej2-react-diagrams");
var sample_base_1 = require("../common/sample-base");
var ej2_data_1 = require("@syncfusion/ej2-data");
exports.familyData = [
    { Name: "Andrew", branch: "root", spouse: "Maria Anders" },
    { Name: "Janet", spouse: "Nancy Cruz", Category: "Andrew" },
    { Name: "Brian", spouse: "Donald Watt", Category: "Andrew" },
    { Name: "Kathleen", spouse: "Starr Barnette", Category: "Andrew" },
    { Name: "Thomas Hardy", spouse: "Patricia Joe", Category: "Janet" },
    { Name: "Melanie", spouse: "Anne Barnette", Category: "Janet" },
    { Name: "Francisco Yangi", spouse: "Christina kaff", Category: "Brian" },
    {
        Name: "Janine Labrune",
        spouse: "Elizabeth Roel",
        Category: "Thomas Hardy"
    },
    { Name: "Mario Pontes", spouse: "Yoshi Latimer", Category: "Thomas Hardy" },
    { Name: "Peter Citeaux", spouse: "Ann Devoon", Category: "Francisco Yangi" },
    {
        Name: "Martine Rancé",
        spouse: "Elizabeth Mary",
        Category: "Francisco Yangi"
    },
    { Name: "Yang", spouse: "Lino Rodri", Category: "Martine Rancé" },
    { Name: "Philip Cramer", spouse: "Pedro Afonso", Category: "Philip Cramer" }
];
var FamilyTree = (function (_super) {
    __extends(FamilyTree, _super);
    function FamilyTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FamilyTree.prototype.render = function () {
        return (React.createElement("div", { className: "control-pane" },
            React.createElement("div", { className: "control-section" },
                React.createElement("div", { style: { width: "100%" } },
                    React.createElement(ej2_react_diagrams_1.DiagramComponent, { id: "diagram", width: "100%", height: "499px", snapSettings: { constraints: ej2_react_diagrams_1.SnapConstraints.None }, 
                        //Configures data source
                        dataSourceSettings: {
                            id: "Name",
                            parentId: "Category",
                            dataManager: new ej2_data_1.DataManager(exports.familyData),
                            //binds the external data with node
                            doBinding: function (nodeModel, data, diagram) {
                                var key = "shape";
                                var name = "Name";
                                /* tslint:disable:no-string-literal */
                                nodeModel.shape = { type: "Text", content: data[name] };
                            }
                        }, 
                        //Configrues hierarchical tree layout
                        layout: {
                            type: "HierarchicalTree",
                            verticalSpacing: 45,
                            horizontalSpacing: 15
                        }, 
                        //Sets the default values of nodes
                        getNodeDefaults: function (obj, diagram) {
                            obj.backgroundColor = "#e8ebef";
                            obj.ports = [
                                {
                                    id: "port1",
                                    shape: "Circle",
                                    offset: { x: 0.5, y: 0.51 },
                                    height: 4,
                                    width: 4,
                                    visibility: ej2_react_diagrams_1.PortVisibility.Visible,
                                    style: {
                                        fill: "black"
                                    }
                                }
                            ];
                            return obj;
                        }, 
                        //Sets the default values of connector
                        getConnectorDefaults: function (connector, diagram) {
                            connector.type = "Orthogonal";
                            connector.sourcePortID = "port1";
                            connector.targetDecorator = { shape: "None" };
                            return connector;
                        }, 
                        //Customizes the content of the node
                        setNodeTemplate: function (node) {
                            return getNodeTemplate(node);
                        }, tool: ej2_react_diagrams_1.DiagramTools.ZoomPan },
                        React.createElement(ej2_react_diagrams_1.Inject, { services: [ej2_react_diagrams_1.DataBinding, ej2_react_diagrams_1.HierarchicalTree] })))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample visualizes the generations of a family.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "This example shows how to build a hierarchical tree from an external data source. The ",
                    React.createElement("code", null, "dataSourceSettings"),
                    " property can be used to map an external data source with diagram control. The",
                    " ",
                    React.createElement("code", null, "layout"),
                    " property can be used to automatically arrange the nodes."),
                React.createElement("p", { style: { fontWeight: 500 } }, "Injecting Module"),
                React.createElement("p", null,
                    "The diagram component\u2019s features are segregated into individual feature-wise modules. To generate diagrams from an external data source, inject ",
                    React.createElement("code", null, "DataBinding"),
                    " module using",
                    " ",
                    React.createElement("code", null, "Diagram.Inject(DataBinding)"),
                    " method. To automatically arrange the objects in a hierarchical structure, inject",
                    " ",
                    React.createElement("code", null, "HierarchicalTree"),
                    " module into ",
                    React.createElement("code", null, "services"),
                    "."),
                React.createElement("br", null))));
    };
    return FamilyTree;
}(sample_base_1.SampleBase));
exports.FamilyTree = FamilyTree;
//Creation of TextElement
function getTextElement(text, color, alignment) {
    var textElement = new ej2_react_diagrams_1.TextElement();
    textElement.width = 60;
    textElement.height = 35;
    textElement.content = text;
    textElement.style.fill = color;
    textElement.horizontalAlignment = alignment;
    textElement.style.strokeColor = "none";
    textElement.relativeMode = "Object";
    return textElement;
}
//Creation of PathElement
function getPathElement(data) {
    var pathElement = new ej2_react_diagrams_1.PathElement();
    pathElement.data = data;
    pathElement.style.strokeColor = " black";
    pathElement.style.strokeWidth = 1;
    pathElement.verticalAlignment = "Center";
    pathElement.relativeMode = "Object";
    return pathElement;
}
//Customizes the content of the node
function getNodeTemplate(node) {
    var canvas = new ej2_react_diagrams_1.Canvas();
    canvas.children = [];
    canvas.width = 140;
    canvas.style.strokeWidth = 0;
    canvas.style.fill = "transparent";
    canvas.margin = { left: 5, right: 5, top: 5, bottom: 5 };
    canvas.children.push(getPathElement("M 0 100 L 140 100 "));
    var nameKey = "Name";
    var spouseNameKey = "spouse";
    /* tslint:disable:no-string-literal */
    canvas.children.push(getTextElement(node.data[nameKey], "#c8c8f5", "Left"));
    /* tslint:disable:no-string-literal */
    canvas.children.push(getTextElement(node.data[spouseNameKey], "#f3bcd7", "Right"));
    return canvas;
}
