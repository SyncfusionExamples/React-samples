import {  Route } from 'react-router-dom';
import * as React from 'react';
import { Default } from './default';
import { LocalData } from './local-data';
import { RemoteData } from './remote-data';
import { DefaultEvents } from './default-events';
import { RecurrenceEvents } from './recurrence-events';
import { TimeZone } from './timezone';
import { Views } from './views';
import { TimelineView } from './timeline';
import { AgendaView } from './agenda';
import { MonthAgendaView } from './month-agenda';
import { ViewConfigurations } from './views-configuration';
import { ExtendedViews } from './extended-views';
import { TimelineResource } from './timeline-resources';
import { Resources } from './resources';
import { GroupEditing } from './group-editing';
import { GroupCustomWorkDays } from './group-custom-work-days';
import { AddRemoveResources } from './add-remove-resources';
import { Group } from './resource-grouping';
import { TimelineGrouping } from './timeline-resource-grouping';
import { GroupByDate } from './group-by-date';
import { GroupByChild } from './group-by-child';
import { CellTemplate } from './cell-template';
import { DateHeaderTemplate } from './date-header-template';
import { EventTemplate } from './event-template';
import { Tooltip } from './tooltip';
import { EditorFieldValidation } from './editor-validation';
import { EditorCustomField } from './editor-custom-field';
import { EditorTemplate } from './editor-template';
import { HeaderRows } from './header-rows';
import { Timescale } from './time-scale';
import { HeaderBar } from './header-bar';
import { ScrollTo } from './scroll-to';
import { WorkDays } from './work-days';
import { HideWeekend } from './hide-weekend';
import { WorkHours } from './work-hours';
import { DayHourLimit } from './start-end-hour';
import { CellDimension } from './cell-dimension';
import { ReadonlyEvents } from './read-only-events';
import { RuleGenerate } from './recurrence-editor-generate-rule';
import { PopulateRule } from './recurrence-editor-populate-rule';
import { KeyboardInteraction } from './keyboard-interaction';
import { Events } from './events';


export const scheduleRoutes = (
    <div>
         <Route  path='/:theme/schedule/default' component={ Default }/>
         <Route  path='/:theme/schedule/local-data' component={ LocalData }/>
         <Route  path='/:theme/schedule/remote-data' component={ RemoteData }/>
         <Route  path='/:theme/schedule/default-events' component={ DefaultEvents }/>
         <Route  path='/:theme/schedule/recurrence-events' component={ RecurrenceEvents }/>
         <Route  path='/:theme/schedule/timezone' component={ TimeZone }/>
         <Route  path='/:theme/schedule/views' component={ Views }/>
         <Route  path='/:theme/schedule/timeline' component={ TimelineView }/>
         <Route  path='/:theme/schedule/agenda' component={ AgendaView }/>
         <Route  path='/:theme/schedule/month-agenda' component={ MonthAgendaView }/>
         <Route  path='/:theme/schedule/views-configuration' component={ ViewConfigurations }/>
         <Route  path='/:theme/schedule/extended-views' component={ ExtendedViews }/>
         <Route  path='/:theme/schedule/timeline-resources' component={ TimelineResource }/>
         <Route  path='/:theme/schedule/resources' component={ Resources }/>
         <Route  path='/:theme/schedule/group-editing' component={ GroupEditing }/>
         <Route  path='/:theme/schedule/group-custom-work-days' component={ GroupCustomWorkDays }/>
         <Route  path='/:theme/schedule/add-remove-resources' component={ AddRemoveResources }/>
         <Route  path='/:theme/schedule/resource-grouping' component={ Group }/>
         <Route  path='/:theme/schedule/timeline-resource-grouping' component={ TimelineGrouping }/>
         <Route  path='/:theme/schedule/group-by-date' component={ GroupByDate }/>
         <Route  path='/:theme/schedule/group-by-child' component={ GroupByChild }/>
         <Route  path='/:theme/schedule/cell-template' component={ CellTemplate }/>
         <Route  path='/:theme/schedule/date-header-template' component={ DateHeaderTemplate }/>
         <Route  path='/:theme/schedule/event-template' component={ EventTemplate }/>
         <Route  path='/:theme/schedule/tooltip' component={ Tooltip }/>
         <Route  path='/:theme/schedule/editor-validation' component={ EditorFieldValidation }/>
         <Route  path='/:theme/schedule/editor-custom-field' component={ EditorCustomField }/>
         <Route  path='/:theme/schedule/editor-template' component={ EditorTemplate }/>
         <Route  path='/:theme/schedule/header-rows' component={ HeaderRows }/>
         <Route  path='/:theme/schedule/time-scale' component={ Timescale }/>
         <Route  path='/:theme/schedule/header-bar' component={ HeaderBar }/>
         <Route  path='/:theme/schedule/scroll-to' component={ ScrollTo }/>
         <Route  path='/:theme/schedule/work-days' component={ WorkDays }/>
         <Route  path='/:theme/schedule/hide-weekend' component={ HideWeekend }/>
         <Route  path='/:theme/schedule/work-hours' component={ WorkHours }/>
         <Route  path='/:theme/schedule/start-end-hour' component={ DayHourLimit }/>
         <Route  path='/:theme/schedule/cell-dimension' component={ CellDimension }/>
         <Route  path='/:theme/schedule/read-only-events' component={ ReadonlyEvents }/>
         <Route  path='/:theme/schedule/recurrence-editor-generate-rule' component={ RuleGenerate }/>
         <Route  path='/:theme/schedule/recurrence-editor-populate-rule' component={ PopulateRule }/>
         <Route  path='/:theme/schedule/keyboard-interaction' component={ KeyboardInteraction }/>
         <Route  path='/:theme/schedule/events' component={ Events }/>

    </div>
)

