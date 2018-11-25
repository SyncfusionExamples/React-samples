"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var React = require("react");
var line_1 = require("./line");
var spline_1 = require("./spline");
var step_line_1 = require("./step-line");
var dashed_line_1 = require("./dashed-line");
var spline_inversed_1 = require("./spline-inversed");
var line_segments_1 = require("./line-segments");
var line_multi_color_1 = require("./line-multi-color");
var area_1 = require("./area");
var spline_area_1 = require("./spline-area");
var step_area_1 = require("./step-area");
var range_area_1 = require("./range-area");
var stacked_area_1 = require("./stacked-area");
var stacked_area_100_1 = require("./stacked-area-100");
var area_empty_1 = require("./area-empty");
var area_segments_1 = require("./area-segments");
var column_1 = require("./column");
var rounded_column_1 = require("./rounded-column");
var column_placement_1 = require("./column-placement");
var range_column_1 = require("./range-column");
var range_bar_1 = require("./range-bar");
var bar_1 = require("./bar");
var stacked_column_1 = require("./stacked-column");
var stacked_column_100_1 = require("./stacked-column-100");
var stacked_bar_1 = require("./stacked-bar");
var stacked_bar_100_1 = require("./stacked-bar-100");
var tornado_1 = require("./tornado");
var hilo_1 = require("./hilo");
var hilo_open_close_1 = require("./hilo-open-close");
var candle_stick_1 = require("./candle-stick");
var scatter_plot_1 = require("./scatter-plot");
var bubble_1 = require("./bubble");
var waterfall_1 = require("./waterfall");
var histogram_1 = require("./histogram");
var box_and_whisker_1 = require("./box-and-whisker");
var error_bar_1 = require("./error-bar");
var trend_lines_1 = require("./trend-lines");
var multi_series_chart_1 = require("./multi-series-chart");
var pareto_1 = require("./pareto");
var accumulation_distribution_indicator_1 = require("./accumulation-distribution-indicator");
var average_true_range_indicator_1 = require("./average-true-range-indicator");
var bollinger_1 = require("./bollinger");
var exponential_moving_average_indicator_1 = require("./exponential-moving-average-indicator");
var moving_average_convergence_divergence_indicator_1 = require("./moving-average-convergence-divergence-indicator");
var momentum_1 = require("./momentum");
var relative_strength_index_indicator_1 = require("./relative-strength-index-indicator");
var simple_moving_average_indicator_1 = require("./simple-moving-average-indicator");
var stochastic_1 = require("./stochastic");
var triangular_moving_average_indicator_1 = require("./triangular-moving-average-indicator");
var chart_performance_1 = require("./chart-performance");
var default_pie_1 = require("./default-pie");
var donut_1 = require("./donut");
var pyramid_1 = require("./pyramid");
var funnel_1 = require("./funnel");
var default_doughnut_1 = require("./default-doughnut");
var semi_pie_1 = require("./semi-pie");
var smart_labels_1 = require("./smart-labels");
var drill_down_pie_1 = require("./drill-down-pie");
var grouping_1 = require("./grouping");
var pie_empty_point_1 = require("./pie-empty-point");
var polar_line_1 = require("./polar-line");
var polar_spline_1 = require("./polar-spline");
var polar_area_1 = require("./polar-area");
var polar_stacking_area_1 = require("./polar-stacking-area");
var polar_scatter_1 = require("./polar-scatter");
var polar_column_1 = require("./polar-column");
var polar_stacking_column_1 = require("./polar-stacking-column");
var polar_range_column_1 = require("./polar-range-column");
var local_data_1 = require("./local-data");
var remote_data_1 = require("./remote-data");
var numeric_1 = require("./numeric");
var date_time_1 = require("./date-time");
var date_time_category_1 = require("./date-time-category");
var category_1 = require("./category");
var indexed_axis_1 = require("./indexed-axis");
var logarithmic_scale_1 = require("./logarithmic-scale");
var multiple_axis_1 = require("./multiple-axis");
var inversed_1 = require("./inversed");
var strip_line_1 = require("./strip-line");
var strip_line_recurrence_1 = require("./strip-line-recurrence");
var smart_axis_labels_1 = require("./smart-axis-labels");
var multi_level_label_1 = require("./multi-level-label");
var axes_crossing_1 = require("./axes-crossing");
var sorting_1 = require("./sorting");
var marker_chart_1 = require("./marker-chart");
var pie_annotation_1 = require("./pie-annotation");
var data_label_template_1 = require("./data-label-template");
var vertical_1 = require("./vertical");
var empty_point_1 = require("./empty-point");
var print_1 = require("./print");
var export_1 = require("./export");
var selection_1 = require("./selection");
var range_selection_1 = require("./range-selection");
var cross_hair_1 = require("./cross-hair");
var trackball_1 = require("./trackball");
var zooming_1 = require("./zooming");
exports.chartRoutes = (React.createElement("div", null,
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/line', component: line_1.Line }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/spline', component: spline_1.Spline }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/step-line', component: step_line_1.StepLine }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/dashed-line', component: dashed_line_1.DashedLine }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/spline-inversed', component: spline_inversed_1.SplineInversed }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/line-segments', component: line_segments_1.LineZone }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/line-multi-color', component: line_multi_color_1.LineMultiLine }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/area', component: area_1.Area }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/spline-area', component: spline_area_1.SplineArea }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/step-area', component: step_area_1.StepArea }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/range-area', component: range_area_1.RangeArea }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/stacked-area', component: stacked_area_1.StackedArea }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/stacked-area-100', component: stacked_area_100_1.StackedArea100 }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/area-empty', component: area_empty_1.AreaEmpty }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/area-segments', component: area_segments_1.AreaMultiColored }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/column', component: column_1.Column }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/rounded-column', component: rounded_column_1.RoundedColumn }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/column-placement', component: column_placement_1.ColumnPlacement }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/range-column', component: range_column_1.RangeColumn }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/range-bar', component: range_bar_1.RangeBar }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/bar', component: bar_1.Bar }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/stacked-column', component: stacked_column_1.StackedColumn }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/stacked-column-100', component: stacked_column_100_1.StackedColumn100 }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/stacked-bar', component: stacked_bar_1.StackedBar }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/stacked-bar-100', component: stacked_bar_100_1.StackedBar100 }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/tornado', component: tornado_1.NegativeStack }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/hilo', component: hilo_1.Hilo }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/hilo-open-close', component: hilo_open_close_1.HiloOpenClose }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/candle-stick', component: candle_stick_1.Candle }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/scatter-plot', component: scatter_plot_1.Scatter }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/bubble', component: bubble_1.Bubble }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/waterfall', component: waterfall_1.Waterfall }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/histogram', component: histogram_1.Histogram }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/box-and-whisker', component: box_and_whisker_1.BoxWhisker }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/error-bar', component: error_bar_1.ErrorBarChart }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/trend-lines', component: trend_lines_1.Trend }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/multi-series-chart', component: multi_series_chart_1.CombinationSeries }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/pareto', component: pareto_1.ParetoChart }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/accumulation-distribution-indicator', component: accumulation_distribution_indicator_1.AccumulationDistribution }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/average-true-range-indicator', component: average_true_range_indicator_1.ATR }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/bollinger', component: bollinger_1.Bollinger }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/exponential-moving-average-indicator', component: exponential_moving_average_indicator_1.EMA }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/moving-average-convergence-divergence-indicator', component: moving_average_convergence_divergence_indicator_1.Macd }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/momentum', component: momentum_1.Momentum }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/relative-strength-index-indicator', component: relative_strength_index_indicator_1.RSI }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/simple-moving-average-indicator', component: simple_moving_average_indicator_1.SMA }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/stochastic', component: stochastic_1.Stochastic }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/triangular-moving-average-indicator', component: triangular_moving_average_indicator_1.TMA }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/chart-performance', component: chart_performance_1.Performance }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/default-pie', component: default_pie_1.Pie }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/donut', component: donut_1.AccumulationDoughnut }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/pyramid', component: pyramid_1.Pyramid }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/funnel', component: funnel_1.Funnel }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/default-doughnut', component: default_doughnut_1.Doughnut }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/semi-pie', component: semi_pie_1.SemiPie }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/smart-labels', component: smart_labels_1.SmartLabels }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/drill-down-pie', component: drill_down_pie_1.Drilldown }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/grouping', component: grouping_1.Grouping }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/pie-empty-point', component: pie_empty_point_1.PieEmptyPoint }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/polar-line', component: polar_line_1.PolarLine }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/polar-spline', component: polar_spline_1.PolarSpline }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/polar-area', component: polar_area_1.PolarArea }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/polar-stacking-area', component: polar_stacking_area_1.PolarStackedArea }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/polar-scatter', component: polar_scatter_1.PolarScatter }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/polar-column', component: polar_column_1.PolarColumn }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/polar-stacking-column', component: polar_stacking_column_1.PolarStackedColumn }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/polar-range-column', component: polar_range_column_1.PolarRangeColumn }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/local-data', component: local_data_1.LocalData }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/remote-data', component: remote_data_1.RemoteData }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/numeric', component: numeric_1.Numeric }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/date-time', component: date_time_1.DateTimeAxis }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/date-time-category', component: date_time_category_1.DatetimeCategoryAxis }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/category', component: category_1.CategoryAxis }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/indexed-axis', component: indexed_axis_1.IndexedAxis }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/logarithmic-scale', component: logarithmic_scale_1.LogAxis }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/multiple-axis', component: multiple_axis_1.MultipleAxis }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/inversed', component: inversed_1.InversedAxis }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/strip-line', component: strip_line_1.Stripline }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/strip-line-recurrence', component: strip_line_recurrence_1.Striplinerecurrence }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/smart-axis-labels', component: smart_axis_labels_1.SmartAxisLabels }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/multi-level-label', component: multi_level_label_1.Multilevellabels }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/axes-crossing', component: axes_crossing_1.AxisCrossing }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/sorting', component: sorting_1.Sorting }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/marker-chart', component: marker_chart_1.Symbols }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/pie-annotation', component: pie_annotation_1.Annotation }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/data-label-template', component: data_label_template_1.DataLabelTemplate }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/vertical', component: vertical_1.VerticalChart }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/empty-point', component: empty_point_1.EmptyPoint }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/print', component: print_1.Print }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/export', component: export_1.Export }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/selection', component: selection_1.SelectionChart }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/range-selection', component: range_selection_1.RangeSelection }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/cross-hair', component: cross_hair_1.CrosshairChart }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/trackball', component: trackball_1.TrackballChart }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/chart/zooming', component: zooming_1.Zooming })));
exports.chartCategory = { "line": { "name": "Line", "category": "Line Charts" }, "spline": { "name": "Spline", "category": "Line Charts" }, "step-line": { "name": "Step Line", "category": "Line Charts" }, "dashed-line": { "name": "Dashed Line", "category": "Line Charts" }, "spline-inversed": { "name": "Inversed Spline", "category": "Line Charts" }, "line-segments": { "name": "Line Zone", "category": "Line Charts" }, "line-multi-color": { "name": "Multi Colored Line", "category": "Line Charts" }, "area": { "name": "Area", "category": "Area Charts" }, "spline-area": { "name": "Spline Area", "category": "Area Charts" }, "step-area": { "name": "Step Area", "category": "Area Charts" }, "range-area": { "name": "Range Area", "category": "Area Charts" }, "stacked-area": { "name": "Stacked Area", "category": "Area Charts" }, "stacked-area-100": { "name": "100% Stacked Area", "category": "Area Charts" }, "area-empty": { "name": "Area - Empty Points", "category": "Area Charts" }, "area-segments": { "name": "Area Zone", "category": "Area Charts" }, "column": { "name": "Column", "category": "Bar Charts" }, "rounded-column": { "name": "Rounded Column", "category": "Bar Charts" }, "column-placement": { "name": "Back to Back Column", "category": "Bar Charts" }, "range-column": { "name": "Range Column", "category": "Bar Charts" }, "range-bar": { "name": "Inversed Range Column", "category": "Bar Charts" }, "bar": { "name": "Bar", "category": "Bar Charts" }, "stacked-column": { "name": "Stacked Column", "category": "Bar Charts" }, "stacked-column-100": { "name": "100% Stacked Column", "category": "Bar Charts" }, "stacked-bar": { "name": "Stacked Bar", "category": "Bar Charts" }, "stacked-bar-100": { "name": "100% Stacked Bar", "category": "Bar Charts" }, "tornado": { "name": "Negative Stack", "category": "Bar Charts" }, "hilo": { "name": "Hilo", "category": "Stock Charts" }, "hilo-open-close": { "name": "Hilo Open Close", "category": "Stock Charts" }, "candle-stick": { "name": "Candle Stick", "category": "Stock Charts" }, "scatter-plot": { "name": "Scatter Plot", "category": "Scatter and Bubble" }, "bubble": { "name": "Bubble", "category": "Scatter and Bubble" }, "waterfall": { "name": "Waterfall", "category": "Other Types" }, "histogram": { "name": "Histogram", "category": "Other Types" }, "box-and-whisker": { "name": "Box and Whisker", "category": "Other Types" }, "error-bar": { "name": "Error Bar", "category": "Other Types" }, "trend-lines": { "name": "Trendlines", "category": "Other Types" }, "multi-series-chart": { "name": "Multi-Series Chart", "category": "Other Types" }, "pareto": { "name": "Pareto Chart", "category": "Other Types" }, "accumulation-distribution-indicator": { "name": "Accumulation Distribution", "category": "Technical Indicators" }, "average-true-range-indicator": { "name": "ATR", "category": "Technical Indicators" }, "bollinger": { "name": "Bollinger", "category": "Technical Indicators" }, "exponential-moving-average-indicator": { "name": "EMA", "category": "Technical Indicators" }, "moving-average-convergence-divergence-indicator": { "name": "MACD", "category": "Technical Indicators" }, "momentum": { "name": "Momentum", "category": "Technical Indicators" }, "relative-strength-index-indicator": { "name": "RSI", "category": "Technical Indicators" }, "simple-moving-average-indicator": { "name": "SMA", "category": "Technical Indicators" }, "stochastic": { "name": "Stochastic", "category": "Technical Indicators" }, "triangular-moving-average-indicator": { "name": "TMA", "category": "Technical Indicators" }, "chart-performance": { "name": "Chart Performance", "category": "Benchmark" }, "default-pie": { "name": "Pie", "category": "Accumulation Charts" }, "donut": { "name": "Donut", "category": "Accumulation Charts" }, "pyramid": { "name": "Pyramid", "category": "Accumulation Charts" }, "funnel": { "name": "Funnel", "category": "Accumulation Charts" }, "default-doughnut": { "name": "Pie With Legend", "category": "Accumulation Charts" }, "semi-pie": { "name": "Semi Pie", "category": "Accumulation Charts" }, "smart-labels": { "name": "Smart Labels", "category": "Accumulation Charts" }, "drill-down-pie": { "name": "Drilldown", "category": "Accumulation Charts" }, "grouping": { "name": "Grouping", "category": "Accumulation Charts" }, "pie-empty-point": { "name": "Empty Points", "category": "Accumulation Charts" }, "polar-line": { "name": "Line", "category": "Polar Radar" }, "polar-spline": { "name": "Spline", "category": "Polar Radar" }, "polar-area": { "name": "Area", "category": "Polar Radar" }, "polar-stacking-area": { "name": "Stacked Area", "category": "Polar Radar" }, "polar-scatter": { "name": "Scatter", "category": "Polar Radar" }, "polar-column": { "name": "Column", "category": "Polar Radar" }, "polar-stacking-column": { "name": "Wind Rose", "category": "Polar Radar" }, "polar-range-column": { "name": "Range Column", "category": "Polar Radar" }, "local-data": { "name": "Local Data", "category": "Data Binding" }, "remote-data": { "name": "Remote Data", "category": "Data Binding" }, "numeric": { "name": "Numeric Axis", "category": "Chart Axes" }, "date-time": { "name": "DateTime Axis", "category": "Chart Axes" }, "date-time-category": { "name": "DateTime Category Axis", "category": "Chart Axes" }, "category": { "name": "Category Axis", "category": "Chart Axes" }, "indexed-axis": { "name": "Indexed Category Axis", "category": "Chart Axes" }, "logarithmic-scale": { "name": "Logarithmic Scale", "category": "Chart Axes" }, "multiple-axis": { "name": "Multiple Axis", "category": "Chart Axes" }, "inversed": { "name": "Inversed Axis", "category": "Chart Axes" }, "strip-line": { "name": "Strip Line", "category": "Chart Axes" }, "strip-line-recurrence": { "name": "Strip Line Recurrence", "category": "Chart Axes" }, "smart-axis-labels": { "name": "Smart Labels", "category": "Chart Axes" }, "multi-level-label": { "name": "Multi Level Labels", "category": "Chart Axes" }, "axes-crossing": { "name": "Axes Crossing", "category": "Chart Axes" }, "sorting": { "name": "Sorting", "category": "Chart Customization" }, "marker-chart": { "name": "Marker Chart", "category": "Chart Customization" }, "pie-annotation": { "name": "Annotation", "category": "Chart Customization" }, "data-label-template": { "name": "DataLabel Template", "category": "Chart Customization" }, "vertical": { "name": "Vertical Chart", "category": "Chart Customization" }, "empty-point": { "name": "Empty Points", "category": "Chart Customization" }, "print": { "name": "Print", "category": "Print and Export" }, "export": { "name": "Export", "category": "Print and Export" }, "selection": { "name": "Selection", "category": "User Interaction" }, "range-selection": { "name": "Range Selection", "category": "User Interaction" }, "cross-hair": { "name": "Crosshair", "category": "User Interaction" }, "trackball": { "name": "Trackball", "category": "User Interaction" }, "zooming": { "name": "Zooming and Panning", "category": "User Interaction" }, "defaultSample": "chart/line" };
