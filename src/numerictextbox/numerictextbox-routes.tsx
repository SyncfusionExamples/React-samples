import {  Route } from 'react-router-dom';
import * as React from 'react';
import { Default } from './default';
import { Range } from './range-validation';
import { Format } from './custom-format';
import { Restrict } from './restrict-decimals';


export const numerictextboxRoutes = (
    <div>
         <Route  path='/:theme/numerictextbox/default' component={ Default }/>
         <Route  path='/:theme/numerictextbox/range-validation' component={ Range }/>
         <Route  path='/:theme/numerictextbox/custom-format' component={ Format }/>
         <Route  path='/:theme/numerictextbox/restrict-decimals' component={ Restrict }/>

    </div>
)

export const numerictextboxCategory = {"default":{"name":"Default Functionalities","category":"NumericTextBox"},"range-validation":{"name":"Range Validation","category":"NumericTextBox"},"custom-format":{"name":"Custom Format","category":"NumericTextBox"},"restrict-decimals":{"name":"Restrict Decimals","category":"NumericTextBox"},"defaultSample":"numerictextbox/default"}