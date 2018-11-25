import {  Route } from 'react-router-dom';
import * as React from 'react';
import { Line } from './line';
import { Spline } from './spline';
import { StepLine } from './step-line';
import { DashedLine } from './dashed-line';
import { SplineInversed } from './spline-inversed';
import { LineZone } from './line-segments';
import { LineMultiLine } from './line-multi-color';
import { Area } from './area';
import { SplineArea } from './spline-area';
import { StepArea } from './step-area';
import { RangeArea } from './range-area';
import { StackedArea } from './stacked-area';
import { StackedArea100 } from './stacked-area-100';
import { AreaEmpty } from './area-empty';
import { AreaMultiColored } from './area-segments';
import { Column } from './column';
import { RoundedColumn } from './rounded-column';
import { ColumnPlacement } from './column-placement';
import { RangeColumn } from './range-column';
import { RangeBar } from './range-bar';
import { Bar } from './bar';
import { StackedColumn } from './stacked-column';
import { StackedColumn100 } from './stacked-column-100';
import { StackedBar } from './stacked-bar';
import { StackedBar100 } from './stacked-bar-100';
import { NegativeStack } from './tornado';
import { Hilo } from './hilo';
import { HiloOpenClose } from './hilo-open-close';
import { Candle } from './candle-stick';
import { Scatter } from './scatter-plot';
import { Bubble } from './bubble';
import { Waterfall } from './waterfall';
import { Histogram } from './histogram';
import { BoxWhisker } from './box-and-whisker';
import { ErrorBarChart } from './error-bar';
import { Trend } from './trend-lines';
import { CombinationSeries } from './multi-series-chart';
import { ParetoChart } from './pareto';
import { AccumulationDistribution } from './accumulation-distribution-indicator';
import { ATR } from './average-true-range-indicator';
import { Bollinger } from './bollinger';
import { EMA } from './exponential-moving-average-indicator';
import { Macd } from './moving-average-convergence-divergence-indicator';
import { Momentum } from './momentum';
import { RSI } from './relative-strength-index-indicator';
import { SMA } from './simple-moving-average-indicator';
import { Stochastic } from './stochastic';
import { TMA } from './triangular-moving-average-indicator';
import { Performance } from './chart-performance';
import { Pie } from './default-pie';
import { AccumulationDoughnut } from './donut';
import { Pyramid } from './pyramid';
import { Funnel } from './funnel';
import { Doughnut } from './default-doughnut';
import { SemiPie } from './semi-pie';
import { SmartLabels } from './smart-labels';
import { Drilldown } from './drill-down-pie';
import { Grouping } from './grouping';
import { PieEmptyPoint } from './pie-empty-point';
import { PolarLine } from './polar-line';
import { PolarSpline } from './polar-spline';
import { PolarArea } from './polar-area';
import { PolarStackedArea } from './polar-stacking-area';
import { PolarScatter } from './polar-scatter';
import { PolarColumn } from './polar-column';
import { PolarStackedColumn } from './polar-stacking-column';
import { PolarRangeColumn } from './polar-range-column';
import { LocalData } from './local-data';
import { RemoteData } from './remote-data';
import { Numeric } from './numeric';
import { DateTimeAxis } from './date-time';
import { DatetimeCategoryAxis } from './date-time-category';
import { CategoryAxis } from './category';
import { IndexedAxis } from './indexed-axis';
import { LogAxis } from './logarithmic-scale';
import { MultipleAxis } from './multiple-axis';
import { InversedAxis } from './inversed';
import { Stripline } from './strip-line';
import { Striplinerecurrence } from './strip-line-recurrence';
import { SmartAxisLabels } from './smart-axis-labels';
import { Multilevellabels } from './multi-level-label';
import { AxisCrossing } from './axes-crossing';
import { Sorting } from './sorting';
import { Symbols } from './marker-chart';
import { Annotation } from './pie-annotation';
import { DataLabelTemplate } from './data-label-template';
import { VerticalChart } from './vertical';
import { EmptyPoint } from './empty-point';
import { Print } from './print';
import { Export } from './export';
import { SelectionChart } from './selection';
import { RangeSelection } from './range-selection';
import { CrosshairChart } from './cross-hair';
import { TrackballChart } from './trackball';
import { Zooming } from './zooming';


