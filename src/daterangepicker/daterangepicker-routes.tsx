import {  Route } from 'react-router-dom';
import * as React from 'react';
import { Default } from './default';
import { DateRange } from './date-range';
import { DaySpan } from './day-span';
import { Format } from './date-format';
import { Presets } from './presets';


export const daterangepickerRoutes = (
    <div>
         <Route  path='/:theme/daterangepicker/default' component={ Default }/>
         <Route  path='/:theme/daterangepicker/date-range' component={ DateRange }/>
         <Route  path='/:theme/daterangepicker/day-span' component={ DaySpan }/>
         <Route  path='/:theme/daterangepicker/date-format' component={ Format }/>
         <Route  path='/:theme/daterangepicker/presets' component={ Presets }/>

    </div>
)

export const daterangepickerCategory = {"default":{"name":"Default Functionalities","category":"DateRangePicker"},"date-range":{"name":"Date Range","category":"DateRangePicker"},"day-span":{"name":"Day Span","category":"DateRangePicker"},"date-format":{"name":"Format","category":"DateRangePicker"},"presets":{"name":"Preset Ranges","category":"DateRangePicker"},"defaultSample":"daterangepicker/default"}