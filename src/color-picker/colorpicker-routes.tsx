import {  Route } from 'react-router-dom';
import * as React from 'react';
import { Default } from './default';
import { Inline } from './inline';
import { CustomPalette } from './custom';
import { Api } from './api';


export const colorpickerRoutes = (
    <div>
         <Route  path='/:theme/color-picker/default' component={ Default }/>
         <Route  path='/:theme/color-picker/inline' component={ Inline }/>
         <Route  path='/:theme/color-picker/custom' component={ CustomPalette }/>
         <Route  path='/:theme/color-picker/api' component={ Api }/>

    </div>
)

export const colorpickerCategory = {"default":{"name":"Default Functionalities","category":"ColorPicker"},"inline":{"name":"Inline Mode","category":"ColorPicker"},"custom":{"name":"Custom Palettes","category":"ColorPicker"},"api":{"name":"API","category":"ColorPicker"},"defaultSample":"color-picker/default"}