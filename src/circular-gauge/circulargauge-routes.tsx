import {  Route } from 'react-router-dom';
import * as React from 'react';
import { Default } from './default';
import { Range } from './range';
import { Labels } from './labels';
import { AnnotationsSample } from './annotation';
import { Customization } from './customization';
import { Direction } from './direction';
import { Axes } from './axes';
import { Drag } from './drag';
import { Tooltip } from './tooltip';
import { Image } from './image';
import { Pointers } from './pointers';
import { SampleData } from './sample-data';


export const circulargaugeRoutes = (
    <div>
         <Route  path='/:theme/circular-gauge/default' component={ Default }/>
         <Route  path='/:theme/circular-gauge/range' component={ Range }/>
         <Route  path='/:theme/circular-gauge/labels' component={ Labels }/>
         <Route  path='/:theme/circular-gauge/annotation' component={ AnnotationsSample }/>
         <Route  path='/:theme/circular-gauge/customization' component={ Customization }/>
         <Route  path='/:theme/circular-gauge/direction' component={ Direction }/>
         <Route  path='/:theme/circular-gauge/axes' component={ Axes }/>
         <Route  path='/:theme/circular-gauge/drag' component={ Drag }/>
         <Route  path='/:theme/circular-gauge/tooltip' component={ Tooltip }/>
         <Route  path='/:theme/circular-gauge/image' component={ Image }/>
         <Route  path='/:theme/circular-gauge/pointers' component={ Pointers }/>
         <Route  path='/:theme/circular-gauge/sample-data' component={ SampleData }/>

    </div>
)

export const circulargaugeCategory = {"default":{"name":"Default Functionalities","category":"CIRCULAR GAUGE"},"range":{"name":"Range","category":"CIRCULAR GAUGE"},"labels":{"name":"Tick and Labels","category":"CIRCULAR GAUGE"},"annotation":{"name":"Annotations","category":"CIRCULAR GAUGE"},"customization":{"name":"Gauge Customization","category":"CIRCULAR GAUGE"},"direction":{"name":"Direction Compass","category":"CIRCULAR GAUGE"},"axes":{"name":"Multiple Axis","category":"AXES"},"drag":{"name":"Pointer Drag","category":"USER INTERACTION"},"tooltip":{"name":"Tooltip","category":"USER INTERACTION"},"image":{"name":"Pointer Image","category":"POINTER"},"pointers":{"name":"Pointer Customization","category":"POINTER"},"sample-data":{"name":"Data Sample","category":"Live"},"defaultSample":"circular-gauge/default"}