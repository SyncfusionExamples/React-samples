import {  Route } from 'react-router-dom';
import * as React from 'react';
import { Default } from './default';
import { ButtonGroup } from './button-group';
import { CheckBox } from './check-box';
import { RadioButton } from './radio-button';
import { DropDownButton } from './drop-down-button';
import { SplitButton } from './split-button';
import { Switch } from './switch';
import { ProgressButton } from './progress-button';


export const buttonRoutes = (
    <div>
         <Route  path='/:theme/button/default' component={ Default }/>
         <Route  path='/:theme/button/button-group' component={ ButtonGroup }/>
         <Route  path='/:theme/button/check-box' component={ CheckBox }/>
         <Route  path='/:theme/button/radio-button' component={ RadioButton }/>
         <Route  path='/:theme/button/drop-down-button' component={ DropDownButton }/>
         <Route  path='/:theme/button/split-button' component={ SplitButton }/>
         <Route  path='/:theme/button/switch' component={ Switch }/>
         <Route  path='/:theme/button/progress-button' component={ ProgressButton }/>

    </div>
)

export const buttonCategory = {"default":{"name":"Default Functionalities","category":"Button"},"button-group":{"name":"ButtonGroup","category":"Button"},"check-box":{"name":"CheckBox","category":"Button"},"radio-button":{"name":"RadioButton","category":"Button"},"drop-down-button":{"name":"DropDownButton","category":"Button"},"split-button":{"name":"SplitButton","category":"Button"},"switch":{"name":"Switch","category":"Button"},"progress-button":{"name":"ProgressButton","category":"Button"},"defaultSample":"button/default"}