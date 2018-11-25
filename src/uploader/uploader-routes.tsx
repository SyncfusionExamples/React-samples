import {  Route } from 'react-router-dom';
import * as React from 'react';
import { Default } from './default';
import { ChunkUpload } from './chunk-upload';
import { CustomTemplate } from './custom-file-list';
import { Preloadfiles } from './preload-files';
import { Validation } from './file-validation';
import { Preview } from './image-preview';
import { Formsupport } from './file-upload-with-forms';
import { Customdroparea } from './custom-drop-area';


export const uploaderRoutes = (
    <div>
         <Route  path='/:theme/uploader/default' component={ Default }/>
         <Route  path='/:theme/uploader/chunk-upload' component={ ChunkUpload }/>
         <Route  path='/:theme/uploader/custom-file-list' component={ CustomTemplate }/>
         <Route  path='/:theme/uploader/preload-files' component={ Preloadfiles }/>
         <Route  path='/:theme/uploader/file-validation' component={ Validation }/>
         <Route  path='/:theme/uploader/image-preview' component={ Preview }/>
         <Route  path='/:theme/uploader/file-upload-with-forms' component={ Formsupport }/>
         <Route  path='/:theme/uploader/custom-drop-area' component={ Customdroparea }/>

    </div>
)

export const uploaderCategory = {"default":{"name":"Default Functionalities","category":"Uploader"},"chunk-upload":{"name":"Chunk Upload","category":"Uploader"},"custom-file-list":{"name":"Template","category":"Uploader"},"preload-files":{"name":"Preload files","category":"Uploader"},"file-validation":{"name":"File Validation","category":"Uploader"},"image-preview":{"name":"Image Preview","category":"Uploader"},"file-upload-with-forms":{"name":"Form Support","category":"Uploader"},"custom-drop-area":{"name":"Custom Drop Area","category":"Uploader"},"defaultSample":"uploader/default"}