export const chartRoutes = (
    <div>
         <Route  path='/:theme/chart/line' component={ Line }/>
         <Route  path='/:theme/chart/spline' component={ Spline }/>
         <Route  path='/:theme/chart/step-line' component={ StepLine }/>
         <Route  path='/:theme/chart/dashed-line' component={ DashedLine }/>
         <Route  path='/:theme/chart/spline-inversed' component={ SplineInversed }/>
         <Route  path='/:theme/chart/line-segments' component={ LineZone }/>
         <Route  path='/:theme/chart/line-multi-color' component={ LineMultiLine }/>
         <Route  path='/:theme/chart/area' component={ Area }/>
         <Route  path='/:theme/chart/spline-area' component={ SplineArea }/>
         <Route  path='/:theme/chart/step-area' component={ StepArea }/>
         <Route  path='/:theme/chart/range-area' component={ RangeArea }/>
         <Route  path='/:theme/chart/stacked-area' component={ StackedArea }/>
         <Route  path='/:theme/chart/stacked-area-100' component={ StackedArea100 }/>
         <Route  path='/:theme/chart/area-empty' component={ AreaEmpty }/>
         <Route  path='/:theme/chart/area-segments' component={ AreaMultiColored }/>
         <Route  path='/:theme/chart/column' component={ Column }/>
         <Route  path='/:theme/chart/rounded-column' component={ RoundedColumn }/>
         <Route  path='/:theme/chart/column-placement' component={ ColumnPlacement }/>
         <Route  path='/:theme/chart/range-column' component={ RangeColumn }/>
         <Route  path='/:theme/chart/range-bar' component={ RangeBar }/>
         <Route  path='/:theme/chart/bar' component={ Bar }/>
         <Route  path='/:theme/chart/stacked-column' component={ StackedColumn }/>
         <Route  path='/:theme/chart/stacked-column-100' component={ StackedColumn100 }/>
         <Route  path='/:theme/chart/stacked-bar' component={ StackedBar }/>
         <Route  path='/:theme/chart/stacked-bar-100' component={ StackedBar100 }/>
         <Route  path='/:theme/chart/tornado' component={ NegativeStack }/>
         <Route  path='/:theme/chart/hilo' component={ Hilo }/>
         <Route  path='/:theme/chart/hilo-open-close' component={ HiloOpenClose }/>
         <Route  path='/:theme/chart/candle-stick' component={ Candle }/>
         <Route  path='/:theme/chart/scatter-plot' component={ Scatter }/>
         <Route  path='/:theme/chart/bubble' component={ Bubble }/>
         <Route  path='/:theme/chart/waterfall' component={ Waterfall }/>
         <Route  path='/:theme/chart/histogram' component={ Histogram }/>
         <Route  path='/:theme/chart/box-and-whisker' component={ BoxWhisker }/>
         <Route  path='/:theme/chart/error-bar' component={ ErrorBarChart }/>
         <Route  path='/:theme/chart/trend-lines' component={ Trend }/>
         <Route  path='/:theme/chart/multi-series-chart' component={ CombinationSeries }/>
         <Route  path='/:theme/chart/pareto' component={ ParetoChart }/>
         <Route  path='/:theme/chart/accumulation-distribution-indicator' component={ AccumulationDistribution }/>
         <Route  path='/:theme/chart/average-true-range-indicator' component={ ATR }/>
         <Route  path='/:theme/chart/bollinger' component={ Bollinger }/>
         <Route  path='/:theme/chart/exponential-moving-average-indicator' component={ EMA }/>
         <Route  path='/:theme/chart/moving-average-convergence-divergence-indicator' component={ Macd }/>
         <Route  path='/:theme/chart/momentum' component={ Momentum }/>
         <Route  path='/:theme/chart/relative-strength-index-indicator' component={ RSI }/>
         <Route  path='/:theme/chart/simple-moving-average-indicator' component={ SMA }/>
         <Route  path='/:theme/chart/stochastic' component={ Stochastic }/>
         <Route  path='/:theme/chart/triangular-moving-average-indicator' component={ TMA }/>
         <Route  path='/:theme/chart/chart-performance' component={ Performance }/>
         <Route  path='/:theme/chart/default-pie' component={ Pie }/>
         <Route  path='/:theme/chart/donut' component={ AccumulationDoughnut }/>
         <Route  path='/:theme/chart/pyramid' component={ Pyramid }/>
         <Route  path='/:theme/chart/funnel' component={ Funnel }/>
         <Route  path='/:theme/chart/default-doughnut' component={ Doughnut }/>
         <Route  path='/:theme/chart/semi-pie' component={ SemiPie }/>
         <Route  path='/:theme/chart/smart-labels' component={ SmartLabels }/>
         <Route  path='/:theme/chart/drill-down-pie' component={ Drilldown }/>
         <Route  path='/:theme/chart/grouping' component={ Grouping }/>
         <Route  path='/:theme/chart/pie-empty-point' component={ PieEmptyPoint }/>
         <Route  path='/:theme/chart/polar-line' component={ PolarLine }/>
         <Route  path='/:theme/chart/polar-spline' component={ PolarSpline }/>
         <Route  path='/:theme/chart/polar-area' component={ PolarArea }/>
         <Route  path='/:theme/chart/polar-stacking-area' component={ PolarStackedArea }/>
         <Route  path='/:theme/chart/polar-scatter' component={ PolarScatter }/>
         <Route  path='/:theme/chart/polar-column' component={ PolarColumn }/>
         <Route  path='/:theme/chart/polar-stacking-column' component={ PolarStackedColumn }/>
         <Route  path='/:theme/chart/polar-range-column' component={ PolarRangeColumn }/>
         <Route  path='/:theme/chart/local-data' component={ LocalData }/>
         <Route  path='/:theme/chart/remote-data' component={ RemoteData }/>
         <Route  path='/:theme/chart/numeric' component={ Numeric }/>
         <Route  path='/:theme/chart/date-time' component={ DateTimeAxis }/>
         <Route  path='/:theme/chart/date-time-category' component={ DatetimeCategoryAxis }/>
         <Route  path='/:theme/chart/category' component={ CategoryAxis }/>
         <Route  path='/:theme/chart/indexed-axis' component={ IndexedAxis }/>
         <Route  path='/:theme/chart/logarithmic-scale' component={ LogAxis }/>
         <Route  path='/:theme/chart/multiple-axis' component={ MultipleAxis }/>
         <Route  path='/:theme/chart/inversed' component={ InversedAxis }/>
         <Route  path='/:theme/chart/strip-line' component={ Stripline }/>
         <Route  path='/:theme/chart/strip-line-recurrence' component={ Striplinerecurrence }/>
         <Route  path='/:theme/chart/smart-axis-labels' component={ SmartAxisLabels }/>
         <Route  path='/:theme/chart/multi-level-label' component={ Multilevellabels }/>
         <Route  path='/:theme/chart/axes-crossing' component={ AxisCrossing }/>
         <Route  path='/:theme/chart/sorting' component={ Sorting }/>
         <Route  path='/:theme/chart/marker-chart' component={ Symbols }/>
         <Route  path='/:theme/chart/pie-annotation' component={ Annotation }/>
         <Route  path='/:theme/chart/data-label-template' component={ DataLabelTemplate }/>
         <Route  path='/:theme/chart/vertical' component={ VerticalChart }/>
         <Route  path='/:theme/chart/empty-point' component={ EmptyPoint }/>
         <Route  path='/:theme/chart/print' component={ Print }/>
         <Route  path='/:theme/chart/export' component={ Export }/>
         <Route  path='/:theme/chart/selection' component={ SelectionChart }/>
         <Route  path='/:theme/chart/range-selection' component={ RangeSelection }/>
         <Route  path='/:theme/chart/cross-hair' component={ CrosshairChart }/>
         <Route  path='/:theme/chart/trackball' component={ TrackballChart }/>
         <Route  path='/:theme/chart/zooming' component={ Zooming }/>

    </div>
)

