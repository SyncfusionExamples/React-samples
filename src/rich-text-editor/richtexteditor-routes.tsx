import {  Route } from 'react-router-dom';
import * as React from 'react';
import { Overview } from './tools';
import { Default } from './rich-text-editor';
import { ImageSample } from './image';
import { Inline } from './inline';
import { IFrame } from './iframe';
import { Print } from './print';
import { AjaxContent } from './ajax-load';
import { RTEApi } from './api';
import { RTEEvents } from './client-side-events';
import { Forums } from './blog-posting';
import { Type } from './types';
import { CustomTool } from './custom-toolbar';
import { MarkDown } from './markdown-editor';
import { Preview } from './markdown-editor-preview';
import { CustomFormat } from './markdown-editor-custom-format';


export const richtexteditorRoutes = (
    <div>
         <Route  path='/:theme/rich-text-editor/tools' component={ Overview }/>
         <Route  path='/:theme/rich-text-editor/rich-text-editor' component={ Default }/>
         <Route  path='/:theme/rich-text-editor/image' component={ ImageSample }/>
         <Route  path='/:theme/rich-text-editor/inline' component={ Inline }/>
         <Route  path='/:theme/rich-text-editor/iframe' component={ IFrame }/>
         <Route  path='/:theme/rich-text-editor/print' component={ Print }/>
         <Route  path='/:theme/rich-text-editor/ajax-load' component={ AjaxContent }/>
         <Route  path='/:theme/rich-text-editor/api' component={ RTEApi }/>
         <Route  path='/:theme/rich-text-editor/client-side-events' component={ RTEEvents }/>
         <Route  path='/:theme/rich-text-editor/blog-posting' component={ Forums }/>
         <Route  path='/:theme/rich-text-editor/types' component={ Type }/>
         <Route  path='/:theme/rich-text-editor/custom-toolbar' component={ CustomTool }/>
         <Route  path='/:theme/rich-text-editor/markdown-editor' component={ MarkDown }/>
         <Route  path='/:theme/rich-text-editor/markdown-editor-preview' component={ Preview }/>
         <Route  path='/:theme/rich-text-editor/markdown-editor-custom-format' component={ CustomFormat }/>

    </div>
)

export const richtexteditorCategory = {"tools":{"name":"Overview","category":"RichTextEditor"},"rich-text-editor":{"name":"Default Functionalities","category":"RichTextEditor"},"image":{"name":"Image","category":"RichTextEditor"},"inline":{"name":"Inline","category":"RichTextEditor"},"iframe":{"name":"IFrame","category":"RichTextEditor"},"print":{"name":"Print","category":"RichTextEditor"},"ajax-load":{"name":"Ajax Content","category":"RichTextEditor"},"api":{"name":"API","category":"RichTextEditor"},"client-side-events":{"name":"Events","category":"RichTextEditor"},"blog-posting":{"name":"Use Case","category":"RichTextEditor"},"types":{"name":"Type","category":"Toolbar"},"custom-toolbar":{"name":"Custom Tool","category":"Toolbar"},"markdown-editor":{"name":"Overview","category":"Markdown Editor"},"markdown-editor-preview":{"name":"Preview","category":"Markdown Editor"},"markdown-editor-custom-format":{"name":"Custom Format","category":"Markdown Editor"},"defaultSample":"rich-text-editor/tools"}