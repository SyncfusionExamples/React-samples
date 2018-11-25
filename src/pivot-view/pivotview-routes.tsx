import {  Route } from 'react-router-dom';
import * as React from 'react';
import { Default } from './default';
import { Local } from './local';
import { Remote } from './remote';
import { FieldList } from './field-list';
import { Grouping } from './grouping-bar';
import { ConditionalFormattingClass } from './conditional-formatting';
import { CalculatedFieldClass } from './calculated-field';
import { Aggregation } from './aggregation';
import { Sorting } from './sorting';
import { ValueSorting } from './value-sorting';
import { Filtering } from './filtering';
import { LabelFilter } from './label-filtering';
import { ValueFilter } from './value-filtering';
import { ChartIntegration } from './chart';
import { VirtualScrolling } from './virtual-scrolling';
import { Exporting } from './exporting';


export const pivotviewRoutes = (
    <div>
         <Route  path='/:theme/pivot-view/default' component={ Default }/>
         <Route  path='/:theme/pivot-view/local' component={ Local }/>
         <Route  path='/:theme/pivot-view/remote' component={ Remote }/>
         <Route  path='/:theme/pivot-view/field-list' component={ FieldList }/>
         <Route  path='/:theme/pivot-view/grouping-bar' component={ Grouping }/>
         <Route  path='/:theme/pivot-view/conditional-formatting' component={ ConditionalFormattingClass }/>
         <Route  path='/:theme/pivot-view/calculated-field' component={ CalculatedFieldClass }/>
         <Route  path='/:theme/pivot-view/aggregation' component={ Aggregation }/>
         <Route  path='/:theme/pivot-view/sorting' component={ Sorting }/>
         <Route  path='/:theme/pivot-view/value-sorting' component={ ValueSorting }/>
         <Route  path='/:theme/pivot-view/filtering' component={ Filtering }/>
         <Route  path='/:theme/pivot-view/label-filtering' component={ LabelFilter }/>
         <Route  path='/:theme/pivot-view/value-filtering' component={ ValueFilter }/>
         <Route  path='/:theme/pivot-view/chart' component={ ChartIntegration }/>
         <Route  path='/:theme/pivot-view/virtual-scrolling' component={ VirtualScrolling }/>
         <Route  path='/:theme/pivot-view/exporting' component={ Exporting }/>

    </div>
)

export const pivotviewCategory = {"default":{"name":"Default Functionalities","category":"Pivot Grid"},"local":{"name":"Local Data","category":"Data Binding"},"remote":{"name":"Remote Data","category":"Data Binding"},"field-list":{"name":"Field List","category":"User Interaction"},"grouping-bar":{"name":"Grouping Bar","category":"User Interaction"},"conditional-formatting":{"name":"Conditional Formatting","category":"User Interaction"},"calculated-field":{"name":"Calculated Field","category":"Formula"},"aggregation":{"name":"Aggregation","category":"Formula"},"sorting":{"name":"Default Sorting","category":"Sorting"},"value-sorting":{"name":"Value Sorting","category":"Sorting"},"filtering":{"name":"Default Filtering","category":"Filtering"},"label-filtering":{"name":"Label Filtering","category":"Filtering"},"value-filtering":{"name":"Value Filtering","category":"Filtering"},"chart":{"name":"Chart","category":"Integration"},"virtual-scrolling":{"name":"Virtual Scrolling","category":"Scrolling"},"exporting":{"name":"Export","category":"Miscellaneous"},"defaultSample":"pivot-view/default"}