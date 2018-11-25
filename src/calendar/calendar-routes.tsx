import {  Route } from 'react-router-dom';
import * as React from 'react';
import { Default } from './default';
import { Range } from './date-range';
import { Disabled } from './disabled';
import { Special } from './special-dates';
import { MultipleSelection } from './multi-selection';


export const calendarRoutes = (
    <div>
         <Route  path='/:theme/calendar/default' component={ Default }/>
         <Route  path='/:theme/calendar/date-range' component={ Range }/>
         <Route  path='/:theme/calendar/disabled' component={ Disabled }/>
         <Route  path='/:theme/calendar/special-dates' component={ Special }/>
         <Route  path='/:theme/calendar/multi-selection' component={ MultipleSelection }/>

    </div>
)

export const calendarCategory = {"default":{"name":"Default Functionalities","category":"Calendar"},"date-range":{"name":"Date Range","category":"Calendar"},"disabled":{"name":"Disabled Dates","category":"Calendar"},"special-dates":{"name":"Special Dates","category":"Calendar"},"multi-selection":{"name":"Multi Selection","category":"Calendar"},"defaultSample":"calendar/default"}