export const chartCategory = {"line":{"name":"Line","category":"Line Charts"},"spline":{"name":"Spline","category":"Line Charts"},"step-line":{"name":"Step Line","category":"Line Charts"},"dashed-line":{"name":"Dashed Line","category":"Line Charts"},"spline-inversed":{"name":"Inversed Spline","category":"Line Charts"},"line-segments":{"name":"Line Zone","category":"Line Charts"},"line-multi-color":{"name":"Multi Colored Line","category":"Line Charts"},"area":{"name":"Area","category":"Area Charts"},"spline-area":{"name":"Spline Area","category":"Area Charts"},"step-area":{"name":"Step Area","category":"Area Charts"},"range-area":{"name":"Range Area","category":"Area Charts"},"stacked-area":{"name":"Stacked Area","category":"Area Charts"},"stacked-area-100":{"name":"100% Stacked Area","category":"Area Charts"},"area-empty":{"name":"Area - Empty Points","category":"Area Charts"},"area-segments":{"name":"Area Zone","category":"Area Charts"},"column":{"name":"Column","category":"Bar Charts"},"rounded-column":{"name":"Rounded Column","category":"Bar Charts"},"column-placement":{"name":"Back to Back Column","category":"Bar Charts"},"range-column":{"name":"Range Column","category":"Bar Charts"},"range-bar":{"name":"Inversed Range Column","category":"Bar Charts"},"bar":{"name":"Bar","category":"Bar Charts"},"stacked-column":{"name":"Stacked Column","category":"Bar Charts"},"stacked-column-100":{"name":"100% Stacked Column","category":"Bar Charts"},"stacked-bar":{"name":"Stacked Bar","category":"Bar Charts"},"stacked-bar-100":{"name":"100% Stacked Bar","category":"Bar Charts"},"tornado":{"name":"Negative Stack","category":"Bar Charts"},"hilo":{"name":"Hilo","category":"Stock Charts"},"hilo-open-close":{"name":"Hilo Open Close","category":"Stock Charts"},"candle-stick":{"name":"Candle Stick","category":"Stock Charts"},"scatter-plot":{"name":"Scatter Plot","category":"Scatter and Bubble"},"bubble":{"name":"Bubble","category":"Scatter and Bubble"},"waterfall":{"name":"Waterfall","category":"Other Types"},"histogram":{"name":"Histogram","category":"Other Types"},"box-and-whisker":{"name":"Box and Whisker","category":"Other Types"},"error-bar":{"name":"Error Bar","category":"Other Types"},"trend-lines":{"name":"Trendlines","category":"Other Types"},"multi-series-chart":{"name":"Multi-Series Chart","category":"Other Types"},"pareto":{"name":"Pareto Chart","category":"Other Types"},"accumulation-distribution-indicator":{"name":"Accumulation Distribution","category":"Technical Indicators"},"average-true-range-indicator":{"name":"ATR","category":"Technical Indicators"},"bollinger":{"name":"Bollinger","category":"Technical Indicators"},"exponential-moving-average-indicator":{"name":"EMA","category":"Technical Indicators"},"moving-average-convergence-divergence-indicator":{"name":"MACD","category":"Technical Indicators"},"momentum":{"name":"Momentum","category":"Technical Indicators"},"relative-strength-index-indicator":{"name":"RSI","category":"Technical Indicators"},"simple-moving-average-indicator":{"name":"SMA","category":"Technical Indicators"},"stochastic":{"name":"Stochastic","category":"Technical Indicators"},"triangular-moving-average-indicator":{"name":"TMA","category":"Technical Indicators"},"chart-performance":{"name":"Chart Performance","category":"Benchmark"},"default-pie":{"name":"Pie","category":"Accumulation Charts"},"donut":{"name":"Donut","category":"Accumulation Charts"},"pyramid":{"name":"Pyramid","category":"Accumulation Charts"},"funnel":{"name":"Funnel","category":"Accumulation Charts"},"default-doughnut":{"name":"Pie With Legend","category":"Accumulation Charts"},"semi-pie":{"name":"Semi Pie","category":"Accumulation Charts"},"smart-labels":{"name":"Smart Labels","category":"Accumulation Charts"},"drill-down-pie":{"name":"Drilldown","category":"Accumulation Charts"},"grouping":{"name":"Grouping","category":"Accumulation Charts"},"pie-empty-point":{"name":"Empty Points","category":"Accumulation Charts"},"polar-line":{"name":"Line","category":"Polar Radar"},"polar-spline":{"name":"Spline","category":"Polar Radar"},"polar-area":{"name":"Area","category":"Polar Radar"},"polar-stacking-area":{"name":"Stacked Area","category":"Polar Radar"},"polar-scatter":{"name":"Scatter","category":"Polar Radar"},"polar-column":{"name":"Column","category":"Polar Radar"},"polar-stacking-column":{"name":"Wind Rose","category":"Polar Radar"},"polar-range-column":{"name":"Range Column","category":"Polar Radar"},"local-data":{"name":"Local Data","category":"Data Binding"},"remote-data":{"name":"Remote Data","category":"Data Binding"},"numeric":{"name":"Numeric Axis","category":"Chart Axes"},"date-time":{"name":"DateTime Axis","category":"Chart Axes"},"date-time-category":{"name":"DateTime Category Axis","category":"Chart Axes"},"category":{"name":"Category Axis","category":"Chart Axes"},"indexed-axis":{"name":"Indexed Category Axis","category":"Chart Axes"},"logarithmic-scale":{"name":"Logarithmic Scale","category":"Chart Axes"},"multiple-axis":{"name":"Multiple Axis","category":"Chart Axes"},"inversed":{"name":"Inversed Axis","category":"Chart Axes"},"strip-line":{"name":"Strip Line","category":"Chart Axes"},"strip-line-recurrence":{"name":"Strip Line Recurrence","category":"Chart Axes"},"smart-axis-labels":{"name":"Smart Labels","category":"Chart Axes"},"multi-level-label":{"name":"Multi Level Labels","category":"Chart Axes"},"axes-crossing":{"name":"Axes Crossing","category":"Chart Axes"},"sorting":{"name":"Sorting","category":"Chart Customization"},"marker-chart":{"name":"Marker Chart","category":"Chart Customization"},"pie-annotation":{"name":"Annotation","category":"Chart Customization"},"data-label-template":{"name":"DataLabel Template","category":"Chart Customization"},"vertical":{"name":"Vertical Chart","category":"Chart Customization"},"empty-point":{"name":"Empty Points","category":"Chart Customization"},"print":{"name":"Print","category":"Print and Export"},"export":{"name":"Export","category":"Print and Export"},"selection":{"name":"Selection","category":"User Interaction"},"range-selection":{"name":"Range Selection","category":"User Interaction"},"cross-hair":{"name":"Crosshair","category":"User Interaction"},"trackball":{"name":"Trackball","category":"User Interaction"},"zooming":{"name":"Zooming and Panning","category":"User Interaction"},"defaultSample":"chart/line"}