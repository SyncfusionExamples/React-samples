import {  Route } from 'react-router-dom';
import * as React from 'react';
import { Default } from './default';
import { Data } from './data-binding';
import { Grouping } from './grouping';
import { Templates } from './template';
import { Filtering } from './filtering';
import { CustomTag } from './custom-value';
import { ChipCustomization } from './chip-customization';
import { CheckBox } from './checkbox';
import { SelectionLimit } from './selection-limit';
import { DiacriticsFiltering } from './diacritics-filtering';


export const multiselectRoutes = (
    <div>
         <Route  path='/:theme/multi-select/default' component={ Default }/>
         <Route  path='/:theme/multi-select/data-binding' component={ Data }/>
         <Route  path='/:theme/multi-select/grouping' component={ Grouping }/>
         <Route  path='/:theme/multi-select/template' component={ Templates }/>
         <Route  path='/:theme/multi-select/filtering' component={ Filtering }/>
         <Route  path='/:theme/multi-select/custom-value' component={ CustomTag }/>
         <Route  path='/:theme/multi-select/chip-customization' component={ ChipCustomization }/>
         <Route  path='/:theme/multi-select/checkbox' component={ CheckBox }/>
         <Route  path='/:theme/multi-select/selection-limit' component={ SelectionLimit }/>
         <Route  path='/:theme/multi-select/diacritics-filtering' component={ DiacriticsFiltering }/>

    </div>
)

export const multiselectCategory = {"default":{"name":"Default Functionalities","category":"MultiSelect"},"data-binding":{"name":"Data Binding","category":"MultiSelect"},"grouping":{"name":"Grouping","category":"MultiSelect"},"template":{"name":"Templates","category":"MultiSelect"},"filtering":{"name":"Filtering","category":"MultiSelect"},"custom-value":{"name":"Custom Values","category":"MultiSelect"},"chip-customization":{"name":"Chip Customization","category":"MultiSelect"},"checkbox":{"name":"CheckBox","category":"MultiSelect"},"selection-limit":{"name":"Selection Limit","category":"MultiSelect"},"diacritics-filtering":{"name":"Diacritics Filtering","category":"MultiSelect"},"defaultSample":"multi-select/default"}