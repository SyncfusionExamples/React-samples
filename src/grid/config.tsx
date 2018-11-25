export const GridSampleOrder: Object = [
  { 'path': 'grid/overview', 'component': 'OverView', 'name': 'Overview', 'description':'This demo for Essential JS 2 grid component is an overview of how to display and manipulate large data with configuration options.', 'order': '01', 'category': 'Data Grid' ,'api':'{"GridComponent":["queryCellInfo","dataSource","enableVirtualization","allowFiltering","allowSorting","allowSelection","selectionSettings","height","columns","dataBound","actionComplete","load"] }'},
    { 'path': 'grid/default', 'component': 'Default', 'name': 'Default Functionalities', 'order': '01', 'description':'This demo for Essential JS 2 grid component shows the default rendering of the grid component with minimum configuration.', 'category': 'Data Grid' ,'api':'{"GridComponent":["columns","dataSource"] }'},
     { 'path': 'grid/grouping', 'component': 'Grouping', 'name': 'Grouping', 'order': '01', 'description':'This demo for Essential JS 2 grid component demonstrates the grouping feature of the grid component. The grid component has options to group records based on columns.', 'category': 'Data Grid','api':'{"GridComponent":["allowPaging","allowSorting","groupSettings","pageSettings","allowGrouping"] }' },
      { 'path': 'grid/grid-lines', 'component': 'GridLines', 'name': 'GridLines', 'order': '01', 'description':'This demo for Essential JS 2 grid component demonstrates the visibility of the grid lines that separate the rows and columns.', 'category': 'Data Grid','api':'{"GridComponent":["gridLines","dataSource"] }' },
     { 'path': 'grid/hierarchy', 'component': 'Hierarchy', 'name': 'Hierarchy Grid', 'order': '01', 'description':'This demo for Essential JS 2 grid component shows the hierarchical binding feature that helps to build multilevel parent-child relationships.', 'category': 'Data Grid','api':'{"GridComponent":["dataSource","allowSorting","columns","detailDataBound","dataBound","created","childGrid"] }' },
     { 'path': 'grid/clipboard', 'component': 'Clipboard', 'name': 'Clipboard', 'order': '01', 'description':'This demo for Essential JS 2 grid component shows the copy-to-clipboard functionality.', 'category': 'Data Grid','api':'{"GridComponent":["dataSource","allowPaging","toolbar","columns","pageSettings","allowSelection","selectionSettings","toolbarClick"] }' },
     { 'path': 'grid/context-menu', 'component': 'ContextMenuSample', 'name': 'Context Menu', 'order': '01', 'description':'This demo for Essential JS 2 grid component shows the usage of the context menu in grid component. Grid has an option to show the context menu when it’s right-clicked on.', 'category': 'Data Grid', 'api':'{"GridComponent":["dataSource","allowSorting", "allowGrouping", "allowPdfExport", "allowExcelExport", "editSettings", "allowPaging", "contextMenuItems", "columns"]}'},
     { 'path': 'grid/master-detail', 'component': 'MasterDetail', 'name': 'Master/Detail', 'order': '01', 'description':'This demo for Essential JS 2 grid component shows the usage of master/detail in which the details of a Master Grid record, is viewed in a separate Grid(Detail Grid) by clicking the particular row.', 'category': 'Data Grid', 'api':'{"GridComponent":["dataSource","allowSelection", "rowSelected","columns"]}' },
     { 'path': 'grid/scrolling', 'component': 'Scrolling', 'name': 'Default Scrolling', 'order': '02', 'description':'This demo for Essential JS 2 grid component shows the usage of the horizontal and vertical scrollbars to view grid content that exceeds the grid area.', 'category': 'Scrolling','api':'{"GridComponent":["dataSource","height","width","columns"] }' },
     { 'path': 'grid/virtualization', 'component': 'Virtualization', 'name': 'Virtual Scrolling', 'order': '02', 'description':'This demo demonstrates how to use Essential JS 2 grid to show a large data view without performance degradation by rendering only the required rows and columns.', 'category': 'Scrolling','api':'{"GridComponent":["dataSource","enableVirtualization","enableColumnVirtualization","dataBound","height","columns"] }' },
     { 'path': 'grid/local-binding', 'component': 'Localbinding', 'name': 'Local Data', 'order': '03', 'description':'This demo for Essential JS 2 grid component shows how to bind with a local data source.', 'category': 'Data Binding','api':'{"GridComponent":["dataSource","allowPaging","columns","pageSettings"] }' },
     { 'path': 'grid/remote-data', 'component': 'RemoteDataBinding', 'name': 'Remote Data', 'order': '03', 'description':'This demo for Essential JS 2 grid component shows how to consume data from a remote data service.', 'category': 'Data Binding','api':'{"GridComponent":["dataSource","allowPaging","columns","pageSettings"] }' },
     { 'path': 'grid/custom-binding', 'component': 'CustomBinding', 'name': 'Custom Binding', 'order': '03', 'description':'This demo for Essential JS 2 grid component shows how to bind the data using custom data binding.', 'category': 'Data Binding','api':'{"GridComponent":["dataSource","allowPaging","columns","pageSettings","allowSorting", "allowGrouping"] }' },
     { 'path': 'grid/auto-wrap', 'component': 'AutoWrap', 'name': 'AutoWrap Column cells', 'order': '04', 'description':'This demo for Essential JS 2 grid component shows how the grid cell content is autowrapped to show large cell content.', 'category': 'Columns','api':'{"GridComponent":["dataSource","allowPaging","allowTextWrap","columns","pageSettings"] }' },
     { 'path': 'grid/show-hide', 'component': 'ShowHide', 'name': 'Show or Hide Column', 'description':'This demo for Essential JS 2 grid component demonstrates the dynamic show and hide columns feature.', 'order': '04', 'category': 'Columns','api':'{"GridComponent":["dataSource","allowPaging","pageSettings","columns"] }' },
     { 'path': 'grid/stacked-header', 'component': 'StackedHeader', 'name': 'Stacked Header', 'description':'This demo for Essential JS 2 grid component shows the usage of the stacked header feature.', 'order': '04', 'category': 'Columns','api':'{"GridComponent":["dataSource","allowPaging","pageSettings","columns"] }'},
     { 'path': 'grid/reorder', 'component': 'Reordering', 'name': 'Reorder', 'order': '04', 'description':'This demo for Essential JS 2 grid component shows the reordering columns features.', 'category': 'Columns','api':'{"GridComponent":["dataSource","allowReordering","actionComplete","columns"] }' },
     { 'path': 'grid/column-chooser', 'component': 'ColChooser', 'name': 'Column Chooser', 'order': '04', 'description':'This demo for Essential JS 2 grid component shows how the column chooser feature can be used to show or hide columns dynamically.', 'category': 'Columns','api':'{"GridComponent":["dataSource","allowPaging","showColumnChooser","columns","toolbar"] }'},
     { 'path': 'grid/column-resizing', 'component': 'ColumnResizing', 'name': 'Column Resize', 'order': '04', 'description':'This demo for Essential JS 2 grid component shows how the column resizing feature can be used to change width dynamically.', 'category': 'Columns','api':'{"GridComponent":["dataSource","allowResizing","height","columns"] }'},
     { 'path': 'grid/column-spanning', 'component': 'ColumnSpanning', 'name': 'Column Spanning', 'order': '04', 'description':'This demo for Essential JS 2 grid component shows the usage of the column spanning feature.', 'category': 'Columns', 'api':'{"GridComponent":["dataSource","allowTextWrap","columns","queryCellInfo","gridLines","width","height"] }' },
     { 'path': 'grid/column-template', 'component': 'ColumnTemplate', 'name': 'Column Template', 'order': '04', 'description':'This demo for Essential JS 2 grid component shows the usage of template columns in grid.', 'category': 'Columns', 'api':'{"GridComponent":["dataSource","columns","width","height"] }' },
     { 'path': 'grid/frozen-rows', 'component': 'FrozenRows', 'name': 'Frozen Rows And Columns', 'order': '04', 'description':'This demo for Essential JS 2 grid component shows how the rows and columns can be frozen or pinned.', 'category': 'Columns', 'api':'{"GridComponent":["dataSource","allowSelection","columns","frozenColumns","frozenRows","height"] }' },
     { 'path': 'grid/column-menu', 'component': 'ColumnMenuSample', 'name': 'Column Menu', 'description':'This demo for Essential JS 2 grid component shows the usage of the various column functionalities of the column menu feature.', 'order': '04', 'category': 'Columns', 'api':'{"GridComponent":["dataSource","allowSorting", "allowGrouping", "allowFiltering", "showColumnMenu", "filterSettings", "groupSettings", "columns", "allowSorting"]}' },
     { 'path': 'grid/foreign-key', 'component': 'ForeignKeyColumn', 'name': 'Foreign Key Column', 'description':'This demo for Essential JS 2 grid component demonstrates the usage of a foreign key column and performing actions such as filtering, sorting, and editing in the foreign key column.', 'order': '04', 'category': 'Columns', 'api':'{"GridComponent":["dataSource","allowSorting","allowPaging", "columns", "allowFiltering", "filterSettings", "editSettings"]}'},
     { 'path': 'grid/row-height', 'component': 'RowHeight', 'name': 'Row Height', 'description':'This demo for Essential JS 2 grid component shows the row height feature.', 'order': '05', 'category': 'Rows','api':'{"GridComponent":["dataSource","toolbar","height","columns","rowHeight","toolbarClick"] }' },
     { 'path': 'grid/row-template', 'component': 'RowTemplate', 'name': 'Row Template', 'order': '05', 'description':'This demo for Essential JS 2 grid component shows the usage of the row template feature.', 'category': 'Rows','api':'{"GridComponent":["dataSource","columns","rowTemplate"] }' },
     { 'path': 'grid/detail-template', 'component': 'DetailTemplate', 'name': 'Detail Template', 'order': '05', 'description':'This demo for Essential JS 2 grid component shows the usage of the detail template feature.', 'category': 'Rows', 'api':'{"GridComponent":["dataSource","columns","detailTemplate","width","height"] }' },
     { 'path': 'grid/row-drag-drop', 'component': 'Source', 'name': 'Row Drag and Drop', 'description':'This demo for Essential JS 2 grid component demonstrates how the rows can be dragged between grids using the row drag-and-drop feature.', 'order': '05', 'category': 'Rows', 'hideOnDevice': 'true','api':'{"GridComponent":["dataSource","allowPaging","pageSettings","columns","allowRowDragAndDrop","selectionSettings","rowDropSettings","width"] }' },
     { 'path': 'grid/sorting', 'component': 'Sorting', 'name': 'Sorting', 'order': '06', 'description':'This demo for Essential JS 2 grid component shows the grid multi-sorting feature. Using this feature, grid rows can be sorted by two or more columns.', 'category': 'Sorting','api':'{"GridComponent":["dataSource","allowSelection","selectionSettings","columns","enableHover"] }' },
     { 'path': 'grid/filtering', 'component': 'Filtering', 'name': 'Default Filtering', 'description':'This demo for Essential JS 2 grid component shows how to place a filter bar row in the header to filter grid rows.', 'order': '07', 'category': 'Filtering','api':'{"GridComponent":["allowFiltering","dataSource","allowPaging","pageSettings","columns"] }' },
     { 'path': 'grid/filter-menu', 'component': 'FilterMenu', 'name': 'Filter Menu', 'type': 'update', 'order': '07', 'category': 'Filtering', 'description':'This demo for Essential JS 2 grid component demonstrates a way of filtering rows using a menu, check box, and Excel filter UI.', 'api':'{"GridComponent":["allowFiltering","filterSettings","dataSource","allowPaging","pageSettings","columns"] }' },
     { 'path': 'grid/searching', 'component': 'Searching', 'name': 'Search', 'description':'This demo for Essential JS 2 grid component shows the content searching feature.', 'order': '07', 'category': 'Filtering','api':'{"GridComponent":["dataSource","allowPaging","pageSettings","columns","toolbar"] }' },
     { 'path': 'grid/paging', 'component': 'Paging', 'name': 'Paging', 'type': 'update', 'description':'This demo for Essential JS 2 grid component shows how you can display the contents of the grid in page segments using the paging feature.', 'order': '08', 'category': 'Paging','api':'{"GridComponent":["dataSource","allowPaging","pageSettings","columns"] }' },
     { 'path': 'grid/selection', 'component': 'Selectioning', 'name': 'Default Selection', 'description':'This demo for Essential JS 2 grid component shows how to select rows or cells through simple mouse down or keyboard interaction using the selection feature.', 'order': '09', 'category': 'Selection','api':'{"GridComponent":["dataSource","allowSelection","selectionSettings","enableHover","columns"] }' },
     { 'path': 'grid/selection-api', 'component': 'SelectionAPI', 'name': 'Selection API', 'description':'This demo for Essential JS 2 grid component shows how to perform selection programmatically. ', 'order': '09', 'category': 'Selection','api':'{"GridComponent":["dataSource","allowPaging","pageSettings","columns","allowSelection","selectionSettings","enableHover"] }' },
     { 'path': 'grid/checkbox-selection', 'component': 'CheckboxSelection', 'name': 'Checkbox Selection', 'description':'This demo for Essential JS 2 grid component shows how the check box selection feature can be used to select grid rows.', 'order': '09', 'category': 'Selection','api':'{"GridComponent":["dataSource","allowPaging","pageSettings","columns","allowSelection","selectionSettings","enableHover"] }' },
     { 'path': 'grid/aggregate-default', 'component': 'AggregateDefault',  'description': 'This demo for Essential JS 2 grid component shows how the row values can be aggregated and shown in a column footer.', 'name': 'Default Aggregate', 'order': '10', 'category': 'Aggregates','api':'{"GridComponent":["dataSource","allowPaging","pageSettings","columns","Aggregate"] }'},
     { 'path': 'grid/aggregate-group', 'component': 'AggregateGroup', 'name': 'Group and Caption aggregate', 'description': 'This demo for Essential JS 2 grid component shows how the row values can be aggregated for each group of items and shown in a group caption and footer.', 'order': '10', 'category': 'Aggregates','api':'{"GridComponent":["dataSource","allowPaging","pageSettings","columns","Aggregate", "Group"] }'},
     { 'path': 'grid/reactive-aggregate', 'component': 'ReactiveAggregate', 'type': 'new', 'name': 'Reactive Aggregate', 'order': '10', 'description': 'This demo for Essential JS 2 grid component shows how the row values can be updated while the data is modified.', 'category': 'Aggregates','api':'{"GridComponent":["dataSource","allowPaging","pageSettings","columns","Aggregate", "Group", "Edit","Toolbar"] }'},
     { 'path': 'grid/normal-edit', 'component': 'NormalEdit', 'name': 'Inline Editing', 'description':'This demo for Essential JS 2 grid component shows the inline editing operation.', 'order': '11', 'type': 'update', 'category': 'Editing','api':'{"GridComponent":["dataSource","allowPaging","pageSettings","columns","editSettings","toolbar"] }'},
     { 'path': 'grid/dialog-edit', 'component': 'DialogEdit', 'name': 'Dialog Editing', 'order': '11', 'category': 'Editing', 'description':'This demo for Essential JS 2 grid component shows how to edit grid rows using the Essential JS 2 dialog component.', 'api':'{"GridComponent":["dataSource","allowPaging","pageSettings","columns","editSettings","toolbar"] }' },
     { 'path': 'grid/dialog-template', 'component': 'DialogTemplate', 'type': 'new', 'name': 'Dialog Template', 'order': '11', 'category': 'Editing', 'description':'This demo for Essential JS 2 grid component shows how to edit the grid rows using Essential JS 2 Dialog template.','api':'{"GridComponent":["dataSource","allowPaging","pageSettings","columns","editSettings","toolbar"] }' },
     { 'path': 'grid/batch', 'component': 'BatchEdit', 'name': 'Batch Editing', 'order': '11', 'description':'This demo for Essential JS 2 grid component shows how to perform bulk changes to the grid content using batch edit mode.', 'category': 'Editing','api':'{"GridComponent":["dataSource","allowPaging","pageSettings","columns","editSettings","toolbar"] }'},
     { 'path': 'grid/command-column', 'component': 'CommandColumnEdit', 'name': 'CommandColumn', 'order': '11', 'description':'This demo for Essential JS 2 grid component shows how to edit and delete records using a command column.', 'category': 'Editing','api':'{"GridComponent":["dataSource","allowPaging","showColumnChooser","columns","toolbar"] }'},
     { 'path': 'grid/default-exporting', 'component': 'Exporting', 'type': 'update', 'name': 'Default Exporting', 'order': '12', 'category': 'Exporting', 'description':'This demo for Essential JS 2 grid component shows the client-side exporting of grid content to Excel, PDF, and CSV formats.', 'api':'{"GridComponent":["dataSource","allowExcelExport","allowPdfExport","allowPaging","toolbar","pageSettings","columns","groupSettings","allowGrouping"] }' },
     { 'path': 'grid/advanced-exporting', 'component': 'AdvancedExporting', 'name': 'Advanced Exporting', 'order': '12', 'description':'This demo for Essential JS 2 grid component demonstrates how exporting can be customized to add headers and footers in exported documents.', 'category': 'Exporting','api':'{"GridComponent":["dataSource","allowExcelExport","allowPdfExport","toolbar","allowPaging","pageSettings","columns"] }'},
     { 'path': 'grid/print', 'component': 'Print', 'name': 'Print', 'order': '12', 'description':'This demo for Essential JS 2 grid component shows how to print the grid content.', 'category': 'Exporting','api':'{"GridComponent":["dataSource","toolbar","allowPaging","pageSettings","columns"] }'}
 ]