import {  Route } from 'react-router-dom';
import * as React from 'react';
import { Default } from './default';
import { Grouping } from './grouping-icon';
import { Data } from './data-binding';
import { Filtering } from './filtering';
import { Templates } from './template';
import { Cascading } from './cascading';
import { Inline } from './inline';
import { DiacriticsFiltering } from './diacritics-filtering';


export const dropdownlistRoutes = (
    <div>
         <Route  path='/:theme/drop-down-list/default' component={ Default }/>
         <Route  path='/:theme/drop-down-list/grouping-icon' component={ Grouping }/>
         <Route  path='/:theme/drop-down-list/data-binding' component={ Data }/>
         <Route  path='/:theme/drop-down-list/filtering' component={ Filtering }/>
         <Route  path='/:theme/drop-down-list/template' component={ Templates }/>
         <Route  path='/:theme/drop-down-list/cascading' component={ Cascading }/>
         <Route  path='/:theme/drop-down-list/inline' component={ Inline }/>
         <Route  path='/:theme/drop-down-list/diacritics-filtering' component={ DiacriticsFiltering }/>

    </div>
)

export const dropdownlistCategory = {"default":{"name":"Default Functionalities","category":"DropDownList"},"grouping-icon":{"name":"Grouping and Icons","category":"DropDownList"},"data-binding":{"name":"Data Binding","category":"DropDownList"},"filtering":{"name":"Filtering","category":"DropDownList"},"template":{"name":"Templates","category":"DropDownList"},"cascading":{"name":"Cascading","category":"DropDownList"},"inline":{"name":"Inline","category":"DropDownList"},"diacritics-filtering":{"name":"Diacritics Filtering","category":"DropDownList"},"defaultSample":"drop-down-list/default"}