import {  Route } from 'react-router-dom';
import * as React from 'react';
import { Default } from './default';
import { DataBinding } from './data-binding';
import { Template } from './template';
import { Api } from './api';
import { ToolbarIntegration } from './toolbar-integration';


export const menuRoutes = (
    <div>
         <Route  path='/:theme/menu/default' component={ Default }/>
         <Route  path='/:theme/menu/data-binding' component={ DataBinding }/>
         <Route  path='/:theme/menu/template' component={ Template }/>
         <Route  path='/:theme/menu/api' component={ Api }/>
         <Route  path='/:theme/menu/toolbar-integration' component={ ToolbarIntegration }/>

    </div>
)

export const menuCategory = {"default":{"name":"Default Functionalities","category":"Menu"},"data-binding":{"name":"Data Binding","category":"Menu"},"template":{"name":"Template","category":"Menu"},"api":{"name":"API","category":"Menu"},"toolbar-integration":{"name":"Toolbar Integration","category":"Menu"},"defaultSample":"menu/default"}