export const scheduleCategory = {"default":{"name":"Default Functionalities","category":"Schedule"},"local-data":{"name":"Local Data","category":"Data Binding"},"remote-data":{"name":"Remote Data","category":"Data Binding"},"default-events":{"name":"Normal","category":"Appointments"},"recurrence-events":{"name":"Recurrence","category":"Appointments"},"timezone":{"name":"Timezone","category":"Appointments"},"views":{"name":"Basic Views","category":"Views"},"timeline":{"name":"Timeline Views","category":"Views"},"agenda":{"name":"Agenda View","category":"Views"},"month-agenda":{"name":"Month Agenda View","category":"Views"},"views-configuration":{"name":"Individual View Settings","category":"Views"},"extended-views":{"name":"View Intervals","category":"Views"},"timeline-resources":{"name":"Room Scheduler","category":"Multiple Resources"},"resources":{"name":"Fare Calendar","category":"Multiple Resources"},"group-editing":{"name":"Shared Events","category":"Multiple Resources"},"group-custom-work-days":{"name":"Different Work Days","category":"Multiple Resources"},"add-remove-resources":{"name":"Show/Hide Resources","category":"Multiple Resources"},"resource-grouping":{"name":"Horizontal Grouping","category":"Resource Grouping"},"timeline-resource-grouping":{"name":"Timeline Grouping","category":"Resource Grouping"},"group-by-date":{"name":"Date-wise Grouping","category":"Resource Grouping"},"group-by-child":{"name":"Hierarchical Grouping","category":"Resource Grouping"},"cell-template":{"name":"Cell","category":"Template"},"date-header-template":{"name":"Date Header","category":"Template"},"event-template":{"name":"Events","category":"Template"},"tooltip":{"name":"Tooltip","category":"Template"},"editor-validation":{"name":"Field Validation","category":"Editor Window"},"editor-custom-field":{"name":"Additional Fields","category":"Editor Window"},"editor-template":{"name":"Editor Template","category":"Editor Window"},"header-rows":{"name":"Header Rows","category":"Customization"},"time-scale":{"name":"Timescale","category":"Customization"},"header-bar":{"name":"Header Bar","category":"Customization"},"scroll-to":{"name":"Scroll Time","category":"Customization"},"work-days":{"name":"Work Days","category":"Customization"},"hide-weekend":{"name":"Hide Weekend","category":"Customization"},"work-hours":{"name":"Work Hours","category":"Customization"},"start-end-hour":{"name":"Day Hour Limit","category":"Customization"},"cell-dimension":{"name":"Cell Dimension","category":"Customization"},"read-only-events":{"name":"Read-only Events","category":"Customization"},"recurrence-editor-generate-rule":{"name":"Rule Generator","category":"Recurrence Editor"},"recurrence-editor-populate-rule":{"name":"Populate Rule","category":"Recurrence Editor"},"keyboard-interaction":{"name":"Keyboard Interaction","category":"Miscellaneous"},"events":{"name":"Events","category":"Miscellaneous"},"defaultSample":"schedule/default"}