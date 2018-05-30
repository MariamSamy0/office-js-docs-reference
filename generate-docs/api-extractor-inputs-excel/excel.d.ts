////////////////////////////////////////////////////////////////
/////////////////////// Begin Excel APIs ///////////////////////
////////////////////////////////////////////////////////////////

export declare namespace Excel {
    export interface ThreeArrowsSet {
        [index: number]: Icon;
        redDownArrow: Icon;
        yellowSideArrow: Icon;
        greenUpArrow: Icon;
    }
    export interface ThreeArrowsGraySet {
        [index: number]: Icon;
        grayDownArrow: Icon;
        graySideArrow: Icon;
        grayUpArrow: Icon;
    }
    export interface ThreeFlagsSet {
        [index: number]: Icon;
        redFlag: Icon;
        yellowFlag: Icon;
        greenFlag: Icon;
    }
    export interface ThreeTrafficLights1Set {
        [index: number]: Icon;
        redCircleWithBorder: Icon;
        yellowCircle: Icon;
        greenCircle: Icon;
    }
    export interface ThreeTrafficLights2Set {
        [index: number]: Icon;
        redTrafficLight: Icon;
        yellowTrafficLight: Icon;
        greenTrafficLight: Icon;
    }
    export interface ThreeSignsSet {
        [index: number]: Icon;
        redDiamond: Icon;
        yellowTriangle: Icon;
        greenCircle: Icon;
    }
    export interface ThreeSymbolsSet {
        [index: number]: Icon;
        redCrossSymbol: Icon;
        yellowExclamationSymbol: Icon;
        greenCheckSymbol: Icon;
    }
    export interface ThreeSymbols2Set {
        [index: number]: Icon;
        redCross: Icon;
        yellowExclamation: Icon;
        greenCheck: Icon;
    }
    export interface FourArrowsSet {
        [index: number]: Icon;
        redDownArrow: Icon;
        yellowDownInclineArrow: Icon;
        yellowUpInclineArrow: Icon;
        greenUpArrow: Icon;
    }
    export interface FourArrowsGraySet {
        [index: number]: Icon;
        grayDownArrow: Icon;
        grayDownInclineArrow: Icon;
        grayUpInclineArrow: Icon;
        grayUpArrow: Icon;
    }
    export interface FourRedToBlackSet {
        [index: number]: Icon;
        blackCircle: Icon;
        grayCircle: Icon;
        pinkCircle: Icon;
        redCircle: Icon;
    }
    export interface FourRatingSet {
        [index: number]: Icon;
        oneBar: Icon;
        twoBars: Icon;
        threeBars: Icon;
        fourBars: Icon;
    }
    export interface FourTrafficLightsSet {
        [index: number]: Icon;
        blackCircleWithBorder: Icon;
        redCircleWithBorder: Icon;
        yellowCircle: Icon;
        greenCircle: Icon;
    }
    export interface FiveArrowsSet {
        [index: number]: Icon;
        redDownArrow: Icon;
        yellowDownInclineArrow: Icon;
        yellowSideArrow: Icon;
        yellowUpInclineArrow: Icon;
        greenUpArrow: Icon;
    }
    export interface FiveArrowsGraySet {
        [index: number]: Icon;
        grayDownArrow: Icon;
        grayDownInclineArrow: Icon;
        graySideArrow: Icon;
        grayUpInclineArrow: Icon;
        grayUpArrow: Icon;
    }
    export interface FiveRatingSet {
        [index: number]: Icon;
        noBars: Icon;
        oneBar: Icon;
        twoBars: Icon;
        threeBars: Icon;
        fourBars: Icon;
    }
    export interface FiveQuartersSet {
        [index: number]: Icon;
        whiteCircleAllWhiteQuarters: Icon;
        circleWithThreeWhiteQuarters: Icon;
        circleWithTwoWhiteQuarters: Icon;
        circleWithOneWhiteQuarter: Icon;
        blackCircle: Icon;
    }
    export interface ThreeStarsSet {
        [index: number]: Icon;
        silverStar: Icon;
        halfGoldStar: Icon;
        goldStar: Icon;
    }
    export interface ThreeTrianglesSet {
        [index: number]: Icon;
        redDownTriangle: Icon;
        yellowDash: Icon;
        greenUpTriangle: Icon;
    }
    export interface FiveBoxesSet {
        [index: number]: Icon;
        noFilledBoxes: Icon;
        oneFilledBox: Icon;
        twoFilledBoxes: Icon;
        threeFilledBoxes: Icon;
        fourFilledBoxes: Icon;
    }
    export interface IconCollections {
        threeArrows: ThreeArrowsSet;
        threeArrowsGray: ThreeArrowsGraySet;
        threeFlags: ThreeFlagsSet;
        threeTrafficLights1: ThreeTrafficLights1Set;
        threeTrafficLights2: ThreeTrafficLights2Set;
        threeSigns: ThreeSignsSet;
        threeSymbols: ThreeSymbolsSet;
        threeSymbols2: ThreeSymbols2Set;
        fourArrows: FourArrowsSet;
        fourArrowsGray: FourArrowsGraySet;
        fourRedToBlack: FourRedToBlackSet;
        fourRating: FourRatingSet;
        fourTrafficLights: FourTrafficLightsSet;
        fiveArrows: FiveArrowsSet;
        fiveArrowsGray: FiveArrowsGraySet;
        fiveRating: FiveRatingSet;
        fiveQuarters: FiveQuartersSet;
        threeStars: ThreeStarsSet;
        threeTriangles: ThreeTrianglesSet;
        fiveBoxes: FiveBoxesSet;
    }
    var icons: IconCollections;
    /**
     * Provides connection session for a remote workbook.
     */
    export class Session {
        private static WorkbookSessionIdHeaderName;
        private static WorkbookSessionIdHeaderNameLower;
        constructor(workbookUrl?: string, requestHeaders?: {
            [name: string]: string;
        }, persisted?: boolean);
        /**
         * Close the session.
         */
        close(): Promise<void>;
    }
    /**
     * The RequestContext object facilitates requests to the Excel application. Since the Office add-in and the Excel application run in two different processes, the request context is required to get access to the Excel object model from the add-in.
     */
    export class RequestContext extends OfficeExtension.ClientRequestContext {
        constructor(url?: string | Session);
        readonly workbook: Workbook;
        readonly application: Application;
        readonly runtime: Runtime;
    }
    /**
     * Executes a batch script that performs actions on the Excel object model, using a new RequestContext. When the promise is resolved, any tracked objects that were automatically allocated during execution will be released.
     * @param batch - A function that takes in a RequestContext and returns a promise (typically, just the result of "context.sync()"). The context parameter facilitates requests to the Excel application. Since the Office add-in and the Excel application run in two different processes, the RequestContext is required to get access to the Excel object model from the add-in.
     */
    export function run<T>(batch: (context: Excel.RequestContext) => Promise<T>): Promise<T>;
    /**
     * Executes a batch script that performs actions on the Excel object model, using a new remote RequestContext. When the promise is resolved, any tracked objects that were automatically allocated during execution will be released.
     * @param requestInfo - The URL of the remote workbook and the request headers to be sent.
     * @param batch - A function that takes in a RequestContext and returns a promise (typically, just the result of "context.sync()"). The context parameter facilitates requests to the Excel application. Since the Office add-in and the Excel application run in two different processes, the RequestContext is required to get access to the Excel object model from the add-in.
     */
    export function run<T>(requestInfo: OfficeExtension.RequestUrlAndHeaderInfo | Session, batch: (context: Excel.RequestContext) => Promise<T>): Promise<T>;
    /**
     * Executes a batch script that performs actions on the Excel object model, using the RequestContext of a previously-created object. When the promise is resolved, any tracked objects that were automatically allocated during execution will be released.
     * @param contextObject - A previously-created object. The batch will use the same RequestContext as the passed-in object, which means that any changes applied to the object will be picked up by "context.sync()".
     * @param batch - A function that takes in a RequestContext and returns a promise (typically, just the result of "context.sync()"). The context parameter facilitates requests to the Excel application. Since the Office add-in and the Excel application run in two different processes, the RequestContext is required to get access to the Excel object model from the add-in.
     */
    export function run<T>(contextObject: OfficeExtension.ClientRequestContext, batch: (context: Excel.RequestContext) => Promise<T>): Promise<T>;
    /**
     * Executes a batch script that performs actions on the Excel object model, using the RequestContext of a previously-created API object. When the promise is resolved, any tracked objects that were automatically allocated during execution will be released.
     * @param object - A previously-created API object. The batch will use the same RequestContext as the passed-in object, which means that any changes applied to the object will be picked up by "context.sync()".
     * @param batch - A function that takes in a RequestContext and returns a promise (typically, just the result of "context.sync()"). The context parameter facilitates requests to the Excel application. Since the Office add-in and the Excel application run in two different processes, the RequestContext is required to get access to the Excel object model from the add-in.
     */
    export function run<T>(object: OfficeExtension.ClientObject, batch: (context: Excel.RequestContext) => Promise<T>): Promise<T>;
    /**
     * Executes a batch script that performs actions on the Excel object model, using the remote RequestContext of a previously-created API object. When the promise is resolved, any tracked objects that were automatically allocated during execution will be released.
     * @param requestInfo - The URL of the remote workbook and the request headers to be sent.
     * @param object - A previously-created API object. The batch will use the same RequestContext as the passed-in object, which means that any changes applied to the object will be picked up by "context.sync()".
     * @param batch - A function that takes in a RequestContext and returns a promise (typically, just the result of "context.sync()"). The context parameter facilitates requests to the Excel application. Since the Office add-in and the Excel application run in two different processes, the RequestContext is required to get access to the Excel object model from the add-in.
     */
    export function run<T>(requestInfo: OfficeExtension.RequestUrlAndHeaderInfo | Session, object: OfficeExtension.ClientObject, batch: (context: Excel.RequestContext) => Promise<T>): Promise<T>;
    /**
     * Executes a batch script that performs actions on the Excel object model, using the RequestContext of previously-created API objects.
     * @param objects - An array of previously-created API objects. The array will be validated to make sure that all of the objects share the same context. The batch will use this shared RequestContext, which means that any changes applied to these objects will be picked up by "context.sync()".
     * @param batch - A function that takes in a RequestContext and returns a promise (typically, just the result of "context.sync()"). The context parameter facilitates requests to the Excel application. Since the Office add-in and the Excel application run in two different processes, the RequestContext is required to get access to the Excel object model from the add-in.
     */
    export function run<T>(objects: OfficeExtension.ClientObject[], batch: (context: Excel.RequestContext) => Promise<T>): Promise<T>;
    /**
     * Executes a batch script that performs actions on the Excel object model, using the remote RequestContext of previously-created API objects.
     * @param requestInfo - The URL of the remote workbook and the request headers to be sent.
     * @param objects - An array of previously-created API objects. The array will be validated to make sure that all of the objects share the same context. The batch will use this shared RequestContext, which means that any changes applied to these objects will be picked up by "context.sync()".
     * @param batch - A function that takes in a RequestContext and returns a promise (typically, just the result of "context.sync()"). The context parameter facilitates requests to the Excel application. Since the Office add-in and the Excel application run in two different processes, the RequestContext is required to get access to the Excel object model from the add-in.
     */
    export function run<T>(requestInfo: OfficeExtension.RequestUrlAndHeaderInfo | Session, objects: OfficeExtension.ClientObject[], batch: (context: Excel.RequestContext) => Promise<T>): Promise<T>;
    /**
     *
     * Provides information about the binding that raised the SelectionChanged event.
     *
     * [Api set: ExcelApi 1.2]
     */
    export interface BindingSelectionChangedEventArgs {
        /**
         *
         * Gets the Binding object that represents the binding that raised the SelectionChanged event.
         * 
         * @remarks
         * Hosts: Access, Excel, Word
         *
         * [Api set: ExcelApi 1.2]
         */
        binding: Excel.Binding;
        /**
         *
         * Gets the number of columns selected. The number of columns selected. If a single cell is selected returns 1.
         *
         * [Api set: ExcelApi 1.2]
         * 
         * @remarks
         * If the user makes a non-contiguous selection, the count for the last contiguous selection within the binding is returned.
         * 
         * For Word, this property will work only for bindings of BindingType "table". If the binding is of type "matrix", null is returned. Also, the call will fail if the table contains merged cells, because the structure of the table must be uniform for this property to work correctly.
         */
        columnCount: number;
        /**
         * Gets the number of columns selected. The number of columns selected. If a single cell is selected returns 1.
         *
         * [Api set: ExcelApi 1.2]
         * 
         * @remarks
         * If the user makes a non-contiguous selection, the count for the last contiguous selection within the binding is returned.
         * 
         * For Word, this property will work only for bindings of BindingType "table". If the binding is of type "matrix", null is returned. Also, the call will fail if the table contains merged cells, because the structure of the table must be uniform for this property to work correctly.
         */
        rowCount: number;
        /**
         *
         * Gets the index of the first column of the selection (zero-based).
         *
         * [Api set: ExcelApi 1.2]
         */
        startColumn: number;
        /**
         *
         * Gets the index of the first row of the selection (zero-based).
         *
         * [Api set: ExcelApi 1.2]
         */
        startRow: number;
    }
    /**
     *
     * Provides information about the binding that raised the DataChanged event.
     *
     * [Api set: ExcelApi 1.2]
     */
    export interface BindingDataChangedEventArgs {
        /**
         *
         * Gets the Binding object that represents the binding that raised the DataChanged event.
         *
         * [Api set: ExcelApi 1.2]
         */
        binding: Excel.Binding;
    }
    /**
     *
     * Provides information about the document that raised the SelectionChanged event.
     *
     * [Api set: ExcelApi 1.2]
     */
    export interface SelectionChangedEventArgs {
        /**
         *
         * Gets the workbook object that raised the SelectionChanged event.
         *
         * [Api set: ExcelApi 1.2]
         */
        workbook: Excel.Workbook;
    }
    /**
     *
     * Provides information about the setting that raised the SettingsChanged event
     *
     * [Api set: ExcelApi 1.4]
     */
    export interface SettingsChangedEventArgs {
        /**
         *
         * Gets the Setting object that represents the binding that raised the SettingsChanged event
         *
         * [Api set: ExcelApi 1.4]
         */
        settings: Excel.SettingCollection;
    }
    /**
     *
     * Provides information about the worksheet that raised the Changed event.
     *
     * [Api set: ExcelApi 1.7]
     */
    export interface WorksheetChangedEventArgs {
        /**
         *
         * Gets the range address that represents the changed area of a specific worksheet.
         *
         * [Api set: ExcelApi 1.7]
         */
        address: string;
        /**
         *
         * Gets the change type that represents how the Changed event is triggered. See Excel.DataChangeType for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        changeType: Excel.DataChangeType | "Unknown" | "RangeEdited" | "RowInserted" | "RowDeleted" | "ColumnInserted" | "ColumnDeleted" | "CellInserted" | "CellDeleted";
        /**
         *
         * Gets the source of the event. See Excel.EventSource for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        source: Excel.EventSource | "Local" | "Remote";
        /**
         *
         * Gets the type of the event. See Excel.EventType for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        type: "WorksheetChanged";
        /**
         *
         * Gets the id of the worksheet in which the data changed.
         *
         * [Api set: ExcelApi 1.7]
         */
        worksheetId: string;
        /**
         *
         * Gets the range that represents the changed area of a specific worksheet.
         *
         * [Api set: ExcelApi BETA (PREVIEW ONLY)]
         */
        getRange(ctx: Excel.RequestContext): Excel.Range;
        /**
         *
         * Gets the range that represents the changed area of a specific worksheet. It might return null object.
         *
         * [Api set: ExcelApi BETA (PREVIEW ONLY)]
         */
        getRangeOrNullObject(ctx: Excel.RequestContext): Excel.Range;
    }
    /**
     *
     * Provides information about the table that raised the Changed event.
     *
     * [Api set: ExcelApi 1.7]
     */
    export interface TableChangedEventArgs {
        /**
         *
         * Gets the address that represents the changed area of a table on a specific worksheet.
         *
         * [Api set: ExcelApi 1.7]
         */
        address: string;
        /**
         *
         * Gets the change type that represents how the Changed event is triggered. See Excel.DataChangeType for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        changeType: Excel.DataChangeType | "Unknown" | "RangeEdited" | "RowInserted" | "RowDeleted" | "ColumnInserted" | "ColumnDeleted" | "CellInserted" | "CellDeleted";
        /**
         *
         * Gets the source of the event. See Excel.EventSource for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        source: Excel.EventSource | "Local" | "Remote";
        /**
         *
         * Gets the id of the table in which the data changed.
         *
         * [Api set: ExcelApi 1.7]
         */
        tableId: string;
        /**
         *
         * Gets the type of the event. See Excel.EventType for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        type: "TableChanged";
        /**
         *
         * Gets the id of the worksheet in which the data changed.
         *
         * [Api set: ExcelApi 1.7]
         */
        worksheetId: string;
        /**
         *
         * Gets the range that represents the changed area of a table on a specific worksheet.
         *
         * [Api set: ExcelApi BETA (PREVIEW ONLY)]
         */
        getRange(ctx: Excel.RequestContext): Excel.Range;
        /**
         *
         * Gets the range that represents the changed area of a table on a specific worksheet. It might return null object.
         *
         * [Api set: ExcelApi BETA (PREVIEW ONLY)]
         */
        getRangeOrNullObject(ctx: Excel.RequestContext): Excel.Range;
    }
    /**
     *
     * Provides information about the worksheet that raised the Activated event.
     *
     * [Api set: ExcelApi 1.7]
     */
    export interface WorksheetActivatedEventArgs {
        /**
         *
         * Gets the type of the event. See Excel.EventType for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        type: "WorksheetActivated";
        /**
         *
         * Gets the id of the worksheet that is activated.
         *
         * [Api set: ExcelApi 1.7]
         */
        worksheetId: string;
    }
    /**
     *
     * Provides information about the worksheet that raised the Deactivated event.
     *
     * [Api set: ExcelApi 1.7]
     */
    export interface WorksheetDeactivatedEventArgs {
        /**
         *
         * Gets the type of the event. See Excel.EventType for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        type: "WorksheetDeactivated";
        /**
         *
         * Gets the id of the worksheet that is deactivated.
         *
         * [Api set: ExcelApi 1.7]
         */
        worksheetId: string;
    }
    /**
     *
     * Provides information about the worksheet that raised the SelectionChanged event.
     *
     * [Api set: ExcelApi 1.7]
     */
    export interface WorksheetSelectionChangedEventArgs {
        /**
         *
         * Gets the range address that represents the selected area of a specific worksheet.
         *
         * [Api set: ExcelApi 1.7]
         */
        address: string;
        /**
         *
         * Gets the type of the event. See Excel.EventType for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        type: "WorksheetSelectionChanged";
        /**
         *
         * Gets the id of the worksheet in which the selection changed.
         *
         * [Api set: ExcelApi 1.7]
         */
        worksheetId: string;
    }
    /**
     *
     * Provides information about the table that raised the SelectionChanged event.
     *
     * [Api set: ExcelApi 1.7]
     */
    export interface TableSelectionChangedEventArgs {
        /**
         *
         * Gets the range address that represents the selected area of the table on a specific worksheet.
         *
         * [Api set: ExcelApi 1.7]
         */
        address: string;
        /**
         *
         * Indicates if the selection is inside a table, address will be useless if IsInsideTable is false.
         *
         * [Api set: ExcelApi 1.7]
         */
        isInsideTable: boolean;
        /**
         *
         * Gets the id of the table in which the selection changed.
         *
         * [Api set: ExcelApi 1.7]
         */
        tableId: string;
        /**
         *
         * Gets the type of the event. See Excel.EventType for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        type: "TableSelectionChanged";
        /**
         *
         * Gets the id of the worksheet in which the selection changed.
         *
         * [Api set: ExcelApi 1.7]
         */
        worksheetId: string;
    }
    /**
     *
     * Provides information about the worksheet that raised the Added event.
     *
     * [Api set: ExcelApi 1.7]
     */
    export interface WorksheetAddedEventArgs {
        /**
         *
         * Gets the source of the event. See Excel.EventSource for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        source: Excel.EventSource | "Local" | "Remote";
        /**
         *
         * Gets the type of the event. See Excel.EventType for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        type: "WorksheetAdded";
        /**
         *
         * Gets the id of the worksheet that is added to the workbook.
         *
         * [Api set: ExcelApi 1.7]
         */
        worksheetId: string;
    }
    /**
     *
     * Provides information about the worksheet that raised the Deleted event.
     *
     * [Api set: ExcelApi 1.7]
     */
    export interface WorksheetDeletedEventArgs {
        /**
         *
         * Gets the source of the event. See Excel.EventSource for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        source: Excel.EventSource | "Local" | "Remote";
        /**
         *
         * Gets the type of the event. See Excel.EventType for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        type: "WorksheetDeleted";
        /**
         *
         * Gets the id of the worksheet that is deleted from the workbook.
         *
         * [Api set: ExcelApi 1.7]
         */
        worksheetId: string;
    }
    /**
     *
     * Represents the Excel Runtime class.
     *
     * [Api set: ExcelApi 1.5]
     */
    export class Runtime extends OfficeExtension.ClientObject {
        toJSON(): {
            [key: string]: string;
        };
    }
    /**
     *
     * Represents the Excel application that manages the workbook.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class Application extends OfficeExtension.ClientObject {
        /**
         *
         * Returns the calculation mode used in the workbook. See Excel.CalculationMode for details.
         *
         * [Api set: ExcelApi 1.1 for get, 1.8 for set]
         */
        calculationMode: Excel.CalculationMode | "Automatic" | "AutomaticExceptTables" | "Manual";
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ApplicationUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: Application): void;
        /**
         *
         * Recalculate all currently opened workbooks in Excel.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param calculationType - Specifies the calculation type to use. See Excel.CalculationType for details.
         */
        calculate(calculationType: Excel.CalculationType): void;
        /**
         *
         * Recalculate all currently opened workbooks in Excel.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param calculationType - Specifies the calculation type to use. See Excel.CalculationType for details.
         */
        calculate(calculationType: "Recalculate" | "Full" | "FullRebuild"): void;
        /**
         *
         * Suspends calculation until the next "context.sync()" is called. Once set, it is the developer's responsibility to re-calc the workbook, to ensure that any dependencies are propagated.
         *
         * [Api set: ExcelApi 1.6]
         */
        suspendApiCalculationUntilNextSync(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ApplicationLoadOptions): Excel.Application;
        load(option?: string | string[]): Excel.Application;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.Application;
        toJSON(): Excel.Interfaces.ApplicationData;
    }
    /**
     *
     * Workbook is the top level object which contains related workbook objects such as worksheets, tables, ranges, etc.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class Workbook extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the Excel application instance that contains this workbook.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly application: Excel.Application;
        /**
         *
         * Represents a collection of bindings that are part of the workbook.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly bindings: Excel.BindingCollection;
        /**
         *
         * Represents the collection of custom XML parts contained by this workbook.
         *
         * [Api set: ExcelApi 1.5]
         */
        readonly customXmlParts: Excel.CustomXmlPartCollection;
        /**
         *
         * Represents all data connections in the workbook.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly dataConnections: Excel.DataConnectionCollection;
        /**
         *
         * Represents a collection of worksheet functions that can be used for computation.
         *
         * [Api set: ExcelApi 1.2]
         */
        readonly functions: Excel.Functions;
        /**
         *
         * Represents a collection of workbook scoped named items (named ranges and constants).
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly names: Excel.NamedItemCollection;
        /**
         *
         * Represents a collection of PivotTables associated with the workbook.
         *
         * [Api set: ExcelApi 1.3]
         */
        readonly pivotTables: Excel.PivotTableCollection;
        /**
         *
         * Gets the workbook properties.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly properties: Excel.DocumentProperties;
        /**
         *
         * Returns workbook protection object for a workbook.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly protection: Excel.WorkbookProtection;
        /**
         *
         * Represents a collection of Settings associated with the workbook.
         *
         * [Api set: ExcelApi 1.4]
         */
        readonly settings: Excel.SettingCollection;
        /**
         *
         * Represents a collection of styles associated with the workbook.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly styles: Excel.StyleCollection;
        /**
         *
         * Represents a collection of tables associated with the workbook.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly tables: Excel.TableCollection;
        /**
         *
         * Represents a collection of worksheets associated with the workbook.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly worksheets: Excel.WorksheetCollection;
        /**
         *
         * Gets the workbook name.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly name: string;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.WorkbookUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: Workbook): void;
        /**
         *
         * Gets the currently active cell from the workbook.
         *
         * [Api set: ExcelApi 1.7]
         */
        getActiveCell(): Excel.Range;
        /**
         *
         * Gets the currently selected range from the workbook.
         *
         * [Api set: ExcelApi 1.1]
         */
        getSelectedRange(): Excel.Range;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.WorkbookLoadOptions): Excel.Workbook;
        load(option?: string | string[]): Excel.Workbook;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.Workbook;
        /**
         *
         * Occurs when the selection in the document is changed.
         *
         * [Api set: ExcelApi 1.2]
         */
        readonly onSelectionChanged: OfficeExtension.EventHandlers<Excel.SelectionChangedEventArgs>;
        toJSON(): Excel.Interfaces.WorkbookData;
    }
    /**
     *
     * Represents the protection of a workbook object.
     *
     * [Api set: ExcelApi 1.7]
     */
    export class WorkbookProtection extends OfficeExtension.ClientObject {
        /**
         *
         * Protects a workbook. Fails if the workbook has been protected.
         *
         * [Api set: ExcelApi 1.7]
         *
         * @param password - workbook protection password.
         */
        protect(password?: string): void;
        /**
         *
         * Unprotects a workbook.
         *
         * [Api set: ExcelApi 1.7]
         *
         * @param password - workbook protection password.
         */
        unprotect(password?: string): void;
        toJSON(): {
            [key: string]: string;
        };
    }
    /**
     *
     * An Excel worksheet is a grid of cells. It can contain data, tables, charts, etc.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class Worksheet extends OfficeExtension.ClientObject {
        /**
         *
         * Returns collection of charts that are part of the worksheet.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly charts: Excel.ChartCollection;
        /**
         *
         * Gets an object that can be used to manipulate frozen panes on the worksheet.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly freezePanes: Excel.WorksheetFreezePanes;
        /**
         *
         * Collection of names scoped to the current worksheet.
         *
         * [Api set: ExcelApi 1.4]
         */
        readonly names: Excel.NamedItemCollection;
        /**
         *
         * Collection of PivotTables that are part of the worksheet.
         *
         * [Api set: ExcelApi 1.3]
         */
        readonly pivotTables: Excel.PivotTableCollection;
        /**
         *
         * Returns sheet protection object for a worksheet.
         *
         * [Api set: ExcelApi 1.2]
         */
        readonly protection: Excel.WorksheetProtection;
        /**
         *
         * Collection of tables that are part of the worksheet.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly tables: Excel.TableCollection;
        /**
         *
         * Returns a value that uniquely identifies the worksheet in a given workbook. The value of the identifier remains the same even when the worksheet is renamed or moved. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly id: string;
        /**
         *
         * The display name of the worksheet.
         *
         * [Api set: ExcelApi 1.1]
         */
        name: string;
        /**
         *
         * The zero-based position of the worksheet within the workbook.
         *
         * [Api set: ExcelApi 1.1]
         */
        position: number;
        /**
         *
         * Returns the standard (default) height of all the rows in the worksheet, in points. Read-only.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly standardHeight: number;
        /**
         *
         * Returns or sets the standard (default) width of all the columns in the worksheet.
            One unit of column width is equal to the width of one character in the Normal style. For proportional fonts, the width of the character 0 (zero) is used.
         *
         * [Api set: ExcelApi 1.7]
         */
        standardWidth: number;
        /**
         *
         * Gets or sets the worksheet tab color.
            When retrieving the tab color, if the worksheet is invisible, the value will be null. If the worksheet is visible but the tab color is set to auto, an empty string will be returned. Otherwise, the property will be set to a color, in the form "#123456"
            When setting the color, use an empty-string to set an "auto" color, or a real color otherwise.
         *
         * [Api set: ExcelApi 1.7]
         */
        tabColor: string;
        /**
         *
         * The Visibility of the worksheet.
         *
         * [Api set: ExcelApi 1.1 for reading visibility; 1.2 for setting it.]
         */
        visibility: Excel.SheetVisibility | "Visible" | "Hidden" | "VeryHidden";
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.WorksheetUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: Worksheet): void;
        /**
         *
         * Activate the worksheet in the Excel UI.
         *
         * [Api set: ExcelApi 1.1]
         */
        activate(): void;
        /**
         *
         * Calculates all cells on a worksheet.
         *
         * [Api set: ExcelApi 1.6]
         */
        calculate(markAllDirty: boolean): void;
        /**
         *
         * Copy a worksheet and place it at the specified position. Return the copied worksheet.
         *
         * [Api set: ExcelApi 1.7]
         */
        copy(positionType?: Excel.WorksheetPositionType, relativeTo?: Excel.Worksheet): Excel.Worksheet;
        /**
         *
         * Copy a worksheet and place it at the specified position. Return the copied worksheet.
         *
         * [Api set: ExcelApi 1.7]
         */
        copy(positionType?: "None" | "Before" | "After" | "Beginning" | "End", relativeTo?: Excel.Worksheet): Excel.Worksheet;
        /**
         *
         * Deletes the worksheet from the workbook.
         *
         * [Api set: ExcelApi 1.1]
         */
        delete(): void;
        /**
         *
         * Gets the range object containing the single cell based on row and column numbers. The cell can be outside the bounds of its parent range, so long as it's stays within the worksheet grid.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param row - The row number of the cell to be retrieved. Zero-indexed.
         * @param column - the column number of the cell to be retrieved. Zero-indexed.
         */
        getCell(row: number, column: number): Excel.Range;
        /**
         *
         * Gets the worksheet that follows this one. If there are no worksheets following this one, this method will throw an error.
         *
         * [Api set: ExcelApi 1.5]
         *
         * @param visibleOnly - If true, considers only visible worksheets, skipping over any hidden ones.
         */
        getNext(visibleOnly?: boolean): Excel.Worksheet;
        /**
         *
         * Gets the worksheet that follows this one. If there are no worksheets following this one, this method will return a null object.
         *
         * [Api set: ExcelApi 1.5]
         *
         * @param visibleOnly - If true, considers only visible worksheets, skipping over any hidden ones.
         */
        getNextOrNullObject(visibleOnly?: boolean): Excel.Worksheet;
        /**
         *
         * Gets the worksheet that precedes this one. If there are no previous worksheets, this method will throw an error.
         *
         * [Api set: ExcelApi 1.5]
         *
         * @param visibleOnly - If true, considers only visible worksheets, skipping over any hidden ones.
         */
        getPrevious(visibleOnly?: boolean): Excel.Worksheet;
        /**
         *
         * Gets the worksheet that precedes this one. If there are no previous worksheets, this method will return a null objet.
         *
         * [Api set: ExcelApi 1.5]
         *
         * @param visibleOnly - If true, considers only visible worksheets, skipping over any hidden ones.
         */
        getPreviousOrNullObject(visibleOnly?: boolean): Excel.Worksheet;
        /**
         *
         * Gets the range object specified by the address or name.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param address - The address or the name of the range. If not specified, the entire worksheet range is returned.
         */
        getRange(address?: string): Excel.Range;
        /**
         *
         * Gets the range object beginning at a particular row index and column index, and spanning a certain number of rows and columns.
         *
         * [Api set: ExcelApi 1.7]
         *
         * @param startRow - Start row (zero-indexed).
         * @param startColumn - Start column (zero-indexed).
         * @param rowCount - Number of rows to include in the range.
         * @param columnCount - Number of columns to include in the range.
         */
        getRangeByIndexes(startRow: number, startColumn: number, rowCount: number, columnCount: number): Excel.Range;
        /**
         *
         * The used range is the smallest range that encompasses any cells that have a value or formatting assigned to them. If the entire worksheet is blank, this function will return the top left cell (i.e.,: it will *not* throw an error).
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param valuesOnly - Considers only cells with values as used cells (ignoring formatting). [Api set: ExcelApi 1.2]
         */
        getUsedRange(valuesOnly?: boolean): Excel.Range;
        /**
         *
         * The used range is the smallest range that encompasses any cells that have a value or formatting assigned to them. If the entire worksheet is blank, this function will return a null object.
         *
         * [Api set: ExcelApi 1.4]
         *
         * @param valuesOnly - Considers only cells with values as used cells.
         */
        getUsedRangeOrNullObject(valuesOnly?: boolean): Excel.Range;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.WorksheetLoadOptions): Excel.Worksheet;
        load(option?: string | string[]): Excel.Worksheet;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.Worksheet;
        /**
         *
         * Occurs when the worksheet is activated.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly onActivated: OfficeExtension.EventHandlers<Excel.WorksheetActivatedEventArgs>;
        /**
         *
         * Occurs when data changed on a specific worksheet.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly onChanged: OfficeExtension.EventHandlers<Excel.WorksheetChangedEventArgs>;
        /**
         *
         * Occurs when the worksheet is deactivated.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly onDeactivated: OfficeExtension.EventHandlers<Excel.WorksheetDeactivatedEventArgs>;
        /**
         *
         * Occurs when the selection changed on a specific worksheet.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly onSelectionChanged: OfficeExtension.EventHandlers<Excel.WorksheetSelectionChangedEventArgs>;
        toJSON(): Excel.Interfaces.WorksheetData;
    }
    /**
     *
     * Represents a collection of worksheet objects that are part of the workbook.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class WorksheetCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        readonly items: Excel.Worksheet[];
        /**
         *
         * Adds a new worksheet to the workbook. The worksheet will be added at the end of existing worksheets. If you wish to activate the newly added worksheet, call ".activate() on it.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param name - The name of the worksheet to be added. If specified, name should be unqiue. If not specified, Excel determines the name of the new worksheet.
         */
        add(name?: string): Excel.Worksheet;
        /**
         *
         * Gets the currently active worksheet in the workbook.
         *
         * [Api set: ExcelApi 1.1]
         */
        getActiveWorksheet(): Excel.Worksheet;
        /**
         *
         * Gets the number of worksheets in the collection.
         *
         * [Api set: ExcelApi 1.4]
         */
        getCount(visibleOnly?: boolean): OfficeExtension.ClientResult<number>;
        /**
         *
         * Gets the first worksheet in the collection.
            If true, considers only visible worksheets, skipping over any hidden ones.
         *
         * [Api set: ExcelApi 1.5]
         */
        getFirst(visibleOnly?: boolean): Excel.Worksheet;
        /**
         *
         * Gets a worksheet object using its Name or ID.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param key - The Name or ID of the worksheet.
         */
        getItem(key: string): Excel.Worksheet;
        /**
         *
         * Gets a worksheet object using its Name or ID. If the worksheet does not exist, will return a null object.
         *
         * [Api set: ExcelApi 1.4]
         *
         * @param key - The Name or ID of the worksheet.
         */
        getItemOrNullObject(key: string): Excel.Worksheet;
        /**
         *
         * Gets the last worksheet in the collection.
            If true, considers only visible worksheets, skipping over any hidden ones.
         *
         * [Api set: ExcelApi 1.5]
         */
        getLast(visibleOnly?: boolean): Excel.Worksheet;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.WorksheetCollectionLoadOptions & Excel.Interfaces.CollectionLoadOptions): Excel.WorksheetCollection;
        load(option?: string | string[]): Excel.WorksheetCollection;
        load(option?: OfficeExtension.LoadOption): Excel.WorksheetCollection;
        /**
         *
         * Occurs when any worksheet in the workbook is activated.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly onActivated: OfficeExtension.EventHandlers<Excel.WorksheetActivatedEventArgs>;
        /**
         *
         * Occurs when a new worksheet is added to the workbook.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly onAdded: OfficeExtension.EventHandlers<Excel.WorksheetAddedEventArgs>;
        /**
         *
         * Occurs when any worksheet in the workbook is deactivated.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly onDeactivated: OfficeExtension.EventHandlers<Excel.WorksheetDeactivatedEventArgs>;
        /**
         *
         * Occurs when a worksheet is deleted from the workbook.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly onDeleted: OfficeExtension.EventHandlers<Excel.WorksheetDeletedEventArgs>;
        toJSON(): Excel.Interfaces.WorksheetCollectionData;
    }
    /**
     *
     * Represents the protection of a sheet object.
     *
     * [Api set: ExcelApi 1.2]
     */
    export class WorksheetProtection extends OfficeExtension.ClientObject {
        /**
         *
         * Sheet protection options.
         *
         * [Api set: ExcelApi 1.2]
         */
        readonly options: Excel.WorksheetProtectionOptions;
        /**
         *
         * Indicates if the worksheet is protected. Read-Only.
         *
         * [Api set: ExcelApi 1.2]
         */
        readonly protected: boolean;
        /**
         *
         * Protects a worksheet. Fails if the worksheet has already been protected.
         *
         * [Api set: ExcelApi 1.2 for options; 1.7 for password]
         *
         * @param options - sheet protection options.
         * @param password - sheet protection password.
         */
        protect(options?: Excel.WorksheetProtectionOptions, password?: string): void;
        /**
         *
         * Unprotects a worksheet.
         *
         * [Api set: ExcelApi 1.7 for password]
         *
         * @param password - sheet protection password.
         */
        unprotect(password?: string): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.WorksheetProtectionLoadOptions): Excel.WorksheetProtection;
        load(option?: string | string[]): Excel.WorksheetProtection;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.WorksheetProtection;
        toJSON(): Excel.Interfaces.WorksheetProtectionData;
    }
    /**
     *
     * Represents the options in sheet protection.
     *
     * [Api set: ExcelApi 1.2]
     */
    export interface WorksheetProtectionOptions {
        /**
         *
         * Represents the worksheet protection option of allowing using auto filter feature.
         *
         * [Api set: ExcelApi 1.2]
         */
        allowAutoFilter?: boolean;
        /**
         *
         * Represents the worksheet protection option of allowing deleting columns.
         *
         * [Api set: ExcelApi 1.2]
         */
        allowDeleteColumns?: boolean;
        /**
         *
         * Represents the worksheet protection option of allowing deleting rows.
         *
         * [Api set: ExcelApi 1.2]
         */
        allowDeleteRows?: boolean;
        /**
         *
         * Represents the worksheet protection option of allowing editing objects.
         *
         * [Api set: ExcelApi 1.7]
         */
        allowEditObjects?: boolean;
        /**
         *
         * Represents the worksheet protection option of allowing editing scenarios.
         *
         * [Api set: ExcelApi 1.7]
         */
        allowEditScenarios?: boolean;
        /**
         *
         * Represents the worksheet protection option of allowing formatting cells.
         *
         * [Api set: ExcelApi 1.2]
         */
        allowFormatCells?: boolean;
        /**
         *
         * Represents the worksheet protection option of allowing formatting columns.
         *
         * [Api set: ExcelApi 1.2]
         */
        allowFormatColumns?: boolean;
        /**
         *
         * Represents the worksheet protection option of allowing formatting rows.
         *
         * [Api set: ExcelApi 1.2]
         */
        allowFormatRows?: boolean;
        /**
         *
         * Represents the worksheet protection option of allowing inserting columns.
         *
         * [Api set: ExcelApi 1.2]
         */
        allowInsertColumns?: boolean;
        /**
         *
         * Represents the worksheet protection option of allowing inserting hyperlinks.
         *
         * [Api set: ExcelApi 1.2]
         */
        allowInsertHyperlinks?: boolean;
        /**
         *
         * Represents the worksheet protection option of allowing inserting rows.
         *
         * [Api set: ExcelApi 1.2]
         */
        allowInsertRows?: boolean;
        /**
         *
         * Represents the worksheet protection option of allowing using PivotTable feature.
         *
         * [Api set: ExcelApi 1.2]
         */
        allowPivotTables?: boolean;
        /**
         *
         * Represents the worksheet protection option of allowing using sort feature.
         *
         * [Api set: ExcelApi 1.2]
         */
        allowSort?: boolean;
        /**
         *
         * Represents the worksheet protection option of selection mode.
         *
         * [Api set: ExcelApi 1.7]
         */
        selectionMode?: Excel.ProtectionSelectionMode | "Normal" | "Unlocked" | "None";
    }
    /**
     * [Api set: ExcelApi 1.7]
     */
    export class WorksheetFreezePanes extends OfficeExtension.ClientObject {
        /**
         *
         * Sets the frozen cells in the active worksheet view.
            The range provided corresponds to cells that will be frozen in the top- and left-most pane.
         *
         * [Api set: ExcelApi 1.7]
         *
         * @param frozenRange - A range that represents the cells to be frozen, or null to remove all frozen panes.
         */
        freezeAt(frozenRange: Excel.Range | string): void;
        /**
         *
         * Freeze the first column(s) of the worksheet in place.
         *
         * [Api set: ExcelApi 1.7]
         *
         * @param count - Optional number of columns to freeze, or zero to unfreeze all columns
         */
        freezeColumns(count?: number): void;
        /**
         *
         * Freeze the top row(s) of the worksheet in place.
         *
         * [Api set: ExcelApi 1.7]
         *
         * @param count - Optional number of rows to freeze, or zero to unfreeze all rows
         */
        freezeRows(count?: number): void;
        /**
         *
         * Gets a range that describes the frozen cells in the active worksheet view.
            The frozen range is corresponds to cells that are frozen in the top- and left-most pane.
         *
         * [Api set: ExcelApi 1.7]
         */
        getLocation(): Excel.Range;
        /**
         *
         * Gets a range that describes the frozen cells in the active worksheet view.
            The frozen range is corresponds to cells that are frozen in the top- and left-most pane.
            If there is no frozen pane, returns a null object.
         *
         * [Api set: ExcelApi 1.7]
         */
        getLocationOrNullObject(): Excel.Range;
        /**
         *
         * Removes all frozen panes in the worksheet.
         *
         * [Api set: ExcelApi 1.7]
         */
        unfreeze(): void;
        toJSON(): {
            [key: string]: string;
        };
    }
    /**
     *
     * Range represents a set of one or more contiguous cells such as a cell, a row, a column, block of cells, etc.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class Range extends OfficeExtension.ClientObject {
        /**
         *
         * Collection of ConditionalFormats that intersect the range.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly conditionalFormats: Excel.ConditionalFormatCollection;
        /**
         *
         * Returns a format object, encapsulating the range's font, fill, borders, alignment, and other properties. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly format: Excel.RangeFormat;
        /**
         *
         * Represents the range sort of the current range.
         *
         * [Api set: ExcelApi 1.2]
         */
        readonly sort: Excel.RangeSort;
        /**
         *
         * The worksheet containing the current range.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly worksheet: Excel.Worksheet;
        /**
         *
         * Represents the range reference in A1-style. Address value will contain the Sheet reference (e.g. Sheet1!A1:B4). Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly address: string;
        /**
         *
         * Represents range reference for the specified range in the language of the user. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly addressLocal: string;
        /**
         *
         * Number of cells in the range. This API will return -1 if the cell count exceeds 2^31-1 (2,147,483,647). Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly cellCount: number;
        /**
         *
         * Represents the total number of columns in the range. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly columnCount: number;
        /**
         *
         * Represents if all columns of the current range are hidden.
         *
         * [Api set: ExcelApi 1.2]
         */
        columnHidden: boolean;
        /**
         *
         * Represents the column number of the first cell in the range. Zero-indexed. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly columnIndex: number;
        /**
         *
         * Represents the formula in A1-style notation.
            When setting formulas to a range, the value argument can be either a single value (a string) or a two-dimensional array. If the argument is a single value, it will be applied to all cells in the range.
         *
         * [Api set: ExcelApi 1.1]
         */
        formulas: any[][];
        /**
         *
         * Represents the formula in A1-style notation, in the user's language and number-formatting locale.  For example, the English "=SUM(A1, 1.5)" formula would become "=SUMME(A1; 1,5)" in German.
            When setting formulas to a range, the value argument can be either a single value (a string) or a two-dimensional array. If the argument is a single value, it will be applied to all cells in the range.
         *
         * [Api set: ExcelApi 1.1]
         */
        formulasLocal: any[][];
        /**
         *
         * Represents the formula in R1C1-style notation.
            When setting formulas to a range, the value argument can be either a single value (a string) or a two-dimensional array. If the argument is a single value, it will be applied to all cells in the range.
         *
         * [Api set: ExcelApi 1.2]
         */
        formulasR1C1: any[][];
        /**
         *
         * Represents if all cells of the current range are hidden.
         *
         * [Api set: ExcelApi 1.2]
         */
        readonly hidden: boolean;
        /**
         *
         * Represents the hyperlink for the current range.
         *
         * [Api set: ExcelApi 1.7]
         */
        hyperlink: Excel.RangeHyperlink;
        /**
         *
         * Represents if the current range is an entire column.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly isEntireColumn: boolean;
        /**
         *
         * Represents if the current range is an entire row.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly isEntireRow: boolean;
        /**
         *
         * Represents Excel's number format code for the given range.
            When setting number format to a range, the value argument can be either a single value (string) or a two-dimensional array. If the argument is a single value, it will be applied to all cells in the range.
         *
         * [Api set: ExcelApi 1.1]
         */
        numberFormat: any[][];
        /**
         *
         * Represents Excel's number format code for the given range as a string in the language of the user.
            When setting number format local to a range, the value argument can be either a single value (string) or a two-dimensional array. If the argument is a single value, it will be applied to all cells in the range.
         *
         * [Api set: ExcelApi 1.7]
         */
        numberFormatLocal: any[][];
        /**
         *
         * Returns the total number of rows in the range. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly rowCount: number;
        /**
         *
         * Represents if all rows of the current range are hidden.
         *
         * [Api set: ExcelApi 1.2]
         */
        rowHidden: boolean;
        /**
         *
         * Returns the row number of the first cell in the range. Zero-indexed. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly rowIndex: number;
        /**
         *
         * Represents the style of the current range.
            If the styles of the cells are inconsistent, null will be returned.
            For custom styles, the style name will be returned. For built-in styles, a string representing a value in the BuiltInStyle enum will be returned.
         *
         * [Api set: ExcelApi 1.7]
         */
        style: string;
        /**
         *
         * Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that happens in Excel UI will not affect the text value returned by the API. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly text: string[][];
        /**
         *
         * Represents the type of data of each cell. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly valueTypes: Excel.RangeValueType[][];
        /**
         *
         * Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
            When setting values to a range, the value argument can be either a single value (string, number or boolean) or a two-dimensional array. If the argument is a single value, it will be applied to all cells in the range.
         *
         * [Api set: ExcelApi 1.1]
         */
        values: any[][];
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.RangeUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: Range): void;
        /**
         *
         * Calculates a range of cells on a worksheet.
         *
         * [Api set: ExcelApi 1.6]
         */
        calculate(): void;
        /**
         *
         * Clear range values, format, fill, border, etc.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param applyTo - Determines the type of clear action. See Excel.ClearApplyTo for details.
         */
        clear(applyTo?: Excel.ClearApplyTo): void;
        /**
         *
         * Clear range values, format, fill, border, etc.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param applyTo - Determines the type of clear action. See Excel.ClearApplyTo for details.
         */
        clear(applyTo?: "All" | "Formats" | "Contents" | "Hyperlinks" | "RemoveHyperlinks"): void;
        /**
         *
         * Deletes the cells associated with the range.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param shift - Specifies which way to shift the cells. See Excel.DeleteShiftDirection for details.
         */
        delete(shift: Excel.DeleteShiftDirection): void;
        /**
         *
         * Deletes the cells associated with the range.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param shift - Specifies which way to shift the cells. See Excel.DeleteShiftDirection for details.
         */
        delete(shift: "Up" | "Left"): void;
        /**
         *
         * Gets a Range object with the same top-left cell as the current Range object, but with the specified numbers of rows and columns.
         *
         * [Api set: ExcelApi 1.7]
         *
         * @param numRows - The number of rows of the new range size.
         * @param numColumns - The number of columns of the new range size.
         */
        getAbsoluteResizedRange(numRows: number, numColumns: number): Excel.Range;
        /**
         *
         * Gets the smallest range object that encompasses the given ranges. For example, the GetBoundingRect of "B2:C5" and "D10:E15" is "B2:E16".
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param anotherRange - The range object or address or range name.
         */
        getBoundingRect(anotherRange: Excel.Range | string): Excel.Range;
        /**
         *
         * Gets the range object containing the single cell based on row and column numbers. The cell can be outside the bounds of its parent range, so long as it's stays within the worksheet grid. The returned cell is located relative to the top left cell of the range.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param row - Row number of the cell to be retrieved. Zero-indexed.
         * @param column - Column number of the cell to be retrieved. Zero-indexed.
         */
        getCell(row: number, column: number): Excel.Range;
        /**
         *
         * Gets a column contained in the range.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param column - Column number of the range to be retrieved. Zero-indexed.
         */
        getColumn(column: number): Excel.Range;
        /**
         *
         * Gets a certain number of columns to the right of the current Range object.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param count - The number of columns to include in the resulting range. In general, use a positive number to create a range outside the current range. You can also use a negative number to create a range within the current range. The default value is 1.
         */
        getColumnsAfter(count?: number): Excel.Range;
        /**
         *
         * Gets a certain number of columns to the left of the current Range object.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param count - The number of columns to include in the resulting range. In general, use a positive number to create a range outside the current range. You can also use a negative number to create a range within the current range. The default value is 1.
         */
        getColumnsBefore(count?: number): Excel.Range;
        /**
         *
         * Gets an object that represents the entire column of the range (for example, if the current range represents cells "B4:E11", it's `getEntireColumn` is a range that represents columns "B:E").
         *
         * [Api set: ExcelApi 1.1]
         */
        getEntireColumn(): Excel.Range;
        /**
         *
         * Gets an object that represents the entire row of the range (for example, if the current range represents cells "B4:E11", it's `GetEntireRow` is a range that represents rows "4:11").
         *
         * [Api set: ExcelApi 1.1]
         */
        getEntireRow(): Excel.Range;
        /**
         *
         * Renders the range as a base64-encoded png image.
         *
         * [Api set: ExcelApi 1.7]
         */
        getImage(): OfficeExtension.ClientResult<string>;
        /**
         *
         * Gets the range object that represents the rectangular intersection of the given ranges.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param anotherRange - The range object or range address that will be used to determine the intersection of ranges.
         */
        getIntersection(anotherRange: Excel.Range | string): Excel.Range;
        /**
         *
         * Gets the range object that represents the rectangular intersection of the given ranges. If no intersection is found, will return a null object.
         *
         * [Api set: ExcelApi 1.4]
         *
         * @param anotherRange - The range object or range address that will be used to determine the intersection of ranges.
         */
        getIntersectionOrNullObject(anotherRange: Excel.Range | string): Excel.Range;
        /**
         *
         * Gets the last cell within the range. For example, the last cell of "B2:D5" is "D5".
         *
         * [Api set: ExcelApi 1.1]
         */
        getLastCell(): Excel.Range;
        /**
         *
         * Gets the last column within the range. For example, the last column of "B2:D5" is "D2:D5".
         *
         * [Api set: ExcelApi 1.1]
         */
        getLastColumn(): Excel.Range;
        /**
         *
         * Gets the last row within the range. For example, the last row of "B2:D5" is "B5:D5".
         *
         * [Api set: ExcelApi 1.1]
         */
        getLastRow(): Excel.Range;
        /**
         *
         * Gets an object which represents a range that's offset from the specified range. The dimension of the returned range will match this range. If the resulting range is forced outside the bounds of the worksheet grid, an error will be thrown.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param rowOffset - The number of rows (positive, negative, or 0) by which the range is to be offset. Positive values are offset downward, and negative values are offset upward.
         * @param columnOffset - The number of columns (positive, negative, or 0) by which the range is to be offset. Positive values are offset to the right, and negative values are offset to the left.
         */
        getOffsetRange(rowOffset: number, columnOffset: number): Excel.Range;
        /**
         *
         * Gets a Range object similar to the current Range object, but with its bottom-right corner expanded (or contracted) by some number of rows and columns.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param deltaRows - The number of rows by which to expand the bottom-right corner, relative to the current range. Use a positive number to expand the range, or a negative number to decrease it.
         * @param deltaColumns - The number of columnsby which to expand the bottom-right corner, relative to the current range. Use a positive number to expand the range, or a negative number to decrease it.
         */
        getResizedRange(deltaRows: number, deltaColumns: number): Excel.Range;
        /**
         *
         * Gets a row contained in the range.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param row - Row number of the range to be retrieved. Zero-indexed.
         */
        getRow(row: number): Excel.Range;
        /**
         *
         * Gets a certain number of rows above the current Range object.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param count - The number of rows to include in the resulting range. In general, use a positive number to create a range outside the current range. You can also use a negative number to create a range within the current range. The default value is 1.
         */
        getRowsAbove(count?: number): Excel.Range;
        /**
         *
         * Gets a certain number of rows below the current Range object.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param count - The number of rows to include in the resulting range. In general, use a positive number to create a range outside the current range. You can also use a negative number to create a range within the current range. The default value is 1.
         */
        getRowsBelow(count?: number): Excel.Range;
        /**
         *
         * Returns a Range object that represents the surrounding region for the top-left cell in this range. A surrounding region is a range bounded by any combination of blank rows and blank columns relative to this range.
         *
         * [Api set: ExcelApi 1.7]
         */
        getSurroundingRegion(): Excel.Range;
        /**
         *
         * Returns the used range of the given range object. If there are no used cells within the range, this function will throw an ItemNotFound error.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param valuesOnly - Considers only cells with values as used cells. [Api set: ExcelApi 1.2]
         */
        getUsedRange(valuesOnly?: boolean): Excel.Range;
        /**
         *
         * Returns the used range of the given range object. If there are no used cells within the range, this function will return a null object.
         *
         * [Api set: ExcelApi 1.4]
         *
         * @param valuesOnly - Considers only cells with values as used cells.
         */
        getUsedRangeOrNullObject(valuesOnly?: boolean): Excel.Range;
        /**
         *
         * Represents the visible rows of the current range.
         *
         * [Api set: ExcelApi 1.3]
         */
        getVisibleView(): Excel.RangeView;
        /**
         *
         * Inserts a cell or a range of cells into the worksheet in place of this range, and shifts the other cells to make space. Returns a new Range object at the now blank space.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param shift - Specifies which way to shift the cells. See Excel.InsertShiftDirection for details.
         */
        insert(shift: Excel.InsertShiftDirection): Excel.Range;
        /**
         *
         * Inserts a cell or a range of cells into the worksheet in place of this range, and shifts the other cells to make space. Returns a new Range object at the now blank space.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param shift - Specifies which way to shift the cells. See Excel.InsertShiftDirection for details.
         */
        insert(shift: "Down" | "Right"): Excel.Range;
        /**
         *
         * Merge the range cells into one region in the worksheet.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param across - Set true to merge cells in each row of the specified range as separate merged cells. The default value is false.
         */
        merge(across?: boolean): void;
        /**
         *
         * Selects the specified range in the Excel UI.
            If multiple selection is not supported on the platform and the range has multiple areas, the "InvalidReference" error will be returned.
         *
         * [Api set: ExcelApi 1.1]
         */
        select(): void;
        /**
         *
         * Displays the card for an active cell if it has rich value content.
         *
         * [Api set: ExcelApi 1.7]
         */
        showCard(): void;
        /**
         *
         * Unmerge the range cells into separate cells.
         *
         * [Api set: ExcelApi 1.2]
         */
        unmerge(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.RangeLoadOptions): Excel.Range;
        load(option?: string | string[]): Excel.Range;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.Range;
        /**
         * Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
         */
        track(): Excel.Range;
        /**
         * Release the memory associated with this object, if it has previously been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
         */
        untrack(): Excel.Range;
        toJSON(): Excel.Interfaces.RangeData;
    }
    /**
     *
     * Represents a string reference of the form SheetName!A1:B5, or a global or local named range.
     *
     * [Api set: ExcelApi 1.2]
     */
    export interface RangeReference {
        address: string;
    }
    /**
     *
     * Represents the necessary strings to get/set a hyperlink (XHL) object.
     *
     * [Api set: ExcelApi 1.7]
     */
    export interface RangeHyperlink {
        /**
         *
         * Represents the url target for the hyperlink.
         *
         * [Api set: ExcelApi 1.7]
         */
        address?: string;
        /**
         *
         * Represents the document reference target for the hyperlink.
         *
         * [Api set: ExcelApi 1.7]
         */
        documentReference?: string;
        /**
         *
         * Represents the string displayed when hovering over the hyperlink.
         *
         * [Api set: ExcelApi 1.7]
         */
        screenTip?: string;
        /**
         *
         * Represents the string that is displayed in the top left most cell in the range.
         *
         * [Api set: ExcelApi 1.7]
         */
        textToDisplay?: string;
    }
    /**
     *
     * RangeView represents a set of visible cells of the parent range.
     *
     * [Api set: ExcelApi 1.3]
     */
    export class RangeView extends OfficeExtension.ClientObject {
        /**
         *
         * Represents a collection of range views associated with the range.
         *
         * [Api set: ExcelApi 1.3]
         */
        readonly rows: Excel.RangeViewCollection;
        /**
         *
         * Represents the cell addresses of the RangeView.
         *
         * [Api set: ExcelApi 1.3]
         */
        readonly cellAddresses: any[][];
        /**
         *
         * Returns the number of visible columns. Read-only.
         *
         * [Api set: ExcelApi 1.3]
         */
        readonly columnCount: number;
        /**
         *
         * Represents the formula in A1-style notation.
         *
         * [Api set: ExcelApi 1.3]
         */
        formulas: any[][];
        /**
         *
         * Represents the formula in A1-style notation, in the user's language and number-formatting locale.  For example, the English "=SUM(A1, 1.5)" formula would become "=SUMME(A1; 1,5)" in German.
         *
         * [Api set: ExcelApi 1.3]
         */
        formulasLocal: any[][];
        /**
         *
         * Represents the formula in R1C1-style notation.
         *
         * [Api set: ExcelApi 1.3]
         */
        formulasR1C1: any[][];
        /**
         *
         * Returns a value that represents the index of the RangeView. Read-only.
         *
         * [Api set: ExcelApi 1.3]
         */
        readonly index: number;
        /**
         *
         * Represents Excel's number format code for the given cell.
         *
         * [Api set: ExcelApi 1.3]
         */
        numberFormat: any[][];
        /**
         *
         * Returns the number of visible rows. Read-only.
         *
         * [Api set: ExcelApi 1.3]
         */
        readonly rowCount: number;
        /**
         *
         * Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that happens in Excel UI will not affect the text value returned by the API. Read-only.
         *
         * [Api set: ExcelApi 1.3]
         */
        readonly text: string[][];
        /**
         *
         * Represents the type of data of each cell. Read-only.
         *
         * [Api set: ExcelApi 1.3]
         */
        readonly valueTypes: Excel.RangeValueType[][];
        /**
         *
         * Represents the raw values of the specified range view. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
         *
         * [Api set: ExcelApi 1.3]
         */
        values: any[][];
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.RangeViewUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: RangeView): void;
        /**
         *
         * Gets the parent range associated with the current RangeView.
         *
         * [Api set: ExcelApi 1.3]
         */
        getRange(): Excel.Range;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.RangeViewLoadOptions): Excel.RangeView;
        load(option?: string | string[]): Excel.RangeView;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.RangeView;
        toJSON(): Excel.Interfaces.RangeViewData;
    }
    /**
     *
     * Represents a collection of RangeView objects.
     *
     * [Api set: ExcelApi 1.3]
     */
    export class RangeViewCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        readonly items: Excel.RangeView[];
        /**
         *
         * Gets the number of RangeView objects in the collection.
         *
         * [Api set: ExcelApi 1.4]
         */
        getCount(): OfficeExtension.ClientResult<number>;
        /**
         *
         * Gets a RangeView Row via it's index. Zero-Indexed.
         *
         * [Api set: ExcelApi 1.3]
         *
         * @param index - Index of the visible row.
         */
        getItemAt(index: number): Excel.RangeView;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.RangeViewCollectionLoadOptions & Excel.Interfaces.CollectionLoadOptions): Excel.RangeViewCollection;
        load(option?: string | string[]): Excel.RangeViewCollection;
        load(option?: OfficeExtension.LoadOption): Excel.RangeViewCollection;
        toJSON(): Excel.Interfaces.RangeViewCollectionData;
    }
    /**
     *
     * Represents a collection of worksheet objects that are part of the workbook.
     *
     * [Api set: ExcelApi 1.4]
     */
    export class SettingCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        readonly items: Excel.Setting[];
        /**
         *
         * Sets or adds the specified setting to the workbook.
         *
         * [Api set: ExcelApi 1.4]
         *
         * @param key - The Key of the new setting.
         * @param value - The Value for the new setting.
         */
        add(key: string, value: string | number | boolean | Date | Array<any> | any): Excel.Setting;
        /**
         *
         * Gets the number of Settings in the collection.
         *
         * [Api set: ExcelApi 1.4]
         */
        getCount(): OfficeExtension.ClientResult<number>;
        /**
         *
         * Gets a Setting entry via the key.
         *
         * [Api set: ExcelApi 1.4]
         *
         * @param key - Key of the setting.
         */
        getItem(key: string): Excel.Setting;
        /**
         *
         * Gets a Setting entry via the key. If the Setting does not exist, will return a null object.
         *
         * [Api set: ExcelApi 1.4]
         *
         * @param key - The key of the setting.
         */
        getItemOrNullObject(key: string): Excel.Setting;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.SettingCollectionLoadOptions & Excel.Interfaces.CollectionLoadOptions): Excel.SettingCollection;
        load(option?: string | string[]): Excel.SettingCollection;
        load(option?: OfficeExtension.LoadOption): Excel.SettingCollection;
        /**
         *
         * Occurs when the Settings in the document are changed.
         *
         * [Api set: ExcelApi 1.4]
         */
        readonly onSettingsChanged: OfficeExtension.EventHandlers<Excel.SettingsChangedEventArgs>;
        toJSON(): Excel.Interfaces.SettingCollectionData;
    }
    /**
     *
     * Setting represents a key-value pair of a setting persisted to the document.
     *
     * [Api set: ExcelApi 1.4]
     */
    export class Setting extends OfficeExtension.ClientObject {
        private static DateJSONPrefix;
        private static DateJSONSuffix;
        private static replaceStringDateWithDate(value);
        /**
         *
         * Returns the key that represents the id of the Setting. Read-only.
         *
         * [Api set: ExcelApi 1.4]
         */
        readonly key: string;
        /**
         *
         * Represents the value stored for this setting.
         *
         * [Api set: ExcelApi 1.4]
         */
        value: any;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.SettingUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: Setting): void;
        /**
         *
         * Deletes the setting.
         *
         * [Api set: ExcelApi 1.4]
         */
        delete(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.SettingLoadOptions): Excel.Setting;
        load(option?: string | string[]): Excel.Setting;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.Setting;
        toJSON(): Excel.Interfaces.SettingData;
    }
    /**
     *
     * A collection of all the nameditem objects that are part of the workbook or worksheet, depending on how it was reached.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class NamedItemCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        readonly items: Excel.NamedItem[];
        /**
         *
         * Adds a new name to the collection of the given scope.
         *
         * [Api set: ExcelApi 1.4]
         *
         * @param name - The name of the named item.
         * @param reference - The formula or the range that the name will refer to.
         * @param comment - The comment associated with the named item
         * @returns
         */
        add(name: string, reference: Excel.Range | string, comment?: string): Excel.NamedItem;
        /**
         *
         * Adds a new name to the collection of the given scope using the user's locale for the formula.
         *
         * [Api set: ExcelApi 1.4]
         *
         * @param name - The "name" of the named item.
         * @param formula - The formula in the user's locale that the name will refer to.
         * @param comment - The comment associated with the named item
         * @returns
         */
        addFormulaLocal(name: string, formula: string, comment?: string): Excel.NamedItem;
        /**
         *
         * Gets the number of named items in the collection.
         *
         * [Api set: ExcelApi 1.4]
         */
        getCount(): OfficeExtension.ClientResult<number>;
        /**
         *
         * Gets a nameditem object using its name
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param name - nameditem name.
         */
        getItem(name: string): Excel.NamedItem;
        /**
         *
         * Gets a nameditem object using its name. If the nameditem object does not exist, will return a null object.
         *
         * [Api set: ExcelApi 1.4]
         *
         * @param name - nameditem name.
         */
        getItemOrNullObject(name: string): Excel.NamedItem;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.NamedItemCollectionLoadOptions & Excel.Interfaces.CollectionLoadOptions): Excel.NamedItemCollection;
        load(option?: string | string[]): Excel.NamedItemCollection;
        load(option?: OfficeExtension.LoadOption): Excel.NamedItemCollection;
        toJSON(): Excel.Interfaces.NamedItemCollectionData;
    }
    /**
     *
     * Represents a defined name for a range of cells or value. Names can be primitive named objects (as seen in the type below), range object, reference to a range. This object can be used to obtain range object associated with names.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class NamedItem extends OfficeExtension.ClientObject {
        /**
         *
         * Returns an object containing values and types of the named item.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly arrayValues: Excel.NamedItemArrayValues;
        /**
         *
         * Returns the worksheet on which the named item is scoped to. Throws an error if the items is scoped to the workbook instead.
         *
         * [Api set: ExcelApi 1.4]
         */
        readonly worksheet: Excel.Worksheet;
        /**
         *
         * Returns the worksheet on which the named item is scoped to. Returns a null object if the item is scoped to the workbook instead.
         *
         * [Api set: ExcelApi 1.4]
         */
        readonly worksheetOrNullObject: Excel.Worksheet;
        /**
         *
         * Represents the comment associated with this name.
         *
         * [Api set: ExcelApi 1.4]
         */
        comment: string;
        /**
         *
         * Gets or sets the formula of the named item.  Formula always starts with a '=' sign.
         *
         * [Api set: ExcelApi 1.7]
         */
        formula: any;
        /**
         *
         * The name of the object. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly name: string;
        /**
         *
         * Indicates whether the name is scoped to the workbook or to a specific worksheet. Read-only.
         *
         * [Api set: ExcelApi 1.4]
         */
        readonly scope: Excel.NamedItemScope | "Worksheet" | "Workbook";
        /**
         *
         * Indicates the type of the value returned by the name's formula. See Excel.NamedItemType for details. Read-only.
         *
         * [Api set: ExcelApi 1.1 for String,Integer,Double,Boolean,Range,Error; 1.7 for Array]
         */
        readonly type: Excel.NamedItemType | "String" | "Integer" | "Double" | "Boolean" | "Range" | "Error" | "Array";
        /**
         *
         * Represents the value computed by the name's formula. For a named range, will return the range address. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly value: any;
        /**
         *
         * Specifies whether the object is visible or not.
         *
         * [Api set: ExcelApi 1.1]
         */
        visible: boolean;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.NamedItemUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: NamedItem): void;
        /**
         *
         * Deletes the given name.
         *
         * [Api set: ExcelApi 1.4]
         */
        delete(): void;
        /**
         *
         * Returns the range object that is associated with the name. Throws an error if the named item's type is not a range.
         *
         * [Api set: ExcelApi 1.1]
         */
        getRange(): Excel.Range;
        /**
         *
         * Returns the range object that is associated with the name. Returns a null object if the named item's type is not a range.
         *
         * [Api set: ExcelApi 1.4]
         */
        getRangeOrNullObject(): Excel.Range;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.NamedItemLoadOptions): Excel.NamedItem;
        load(option?: string | string[]): Excel.NamedItem;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.NamedItem;
        toJSON(): Excel.Interfaces.NamedItemData;
    }
    /**
     *
     * Represents an object containing values and types of a named item.
     *
     * [Api set: ExcelApi 1.7]
     */
    export class NamedItemArrayValues extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the types for each item in the named item array
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly types: Excel.RangeValueType[][];
        /**
         *
         * Represents the values of each item in the named item array.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly values: any[][];
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.NamedItemArrayValuesLoadOptions): Excel.NamedItemArrayValues;
        load(option?: string | string[]): Excel.NamedItemArrayValues;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.NamedItemArrayValues;
        toJSON(): Excel.Interfaces.NamedItemArrayValuesData;
    }
    /**
     *
     * Represents an Office.js binding that is defined in the workbook.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class Binding extends OfficeExtension.ClientObject {
        /**
         *
         * Represents binding identifier. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly id: string;
        /**
         *
         * Returns the type of the binding. See Excel.BindingType for details. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly type: Excel.BindingType | "Range" | "Table" | "Text";
        /**
         *
         * Deletes the binding.
         *
         * [Api set: ExcelApi 1.3]
         */
        delete(): void;
        /**
         *
         * Returns the range represented by the binding. Will throw an error if binding is not of the correct type.
         *
         * [Api set: ExcelApi 1.1]
         */
        getRange(): Excel.Range;
        /**
         *
         * Returns the table represented by the binding. Will throw an error if binding is not of the correct type.
         *
         * [Api set: ExcelApi 1.1]
         */
        getTable(): Excel.Table;
        /**
         *
         * Returns the text represented by the binding. Will throw an error if binding is not of the correct type.
         *
         * [Api set: ExcelApi 1.1]
         */
        getText(): OfficeExtension.ClientResult<string>;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.BindingLoadOptions): Excel.Binding;
        load(option?: string | string[]): Excel.Binding;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.Binding;
        /**
         *
         * Occurs when data or formatting within the binding is changed.
         *
         * [Api set: ExcelApi 1.2]
         */
        readonly onDataChanged: OfficeExtension.EventHandlers<Excel.BindingDataChangedEventArgs>;
        /**
         *
         * Occurs when the selection is changed within the binding.
         *
         * [Api set: ExcelApi 1.2]
         */
        readonly onSelectionChanged: OfficeExtension.EventHandlers<Excel.BindingSelectionChangedEventArgs>;
        toJSON(): Excel.Interfaces.BindingData;
    }
    /**
     *
     * Represents the collection of all the binding objects that are part of the workbook.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class BindingCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        readonly items: Excel.Binding[];
        /**
         *
         * Returns the number of bindings in the collection. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly count: number;
        /**
         *
         * Add a new binding to a particular Range.
         *
         * [Api set: ExcelApi 1.3]
         *
         * @param range - Range to bind the binding to. May be an Excel Range object, or a string. If string, must contain the full address, including the sheet name
         * @param bindingType - Type of binding. See Excel.BindingType.
         * @param id - Name of binding.
         */
        add(range: Excel.Range | string, bindingType: Excel.BindingType, id: string): Excel.Binding;
        /**
         *
         * Add a new binding to a particular Range.
         *
         * [Api set: ExcelApi 1.3]
         *
         * @param range - Range to bind the binding to. May be an Excel Range object, or a string. If string, must contain the full address, including the sheet name
         * @param bindingType - Type of binding. See Excel.BindingType.
         * @param id - Name of binding.
         */
        add(range: Excel.Range | string, bindingType: "Range" | "Table" | "Text", id: string): Excel.Binding;
        /**
         *
         * Add a new binding based on a named item in the workbook.
            If the named item references to multiple areas, the "InvalidReference" error will be returned.
         *
         * [Api set: ExcelApi 1.3]
         *
         * @param name - Name from which to create binding.
         * @param bindingType - Type of binding. See Excel.BindingType.
         * @param id - Name of binding.
         */
        addFromNamedItem(name: string, bindingType: Excel.BindingType, id: string): Excel.Binding;
        /**
         *
         * Add a new binding based on a named item in the workbook.
            If the named item references to multiple areas, the "InvalidReference" error will be returned.
         *
         * [Api set: ExcelApi 1.3]
         *
         * @param name - Name from which to create binding.
         * @param bindingType - Type of binding. See Excel.BindingType.
         * @param id - Name of binding.
         */
        addFromNamedItem(name: string, bindingType: "Range" | "Table" | "Text", id: string): Excel.Binding;
        /**
         *
         * Add a new binding based on the current selection.
            If the selection has multiple areas, the "InvalidReference" error will be returned.
         *
         * [Api set: ExcelApi 1.3]
         *
         * @param bindingType - Type of binding. See Excel.BindingType.
         * @param id - Name of binding.
         */
        addFromSelection(bindingType: Excel.BindingType, id: string): Excel.Binding;
        /**
         *
         * Add a new binding based on the current selection.
            If the selection has multiple areas, the "InvalidReference" error will be returned.
         *
         * [Api set: ExcelApi 1.3]
         *
         * @param bindingType - Type of binding. See Excel.BindingType.
         * @param id - Name of binding.
         */
        addFromSelection(bindingType: "Range" | "Table" | "Text", id: string): Excel.Binding;
        /**
         *
         * Gets the number of bindings in the collection.
         *
         * [Api set: ExcelApi 1.4]
         */
        getCount(): OfficeExtension.ClientResult<number>;
        /**
         *
         * Gets a binding object by ID.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param id - Id of the binding object to be retrieved.
         */
        getItem(id: string): Excel.Binding;
        /**
         *
         * Gets a binding object based on its position in the items array.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param index - Index value of the object to be retrieved. Zero-indexed.
         */
        getItemAt(index: number): Excel.Binding;
        /**
         *
         * Gets a binding object by ID. If the binding object does not exist, will return a null object.
         *
         * [Api set: ExcelApi 1.4]
         *
         * @param id - Id of the binding object to be retrieved.
         */
        getItemOrNullObject(id: string): Excel.Binding;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.BindingCollectionLoadOptions & Excel.Interfaces.CollectionLoadOptions): Excel.BindingCollection;
        load(option?: string | string[]): Excel.BindingCollection;
        load(option?: OfficeExtension.LoadOption): Excel.BindingCollection;
        toJSON(): Excel.Interfaces.BindingCollectionData;
    }
    /**
     *
     * Represents a collection of all the tables that are part of the workbook or worksheet, depending on how it was reached.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class TableCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        readonly items: Excel.Table[];
        /**
         *
         * Returns the number of tables in the workbook. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly count: number;
        /**
         *
         * Create a new table. The range object or source address determines the worksheet under which the table will be added. If the table cannot be added (e.g., because the address is invalid, or the table would overlap with another table), an error will be thrown.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param address - A Range object, or a string address or name of the range representing the data source. If the address does not contain a sheet name, the currently-active sheet is used. [Api set: ExcelApi 1.1 for string parameter; 1.3 for accepting a Range object as well]
         * @param hasHeaders - Boolean value that indicates whether the data being imported has column labels. If the source does not contain headers (i.e,. when this property set to false), Excel will automatically generate header shifting the data down by one row.
         */
        add(address: Excel.Range | string, hasHeaders: boolean): Excel.Table;
        /**
         *
         * Gets the number of tables in the collection.
         *
         * [Api set: ExcelApi 1.4]
         */
        getCount(): OfficeExtension.ClientResult<number>;
        /**
         *
         * Gets a table by Name or ID.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param key - Name or ID of the table to be retrieved.
         */
        getItem(key: string): Excel.Table;
        /**
         *
         * Gets a table based on its position in the collection.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param index - Index value of the object to be retrieved. Zero-indexed.
         */
        getItemAt(index: number): Excel.Table;
        /**
         *
         * Gets a table by Name or ID. If the table does not exist, will return a null object.
         *
         * [Api set: ExcelApi 1.4]
         *
         * @param key - Name or ID of the table to be retrieved.
         */
        getItemOrNullObject(key: string): Excel.Table;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.TableCollectionLoadOptions & Excel.Interfaces.CollectionLoadOptions): Excel.TableCollection;
        load(option?: string | string[]): Excel.TableCollection;
        load(option?: OfficeExtension.LoadOption): Excel.TableCollection;
        /**
         *
         * Occurs when data changed on any table in a workbook, or a worksheet.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly onChanged: OfficeExtension.EventHandlers<Excel.TableChangedEventArgs>;
        toJSON(): Excel.Interfaces.TableCollectionData;
    }
    /**
     *
     * Represents an Excel table.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class Table extends OfficeExtension.ClientObject {
        /**
         *
         * Represents a collection of all the columns in the table.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly columns: Excel.TableColumnCollection;
        /**
         *
         * Represents a collection of all the rows in the table.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly rows: Excel.TableRowCollection;
        /**
         *
         * Represents the sorting for the table.
         *
         * [Api set: ExcelApi 1.2]
         */
        readonly sort: Excel.TableSort;
        /**
         *
         * The worksheet containing the current table.
         *
         * [Api set: ExcelApi 1.2]
         */
        readonly worksheet: Excel.Worksheet;
        /**
         *
         * Indicates whether the first column contains special formatting.
         *
         * [Api set: ExcelApi 1.3]
         */
        highlightFirstColumn: boolean;
        /**
         *
         * Indicates whether the last column contains special formatting.
         *
         * [Api set: ExcelApi 1.3]
         */
        highlightLastColumn: boolean;
        /**
         *
         * Returns a value that uniquely identifies the table in a given workbook. The value of the identifier remains the same even when the table is renamed. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly id: string;
        /**
         *
         * Name of the table.
         *
         * [Api set: ExcelApi 1.1]
         */
        name: string;
        /**
         *
         * Indicates whether the columns show banded formatting in which odd columns are highlighted differently from even ones to make reading the table easier.
         *
         * [Api set: ExcelApi 1.3]
         */
        showBandedColumns: boolean;
        /**
         *
         * Indicates whether the rows show banded formatting in which odd rows are highlighted differently from even ones to make reading the table easier.
         *
         * [Api set: ExcelApi 1.3]
         */
        showBandedRows: boolean;
        /**
         *
         * Indicates whether the filter buttons are visible at the top of each column header. Setting this is only allowed if the table contains a header row.
         *
         * [Api set: ExcelApi 1.3]
         */
        showFilterButton: boolean;
        /**
         *
         * Indicates whether the header row is visible or not. This value can be set to show or remove the header row.
         *
         * [Api set: ExcelApi 1.1]
         */
        showHeaders: boolean;
        /**
         *
         * Indicates whether the total row is visible or not. This value can be set to show or remove the total row.
         *
         * [Api set: ExcelApi 1.1]
         */
        showTotals: boolean;
        /**
         *
         * Constant value that represents the Table style. Possible values are: TableStyleLight1 thru TableStyleLight21, TableStyleMedium1 thru TableStyleMedium28, TableStyleStyleDark1 thru TableStyleStyleDark11. A custom user-defined style present in the workbook can also be specified.
         *
         * [Api set: ExcelApi 1.1]
         */
        style: string;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.TableUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: Table): void;
        /**
         *
         * Clears all the filters currently applied on the table.
         *
         * [Api set: ExcelApi 1.2]
         */
        clearFilters(): void;
        /**
         *
         * Converts the table into a normal range of cells. All data is preserved.
         *
         * [Api set: ExcelApi 1.2]
         */
        convertToRange(): Excel.Range;
        /**
         *
         * Deletes the table.
         *
         * [Api set: ExcelApi 1.1]
         */
        delete(): void;
        /**
         *
         * Gets the range object associated with the data body of the table.
         *
         * [Api set: ExcelApi 1.1]
         */
        getDataBodyRange(): Excel.Range;
        /**
         *
         * Gets the range object associated with header row of the table.
         *
         * [Api set: ExcelApi 1.1]
         */
        getHeaderRowRange(): Excel.Range;
        /**
         *
         * Gets the range object associated with the entire table.
         *
         * [Api set: ExcelApi 1.1]
         */
        getRange(): Excel.Range;
        /**
         *
         * Gets the range object associated with totals row of the table.
         *
         * [Api set: ExcelApi 1.1]
         */
        getTotalRowRange(): Excel.Range;
        /**
         *
         * Reapplies all the filters currently on the table.
         *
         * [Api set: ExcelApi 1.2]
         */
        reapplyFilters(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.TableLoadOptions): Excel.Table;
        load(option?: string | string[]): Excel.Table;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.Table;
        /**
         *
         * Occurs when data changed on a specific table.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly onChanged: OfficeExtension.EventHandlers<Excel.TableChangedEventArgs>;
        /**
         *
         * Occurs when the selection changed on a specific table.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly onSelectionChanged: OfficeExtension.EventHandlers<Excel.TableSelectionChangedEventArgs>;
        toJSON(): Excel.Interfaces.TableData;
    }
    /**
     *
     * Represents a collection of all the columns that are part of the table.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class TableColumnCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        readonly items: Excel.TableColumn[];
        /**
         *
         * Returns the number of columns in the table. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly count: number;
        /**
         *
         * Adds a new column to the table.
         *
         * [Api set: ExcelApi 1.1 requires an index smaller than the total column count; 1.4 allows index to be optional (null or -1) and will append a column at the end; 1.4 allows name parameter at creation time.]
         *
         * @param index - Specifies the relative position of the new column. If null or -1, the addition happens at the end. Columns with a higher index will be shifted to the side. Zero-indexed.
         * @param values - A 2-dimensional array of unformatted values of the table column.
         * @param name - Specifies the name of the new column. If null, the default name will be used.
         */
        add(index?: number, values?: Array<Array<boolean | string | number>> | boolean | string | number, name?: string): Excel.TableColumn;
        /**
         *
         * Gets the number of columns in the table.
         *
         * [Api set: ExcelApi 1.4]
         */
        getCount(): OfficeExtension.ClientResult<number>;
        /**
         *
         * Gets a column object by Name or ID.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param key - Column Name or ID.
         */
        getItem(key: number | string): Excel.TableColumn;
        /**
         *
         * Gets a column based on its position in the collection.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param index - Index value of the object to be retrieved. Zero-indexed.
         */
        getItemAt(index: number): Excel.TableColumn;
        /**
         *
         * Gets a column object by Name or ID. If the column does not exist, will return a null object.
         *
         * [Api set: ExcelApi 1.4]
         *
         * @param key - Column Name or ID.
         */
        getItemOrNullObject(key: number | string): Excel.TableColumn;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.TableColumnCollectionLoadOptions & Excel.Interfaces.CollectionLoadOptions): Excel.TableColumnCollection;
        load(option?: string | string[]): Excel.TableColumnCollection;
        load(option?: OfficeExtension.LoadOption): Excel.TableColumnCollection;
        toJSON(): Excel.Interfaces.TableColumnCollectionData;
    }
    /**
     *
     * Represents a column in a table.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class TableColumn extends OfficeExtension.ClientObject {
        /**
         *
         * Retrieve the filter applied to the column.
         *
         * [Api set: ExcelApi 1.2]
         */
        readonly filter: Excel.Filter;
        /**
         *
         * Returns a unique key that identifies the column within the table. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly id: number;
        /**
         *
         * Returns the index number of the column within the columns collection of the table. Zero-indexed. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly index: number;
        /**
         *
         * Represents the name of the table column.
         *
         * [Api set: ExcelApi 1.1 for getting the name; 1.4 for setting it.]
         */
        name: string;
        /**
         *
         * Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
         *
         * [Api set: ExcelApi 1.1]
         */
        values: any[][];
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.TableColumnUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: TableColumn): void;
        /**
         *
         * Deletes the column from the table.
         *
         * [Api set: ExcelApi 1.1]
         */
        delete(): void;
        /**
         *
         * Gets the range object associated with the data body of the column.
         *
         * [Api set: ExcelApi 1.1]
         */
        getDataBodyRange(): Excel.Range;
        /**
         *
         * Gets the range object associated with the header row of the column.
         *
         * [Api set: ExcelApi 1.1]
         */
        getHeaderRowRange(): Excel.Range;
        /**
         *
         * Gets the range object associated with the entire column.
         *
         * [Api set: ExcelApi 1.1]
         */
        getRange(): Excel.Range;
        /**
         *
         * Gets the range object associated with the totals row of the column.
         *
         * [Api set: ExcelApi 1.1]
         */
        getTotalRowRange(): Excel.Range;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.TableColumnLoadOptions): Excel.TableColumn;
        load(option?: string | string[]): Excel.TableColumn;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.TableColumn;
        toJSON(): Excel.Interfaces.TableColumnData;
    }
    /**
     *
     * Represents a collection of all the rows that are part of the table.

            Note that unlike Ranges or Columns, which will adjust if new rows/columns are added before them,
            a TableRow object represent the physical location of the table row, but not the data.
            That is, if the data is sorted or if new rows are added, a table row will continue
            to point at the index for which it was created.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class TableRowCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        readonly items: Excel.TableRow[];
        /**
         *
         * Returns the number of rows in the table. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly count: number;
        /**
         *
         * Adds one or more rows to the table. The return object will be the top of the newly added row(s).

            Note that unlike Ranges or Columns, which will adjust if new rows/columns are added before them,
            a TableRow object represent the physical location of the table row, but not the data.
            That is, if the data is sorted or if new rows are added, a table row will continue
            to point at the index for which it was created.
         *
         * [Api set: ExcelApi 1.1 for adding a single row; 1.4 allows adding of multiple rows.]
         *
         * @param index - Specifies the relative position of the new row. If null or -1, the addition happens at the end. Any rows below the inserted row are shifted downwards. Zero-indexed.
         * @param values - A 2-dimensional array of unformatted values of the table row.
         */
        add(index?: number, values?: Array<Array<boolean | string | number>> | boolean | string | number): Excel.TableRow;
        /**
         *
         * Gets the number of rows in the table.
         *
         * [Api set: ExcelApi 1.4]
         */
        getCount(): OfficeExtension.ClientResult<number>;
        /**
         *
         * Gets a row based on its position in the collection.

            Note that unlike Ranges or Columns, which will adjust if new rows/columns are added before them,
            a TableRow object represent the physical location of the table row, but not the data.
            That is, if the data is sorted or if new rows are added, a table row will continue
            to point at the index for which it was created.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param index - Index value of the object to be retrieved. Zero-indexed.
         */
        getItemAt(index: number): Excel.TableRow;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.TableRowCollectionLoadOptions & Excel.Interfaces.CollectionLoadOptions): Excel.TableRowCollection;
        load(option?: string | string[]): Excel.TableRowCollection;
        load(option?: OfficeExtension.LoadOption): Excel.TableRowCollection;
        toJSON(): Excel.Interfaces.TableRowCollectionData;
    }
    /**
     *
     * Represents a row in a table.

            Note that unlike Ranges or Columns, which will adjust if new rows/columns are added before them,
            a TableRow object represent the physical location of the table row, but not the data.
            That is, if the data is sorted or if new rows are added, a table row will continue
            to point at the index for which it was created.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class TableRow extends OfficeExtension.ClientObject {
        /**
         *
         * Returns the index number of the row within the rows collection of the table. Zero-indexed. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly index: number;
        /**
         *
         * Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
         *
         * [Api set: ExcelApi 1.1]
         */
        values: any[][];
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.TableRowUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: TableRow): void;
        /**
         *
         * Deletes the row from the table.
         *
         * [Api set: ExcelApi 1.1]
         */
        delete(): void;
        /**
         *
         * Returns the range object associated with the entire row.
         *
         * [Api set: ExcelApi 1.1]
         */
        getRange(): Excel.Range;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.TableRowLoadOptions): Excel.TableRow;
        load(option?: string | string[]): Excel.TableRow;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.TableRow;
        toJSON(): Excel.Interfaces.TableRowData;
    }
    /**
     *
     * A format object encapsulating the range's font, fill, borders, alignment, and other properties.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class RangeFormat extends OfficeExtension.ClientObject {
        /**
         *
         * Collection of border objects that apply to the overall range.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly borders: Excel.RangeBorderCollection;
        /**
         *
         * Returns the fill object defined on the overall range.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly fill: Excel.RangeFill;
        /**
         *
         * Returns the font object defined on the overall range.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly font: Excel.RangeFont;
        /**
         *
         * Returns the format protection object for a range.
         *
         * [Api set: ExcelApi 1.2]
         */
        readonly protection: Excel.FormatProtection;
        /**
         *
         * Gets or sets the width of all colums within the range. If the column widths are not uniform, null will be returned.
         *
         * [Api set: ExcelApi 1.2]
         */
        columnWidth: number;
        /**
         *
         * Represents the horizontal alignment for the specified object. See Excel.HorizontalAlignment for details.
         *
         * [Api set: ExcelApi 1.1]
         */
        horizontalAlignment: Excel.HorizontalAlignment | "General" | "Left" | "Center" | "Right" | "Fill" | "Justify" | "CenterAcrossSelection" | "Distributed";
        /**
         *
         * Gets or sets the height of all rows in the range. If the row heights are not uniform, null will be returned.
         *
         * [Api set: ExcelApi 1.2]
         */
        rowHeight: number;
        /**
         *
         * Gets or sets the text orientation of all the cells within the range.
            The text orientation should be an integer either from -90 to 90, or 180 for vertically-oriented text.
            If the orientation within a range are not uniform, then null will be returned.
         *
         * [Api set: ExcelApi 1.7]
         */
        textOrientation: number;
        /**
         *
         * Determines if the row height of the Range object equals the standard height of the sheet.
            Returns True if the row height of the Range object equals the standard height of the sheet.
            Returns Null if the range contains more than one row and the rows aren't all the same height.
            Returns False otherwise.
         *
         * [Api set: ExcelApi 1.7]
         */
        useStandardHeight: boolean;
        /**
         *
         * Indicates whether the columnwidth of the Range object equals the standard width of the sheet.
            Returns True if the column width of the Range object equals the standard width of the sheet.
            Returns Null if the range contains more than one column and the columns aren't all the same height.
            Returns False otherwise.
         *
         * [Api set: ExcelApi 1.7]
         */
        useStandardWidth: boolean;
        /**
         *
         * Represents the vertical alignment for the specified object. See Excel.VerticalAlignment for details.
         *
         * [Api set: ExcelApi 1.1]
         */
        verticalAlignment: Excel.VerticalAlignment | "Top" | "Center" | "Bottom" | "Justify" | "Distributed";
        /**
         *
         * Indicates if Excel wraps the text in the object. A null value indicates that the entire range doesn't have uniform wrap setting
         *
         * [Api set: ExcelApi 1.1]
         */
        wrapText: boolean;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.RangeFormatUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: RangeFormat): void;
        /**
         *
         * Changes the width of the columns of the current range to achieve the best fit, based on the current data in the columns.
         *
         * [Api set: ExcelApi 1.2]
         */
        autofitColumns(): void;
        /**
         *
         * Changes the height of the rows of the current range to achieve the best fit, based on the current data in the columns.
         *
         * [Api set: ExcelApi 1.2]
         */
        autofitRows(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.RangeFormatLoadOptions): Excel.RangeFormat;
        load(option?: string | string[]): Excel.RangeFormat;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.RangeFormat;
        toJSON(): Excel.Interfaces.RangeFormatData;
    }
    /**
     *
     * Represents the format protection of a range object.
     *
     * [Api set: ExcelApi 1.2]
     */
    export class FormatProtection extends OfficeExtension.ClientObject {
        /**
         *
         * Indicates if Excel hides the formula for the cells in the range. A null value indicates that the entire range doesn't have uniform formula hidden setting.
         *
         * [Api set: ExcelApi 1.2]
         */
        formulaHidden: boolean;
        /**
         *
         * Indicates if Excel locks the cells in the object. A null value indicates that the entire range doesn't have uniform lock setting.
         *
         * [Api set: ExcelApi 1.2]
         */
        locked: boolean;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.FormatProtectionUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: FormatProtection): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.FormatProtectionLoadOptions): Excel.FormatProtection;
        load(option?: string | string[]): Excel.FormatProtection;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.FormatProtection;
        toJSON(): Excel.Interfaces.FormatProtectionData;
    }
    /**
     *
     * Represents the background of a range object.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class RangeFill extends OfficeExtension.ClientObject {
        /**
         *
         * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange")
         *
         * [Api set: ExcelApi 1.1]
         */
        color: string;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.RangeFillUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: RangeFill): void;
        /**
         *
         * Resets the range background.
         *
         * [Api set: ExcelApi 1.1]
         */
        clear(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.RangeFillLoadOptions): Excel.RangeFill;
        load(option?: string | string[]): Excel.RangeFill;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.RangeFill;
        toJSON(): Excel.Interfaces.RangeFillData;
    }
    /**
     *
     * Represents the border of an object.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class RangeBorder extends OfficeExtension.ClientObject {
        /**
         *
         * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
         *
         * [Api set: ExcelApi 1.1]
         */
        color: string;
        /**
         *
         * Constant value that indicates the specific side of the border. See Excel.BorderIndex for details. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly sideIndex: Excel.BorderIndex | "EdgeTop" | "EdgeBottom" | "EdgeLeft" | "EdgeRight" | "InsideVertical" | "InsideHorizontal" | "DiagonalDown" | "DiagonalUp";
        /**
         *
         * One of the constants of line style specifying the line style for the border. See Excel.BorderLineStyle for details.
         *
         * [Api set: ExcelApi 1.1]
         */
        style: Excel.BorderLineStyle | "None" | "Continuous" | "Dash" | "DashDot" | "DashDotDot" | "Dot" | "Double" | "SlantDashDot";
        /**
         *
         * Specifies the weight of the border around a range. See Excel.BorderWeight for details.
         *
         * [Api set: ExcelApi 1.1]
         */
        weight: Excel.BorderWeight | "Hairline" | "Thin" | "Medium" | "Thick";
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.RangeBorderUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: RangeBorder): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.RangeBorderLoadOptions): Excel.RangeBorder;
        load(option?: string | string[]): Excel.RangeBorder;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.RangeBorder;
        toJSON(): Excel.Interfaces.RangeBorderData;
    }
    /**
     *
     * Represents the border objects that make up the range border.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class RangeBorderCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        readonly items: Excel.RangeBorder[];
        /**
         *
         * Number of border objects in the collection. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly count: number;
        /**
         *
         * Gets a border object using its name
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param index - Index value of the border object to be retrieved. See Excel.BorderIndex for details.
         */
        getItem(index: Excel.BorderIndex): Excel.RangeBorder;
        /**
         *
         * Gets a border object using its name
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param index - Index value of the border object to be retrieved. See Excel.BorderIndex for details.
         */
        getItem(index: "EdgeTop" | "EdgeBottom" | "EdgeLeft" | "EdgeRight" | "InsideVertical" | "InsideHorizontal" | "DiagonalDown" | "DiagonalUp"): Excel.RangeBorder;
        /**
         *
         * Gets a border object using its index
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param index - Index value of the object to be retrieved. Zero-indexed.
         */
        getItemAt(index: number): Excel.RangeBorder;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.RangeBorderCollectionLoadOptions & Excel.Interfaces.CollectionLoadOptions): Excel.RangeBorderCollection;
        load(option?: string | string[]): Excel.RangeBorderCollection;
        load(option?: OfficeExtension.LoadOption): Excel.RangeBorderCollection;
        toJSON(): Excel.Interfaces.RangeBorderCollectionData;
    }
    /**
     *
     * This object represents the font attributes (font name, font size, color, etc.) for an object.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class RangeFont extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the bold status of font.
         *
         * [Api set: ExcelApi 1.1]
         */
        bold: boolean;
        /**
         *
         * HTML color code representation of the text color. E.g. #FF0000 represents Red.
         *
         * [Api set: ExcelApi 1.1]
         */
        color: string;
        /**
         *
         * Represents the italic status of the font.
         *
         * [Api set: ExcelApi 1.1]
         */
        italic: boolean;
        /**
         *
         * Font name (e.g. "Calibri")
         *
         * [Api set: ExcelApi 1.1]
         */
        name: string;
        /**
         *
         * Font size.
         *
         * [Api set: ExcelApi 1.1]
         */
        size: number;
        /**
         *
         * Type of underline applied to the font. See Excel.RangeUnderlineStyle for details.
         *
         * [Api set: ExcelApi 1.1]
         */
        underline: Excel.RangeUnderlineStyle | "None" | "Single" | "Double" | "SingleAccountant" | "DoubleAccountant";
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.RangeFontUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: RangeFont): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.RangeFontLoadOptions): Excel.RangeFont;
        load(option?: string | string[]): Excel.RangeFont;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.RangeFont;
        toJSON(): Excel.Interfaces.RangeFontData;
    }
    /**
     *
     * A collection of all the chart objects on a worksheet.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class ChartCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        readonly items: Excel.Chart[];
        /**
         *
         * Returns the number of charts in the worksheet. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly count: number;
        /**
         *
         * Creates a new chart.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param type - Represents the type of a chart. See Excel.ChartType for details.
         * @param sourceData - The range corresponding to the source data.
         * @param seriesBy - Specifies the way columns or rows are used as data series on the chart. See Excel.ChartSeriesBy for details.
         */
        add(type: Excel.ChartType, sourceData: Excel.Range | string, seriesBy?: Excel.ChartSeriesBy): Excel.Chart;
        /**
         *
         * Creates a new chart.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param type - Represents the type of a chart. See Excel.ChartType for details.
         * @param sourceData - The range corresponding to the source data.
         * @param seriesBy - Specifies the way columns or rows are used as data series on the chart. See Excel.ChartSeriesBy for details.
         */
        add(type: "Invalid" | "ColumnClustered" | "ColumnStacked" | "ColumnStacked100" | "3DColumnClustered" | "3DColumnStacked" | "3DColumnStacked100" | "BarClustered" | "BarStacked" | "BarStacked100" | "3DBarClustered" | "3DBarStacked" | "3DBarStacked100" | "LineStacked" | "LineStacked100" | "LineMarkers" | "LineMarkersStacked" | "LineMarkersStacked100" | "PieOfPie" | "PieExploded" | "3DPieExploded" | "BarOfPie" | "XYScatterSmooth" | "XYScatterSmoothNoMarkers" | "XYScatterLines" | "XYScatterLinesNoMarkers" | "AreaStacked" | "AreaStacked100" | "3DAreaStacked" | "3DAreaStacked100" | "DoughnutExploded" | "RadarMarkers" | "RadarFilled" | "Surface" | "SurfaceWireframe" | "SurfaceTopView" | "SurfaceTopViewWireframe" | "Bubble" | "Bubble3DEffect" | "StockHLC" | "StockOHLC" | "StockVHLC" | "StockVOHLC" | "CylinderColClustered" | "CylinderColStacked" | "CylinderColStacked100" | "CylinderBarClustered" | "CylinderBarStacked" | "CylinderBarStacked100" | "CylinderCol" | "ConeColClustered" | "ConeColStacked" | "ConeColStacked100" | "ConeBarClustered" | "ConeBarStacked" | "ConeBarStacked100" | "ConeCol" | "PyramidColClustered" | "PyramidColStacked" | "PyramidColStacked100" | "PyramidBarClustered" | "PyramidBarStacked" | "PyramidBarStacked100" | "PyramidCol" | "3DColumn" | "Line" | "3DLine" | "3DPie" | "Pie" | "XYScatter" | "3DArea" | "Area" | "Doughnut" | "Radar", sourceData: Excel.Range | string, seriesBy?: "Auto" | "Columns" | "Rows"): Excel.Chart;
        /**
         *
         * Returns the number of charts in the worksheet.
         *
         * [Api set: ExcelApi 1.4]
         */
        getCount(): OfficeExtension.ClientResult<number>;
        /**
         *
         * Gets a chart using its name. If there are multiple charts with the same name, the first one will be returned.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param name - Name of the chart to be retrieved.
         */
        getItem(name: string): Excel.Chart;
        /**
         *
         * Gets a chart based on its position in the collection.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param index - Index value of the object to be retrieved. Zero-indexed.
         */
        getItemAt(index: number): Excel.Chart;
        /**
         *
         * Gets a chart using its name. If there are multiple charts with the same name, the first one will be returned.
            If the chart does not exist, will return a null object.
         *
         * [Api set: ExcelApi 1.4]
         *
         * @param name - Name of the chart to be retrieved.
         */
        getItemOrNullObject(name: string): Excel.Chart;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartCollectionLoadOptions & Excel.Interfaces.CollectionLoadOptions): Excel.ChartCollection;
        load(option?: string | string[]): Excel.ChartCollection;
        load(option?: OfficeExtension.LoadOption): Excel.ChartCollection;
        toJSON(): Excel.Interfaces.ChartCollectionData;
    }
    /**
     *
     * Represents a chart object in a workbook.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class Chart extends OfficeExtension.ClientObject {
        /**
         *
         * Represents chart axes.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly axes: Excel.ChartAxes;
        /**
         *
         * Represents the datalabels on the chart.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly dataLabels: Excel.ChartDataLabels;
        /**
         *
         * Encapsulates the format properties for the chart area. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly format: Excel.ChartAreaFormat;
        /**
         *
         * Represents the legend for the chart.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly legend: Excel.ChartLegend;
        /**
         *
         * Represents either a single series or collection of series in the chart.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly series: Excel.ChartSeriesCollection;
        /**
         *
         * Represents the title of the specified chart, including the text, visibility, position and formating of the title.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly title: Excel.ChartTitle;
        /**
         *
         * The worksheet containing the current chart.
         *
         * [Api set: ExcelApi 1.2]
         */
        readonly worksheet: Excel.Worksheet;
        /**
         *
         * Represents the type of the chart. See Excel.ChartType for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        chartType: Excel.ChartType | "Invalid" | "ColumnClustered" | "ColumnStacked" | "ColumnStacked100" | "3DColumnClustered" | "3DColumnStacked" | "3DColumnStacked100" | "BarClustered" | "BarStacked" | "BarStacked100" | "3DBarClustered" | "3DBarStacked" | "3DBarStacked100" | "LineStacked" | "LineStacked100" | "LineMarkers" | "LineMarkersStacked" | "LineMarkersStacked100" | "PieOfPie" | "PieExploded" | "3DPieExploded" | "BarOfPie" | "XYScatterSmooth" | "XYScatterSmoothNoMarkers" | "XYScatterLines" | "XYScatterLinesNoMarkers" | "AreaStacked" | "AreaStacked100" | "3DAreaStacked" | "3DAreaStacked100" | "DoughnutExploded" | "RadarMarkers" | "RadarFilled" | "Surface" | "SurfaceWireframe" | "SurfaceTopView" | "SurfaceTopViewWireframe" | "Bubble" | "Bubble3DEffect" | "StockHLC" | "StockOHLC" | "StockVHLC" | "StockVOHLC" | "CylinderColClustered" | "CylinderColStacked" | "CylinderColStacked100" | "CylinderBarClustered" | "CylinderBarStacked" | "CylinderBarStacked100" | "CylinderCol" | "ConeColClustered" | "ConeColStacked" | "ConeColStacked100" | "ConeBarClustered" | "ConeBarStacked" | "ConeBarStacked100" | "ConeCol" | "PyramidColClustered" | "PyramidColStacked" | "PyramidColStacked100" | "PyramidBarClustered" | "PyramidBarStacked" | "PyramidBarStacked100" | "PyramidCol" | "3DColumn" | "Line" | "3DLine" | "3DPie" | "Pie" | "XYScatter" | "3DArea" | "Area" | "Doughnut" | "Radar";
        /**
         *
         * Represents the height, in points, of the chart object.
         *
         * [Api set: ExcelApi 1.1]
         */
        height: number;
        /**
         *
         * The unique id of chart. Read-only.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly id: string;
        /**
         *
         * The distance, in points, from the left side of the chart to the worksheet origin.
         *
         * [Api set: ExcelApi 1.1]
         */
        left: number;
        /**
         *
         * Represents the name of a chart object.
         *
         * [Api set: ExcelApi 1.1]
         */
        name: string;
        /**
         *
         * Represents whether to display all field buttons on a PivotChart.
         *
         * [Api set: ExcelApi 1.7]
         */
        showAllFieldButtons: boolean;
        /**
         *
         * Represents the distance, in points, from the top edge of the object to the top of row 1 (on a worksheet) or the top of the chart area (on a chart).
         *
         * [Api set: ExcelApi 1.1]
         */
        top: number;
        /**
         *
         * Represents the width, in points, of the chart object.
         *
         * [Api set: ExcelApi 1.1]
         */
        width: number;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ChartUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: Chart): void;
        /**
         *
         * Deletes the chart object.
         *
         * [Api set: ExcelApi 1.1]
         */
        delete(): void;
        /**
         *
         * Renders the chart as a base64-encoded image by scaling the chart to fit the specified dimensions.
            The aspect ratio is preserved as part of the resizing.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param height - (Optional) The desired height of the resulting image.
         * @param width - (Optional) The desired width of the resulting image.
         * @param fittingMode - (Optional) The method used to scale the chart to the specified to the specified dimensions (if both height and width are set)."
         */
        getImage(width?: number, height?: number, fittingMode?: Excel.ImageFittingMode): OfficeExtension.ClientResult<string>;
        /**
         *
         * Renders the chart as a base64-encoded image by scaling the chart to fit the specified dimensions.
            The aspect ratio is preserved as part of the resizing.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param height - (Optional) The desired height of the resulting image.
         * @param width - (Optional) The desired width of the resulting image.
         * @param fittingMode - (Optional) The method used to scale the chart to the specified to the specified dimensions (if both height and width are set)."
         */
        getImage(width?: number, height?: number, fittingMode?: "Fit" | "FitAndCenter" | "Fill"): OfficeExtension.ClientResult<string>;
        /**
         *
         * Resets the source data for the chart.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param sourceData - The range corresponding to the source data.
         * @param seriesBy - Specifies the way columns or rows are used as data series on the chart. Can be one of the following: Auto (default), Rows, Columns. See Excel.ChartSeriesBy for details.
         */
        setData(sourceData: Excel.Range | string, seriesBy?: Excel.ChartSeriesBy): void;
        /**
         *
         * Resets the source data for the chart.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param sourceData - The range corresponding to the source data.
         * @param seriesBy - Specifies the way columns or rows are used as data series on the chart. Can be one of the following: Auto (default), Rows, Columns. See Excel.ChartSeriesBy for details.
         */
        setData(sourceData: Excel.Range | string, seriesBy?: "Auto" | "Columns" | "Rows"): void;
        /**
         *
         * Positions the chart relative to cells on the worksheet.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param startCell - The start cell. This is where the chart will be moved to. The start cell is the top-left or top-right cell, depending on the user's right-to-left display settings.
         * @param endCell - (Optional) The end cell. If specified, the chart's width and height will be set to fully cover up this cell/range.
         */
        setPosition(startCell: Excel.Range | string, endCell?: Excel.Range | string): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartLoadOptions): Excel.Chart;
        load(option?: string | string[]): Excel.Chart;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.Chart;
        toJSON(): Excel.Interfaces.ChartData;
    }
    /**
     *
     * Encapsulates the format properties for the overall chart area.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class ChartAreaFormat extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the border format of chart area, which includes color, linestyle and weight.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly border: Excel.ChartBorder;
        /**
         *
         * Represents the fill format of an object, which includes background formatting information.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly fill: Excel.ChartFill;
        /**
         *
         * Represents the font attributes (font name, font size, color, etc.) for the current object.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly font: Excel.ChartFont;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ChartAreaFormatUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ChartAreaFormat): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartAreaFormatLoadOptions): Excel.ChartAreaFormat;
        load(option?: string | string[]): Excel.ChartAreaFormat;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ChartAreaFormat;
        toJSON(): Excel.Interfaces.ChartAreaFormatData;
    }
    /**
     *
     * Represents a collection of chart series.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class ChartSeriesCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        readonly items: Excel.ChartSeries[];
        /**
         *
         * Returns the number of series in the collection. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly count: number;
        /**
         *
         * Add a new series to the collection. The new added series is not visible until set values/x axis values/bubble sizes for it (depending on chart type).
         *
         * [Api set: ExcelApi 1.7]
         *
         * @param name - Name of the series.
         * @param index - Index value of the series to be added. Zero-indexed.
         */
        add(name?: string, index?: number): Excel.ChartSeries;
        /**
         *
         * Returns the number of series in the collection.
         *
         * [Api set: ExcelApi 1.4]
         */
        getCount(): OfficeExtension.ClientResult<number>;
        /**
         *
         * Retrieves a series based on its position in the collection.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param index - Index value of the object to be retrieved. Zero-indexed.
         */
        getItemAt(index: number): Excel.ChartSeries;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartSeriesCollectionLoadOptions & Excel.Interfaces.CollectionLoadOptions): Excel.ChartSeriesCollection;
        load(option?: string | string[]): Excel.ChartSeriesCollection;
        load(option?: OfficeExtension.LoadOption): Excel.ChartSeriesCollection;
        toJSON(): Excel.Interfaces.ChartSeriesCollectionData;
    }
    /**
     *
     * Represents a series in a chart.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class ChartSeries extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the formatting of a chart series, which includes fill and line formatting.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly format: Excel.ChartSeriesFormat;
        /**
         *
         * Represents a collection of all points in the series.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly points: Excel.ChartPointsCollection;
        /**
         *
         * Represents a collection of trendlines in the series.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly trendlines: Excel.ChartTrendlineCollection;
        /**
         *
         * Represents the chart type of a series. See Excel.ChartType for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        chartType: Excel.ChartType | "Invalid" | "ColumnClustered" | "ColumnStacked" | "ColumnStacked100" | "3DColumnClustered" | "3DColumnStacked" | "3DColumnStacked100" | "BarClustered" | "BarStacked" | "BarStacked100" | "3DBarClustered" | "3DBarStacked" | "3DBarStacked100" | "LineStacked" | "LineStacked100" | "LineMarkers" | "LineMarkersStacked" | "LineMarkersStacked100" | "PieOfPie" | "PieExploded" | "3DPieExploded" | "BarOfPie" | "XYScatterSmooth" | "XYScatterSmoothNoMarkers" | "XYScatterLines" | "XYScatterLinesNoMarkers" | "AreaStacked" | "AreaStacked100" | "3DAreaStacked" | "3DAreaStacked100" | "DoughnutExploded" | "RadarMarkers" | "RadarFilled" | "Surface" | "SurfaceWireframe" | "SurfaceTopView" | "SurfaceTopViewWireframe" | "Bubble" | "Bubble3DEffect" | "StockHLC" | "StockOHLC" | "StockVHLC" | "StockVOHLC" | "CylinderColClustered" | "CylinderColStacked" | "CylinderColStacked100" | "CylinderBarClustered" | "CylinderBarStacked" | "CylinderBarStacked100" | "CylinderCol" | "ConeColClustered" | "ConeColStacked" | "ConeColStacked100" | "ConeBarClustered" | "ConeBarStacked" | "ConeBarStacked100" | "ConeCol" | "PyramidColClustered" | "PyramidColStacked" | "PyramidColStacked100" | "PyramidBarClustered" | "PyramidBarStacked" | "PyramidBarStacked100" | "PyramidCol" | "3DColumn" | "Line" | "3DLine" | "3DPie" | "Pie" | "XYScatter" | "3DArea" | "Area" | "Doughnut" | "Radar";
        /**
         *
         * Represents the doughnut hole size of a chart series.  Only valid on doughnut and doughnutExploded charts.
            Throws an invalid argument exception on invalid charts.
         *
         * [Api set: ExcelApi 1.7]
         */
        doughnutHoleSize: number;
        /**
         *
         * Boolean value representing if the series is filtered or not. Not applicable for surface charts.
         *
         * [Api set: ExcelApi 1.7]
         */
        filtered: boolean;
        /**
         *
         * Represents the gap width of a chart series.  Only valid on bar and column charts, as well as
            specific classes of line and pie charts.  Throws an invalid argument exception on invalid charts.
         *
         * [Api set: ExcelApi 1.7]
         */
        gapWidth: number;
        /**
         *
         * Boolean value representing if the series has data labels or not.
         *
         * [Api set: ExcelApi 1.7]
         */
        hasDataLabels: boolean;
        /**
         *
         * Represents markers background color of a chart series.
         *
         * [Api set: ExcelApi 1.7]
         */
        markerBackgroundColor: string;
        /**
         *
         * Represents markers foreground color of a chart series.
         *
         * [Api set: ExcelApi 1.7]
         */
        markerForegroundColor: string;
        /**
         *
         * Represents marker size of a chart series.
         *
         * [Api set: ExcelApi 1.7]
         */
        markerSize: number;
        /**
         *
         * Represents marker style of a chart series. See Excel.ChartMarkerStyle for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        markerStyle: Excel.ChartMarkerStyle | "Invalid" | "Automatic" | "None" | "Square" | "Diamond" | "Triangle" | "X" | "Star" | "Dot" | "Dash" | "Circle" | "Plus" | "Picture";
        /**
         *
         * Represents the name of a series in a chart.
         *
         * [Api set: ExcelApi 1.1]
         */
        name: string;
        /**
         *
         * Represents the plot order of a chart series within the chart group.
         *
         * [Api set: ExcelApi 1.7]
         */
        plotOrder: number;
        /**
         *
         * Boolean value representing if the series has a shadow or not.
         *
         * [Api set: ExcelApi 1.7]
         */
        showShadow: boolean;
        /**
         *
         * Boolean value representing if the series is smooth or not. Only applicable for line and scatter charts.
         *
         * [Api set: ExcelApi 1.7]
         */
        smooth: boolean;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ChartSeriesUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ChartSeries): void;
        /**
         *
         * Deletes the chart series.
         *
         * [Api set: ExcelApi 1.7]
         */
        delete(): void;
        /**
         *
         * Set bubble sizes for a chart series. Only works for bubble charts.
         *
         * [Api set: ExcelApi 1.7]
         *
         * @param sourceData - The Range object corresponding to the source data.
         */
        setBubbleSizes(sourceData: Excel.Range): void;
        /**
         *
         * Set values for a chart series. For scatter chart, it means Y axis values.
         *
         * [Api set: ExcelApi 1.7]
         *
         * @param sourceData - The Range object corresponding to the source data.
         */
        setValues(sourceData: Excel.Range): void;
        /**
         *
         * Set values of X axis for a chart series. Only works for scatter charts.
         *
         * [Api set: ExcelApi 1.7]
         *
         * @param sourceData - The Range object corresponding to the source data.
         */
        setXAxisValues(sourceData: Excel.Range): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartSeriesLoadOptions): Excel.ChartSeries;
        load(option?: string | string[]): Excel.ChartSeries;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ChartSeries;
        toJSON(): Excel.Interfaces.ChartSeriesData;
    }
    /**
     *
     * encapsulates the format properties for the chart series
     *
     * [Api set: ExcelApi 1.1]
     */
    export class ChartSeriesFormat extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the fill format of a chart series, which includes background formating information.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly fill: Excel.ChartFill;
        /**
         *
         * Represents line formatting.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly line: Excel.ChartLineFormat;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ChartSeriesFormatUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ChartSeriesFormat): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartSeriesFormatLoadOptions): Excel.ChartSeriesFormat;
        load(option?: string | string[]): Excel.ChartSeriesFormat;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ChartSeriesFormat;
        toJSON(): Excel.Interfaces.ChartSeriesFormatData;
    }
    /**
     *
     * A collection of all the chart points within a series inside a chart.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class ChartPointsCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        readonly items: Excel.ChartPoint[];
        /**
         *
         * Returns the number of chart points in the series. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly count: number;
        /**
         *
         * Returns the number of chart points in the series.
         *
         * [Api set: ExcelApi 1.4]
         */
        getCount(): OfficeExtension.ClientResult<number>;
        /**
         *
         * Retrieve a point based on its position within the series.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param index - Index value of the object to be retrieved. Zero-indexed.
         */
        getItemAt(index: number): Excel.ChartPoint;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartPointsCollectionLoadOptions & Excel.Interfaces.CollectionLoadOptions): Excel.ChartPointsCollection;
        load(option?: string | string[]): Excel.ChartPointsCollection;
        load(option?: OfficeExtension.LoadOption): Excel.ChartPointsCollection;
        toJSON(): Excel.Interfaces.ChartPointsCollectionData;
    }
    /**
     *
     * Represents a point of a series in a chart.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class ChartPoint extends OfficeExtension.ClientObject {
        /**
         *
         * Returns the data label of a chart point.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly dataLabel: Excel.ChartDataLabel;
        /**
         *
         * Encapsulates the format properties chart point. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly format: Excel.ChartPointFormat;
        /**
         *
         * Represents whether a data point has datalabel. Not applicable for surface charts.
         *
         * [Api set: ExcelApi 1.7]
         */
        hasDataLabel: boolean;
        /**
         *
         * HTML color code representation of the marker background color of data point. E.g. #FF0000 represents Red.
         *
         * [Api set: ExcelApi 1.7]
         */
        markerBackgroundColor: string;
        /**
         *
         * HTML color code representation of the marker foreground color of data point. E.g. #FF0000 represents Red.
         *
         * [Api set: ExcelApi 1.7]
         */
        markerForegroundColor: string;
        /**
         *
         * Represents marker size of data point.
         *
         * [Api set: ExcelApi 1.7]
         */
        markerSize: number;
        /**
         *
         * Represents marker style of a chart data point. See Excel.ChartMarkerStyle for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        markerStyle: Excel.ChartMarkerStyle | "Invalid" | "Automatic" | "None" | "Square" | "Diamond" | "Triangle" | "X" | "Star" | "Dot" | "Dash" | "Circle" | "Plus" | "Picture";
        /**
         *
         * Returns the value of a chart point. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly value: any;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ChartPointUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ChartPoint): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartPointLoadOptions): Excel.ChartPoint;
        load(option?: string | string[]): Excel.ChartPoint;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ChartPoint;
        toJSON(): Excel.Interfaces.ChartPointData;
    }
    /**
     *
     * Represents formatting object for chart points.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class ChartPointFormat extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the border format of a chart data point, which includes color, style and weight information.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly border: Excel.ChartBorder;
        /**
         *
         * Represents the fill format of a chart, which includes background formating information.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly fill: Excel.ChartFill;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ChartPointFormatUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ChartPointFormat): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartPointFormatLoadOptions): Excel.ChartPointFormat;
        load(option?: string | string[]): Excel.ChartPointFormat;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ChartPointFormat;
        toJSON(): Excel.Interfaces.ChartPointFormatData;
    }
    /**
     *
     * Represents the chart axes.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class ChartAxes extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the category axis in a chart.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly categoryAxis: Excel.ChartAxis;
        /**
         *
         * Represents the series axis of a 3-dimensional chart.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly seriesAxis: Excel.ChartAxis;
        /**
         *
         * Represents the value axis in an axis.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly valueAxis: Excel.ChartAxis;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ChartAxesUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ChartAxes): void;
        /**
         *
         * Returns the specific axis identified by type and group.
         *
         * [Api set: ExcelApi 1.7]
         *
         * @param type - Specifies the axis type. See Excel.ChartAxis for details.
         * @param group - Specifies the axis group. See Excel.ChartAxis for details.
         */
        getItem(type: Excel.ChartAxisType, group?: Excel.ChartAxisGroup): Excel.ChartAxis;
        /**
         *
         * Returns the specific axis identified by type and group.
         *
         * [Api set: ExcelApi 1.7]
         *
         * @param type - Specifies the axis type. See Excel.ChartAxis for details.
         * @param group - Specifies the axis group. See Excel.ChartAxis for details.
         */
        getItem(type: "Invalid" | "Category" | "Value" | "Series", group?: "Primary" | "Secondary"): Excel.ChartAxis;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartAxesLoadOptions): Excel.ChartAxes;
        load(option?: string | string[]): Excel.ChartAxes;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ChartAxes;
        toJSON(): Excel.Interfaces.ChartAxesData;
    }
    /**
     *
     * Represents a single axis in a chart.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class ChartAxis extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the formatting of a chart object, which includes line and font formatting.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly format: Excel.ChartAxisFormat;
        /**
         *
         * Returns a gridlines object that represents the major gridlines for the specified axis.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly majorGridlines: Excel.ChartGridlines;
        /**
         *
         * Returns a Gridlines object that represents the minor gridlines for the specified axis.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly minorGridlines: Excel.ChartGridlines;
        /**
         *
         * Represents the axis title.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly title: Excel.ChartAxisTitle;
        /**
         *
         * Represents the group for the specified axis. See Excel.ChartAxisGroup for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly axisGroup: Excel.ChartAxisGroup | "Primary" | "Secondary";
        /**
         *
         * Returns or sets the base unit for the specified category axis.
         *
         * [Api set: ExcelApi 1.7]
         */
        baseTimeUnit: Excel.ChartAxisTimeUnit | "Days" | "Months" | "Years";
        /**
         *
         * Returns or sets the category axis type.
         *
         * [Api set: ExcelApi 1.7]
         */
        categoryType: Excel.ChartAxisCategoryType | "Automatic" | "TextAxis" | "DateAxis";
        /**
         *
         * Represents the custom axis display unit value. Read Only. To set this property, please use the SetCustomDisplayUnit(double) method.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly customDisplayUnit: number;
        /**
         *
         * Represents the axis display unit. See Excel.ChartAxisDisplayUnit for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        displayUnit: Excel.ChartAxisDisplayUnit | "None" | "Hundreds" | "Thousands" | "TenThousands" | "HundredThousands" | "Millions" | "TenMillions" | "HundredMillions" | "Billions" | "Trillions" | "Custom";
        /**
         *
         * Represents the height, in points, of the chart axis. Null if the axis's not visible.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly height: number;
        /**
         *
         * Represents the distance, in points, from the left edge of the axis to the left of chart area. Null if the axis's not visible.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly left: number;
        /**
         *
         * Represents the base of the logarithm when using logarithmic scales.
         *
         * [Api set: ExcelApi 1.7]
         */
        logBase: number;
        /**
         *
         * Represents the type of major tick mark for the specified axis. See Excel.ChartAxisTickMark for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        majorTickMark: Excel.ChartAxisTickMark | "None" | "Cross" | "Inside" | "Outside";
        /**
         *
         * Returns or sets the major unit scale value for the category axis when the CategoryType property is set to TimeScale.
         *
         * [Api set: ExcelApi 1.7]
         */
        majorTimeUnitScale: Excel.ChartAxisTimeUnit | "Days" | "Months" | "Years";
        /**
         *
         * Represents the interval between two major tick marks. Can be set to a numeric value or an empty string.  The returned value is always a number.
         *
         * [Api set: ExcelApi 1.1]
         */
        majorUnit: any;
        /**
         *
         * Represents the maximum value on the value axis.  Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number.
         *
         * [Api set: ExcelApi 1.1]
         */
        maximum: any;
        /**
         *
         * Represents the minimum value on the value axis. Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number.
         *
         * [Api set: ExcelApi 1.1]
         */
        minimum: any;
        /**
         *
         * Represents the type of minor tick mark for the specified axis. See Excel.ChartAxisTickMark for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        minorTickMark: Excel.ChartAxisTickMark | "None" | "Cross" | "Inside" | "Outside";
        /**
         *
         * Returns or sets the minor unit scale value for the category axis when the CategoryType property is set to TimeScale.
         *
         * [Api set: ExcelApi 1.7]
         */
        minorTimeUnitScale: Excel.ChartAxisTimeUnit | "Days" | "Months" | "Years";
        /**
         *
         * Represents the interval between two minor tick marks. "Can be set to a numeric value or an empty string (for automatic axis values). The returned value is always a number.
         *
         * [Api set: ExcelApi 1.1]
         */
        minorUnit: any;
        /**
         *
         * Represents whether Microsoft Excel plots data points from last to first.
         *
         * [Api set: ExcelApi 1.7]
         */
        reversePlotOrder: boolean;
        /**
         *
         * Represents the value axis scale type. See Excel.ChartAxisScaleType for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        scaleType: Excel.ChartAxisScaleType | "Linear" | "Logarithmic";
        /**
         *
         * Represents whether the axis display unit label is visible.
         *
         * [Api set: ExcelApi 1.7]
         */
        showDisplayUnitLabel: boolean;
        /**
         *
         * Represents the position of tick-mark labels on the specified axis. See Excel.ChartAxisTickLabelPosition for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        tickLabelPosition: Excel.ChartAxisTickLabelPosition | "NextToAxis" | "High" | "Low" | "None";
        /**
         *
         * Represents the number of categories or series between tick-mark labels. Can be a value from 1 through 31999 or an empty string for automatic setting. The returned value is always a number.
         *
         * [Api set: ExcelApi 1.7]
         */
        tickLabelSpacing: any;
        /**
         *
         * Represents the number of categories or series between tick marks.
         *
         * [Api set: ExcelApi 1.7]
         */
        tickMarkSpacing: number;
        /**
         *
         * Represents the distance, in points, from the top edge of the axis to the top of chart area. Null if the axis's not visible.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly top: number;
        /**
         *
         * Represents the axis type. See Excel.ChartAxisType for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly type: Excel.ChartAxisType | "Invalid" | "Category" | "Value" | "Series";
        /**
         *
         * A boolean value represents the visibility of the axis.
         *
         * [Api set: ExcelApi 1.7]
         */
        visible: boolean;
        /**
         *
         * Represents the width, in points, of the chart axis. Null if the axis's not visible.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly width: number;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ChartAxisUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ChartAxis): void;
        /**
         *
         * Sets all the category names for the specified axis.
         *
         * [Api set: ExcelApi 1.7]
         *
         * @param sourceData - The Range object corresponding to the source data.
         */
        setCategoryNames(sourceData: Excel.Range): void;
        /**
         *
         * Sets the axis display unit to a custom value.
         *
         * [Api set: ExcelApi 1.7]
         *
         * @param value - Custom value of the display unit
         */
        setCustomDisplayUnit(value: number): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartAxisLoadOptions): Excel.ChartAxis;
        load(option?: string | string[]): Excel.ChartAxis;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ChartAxis;
        toJSON(): Excel.Interfaces.ChartAxisData;
    }
    /**
     *
     * Encapsulates the format properties for the chart axis.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class ChartAxisFormat extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the font attributes (font name, font size, color, etc.) for a chart axis element.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly font: Excel.ChartFont;
        /**
         *
         * Represents chart line formatting.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly line: Excel.ChartLineFormat;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ChartAxisFormatUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ChartAxisFormat): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartAxisFormatLoadOptions): Excel.ChartAxisFormat;
        load(option?: string | string[]): Excel.ChartAxisFormat;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ChartAxisFormat;
        toJSON(): Excel.Interfaces.ChartAxisFormatData;
    }
    /**
     *
     * Represents the title of a chart axis.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class ChartAxisTitle extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the formatting of chart axis title.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly format: Excel.ChartAxisTitleFormat;
        /**
         *
         * Represents the axis title.
         *
         * [Api set: ExcelApi 1.1]
         */
        text: string;
        /**
         *
         * A boolean that specifies the visibility of an axis title.
         *
         * [Api set: ExcelApi 1.1]
         */
        visible: boolean;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ChartAxisTitleUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ChartAxisTitle): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartAxisTitleLoadOptions): Excel.ChartAxisTitle;
        load(option?: string | string[]): Excel.ChartAxisTitle;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ChartAxisTitle;
        toJSON(): Excel.Interfaces.ChartAxisTitleData;
    }
    /**
     *
     * Represents the chart axis title formatting.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class ChartAxisTitleFormat extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the font attributes, such as font name, font size, color, etc. of chart axis title object.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly font: Excel.ChartFont;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ChartAxisTitleFormatUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ChartAxisTitleFormat): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartAxisTitleFormatLoadOptions): Excel.ChartAxisTitleFormat;
        load(option?: string | string[]): Excel.ChartAxisTitleFormat;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ChartAxisTitleFormat;
        toJSON(): Excel.Interfaces.ChartAxisTitleFormatData;
    }
    /**
     *
     * Represents a collection of all the data labels on a chart point.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class ChartDataLabels extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the format of chart data labels, which includes fill and font formatting.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly format: Excel.ChartDataLabelFormat;
        /**
         *
         * DataLabelPosition value that represents the position of the data label. See Excel.ChartDataLabelPosition for details.
         *
         * [Api set: ExcelApi 1.1]
         */
        position: Excel.ChartDataLabelPosition | "Invalid" | "None" | "Center" | "InsideEnd" | "InsideBase" | "OutsideEnd" | "Left" | "Right" | "Top" | "Bottom" | "BestFit" | "Callout";
        /**
         *
         * String representing the separator used for the data labels on a chart.
         *
         * [Api set: ExcelApi 1.1]
         */
        separator: string;
        /**
         *
         * Boolean value representing if the data label bubble size is visible or not.
         *
         * [Api set: ExcelApi 1.1]
         */
        showBubbleSize: boolean;
        /**
         *
         * Boolean value representing if the data label category name is visible or not.
         *
         * [Api set: ExcelApi 1.1]
         */
        showCategoryName: boolean;
        /**
         *
         * Boolean value representing if the data label legend key is visible or not.
         *
         * [Api set: ExcelApi 1.1]
         */
        showLegendKey: boolean;
        /**
         *
         * Boolean value representing if the data label percentage is visible or not.
         *
         * [Api set: ExcelApi 1.1]
         */
        showPercentage: boolean;
        /**
         *
         * Boolean value representing if the data label series name is visible or not.
         *
         * [Api set: ExcelApi 1.1]
         */
        showSeriesName: boolean;
        /**
         *
         * Boolean value representing if the data label value is visible or not.
         *
         * [Api set: ExcelApi 1.1]
         */
        showValue: boolean;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ChartDataLabelsUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ChartDataLabels): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartDataLabelsLoadOptions): Excel.ChartDataLabels;
        load(option?: string | string[]): Excel.ChartDataLabels;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ChartDataLabels;
        toJSON(): Excel.Interfaces.ChartDataLabelsData;
    }
    /**
     *
     * Represents the data label of a chart point.
     *
     * [Api set: ExcelApi 1.7]
     */
    export class ChartDataLabel extends OfficeExtension.ClientObject {
        /**
         *
         * DataLabelPosition value that represents the position of the data label. See Excel.ChartDataLabelPosition for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        position: Excel.ChartDataLabelPosition | "Invalid" | "None" | "Center" | "InsideEnd" | "InsideBase" | "OutsideEnd" | "Left" | "Right" | "Top" | "Bottom" | "BestFit" | "Callout";
        /**
         *
         * String representing the separator used for the data label on a chart.
         *
         * [Api set: ExcelApi 1.7]
         */
        separator: string;
        /**
         *
         * Boolean value representing if the data label bubble size is visible or not.
         *
         * [Api set: ExcelApi 1.7]
         */
        showBubbleSize: boolean;
        /**
         *
         * Boolean value representing if the data label category name is visible or not.
         *
         * [Api set: ExcelApi 1.7]
         */
        showCategoryName: boolean;
        /**
         *
         * Boolean value representing if the data label legend key is visible or not.
         *
         * [Api set: ExcelApi 1.7]
         */
        showLegendKey: boolean;
        /**
         *
         * Boolean value representing if the data label percentage is visible or not.
         *
         * [Api set: ExcelApi 1.7]
         */
        showPercentage: boolean;
        /**
         *
         * Boolean value representing if the data label series name is visible or not.
         *
         * [Api set: ExcelApi 1.7]
         */
        showSeriesName: boolean;
        /**
         *
         * Boolean value representing if the data label value is visible or not.
         *
         * [Api set: ExcelApi 1.7]
         */
        showValue: boolean;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ChartDataLabelUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ChartDataLabel): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartDataLabelLoadOptions): Excel.ChartDataLabel;
        load(option?: string | string[]): Excel.ChartDataLabel;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ChartDataLabel;
        toJSON(): Excel.Interfaces.ChartDataLabelData;
    }
    /**
     *
     * Encapsulates the format properties for the chart data labels.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class ChartDataLabelFormat extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the fill format of the current chart data label.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly fill: Excel.ChartFill;
        /**
         *
         * Represents the font attributes (font name, font size, color, etc.) for a chart data label.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly font: Excel.ChartFont;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ChartDataLabelFormatUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ChartDataLabelFormat): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartDataLabelFormatLoadOptions): Excel.ChartDataLabelFormat;
        load(option?: string | string[]): Excel.ChartDataLabelFormat;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ChartDataLabelFormat;
        toJSON(): Excel.Interfaces.ChartDataLabelFormatData;
    }
    /**
     *
     * Represents major or minor gridlines on a chart axis.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class ChartGridlines extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the formatting of chart gridlines.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly format: Excel.ChartGridlinesFormat;
        /**
         *
         * Boolean value representing if the axis gridlines are visible or not.
         *
         * [Api set: ExcelApi 1.1]
         */
        visible: boolean;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ChartGridlinesUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ChartGridlines): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartGridlinesLoadOptions): Excel.ChartGridlines;
        load(option?: string | string[]): Excel.ChartGridlines;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ChartGridlines;
        toJSON(): Excel.Interfaces.ChartGridlinesData;
    }
    /**
     *
     * Encapsulates the format properties for chart gridlines.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class ChartGridlinesFormat extends OfficeExtension.ClientObject {
        /**
         *
         * Represents chart line formatting.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly line: Excel.ChartLineFormat;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ChartGridlinesFormatUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ChartGridlinesFormat): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartGridlinesFormatLoadOptions): Excel.ChartGridlinesFormat;
        load(option?: string | string[]): Excel.ChartGridlinesFormat;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ChartGridlinesFormat;
        toJSON(): Excel.Interfaces.ChartGridlinesFormatData;
    }
    /**
     *
     * Represents the legend in a chart.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class ChartLegend extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the formatting of a chart legend, which includes fill and font formatting.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly format: Excel.ChartLegendFormat;
        /**
         *
         * Represents a collection of legendEntries in the legend.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly legendEntries: Excel.ChartLegendEntryCollection;
        /**
         *
         * Represents the height, in points, of the legend on the chart. Null if legend is not visible.
         *
         * [Api set: ExcelApi 1.7]
         */
        height: number;
        /**
         *
         * Represents the left, in points, of a chart legend. Null if legend is not visible.
         *
         * [Api set: ExcelApi 1.7]
         */
        left: number;
        /**
         *
         * Boolean value for whether the chart legend should overlap with the main body of the chart.
         *
         * [Api set: ExcelApi 1.1]
         */
        overlay: boolean;
        /**
         *
         * Represents the position of the legend on the chart. See Excel.ChartLegendPosition for details.
         *
         * [Api set: ExcelApi 1.1]
         */
        position: Excel.ChartLegendPosition | "Invalid" | "Top" | "Bottom" | "Left" | "Right" | "Corner" | "Custom";
        /**
         *
         * Represents if the legend has a shadow on the chart.
         *
         * [Api set: ExcelApi 1.7]
         */
        showShadow: boolean;
        /**
         *
         * Represents the top of a chart legend.
         *
         * [Api set: ExcelApi 1.7]
         */
        top: number;
        /**
         *
         * A boolean value the represents the visibility of a ChartLegend object.
         *
         * [Api set: ExcelApi 1.1]
         */
        visible: boolean;
        /**
         *
         * Represents the width, in points, of the legend on the chart. Null if legend is not visible.
         *
         * [Api set: ExcelApi 1.7]
         */
        width: number;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ChartLegendUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ChartLegend): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartLegendLoadOptions): Excel.ChartLegend;
        load(option?: string | string[]): Excel.ChartLegend;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ChartLegend;
        toJSON(): Excel.Interfaces.ChartLegendData;
    }
    /**
     *
     * Represents the legendEntry in legendEntryCollection.
     *
     * [Api set: ExcelApi 1.7]
     */
    export class ChartLegendEntry extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the visible of a chart legend entry.
         *
         * [Api set: ExcelApi 1.7]
         */
        visible: boolean;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ChartLegendEntryUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ChartLegendEntry): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartLegendEntryLoadOptions): Excel.ChartLegendEntry;
        load(option?: string | string[]): Excel.ChartLegendEntry;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ChartLegendEntry;
        toJSON(): Excel.Interfaces.ChartLegendEntryData;
    }
    /**
     *
     * Represents a collection of legendEntries.
     *
     * [Api set: ExcelApi 1.7]
     */
    export class ChartLegendEntryCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        readonly items: Excel.ChartLegendEntry[];
        /**
         *
         * Returns the number of legendEntry in the collection.
         *
         * [Api set: ExcelApi 1.7]
         */
        getCount(): OfficeExtension.ClientResult<number>;
        /**
         *
         * Returns a legendEntry at the given index.
         *
         * [Api set: ExcelApi 1.7]
         *
         * @param index - Index of the legendEntry to be retrieved.
         */
        getItemAt(index: number): Excel.ChartLegendEntry;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartLegendEntryCollectionLoadOptions & Excel.Interfaces.CollectionLoadOptions): Excel.ChartLegendEntryCollection;
        load(option?: string | string[]): Excel.ChartLegendEntryCollection;
        load(option?: OfficeExtension.LoadOption): Excel.ChartLegendEntryCollection;
        toJSON(): Excel.Interfaces.ChartLegendEntryCollectionData;
    }
    /**
     *
     * Encapsulates the format properties of a chart legend.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class ChartLegendFormat extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the fill format of an object, which includes background formating information.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly fill: Excel.ChartFill;
        /**
         *
         * Represents the font attributes such as font name, font size, color, etc. of a chart legend.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly font: Excel.ChartFont;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ChartLegendFormatUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ChartLegendFormat): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartLegendFormatLoadOptions): Excel.ChartLegendFormat;
        load(option?: string | string[]): Excel.ChartLegendFormat;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ChartLegendFormat;
        toJSON(): Excel.Interfaces.ChartLegendFormatData;
    }
    /**
     *
     * Represents a chart title object of a chart.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class ChartTitle extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the formatting of a chart title, which includes fill and font formatting.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly format: Excel.ChartTitleFormat;
        /**
         *
         * Returns the height, in points, of the chart title. Read-only. Null if chart title is not visible.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly height: number;
        /**
         *
         * Represents the horizontal alignment for chart title.
         *
         * [Api set: ExcelApi 1.7]
         */
        horizontalAlignment: Excel.ChartTextHorizontalAlignment | "Center" | "Left" | "Right" | "Justify" | "Distributed";
        /**
         *
         * Represents the distance, in points, from the left edge of chart title to the left edge of chart area. Null if chart title's not visible.
         *
         * [Api set: ExcelApi 1.7]
         */
        left: number;
        /**
         *
         * Boolean value representing if the chart title will overlay the chart or not.
         *
         * [Api set: ExcelApi 1.1]
         */
        overlay: boolean;
        /**
         *
         * Represents the position of chart title. See Excel.ChartTitlePosition for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        position: Excel.ChartTitlePosition | "Automatic" | "Top" | "Bottom" | "Left" | "Right";
        /**
         *
         * Represents a boolean value that determines if the chart title has a shadow.
         *
         * [Api set: ExcelApi 1.7]
         */
        showShadow: boolean;
        /**
         *
         * Represents the title text of a chart.
         *
         * [Api set: ExcelApi 1.1]
         */
        text: string;
        /**
         *
         * Represents the text orientation of chart title. The value should be an integer either from -90 to 90, or 180 for vertically-oriented text.
         *
         * [Api set: ExcelApi 1.7]
         */
        textOrientation: number;
        /**
         *
         * Represents the distance, in points, from the top edge of chart title to the top of chart area. Null if chart title's not visible.
         *
         * [Api set: ExcelApi 1.7]
         */
        top: number;
        /**
         *
         * Represents the vertical alignment of chart title. See Excel.ChartTextVerticalAlignment for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        verticalAlignment: Excel.ChartTextVerticalAlignment | "Center" | "Bottom" | "Top" | "Justify" | "Distributed";
        /**
         *
         * A boolean value the represents the visibility of a chart title object.
         *
         * [Api set: ExcelApi 1.1]
         */
        visible: boolean;
        /**
         *
         * Returns the width, in points, of the chart title. Read-only. Null if chart title is not visible.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly width: number;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ChartTitleUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ChartTitle): void;
        /**
         *
         * Get the substring of a chart title. Line break '\n' also counts one charater.
         *
         * [Api set: ExcelApi 1.7]
         *
         * @param start - Start position of substring to be retrieved. Position start with 0.
         * @param length - Length of substring to be retrieved.
         */
        getSubstring(start: number, length: number): Excel.ChartFormatString;
        /**
         *
         * Sets a string value that represents the formula of chart title using A1-style notation.
         *
         * [Api set: ExcelApi 1.7]
         *
         * @param formula - a string that present the formula to set
         */
        setFormula(formula: string): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartTitleLoadOptions): Excel.ChartTitle;
        load(option?: string | string[]): Excel.ChartTitle;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ChartTitle;
        toJSON(): Excel.Interfaces.ChartTitleData;
    }
    /**
     *
     * Represents the substring in chart related objects that contains text, like ChartTitle object, ChartAxisTitle object, etc.
     *
     * [Api set: ExcelApi 1.7]
     */
    export class ChartFormatString extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the font attributes, such as font name, font size, color, etc. of chart characters object.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly font: Excel.ChartFont;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ChartFormatStringUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ChartFormatString): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartFormatStringLoadOptions): Excel.ChartFormatString;
        load(option?: string | string[]): Excel.ChartFormatString;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ChartFormatString;
        toJSON(): Excel.Interfaces.ChartFormatStringData;
    }
    /**
     *
     * Provides access to the office art formatting for chart title.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class ChartTitleFormat extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the border format of chart title, which includes color, linestyle and weight.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly border: Excel.ChartBorder;
        /**
         *
         * Represents the fill format of an object, which includes background formating information.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly fill: Excel.ChartFill;
        /**
         *
         * Represents the font attributes (font name, font size, color, etc.) for an object.
         *
         * [Api set: ExcelApi 1.1]
         */
        readonly font: Excel.ChartFont;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ChartTitleFormatUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ChartTitleFormat): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartTitleFormatLoadOptions): Excel.ChartTitleFormat;
        load(option?: string | string[]): Excel.ChartTitleFormat;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ChartTitleFormat;
        toJSON(): Excel.Interfaces.ChartTitleFormatData;
    }
    /**
     *
     * Represents the fill formatting for a chart element.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class ChartFill extends OfficeExtension.ClientObject {
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartFill;
        /**
         *
         * Clear the fill color of a chart element.
         *
         * [Api set: ExcelApi 1.1]
         */
        clear(): void;
        /**
         *
         * Sets the fill formatting of a chart element to a uniform color.
         *
         * [Api set: ExcelApi 1.1]
         *
         * @param color - HTML color code representing the color of the border line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
         */
        setSolidColor(color: string): void;
        toJSON(): {
            [key: string]: string;
        };
    }
    /**
     *
     * Represents the border formatting of a chart element.
     *
     * [Api set: ExcelApi 1.7]
     */
    export class ChartBorder extends OfficeExtension.ClientObject {
        /**
         *
         * HTML color code representing the color of borders in the chart.
         *
         * [Api set: ExcelApi 1.7]
         */
        color: string;
        /**
         *
         * Represents the line style of the border. See Excel.ChartLineStyle for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        lineStyle: Excel.ChartLineStyle | "None" | "Continuous" | "Dash" | "DashDot" | "DashDotDot" | "Dot" | "Grey25" | "Grey50" | "Grey75" | "Automatic" | "RoundDot";
        /**
         *
         * Represents weight of the border, in points.
         *
         * [Api set: ExcelApi 1.7]
         */
        weight: number;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ChartBorderUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ChartBorder): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartBorderLoadOptions): Excel.ChartBorder;
        load(option?: string | string[]): Excel.ChartBorder;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ChartBorder;
        toJSON(): Excel.Interfaces.ChartBorderData;
    }
    /**
     *
     * Enapsulates the formatting options for line elements.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class ChartLineFormat extends OfficeExtension.ClientObject {
        /**
         *
         * HTML color code representing the color of lines in the chart.
         *
         * [Api set: ExcelApi 1.1]
         */
        color: string;
        /**
         *
         * Represents the line style. See Excel.ChartLineStyle for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        lineStyle: Excel.ChartLineStyle | "None" | "Continuous" | "Dash" | "DashDot" | "DashDotDot" | "Dot" | "Grey25" | "Grey50" | "Grey75" | "Automatic" | "RoundDot";
        /**
         *
         * Represents weight of the line, in points.
         *
         * [Api set: ExcelApi 1.7]
         */
        weight: number;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ChartLineFormatUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ChartLineFormat): void;
        /**
         *
         * Clear the line format of a chart element.
         *
         * [Api set: ExcelApi 1.1]
         */
        clear(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartLineFormatLoadOptions): Excel.ChartLineFormat;
        load(option?: string | string[]): Excel.ChartLineFormat;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ChartLineFormat;
        toJSON(): Excel.Interfaces.ChartLineFormatData;
    }
    /**
     *
     * This object represents the font attributes (font name, font size, color, etc.) for a chart object.
     *
     * [Api set: ExcelApi 1.1]
     */
    export class ChartFont extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the bold status of font.
         *
         * [Api set: ExcelApi 1.1]
         */
        bold: boolean;
        /**
         *
         * HTML color code representation of the text color. E.g. #FF0000 represents Red.
         *
         * [Api set: ExcelApi 1.1]
         */
        color: string;
        /**
         *
         * Represents the italic status of the font.
         *
         * [Api set: ExcelApi 1.1]
         */
        italic: boolean;
        /**
         *
         * Font name (e.g. "Calibri")
         *
         * [Api set: ExcelApi 1.1]
         */
        name: string;
        /**
         *
         * Size of the font (e.g. 11)
         *
         * [Api set: ExcelApi 1.1]
         */
        size: number;
        /**
         *
         * Type of underline applied to the font. See Excel.ChartUnderlineStyle for details.
         *
         * [Api set: ExcelApi 1.1]
         */
        underline: Excel.ChartUnderlineStyle | "None" | "Single";
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ChartFontUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ChartFont): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartFontLoadOptions): Excel.ChartFont;
        load(option?: string | string[]): Excel.ChartFont;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ChartFont;
        toJSON(): Excel.Interfaces.ChartFontData;
    }
    /**
     *
     * This object represents the attributes for a chart trendline object.
     *
     * [Api set: ExcelApi 1.7]
     */
    export class ChartTrendline extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the formatting of a chart trendline.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly format: Excel.ChartTrendlineFormat;
        /**
         *
         * Represents the intercept value of the trendline. Can be set to a numeric value or an empty string (for automatic values). The returned value is always a number.
         *
         * [Api set: ExcelApi 1.7]
         */
        intercept: any;
        /**
         *
         * Represents the period of a chart trendline. Only applicable for trendline with MovingAverage type.
         *
         * [Api set: ExcelApi 1.7]
         */
        movingAveragePeriod: number;
        /**
         *
         * Represents the name of the trendline. Can be set to a string value, or can be set to null value represents automatic values. The returned value is always a string
         *
         * [Api set: ExcelApi 1.7]
         */
        name: string;
        /**
         *
         * Represents the order of a chart trendline. Only applicable for trendline with Polynomial type.
         *
         * [Api set: ExcelApi 1.7]
         */
        polynomialOrder: number;
        /**
         *
         * Represents the type of a chart trendline.
         *
         * [Api set: ExcelApi 1.7]
         */
        type: Excel.ChartTrendlineType | "Linear" | "Exponential" | "Logarithmic" | "MovingAverage" | "Polynomial" | "Power";
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ChartTrendlineUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ChartTrendline): void;
        /**
         *
         * Delete the trendline object.
         *
         * [Api set: ExcelApi 1.7]
         */
        delete(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartTrendlineLoadOptions): Excel.ChartTrendline;
        load(option?: string | string[]): Excel.ChartTrendline;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ChartTrendline;
        toJSON(): Excel.Interfaces.ChartTrendlineData;
    }
    /**
     *
     * Represents a collection of Chart Trendlines.
     *
     * [Api set: ExcelApi 1.7]
     */
    export class ChartTrendlineCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        readonly items: Excel.ChartTrendline[];
        /**
         *
         * Adds a new trendline to trendline collection.
         *
         * [Api set: ExcelApi 1.7]
         *
         * @param type - Specifies the trendline type. The default value is "Linear". See Excel.ChartTrendline for details.
         */
        add(type?: Excel.ChartTrendlineType): Excel.ChartTrendline;
        /**
         *
         * Adds a new trendline to trendline collection.
         *
         * [Api set: ExcelApi 1.7]
         *
         * @param type - Specifies the trendline type. The default value is "Linear". See Excel.ChartTrendline for details.
         */
        add(type?: "Linear" | "Exponential" | "Logarithmic" | "MovingAverage" | "Polynomial" | "Power"): Excel.ChartTrendline;
        /**
         *
         * Returns the number of trendlines in the collection.
         *
         * [Api set: ExcelApi 1.7]
         */
        getCount(): OfficeExtension.ClientResult<number>;
        /**
         *
         * Get trendline object by index, which is the insertion order in items array.
         *
         * [Api set: ExcelApi 1.7]
         *
         * @param index - Represents the insertion order in items array.
         */
        getItem(index: number): Excel.ChartTrendline;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartTrendlineCollectionLoadOptions & Excel.Interfaces.CollectionLoadOptions): Excel.ChartTrendlineCollection;
        load(option?: string | string[]): Excel.ChartTrendlineCollection;
        load(option?: OfficeExtension.LoadOption): Excel.ChartTrendlineCollection;
        toJSON(): Excel.Interfaces.ChartTrendlineCollectionData;
    }
    /**
     *
     * Represents the format properties for chart trendline.
     *
     * [Api set: ExcelApi 1.7]
     */
    export class ChartTrendlineFormat extends OfficeExtension.ClientObject {
        /**
         *
         * Represents chart line formatting.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly line: Excel.ChartLineFormat;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ChartTrendlineFormatUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ChartTrendlineFormat): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ChartTrendlineFormatLoadOptions): Excel.ChartTrendlineFormat;
        load(option?: string | string[]): Excel.ChartTrendlineFormat;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ChartTrendlineFormat;
        toJSON(): Excel.Interfaces.ChartTrendlineFormatData;
    }
    /**
     *
     * Manages sorting operations on Range objects.
     *
     * [Api set: ExcelApi 1.2]
     */
    export class RangeSort extends OfficeExtension.ClientObject {
        /**
         *
         * Perform a sort operation.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param fields - The list of conditions to sort on.
         * @param matchCase - Whether to have the casing impact string ordering.
         * @param hasHeaders - Whether the range has a header.
         * @param orientation - Whether the operation is sorting rows or columns.
         * @param method - The ordering method used for Chinese characters.
         */
        apply(fields: Excel.SortField[], matchCase?: boolean, hasHeaders?: boolean, orientation?: Excel.SortOrientation, method?: Excel.SortMethod): void;
        /**
         *
         * Perform a sort operation.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param fields - The list of conditions to sort on.
         * @param matchCase - Whether to have the casing impact string ordering.
         * @param hasHeaders - Whether the range has a header.
         * @param orientation - Whether the operation is sorting rows or columns.
         * @param method - The ordering method used for Chinese characters.
         */
        apply(fields: Excel.SortField[], matchCase?: boolean, hasHeaders?: boolean, orientation?: "Rows" | "Columns", method?: "PinYin" | "StrokeCount"): void;
        toJSON(): {
            [key: string]: string;
        };
    }
    /**
     *
     * Manages sorting operations on Table objects.
     *
     * [Api set: ExcelApi 1.2]
     */
    export class TableSort extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the current conditions used to last sort the table.
         *
         * [Api set: ExcelApi 1.2]
         */
        readonly fields: Excel.SortField[];
        /**
         *
         * Represents whether the casing impacted the last sort of the table.
         *
         * [Api set: ExcelApi 1.2]
         */
        readonly matchCase: boolean;
        /**
         *
         * Represents Chinese character ordering method last used to sort the table.
         *
         * [Api set: ExcelApi 1.2]
         */
        readonly method: Excel.SortMethod | "PinYin" | "StrokeCount";
        /**
         *
         * Perform a sort operation.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param fields - The list of conditions to sort on.
         * @param matchCase - Whether to have the casing impact string ordering.
         * @param method - The ordering method used for Chinese characters.
         */
        apply(fields: Excel.SortField[], matchCase?: boolean, method?: Excel.SortMethod): void;
        /**
         *
         * Perform a sort operation.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param fields - The list of conditions to sort on.
         * @param matchCase - Whether to have the casing impact string ordering.
         * @param method - The ordering method used for Chinese characters.
         */
        apply(fields: Excel.SortField[], matchCase?: boolean, method?: "PinYin" | "StrokeCount"): void;
        /**
         *
         * Clears the sorting that is currently on the table. While this doesn't modify the table's ordering, it clears the state of the header buttons.
         *
         * [Api set: ExcelApi 1.2]
         */
        clear(): void;
        /**
         *
         * Reapplies the current sorting parameters to the table.
         *
         * [Api set: ExcelApi 1.2]
         */
        reapply(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.TableSortLoadOptions): Excel.TableSort;
        load(option?: string | string[]): Excel.TableSort;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.TableSort;
        toJSON(): Excel.Interfaces.TableSortData;
    }
    /**
     *
     * Represents a condition in a sorting operation.
     *
     * [Api set: ExcelApi 1.2]
     */
    export interface SortField {
        /**
         *
         * Represents whether the sorting is done in an ascending fashion.
         *
         * [Api set: ExcelApi 1.2]
         */
        ascending?: boolean;
        /**
         *
         * Represents the color that is the target of the condition if the sorting is on font or cell color.
         *
         * [Api set: ExcelApi 1.2]
         */
        color?: string;
        /**
         *
         * Represents additional sorting options for this field.
         *
         * [Api set: ExcelApi 1.2]
         */
        dataOption?: Excel.SortDataOption | "Normal" | "TextAsNumber";
        /**
         *
         * Represents the icon that is the target of the condition if the sorting is on the cell's icon.
         *
         * [Api set: ExcelApi 1.2]
         */
        icon?: Excel.Icon;
        /**
         *
         * Represents the column (or row, depending on the sort orientation) that the condition is on. Represented as an offset from the first column (or row).
         *
         * [Api set: ExcelApi 1.2]
         */
        key: number;
        /**
         *
         * Represents the type of sorting of this condition.
         *
         * [Api set: ExcelApi 1.2]
         */
        sortOn?: Excel.SortOn | "Value" | "CellColor" | "FontColor" | "Icon";
    }
    /**
     *
     * Manages the filtering of a table's column.
     *
     * [Api set: ExcelApi 1.2]
     */
    export class Filter extends OfficeExtension.ClientObject {
        /**
         *
         * The currently applied filter on the given column.
         *
         * [Api set: ExcelApi 1.2]
         */
        readonly criteria: Excel.FilterCriteria;
        /**
         *
         * Apply the given filter criteria on the given column.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param criteria - The criteria to apply.
         */
        apply(criteria: Excel.FilterCriteria): void;
        /**
         *
         * Apply a "Bottom Item" filter to the column for the given number of elements.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param count - The number of elements from the bottom to show.
         */
        applyBottomItemsFilter(count: number): void;
        /**
         *
         * Apply a "Bottom Percent" filter to the column for the given percentage of elements.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param percent - The percentage of elements from the bottom to show.
         */
        applyBottomPercentFilter(percent: number): void;
        /**
         *
         * Apply a "Cell Color" filter to the column for the given color.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param color - The background color of the cells to show.
         */
        applyCellColorFilter(color: string): void;
        /**
         *
         * Apply a "Icon" filter to the column for the given criteria strings.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param criteria1 - The first criteria string.
         * @param criteria2 - The second criteria string.
         * @param oper - The operator that describes how the two criteria are joined.
         */
        applyCustomFilter(criteria1: string, criteria2?: string, oper?: Excel.FilterOperator): void;
        /**
         *
         * Apply a "Icon" filter to the column for the given criteria strings.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param criteria1 - The first criteria string.
         * @param criteria2 - The second criteria string.
         * @param oper - The operator that describes how the two criteria are joined.
         */
        applyCustomFilter(criteria1: string, criteria2?: string, oper?: "And" | "Or"): void;
        /**
         *
         * Apply a "Dynamic" filter to the column.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param criteria - The dynamic criteria to apply.
         */
        applyDynamicFilter(criteria: Excel.DynamicFilterCriteria): void;
        /**
         *
         * Apply a "Dynamic" filter to the column.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param criteria - The dynamic criteria to apply.
         */
        applyDynamicFilter(criteria: "Unknown" | "AboveAverage" | "AllDatesInPeriodApril" | "AllDatesInPeriodAugust" | "AllDatesInPeriodDecember" | "AllDatesInPeriodFebruray" | "AllDatesInPeriodJanuary" | "AllDatesInPeriodJuly" | "AllDatesInPeriodJune" | "AllDatesInPeriodMarch" | "AllDatesInPeriodMay" | "AllDatesInPeriodNovember" | "AllDatesInPeriodOctober" | "AllDatesInPeriodQuarter1" | "AllDatesInPeriodQuarter2" | "AllDatesInPeriodQuarter3" | "AllDatesInPeriodQuarter4" | "AllDatesInPeriodSeptember" | "BelowAverage" | "LastMonth" | "LastQuarter" | "LastWeek" | "LastYear" | "NextMonth" | "NextQuarter" | "NextWeek" | "NextYear" | "ThisMonth" | "ThisQuarter" | "ThisWeek" | "ThisYear" | "Today" | "Tomorrow" | "YearToDate" | "Yesterday"): void;
        /**
         *
         * Apply a "Font Color" filter to the column for the given color.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param color - The font color of the cells to show.
         */
        applyFontColorFilter(color: string): void;
        /**
         *
         * Apply a "Icon" filter to the column for the given icon.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param icon - The icons of the cells to show.
         */
        applyIconFilter(icon: Excel.Icon): void;
        /**
         *
         * Apply a "Top Item" filter to the column for the given number of elements.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param count - The number of elements from the top to show.
         */
        applyTopItemsFilter(count: number): void;
        /**
         *
         * Apply a "Top Percent" filter to the column for the given percentage of elements.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param percent - The percentage of elements from the top to show.
         */
        applyTopPercentFilter(percent: number): void;
        /**
         *
         * Apply a "Values" filter to the column for the given values.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - The list of values to show.
         */
        applyValuesFilter(values: Array<string | Excel.FilterDatetime>): void;
        /**
         *
         * Clear the filter on the given column.
         *
         * [Api set: ExcelApi 1.2]
         */
        clear(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.FilterLoadOptions): Excel.Filter;
        load(option?: string | string[]): Excel.Filter;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.Filter;
        toJSON(): Excel.Interfaces.FilterData;
    }
    /**
     *
     * Represents the filtering criteria applied to a column.
     *
     * [Api set: ExcelApi 1.2]
     */
    export interface FilterCriteria {
        /**
         *
         * The HTML color string used to filter cells. Used with "cellColor" and "fontColor" filtering.
         *
         * [Api set: ExcelApi 1.2]
         */
        color?: string;
        /**
         *
         * The first criterion used to filter data. Used as an operator in the case of "custom" filtering.
             For example ">50" for number greater than 50 or "=*s" for values ending in "s".

             Used as a number in the case of top/bottom items/percents. E.g. "5" for the top 5 items if filterOn is set to "topItems"
         *
         * [Api set: ExcelApi 1.2]
         */
        criterion1?: string;
        /**
         *
         * The second criterion used to filter data. Only used as an operator in the case of "custom" filtering.
         *
         * [Api set: ExcelApi 1.2]
         */
        criterion2?: string;
        /**
         *
         * The dynamic criteria from the Excel.DynamicFilterCriteria set to apply on this column. Used with "dynamic" filtering.
         *
         * [Api set: ExcelApi 1.2]
         */
        dynamicCriteria?: Excel.DynamicFilterCriteria | "Unknown" | "AboveAverage" | "AllDatesInPeriodApril" | "AllDatesInPeriodAugust" | "AllDatesInPeriodDecember" | "AllDatesInPeriodFebruray" | "AllDatesInPeriodJanuary" | "AllDatesInPeriodJuly" | "AllDatesInPeriodJune" | "AllDatesInPeriodMarch" | "AllDatesInPeriodMay" | "AllDatesInPeriodNovember" | "AllDatesInPeriodOctober" | "AllDatesInPeriodQuarter1" | "AllDatesInPeriodQuarter2" | "AllDatesInPeriodQuarter3" | "AllDatesInPeriodQuarter4" | "AllDatesInPeriodSeptember" | "BelowAverage" | "LastMonth" | "LastQuarter" | "LastWeek" | "LastYear" | "NextMonth" | "NextQuarter" | "NextWeek" | "NextYear" | "ThisMonth" | "ThisQuarter" | "ThisWeek" | "ThisYear" | "Today" | "Tomorrow" | "YearToDate" | "Yesterday";
        /**
         *
         * The property used by the filter to determine whether the values should stay visible.
         *
         * [Api set: ExcelApi 1.2]
         */
        filterOn: Excel.FilterOn | "BottomItems" | "BottomPercent" | "CellColor" | "Dynamic" | "FontColor" | "Values" | "TopItems" | "TopPercent" | "Icon" | "Custom";
        /**
         *
         * The icon used to filter cells. Used with "icon" filtering.
         *
         * [Api set: ExcelApi 1.2]
         */
        icon?: Excel.Icon;
        /**
         *
         * The operator used to combine criterion 1 and 2 when using "custom" filtering.
         *
         * [Api set: ExcelApi 1.2]
         */
        operator?: Excel.FilterOperator | "And" | "Or";
        /**
         *
         * The set of values to be used as part of "values" filtering.
         *
         * [Api set: ExcelApi 1.2]
         */
        values?: Array<string | Excel.FilterDatetime>;
    }
    /**
     *
     * Represents how to filter a date when filtering on values.
     *
     * [Api set: ExcelApi 1.2]
     */
    export interface FilterDatetime {
        /**
         *
         * The date in ISO8601 format used to filter data.
         *
         * [Api set: ExcelApi 1.2]
         */
        date: string;
        /**
         *
         * How specific the date should be used to keep data. For example, if the date is 2005-04-02 and the specifity is set to "month", the filter operation will keep all rows with a date in the month of april 2009.
         *
         * [Api set: ExcelApi 1.2]
         */
        specificity: Excel.FilterDatetimeSpecificity | "Year" | "Month" | "Day" | "Hour" | "Minute" | "Second";
    }
    /**
     *
     * Represents a cell icon.
     *
     * [Api set: ExcelApi 1.2]
     */
    export interface Icon {
        /**
         *
         * Represents the index of the icon in the given set.
         *
         * [Api set: ExcelApi 1.2]
         */
        index: number;
        /**
         *
         * Represents the set that the icon is part of.
         *
         * [Api set: ExcelApi 1.2]
         */
        set: Excel.IconSet | "Invalid" | "ThreeArrows" | "ThreeArrowsGray" | "ThreeFlags" | "ThreeTrafficLights1" | "ThreeTrafficLights2" | "ThreeSigns" | "ThreeSymbols" | "ThreeSymbols2" | "FourArrows" | "FourArrowsGray" | "FourRedToBlack" | "FourRating" | "FourTrafficLights" | "FiveArrows" | "FiveArrowsGray" | "FiveRating" | "FiveQuarters" | "ThreeStars" | "ThreeTriangles" | "FiveBoxes";
    }
    /**
     *
     * A scoped collection of custom XML parts.
            A scoped collection is the result of some operation, e.g. filtering by namespace.
            A scoped collection cannot be scoped any further.
     *
     * [Api set: ExcelApi 1.5]
     */
    export class CustomXmlPartScopedCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        readonly items: Excel.CustomXmlPart[];
        /**
         *
         * Gets the number of CustomXML parts in this collection.
         *
         * [Api set: ExcelApi 1.5]
         */
        getCount(): OfficeExtension.ClientResult<number>;
        /**
         *
         * Gets a custom XML part based on its ID.
         *
         * [Api set: ExcelApi 1.5]
         *
         * @param id - ID of the object to be retrieved.
         */
        getItem(id: string): Excel.CustomXmlPart;
        /**
         *
         * Gets a custom XML part based on its ID.
            If the CustomXmlPart does not exist, the return object's isNull property will be true.
         *
         * [Api set: ExcelApi 1.5]
         *
         * @param id - ID of the object to be retrieved.
         */
        getItemOrNullObject(id: string): Excel.CustomXmlPart;
        /**
         *
         * If the collection contains exactly one item, this method returns it.
            Otherwise, this method produces an error.
         *
         * [Api set: ExcelApi 1.5]
         */
        getOnlyItem(): Excel.CustomXmlPart;
        /**
         *
         * If the collection contains exactly one item, this method returns it.
            Otherwise, this method returns Null.
         *
         * [Api set: ExcelApi 1.5]
         */
        getOnlyItemOrNullObject(): Excel.CustomXmlPart;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.CustomXmlPartScopedCollectionLoadOptions & Excel.Interfaces.CollectionLoadOptions): Excel.CustomXmlPartScopedCollection;
        load(option?: string | string[]): Excel.CustomXmlPartScopedCollection;
        load(option?: OfficeExtension.LoadOption): Excel.CustomXmlPartScopedCollection;
        toJSON(): Excel.Interfaces.CustomXmlPartScopedCollectionData;
    }
    /**
     *
     * A collection of custom XML parts.
     *
     * [Api set: ExcelApi 1.5]
     */
    export class CustomXmlPartCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        readonly items: Excel.CustomXmlPart[];
        /**
         *
         * Adds a new custom XML part to the workbook.
         *
         * [Api set: ExcelApi 1.5]
         *
         * @param xml - XML content. Must be a valid XML fragment.
         */
        add(xml: string): Excel.CustomXmlPart;
        /**
         *
         * Gets a new scoped collection of custom XML parts whose namespaces match the given namespace.
         *
         * [Api set: ExcelApi 1.5]
         *
         * @param namespaceUri
        - */
        getByNamespace(namespaceUri: string): Excel.CustomXmlPartScopedCollection;
        /**
         *
         * Gets the number of CustomXml parts in the collection.
         *
         * [Api set: ExcelApi 1.5]
         */
        getCount(): OfficeExtension.ClientResult<number>;
        /**
         *
         * Gets a custom XML part based on its ID.
         *
         * [Api set: ExcelApi 1.5]
         *
         * @param id - ID of the object to be retrieved.
         */
        getItem(id: string): Excel.CustomXmlPart;
        /**
         *
         * Gets a custom XML part based on its ID.
            If the CustomXmlPart does not exist, the return object's isNull property will be true.
         *
         * [Api set: ExcelApi 1.5]
         *
         * @param id - ID of the object to be retrieved.
         */
        getItemOrNullObject(id: string): Excel.CustomXmlPart;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.CustomXmlPartCollectionLoadOptions & Excel.Interfaces.CollectionLoadOptions): Excel.CustomXmlPartCollection;
        load(option?: string | string[]): Excel.CustomXmlPartCollection;
        load(option?: OfficeExtension.LoadOption): Excel.CustomXmlPartCollection;
        toJSON(): Excel.Interfaces.CustomXmlPartCollectionData;
    }
    /**
     *
     * Represents a custom XML part object in a workbook.
     *
     * [Api set: ExcelApi 1.5]
     */
    export class CustomXmlPart extends OfficeExtension.ClientObject {
        /**
         *
         * The custom XML part's ID. Read-only.
         *
         * [Api set: ExcelApi 1.5]
         */
        readonly id: string;
        /**
         *
         * The custom XML part's namespace URI. Read-only.
         *
         * [Api set: ExcelApi 1.5]
         */
        readonly namespaceUri: string;
        /**
         *
         * Deletes the custom XML part.
         *
         * [Api set: ExcelApi 1.5]
         */
        delete(): void;
        /**
         *
         * Gets the custom XML part's full XML content.
         *
         * [Api set: ExcelApi 1.5]
         */
        getXml(): OfficeExtension.ClientResult<string>;
        /**
         *
         * Sets the custom XML part's full XML content.
         *
         * [Api set: ExcelApi 1.5]
         *
         * @param xml - XML content for the part.
         */
        setXml(xml: string): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.CustomXmlPartLoadOptions): Excel.CustomXmlPart;
        load(option?: string | string[]): Excel.CustomXmlPart;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.CustomXmlPart;
        toJSON(): Excel.Interfaces.CustomXmlPartData;
    }
    /**
     *
     * Represents a collection of all the PivotTables that are part of the workbook or worksheet.
     *
     * [Api set: ExcelApi 1.3]
     */
    export class PivotTableCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        readonly items: Excel.PivotTable[];
        /**
         *
         * Gets the number of pivot tables in the collection.
         *
         * [Api set: ExcelApi 1.4]
         */
        getCount(): OfficeExtension.ClientResult<number>;
        /**
         *
         * Gets a PivotTable by name.
         *
         * [Api set: ExcelApi 1.3]
         *
         * @param name - Name of the PivotTable to be retrieved.
         */
        getItem(name: string): Excel.PivotTable;
        /**
         *
         * Gets a PivotTable by name. If the PivotTable does not exist, will return a null object.
         *
         * [Api set: ExcelApi 1.4]
         *
         * @param name - Name of the PivotTable to be retrieved.
         */
        getItemOrNullObject(name: string): Excel.PivotTable;
        /**
         *
         * Refreshes all the pivot tables in the collection.
         *
         * [Api set: ExcelApi 1.3]
         */
        refreshAll(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.PivotTableCollectionLoadOptions & Excel.Interfaces.CollectionLoadOptions): Excel.PivotTableCollection;
        load(option?: string | string[]): Excel.PivotTableCollection;
        load(option?: OfficeExtension.LoadOption): Excel.PivotTableCollection;
        toJSON(): Excel.Interfaces.PivotTableCollectionData;
    }
    /**
     *
     * Represents an Excel PivotTable.
     *
     * [Api set: ExcelApi 1.3]
     */
    export class PivotTable extends OfficeExtension.ClientObject {
        /**
         *
         * The worksheet containing the current PivotTable.
         *
         * [Api set: ExcelApi 1.3]
         */
        readonly worksheet: Excel.Worksheet;
        /**
         *
         * Id of the PivotTable.
         *
         * [Api set: ExcelApi 1.5]
         */
        readonly id: string;
        /**
         *
         * Name of the PivotTable.
         *
         * [Api set: ExcelApi 1.3]
         */
        name: string;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.PivotTableUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: PivotTable): void;
        /**
         *
         * Refreshes the PivotTable.
         *
         * [Api set: ExcelApi 1.3]
         */
        refresh(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.PivotTableLoadOptions): Excel.PivotTable;
        load(option?: string | string[]): Excel.PivotTable;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.PivotTable;
        toJSON(): Excel.Interfaces.PivotTableData;
    }
    /**
     *
     * Represents workbook properties.
     *
     * [Api set: ExcelApi 1.7]
     */
    export class DocumentProperties extends OfficeExtension.ClientObject {
        /**
         *
         * Gets the collection of custom properties of the workbook. Read only.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly custom: Excel.CustomPropertyCollection;
        /**
         *
         * Gets or sets the author of the workbook.
         *
         * [Api set: ExcelApi 1.7]
         */
        author: string;
        /**
         *
         * Gets or sets the category of the workbook.
         *
         * [Api set: ExcelApi 1.7]
         */
        category: string;
        /**
         *
         * Gets or sets the comments of the workbook.
         *
         * [Api set: ExcelApi 1.7]
         */
        comments: string;
        /**
         *
         * Gets or sets the company of the workbook.
         *
         * [Api set: ExcelApi 1.7]
         */
        company: string;
        /**
         *
         * Gets the creation date of the workbook. Read only.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly creationDate: Date;
        /**
         *
         * Gets or sets the keywords of the workbook.
         *
         * [Api set: ExcelApi 1.7]
         */
        keywords: string;
        /**
         *
         * Gets the last author of the workbook. Read only.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly lastAuthor: string;
        /**
         *
         * Gets or sets the manager of the workbook.
         *
         * [Api set: ExcelApi 1.7]
         */
        manager: string;
        /**
         *
         * Gets the revision number of the workbook. Read only.
         *
         * [Api set: ExcelApi 1.7]
         */
        revisionNumber: number;
        /**
         *
         * Gets or sets the subject of the workbook.
         *
         * [Api set: ExcelApi 1.7]
         */
        subject: string;
        /**
         *
         * Gets or sets the title of the workbook.
         *
         * [Api set: ExcelApi 1.7]
         */
        title: string;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.DocumentPropertiesUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: DocumentProperties): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.DocumentPropertiesLoadOptions): Excel.DocumentProperties;
        load(option?: string | string[]): Excel.DocumentProperties;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.DocumentProperties;
        toJSON(): Excel.Interfaces.DocumentPropertiesData;
    }
    /**
     *
     * Represents a custom property.
     *
     * [Api set: ExcelApi 1.7]
     */
    export class CustomProperty extends OfficeExtension.ClientObject {
        /**
         *
         * Gets the key of the custom property. Read only.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly key: string;
        /**
         *
         * Gets the value type of the custom property. Read only.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly type: Excel.DocumentPropertyType | "Number" | "Boolean" | "Date" | "String" | "Float";
        /**
         *
         * Gets or sets the value of the custom property.
         *
         * [Api set: ExcelApi 1.7]
         */
        value: any;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.CustomPropertyUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: CustomProperty): void;
        /**
         *
         * Deletes the custom property.
         *
         * [Api set: ExcelApi 1.7]
         */
        delete(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.CustomPropertyLoadOptions): Excel.CustomProperty;
        load(option?: string | string[]): Excel.CustomProperty;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.CustomProperty;
        toJSON(): Excel.Interfaces.CustomPropertyData;
    }
    /**
     *
     * Contains the collection of customProperty objects.
     *
     * [Api set: ExcelApi 1.7]
     */
    export class CustomPropertyCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        readonly items: Excel.CustomProperty[];
        /**
         *
         * Creates a new or sets an existing custom property.
         *
         * [Api set: ExcelApi 1.7]
         *
         * @param key - Required. The custom property's key, which is case-insensitive.
         * @param value - Required. The custom property's value.
         */
        add(key: string, value: any): Excel.CustomProperty;
        /**
         *
         * Deletes all custom properties in this collection.
         *
         * [Api set: ExcelApi 1.7]
         */
        deleteAll(): void;
        /**
         *
         * Gets the count of custom properties.
         *
         * [Api set: ExcelApi 1.7]
         */
        getCount(): OfficeExtension.ClientResult<number>;
        /**
         *
         * Gets a custom property object by its key, which is case-insensitive. Throws if the custom property does not exist.
         *
         * [Api set: ExcelApi 1.7]
         *
         * @param key - The key that identifies the custom property object.
         */
        getItem(key: string): Excel.CustomProperty;
        /**
         *
         * Gets a custom property object by its key, which is case-insensitive. Returns a null object if the custom property does not exist.
         *
         * [Api set: ExcelApi 1.7]
         *
         * @param key - Required. The key that identifies the custom property object.
         */
        getItemOrNullObject(key: string): Excel.CustomProperty;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.CustomPropertyCollectionLoadOptions & Excel.Interfaces.CollectionLoadOptions): Excel.CustomPropertyCollection;
        load(option?: string | string[]): Excel.CustomPropertyCollection;
        load(option?: OfficeExtension.LoadOption): Excel.CustomPropertyCollection;
        toJSON(): Excel.Interfaces.CustomPropertyCollectionData;
    }
    /**
     *
     * Represents a collection of all the conditional formats that are overlap the range.
     *
     * [Api set: ExcelApi 1.6]
     */
    export class ConditionalFormatCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        readonly items: Excel.ConditionalFormat[];
        /**
         *
         * Adds a new conditional format to the collection at the first/top priority.
         *
         * [Api set: ExcelApi 1.6]
         *
         * @param type - The type of conditional format being added. See Excel.ConditionalFormatType for details.
         */
        add(type: Excel.ConditionalFormatType): Excel.ConditionalFormat;
        /**
         *
         * Adds a new conditional format to the collection at the first/top priority.
         *
         * [Api set: ExcelApi 1.6]
         *
         * @param type - The type of conditional format being added. See Excel.ConditionalFormatType for details.
         */
        add(type: "Custom" | "DataBar" | "ColorScale" | "IconSet" | "TopBottom" | "PresetCriteria" | "ContainsText" | "CellValue"): Excel.ConditionalFormat;
        /**
         *
         * Clears all conditional formats active on the current specified range.
         *
         * [Api set: ExcelApi 1.6]
         */
        clearAll(): void;
        /**
         *
         * Returns the number of conditional formats in the workbook. Read-only.
         *
         * [Api set: ExcelApi 1.6]
         */
        getCount(): OfficeExtension.ClientResult<number>;
        /**
         *
         * Returns a conditional format for the given ID.
         *
         * [Api set: ExcelApi 1.6]
         *
         * @param id - The id of the conditional format.
         * @returns Conditional Format object.
         */
        getItem(id: string): Excel.ConditionalFormat;
        /**
         *
         * Returns a conditional format at the given index.
         *
         * [Api set: ExcelApi 1.6]
         *
         * @param index - Index of the conditional formats to be retrieved.
         */
        getItemAt(index: number): Excel.ConditionalFormat;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ConditionalFormatCollectionLoadOptions & Excel.Interfaces.CollectionLoadOptions): Excel.ConditionalFormatCollection;
        load(option?: string | string[]): Excel.ConditionalFormatCollection;
        load(option?: OfficeExtension.LoadOption): Excel.ConditionalFormatCollection;
        toJSON(): Excel.Interfaces.ConditionalFormatCollectionData;
    }
    /**
     *
     * An object encapsulating a conditional format's range, format, rule, and other properties.
     *
     * [Api set: ExcelApi 1.6]
     */
    export class ConditionalFormat extends OfficeExtension.ClientObject {
        /**
         *
         * Returns the cell value conditional format properties if the current conditional format is a CellValue type.
            For example to format all cells between 5 and 10.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly cellValue: Excel.CellValueConditionalFormat;
        /**
         *
         * Returns the cell value conditional format properties if the current conditional format is a CellValue type.
            For example to format all cells between 5 and 10.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly cellValueOrNullObject: Excel.CellValueConditionalFormat;
        /**
         *
         * Returns the ColorScale conditional format properties if the current conditional format is an ColorScale type.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly colorScale: Excel.ColorScaleConditionalFormat;
        /**
         *
         * Returns the ColorScale conditional format properties if the current conditional format is an ColorScale type.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly colorScaleOrNullObject: Excel.ColorScaleConditionalFormat;
        /**
         *
         * Returns the custom conditional format properties if the current conditional format is a custom type.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly custom: Excel.CustomConditionalFormat;
        /**
         *
         * Returns the custom conditional format properties if the current conditional format is a custom type.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly customOrNullObject: Excel.CustomConditionalFormat;
        /**
         *
         * Returns the data bar properties if the current conditional format is a data bar.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly dataBar: Excel.DataBarConditionalFormat;
        /**
         *
         * Returns the data bar properties if the current conditional format is a data bar.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly dataBarOrNullObject: Excel.DataBarConditionalFormat;
        /**
         *
         * Returns the IconSet conditional format properties if the current conditional format is an IconSet type.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly iconSet: Excel.IconSetConditionalFormat;
        /**
         *
         * Returns the IconSet conditional format properties if the current conditional format is an IconSet type.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly iconSetOrNullObject: Excel.IconSetConditionalFormat;
        /**
         *
         * Returns the preset criteria conditional format such as above average/below average/unique values/contains blank/nonblank/error/noerror properties.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly preset: Excel.PresetCriteriaConditionalFormat;
        /**
         *
         * Returns the preset criteria conditional format such as above average/below average/unique values/contains blank/nonblank/error/noerror properties.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly presetOrNullObject: Excel.PresetCriteriaConditionalFormat;
        /**
         *
         * Returns the specific text conditional format properties if the current conditional format is a text type.
            For example to format cells matching the word "Text".
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly textComparison: Excel.TextConditionalFormat;
        /**
         *
         * Returns the specific text conditional format properties if the current conditional format is a text type.
            For example to format cells matching the word "Text".
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly textComparisonOrNullObject: Excel.TextConditionalFormat;
        /**
         *
         * Returns the Top/Bottom conditional format properties if the current conditional format is an TopBottom type.
            For example to format the top 10% or bottom 10 items.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly topBottom: Excel.TopBottomConditionalFormat;
        /**
         *
         * Returns the Top/Bottom conditional format properties if the current conditional format is an TopBottom type.
            For example to format the top 10% or bottom 10 items.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly topBottomOrNullObject: Excel.TopBottomConditionalFormat;
        /**
         *
         * The Priority of the Conditional Format within the current ConditionalFormatCollection.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly id: string;
        /**
         *
         * The priority (or index) within the conditional format collection that this conditional format currently exists in. Changing this also
            changes other conditional formats' priorities, to allow for a contiguous priority order.
            Use a negative priority to begin from the back.
            Priorities greater than than bounds will get and set to the maximum (or minimum if negative) priority.
            Also note that if you change the priority, you have to re-fetch a new copy of the object at that new priority location if you want to make further changes to it.
         *
         * [Api set: ExcelApi 1.6]
         */
        priority: number;
        /**
         *
         * If the conditions of this conditional format are met, no lower-priority formats shall take effect on that cell.
            Null on databars, icon sets, and colorscales as there's no concept of StopIfTrue for these
         *
         * [Api set: ExcelApi 1.6]
         */
        stopIfTrue: boolean;
        /**
         *
         * A type of conditional format. Only one can be set at a time. Read-Only.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly type: Excel.ConditionalFormatType | "Custom" | "DataBar" | "ColorScale" | "IconSet" | "TopBottom" | "PresetCriteria" | "ContainsText" | "CellValue";
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ConditionalFormatUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ConditionalFormat): void;
        /**
         *
         * Deletes this conditional format.
         *
         * [Api set: ExcelApi 1.6]
         */
        delete(): void;
        /**
         *
         * Returns the range the conditonal format is applied to or a null object if the range is discontiguous. Read-only.
         *
         * [Api set: ExcelApi 1.6]
         */
        getRange(): Excel.Range;
        /**
         *
         * Returns the range the conditonal format is applied to or a null object if the range is discontiguous. Read-only.
         *
         * [Api set: ExcelApi 1.6]
         */
        getRangeOrNullObject(): Excel.Range;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ConditionalFormatLoadOptions): Excel.ConditionalFormat;
        load(option?: string | string[]): Excel.ConditionalFormat;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ConditionalFormat;
        toJSON(): Excel.Interfaces.ConditionalFormatData;
    }
    /**
     *
     * Represents an Excel Conditional Data Bar Type.
     *
     * [Api set: ExcelApi 1.6]
     */
    export class DataBarConditionalFormat extends OfficeExtension.ClientObject {
        /**
         *
         * Representation of all values to the left of the axis in an Excel data bar.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly negativeFormat: Excel.ConditionalDataBarNegativeFormat;
        /**
         *
         * Representation of all values to the right of the axis in an Excel data bar.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly positiveFormat: Excel.ConditionalDataBarPositiveFormat;
        /**
         *
         * HTML color code representing the color of the Axis line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
            "" (empty string) if no axis is present or set.
         *
         * [Api set: ExcelApi 1.6]
         */
        axisColor: string;
        /**
         *
         * Representation of how the axis is determined for an Excel data bar.
         *
         * [Api set: ExcelApi 1.6]
         */
        axisFormat: Excel.ConditionalDataBarAxisFormat | "Automatic" | "None" | "CellMidPoint";
        /**
         *
         * Represents the direction that the data bar graphic should be based on.
         *
         * [Api set: ExcelApi 1.6]
         */
        barDirection: Excel.ConditionalDataBarDirection | "Context" | "LeftToRight" | "RightToLeft";
        /**
         *
         * The rule for what consistutes the lower bound (and how to calculate it, if applicable) for a data bar.
         *
         * [Api set: ExcelApi 1.6]
         */
        lowerBoundRule: Excel.ConditionalDataBarRule;
        /**
         *
         * If true, hides the values from the cells where the data bar is applied.
         *
         * [Api set: ExcelApi 1.6]
         */
        showDataBarOnly: boolean;
        /**
         *
         * The rule for what constitutes the upper bound (and how to calculate it, if applicable) for a data bar.
         *
         * [Api set: ExcelApi 1.6]
         */
        upperBoundRule: Excel.ConditionalDataBarRule;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.DataBarConditionalFormatUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: DataBarConditionalFormat): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.DataBarConditionalFormatLoadOptions): Excel.DataBarConditionalFormat;
        load(option?: string | string[]): Excel.DataBarConditionalFormat;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.DataBarConditionalFormat;
        toJSON(): Excel.Interfaces.DataBarConditionalFormatData;
    }
    /**
     *
     * Represents a conditional format DataBar Format for the positive side of the data bar.
     *
     * [Api set: ExcelApi 1.6]
     */
    export class ConditionalDataBarPositiveFormat extends OfficeExtension.ClientObject {
        /**
         *
         * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
            "" (empty string) if no border is present or set.
         *
         * [Api set: ExcelApi 1.6]
         */
        borderColor: string;
        /**
         *
         * HTML color code representing the fill color, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
         *
         * [Api set: ExcelApi 1.6]
         */
        fillColor: string;
        /**
         *
         * Boolean representation of whether or not the DataBar has a gradient.
         *
         * [Api set: ExcelApi 1.6]
         */
        gradientFill: boolean;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ConditionalDataBarPositiveFormatUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ConditionalDataBarPositiveFormat): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ConditionalDataBarPositiveFormatLoadOptions): Excel.ConditionalDataBarPositiveFormat;
        load(option?: string | string[]): Excel.ConditionalDataBarPositiveFormat;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ConditionalDataBarPositiveFormat;
        toJSON(): Excel.Interfaces.ConditionalDataBarPositiveFormatData;
    }
    /**
     *
     * Represents a conditional format DataBar Format for the negative side of the data bar.
     *
     * [Api set: ExcelApi 1.6]
     */
    export class ConditionalDataBarNegativeFormat extends OfficeExtension.ClientObject {
        /**
         *
         * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
            "Empty String" if no border is present or set.
         *
         * [Api set: ExcelApi 1.6]
         */
        borderColor: string;
        /**
         *
         * HTML color code representing the fill color, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
         *
         * [Api set: ExcelApi 1.6]
         */
        fillColor: string;
        /**
         *
         * Boolean representation of whether or not the negative DataBar has the same border color as the positive DataBar.
         *
         * [Api set: ExcelApi 1.6]
         */
        matchPositiveBorderColor: boolean;
        /**
         *
         * Boolean representation of whether or not the negative DataBar has the same fill color as the positive DataBar.
         *
         * [Api set: ExcelApi 1.6]
         */
        matchPositiveFillColor: boolean;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ConditionalDataBarNegativeFormatUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ConditionalDataBarNegativeFormat): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ConditionalDataBarNegativeFormatLoadOptions): Excel.ConditionalDataBarNegativeFormat;
        load(option?: string | string[]): Excel.ConditionalDataBarNegativeFormat;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ConditionalDataBarNegativeFormat;
        toJSON(): Excel.Interfaces.ConditionalDataBarNegativeFormatData;
    }
    /**
     *
     * Represents a rule-type for a Data Bar.
     *
     * [Api set: ExcelApi 1.6]
     */
    export interface ConditionalDataBarRule {
        /**
         *
         * The formula, if required, to evaluate the databar rule on.
         *
         * [Api set: ExcelApi 1.6]
         */
        formula?: string;
        /**
         *
         * The type of rule for the databar.
         *
         * [Api set: ExcelApi 1.6]
         */
        type: Excel.ConditionalFormatRuleType | "Invalid" | "Automatic" | "LowestValue" | "HighestValue" | "Number" | "Percent" | "Formula" | "Percentile";
    }
    /**
     *
     * Represents a custom conditional format type.
     *
     * [Api set: ExcelApi 1.6]
     */
    export class CustomConditionalFormat extends OfficeExtension.ClientObject {
        /**
         *
         * Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly format: Excel.ConditionalRangeFormat;
        /**
         *
         * Represents the Rule object on this conditional format.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly rule: Excel.ConditionalFormatRule;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.CustomConditionalFormatUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: CustomConditionalFormat): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.CustomConditionalFormatLoadOptions): Excel.CustomConditionalFormat;
        load(option?: string | string[]): Excel.CustomConditionalFormat;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.CustomConditionalFormat;
        toJSON(): Excel.Interfaces.CustomConditionalFormatData;
    }
    /**
     *
     * Represents a rule, for all traditional rule/format pairings.
     *
     * [Api set: ExcelApi 1.6]
     */
    export class ConditionalFormatRule extends OfficeExtension.ClientObject {
        /**
         *
         * The formula, if required, to evaluate the conditional format rule on.
         *
         * [Api set: ExcelApi 1.6]
         */
        formula: string;
        /**
         *
         * The formula, if required, to evaluate the conditional format rule on in the user's language.
         *
         * [Api set: ExcelApi 1.6]
         */
        formulaLocal: string;
        /**
         *
         * The formula, if required, to evaluate the conditional format rule on in R1C1-style notation.
         *
         * [Api set: ExcelApi 1.6]
         */
        formulaR1C1: string;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ConditionalFormatRuleUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ConditionalFormatRule): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ConditionalFormatRuleLoadOptions): Excel.ConditionalFormatRule;
        load(option?: string | string[]): Excel.ConditionalFormatRule;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ConditionalFormatRule;
        toJSON(): Excel.Interfaces.ConditionalFormatRuleData;
    }
    /**
     *
     * Represents an IconSet criteria for conditional formatting.
     *
     * [Api set: ExcelApi 1.6]
     */
    export class IconSetConditionalFormat extends OfficeExtension.ClientObject {
        /**
         *
         * An array of Criteria and IconSets for the rules and potential custom icons for conditional icons. Note that for the first criterion only the custom icon can be modified, while type, formula and operator will be ignored when set.
         *
         * [Api set: ExcelApi 1.6]
         */
        criteria: Excel.ConditionalIconCriterion[];
        /**
         *
         * If true, reverses the icon orders for the IconSet. Note that this cannot be set if custom icons are used.
         *
         * [Api set: ExcelApi 1.6]
         */
        reverseIconOrder: boolean;
        /**
         *
         * If true, hides the values and only shows icons.
         *
         * [Api set: ExcelApi 1.6]
         */
        showIconOnly: boolean;
        /**
         *
         * If set, displays the IconSet option for the conditional format.
         *
         * [Api set: ExcelApi 1.6]
         */
        style: Excel.IconSet | "Invalid" | "ThreeArrows" | "ThreeArrowsGray" | "ThreeFlags" | "ThreeTrafficLights1" | "ThreeTrafficLights2" | "ThreeSigns" | "ThreeSymbols" | "ThreeSymbols2" | "FourArrows" | "FourArrowsGray" | "FourRedToBlack" | "FourRating" | "FourTrafficLights" | "FiveArrows" | "FiveArrowsGray" | "FiveRating" | "FiveQuarters" | "ThreeStars" | "ThreeTriangles" | "FiveBoxes";
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.IconSetConditionalFormatUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: IconSetConditionalFormat): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.IconSetConditionalFormatLoadOptions): Excel.IconSetConditionalFormat;
        load(option?: string | string[]): Excel.IconSetConditionalFormat;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.IconSetConditionalFormat;
        toJSON(): Excel.Interfaces.IconSetConditionalFormatData;
    }
    /**
     *
     * Represents an Icon Criterion which contains a type, value, an Operator, and an optional custom icon, if not using an iconset.
     *
     * [Api set: ExcelApi 1.6]
     */
    export interface ConditionalIconCriterion {
        /**
         *
         * The custom icon for the current criterion if different from the default IconSet, else null will be returned.
         *
         * [Api set: ExcelApi 1.6]
         */
        customIcon?: Excel.Icon;
        /**
         *
         * A number or a formula depending on the type.
         *
         * [Api set: ExcelApi 1.6]
         */
        formula: string;
        /**
         *
         * GreaterThan or GreaterThanOrEqual for each of the rule type for the Icon conditional format.
         *
         * [Api set: ExcelApi 1.6]
         */
        operator: Excel.ConditionalIconCriterionOperator | "Invalid" | "GreaterThan" | "GreaterThanOrEqual";
        /**
         *
         * What the icon conditional formula should be based on.
         *
         * [Api set: ExcelApi 1.6]
         */
        type: Excel.ConditionalFormatIconRuleType | "Invalid" | "Number" | "Percent" | "Formula" | "Percentile";
    }
    /**
     *
     * Represents an IconSet criteria for conditional formatting.
     *
     * [Api set: ExcelApi 1.6]
     */
    export class ColorScaleConditionalFormat extends OfficeExtension.ClientObject {
        /**
         *
         * The criteria of the color scale. Midpoint is optional when using a two point color scale.
         *
         * [Api set: ExcelApi 1.6]
         */
        criteria: Excel.ConditionalColorScaleCriteria;
        /**
         *
         * If true the color scale will have three points (minimum, midpoint, maximum), otherwise it will have two (minimum, maximum).
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly threeColorScale: boolean;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ColorScaleConditionalFormatUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ColorScaleConditionalFormat): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ColorScaleConditionalFormatLoadOptions): Excel.ColorScaleConditionalFormat;
        load(option?: string | string[]): Excel.ColorScaleConditionalFormat;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ColorScaleConditionalFormat;
        toJSON(): Excel.Interfaces.ColorScaleConditionalFormatData;
    }
    /**
     *
     * Represents the criteria of the color scale.
     *
     * [Api set: ExcelApi 1.6]
     */
    export interface ConditionalColorScaleCriteria {
        /**
         *
         * The maximum point Color Scale Criterion.
         *
         * [Api set: ExcelApi 1.6]
         */
        maximum: Excel.ConditionalColorScaleCriterion;
        /**
         *
         * The midpoint Color Scale Criterion if the color scale is a 3-color scale.
         *
         * [Api set: ExcelApi 1.6]
         */
        midpoint?: Excel.ConditionalColorScaleCriterion;
        /**
         *
         * The minimum point Color Scale Criterion.
         *
         * [Api set: ExcelApi 1.6]
         */
        minimum: Excel.ConditionalColorScaleCriterion;
    }
    /**
     *
     * Represents a Color Scale Criterion which contains a type, value and a color.
     *
     * [Api set: ExcelApi 1.6]
     */
    export interface ConditionalColorScaleCriterion {
        /**
         *
         * HTML color code representation of the color scale color. E.g. #FF0000 represents Red.
         *
         * [Api set: ExcelApi 1.6]
         */
        color?: string;
        /**
         *
         * A number, a formula, or null (if Type is LowestValue).
         *
         * [Api set: ExcelApi 1.6]
         */
        formula?: string;
        /**
         *
         * What the icon conditional formula should be based on.
         *
         * [Api set: ExcelApi 1.6]
         */
        type: Excel.ConditionalFormatColorCriterionType | "Invalid" | "LowestValue" | "HighestValue" | "Number" | "Percent" | "Formula" | "Percentile";
    }
    /**
     *
     * Represents a Top/Bottom conditional format.
     *
     * [Api set: ExcelApi 1.6]
     */
    export class TopBottomConditionalFormat extends OfficeExtension.ClientObject {
        /**
         *
         * Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly format: Excel.ConditionalRangeFormat;
        /**
         *
         * The criteria of the Top/Bottom conditional format.
         *
         * [Api set: ExcelApi 1.6]
         */
        rule: Excel.ConditionalTopBottomRule;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.TopBottomConditionalFormatUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: TopBottomConditionalFormat): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.TopBottomConditionalFormatLoadOptions): Excel.TopBottomConditionalFormat;
        load(option?: string | string[]): Excel.TopBottomConditionalFormat;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.TopBottomConditionalFormat;
        toJSON(): Excel.Interfaces.TopBottomConditionalFormatData;
    }
    /**
     *
     * Represents the rule of the top/bottom conditional format.
     *
     * [Api set: ExcelApi 1.6]
     */
    export interface ConditionalTopBottomRule {
        /**
         *
         * The rank between 1 and 1000 for numeric ranks or 1 and 100 for percent ranks.
         *
         * [Api set: ExcelApi 1.6]
         */
        rank: number;
        /**
         *
         * Format values based on the top or bottom rank.
         *
         * [Api set: ExcelApi 1.6]
         */
        type: Excel.ConditionalTopBottomCriterionType | "Invalid" | "TopItems" | "TopPercent" | "BottomItems" | "BottomPercent";
    }
    /**
     *
     * Represents the the preset criteria conditional format such as above average/below average/unique values/contains blank/nonblank/error/noerror.
     *
     * [Api set: ExcelApi 1.6]
     */
    export class PresetCriteriaConditionalFormat extends OfficeExtension.ClientObject {
        /**
         *
         * Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly format: Excel.ConditionalRangeFormat;
        /**
         *
         * The rule of the conditional format.
         *
         * [Api set: ExcelApi 1.6]
         */
        rule: Excel.ConditionalPresetCriteriaRule;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.PresetCriteriaConditionalFormatUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: PresetCriteriaConditionalFormat): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.PresetCriteriaConditionalFormatLoadOptions): Excel.PresetCriteriaConditionalFormat;
        load(option?: string | string[]): Excel.PresetCriteriaConditionalFormat;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.PresetCriteriaConditionalFormat;
        toJSON(): Excel.Interfaces.PresetCriteriaConditionalFormatData;
    }
    /**
     *
     * Represents the Preset Criteria Conditional Format Rule
     *
     * [Api set: ExcelApi 1.6]
     */
    export interface ConditionalPresetCriteriaRule {
        /**
         *
         * The criterion of the conditional format.
         *
         * [Api set: ExcelApi 1.6]
         */
        criterion: Excel.ConditionalFormatPresetCriterion | "Invalid" | "Blanks" | "NonBlanks" | "Errors" | "NonErrors" | "Yesterday" | "Today" | "Tomorrow" | "LastSevenDays" | "LastWeek" | "ThisWeek" | "NextWeek" | "LastMonth" | "ThisMonth" | "NextMonth" | "AboveAverage" | "BelowAverage" | "EqualOrAboveAverage" | "EqualOrBelowAverage" | "OneStdDevAboveAverage" | "OneStdDevBelowAverage" | "TwoStdDevAboveAverage" | "TwoStdDevBelowAverage" | "ThreeStdDevAboveAverage" | "ThreeStdDevBelowAverage" | "UniqueValues" | "DuplicateValues";
    }
    /**
     *
     * Represents a specific text conditional format.
     *
     * [Api set: ExcelApi 1.6]
     */
    export class TextConditionalFormat extends OfficeExtension.ClientObject {
        /**
         *
         * Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly format: Excel.ConditionalRangeFormat;
        /**
         *
         * The rule of the conditional format.
         *
         * [Api set: ExcelApi 1.6]
         */
        rule: Excel.ConditionalTextComparisonRule;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.TextConditionalFormatUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: TextConditionalFormat): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.TextConditionalFormatLoadOptions): Excel.TextConditionalFormat;
        load(option?: string | string[]): Excel.TextConditionalFormat;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.TextConditionalFormat;
        toJSON(): Excel.Interfaces.TextConditionalFormatData;
    }
    /**
     *
     * Represents a Cell Value Conditional Format Rule
     *
     * [Api set: ExcelApi 1.6]
     */
    export interface ConditionalTextComparisonRule {
        /**
         *
         * The operator of the text conditional format.
         *
         * [Api set: ExcelApi 1.6]
         */
        operator: Excel.ConditionalTextOperator | "Invalid" | "Contains" | "NotContains" | "BeginsWith" | "EndsWith";
        /**
         *
         * The Text value of conditional format.
         *
         * [Api set: ExcelApi 1.6]
         */
        text: string;
    }
    /**
     *
     * Represents a cell value conditional format.
     *
     * [Api set: ExcelApi 1.6]
     */
    export class CellValueConditionalFormat extends OfficeExtension.ClientObject {
        /**
         *
         * Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly format: Excel.ConditionalRangeFormat;
        /**
         *
         * Represents the Rule object on this conditional format.
         *
         * [Api set: ExcelApi 1.6]
         */
        rule: Excel.ConditionalCellValueRule;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.CellValueConditionalFormatUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: CellValueConditionalFormat): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.CellValueConditionalFormatLoadOptions): Excel.CellValueConditionalFormat;
        load(option?: string | string[]): Excel.CellValueConditionalFormat;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.CellValueConditionalFormat;
        toJSON(): Excel.Interfaces.CellValueConditionalFormatData;
    }
    /**
     *
     * Represents a Cell Value Conditional Format Rule
     *
     * [Api set: ExcelApi 1.6]
     */
    export interface ConditionalCellValueRule {
        /**
         *
         * The formula, if required, to evaluate the conditional format rule on.
         *
         * [Api set: ExcelApi 1.6]
         */
        formula1: string;
        /**
         *
         * The formula, if required, to evaluate the conditional format rule on.
         *
         * [Api set: ExcelApi 1.6]
         */
        formula2?: string;
        /**
         *
         * The operator of the text conditional format.
         *
         * [Api set: ExcelApi 1.6]
         */
        operator: Excel.ConditionalCellValueOperator | "Invalid" | "Between" | "NotBetween" | "EqualTo" | "NotEqualTo" | "GreaterThan" | "LessThan" | "GreaterThanOrEqual" | "LessThanOrEqual";
    }
    /**
     *
     * A format object encapsulating the conditional formats range's font, fill, borders, and other properties.
     *
     * [Api set: ExcelApi 1.6]
     */
    export class ConditionalRangeFormat extends OfficeExtension.ClientObject {
        /**
         *
         * Collection of border objects that apply to the overall conditional format range.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly borders: Excel.ConditionalRangeBorderCollection;
        /**
         *
         * Returns the fill object defined on the overall conditional format range.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly fill: Excel.ConditionalRangeFill;
        /**
         *
         * Returns the font object defined on the overall conditional format range.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly font: Excel.ConditionalRangeFont;
        /**
         *
         * Represents Excel's number format code for the given range. Cleared if null is passed in.
         *
         * [Api set: ExcelApi 1.6]
         */
        numberFormat: any;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ConditionalRangeFormatUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ConditionalRangeFormat): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ConditionalRangeFormatLoadOptions): Excel.ConditionalRangeFormat;
        load(option?: string | string[]): Excel.ConditionalRangeFormat;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ConditionalRangeFormat;
        toJSON(): Excel.Interfaces.ConditionalRangeFormatData;
    }
    /**
     *
     * This object represents the font attributes (font style,, color, etc.) for an object.
     *
     * [Api set: ExcelApi 1.6]
     */
    export class ConditionalRangeFont extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the bold status of font.
         *
         * [Api set: ExcelApi 1.6]
         */
        bold: boolean;
        /**
         *
         * HTML color code representation of the text color. E.g. #FF0000 represents Red.
         *
         * [Api set: ExcelApi 1.6]
         */
        color: string;
        /**
         *
         * Represents the italic status of the font.
         *
         * [Api set: ExcelApi 1.6]
         */
        italic: boolean;
        /**
         *
         * Represents the strikethrough status of the font.
         *
         * [Api set: ExcelApi 1.6]
         */
        strikethrough: boolean;
        /**
         *
         * Type of underline applied to the font. See Excel.ConditionalRangeFontUnderlineStyle for details.
         *
         * [Api set: ExcelApi 1.6]
         */
        underline: Excel.ConditionalRangeFontUnderlineStyle | "None" | "Single" | "Double";
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ConditionalRangeFontUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ConditionalRangeFont): void;
        /**
         *
         * Resets the font formats.
         *
         * [Api set: ExcelApi 1.6]
         */
        clear(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ConditionalRangeFontLoadOptions): Excel.ConditionalRangeFont;
        load(option?: string | string[]): Excel.ConditionalRangeFont;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ConditionalRangeFont;
        toJSON(): Excel.Interfaces.ConditionalRangeFontData;
    }
    /**
     *
     * Represents the background of a conditional range object.
     *
     * [Api set: ExcelApi 1.6]
     */
    export class ConditionalRangeFill extends OfficeExtension.ClientObject {
        /**
         *
         * HTML color code representing the color of the fill, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
         *
         * [Api set: ExcelApi 1.6]
         */
        color: string;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ConditionalRangeFillUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ConditionalRangeFill): void;
        /**
         *
         * Resets the fill.
         *
         * [Api set: ExcelApi 1.6]
         */
        clear(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ConditionalRangeFillLoadOptions): Excel.ConditionalRangeFill;
        load(option?: string | string[]): Excel.ConditionalRangeFill;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ConditionalRangeFill;
        toJSON(): Excel.Interfaces.ConditionalRangeFillData;
    }
    /**
     *
     * Represents the border of an object.
     *
     * [Api set: ExcelApi 1.6]
     */
    export class ConditionalRangeBorder extends OfficeExtension.ClientObject {
        /**
         *
         * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
         *
         * [Api set: ExcelApi 1.6]
         */
        color: string;
        /**
         *
         * Constant value that indicates the specific side of the border. See Excel.ConditionalRangeBorderIndex for details. Read-only.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly sideIndex: Excel.ConditionalRangeBorderIndex | "EdgeTop" | "EdgeBottom" | "EdgeLeft" | "EdgeRight";
        /**
         *
         * One of the constants of line style specifying the line style for the border. See Excel.BorderLineStyle for details.
         *
         * [Api set: ExcelApi 1.6]
         */
        style: Excel.ConditionalRangeBorderLineStyle | "None" | "Continuous" | "Dash" | "DashDot" | "DashDotDot" | "Dot";
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.ConditionalRangeBorderUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: ConditionalRangeBorder): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ConditionalRangeBorderLoadOptions): Excel.ConditionalRangeBorder;
        load(option?: string | string[]): Excel.ConditionalRangeBorder;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.ConditionalRangeBorder;
        toJSON(): Excel.Interfaces.ConditionalRangeBorderData;
    }
    /**
     *
     * Represents the border objects that make up range border.
     *
     * [Api set: ExcelApi 1.6]
     */
    export class ConditionalRangeBorderCollection extends OfficeExtension.ClientObject {
        /**
         *
         * Gets the top border
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly bottom: Excel.ConditionalRangeBorder;
        /**
         *
         * Gets the top border
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly left: Excel.ConditionalRangeBorder;
        /**
         *
         * Gets the top border
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly right: Excel.ConditionalRangeBorder;
        /**
         *
         * Gets the top border
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly top: Excel.ConditionalRangeBorder;
        /** Gets the loaded child items in this collection. */
        readonly items: Excel.ConditionalRangeBorder[];
        /**
         *
         * Number of border objects in the collection. Read-only.
         *
         * [Api set: ExcelApi 1.6]
         */
        readonly count: number;
        /**
         *
         * Gets a border object using its name
         *
         * [Api set: ExcelApi 1.6]
         *
         * @param index - Index value of the border object to be retrieved. See Excel.ConditionalRangeBorderIndex for details.
         */
        getItem(index: Excel.ConditionalRangeBorderIndex): Excel.ConditionalRangeBorder;
        /**
         *
         * Gets a border object using its name
         *
         * [Api set: ExcelApi 1.6]
         *
         * @param index - Index value of the border object to be retrieved. See Excel.ConditionalRangeBorderIndex for details.
         */
        getItem(index: "EdgeTop" | "EdgeBottom" | "EdgeLeft" | "EdgeRight"): Excel.ConditionalRangeBorder;
        /**
         *
         * Gets a border object using its index
         *
         * [Api set: ExcelApi 1.6]
         *
         * @param index - Index value of the object to be retrieved. Zero-indexed.
         */
        getItemAt(index: number): Excel.ConditionalRangeBorder;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.ConditionalRangeBorderCollectionLoadOptions & Excel.Interfaces.CollectionLoadOptions): Excel.ConditionalRangeBorderCollection;
        load(option?: string | string[]): Excel.ConditionalRangeBorderCollection;
        load(option?: OfficeExtension.LoadOption): Excel.ConditionalRangeBorderCollection;
        toJSON(): Excel.Interfaces.ConditionalRangeBorderCollectionData;
    }
    /**
     *
     * An object encapsulating a style's format and other properties.
     *
     * [Api set: ExcelApi 1.7]
     */
    export class Style extends OfficeExtension.ClientObject {
        /**
         *
         * A Border collection of four Border objects that represent the style of the four borders.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly borders: Excel.RangeBorderCollection;
        /**
         *
         * The Fill of the style.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly fill: Excel.RangeFill;
        /**
         *
         * A Font object that represents the font of the style.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly font: Excel.RangeFont;
        /**
         *
         * Indicates if the style is a built-in style.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly builtIn: boolean;
        /**
         *
         * Indicates if the formula will be hidden when the worksheet is protected.
         *
         * [Api set: ExcelApi 1.7]
         */
        formulaHidden: boolean;
        /**
         *
         * Represents the horizontal alignment for the style. See Excel.HorizontalAlignment for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        horizontalAlignment: Excel.HorizontalAlignment | "General" | "Left" | "Center" | "Right" | "Fill" | "Justify" | "CenterAcrossSelection" | "Distributed";
        /**
         *
         * Indicates if the style includes the AutoIndent, HorizontalAlignment, VerticalAlignment, WrapText, IndentLevel, and TextOrientation properties.
         *
         * [Api set: ExcelApi 1.7]
         */
        includeAlignment: boolean;
        /**
         *
         * Indicates if the style includes the Color, ColorIndex, LineStyle, and Weight border properties.
         *
         * [Api set: ExcelApi 1.7]
         */
        includeBorder: boolean;
        /**
         *
         * Indicates if the style includes the Background, Bold, Color, ColorIndex, FontStyle, Italic, Name, Size, Strikethrough, Subscript, Superscript, and Underline font properties.
         *
         * [Api set: ExcelApi 1.7]
         */
        includeFont: boolean;
        /**
         *
         * Indicates if the style includes the NumberFormat property.
         *
         * [Api set: ExcelApi 1.7]
         */
        includeNumber: boolean;
        /**
         *
         * Indicates if the style includes the Color, ColorIndex, InvertIfNegative, Pattern, PatternColor, and PatternColorIndex interior properties.
         *
         * [Api set: ExcelApi 1.7]
         */
        includePatterns: boolean;
        /**
         *
         * Indicates if the style includes the FormulaHidden and Locked protection properties.
         *
         * [Api set: ExcelApi 1.7]
         */
        includeProtection: boolean;
        /**
         *
         * An integer from 0 to 250 that indicates the indent level for the style.
         *
         * [Api set: ExcelApi 1.7]
         */
        indentLevel: number;
        /**
         *
         * Indicates if the object is locked when the worksheet is protected.
         *
         * [Api set: ExcelApi 1.7]
         */
        locked: boolean;
        /**
         *
         * The name of the style.
         *
         * [Api set: ExcelApi 1.7]
         */
        readonly name: string;
        /**
         *
         * The format code of the number format for the style.
         *
         * [Api set: ExcelApi 1.7]
         */
        numberFormat: string;
        /**
         *
         * The localized format code of the number format for the style.
         *
         * [Api set: ExcelApi 1.7]
         */
        numberFormatLocal: string;
        /**
         *
         * The reading order for the style.
         *
         * [Api set: ExcelApi 1.7]
         */
        readingOrder: Excel.ReadingOrder | "Context" | "LeftToRight" | "RightToLeft";
        /**
         *
         * Indicates if text automatically shrinks to fit in the available column width.
         *
         * [Api set: ExcelApi 1.7]
         */
        shrinkToFit: boolean;
        /**
         *
         * Represents the vertical alignment for the style. See Excel.VerticalAlignment for details.
         *
         * [Api set: ExcelApi 1.7]
         */
        verticalAlignment: Excel.VerticalAlignment | "Top" | "Center" | "Bottom" | "Justify" | "Distributed";
        /**
         *
         * Indicates if Microsoft Excel wraps the text in the object.
         *
         * [Api set: ExcelApi 1.7]
         */
        wrapText: boolean;
        /** Sets multiple properties on the object at the same time, based on JSON input. */
        set(properties: Interfaces.StyleUpdateData, options?: OfficeExtension.UpdateOptions): void;
        /** Sets multiple properties on the object at the same time, based on an existing loaded object. */
        set(properties: Style): void;
        /**
         *
         * Deletes this style.
         *
         * [Api set: ExcelApi 1.7]
         */
        delete(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.StyleLoadOptions): Excel.Style;
        load(option?: string | string[]): Excel.Style;
        load(option?: {
            select?: string;
            expand?: string;
        }): Excel.Style;
        toJSON(): Excel.Interfaces.StyleData;
    }
    /**
     *
     * Represents a collection of all the styles.
     *
     * [Api set: ExcelApi 1.7]
     */
    export class StyleCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        readonly items: Excel.Style[];
        /**
         *
         * Adds a new style to the collection.
         *
         * [Api set: ExcelApi 1.7]
         *
         * @param name - Name of the style to be added.
         */
        add(name: string): void;
        /**
         *
         * Gets a style by name.
         *
         * [Api set: ExcelApi 1.7]
         *
         * @param name - Name of the style to be retrieved.
         */
        getItem(name: string): Excel.Style;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.StyleCollectionLoadOptions & Excel.Interfaces.CollectionLoadOptions): Excel.StyleCollection;
        load(option?: string | string[]): Excel.StyleCollection;
        load(option?: OfficeExtension.LoadOption): Excel.StyleCollection;
        toJSON(): Excel.Interfaces.StyleCollectionData;
    }
    /**
     *
     * Represents a collection of all the Data Connections that are part of the workbook or worksheet.
     *
     * [Api set: ExcelApi 1.7]
     */
    export class DataConnectionCollection extends OfficeExtension.ClientObject {
        /**
         *
         * Refreshes all the Data Connections in the collection.
         *
         * [Api set: ExcelApi 1.7]
         */
        refreshAll(): void;
        toJSON(): {
            [key: string]: string;
        };
    }
    /**
     * [Api set: ExcelApi 1.7]
     */
    enum ChartAxisType {
        invalid = "Invalid",
        /**
         *
         * Axis displays categories.
         *
         */
        category = "Category",
        /**
         *
         * Axis displays values.
         *
         */
        value = "Value",
        /**
         *
         * Axis displays data series.
         *
         */
        series = "Series",
    }
    /**
     * [Api set: ExcelApi 1.7]
     */
    enum ChartAxisGroup {
        primary = "Primary",
        secondary = "Secondary",
    }
    /**
     * [Api set: ExcelApi 1.7]
     */
    enum ChartAxisScaleType {
        linear = "Linear",
        logarithmic = "Logarithmic",
    }
    /**
     * [Api set: ExcelApi 1.7]
     */
    enum ChartAxisPosition {
        automatic = "Automatic",
        maximum = "Maximum",
        minimum = "Minimum",
        custom = "Custom",
    }
    /**
     * [Api set: ExcelApi 1.7]
     */
    enum ChartAxisTickMark {
        none = "None",
        cross = "Cross",
        inside = "Inside",
        outside = "Outside",
    }
    /**
     * [Api set: ExcelApi 1.7]
     */
    enum ChartAxisTickLabelPosition {
        nextToAxis = "NextToAxis",
        high = "High",
        low = "Low",
        none = "None",
    }
    /**
     * [Api set: ExcelApi 1.7]
     */
    enum ChartAxisDisplayUnit {
        /**
         *
         * Default option. This will reset display unit to the axis, and set unit label invisible.
         *
         */
        none = "None",
        /**
         *
         * This will set the axis in units of hundreds.
         *
         */
        hundreds = "Hundreds",
        /**
         *
         * This will set the axis in units of thousands.
         *
         */
        thousands = "Thousands",
        /**
         *
         * This will set the axis in units of tens of thousands.
         *
         */
        tenThousands = "TenThousands",
        /**
         *
         * This will set the axis in units of hundreds of thousands.
         *
         */
        hundredThousands = "HundredThousands",
        /**
         *
         * This will set the axis in units of millions.
         *
         */
        millions = "Millions",
        /**
         *
         * This will set the axis in units of tens of millions.
         *
         */
        tenMillions = "TenMillions",
        /**
         *
         * This will set the axis in units of hundreds of millions.
         *
         */
        hundredMillions = "HundredMillions",
        /**
         *
         * This will set the axis in units of billions.
         *
         */
        billions = "Billions",
        /**
         *
         * This will set the axis in units of trillions.
         *
         */
        trillions = "Trillions",
        /**
         *
         * This will set the axis in units of custom value.
         *
         */
        custom = "Custom",
    }
    /**
     *
     * Specifies the unit of time for chart axes and data series.
     *
     * [Api set: ExcelApi 1.7]
     */
    enum ChartAxisTimeUnit {
        days = "Days",
        months = "Months",
        years = "Years",
    }
    /**
     *
     * Specifies the type of the category axis.
     *
     * [Api set: ExcelApi 1.7]
     */
    enum ChartAxisCategoryType {
        /**
         *
         * Excel controls the axis type.
         *
         */
        automatic = "Automatic",
        /**
         *
         * Axis groups data by an arbitrary set of categories.
         *
         */
        textAxis = "TextAxis",
        /**
         *
         * Axis groups data on a time scale.
         *
         */
        dateAxis = "DateAxis",
    }
    /**
     * [Api set: ExcelApi 1.7]
     */
    enum ChartLineStyle {
        none = "None",
        continuous = "Continuous",
        dash = "Dash",
        dashDot = "DashDot",
        dashDotDot = "DashDotDot",
        dot = "Dot",
        grey25 = "Grey25",
        grey50 = "Grey50",
        grey75 = "Grey75",
        automatic = "Automatic",
        roundDot = "RoundDot",
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    enum ChartDataLabelPosition {
        invalid = "Invalid",
        none = "None",
        center = "Center",
        insideEnd = "InsideEnd",
        insideBase = "InsideBase",
        outsideEnd = "OutsideEnd",
        left = "Left",
        right = "Right",
        top = "Top",
        bottom = "Bottom",
        bestFit = "BestFit",
        callout = "Callout",
    }
    /**
     *
     * Represents the position of chart title.
     *
     * [Api set: ExcelApi 1.7]
     */
    enum ChartTitlePosition {
        automatic = "Automatic",
        top = "Top",
        bottom = "Bottom",
        left = "Left",
        right = "Right",
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    enum ChartLegendPosition {
        invalid = "Invalid",
        top = "Top",
        bottom = "Bottom",
        left = "Left",
        right = "Right",
        corner = "Corner",
        custom = "Custom",
    }
    /**
     * [Api set: ExcelApi 1.7]
     */
    enum ChartMarkerStyle {
        invalid = "Invalid",
        automatic = "Automatic",
        none = "None",
        square = "Square",
        diamond = "Diamond",
        triangle = "Triangle",
        x = "X",
        star = "Star",
        dot = "Dot",
        dash = "Dash",
        circle = "Circle",
        plus = "Plus",
        picture = "Picture",
    }
    /**
     *
     * Specifies whether the series are by rows or by columns. On Desktop, the "auto" option will inspect the source data shape to automatically guess whether the data is by rows or columns; on Excel Online, "auto" will simply default to "columns".
     *
     * [Api set: ExcelApi 1.1]
     */
    enum ChartSeriesBy {
        /**
         *
         * On Desktop, the "auto" option will inspect the source data shape to automatically guess whether the data is by rows or columns; on Excel Online, "auto" will simply default to "columns".
         *
         */
        auto = "Auto",
        columns = "Columns",
        rows = "Rows",
    }
    /**
     *
     * Represents the horizontal alignment for the specified object.
     *
     * [Api set: ExcelApi 1.7]
     */
    enum ChartTextHorizontalAlignment {
        center = "Center",
        left = "Left",
        right = "Right",
        justify = "Justify",
        distributed = "Distributed",
    }
    /**
     *
     * Represents the vertical alignment for the specified object.
     *
     * [Api set: ExcelApi 1.7]
     */
    enum ChartTextVerticalAlignment {
        center = "Center",
        bottom = "Bottom",
        top = "Top",
        justify = "Justify",
        distributed = "Distributed",
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    enum ChartType {
        invalid = "Invalid",
        columnClustered = "ColumnClustered",
        columnStacked = "ColumnStacked",
        columnStacked100 = "ColumnStacked100",
        _3DColumnClustered = "3DColumnClustered",
        _3DColumnStacked = "3DColumnStacked",
        _3DColumnStacked100 = "3DColumnStacked100",
        barClustered = "BarClustered",
        barStacked = "BarStacked",
        barStacked100 = "BarStacked100",
        _3DBarClustered = "3DBarClustered",
        _3DBarStacked = "3DBarStacked",
        _3DBarStacked100 = "3DBarStacked100",
        lineStacked = "LineStacked",
        lineStacked100 = "LineStacked100",
        lineMarkers = "LineMarkers",
        lineMarkersStacked = "LineMarkersStacked",
        lineMarkersStacked100 = "LineMarkersStacked100",
        pieOfPie = "PieOfPie",
        pieExploded = "PieExploded",
        _3DPieExploded = "3DPieExploded",
        barOfPie = "BarOfPie",
        xyscatterSmooth = "XYScatterSmooth",
        xyscatterSmoothNoMarkers = "XYScatterSmoothNoMarkers",
        xyscatterLines = "XYScatterLines",
        xyscatterLinesNoMarkers = "XYScatterLinesNoMarkers",
        areaStacked = "AreaStacked",
        areaStacked100 = "AreaStacked100",
        _3DAreaStacked = "3DAreaStacked",
        _3DAreaStacked100 = "3DAreaStacked100",
        doughnutExploded = "DoughnutExploded",
        radarMarkers = "RadarMarkers",
        radarFilled = "RadarFilled",
        surface = "Surface",
        surfaceWireframe = "SurfaceWireframe",
        surfaceTopView = "SurfaceTopView",
        surfaceTopViewWireframe = "SurfaceTopViewWireframe",
        bubble = "Bubble",
        bubble3DEffect = "Bubble3DEffect",
        stockHLC = "StockHLC",
        stockOHLC = "StockOHLC",
        stockVHLC = "StockVHLC",
        stockVOHLC = "StockVOHLC",
        cylinderColClustered = "CylinderColClustered",
        cylinderColStacked = "CylinderColStacked",
        cylinderColStacked100 = "CylinderColStacked100",
        cylinderBarClustered = "CylinderBarClustered",
        cylinderBarStacked = "CylinderBarStacked",
        cylinderBarStacked100 = "CylinderBarStacked100",
        cylinderCol = "CylinderCol",
        coneColClustered = "ConeColClustered",
        coneColStacked = "ConeColStacked",
        coneColStacked100 = "ConeColStacked100",
        coneBarClustered = "ConeBarClustered",
        coneBarStacked = "ConeBarStacked",
        coneBarStacked100 = "ConeBarStacked100",
        coneCol = "ConeCol",
        pyramidColClustered = "PyramidColClustered",
        pyramidColStacked = "PyramidColStacked",
        pyramidColStacked100 = "PyramidColStacked100",
        pyramidBarClustered = "PyramidBarClustered",
        pyramidBarStacked = "PyramidBarStacked",
        pyramidBarStacked100 = "PyramidBarStacked100",
        pyramidCol = "PyramidCol",
        _3DColumn = "3DColumn",
        line = "Line",
        _3DLine = "3DLine",
        _3DPie = "3DPie",
        pie = "Pie",
        xyscatter = "XYScatter",
        _3DArea = "3DArea",
        area = "Area",
        doughnut = "Doughnut",
        radar = "Radar",
    }

    /**
     * [Api set: ExcelApi 1.1]
     */
    enum ChartUnderlineStyle {
        none = "None",
        single = "Single",
    }
    /**
     * [Api set: ExcelApi 1.7]
     */
    enum ChartTrendlineType {
        linear = "Linear",
        exponential = "Exponential",
        logarithmic = "Logarithmic",
        movingAverage = "MovingAverage",
        polynomial = "Polynomial",
        power = "Power",
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    enum BindingType {
        range = "Range",
        table = "Table",
        text = "Text",
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    enum BorderIndex {
        edgeTop = "EdgeTop",
        edgeBottom = "EdgeBottom",
        edgeLeft = "EdgeLeft",
        edgeRight = "EdgeRight",
        insideVertical = "InsideVertical",
        insideHorizontal = "InsideHorizontal",
        diagonalDown = "DiagonalDown",
        diagonalUp = "DiagonalUp",
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    enum BorderLineStyle {
        none = "None",
        continuous = "Continuous",
        dash = "Dash",
        dashDot = "DashDot",
        dashDotDot = "DashDotDot",
        dot = "Dot",
        double = "Double",
        slantDashDot = "SlantDashDot",
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    enum BorderWeight {
        hairline = "Hairline",
        thin = "Thin",
        medium = "Medium",
        thick = "Thick",
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    enum CalculationMode {
        automatic = "Automatic",
        automaticExceptTables = "AutomaticExceptTables",
        manual = "Manual",
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    enum CalculationType {
        /**
         *
         * Recalculates all cells that Excel has marked as dirty, that is, dependents of volatile or changed data, and cells programmatically marked as dirty.
         *
         */
        recalculate = "Recalculate",
        /**
         *
         * This will mark all cells as dirty and then recalculate them.
         *
         */
        full = "Full",
        /**
         *
         * This will rebuild the full dependency chain, mark all cells as dirty and then recalculate them.
         *
         */
        fullRebuild = "FullRebuild",
    }
    /**
     * [Api set: ExcelApi 1.1 for All/Formats/Contents, 1.7 for Hyperlinks & HyperlinksAndFormats.]
     */
    enum ClearApplyTo {
        all = "All",
        /**
         *
         * Clears all formatting for the range.
         *
         */
        formats = "Formats",
        /**
         *
         * Clears the contents of the range.
         *
         */
        contents = "Contents",
        /**
         *
         * Clears all hyperlinks, but leaves all content and formatting intact.
         *
         */
        hyperlinks = "Hyperlinks",
        /**
         *
         * Removes hyperlinks and formatting for the cell but leaves content, conditional formats and data validation intact.
         *
         */
        removeHyperlinks = "RemoveHyperlinks",
    }
    /**
     *
     * Represents the format options for a Data Bar Axis.
     *
     * [Api set: ExcelApi 1.6]
     */
    enum ConditionalDataBarAxisFormat {
        automatic = "Automatic",
        none = "None",
        cellMidPoint = "CellMidPoint",
    }
    /**
     *
     * Represents the Data Bar direction within a cell.
     *
     * [Api set: ExcelApi 1.6]
     */
    enum ConditionalDataBarDirection {
        context = "Context",
        leftToRight = "LeftToRight",
        rightToLeft = "RightToLeft",
    }
    /**
     *
     * Represents the direction for a selection.
     *
     * [Api set: ExcelApi 1.6]
     */
    enum ConditionalFormatDirection {
        top = "Top",
        bottom = "Bottom",
    }
    /**
     * [Api set: ExcelApi 1.6]
     */
    enum ConditionalFormatType {
        custom = "Custom",
        dataBar = "DataBar",
        colorScale = "ColorScale",
        iconSet = "IconSet",
        topBottom = "TopBottom",
        presetCriteria = "PresetCriteria",
        containsText = "ContainsText",
        cellValue = "CellValue",
    }
    /**
     *
     * Represents the types of conditional format values.
     *
     * [Api set: ExcelApi 1.6]
     */
    enum ConditionalFormatRuleType {
        invalid = "Invalid",
        automatic = "Automatic",
        lowestValue = "LowestValue",
        highestValue = "HighestValue",
        number = "Number",
        percent = "Percent",
        formula = "Formula",
        percentile = "Percentile",
    }
    /**
     *
     * Represents the types of conditional format values.
     *
     * [Api set: ExcelApi 1.6]
     */
    enum ConditionalFormatIconRuleType {
        invalid = "Invalid",
        number = "Number",
        percent = "Percent",
        formula = "Formula",
        percentile = "Percentile",
    }
    /**
     *
     * Represents the types of conditional format values.
     *
     * [Api set: ExcelApi 1.6]
     */
    enum ConditionalFormatColorCriterionType {
        invalid = "Invalid",
        lowestValue = "LowestValue",
        highestValue = "HighestValue",
        number = "Number",
        percent = "Percent",
        formula = "Formula",
        percentile = "Percentile",
    }
    /**
     *
     * Represents the criteria for the above/below average conditional format type.
     *
     * [Api set: ExcelApi 1.6]
     */
    enum ConditionalTopBottomCriterionType {
        invalid = "Invalid",
        topItems = "TopItems",
        topPercent = "TopPercent",
        bottomItems = "BottomItems",
        bottomPercent = "BottomPercent",
    }
    /**
     *
     * Represents the criteria for the Preset Criteria conditional format type.
     *
     * [Api set: ExcelApi 1.6]
     */
    enum ConditionalFormatPresetCriterion {
        invalid = "Invalid",
        blanks = "Blanks",
        nonBlanks = "NonBlanks",
        errors = "Errors",
        nonErrors = "NonErrors",
        yesterday = "Yesterday",
        today = "Today",
        tomorrow = "Tomorrow",
        lastSevenDays = "LastSevenDays",
        lastWeek = "LastWeek",
        thisWeek = "ThisWeek",
        nextWeek = "NextWeek",
        lastMonth = "LastMonth",
        thisMonth = "ThisMonth",
        nextMonth = "NextMonth",
        aboveAverage = "AboveAverage",
        belowAverage = "BelowAverage",
        equalOrAboveAverage = "EqualOrAboveAverage",
        equalOrBelowAverage = "EqualOrBelowAverage",
        oneStdDevAboveAverage = "OneStdDevAboveAverage",
        oneStdDevBelowAverage = "OneStdDevBelowAverage",
        twoStdDevAboveAverage = "TwoStdDevAboveAverage",
        twoStdDevBelowAverage = "TwoStdDevBelowAverage",
        threeStdDevAboveAverage = "ThreeStdDevAboveAverage",
        threeStdDevBelowAverage = "ThreeStdDevBelowAverage",
        uniqueValues = "UniqueValues",
        duplicateValues = "DuplicateValues",
    }
    /**
     *
     * Represents the operator of the text conditional format type.
     *
     * [Api set: ExcelApi 1.6]
     */
    enum ConditionalTextOperator {
        invalid = "Invalid",
        contains = "Contains",
        notContains = "NotContains",
        beginsWith = "BeginsWith",
        endsWith = "EndsWith",
    }
    /**
     *
     * Represents the operator of the text conditional format type.
     *
     * [Api set: ExcelApi 1.6]
     */
    enum ConditionalCellValueOperator {
        invalid = "Invalid",
        between = "Between",
        notBetween = "NotBetween",
        equalTo = "EqualTo",
        notEqualTo = "NotEqualTo",
        greaterThan = "GreaterThan",
        lessThan = "LessThan",
        greaterThanOrEqual = "GreaterThanOrEqual",
        lessThanOrEqual = "LessThanOrEqual",
    }
    /**
     *
     * Represents the operator for each icon criteria.
     *
     * [Api set: ExcelApi 1.6]
     */
    enum ConditionalIconCriterionOperator {
        invalid = "Invalid",
        greaterThan = "GreaterThan",
        greaterThanOrEqual = "GreaterThanOrEqual",
    }
    /**
     * [Api set: ExcelApi 1.6]
     */
    enum ConditionalRangeBorderIndex {
        edgeTop = "EdgeTop",
        edgeBottom = "EdgeBottom",
        edgeLeft = "EdgeLeft",
        edgeRight = "EdgeRight",
    }
    /**
     * [Api set: ExcelApi 1.6]
     */
    enum ConditionalRangeBorderLineStyle {
        none = "None",
        continuous = "Continuous",
        dash = "Dash",
        dashDot = "DashDot",
        dashDotDot = "DashDotDot",
        dot = "Dot",
    }
    /**
     * [Api set: ExcelApi 1.6]
     */
    enum ConditionalRangeFontUnderlineStyle {
        none = "None",
        single = "Single",
        double = "Double",
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    enum DeleteShiftDirection {
        up = "Up",
        left = "Left",
    }
    /**
     * [Api set: ExcelApi 1.2]
     */
    enum DynamicFilterCriteria {
        unknown = "Unknown",
        aboveAverage = "AboveAverage",
        allDatesInPeriodApril = "AllDatesInPeriodApril",
        allDatesInPeriodAugust = "AllDatesInPeriodAugust",
        allDatesInPeriodDecember = "AllDatesInPeriodDecember",
        allDatesInPeriodFebruray = "AllDatesInPeriodFebruray",
        allDatesInPeriodJanuary = "AllDatesInPeriodJanuary",
        allDatesInPeriodJuly = "AllDatesInPeriodJuly",
        allDatesInPeriodJune = "AllDatesInPeriodJune",
        allDatesInPeriodMarch = "AllDatesInPeriodMarch",
        allDatesInPeriodMay = "AllDatesInPeriodMay",
        allDatesInPeriodNovember = "AllDatesInPeriodNovember",
        allDatesInPeriodOctober = "AllDatesInPeriodOctober",
        allDatesInPeriodQuarter1 = "AllDatesInPeriodQuarter1",
        allDatesInPeriodQuarter2 = "AllDatesInPeriodQuarter2",
        allDatesInPeriodQuarter3 = "AllDatesInPeriodQuarter3",
        allDatesInPeriodQuarter4 = "AllDatesInPeriodQuarter4",
        allDatesInPeriodSeptember = "AllDatesInPeriodSeptember",
        belowAverage = "BelowAverage",
        lastMonth = "LastMonth",
        lastQuarter = "LastQuarter",
        lastWeek = "LastWeek",
        lastYear = "LastYear",
        nextMonth = "NextMonth",
        nextQuarter = "NextQuarter",
        nextWeek = "NextWeek",
        nextYear = "NextYear",
        thisMonth = "ThisMonth",
        thisQuarter = "ThisQuarter",
        thisWeek = "ThisWeek",
        thisYear = "ThisYear",
        today = "Today",
        tomorrow = "Tomorrow",
        yearToDate = "YearToDate",
        yesterday = "Yesterday",
    }
    /**
     * [Api set: ExcelApi 1.2]
     */
    enum FilterDatetimeSpecificity {
        year = "Year",
        month = "Month",
        day = "Day",
        hour = "Hour",
        minute = "Minute",
        second = "Second",
    }
    /**
     * [Api set: ExcelApi 1.2]
     */
    enum FilterOn {
        bottomItems = "BottomItems",
        bottomPercent = "BottomPercent",
        cellColor = "CellColor",
        dynamic = "Dynamic",
        fontColor = "FontColor",
        values = "Values",
        topItems = "TopItems",
        topPercent = "TopPercent",
        icon = "Icon",
        custom = "Custom",
    }
    /**
     * [Api set: ExcelApi 1.2]
     */
    enum FilterOperator {
        and = "And",
        or = "Or",
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    enum HorizontalAlignment {
        general = "General",
        left = "Left",
        center = "Center",
        right = "Right",
        fill = "Fill",
        justify = "Justify",
        centerAcrossSelection = "CenterAcrossSelection",
        distributed = "Distributed",
    }
    /**
     * [Api set: ExcelApi 1.2]
     */
    enum IconSet {
        invalid = "Invalid",
        threeArrows = "ThreeArrows",
        threeArrowsGray = "ThreeArrowsGray",
        threeFlags = "ThreeFlags",
        threeTrafficLights1 = "ThreeTrafficLights1",
        threeTrafficLights2 = "ThreeTrafficLights2",
        threeSigns = "ThreeSigns",
        threeSymbols = "ThreeSymbols",
        threeSymbols2 = "ThreeSymbols2",
        fourArrows = "FourArrows",
        fourArrowsGray = "FourArrowsGray",
        fourRedToBlack = "FourRedToBlack",
        fourRating = "FourRating",
        fourTrafficLights = "FourTrafficLights",
        fiveArrows = "FiveArrows",
        fiveArrowsGray = "FiveArrowsGray",
        fiveRating = "FiveRating",
        fiveQuarters = "FiveQuarters",
        threeStars = "ThreeStars",
        threeTriangles = "ThreeTriangles",
        fiveBoxes = "FiveBoxes",
    }
    /**
     * [Api set: ExcelApi 1.2]
     */
    enum ImageFittingMode {
        fit = "Fit",
        fitAndCenter = "FitAndCenter",
        fill = "Fill",
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    enum InsertShiftDirection {
        down = "Down",
        right = "Right",
    }
    /**
     * [Api set: ExcelApi 1.4]
     */
    enum NamedItemScope {
        worksheet = "Worksheet",
        workbook = "Workbook",
    }
    /**
     * [Api set: ExcelApi 1.1 for String,Integer,Double,Boolean,Range,Error; 1.7 for Array]
     */
    enum NamedItemType {
        string = "String",
        integer = "Integer",
        double = "Double",
        boolean = "Boolean",
        range = "Range",
        error = "Error",
        array = "Array",
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    enum RangeUnderlineStyle {
        none = "None",
        single = "Single",
        double = "Double",
        singleAccountant = "SingleAccountant",
        doubleAccountant = "DoubleAccountant",
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    enum SheetVisibility {
        visible = "Visible",
        hidden = "Hidden",
        veryHidden = "VeryHidden",
    }
    /**
     * [Api set: ExcelApi 1.1 for Unknown, Empty, String, Integer, Double, Boolean, Error. 1.7 for RichValue]
     */
    enum RangeValueType {
        unknown = "Unknown",
        empty = "Empty",
        string = "String",
        integer = "Integer",
        double = "Double",
        boolean = "Boolean",
        error = "Error",
        richValue = "RichValue",
    }
    /**
     * [Api set: ExcelApi 1.2]
     */
    enum SortOrientation {
        rows = "Rows",
        columns = "Columns",
    }
    /**
     * [Api set: ExcelApi 1.2]
     */
    enum SortOn {
        value = "Value",
        cellColor = "CellColor",
        fontColor = "FontColor",
        icon = "Icon",
    }
    /**
     * [Api set: ExcelApi 1.2]
     */
    enum SortDataOption {
        normal = "Normal",
        textAsNumber = "TextAsNumber",
    }
    /**
     * [Api set: ExcelApi 1.2]
     */
    enum SortMethod {
        pinYin = "PinYin",
        strokeCount = "StrokeCount",
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    enum VerticalAlignment {
        top = "Top",
        center = "Center",
        bottom = "Bottom",
        justify = "Justify",
        distributed = "Distributed",
    }
    /**
     * [Api set: ExcelApi 1.7]
     */
    enum DocumentPropertyType {
        number = "Number",
        boolean = "Boolean",
        date = "Date",
        string = "String",
        float = "Float",
    }
    /**
     * [Api set: ExcelApi 1.7]
     */
    enum EventSource {
        /**
         *
         * Local means event comes from local user session.
         *
         */
        local = "Local",
        /**
         *
         * Remote means event comes from remote user session.
         *
         */
        remote = "Remote",
    }
    /**
     * [Api set: ExcelApi 1.7]
     */
    enum DataChangeType {
        /**
         *
         * Unknown represents the type of data change is not the listed types.
         *
         */
        unknown = "Unknown",
        /**
         *
         * RangeEdited represents the data change event is triggered by range being edited.
         *
         */
        rangeEdited = "RangeEdited",
        /**
         *
         * RowInserted represents the data change event is triggered by inserting new rows.
         *
         */
        rowInserted = "RowInserted",
        /**
         *
         * RowDeleted represents the data change event is triggered by deleting rows.
         *
         */
        rowDeleted = "RowDeleted",
        /**
         *
         * ColumnInserted represents the data change event is triggered by inserting new columns.
         *
         */
        columnInserted = "ColumnInserted",
        /**
         *
         * ColumnDeleted represents the data change event is triggered by deleting columns.
         *
         */
        columnDeleted = "ColumnDeleted",
        /**
         *
         * CellInserted represents the data change event is triggered by inserting new cells.
         *
         */
        cellInserted = "CellInserted",
        /**
         *
         * CellDeleted represents the data change event is triggered by deleting cells.
         *
         */
        cellDeleted = "CellDeleted",
    }
    /**
     * [Api set: ExcelApi 1.7]
     */
    enum EventType {
        /**
         *
         * WorksheetChanged represents the type of event that is registered on Worksheet or WorksheetCollection, and occurs when data changes.
         *
         */
        worksheetChanged = "WorksheetChanged",
        /**
         *
         * WorksheetSelectionChanged represents the type of event that is registered on Worksheet, and occurs when selection changes.
         *
         */
        worksheetSelectionChanged = "WorksheetSelectionChanged",
        /**
         *
         * WorksheetAdded represents the type of event that is registered on WorksheetCollection, and occurs when a new worksheet is added to the workbook.
         *
         */
        worksheetAdded = "WorksheetAdded",
        /**
         *
         * WorksheetActivated represents the type of event that is registered on Worksheet or WorksheetCollection, and occurs when worksheet activates.
         *
         */
        worksheetActivated = "WorksheetActivated",
        /**
         *
         * WorksheetDeactivated represents the type of event that is registered on Worksheet or WorksheetCollection, and occurs when worksheet deactivates.
         *
         */
        worksheetDeactivated = "WorksheetDeactivated",
        /**
         *
         * TableChanged represents the type of event that is registered on Table, and occurs when data changes.
         *
         */
        tableChanged = "TableChanged",
        /**
         *
         * TableSelectionChanged represents the type of event that is registered on Table, and occurs when selection changes.
         *
         */
        tableSelectionChanged = "TableSelectionChanged",
        /**
         *
         * WorksheetDeleted represents the type of event that is registered on WorksheetCollection, and occurs when a worksheet is deleted from the workbook.
         *
         */
        worksheetDeleted = "WorksheetDeleted",
        /**
         *
         * ChartAdded represents the type of event that is registered on ChartCollection, and occurs when a new chart is added to the worksheet.
         *
         */
        chartAdded = "ChartAdded",
        /**
         *
         * ChartActivated represents the type of event that is registered on Chart or ChartCollection, and occurs when chart activates.
         *
         */
        chartActivated = "ChartActivated",
        /**
         *
         * ChartDeactivated represents the type of event that is registered on Chart or ChartCollection, and occurs when chart deactivates.
         *
         */
        chartDeactivated = "ChartDeactivated",
        /**
         *
         * ChartDeleted represents the type of event that is registered on ChartCollection, and occurs when a chart is deleted from the worksheet.
         *
         */
        chartDeleted = "ChartDeleted",
        /**
         *
         * WorksheetCalculated represents the type of event that is registered on Worksheet or WorksheetCollection, and occurs when a worksheet is calculated.
         *
         */
        worksheetCalculated = "WorksheetCalculated",
        /**
         *
         * ChartActivated represents the type of event that is registered on Chart or ChartCollection, and occurs when chart activates.
         *
         */
        visualSelectionChanged = "VisualSelectionChanged",
    }
    /**
     * [Api set: ExcelApi 1.7]
     */
    enum DocumentPropertyItem {
        title = "Title",
        subject = "Subject",
        author = "Author",
        keywords = "Keywords",
        comments = "Comments",
        template = "Template",
        lastAuth = "LastAuth",
        revision = "Revision",
        appName = "AppName",
        lastPrint = "LastPrint",
        creation = "Creation",
        lastSave = "LastSave",
        category = "Category",
        format = "Format",
        manager = "Manager",
        company = "Company",
    }
    /**
     * [Api set: ExcelApi 1.7]
     */
    enum ProtectionSelectionMode {
        /**
         *
         * Selection is allowed for all cells.
         *
         */
        normal = "Normal",
        /**
         *
         * Selection is allowed only for cells that are not locked.
         *
         */
        unlocked = "Unlocked",
        /**
         *
         * Selection is not allowed for all cells.
         *
         */
        none = "None",
    }
    /**
     * [Api set: ExcelApi 1.7]
     */
    enum PageOrientation {
        portrait = "Portrait",
        landscape = "Landscape",
    }
    /**
     * [Api set: ExcelApi 1.7]
     */
    enum PaperType {
        letter = "Letter",
        letterSmall = "LetterSmall",
        tabloid = "Tabloid",
        ledger = "Ledger",
        legal = "Legal",
        statement = "Statement",
        executive = "Executive",
        a3 = "A3",
        a4 = "A4",
        a4Small = "A4Small",
        a5 = "A5",
        b4 = "B4",
        b5 = "B5",
        folio = "Folio",
        quatro = "Quatro",
        paper10x14 = "Paper10x14",
        paper11x17 = "Paper11x17",
        note = "Note",
        envelope9 = "Envelope9",
        envelope10 = "Envelope10",
        envelope11 = "Envelope11",
        envelope12 = "Envelope12",
        envelope14 = "Envelope14",
        csheet = "Csheet",
        dsheet = "Dsheet",
        esheet = "Esheet",
        envelopeDL = "EnvelopeDL",
        envelopeC5 = "EnvelopeC5",
        envelopeC3 = "EnvelopeC3",
        envelopeC4 = "EnvelopeC4",
        envelopeC6 = "EnvelopeC6",
        envelopeC65 = "EnvelopeC65",
        envelopeB4 = "EnvelopeB4",
        envelopeB5 = "EnvelopeB5",
        envelopeB6 = "EnvelopeB6",
        envelopeItaly = "EnvelopeItaly",
        envelopeMonarch = "EnvelopeMonarch",
        envelopePersonal = "EnvelopePersonal",
        fanfoldUS = "FanfoldUS",
        fanfoldStdGerman = "FanfoldStdGerman",
        fanfoldLegalGerman = "FanfoldLegalGerman",
    }
    /**
     * [Api set: ExcelApi 1.7]
     */
    enum ReadingOrder {
        /**
         *
         * Reading order is determined by the language of the first character entered.
            If a right-to-left language character is entered first, reading order is right to left.
            If a left-to-right language character is entered first, reading order is left to right.
         *
         */
        context = "Context",
        /**
         *
         * Left to right reading order
         *
         */
        leftToRight = "LeftToRight",
        /**
         *
         * Right to left reading order
         *
         */
        rightToLeft = "RightToLeft",
    }
    /**
     * [Api set: ExcelApi 1.7]
     */
    enum BuiltInStyle {
        normal = "Normal",
        comma = "Comma",
        currency = "Currency",
        percent = "Percent",
        wholeComma = "WholeComma",
        wholeDollar = "WholeDollar",
        hlink = "Hlink",
        hlinkTrav = "HlinkTrav",
        note = "Note",
        warningText = "WarningText",
        emphasis1 = "Emphasis1",
        emphasis2 = "Emphasis2",
        emphasis3 = "Emphasis3",
        sheetTitle = "SheetTitle",
        heading1 = "Heading1",
        heading2 = "Heading2",
        heading3 = "Heading3",
        heading4 = "Heading4",
        input = "Input",
        output = "Output",
        calculation = "Calculation",
        checkCell = "CheckCell",
        linkedCell = "LinkedCell",
        total = "Total",
        good = "Good",
        bad = "Bad",
        neutral = "Neutral",
        accent1 = "Accent1",
        accent1_20 = "Accent1_20",
        accent1_40 = "Accent1_40",
        accent1_60 = "Accent1_60",
        accent2 = "Accent2",
        accent2_20 = "Accent2_20",
        accent2_40 = "Accent2_40",
        accent2_60 = "Accent2_60",
        accent3 = "Accent3",
        accent3_20 = "Accent3_20",
        accent3_40 = "Accent3_40",
        accent3_60 = "Accent3_60",
        accent4 = "Accent4",
        accent4_20 = "Accent4_20",
        accent4_40 = "Accent4_40",
        accent4_60 = "Accent4_60",
        accent5 = "Accent5",
        accent5_20 = "Accent5_20",
        accent5_40 = "Accent5_40",
        accent5_60 = "Accent5_60",
        accent6 = "Accent6",
        accent6_20 = "Accent6_20",
        accent6_40 = "Accent6_40",
        accent6_60 = "Accent6_60",
        explanatoryText = "ExplanatoryText",
    }
    /**
     * [Api set: ExcelApi 1.7]
     */
    enum PrintErrorType {
        errorsDisplayed = "ErrorsDisplayed",
        errorsBlank = "ErrorsBlank",
        errorsDash = "ErrorsDash",
        errorsNotAvailable = "ErrorsNotAvailable",
    }
    /**
     * [Api set: ExcelApi 1.7]
     */
    enum WorksheetPositionType {
        none = "None",
        before = "Before",
        after = "After",
        beginning = "Beginning",
        end = "End",
    }
    /**
     *
     * An object containing the result of a function-evaluation operation
     *
     * [Api set: ExcelApi 1.2]
     */
    export class FunctionResult<T> extends OfficeExtension.ClientObject {
        /**
         *
         * Error value (such as "#DIV/0") representing the error. If the error string is not set, then the function succeeded, and its result is written to the Value field. The error is always in the English locale.
         *
         * [Api set: ExcelApi 1.2]
         */
        readonly error: string;
        /**
         *
         * The value of function evaluation. The value field will be populated only if no error has occurred (i.e., the Error property is not set).
         *
         * [Api set: ExcelApi 1.2]
         */
        readonly value: T;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: Excel.Interfaces.FunctionResultLoadOptions): FunctionResult<T>;
        load(option?: string | string[]): FunctionResult<T>;
        load(option?: {
            select?: string;
            expand?: string;
        }): FunctionResult<T>;
        toJSON(): Interfaces.FunctionResultData<T>;
    }
    /**
     *
     * An object for evaluating Excel functions.
     *
     * [Api set: ExcelApi 1.2]
     */
    export class Functions extends OfficeExtension.ClientObject {
        /**
         *
         * Returns the absolute value of a number, a number without its sign.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the real number for which you want the absolute value.
         */
        abs(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the accrued interest for a security that pays periodic interest.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param issue - Is the security's issue date, expressed as a serial date number.
         * @param firstInterest - Is the security's first interest date, expressed as a serial date number.
         * @param settlement - Is the security's settlement date, expressed as a serial date number.
         * @param rate - Is the security's annual coupon rate.
         * @param par - Is the security's par value.
         * @param frequency - Is the number of coupon payments per year.
         * @param basis - Is the type of day count basis to use.
         * @param calcMethod - Is a logical value: to accrued interest from issue date = TRUE or omitted; to calculate from last coupon payment date = FALSE.
         */
        accrInt(issue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, firstInterest: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, par: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, calcMethod?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the accrued interest for a security that pays interest at maturity.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param issue - Is the security's issue date, expressed as a serial date number.
         * @param settlement - Is the security's maturity date, expressed as a serial date number.
         * @param rate - Is the security's annual coupon rate.
         * @param par - Is the security's par value.
         * @param basis - Is the type of day count basis to use.
         */
        accrIntM(issue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, par: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the arccosine of a number, in radians in the range 0 to Pi. The arccosine is the angle whose cosine is Number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the cosine of the angle you want and must be from -1 to 1.
         */
        acos(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the inverse hyperbolic cosine of a number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is any real number equal to or greater than 1.
         */
        acosh(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the arccotangent of a number, in radians in the range 0 to Pi.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the cotangent of the angle you want.
         */
        acot(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the inverse hyperbolic cotangent of a number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the hyperbolic cotangent of the angle that you want.
         */
        acoth(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the prorated linear depreciation of an asset for each accounting period.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param cost - Is the cost of the asset.
         * @param datePurchased - Is the date the asset is purchased.
         * @param firstPeriod - Is the date of the end of the first period.
         * @param salvage - Is the salvage value at the end of life of the asset.
         * @param period - Is the period.
         * @param rate - Is the rate of depreciation.
         * @param basis - Year_basis : 0 for year of 360 days, 1 for actual, 3 for year of 365 days.
         */
        amorDegrc(cost: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, datePurchased: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, firstPeriod: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, salvage: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, period: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the prorated linear depreciation of an asset for each accounting period.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param cost - Is the cost of the asset.
         * @param datePurchased - Is the date the asset is purchased.
         * @param firstPeriod - Is the date of the end of the first period.
         * @param salvage - Is the salvage value at the end of life of the asset.
         * @param period - Is the period.
         * @param rate - Is the rate of depreciation.
         * @param basis - Year_basis : 0 for year of 360 days, 1 for actual, 3 for year of 365 days.
         */
        amorLinc(cost: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, datePurchased: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, firstPeriod: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, salvage: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, period: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Checks whether all arguments are TRUE, and returns TRUE if all arguments are TRUE.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 conditions you want to test that can be either TRUE or FALSE and can be logical values, arrays, or references.
         */
        and(...values: Array<boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<boolean>;
        /**
         *
         * Converts a Roman numeral to Arabic.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param text - Is the Roman numeral you want to convert.
         */
        arabic(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of areas in a reference. An area is a range of contiguous cells or a single cell.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param reference - Is a reference to a cell or range of cells and can refer to multiple areas.
         */
        areas(reference: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Changes full-width (double-byte) characters to half-width (single-byte) characters. Use with double-byte character sets (DBCS).
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param text - Is a text, or a reference to a cell containing a text.
         */
        asc(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the arcsine of a number in radians, in the range -Pi/2 to Pi/2.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the sine of the angle you want and must be from -1 to 1.
         */
        asin(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the inverse hyperbolic sine of a number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is any real number equal to or greater than 1.
         */
        asinh(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the arctangent of a number in radians, in the range -Pi/2 to Pi/2.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the tangent of the angle you want.
         */
        atan(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the arctangent of the specified x- and y- coordinates, in radians between -Pi and Pi, excluding -Pi.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param xNum - Is the x-coordinate of the point.
         * @param yNum - Is the y-coordinate of the point.
         */
        atan2(xNum: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, yNum: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the inverse hyperbolic tangent of a number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is any real number between -1 and 1 excluding -1 and 1.
         */
        atanh(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the average of the absolute deviations of data points from their mean. Arguments can be numbers or names, arrays, or references that contain numbers.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 arguments for which you want the average of the absolute deviations.
         */
        aveDev(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the average (arithmetic mean) of its arguments, which can be numbers or names, arrays, or references that contain numbers.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 numeric arguments for which you want the average.
         */
        average(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the average (arithmetic mean) of its arguments, evaluating text and FALSE in arguments as 0; TRUE evaluates as 1. Arguments can be numbers, names, arrays, or references.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 arguments for which you want the average.
         */
        averageA(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Finds average(arithmetic mean) for the cells specified by a given condition or criteria.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param range - Is the range of cells you want evaluated.
         * @param criteria - Is the condition or criteria in the form of a number, expression, or text that defines which cells will be used to find the average.
         * @param averageRange - Are the actual cells to be used to find the average. If omitted, the cells in range are used.
         */
        averageIf(range: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, averageRange?: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Finds average(arithmetic mean) for the cells specified by a given set of conditions or criteria.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param averageRange - Are the actual cells to be used to find the average.
         * @param values - List of parameters, where the first element of each pair is the Is the range of cells you want evaluated for the particular condition , and the second element is is the condition or criteria in the form of a number, expression, or text that defines which cells will be used to find the average.
         */
        averageIfs(averageRange: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, ...values: Array<Excel.Range | Excel.RangeReference | Excel.FunctionResult<any> | number | string | boolean>): FunctionResult<number>;
        /**
         *
         * Converts a number to text (baht).
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is a number that you want to convert.
         */
        bahtText(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Converts a number into a text representation with the given radix (base).
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the number that you want to convert.
         * @param radix - Is the base Radix that you want to convert the number into.
         * @param minLength - Is the minimum length of the returned string.  If omitted leading zeros are not added.
         */
        base(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, radix: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, minLength?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the modified Bessel function In(x).
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param x - Is the value at which to evaluate the function.
         * @param n - Is the order of the Bessel function.
         */
        besselI(x: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, n: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the Bessel function Jn(x).
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param x - Is the value at which to evaluate the function.
         * @param n - Is the order of the Bessel function.
         */
        besselJ(x: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, n: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the modified Bessel function Kn(x).
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param x - Is the value at which to evaluate the function.
         * @param n - Is the order of the function.
         */
        besselK(x: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, n: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the Bessel function Yn(x).
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param x - Is the value at which to evaluate the function.
         * @param n - Is the order of the function.
         */
        besselY(x: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, n: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the beta probability distribution function.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param x - Is the value between A and B at which to evaluate the function.
         * @param alpha - Is a parameter to the distribution and must be greater than 0.
         * @param beta - Is a parameter to the distribution and must be greater than 0.
         * @param cumulative - Is a logical value: for the cumulative distribution function, use TRUE; for the probability density function, use FALSE.
         * @param A - Is an optional lower bound to the interval of x. If omitted, A = 0.
         * @param B - Is an optional upper bound to the interval of x. If omitted, B = 1.
         */
        beta_Dist(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, alpha: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, beta: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, A?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, B?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the inverse of the cumulative beta probability density function (BETA.DIST).
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param probability - Is a probability associated with the beta distribution.
         * @param alpha - Is a parameter to the distribution and must be greater than 0.
         * @param beta - Is a parameter to the distribution and must be greater than 0.
         * @param A - Is an optional lower bound to the interval of x. If omitted, A = 0.
         * @param B - Is an optional upper bound to the interval of x. If omitted, B = 1.
         */
        beta_Inv(probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, alpha: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, beta: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, A?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, B?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a binary number to decimal.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the binary number you want to convert.
         */
        bin2Dec(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a binary number to hexadecimal.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the binary number you want to convert.
         * @param places - Is the number of characters to use.
         */
        bin2Hex(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, places?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a binary number to octal.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the binary number you want to convert.
         * @param places - Is the number of characters to use.
         */
        bin2Oct(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, places?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the individual term binomial distribution probability.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param numberS - Is the number of successes in trials.
         * @param trials - Is the number of independent trials.
         * @param probabilityS - Is the probability of success on each trial.
         * @param cumulative - Is a logical value: for the cumulative distribution function, use TRUE; for the probability mass function, use FALSE.
         */
        binom_Dist(numberS: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, trials: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, probabilityS: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the probability of a trial result using a binomial distribution.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param trials - Is the number of independent trials.
         * @param probabilityS - Is the probability of success on each trial.
         * @param numberS - Is the number of successes in trials.
         * @param numberS2 - If provided this function returns the probability that the number of successful trials shall lie between numberS and numberS2.
         */
        binom_Dist_Range(trials: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, probabilityS: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberS: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberS2?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the smallest value for which the cumulative binomial distribution is greater than or equal to a criterion value.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param trials - Is the number of Bernoulli trials.
         * @param probabilityS - Is the probability of success on each trial, a number between 0 and 1 inclusive.
         * @param alpha - Is the criterion value, a number between 0 and 1 inclusive.
         */
        binom_Inv(trials: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, probabilityS: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, alpha: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns a bitwise 'And' of two numbers.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number1 - Is the decimal representation of the binary number you want to evaluate.
         * @param number2 - Is the decimal representation of the binary number you want to evaluate.
         */
        bitand(number1: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, number2: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns a number shifted left by shift_amount bits.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the decimal representation of the binary number you want to evaluate.
         * @param shiftAmount - Is the number of bits that you want to shift Number left by.
         */
        bitlshift(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, shiftAmount: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns a bitwise 'Or' of two numbers.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number1 - Is the decimal representation of the binary number you want to evaluate.
         * @param number2 - Is the decimal representation of the binary number you want to evaluate.
         */
        bitor(number1: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, number2: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns a number shifted right by shift_amount bits.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the decimal representation of the binary number you want to evaluate.
         * @param shiftAmount - Is the number of bits that you want to shift Number right by.
         */
        bitrshift(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, shiftAmount: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns a bitwise 'Exclusive Or' of two numbers.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number1 - Is the decimal representation of the binary number you want to evaluate.
         * @param number2 - Is the decimal representation of the binary number you want to evaluate.
         */
        bitxor(number1: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, number2: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Rounds a number up, to the nearest integer or to the nearest multiple of significance.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the value you want to round.
         * @param significance - Is the multiple to which you want to round.
         * @param mode - When given and nonzero this function will round away from zero.
         */
        ceiling_Math(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, significance?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, mode?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Rounds a number up, to the nearest integer or to the nearest multiple of significance.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the value you want to round.
         * @param significance - Is the multiple to which you want to round.
         */
        ceiling_Precise(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, significance?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the character specified by the code number from the character set for your computer.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is a number between 1 and 255 specifying which character you want.
         */
        char(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the left-tailed probability of the chi-squared distribution.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param x - Is the value at which you want to evaluate the distribution, a nonnegative number.
         * @param degFreedom - Is the number of degrees of freedom, a number between 1 and 10^10, excluding 10^10.
         * @param cumulative - Is a logical value for the function to return: the cumulative distribution function = TRUE; the probability density function = FALSE.
         */
        chiSq_Dist(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the right-tailed probability of the chi-squared distribution.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param x - Is the value at which you want to evaluate the distribution, a nonnegative number.
         * @param degFreedom - Is the number of degrees of freedom, a number between 1 and 10^10, excluding 10^10.
         */
        chiSq_Dist_RT(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the inverse of the left-tailed probability of the chi-squared distribution.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param probability - Is a probability associated with the chi-squared distribution, a value between 0 and 1 inclusive.
         * @param degFreedom - Is the number of degrees of freedom, a number between 1 and 10^10, excluding 10^10.
         */
        chiSq_Inv(probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the inverse of the right-tailed probability of the chi-squared distribution.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param probability - Is a probability associated with the chi-squared distribution, a value between 0 and 1 inclusive.
         * @param degFreedom - Is the number of degrees of freedom, a number between 1 and 10^10, excluding 10^10.
         */
        chiSq_Inv_RT(probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Chooses a value or action to perform from a list of values, based on an index number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param indexNum - Specifies which value argument is selected. indexNum must be between 1 and 254, or a formula or a reference to a number between 1 and 254.
         * @param values - List of parameters, whose elements are 1 to 254 numbers, cell references, defined names, formulas, functions, or text arguments from which CHOOSE selects.
         */
        choose(indexNum: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, ...values: Array<Excel.Range | number | string | boolean | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number | string | boolean>;
        /**
         *
         * Removes all nonprintable characters from text.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param text - Is any worksheet information from which you want to remove nonprintable characters.
         */
        clean(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns a numeric code for the first character in a text string, in the character set used by your computer.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param text - Is the text for which you want the code of the first character.
         */
        code(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of columns in an array or reference.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param array - Is an array or array formula, or a reference to a range of cells for which you want the number of columns.
         */
        columns(array: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of combinations for a given number of items.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the total number of items.
         * @param numberChosen - Is the number of items in each combination.
         */
        combin(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberChosen: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of combinations with repetitions for a given number of items.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the total number of items.
         * @param numberChosen - Is the number of items in each combination.
         */
        combina(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberChosen: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts real and imaginary coefficients into a complex number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param realNum - Is the real coefficient of the complex number.
         * @param iNum - Is the imaginary coefficient of the complex number.
         * @param suffix - Is the suffix for the imaginary component of the complex number.
         */
        complex(realNum: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, iNum: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, suffix?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Joins several text strings into one text string.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 text strings to be joined into a single text string and can be text strings, numbers, or single-cell references.
         */
        concatenate(...values: Array<string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<string>;
        /**
         *
         * Returns the confidence interval for a population mean, using a normal distribution.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param alpha - Is the significance level used to compute the confidence level, a number greater than 0 and less than 1.
         * @param standardDev - Is the population standard deviation for the data range and is assumed to be known. standardDev must be greater than 0.
         * @param size - Is the sample size.
         */
        confidence_Norm(alpha: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, standardDev: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, size: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the confidence interval for a population mean, using a Student's T distribution.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param alpha - Is the significance level used to compute the confidence level, a number greater than 0 and less than 1.
         * @param standardDev - Is the population standard deviation for the data range and is assumed to be known. standardDev must be greater than 0.
         * @param size - Is the sample size.
         */
        confidence_T(alpha: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, standardDev: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, size: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a number from one measurement system to another.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the value in from_units to convert.
         * @param fromUnit - Is the units for number.
         * @param toUnit - Is the units for the result.
         */
        convert(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fromUnit: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, toUnit: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the cosine of an angle.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the angle in radians for which you want the cosine.
         */
        cos(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the hyperbolic cosine of a number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is any real number.
         */
        cosh(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the cotangent of an angle.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the angle in radians for which you want the cotangent.
         */
        cot(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the hyperbolic cotangent of a number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the angle in radians for which you want the hyperbolic cotangent.
         */
        coth(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Counts the number of cells in a range that contain numbers.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 arguments that can contain or refer to a variety of different types of data, but only numbers are counted.
         */
        count(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Counts the number of cells in a range that are not empty.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 arguments representing the values and cells you want to count. Values can be any type of information.
         */
        countA(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Counts the number of empty cells in a specified range of cells.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param range - Is the range from which you want to count the empty cells.
         */
        countBlank(range: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Counts the number of cells within a range that meet the given condition.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param range - Is the range of cells from which you want to count nonblank cells.
         * @param criteria - Is the condition in the form of a number, expression, or text that defines which cells will be counted.
         */
        countIf(range: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Counts the number of cells specified by a given set of conditions or criteria.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, where the first element of each pair is the Is the range of cells you want evaluated for the particular condition , and the second element is is the condition in the form of a number, expression, or text that defines which cells will be counted.
         */
        countIfs(...values: Array<Excel.Range | Excel.RangeReference | Excel.FunctionResult<any> | number | string | boolean>): FunctionResult<number>;
        /**
         *
         * Returns the number of days from the beginning of the coupon period to the settlement date.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param settlement - Is the security's settlement date, expressed as a serial date number.
         * @param maturity - Is the security's maturity date, expressed as a serial date number.
         * @param frequency - Is the number of coupon payments per year.
         * @param basis - Is the type of day count basis to use.
         */
        coupDayBs(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of days in the coupon period that contains the settlement date.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param settlement - Is the security's settlement date, expressed as a serial date number.
         * @param maturity - Is the security's maturity date, expressed as a serial date number.
         * @param frequency - Is the number of coupon payments per year.
         * @param basis - Is the type of day count basis to use.
         */
        coupDays(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of days from the settlement date to the next coupon date.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param settlement - Is the security's settlement date, expressed as a serial date number.
         * @param maturity - Is the security's maturity date, expressed as a serial date number.
         * @param frequency - Is the number of coupon payments per year.
         * @param basis - Is the type of day count basis to use.
         */
        coupDaysNc(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the next coupon date after the settlement date.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param settlement - Is the security's settlement date, expressed as a serial date number.
         * @param maturity - Is the security's maturity date, expressed as a serial date number.
         * @param frequency - Is the number of coupon payments per year.
         * @param basis - Is the type of day count basis to use.
         */
        coupNcd(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of coupons payable between the settlement date and maturity date.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param settlement - Is the security's settlement date, expressed as a serial date number.
         * @param maturity - Is the security's maturity date, expressed as a serial date number.
         * @param frequency - Is the number of coupon payments per year.
         * @param basis - Is the type of day count basis to use.
         */
        coupNum(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the previous coupon date before the settlement date.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param settlement - Is the security's settlement date, expressed as a serial date number.
         * @param maturity - Is the security's maturity date, expressed as a serial date number.
         * @param frequency - Is the number of coupon payments per year.
         * @param basis - Is the type of day count basis to use.
         */
        coupPcd(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the cosecant of an angle.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the angle in radians for which you want the cosecant.
         */
        csc(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the hyperbolic cosecant of an angle.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the angle in radians for which you want the hyperbolic cosecant.
         */
        csch(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the cumulative interest paid between two periods.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param rate - Is the interest rate.
         * @param nper - Is the total number of payment periods.
         * @param pv - Is the present value.
         * @param startPeriod - Is the first period in the calculation.
         * @param endPeriod - Is the last period in the calculation.
         * @param type - Is the timing of the payment.
         */
        cumIPmt(rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, nper: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startPeriod: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, endPeriod: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, type: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the cumulative principal paid on a loan between two periods.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param rate - Is the interest rate.
         * @param nper - Is the total number of payment periods.
         * @param pv - Is the present value.
         * @param startPeriod - Is the first period in the calculation.
         * @param endPeriod - Is the last period in the calculation.
         * @param type - Is the timing of the payment.
         */
        cumPrinc(rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, nper: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startPeriod: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, endPeriod: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, type: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Averages the values in a column in a list or database that match conditions you specify.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param database - Is the range of cells that makes up the list or database. A database is a list of related data.
         * @param field - Is either the label of the column in double quotation marks or a number that represents the column's position in the list.
         * @param criteria - Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.
         */
        daverage(database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Counts the cells containing numbers in the field (column) of records in the database that match the conditions you specify.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param database - Is the range of cells that makes up the list or database. A database is a list of related data.
         * @param field - Is either the label of the column in double quotation marks or a number that represents the column's position in the list.
         * @param criteria - Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.
         */
        dcount(database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Counts nonblank cells in the field (column) of records in the database that match the conditions you specify.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param database - Is the range of cells that makes up the list or database. A database is a list of related data.
         * @param field - Is either the label of the column in double quotation marks or a number that represents the column's position in the list.
         * @param criteria - Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.
         */
        dcountA(database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Extracts from a database a single record that matches the conditions you specify.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param database - Is the range of cells that makes up the list or database. A database is a list of related data.
         * @param field - Is either the label of the column in double quotation marks or a number that represents the column's position in the list.
         * @param criteria - Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.
         */
        dget(database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number | boolean | string>;
        /**
         *
         * Returns the largest number in the field (column) of records in the database that match the conditions you specify.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param database - Is the range of cells that makes up the list or database. A database is a list of related data.
         * @param field - Is either the label of the column in double quotation marks or a number that represents the column's position in the list.
         * @param criteria - Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.
         */
        dmax(database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the smallest number in the field (column) of records in the database that match the conditions you specify.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param database - Is the range of cells that makes up the list or database. A database is a list of related data.
         * @param field - Is either the label of the column in double quotation marks or a number that represents the column's position in the list.
         * @param criteria - Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.
         */
        dmin(database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Multiplies the values in the field (column) of records in the database that match the conditions you specify.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param database - Is the range of cells that makes up the list or database. A database is a list of related data.
         * @param field - Is either the label of the column in double quotation marks or a number that represents the column's position in the list.
         * @param criteria - Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.
         */
        dproduct(database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Estimates the standard deviation based on a sample from selected database entries.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param database - Is the range of cells that makes up the list or database. A database is a list of related data.
         * @param field - Is either the label of the column in double quotation marks or a number that represents the column's position in the list.
         * @param criteria - Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.
         */
        dstDev(database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Calculates the standard deviation based on the entire population of selected database entries.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param database - Is the range of cells that makes up the list or database. A database is a list of related data.
         * @param field - Is either the label of the column in double quotation marks or a number that represents the column's position in the list.
         * @param criteria - Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.
         */
        dstDevP(database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Adds the numbers in the field (column) of records in the database that match the conditions you specify.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param database - Is the range of cells that makes up the list or database. A database is a list of related data.
         * @param field - Is either the label of the column in double quotation marks or a number that represents the column's position in the list.
         * @param criteria - Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.
         */
        dsum(database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Estimates variance based on a sample from selected database entries.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param database - Is the range of cells that makes up the list or database. A database is a list of related data.
         * @param field - Is either the label of the column in double quotation marks or a number that represents the column's position in the list.
         * @param criteria - Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.
         */
        dvar(database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Calculates variance based on the entire population of selected database entries.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param database - Is the range of cells that makes up the list or database. A database is a list of related data.
         * @param field - Is either the label of the column in double quotation marks or a number that represents the column's position in the list.
         * @param criteria - Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.
         */
        dvarP(database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number that represents the date in Microsoft Excel date-time code.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param year - Is a number from 1900 or 1904 (depending on the workbook's date system) to 9999.
         * @param month - Is a number from 1 to 12 representing the month of the year.
         * @param day - Is a number from 1 to 31 representing the day of the month.
         */
        date(year: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, month: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, day: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a date in the form of text to a number that represents the date in Microsoft Excel date-time code.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param dateText - Is text that represents a date in a Microsoft Excel date format, between 1/1/1900 or 1/1/1904 (depending on the workbook's date system) and 12/31/9999.
         */
        datevalue(dateText: string | number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the day of the month, a number from 1 to 31.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param serialNumber - Is a number in the date-time code used by Microsoft Excel.
         */
        day(serialNumber: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of days between the two dates.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param endDate - startDate and endDate are the two dates between which you want to know the number of days.
         * @param startDate - startDate and endDate are the two dates between which you want to know the number of days.
         */
        days(endDate: string | number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startDate: string | number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of days between two dates based on a 360-day year (twelve 30-day months).
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param startDate - startDate and endDate are the two dates between which you want to know the number of days.
         * @param endDate - startDate and endDate are the two dates between which you want to know the number of days.
         * @param method - Is a logical value specifying the calculation method: U.S. (NASD) = FALSE or omitted; European = TRUE.
         */
        days360(startDate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, endDate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, method?: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the depreciation of an asset for a specified period using the fixed-declining balance method.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param cost - Is the initial cost of the asset.
         * @param salvage - Is the salvage value at the end of the life of the asset.
         * @param life - Is the number of periods over which the asset is being depreciated (sometimes called the useful life of the asset).
         * @param period - Is the period for which you want to calculate the depreciation. Period must use the same units as Life.
         * @param month - Is the number of months in the first year. If month is omitted, it is assumed to be 12.
         */
        db(cost: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, salvage: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, life: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, period: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, month?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Changes half-width (single-byte) characters within a character string to full-width (double-byte) characters. Use with double-byte character sets (DBCS).
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param text - Is a text, or a reference to a cell containing a text.
         */
        dbcs(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the depreciation of an asset for a specified period using the double-declining balance method or some other method you specify.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param cost - Is the initial cost of the asset.
         * @param salvage - Is the salvage value at the end of the life of the asset.
         * @param life - Is the number of periods over which the asset is being depreciated (sometimes called the useful life of the asset).
         * @param period - Is the period for which you want to calculate the depreciation. Period must use the same units as Life.
         * @param factor - Is the rate at which the balance declines. If Factor is omitted, it is assumed to be 2 (the double-declining balance method).
         */
        ddb(cost: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, salvage: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, life: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, period: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, factor?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a decimal number to binary.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the decimal integer you want to convert.
         * @param places - Is the number of characters to use.
         */
        dec2Bin(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, places?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a decimal number to hexadecimal.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the decimal integer you want to convert.
         * @param places - Is the number of characters to use.
         */
        dec2Hex(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, places?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a decimal number to octal.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the decimal integer you want to convert.
         * @param places - Is the number of characters to use.
         */
        dec2Oct(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, places?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a text representation of a number in a given base into a decimal number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the number that you want to convert.
         * @param radix - Is the base Radix of the number you are converting.
         */
        decimal(number: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, radix: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts radians to degrees.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param angle - Is the angle in radians that you want to convert.
         */
        degrees(angle: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Tests whether two numbers are equal.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number1 - Is the first number.
         * @param number2 - Is the second number.
         */
        delta(number1: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, number2?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the sum of squares of deviations of data points from their sample mean.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 arguments, or an array or array reference, on which you want DEVSQ to calculate.
         */
        devSq(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the discount rate for a security.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param settlement - Is the security's settlement date, expressed as a serial date number.
         * @param maturity - Is the security's maturity date, expressed as a serial date number.
         * @param pr - Is the security's price per $100 face value.
         * @param redemption - Is the security's redemption value per $100 face value.
         * @param basis - Is the type of day count basis to use.
         */
        disc(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pr: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a number to text, using currency format.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is a number, a reference to a cell containing a number, or a formula that evaluates to a number.
         * @param decimals - Is the number of digits to the right of the decimal point. The number is rounded as necessary; if omitted, Decimals = 2.
         */
        dollar(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, decimals?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Converts a dollar price, expressed as a fraction, into a dollar price, expressed as a decimal number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param fractionalDollar - Is a number expressed as a fraction.
         * @param fraction - Is the integer to use in the denominator of the fraction.
         */
        dollarDe(fractionalDollar: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fraction: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a dollar price, expressed as a decimal number, into a dollar price, expressed as a fraction.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param decimalDollar - Is a decimal number.
         * @param fraction - Is the integer to use in the denominator of a fraction.
         */
        dollarFr(decimalDollar: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fraction: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the annual duration of a security with periodic interest payments.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param settlement - Is the security's settlement date, expressed as a serial date number.
         * @param maturity - Is the security's maturity date, expressed as a serial date number.
         * @param coupon - Is the security's annual coupon rate.
         * @param yld - Is the security's annual yield.
         * @param frequency - Is the number of coupon payments per year.
         * @param basis - Is the type of day count basis to use.
         */
        duration(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, coupon: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, yld: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Rounds a number up, to the nearest integer or to the nearest multiple of significance.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the value you want to round.
         * @param significance - Is the multiple to which you want to round.
         */
        ecma_Ceiling(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, significance: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the serial number of the date that is the indicated number of months before or after the start date.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param startDate - Is a serial date number that represents the start date.
         * @param months - Is the number of months before or after startDate.
         */
        edate(startDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, months: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the effective annual interest rate.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param nominalRate - Is the nominal interest rate.
         * @param npery - Is the number of compounding periods per year.
         */
        effect(nominalRate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, npery: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the serial number of the last day of the month before or after a specified number of months.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param startDate - Is a serial date number that represents the start date.
         * @param months - Is the number of months before or after the startDate.
         */
        eoMonth(startDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, months: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the error function.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param lowerLimit - Is the lower bound for integrating ERF.
         * @param upperLimit - Is the upper bound for integrating ERF.
         */
        erf(lowerLimit: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, upperLimit?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the complementary error function.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param x - Is the lower bound for integrating ERF.
         */
        erfC(x: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the complementary error function.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param X - Is the lower bound for integrating ERFC.PRECISE.
         */
        erfC_Precise(X: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the error function.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param X - Is the lower bound for integrating ERF.PRECISE.
         */
        erf_Precise(X: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns a number matching an error value.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param errorVal - Is the error value for which you want the identifying number, and can be an actual error value or a reference to a cell containing an error value.
         */
        error_Type(errorVal: string | number | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Rounds a positive number up and negative number down to the nearest even integer.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the value to round.
         */
        even(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Checks whether two text strings are exactly the same, and returns TRUE or FALSE. EXACT is case-sensitive.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param text1 - Is the first text string.
         * @param text2 - Is the second text string.
         */
        exact(text1: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, text2: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<boolean>;
        /**
         *
         * Returns e raised to the power of a given number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the exponent applied to the base e. The constant e equals 2.71828182845904, the base of the natural logarithm.
         */
        exp(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the exponential distribution.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param x - Is the value of the function, a nonnegative number.
         * @param lambda - Is the parameter value, a positive number.
         * @param cumulative - Is a logical value for the function to return: the cumulative distribution function = TRUE; the probability density function = FALSE.
         */
        expon_Dist(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, lambda: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the future value of an initial principal after applying a series of compound interest rates.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param principal - Is the present value.
         * @param schedule - Is an array of interest rates to apply.
         */
        fvschedule(principal: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, schedule: number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the (left-tailed) F probability distribution (degree of diversity) for two data sets.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param x - Is the value at which to evaluate the function, a nonnegative number.
         * @param degFreedom1 - Is the numerator degrees of freedom, a number between 1 and 10^10, excluding 10^10.
         * @param degFreedom2 - Is the denominator degrees of freedom, a number between 1 and 10^10, excluding 10^10.
         * @param cumulative - Is a logical value for the function to return: the cumulative distribution function = TRUE; the probability density function = FALSE.
         */
        f_Dist(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom1: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom2: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the (right-tailed) F probability distribution (degree of diversity) for two data sets.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param x - Is the value at which to evaluate the function, a nonnegative number.
         * @param degFreedom1 - Is the numerator degrees of freedom, a number between 1 and 10^10, excluding 10^10.
         * @param degFreedom2 - Is the denominator degrees of freedom, a number between 1 and 10^10, excluding 10^10.
         */
        f_Dist_RT(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom1: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom2: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the inverse of the (left-tailed) F probability distribution: if p = F.DIST(x,...), then F.INV(p,...) = x.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param probability - Is a probability associated with the F cumulative distribution, a number between 0 and 1 inclusive.
         * @param degFreedom1 - Is the numerator degrees of freedom, a number between 1 and 10^10, excluding 10^10.
         * @param degFreedom2 - Is the denominator degrees of freedom, a number between 1 and 10^10, excluding 10^10.
         */
        f_Inv(probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom1: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom2: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the inverse of the (right-tailed) F probability distribution: if p = F.DIST.RT(x,...), then F.INV.RT(p,...) = x.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param probability - Is a probability associated with the F cumulative distribution, a number between 0 and 1 inclusive.
         * @param degFreedom1 - Is the numerator degrees of freedom, a number between 1 and 10^10, excluding 10^10.
         * @param degFreedom2 - Is the denominator degrees of freedom, a number between 1 and 10^10, excluding 10^10.
         */
        f_Inv_RT(probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom1: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom2: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the factorial of a number, equal to 1*2*3*...* Number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the nonnegative number you want the factorial of.
         */
        fact(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the double factorial of a number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the value for which to return the double factorial.
         */
        factDouble(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the logical value FALSE.
         *
         * [Api set: ExcelApi 1.2]
         */
        false(): FunctionResult<boolean>;
        /**
         *
         * Returns the starting position of one text string within another text string. FIND is case-sensitive.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param findText - Is the text you want to find. Use double quotes (empty text) to match the first character in withinText; wildcard characters not allowed.
         * @param withinText - Is the text containing the text you want to find.
         * @param startNum - Specifies the character at which to start the search. The first character in withinText is character number 1. If omitted, startNum = 1.
         */
        find(findText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, withinText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startNum?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Finds the starting position of one text string within another text string. FINDB is case-sensitive. Use with double-byte character sets (DBCS).
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param findText - Is the text you want to find.
         * @param withinText - Is the text containing the text you want to find.
         * @param startNum - Specifies the character at which to start the search.
         */
        findB(findText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, withinText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startNum?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the Fisher transformation.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param x - Is the value for which you want the transformation, a number between -1 and 1, excluding -1 and 1.
         */
        fisher(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the inverse of the Fisher transformation: if y = FISHER(x), then FISHERINV(y) = x.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param y - Is the value for which you want to perform the inverse of the transformation.
         */
        fisherInv(y: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Rounds a number to the specified number of decimals and returns the result as text with or without commas.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the number you want to round and convert to text.
         * @param decimals - Is the number of digits to the right of the decimal point. If omitted, Decimals = 2.
         * @param noCommas - Is a logical value: do not display commas in the returned text = TRUE; do display commas in the returned text = FALSE or omitted.
         */
        fixed(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, decimals?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, noCommas?: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Rounds a number down, to the nearest integer or to the nearest multiple of significance.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the value you want to round.
         * @param significance - Is the multiple to which you want to round.
         * @param mode - When given and nonzero this function will round towards zero.
         */
        floor_Math(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, significance?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, mode?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Rounds a number down, to the nearest integer or to the nearest multiple of significance.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the numeric value you want to round.
         * @param significance - Is the multiple to which you want to round.
         */
        floor_Precise(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, significance?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the future value of an investment based on periodic, constant payments and a constant interest rate.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param rate - Is the interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR.
         * @param nper - Is the total number of payment periods in the investment.
         * @param pmt - Is the payment made each period; it cannot change over the life of the investment.
         * @param pv - Is the present value, or the lump-sum amount that a series of future payments is worth now. If omitted, Pv = 0.
         * @param type - Is a value representing the timing of payment: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted.
         */
        fv(rate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, nper: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pmt: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, type?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the Gamma function value.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param x - Is the value for which you want to calculate Gamma.
         */
        gamma(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the natural logarithm of the gamma function.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param x - Is the value for which you want to calculate GAMMALN, a positive number.
         */
        gammaLn(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the natural logarithm of the gamma function.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param x - Is the value for which you want to calculate GAMMALN.PRECISE, a positive number.
         */
        gammaLn_Precise(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the gamma distribution.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param x - Is the value at which you want to evaluate the distribution, a nonnegative number.
         * @param alpha - Is a parameter to the distribution, a positive number.
         * @param beta - Is a parameter to the distribution, a positive number. If beta = 1, GAMMA.DIST returns the standard gamma distribution.
         * @param cumulative - Is a logical value: return the cumulative distribution function = TRUE; return the probability mass function = FALSE or omitted.
         */
        gamma_Dist(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, alpha: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, beta: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the inverse of the gamma cumulative distribution: if p = GAMMA.DIST(x,...), then GAMMA.INV(p,...) = x.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param probability - Is the probability associated with the gamma distribution, a number between 0 and 1, inclusive.
         * @param alpha - Is a parameter to the distribution, a positive number.
         * @param beta - Is a parameter to the distribution, a positive number. If beta = 1, GAMMA.INV returns the inverse of the standard gamma distribution.
         */
        gamma_Inv(probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, alpha: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, beta: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns 0.5 less than the standard normal cumulative distribution.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param x - Is the value for which you want the distribution.
         */
        gauss(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the greatest common divisor.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 values.
         */
        gcd(...values: Array<number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Tests whether a number is greater than a threshold value.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the value to test against step.
         * @param step - Is the threshold value.
         */
        geStep(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, step?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the geometric mean of an array or range of positive numeric data.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 numbers or names, arrays, or references that contain numbers for which you want the mean.
         */
        geoMean(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Looks for a value in the top row of a table or array of values and returns the value in the same column from a row you specify.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param lookupValue - Is the value to be found in the first row of the table and can be a value, a reference, or a text string.
         * @param tableArray - Is a table of text, numbers, or logical values in which data is looked up. tableArray can be a reference to a range or a range name.
         * @param rowIndexNum - Is the row number in tableArray from which the matching value should be returned. The first row of values in the table is row 1.
         * @param rangeLookup - Is a logical value: to find the closest match in the top row (sorted in ascending order) = TRUE or omitted; find an exact match = FALSE.
         */
        hlookup(lookupValue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, tableArray: Excel.Range | number | Excel.RangeReference | Excel.FunctionResult<any>, rowIndexNum: Excel.Range | number | Excel.RangeReference | Excel.FunctionResult<any>, rangeLookup?: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number | string | boolean>;
        /**
         *
         * Returns the harmonic mean of a data set of positive numbers: the reciprocal of the arithmetic mean of reciprocals.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 numbers or names, arrays, or references that contain numbers for which you want the harmonic mean.
         */
        harMean(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Converts a Hexadecimal number to binary.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the hexadecimal number you want to convert.
         * @param places - Is the number of characters to use.
         */
        hex2Bin(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, places?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a hexadecimal number to decimal.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the hexadecimal number you want to convert.
         */
        hex2Dec(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a hexadecimal number to octal.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the hexadecimal number you want to convert.
         * @param places - Is the number of characters to use.
         */
        hex2Oct(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, places?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the hour as a number from 0 (12:00 A.M.) to 23 (11:00 P.M.).
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param serialNumber - Is a number in the date-time code used by Microsoft Excel, or text in time format, such as 16:48:00 or 4:48:00 PM.
         */
        hour(serialNumber: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the hypergeometric distribution.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param sampleS - Is the number of successes in the sample.
         * @param numberSample - Is the size of the sample.
         * @param populationS - Is the number of successes in the population.
         * @param numberPop - Is the population size.
         * @param cumulative - Is a logical value: for the cumulative distribution function, use TRUE; for the probability density function, use FALSE.
         */
        hypGeom_Dist(sampleS: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberSample: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, populationS: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberPop: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Creates a shortcut or jump that opens a document stored on your hard drive, a network server, or on the Internet.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param linkLocation - Is the text giving the path and file name to the document to be opened, a hard drive location, UNC address, or URL path.
         * @param friendlyName - Is text or a number that is displayed in the cell. If omitted, the cell displays the linkLocation text.
         */
        hyperlink(linkLocation: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, friendlyName?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number | string | boolean>;
        /**
         *
         * Rounds a number up, to the nearest integer or to the nearest multiple of significance.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the value you want to round.
         * @param significance - Is the optional multiple to which you want to round.
         */
        iso_Ceiling(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, significance?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Checks whether a condition is met, and returns one value if TRUE, and another value if FALSE.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param logicalTest - Is any value or expression that can be evaluated to TRUE or FALSE.
         * @param valueIfTrue - Is the value that is returned if logicalTest is TRUE. If omitted, TRUE is returned. You can nest up to seven IF functions.
         * @param valueIfFalse - Is the value that is returned if logicalTest is FALSE. If omitted, FALSE is returned.
         */
        if(logicalTest: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, valueIfTrue?: Excel.Range | number | string | boolean | Excel.RangeReference | Excel.FunctionResult<any>, valueIfFalse?: Excel.Range | number | string | boolean | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number | string | boolean>;
        /**
         *
         * Returns the absolute value (modulus) of a complex number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param inumber - Is a complex number for which you want the absolute value.
         */
        imAbs(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the argument q, an angle expressed in radians.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param inumber - Is a complex number for which you want the argument.
         */
        imArgument(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the complex conjugate of a complex number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param inumber - Is a complex number for which you want the conjugate.
         */
        imConjugate(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the cosine of a complex number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param inumber - Is a complex number for which you want the cosine.
         */
        imCos(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the hyperbolic cosine of a complex number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param inumber - Is a complex number for which you want the hyperbolic cosine.
         */
        imCosh(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the cotangent of a complex number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param inumber - Is a complex number for which you want the cotangent.
         */
        imCot(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the cosecant of a complex number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param inumber - Is a complex number for which you want the cosecant.
         */
        imCsc(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the hyperbolic cosecant of a complex number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param inumber - Is a complex number for which you want the hyperbolic cosecant.
         */
        imCsch(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the quotient of two complex numbers.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param inumber1 - Is the complex numerator or dividend.
         * @param inumber2 - Is the complex denominator or divisor.
         */
        imDiv(inumber1: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, inumber2: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the exponential of a complex number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param inumber - Is a complex number for which you want the exponential.
         */
        imExp(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the natural logarithm of a complex number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param inumber - Is a complex number for which you want the natural logarithm.
         */
        imLn(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the base-10 logarithm of a complex number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param inumber - Is a complex number for which you want the common logarithm.
         */
        imLog10(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the base-2 logarithm of a complex number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param inumber - Is a complex number for which you want the base-2 logarithm.
         */
        imLog2(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns a complex number raised to an integer power.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param inumber - Is a complex number you want to raise to a power.
         * @param number - Is the power to which you want to raise the complex number.
         */
        imPower(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the product of 1 to 255 complex numbers.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - Inumber1, Inumber2,... are from 1 to 255 complex numbers to multiply.
         */
        imProduct(...values: Array<Excel.Range | number | string | boolean | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the real coefficient of a complex number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param inumber - Is a complex number for which you want the real coefficient.
         */
        imReal(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the secant of a complex number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param inumber - Is a complex number for which you want the secant.
         */
        imSec(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the hyperbolic secant of a complex number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param inumber - Is a complex number for which you want the hyperbolic secant.
         */
        imSech(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the sine of a complex number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param inumber - Is a complex number for which you want the sine.
         */
        imSin(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the hyperbolic sine of a complex number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param inumber - Is a complex number for which you want the hyperbolic sine.
         */
        imSinh(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the square root of a complex number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param inumber - Is a complex number for which you want the square root.
         */
        imSqrt(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the difference of two complex numbers.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param inumber1 - Is the complex number from which to subtract inumber2.
         * @param inumber2 - Is the complex number to subtract from inumber1.
         */
        imSub(inumber1: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, inumber2: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the sum of complex numbers.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are from 1 to 255 complex numbers to add.
         */
        imSum(...values: Array<Excel.Range | number | string | boolean | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the tangent of a complex number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param inumber - Is a complex number for which you want the tangent.
         */
        imTan(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the imaginary coefficient of a complex number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param inumber - Is a complex number for which you want the imaginary coefficient.
         */
        imaginary(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Rounds a number down to the nearest integer.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the real number you want to round down to an integer.
         */
        int(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the interest rate for a fully invested security.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param settlement - Is the security's settlement date, expressed as a serial date number.
         * @param maturity - Is the security's maturity date, expressed as a serial date number.
         * @param investment - Is the amount invested in the security.
         * @param redemption - Is the amount to be received at maturity.
         * @param basis - Is the type of day count basis to use.
         */
        intRate(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, investment: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the interest payment for a given period for an investment, based on periodic, constant payments and a constant interest rate.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param rate - Is the interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR.
         * @param per - Is the period for which you want to find the interest and must be in the range 1 to Nper.
         * @param nper - Is the total number of payment periods in an investment.
         * @param pv - Is the present value, or the lump-sum amount that a series of future payments is worth now.
         * @param fv - Is the future value, or a cash balance you want to attain after the last payment is made. If omitted, Fv = 0.
         * @param type - Is a logical value representing the timing of payment: at the end of the period = 0 or omitted, at the beginning of the period = 1.
         */
        ipmt(rate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, per: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, nper: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fv?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, type?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the internal rate of return for a series of cash flows.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - Is an array or a reference to cells that contain numbers for which you want to calculate the internal rate of return.
         * @param guess - Is a number that you guess is close to the result of IRR; 0.1 (10 percent) if omitted.
         */
        irr(values: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, guess?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Checks whether a value is an error (#VALUE!, #REF!, #DIV/0!, #NUM!, #NAME?, or #NULL!) excluding #N/A, and returns TRUE or FALSE.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param value - Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value.
         */
        isErr(value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<boolean>;
        /**
         *
         * Checks whether a value is an error (#N/A, #VALUE!, #REF!, #DIV/0!, #NUM!, #NAME?, or #NULL!), and returns TRUE or FALSE.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param value - Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value.
         */
        isError(value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<boolean>;
        /**
         *
         * Returns TRUE if the number is even.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the value to test.
         */
        isEven(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Checks whether a reference is to a cell containing a formula, and returns TRUE or FALSE.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param reference - Is a reference to the cell you want to test.  Reference can be a cell reference, a formula, or name that refers to a cell.
         */
        isFormula(reference: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<boolean>;
        /**
         *
         * Checks whether a value is a logical value (TRUE or FALSE), and returns TRUE or FALSE.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param value - Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value.
         */
        isLogical(value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<boolean>;
        /**
         *
         * Checks whether a value is #N/A, and returns TRUE or FALSE.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param value - Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value.
         */
        isNA(value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<boolean>;
        /**
         *
         * Checks whether a value is not text (blank cells are not text), and returns TRUE or FALSE.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param value - Is the value you want tested: a cell; a formula; or a name referring to a cell, formula, or value.
         */
        isNonText(value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<boolean>;
        /**
         *
         * Checks whether a value is a number, and returns TRUE or FALSE.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param value - Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value.
         */
        isNumber(value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<boolean>;
        /**
         *
         * Returns TRUE if the number is odd.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the value to test.
         */
        isOdd(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Checks whether a value is text, and returns TRUE or FALSE.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param value - Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value.
         */
        isText(value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<boolean>;
        /**
         *
         * Returns the ISO week number in the year for a given date.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param date - Is the date-time code used by Microsoft Excel for date and time calculation.
         */
        isoWeekNum(date: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the interest paid during a specific period of an investment.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param rate - Interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR.
         * @param per - Period for which you want to find the interest.
         * @param nper - Number of payment periods in an investment.
         * @param pv - Lump sum amount that a series of future payments is right now.
         */
        ispmt(rate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, per: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, nper: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Checks whether a value is a reference, and returns TRUE or FALSE.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param value - Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value.
         */
        isref(value: Excel.Range | number | string | boolean | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<boolean>;
        /**
         *
         * Returns the kurtosis of a data set.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 numbers or names, arrays, or references that contain numbers for which you want the kurtosis.
         */
        kurt(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the k-th largest value in a data set. For example, the fifth largest number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param array - Is the array or range of data for which you want to determine the k-th largest value.
         * @param k - Is the position (from the largest) in the array or cell range of the value to return.
         */
        large(array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, k: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the least common multiple.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 values for which you want the least common multiple.
         */
        lcm(...values: Array<number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the specified number of characters from the start of a text string.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param text - Is the text string containing the characters you want to extract.
         * @param numChars - Specifies how many characters you want LEFT to extract; 1 if omitted.
         */
        left(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numChars?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the specified number of characters from the start of a text string. Use with double-byte character sets (DBCS).
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param text - Is the text string containing the characters you want to extract.
         * @param numBytes - Specifies how many characters you want LEFT to return.
         */
        leftb(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numBytes?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the number of characters in a text string.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param text - Is the text whose length you want to find. Spaces count as characters.
         */
        len(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of characters in a text string. Use with double-byte character sets (DBCS).
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param text - Is the text whose length you want to find.
         */
        lenb(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the natural logarithm of a number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the positive real number for which you want the natural logarithm.
         */
        ln(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the logarithm of a number to the base you specify.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the positive real number for which you want the logarithm.
         * @param base - Is the base of the logarithm; 10 if omitted.
         */
        log(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, base?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the base-10 logarithm of a number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the positive real number for which you want the base-10 logarithm.
         */
        log10(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the lognormal distribution of x, where ln(x) is normally distributed with parameters Mean and Standard_dev.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param x - Is the value at which to evaluate the function, a positive number.
         * @param mean - Is the mean of ln(x).
         * @param standardDev - Is the standard deviation of ln(x), a positive number.
         * @param cumulative - Is a logical value: for the cumulative distribution function, use TRUE; for the probability density function, use FALSE.
         */
        logNorm_Dist(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, mean: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, standardDev: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the inverse of the lognormal cumulative distribution function of x, where ln(x) is normally distributed with parameters Mean and Standard_dev.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param probability - Is a probability associated with the lognormal distribution, a number between 0 and 1, inclusive.
         * @param mean - Is the mean of ln(x).
         * @param standardDev - Is the standard deviation of ln(x), a positive number.
         */
        logNorm_Inv(probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, mean: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, standardDev: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Looks up a value either from a one-row or one-column range or from an array. Provided for backward compatibility.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param lookupValue - Is a value that LOOKUP searches for in lookupVector and can be a number, text, a logical value, or a name or reference to a value.
         * @param lookupVector - Is a range that contains only one row or one column of text, numbers, or logical values, placed in ascending order.
         * @param resultVector - Is a range that contains only one row or column, the same size as lookupVector.
         */
        lookup(lookupValue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, lookupVector: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, resultVector?: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number | string | boolean>;
        /**
         *
         * Converts all letters in a text string to lowercase.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param text - Is the text you want to convert to lowercase. Characters in Text that are not letters are not changed.
         */
        lower(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the Macauley modified duration for a security with an assumed par value of $100.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param settlement - Is the security's settlement date, expressed as a serial date number.
         * @param maturity - Is the security's maturity date, expressed as a serial date number.
         * @param coupon - Is the security's annual coupon rate.
         * @param yld - Is the security's annual yield.
         * @param frequency - Is the number of coupon payments per year.
         * @param basis - Is the type of day count basis to use.
         */
        mduration(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, coupon: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, yld: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the internal rate of return for a series of periodic cash flows, considering both cost of investment and interest on reinvestment of cash.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - Is an array or a reference to cells that contain numbers that represent a series of payments (negative) and income (positive) at regular periods.
         * @param financeRate - Is the interest rate you pay on the money used in the cash flows.
         * @param reinvestRate - Is the interest rate you receive on the cash flows as you reinvest them.
         */
        mirr(values: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, financeRate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, reinvestRate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns a number rounded to the desired multiple.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the value to round.
         * @param multiple - Is the multiple to which you want to round number.
         */
        mround(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, multiple: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the relative position of an item in an array that matches a specified value in a specified order.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param lookupValue - Is the value you use to find the value you want in the array, a number, text, or logical value, or a reference to one of these.
         * @param lookupArray - Is a contiguous range of cells containing possible lookup values, an array of values, or a reference to an array.
         * @param matchType - Is a number 1, 0, or -1 indicating which value to return.
         */
        match(lookupValue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, lookupArray: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, matchType?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the largest value in a set of values. Ignores logical values and text.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 numbers, empty cells, logical values, or text numbers for which you want the maximum.
         */
        max(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the largest value in a set of values. Does not ignore logical values and text.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 numbers, empty cells, logical values, or text numbers for which you want the maximum.
         */
        maxA(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the median, or the number in the middle of the set of given numbers.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 numbers or names, arrays, or references that contain numbers for which you want the median.
         */
        median(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the characters from the middle of a text string, given a starting position and length.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param text - Is the text string from which you want to extract the characters.
         * @param startNum - Is the position of the first character you want to extract. The first character in Text is 1.
         * @param numChars - Specifies how many characters to return from Text.
         */
        mid(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startNum: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numChars: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns characters from the middle of a text string, given a starting position and length. Use with double-byte character sets (DBCS).
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param text - Is the text string containing the characters you want to extract.
         * @param startNum - Is the position of the first character you want to extract in text.
         * @param numBytes - Specifies how many characters to return from text.
         */
        midb(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startNum: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numBytes: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the smallest number in a set of values. Ignores logical values and text.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 numbers, empty cells, logical values, or text numbers for which you want the minimum.
         */
        min(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the smallest value in a set of values. Does not ignore logical values and text.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 numbers, empty cells, logical values, or text numbers for which you want the minimum.
         */
        minA(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the minute, a number from 0 to 59.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param serialNumber - Is a number in the date-time code used by Microsoft Excel or text in time format, such as 16:48:00 or 4:48:00 PM.
         */
        minute(serialNumber: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the remainder after a number is divided by a divisor.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the number for which you want to find the remainder after the division is performed.
         * @param divisor - Is the number by which you want to divide Number.
         */
        mod(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, divisor: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the month, a number from 1 (January) to 12 (December).
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param serialNumber - Is a number in the date-time code used by Microsoft Excel.
         */
        month(serialNumber: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the multinomial of a set of numbers.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 values for which you want the multinomial.
         */
        multiNomial(...values: Array<number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Converts non-number value to a number, dates to serial numbers, TRUE to 1, anything else to 0 (zero).
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param value - Is the value you want converted.
         */
        n(value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of periods for an investment based on periodic, constant payments and a constant interest rate.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param rate - Is the interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR.
         * @param pmt - Is the payment made each period; it cannot change over the life of the investment.
         * @param pv - Is the present value, or the lump-sum amount that a series of future payments is worth now.
         * @param fv - Is the future value, or a cash balance you want to attain after the last payment is made. If omitted, zero is used.
         * @param type - Is a logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted.
         */
        nper(rate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pmt: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fv?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, type?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the error value #N/A (value not available).
         *
         * [Api set: ExcelApi 1.2]
         */
        na(): FunctionResult<number | string>;
        /**
         *
         * Returns the negative binomial distribution, the probability that there will be Number_f failures before the Number_s-th success, with Probability_s probability of a success.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param numberF - Is the number of failures.
         * @param numberS - Is the threshold number of successes.
         * @param probabilityS - Is the probability of a success; a number between 0 and 1.
         * @param cumulative - Is a logical value: for the cumulative distribution function, use TRUE; for the probability mass function, use FALSE.
         */
        negBinom_Dist(numberF: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberS: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, probabilityS: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of whole workdays between two dates.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param startDate - Is a serial date number that represents the start date.
         * @param endDate - Is a serial date number that represents the end date.
         * @param holidays - Is an optional set of one or more serial date numbers to exclude from the working calendar, such as state and federal holidays and floating holidays.
         */
        networkDays(startDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, endDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, holidays?: number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of whole workdays between two dates with custom weekend parameters.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param startDate - Is a serial date number that represents the start date.
         * @param endDate - Is a serial date number that represents the end date.
         * @param weekend - Is a number or string specifying when weekends occur.
         * @param holidays - Is an optional set of one or more serial date numbers to exclude from the working calendar, such as state and federal holidays and floating holidays.
         */
        networkDays_Intl(startDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, endDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, weekend?: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, holidays?: number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the annual nominal interest rate.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param effectRate - Is the effective interest rate.
         * @param npery - Is the number of compounding periods per year.
         */
        nominal(effectRate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, npery: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the normal distribution for the specified mean and standard deviation.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param x - Is the value for which you want the distribution.
         * @param mean - Is the arithmetic mean of the distribution.
         * @param standardDev - Is the standard deviation of the distribution, a positive number.
         * @param cumulative - Is a logical value: for the cumulative distribution function, use TRUE; for the probability density function, use FALSE.
         */
        norm_Dist(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, mean: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, standardDev: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the inverse of the normal cumulative distribution for the specified mean and standard deviation.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param probability - Is a probability corresponding to the normal distribution, a number between 0 and 1 inclusive.
         * @param mean - Is the arithmetic mean of the distribution.
         * @param standardDev - Is the standard deviation of the distribution, a positive number.
         */
        norm_Inv(probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, mean: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, standardDev: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the standard normal distribution (has a mean of zero and a standard deviation of one).
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param z - Is the value for which you want the distribution.
         * @param cumulative - Is a logical value for the function to return: the cumulative distribution function = TRUE; the probability density function = FALSE.
         */
        norm_S_Dist(z: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the inverse of the standard normal cumulative distribution (has a mean of zero and a standard deviation of one).
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param probability - Is a probability corresponding to the normal distribution, a number between 0 and 1 inclusive.
         */
        norm_S_Inv(probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Changes FALSE to TRUE, or TRUE to FALSE.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param logical - Is a value or expression that can be evaluated to TRUE or FALSE.
         */
        not(logical: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<boolean>;
        /**
         *
         * Returns the current date and time formatted as a date and time.
         *
         * [Api set: ExcelApi 1.2]
         */
        now(): FunctionResult<number>;
        /**
         *
         * Returns the net present value of an investment based on a discount rate and a series of future payments (negative values) and income (positive values).
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param rate - Is the rate of discount over the length of one period.
         * @param values - List of parameters, whose elements are 1 to 254 payments and income, equally spaced in time and occurring at the end of each period.
         */
        npv(rate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, ...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Converts text to number in a locale-independent manner.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param text - Is the string representing the number you want to convert.
         * @param decimalSeparator - Is the character used as the decimal separator in the string.
         * @param groupSeparator - Is the character used as the group separator in the string.
         */
        numberValue(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, decimalSeparator?: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, groupSeparator?: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts an octal number to binary.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the octal number you want to convert.
         * @param places - Is the number of characters to use.
         */
        oct2Bin(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, places?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts an octal number to decimal.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the octal number you want to convert.
         */
        oct2Dec(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts an octal number to hexadecimal.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the octal number you want to convert.
         * @param places - Is the number of characters to use.
         */
        oct2Hex(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, places?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Rounds a positive number up and negative number down to the nearest odd integer.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the value to round.
         */
        odd(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the price per $100 face value of a security with an odd first period.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param settlement - Is the security's settlement date, expressed as a serial date number.
         * @param maturity - Is the security's maturity date, expressed as a serial date number.
         * @param issue - Is the security's issue date, expressed as a serial date number.
         * @param firstCoupon - Is the security's first coupon date, expressed as a serial date number.
         * @param rate - Is the security's interest rate.
         * @param yld - Is the security's annual yield.
         * @param redemption - Is the security's redemption value per $100 face value.
         * @param frequency - Is the number of coupon payments per year.
         * @param basis - Is the type of day count basis to use.
         */
        oddFPrice(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, issue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, firstCoupon: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, yld: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the yield of a security with an odd first period.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param settlement - Is the security's settlement date, expressed as a serial date number.
         * @param maturity - Is the security's maturity date, expressed as a serial date number.
         * @param issue - Is the security's issue date, expressed as a serial date number.
         * @param firstCoupon - Is the security's first coupon date, expressed as a serial date number.
         * @param rate - Is the security's interest rate.
         * @param pr - Is the security's price.
         * @param redemption - Is the security's redemption value per $100 face value.
         * @param frequency - Is the number of coupon payments per year.
         * @param basis - Is the type of day count basis to use.
         */
        oddFYield(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, issue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, firstCoupon: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pr: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the price per $100 face value of a security with an odd last period.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param settlement - Is the security's settlement date, expressed as a serial date number.
         * @param maturity - Is the security's maturity date, expressed as a serial date number.
         * @param lastInterest - Is the security's last coupon date, expressed as a serial date number.
         * @param rate - Is the security's interest rate.
         * @param yld - Is the security's annual yield.
         * @param redemption - Is the security's redemption value per $100 face value.
         * @param frequency - Is the number of coupon payments per year.
         * @param basis - Is the type of day count basis to use.
         */
        oddLPrice(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, lastInterest: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, yld: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the yield of a security with an odd last period.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param settlement - Is the security's settlement date, expressed as a serial date number.
         * @param maturity - Is the security's maturity date, expressed as a serial date number.
         * @param lastInterest - Is the security's last coupon date, expressed as a serial date number.
         * @param rate - Is the security's interest rate.
         * @param pr - Is the security's price.
         * @param redemption - Is the security's redemption value per $100 face value.
         * @param frequency - Is the number of coupon payments per year.
         * @param basis - Is the type of day count basis to use.
         */
        oddLYield(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, lastInterest: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pr: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Checks whether any of the arguments are TRUE, and returns TRUE or FALSE. Returns FALSE only if all arguments are FALSE.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 conditions that you want to test that can be either TRUE or FALSE.
         */
        or(...values: Array<boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<boolean>;
        /**
         *
         * Returns the number of periods required by an investment to reach a specified value.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param rate - Is the interest rate per period.
         * @param pv - Is the present value of the investment.
         * @param fv - Is the desired future value of the investment.
         */
        pduration(rate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the rank of a value in a data set as a percentage of the data set as a percentage (0..1, exclusive) of the data set.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param array - Is the array or range of data with numeric values that defines relative standing.
         * @param x - Is the value for which you want to know the rank.
         * @param significance - Is an optional value that identifies the number of significant digits for the returned percentage, three digits if omitted (0.xxx%).
         */
        percentRank_Exc(array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, significance?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the rank of a value in a data set as a percentage of the data set as a percentage (0..1, inclusive) of the data set.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param array - Is the array or range of data with numeric values that defines relative standing.
         * @param x - Is the value for which you want to know the rank.
         * @param significance - Is an optional value that identifies the number of significant digits for the returned percentage, three digits if omitted (0.xxx%).
         */
        percentRank_Inc(array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, significance?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the k-th percentile of values in a range, where k is in the range 0..1, exclusive.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param array - Is the array or range of data that defines relative standing.
         * @param k - Is the percentile value that is between 0 through 1, inclusive.
         */
        percentile_Exc(array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, k: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the k-th percentile of values in a range, where k is in the range 0..1, inclusive.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param array - Is the array or range of data that defines relative standing.
         * @param k - Is the percentile value that is between 0 through 1, inclusive.
         */
        percentile_Inc(array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, k: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of permutations for a given number of objects that can be selected from the total objects.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the total number of objects.
         * @param numberChosen - Is the number of objects in each permutation.
         */
        permut(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberChosen: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of permutations for a given number of objects (with repetitions) that can be selected from the total objects.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the total number of objects.
         * @param numberChosen - Is the number of objects in each permutation.
         */
        permutationa(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberChosen: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the value of the density function for a standard normal distribution.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param x - Is the number for which you want the density of the standard normal distribution.
         */
        phi(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the value of Pi, 3.14159265358979, accurate to 15 digits.
         *
         * [Api set: ExcelApi 1.2]
         */
        pi(): FunctionResult<number>;
        /**
         *
         * Calculates the payment for a loan based on constant payments and a constant interest rate.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param rate - Is the interest rate per period for the loan. For example, use 6%/4 for quarterly payments at 6% APR.
         * @param nper - Is the total number of payments for the loan.
         * @param pv - Is the present value: the total amount that a series of future payments is worth now.
         * @param fv - Is the future value, or a cash balance you want to attain after the last payment is made, 0 (zero) if omitted.
         * @param type - Is a logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted.
         */
        pmt(rate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, nper: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fv?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, type?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the Poisson distribution.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param x - Is the number of events.
         * @param mean - Is the expected numeric value, a positive number.
         * @param cumulative - Is a logical value: for the cumulative Poisson probability, use TRUE; for the Poisson probability mass function, use FALSE.
         */
        poisson_Dist(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, mean: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the result of a number raised to a power.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the base number, any real number.
         * @param power - Is the exponent, to which the base number is raised.
         */
        power(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, power: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the payment on the principal for a given investment based on periodic, constant payments and a constant interest rate.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param rate - Is the interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR.
         * @param per - Specifies the period and must be in the range 1 to nper.
         * @param nper - Is the total number of payment periods in an investment.
         * @param pv - Is the present value: the total amount that a series of future payments is worth now.
         * @param fv - Is the future value, or cash balance you want to attain after the last payment is made.
         * @param type - Is a logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted.
         */
        ppmt(rate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, per: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, nper: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fv?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, type?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the price per $100 face value of a security that pays periodic interest.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param settlement - Is the security's settlement date, expressed as a serial date number.
         * @param maturity - Is the security's maturity date, expressed as a serial date number.
         * @param rate - Is the security's annual coupon rate.
         * @param yld - Is the security's annual yield.
         * @param redemption - Is the security's redemption value per $100 face value.
         * @param frequency - Is the number of coupon payments per year.
         * @param basis - Is the type of day count basis to use.
         */
        price(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, yld: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the price per $100 face value of a discounted security.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param settlement - Is the security's settlement date, expressed as a serial date number.
         * @param maturity - Is the security's maturity date, expressed as a serial date number.
         * @param discount - Is the security's discount rate.
         * @param redemption - Is the security's redemption value per $100 face value.
         * @param basis - Is the type of day count basis to use.
         */
        priceDisc(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, discount: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the price per $100 face value of a security that pays interest at maturity.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param settlement - Is the security's settlement date, expressed as a serial date number.
         * @param maturity - Is the security's maturity date, expressed as a serial date number.
         * @param issue - Is the security's issue date, expressed as a serial date number.
         * @param rate - Is the security's interest rate at date of issue.
         * @param yld - Is the security's annual yield.
         * @param basis - Is the type of day count basis to use.
         */
        priceMat(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, issue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, yld: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Multiplies all the numbers given as arguments.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 numbers, logical values, or text representations of numbers that you want to multiply.
         */
        product(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Converts a text string to proper case; the first letter in each word to uppercase, and all other letters to lowercase.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param text - Is text enclosed in quotation marks, a formula that returns text, or a reference to a cell containing text to partially capitalize.
         */
        proper(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the present value of an investment: the total amount that a series of future payments is worth now.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param rate - Is the interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR.
         * @param nper - Is the total number of payment periods in an investment.
         * @param pmt - Is the payment made each period and cannot change over the life of the investment.
         * @param fv - Is the future value, or a cash balance you want to attain after the last payment is made.
         * @param type - Is a logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted.
         */
        pv(rate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, nper: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pmt: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fv?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, type?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the quartile of a data set, based on percentile values from 0..1, exclusive.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param array - Is the array or cell range of numeric values for which you want the quartile value.
         * @param quart - Is a number: minimum value = 0; 1st quartile = 1; median value = 2; 3rd quartile = 3; maximum value = 4.
         */
        quartile_Exc(array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, quart: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the quartile of a data set, based on percentile values from 0..1, inclusive.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param array - Is the array or cell range of numeric values for which you want the quartile value.
         * @param quart - Is a number: minimum value = 0; 1st quartile = 1; median value = 2; 3rd quartile = 3; maximum value = 4.
         */
        quartile_Inc(array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, quart: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the integer portion of a division.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param numerator - Is the dividend.
         * @param denominator - Is the divisor.
         */
        quotient(numerator: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, denominator: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts degrees to radians.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param angle - Is an angle in degrees that you want to convert.
         */
        radians(angle: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns a random number greater than or equal to 0 and less than 1, evenly distributed (changes on recalculation).
         *
         * [Api set: ExcelApi 1.2]
         */
        rand(): FunctionResult<number>;
        /**
         *
         * Returns a random number between the numbers you specify.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param bottom - Is the smallest integer RANDBETWEEN will return.
         * @param top - Is the largest integer RANDBETWEEN will return.
         */
        randBetween(bottom: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, top: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the rank of a number in a list of numbers: its size relative to other values in the list; if more than one value has the same rank, the average rank is returned.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the number for which you want to find the rank.
         * @param ref - Is an array of, or a reference to, a list of numbers. Nonnumeric values are ignored.
         * @param order - Is a number: rank in the list sorted descending = 0 or omitted; rank in the list sorted ascending = any nonzero value.
         */
        rank_Avg(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, ref: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, order?: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the rank of a number in a list of numbers: its size relative to other values in the list; if more than one value has the same rank, the top rank of that set of values is returned.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the number for which you want to find the rank.
         * @param ref - Is an array of, or a reference to, a list of numbers. Nonnumeric values are ignored.
         * @param order - Is a number: rank in the list sorted descending = 0 or omitted; rank in the list sorted ascending = any nonzero value.
         */
        rank_Eq(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, ref: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, order?: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the interest rate per period of a loan or an investment. For example, use 6%/4 for quarterly payments at 6% APR.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param nper - Is the total number of payment periods for the loan or investment.
         * @param pmt - Is the payment made each period and cannot change over the life of the loan or investment.
         * @param pv - Is the present value: the total amount that a series of future payments is worth now.
         * @param fv - Is the future value, or a cash balance you want to attain after the last payment is made. If omitted, uses Fv = 0.
         * @param type - Is a logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted.
         * @param guess - Is your guess for what the rate will be; if omitted, Guess = 0.1 (10 percent).
         */
        rate(nper: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pmt: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fv?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, type?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, guess?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the amount received at maturity for a fully invested security.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param settlement - Is the security's settlement date, expressed as a serial date number.
         * @param maturity - Is the security's maturity date, expressed as a serial date number.
         * @param investment - Is the amount invested in the security.
         * @param discount - Is the security's discount rate.
         * @param basis - Is the type of day count basis to use.
         */
        received(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, investment: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, discount: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Replaces part of a text string with a different text string.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param oldText - Is text in which you want to replace some characters.
         * @param startNum - Is the position of the character in oldText that you want to replace with newText.
         * @param numChars - Is the number of characters in oldText that you want to replace.
         * @param newText - Is the text that will replace characters in oldText.
         */
        replace(oldText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startNum: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numChars: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, newText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Replaces part of a text string with a different text string. Use with double-byte character sets (DBCS).
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param oldText - Is text in which you want to replace some characters.
         * @param startNum - Is the position of the character in oldText that you want to replace with newText.
         * @param numBytes - Is the number of characters in oldText that you want to replace with newText.
         * @param newText - Is the text that will replace characters in oldText.
         */
        replaceB(oldText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startNum: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numBytes: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, newText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Repeats text a given number of times. Use REPT to fill a cell with a number of instances of a text string.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param text - Is the text you want to repeat.
         * @param numberTimes - Is a positive number specifying the number of times to repeat text.
         */
        rept(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberTimes: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the specified number of characters from the end of a text string.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param text - Is the text string that contains the characters you want to extract.
         * @param numChars - Specifies how many characters you want to extract, 1 if omitted.
         */
        right(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numChars?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the specified number of characters from the end of a text string. Use with double-byte character sets (DBCS).
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param text - Is the text string containing the characters you want to extract.
         * @param numBytes - Specifies how many characters you want to extract.
         */
        rightb(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numBytes?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Converts an Arabic numeral to Roman, as text.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the Arabic numeral you want to convert.
         * @param form - Is the number specifying the type of Roman numeral you want.
         */
        roman(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, form?: boolean | number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Rounds a number to a specified number of digits.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the number you want to round.
         * @param numDigits - Is the number of digits to which you want to round. Negative rounds to the left of the decimal point; zero to the nearest integer.
         */
        round(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numDigits: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Rounds a number down, toward zero.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is any real number that you want rounded down.
         * @param numDigits - Is the number of digits to which you want to round. Negative rounds to the left of the decimal point; zero or omitted, to the nearest integer.
         */
        roundDown(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numDigits: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Rounds a number up, away from zero.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is any real number that you want rounded up.
         * @param numDigits - Is the number of digits to which you want to round. Negative rounds to the left of the decimal point; zero or omitted, to the nearest integer.
         */
        roundUp(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numDigits: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of rows in a reference or array.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param array - Is an array, an array formula, or a reference to a range of cells for which you want the number of rows.
         */
        rows(array: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns an equivalent interest rate for the growth of an investment.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param nper - Is the number of periods for the investment.
         * @param pv - Is the present value of the investment.
         * @param fv - Is the future value of the investment.
         */
        rri(nper: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the secant of an angle.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the angle in radians for which you want the secant.
         */
        sec(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the hyperbolic secant of an angle.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the angle in radians for which you want the hyperbolic secant.
         */
        sech(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the second, a number from 0 to 59.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param serialNumber - Is a number in the date-time code used by Microsoft Excel or text in time format, such as 16:48:23 or 4:48:47 PM.
         */
        second(serialNumber: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the sum of a power series based on the formula.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param x - Is the input value to the power series.
         * @param n - Is the initial power to which you want to raise x.
         * @param m - Is the step by which to increase n for each term in the series.
         * @param coefficients - Is a set of coefficients by which each successive power of x is multiplied.
         */
        seriesSum(x: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, n: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, m: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, coefficients: Excel.Range | string | number | boolean | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the sheet number of the referenced sheet.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param value - Is the name of a sheet or a reference that you want the sheet number of.  If omitted the number of the sheet containing the function is returned.
         */
        sheet(value?: Excel.Range | string | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of sheets in a reference.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param reference - Is a reference for which you want to know the number of sheets it contains.  If omitted the number of sheets in the workbook containing the function is returned.
         */
        sheets(reference?: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the sign of a number: 1 if the number is positive, zero if the number is zero, or -1 if the number is negative.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is any real number.
         */
        sign(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the sine of an angle.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the angle in radians for which you want the sine. Degrees * PI()/180 = radians.
         */
        sin(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the hyperbolic sine of a number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is any real number.
         */
        sinh(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the skewness of a distribution: a characterization of the degree of asymmetry of a distribution around its mean.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 numbers or names, arrays, or references that contain numbers for which you want the skewness.
         */
        skew(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the skewness of a distribution based on a population: a characterization of the degree of asymmetry of a distribution around its mean.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 254 numbers or names, arrays, or references that contain numbers for which you want the population skewness.
         */
        skew_p(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the straight-line depreciation of an asset for one period.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param cost - Is the initial cost of the asset.
         * @param salvage - Is the salvage value at the end of the life of the asset.
         * @param life - Is the number of periods over which the asset is being depreciated (sometimes called the useful life of the asset).
         */
        sln(cost: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, salvage: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, life: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the k-th smallest value in a data set. For example, the fifth smallest number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param array - Is an array or range of numerical data for which you want to determine the k-th smallest value.
         * @param k - Is the position (from the smallest) in the array or range of the value to return.
         */
        small(array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, k: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the square root of a number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the number for which you want the square root.
         */
        sqrt(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the square root of (number * Pi).
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the number by which p is multiplied.
         */
        sqrtPi(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Estimates standard deviation based on a sample, including logical values and text. Text and the logical value FALSE have the value 0; the logical value TRUE has the value 1.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 values corresponding to a sample of a population and can be values or names or references to values.
         */
        stDevA(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Calculates standard deviation based on an entire population, including logical values and text. Text and the logical value FALSE have the value 0; the logical value TRUE has the value 1.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 values corresponding to a population and can be values, names, arrays, or references that contain values.
         */
        stDevPA(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Calculates standard deviation based on the entire population given as arguments (ignores logical values and text).
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 numbers corresponding to a population and can be numbers or references that contain numbers.
         */
        stDev_P(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Estimates standard deviation based on a sample (ignores logical values and text in the sample).
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 numbers corresponding to a sample of a population and can be numbers or references that contain numbers.
         */
        stDev_S(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns a normalized value from a distribution characterized by a mean and standard deviation.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param x - Is the value you want to normalize.
         * @param mean - Is the arithmetic mean of the distribution.
         * @param standardDev - Is the standard deviation of the distribution, a positive number.
         */
        standardize(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, mean: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, standardDev: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Replaces existing text with new text in a text string.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param text - Is the text or the reference to a cell containing text in which you want to substitute characters.
         * @param oldText - Is the existing text you want to replace. If the case of oldText does not match the case of text, SUBSTITUTE will not replace the text.
         * @param newText - Is the text you want to replace oldText with.
         * @param instanceNum - Specifies which occurrence of oldText you want to replace. If omitted, every instance of oldText is replaced.
         */
        substitute(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, oldText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, newText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, instanceNum?: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns a subtotal in a list or database.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param functionNum - Is the number 1 to 11 that specifies the summary function for the subtotal.
         * @param values - List of parameters, whose elements are 1 to 254 ranges or references for which you want the subtotal.
         */
        subtotal(functionNum: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, ...values: Array<Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Adds all the numbers in a range of cells.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 numbers to sum. Logical values and text are ignored in cells, included if typed as arguments.
         */
        sum(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Adds the cells specified by a given condition or criteria.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param range - Is the range of cells you want evaluated.
         * @param criteria - Is the condition or criteria in the form of a number, expression, or text that defines which cells will be added.
         * @param sumRange - Are the actual cells to sum. If omitted, the cells in range are used.
         */
        sumIf(range: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, sumRange?: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Adds the cells specified by a given set of conditions or criteria.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param sumRange - Are the actual cells to sum.
         * @param values - List of parameters, where the first element of each pair is the Is the range of cells you want evaluated for the particular condition , and the second element is is the condition or criteria in the form of a number, expression, or text that defines which cells will be added.
         */
        sumIfs(sumRange: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, ...values: Array<Excel.Range | Excel.RangeReference | Excel.FunctionResult<any> | number | string | boolean>): FunctionResult<number>;
        /**
         *
         * Returns the sum of the squares of the arguments. The arguments can be numbers, arrays, names, or references to cells that contain numbers.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 numbers, arrays, names, or references to arrays for which you want the sum of the squares.
         */
        sumSq(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the sum-of-years' digits depreciation of an asset for a specified period.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param cost - Is the initial cost of the asset.
         * @param salvage - Is the salvage value at the end of the life of the asset.
         * @param life - Is the number of periods over which the asset is being depreciated (sometimes called the useful life of the asset).
         * @param per - Is the period and must use the same units as Life.
         */
        syd(cost: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, salvage: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, life: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, per: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Checks whether a value is text, and returns the text if it is, or returns double quotes (empty text) if it is not.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param value - Is the value to test.
         */
        t(value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the bond-equivalent yield for a treasury bill.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param settlement - Is the Treasury bill's settlement date, expressed as a serial date number.
         * @param maturity - Is the Treasury bill's maturity date, expressed as a serial date number.
         * @param discount - Is the Treasury bill's discount rate.
         */
        tbillEq(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, discount: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the price per $100 face value for a treasury bill.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param settlement - Is the Treasury bill's settlement date, expressed as a serial date number.
         * @param maturity - Is the Treasury bill's maturity date, expressed as a serial date number.
         * @param discount - Is the Treasury bill's discount rate.
         */
        tbillPrice(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, discount: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the yield for a treasury bill.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param settlement - Is the Treasury bill's settlement date, expressed as a serial date number.
         * @param maturity - Is the Treasury bill's maturity date, expressed as a serial date number.
         * @param pr - Is the Treasury Bill's price per $100 face value.
         */
        tbillYield(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pr: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the left-tailed Student's t-distribution.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param x - Is the numeric value at which to evaluate the distribution.
         * @param degFreedom - Is an integer indicating the number of degrees of freedom that characterize the distribution.
         * @param cumulative - Is a logical value: for the cumulative distribution function, use TRUE; for the probability density function, use FALSE.
         */
        t_Dist(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the two-tailed Student's t-distribution.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param x - Is the numeric value at which to evaluate the distribution.
         * @param degFreedom - Is an integer indicating the number of degrees of freedom that characterize the distribution.
         */
        t_Dist_2T(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the right-tailed Student's t-distribution.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param x - Is the numeric value at which to evaluate the distribution.
         * @param degFreedom - Is an integer indicating the number of degrees of freedom that characterize the distribution.
         */
        t_Dist_RT(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the left-tailed inverse of the Student's t-distribution.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param probability - Is the probability associated with the two-tailed Student's t-distribution, a number between 0 and 1 inclusive.
         * @param degFreedom - Is a positive integer indicating the number of degrees of freedom to characterize the distribution.
         */
        t_Inv(probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the two-tailed inverse of the Student's t-distribution.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param probability - Is the probability associated with the two-tailed Student's t-distribution, a number between 0 and 1 inclusive.
         * @param degFreedom - Is a positive integer indicating the number of degrees of freedom to characterize the distribution.
         */
        t_Inv_2T(probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the tangent of an angle.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the angle in radians for which you want the tangent. Degrees * PI()/180 = radians.
         */
        tan(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the hyperbolic tangent of a number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is any real number.
         */
        tanh(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a value to text in a specific number format.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param value - Is a number, a formula that evaluates to a numeric value, or a reference to a cell containing a numeric value.
         * @param formatText - Is a number format in text form from the Category box on the Number tab in the Format Cells dialog box (not General).
         */
        text(value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, formatText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Converts hours, minutes, and seconds given as numbers to an Excel serial number, formatted with a time format.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param hour - Is a number from 0 to 23 representing the hour.
         * @param minute - Is a number from 0 to 59 representing the minute.
         * @param second - Is a number from 0 to 59 representing the second.
         */
        time(hour: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, minute: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, second: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a text time to an Excel serial number for a time, a number from 0 (12:00:00 AM) to 0.999988426 (11:59:59 PM). Format the number with a time format after entering the formula.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param timeText - Is a text string that gives a time in any one of the Microsoft Excel time formats (date information in the string is ignored).
         */
        timevalue(timeText: string | number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the current date formatted as a date.
         *
         * [Api set: ExcelApi 1.2]
         */
        today(): FunctionResult<number>;
        /**
         *
         * Removes all spaces from a text string except for single spaces between words.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param text - Is the text from which you want spaces removed.
         */
        trim(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the mean of the interior portion of a set of data values.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param array - Is the range or array of values to trim and average.
         * @param percent - Is the fractional number of data points to exclude from the top and bottom of the data set.
         */
        trimMean(array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, percent: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the logical value TRUE.
         *
         * [Api set: ExcelApi 1.2]
         */
        true(): FunctionResult<boolean>;
        /**
         *
         * Truncates a number to an integer by removing the decimal, or fractional, part of the number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the number you want to truncate.
         * @param numDigits - Is a number specifying the precision of the truncation, 0 (zero) if omitted.
         */
        trunc(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numDigits?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns an integer representing the data type of a value: number = 1; text = 2; logical value = 4; error value = 16; array = 64.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param value - Can be any value.
         */
        type(value: boolean | string | number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a number to text, using currency format.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is a number, a reference to a cell containing a number, or a formula that evaluates to a number.
         * @param decimals - Is the number of digits to the right of the decimal point.
         */
        usdollar(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, decimals?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the Unicode character referenced by the given numeric value.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param number - Is the Unicode number representing a character.
         */
        unichar(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the number (code point) corresponding to the first character of the text.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param text - Is the character that you want the Unicode value of.
         */
        unicode(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a text string to all uppercase letters.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param text - Is the text you want converted to uppercase, a reference or a text string.
         */
        upper(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Looks for a value in the leftmost column of a table, and then returns a value in the same row from a column you specify. By default, the table must be sorted in an ascending order.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param lookupValue - Is the value to be found in the first column of the table, and can be a value, a reference, or a text string.
         * @param tableArray - Is a table of text, numbers, or logical values, in which data is retrieved. tableArray can be a reference to a range or a range name.
         * @param colIndexNum - Is the column number in tableArray from which the matching value should be returned. The first column of values in the table is column 1.
         * @param rangeLookup - Is a logical value: to find the closest match in the first column (sorted in ascending order) = TRUE or omitted; find an exact match = FALSE.
         */
        vlookup(lookupValue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, tableArray: Excel.Range | number | Excel.RangeReference | Excel.FunctionResult<any>, colIndexNum: Excel.Range | number | Excel.RangeReference | Excel.FunctionResult<any>, rangeLookup?: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number | string | boolean>;
        /**
         *
         * Converts a text string that represents a number to a number.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param text - Is the text enclosed in quotation marks or a reference to a cell containing the text you want to convert.
         */
        value(text: string | boolean | number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Estimates variance based on a sample, including logical values and text. Text and the logical value FALSE have the value 0; the logical value TRUE has the value 1.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 value arguments corresponding to a sample of a population.
         */
        varA(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Calculates variance based on the entire population, including logical values and text. Text and the logical value FALSE have the value 0; the logical value TRUE has the value 1.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 value arguments corresponding to a population.
         */
        varPA(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Calculates variance based on the entire population (ignores logical values and text in the population).
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 numeric arguments corresponding to a population.
         */
        var_P(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Estimates variance based on a sample (ignores logical values and text in the sample).
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 255 numeric arguments corresponding to a sample of a population.
         */
        var_S(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the depreciation of an asset for any period you specify, including partial periods, using the double-declining balance method or some other method you specify.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param cost - Is the initial cost of the asset.
         * @param salvage - Is the salvage value at the end of the life of the asset.
         * @param life - Is the number of periods over which the asset is being depreciated (sometimes called the useful life of the asset).
         * @param startPeriod - Is the starting period for which you want to calculate the depreciation, in the same units as Life.
         * @param endPeriod - Is the ending period for which you want to calculate the depreciation, in the same units as Life.
         * @param factor - Is the rate at which the balance declines, 2 (double-declining balance) if omitted.
         * @param noSwitch - Switch to straight-line depreciation when depreciation is greater than the declining balance = FALSE or omitted; do not switch = TRUE.
         */
        vdb(cost: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, salvage: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, life: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startPeriod: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, endPeriod: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, factor?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, noSwitch?: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the week number in the year.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param serialNumber - Is the date-time code used by Microsoft Excel for date and time calculation.
         * @param returnType - Is a number (1 or 2) that determines the type of the return value.
         */
        weekNum(serialNumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, returnType?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns a number from 1 to 7 identifying the day of the week of a date.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param serialNumber - Is a number that represents a date.
         * @param returnType - Is a number: for Sunday=1 through Saturday=7, use 1; for Monday=1 through Sunday=7, use 2; for Monday=0 through Sunday=6, use 3.
         */
        weekday(serialNumber: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, returnType?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the Weibull distribution.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param x - Is the value at which to evaluate the function, a nonnegative number.
         * @param alpha - Is a parameter to the distribution, a positive number.
         * @param beta - Is a parameter to the distribution, a positive number.
         * @param cumulative - Is a logical value: for the cumulative distribution function, use TRUE; for the probability mass function, use FALSE.
         */
        weibull_Dist(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, alpha: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, beta: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the serial number of the date before or after a specified number of workdays.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param startDate - Is a serial date number that represents the start date.
         * @param days - Is the number of nonweekend and non-holiday days before or after startDate.
         * @param holidays - Is an optional array of one or more serial date numbers to exclude from the working calendar, such as state and federal holidays and floating holidays.
         */
        workDay(startDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, days: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, holidays?: number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the serial number of the date before or after a specified number of workdays with custom weekend parameters.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param startDate - Is a serial date number that represents the start date.
         * @param days - Is the number of nonweekend and non-holiday days before or after startDate.
         * @param weekend - Is a number or string specifying when weekends occur.
         * @param holidays - Is an optional array of one or more serial date numbers to exclude from the working calendar, such as state and federal holidays and floating holidays.
         */
        workDay_Intl(startDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, days: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, weekend?: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, holidays?: number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the internal rate of return for a schedule of cash flows.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - Is a series of cash flows that correspond to a schedule of payments in dates.
         * @param dates - Is a schedule of payment dates that corresponds to the cash flow payments.
         * @param guess - Is a number that you guess is close to the result of XIRR.
         */
        xirr(values: number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>, dates: number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>, guess?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the net present value for a schedule of cash flows.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param rate - Is the discount rate to apply to the cash flows.
         * @param values - Is a series of cash flows that correspond to a schedule of payments in dates.
         * @param dates - Is a schedule of payment dates that corresponds to the cash flow payments.
         */
        xnpv(rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, values: number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>, dates: number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns a logical 'Exclusive Or' of all arguments.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param values - List of parameters, whose elements are 1 to 254 conditions you want to test that can be either TRUE or FALSE and can be logical values, arrays, or references.
         */
        xor(...values: Array<boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<boolean>;
        /**
         *
         * Returns the year of a date, an integer in the range 1900 - 9999.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param serialNumber - Is a number in the date-time code used by Microsoft Excel.
         */
        year(serialNumber: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the year fraction representing the number of whole days between start_date and end_date.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param startDate - Is a serial date number that represents the start date.
         * @param endDate - Is a serial date number that represents the end date.
         * @param basis - Is the type of day count basis to use.
         */
        yearFrac(startDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, endDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the yield on a security that pays periodic interest.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param settlement - Is the security's settlement date, expressed as a serial date number.
         * @param maturity - Is the security's maturity date, expressed as a serial date number.
         * @param rate - Is the security's annual coupon rate.
         * @param pr - Is the security's price per $100 face value.
         * @param redemption - Is the security's redemption value per $100 face value.
         * @param frequency - Is the number of coupon payments per year.
         * @param basis - Is the type of day count basis to use.
         */
        yield(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pr: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the annual yield for a discounted security. For example, a treasury bill.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param settlement - Is the security's settlement date, expressed as a serial date number.
         * @param maturity - Is the security's maturity date, expressed as a serial date number.
         * @param pr - Is the security's price per $100 face value.
         * @param redemption - Is the security's redemption value per $100 face value.
         * @param basis - Is the type of day count basis to use.
         */
        yieldDisc(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pr: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the annual yield of a security that pays interest at maturity.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param settlement - Is the security's settlement date, expressed as a serial date number.
         * @param maturity - Is the security's maturity date, expressed as a serial date number.
         * @param issue - Is the security's issue date, expressed as a serial date number.
         * @param rate - Is the security's interest rate at date of issue.
         * @param pr - Is the security's price per $100 face value.
         * @param basis - Is the type of day count basis to use.
         */
        yieldMat(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, issue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pr: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the one-tailed P-value of a z-test.
         *
         * [Api set: ExcelApi 1.2]
         *
         * @param array - Is the array or range of data against which to test X.
         * @param x - Is the value to test.
         * @param sigma - Is the population (known) standard deviation. If omitted, the sample standard deviation is used.
         */
        z_Test(array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, sigma?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        toJSON(): {
            [key: string]: string;
        };
    }
    enum ErrorCodes {
        accessDenied = "AccessDenied",
        apiNotFound = "ApiNotFound",
        conflict = "Conflict",
        generalException = "GeneralException",
        insertDeleteConflict = "InsertDeleteConflict",
        invalidArgument = "InvalidArgument",
        invalidBinding = "InvalidBinding",
        invalidOperation = "InvalidOperation",
        invalidReference = "InvalidReference",
        invalidSelection = "InvalidSelection",
        itemAlreadyExists = "ItemAlreadyExists",
        itemNotFound = "ItemNotFound",
        notImplemented = "NotImplemented",
        unsupportedOperation = "UnsupportedOperation",
        invalidOperationInCellEditMode = "InvalidOperationInCellEditMode",
    }
    export namespace Interfaces {
        export interface CollectionLoadOptions {
            $top?: number;
            $skip?: number;
        }
        /** An interface for updating data on the Application object, for use in "application.set({ ... })". */
        export interface ApplicationUpdateData {
            /**
             *
             * Returns the calculation mode used in the workbook. See Excel.CalculationMode for details.
             *
             * [Api set: ExcelApi 1.1 for get, 1.8 for set]
             */
            calculationMode?: Excel.CalculationMode | "Automatic" | "AutomaticExceptTables" | "Manual";
        }
        /** An interface for updating data on the Workbook object, for use in "workbook.set({ ... })". */
        export interface WorkbookUpdateData {
            /**
            *
            * Gets the workbook properties.
            *
            * [Api set: ExcelApi 1.7]
            */
            properties?: Excel.Interfaces.DocumentPropertiesUpdateData;
        }
        /** An interface for updating data on the Worksheet object, for use in "worksheet.set({ ... })". */
        export interface WorksheetUpdateData {
            /**
             *
             * The display name of the worksheet.
             *
             * [Api set: ExcelApi 1.1]
             */
            name?: string;
            /**
             *
             * The zero-based position of the worksheet within the workbook.
             *
             * [Api set: ExcelApi 1.1]
             */
            position?: number;
            /**
             *
             * Returns or sets the standard (default) width of all the columns in the worksheet.
            One unit of column width is equal to the width of one character in the Normal style. For proportional fonts, the width of the character 0 (zero) is used.
             *
             * [Api set: ExcelApi 1.7]
             */
            standardWidth?: number;
            /**
             *
             * Gets or sets the worksheet tab color.
            When retrieving the tab color, if the worksheet is invisible, the value will be null. If the worksheet is visible but the tab color is set to auto, an empty string will be returned. Otherwise, the property will be set to a color, in the form "#123456"
            When setting the color, use an empty-string to set an "auto" color, or a real color otherwise.
             *
             * [Api set: ExcelApi 1.7]
             */
            tabColor?: string;
            /**
             *
             * The Visibility of the worksheet.
             *
             * [Api set: ExcelApi 1.1 for reading visibility; 1.2 for setting it.]
             */
            visibility?: Excel.SheetVisibility | "Visible" | "Hidden" | "VeryHidden";
        }
        /** An interface for updating data on the WorksheetCollection object, for use in "worksheetCollection.set({ ... })". */
        export interface WorksheetCollectionUpdateData {
            items?: Excel.Interfaces.WorksheetData[];
        }
        /** An interface for updating data on the Range object, for use in "range.set({ ... })". */
        export interface RangeUpdateData {
            /**
            *
            * Returns a format object, encapsulating the range's font, fill, borders, alignment, and other properties.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.RangeFormatUpdateData;
            /**
             *
             * Represents if all columns of the current range are hidden.
             *
             * [Api set: ExcelApi 1.2]
             */
            columnHidden?: boolean;
            /**
             *
             * Represents the formula in A1-style notation.
            When setting formulas to a range, the value argument can be either a single value (a string) or a two-dimensional array. If the argument is a single value, it will be applied to all cells in the range.
             *
             * [Api set: ExcelApi 1.1]
             */
            formulas?: any[][];
            /**
             *
             * Represents the formula in A1-style notation, in the user's language and number-formatting locale.  For example, the English "=SUM(A1, 1.5)" formula would become "=SUMME(A1; 1,5)" in German.
            When setting formulas to a range, the value argument can be either a single value (a string) or a two-dimensional array. If the argument is a single value, it will be applied to all cells in the range.
             *
             * [Api set: ExcelApi 1.1]
             */
            formulasLocal?: any[][];
            /**
             *
             * Represents the formula in R1C1-style notation.
            When setting formulas to a range, the value argument can be either a single value (a string) or a two-dimensional array. If the argument is a single value, it will be applied to all cells in the range.
             *
             * [Api set: ExcelApi 1.2]
             */
            formulasR1C1?: any[][];
            /**
             *
             * Represents the hyperlink for the current range.
             *
             * [Api set: ExcelApi 1.7]
             */
            hyperlink?: Excel.RangeHyperlink;
            /**
             *
             * Represents Excel's number format code for the given range.
            When setting number format to a range, the value argument can be either a single value (string) or a two-dimensional array. If the argument is a single value, it will be applied to all cells in the range.
             *
             * [Api set: ExcelApi 1.1]
             */
            numberFormat?: any[][];
            /**
             *
             * Represents Excel's number format code for the given range as a string in the language of the user.
            When setting number format local to a range, the value argument can be either a single value (string) or a two-dimensional array. If the argument is a single value, it will be applied to all cells in the range.
             *
             * [Api set: ExcelApi 1.7]
             */
            numberFormatLocal?: any[][];
            /**
             *
             * Represents if all rows of the current range are hidden.
             *
             * [Api set: ExcelApi 1.2]
             */
            rowHidden?: boolean;
            /**
             *
             * Represents the style of the current range.
            If the styles of the cells are inconsistent, null will be returned.
            For custom styles, the style name will be returned. For built-in styles, a string representing a value in the BuiltInStyle enum will be returned.
             *
             * [Api set: ExcelApi 1.7]
             */
            style?: string;
            /**
             *
             * Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
            When setting values to a range, the value argument can be either a single value (string, number or boolean) or a two-dimensional array. If the argument is a single value, it will be applied to all cells in the range.
             *
             * [Api set: ExcelApi 1.1]
             */
            values?: any[][];
        }
        /** An interface for updating data on the RangeView object, for use in "rangeView.set({ ... })". */
        export interface RangeViewUpdateData {
            /**
             *
             * Represents the formula in A1-style notation.
             *
             * [Api set: ExcelApi 1.3]
             */
            formulas?: any[][];
            /**
             *
             * Represents the formula in A1-style notation, in the user's language and number-formatting locale.  For example, the English "=SUM(A1, 1.5)" formula would become "=SUMME(A1; 1,5)" in German.
             *
             * [Api set: ExcelApi 1.3]
             */
            formulasLocal?: any[][];
            /**
             *
             * Represents the formula in R1C1-style notation.
             *
             * [Api set: ExcelApi 1.3]
             */
            formulasR1C1?: any[][];
            /**
             *
             * Represents Excel's number format code for the given cell.
             *
             * [Api set: ExcelApi 1.3]
             */
            numberFormat?: any[][];
            /**
             *
             * Represents the raw values of the specified range view. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
             *
             * [Api set: ExcelApi 1.3]
             */
            values?: any[][];
        }
        /** An interface for updating data on the RangeViewCollection object, for use in "rangeViewCollection.set({ ... })". */
        export interface RangeViewCollectionUpdateData {
            items?: Excel.Interfaces.RangeViewData[];
        }
        /** An interface for updating data on the SettingCollection object, for use in "settingCollection.set({ ... })". */
        export interface SettingCollectionUpdateData {
            items?: Excel.Interfaces.SettingData[];
        }
        /** An interface for updating data on the Setting object, for use in "setting.set({ ... })". */
        export interface SettingUpdateData {
            /**
             *
             * Represents the value stored for this setting.
             *
             * [Api set: ExcelApi 1.4]
             */
            value?: any;
        }
        /** An interface for updating data on the NamedItemCollection object, for use in "namedItemCollection.set({ ... })". */
        export interface NamedItemCollectionUpdateData {
            items?: Excel.Interfaces.NamedItemData[];
        }
        /** An interface for updating data on the NamedItem object, for use in "namedItem.set({ ... })". */
        export interface NamedItemUpdateData {
            /**
             *
             * Represents the comment associated with this name.
             *
             * [Api set: ExcelApi 1.4]
             */
            comment?: string;
            /**
             *
             * Gets or sets the formula of the named item.  Formula always starts with a '=' sign.
             *
             * [Api set: ExcelApi 1.7]
             */
            formula?: any;
            /**
             *
             * Specifies whether the object is visible or not.
             *
             * [Api set: ExcelApi 1.1]
             */
            visible?: boolean;
        }
        /** An interface for updating data on the BindingCollection object, for use in "bindingCollection.set({ ... })". */
        export interface BindingCollectionUpdateData {
            items?: Excel.Interfaces.BindingData[];
        }
        /** An interface for updating data on the TableCollection object, for use in "tableCollection.set({ ... })". */
        export interface TableCollectionUpdateData {
            items?: Excel.Interfaces.TableData[];
        }
        /** An interface for updating data on the Table object, for use in "table.set({ ... })". */
        export interface TableUpdateData {
            /**
             *
             * Indicates whether the first column contains special formatting.
             *
             * [Api set: ExcelApi 1.3]
             */
            highlightFirstColumn?: boolean;
            /**
             *
             * Indicates whether the last column contains special formatting.
             *
             * [Api set: ExcelApi 1.3]
             */
            highlightLastColumn?: boolean;
            /**
             *
             * Name of the table.
             *
             * [Api set: ExcelApi 1.1]
             */
            name?: string;
            /**
             *
             * Indicates whether the columns show banded formatting in which odd columns are highlighted differently from even ones to make reading the table easier.
             *
             * [Api set: ExcelApi 1.3]
             */
            showBandedColumns?: boolean;
            /**
             *
             * Indicates whether the rows show banded formatting in which odd rows are highlighted differently from even ones to make reading the table easier.
             *
             * [Api set: ExcelApi 1.3]
             */
            showBandedRows?: boolean;
            /**
             *
             * Indicates whether the filter buttons are visible at the top of each column header. Setting this is only allowed if the table contains a header row.
             *
             * [Api set: ExcelApi 1.3]
             */
            showFilterButton?: boolean;
            /**
             *
             * Indicates whether the header row is visible or not. This value can be set to show or remove the header row.
             *
             * [Api set: ExcelApi 1.1]
             */
            showHeaders?: boolean;
            /**
             *
             * Indicates whether the total row is visible or not. This value can be set to show or remove the total row.
             *
             * [Api set: ExcelApi 1.1]
             */
            showTotals?: boolean;
            /**
             *
             * Constant value that represents the Table style. Possible values are: TableStyleLight1 thru TableStyleLight21, TableStyleMedium1 thru TableStyleMedium28, TableStyleStyleDark1 thru TableStyleStyleDark11. A custom user-defined style present in the workbook can also be specified.
             *
             * [Api set: ExcelApi 1.1]
             */
            style?: string;
        }
        /** An interface for updating data on the TableColumnCollection object, for use in "tableColumnCollection.set({ ... })". */
        export interface TableColumnCollectionUpdateData {
            items?: Excel.Interfaces.TableColumnData[];
        }
        /** An interface for updating data on the TableColumn object, for use in "tableColumn.set({ ... })". */
        export interface TableColumnUpdateData {
            /**
             *
             * Represents the name of the table column.
             *
             * [Api set: ExcelApi 1.1 for getting the name; 1.4 for setting it.]
             */
            name?: string;
            /**
             *
             * Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
             *
             * [Api set: ExcelApi 1.1]
             */
            values?: any[][];
        }
        /** An interface for updating data on the TableRowCollection object, for use in "tableRowCollection.set({ ... })". */
        export interface TableRowCollectionUpdateData {
            items?: Excel.Interfaces.TableRowData[];
        }
        /** An interface for updating data on the TableRow object, for use in "tableRow.set({ ... })". */
        export interface TableRowUpdateData {
            /**
             *
             * Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
             *
             * [Api set: ExcelApi 1.1]
             */
            values?: any[][];
        }
        /** An interface for updating data on the RangeFormat object, for use in "rangeFormat.set({ ... })". */
        export interface RangeFormatUpdateData {
            /**
            *
            * Returns the fill object defined on the overall range.
            *
            * [Api set: ExcelApi 1.1]
            */
            fill?: Excel.Interfaces.RangeFillUpdateData;
            /**
            *
            * Returns the font object defined on the overall range.
            *
            * [Api set: ExcelApi 1.1]
            */
            font?: Excel.Interfaces.RangeFontUpdateData;
            /**
            *
            * Returns the format protection object for a range.
            *
            * [Api set: ExcelApi 1.2]
            */
            protection?: Excel.Interfaces.FormatProtectionUpdateData;
            /**
             *
             * Gets or sets the width of all colums within the range. If the column widths are not uniform, null will be returned.
             *
             * [Api set: ExcelApi 1.2]
             */
            columnWidth?: number;
            /**
             *
             * Represents the horizontal alignment for the specified object. See Excel.HorizontalAlignment for details.
             *
             * [Api set: ExcelApi 1.1]
             */
            horizontalAlignment?: Excel.HorizontalAlignment | "General" | "Left" | "Center" | "Right" | "Fill" | "Justify" | "CenterAcrossSelection" | "Distributed";
            /**
             *
             * Gets or sets the height of all rows in the range. If the row heights are not uniform, null will be returned.
             *
             * [Api set: ExcelApi 1.2]
             */
            rowHeight?: number;
            /**
             *
             * Gets or sets the text orientation of all the cells within the range.
            The text orientation should be an integer either from -90 to 90, or 180 for vertically-oriented text.
            If the orientation within a range are not uniform, then null will be returned.
             *
             * [Api set: ExcelApi 1.7]
             */
            textOrientation?: number;
            /**
             *
             * Determines if the row height of the Range object equals the standard height of the sheet.
            Returns True if the row height of the Range object equals the standard height of the sheet.
            Returns Null if the range contains more than one row and the rows aren't all the same height.
            Returns False otherwise.
             *
             * [Api set: ExcelApi 1.7]
             */
            useStandardHeight?: boolean;
            /**
             *
             * Indicates whether the columnwidth of the Range object equals the standard width of the sheet.
            Returns True if the column width of the Range object equals the standard width of the sheet.
            Returns Null if the range contains more than one column and the columns aren't all the same height.
            Returns False otherwise.
             *
             * [Api set: ExcelApi 1.7]
             */
            useStandardWidth?: boolean;
            /**
             *
             * Represents the vertical alignment for the specified object. See Excel.VerticalAlignment for details.
             *
             * [Api set: ExcelApi 1.1]
             */
            verticalAlignment?: Excel.VerticalAlignment | "Top" | "Center" | "Bottom" | "Justify" | "Distributed";
            /**
             *
             * Indicates if Excel wraps the text in the object. A null value indicates that the entire range doesn't have uniform wrap setting
             *
             * [Api set: ExcelApi 1.1]
             */
            wrapText?: boolean;
        }
        /** An interface for updating data on the FormatProtection object, for use in "formatProtection.set({ ... })". */
        export interface FormatProtectionUpdateData {
            /**
             *
             * Indicates if Excel hides the formula for the cells in the range. A null value indicates that the entire range doesn't have uniform formula hidden setting.
             *
             * [Api set: ExcelApi 1.2]
             */
            formulaHidden?: boolean;
            /**
             *
             * Indicates if Excel locks the cells in the object. A null value indicates that the entire range doesn't have uniform lock setting.
             *
             * [Api set: ExcelApi 1.2]
             */
            locked?: boolean;
        }
        /** An interface for updating data on the RangeFill object, for use in "rangeFill.set({ ... })". */
        export interface RangeFillUpdateData {
            /**
             *
             * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange")
             *
             * [Api set: ExcelApi 1.1]
             */
            color?: string;
        }
        /** An interface for updating data on the RangeBorder object, for use in "rangeBorder.set({ ... })". */
        export interface RangeBorderUpdateData {
            /**
             *
             * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
             *
             * [Api set: ExcelApi 1.1]
             */
            color?: string;
            /**
             *
             * One of the constants of line style specifying the line style for the border. See Excel.BorderLineStyle for details.
             *
             * [Api set: ExcelApi 1.1]
             */
            style?: Excel.BorderLineStyle | "None" | "Continuous" | "Dash" | "DashDot" | "DashDotDot" | "Dot" | "Double" | "SlantDashDot";
            /**
             *
             * Specifies the weight of the border around a range. See Excel.BorderWeight for details.
             *
             * [Api set: ExcelApi 1.1]
             */
            weight?: Excel.BorderWeight | "Hairline" | "Thin" | "Medium" | "Thick";
        }
        /** An interface for updating data on the RangeBorderCollection object, for use in "rangeBorderCollection.set({ ... })". */
        export interface RangeBorderCollectionUpdateData {
            items?: Excel.Interfaces.RangeBorderData[];
        }
        /** An interface for updating data on the RangeFont object, for use in "rangeFont.set({ ... })". */
        export interface RangeFontUpdateData {
            /**
             *
             * Represents the bold status of font.
             *
             * [Api set: ExcelApi 1.1]
             */
            bold?: boolean;
            /**
             *
             * HTML color code representation of the text color. E.g. #FF0000 represents Red.
             *
             * [Api set: ExcelApi 1.1]
             */
            color?: string;
            /**
             *
             * Represents the italic status of the font.
             *
             * [Api set: ExcelApi 1.1]
             */
            italic?: boolean;
            /**
             *
             * Font name (e.g. "Calibri")
             *
             * [Api set: ExcelApi 1.1]
             */
            name?: string;
            /**
             *
             * Font size.
             *
             * [Api set: ExcelApi 1.1]
             */
            size?: number;
            /**
             *
             * Type of underline applied to the font. See Excel.RangeUnderlineStyle for details.
             *
             * [Api set: ExcelApi 1.1]
             */
            underline?: Excel.RangeUnderlineStyle | "None" | "Single" | "Double" | "SingleAccountant" | "DoubleAccountant";
        }
        /** An interface for updating data on the ChartCollection object, for use in "chartCollection.set({ ... })". */
        export interface ChartCollectionUpdateData {
            items?: Excel.Interfaces.ChartData[];
        }
        /** An interface for updating data on the Chart object, for use in "chart.set({ ... })". */
        export interface ChartUpdateData {
            /**
            *
            * Represents chart axes.
            *
            * [Api set: ExcelApi 1.1]
            */
            axes?: Excel.Interfaces.ChartAxesUpdateData;
            /**
            *
            * Represents the datalabels on the chart.
            *
            * [Api set: ExcelApi 1.1]
            */
            dataLabels?: Excel.Interfaces.ChartDataLabelsUpdateData;
            /**
            *
            * Encapsulates the format properties for the chart area.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartAreaFormatUpdateData;
            /**
            *
            * Represents the legend for the chart.
            *
            * [Api set: ExcelApi 1.1]
            */
            legend?: Excel.Interfaces.ChartLegendUpdateData;
            /**
            *
            * Represents the title of the specified chart, including the text, visibility, position and formating of the title.
            *
            * [Api set: ExcelApi 1.1]
            */
            title?: Excel.Interfaces.ChartTitleUpdateData;
            /**
             *
             * Represents the type of the chart. See Excel.ChartType for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            chartType?: Excel.ChartType | "Invalid" | "ColumnClustered" | "ColumnStacked" | "ColumnStacked100" | "3DColumnClustered" | "3DColumnStacked" | "3DColumnStacked100" | "BarClustered" | "BarStacked" | "BarStacked100" | "3DBarClustered" | "3DBarStacked" | "3DBarStacked100" | "LineStacked" | "LineStacked100" | "LineMarkers" | "LineMarkersStacked" | "LineMarkersStacked100" | "PieOfPie" | "PieExploded" | "3DPieExploded" | "BarOfPie" | "XYScatterSmooth" | "XYScatterSmoothNoMarkers" | "XYScatterLines" | "XYScatterLinesNoMarkers" | "AreaStacked" | "AreaStacked100" | "3DAreaStacked" | "3DAreaStacked100" | "DoughnutExploded" | "RadarMarkers" | "RadarFilled" | "Surface" | "SurfaceWireframe" | "SurfaceTopView" | "SurfaceTopViewWireframe" | "Bubble" | "Bubble3DEffect" | "StockHLC" | "StockOHLC" | "StockVHLC" | "StockVOHLC" | "CylinderColClustered" | "CylinderColStacked" | "CylinderColStacked100" | "CylinderBarClustered" | "CylinderBarStacked" | "CylinderBarStacked100" | "CylinderCol" | "ConeColClustered" | "ConeColStacked" | "ConeColStacked100" | "ConeBarClustered" | "ConeBarStacked" | "ConeBarStacked100" | "ConeCol" | "PyramidColClustered" | "PyramidColStacked" | "PyramidColStacked100" | "PyramidBarClustered" | "PyramidBarStacked" | "PyramidBarStacked100" | "PyramidCol" | "3DColumn" | "Line" | "3DLine" | "3DPie" | "Pie" | "XYScatter" | "3DArea" | "Area" | "Doughnut" | "Radar";
            /**
             *
             * Represents the height, in points, of the chart object.
             *
             * [Api set: ExcelApi 1.1]
             */
            height?: number;
            /**
             *
             * The distance, in points, from the left side of the chart to the worksheet origin.
             *
             * [Api set: ExcelApi 1.1]
             */
            left?: number;
            /**
             *
             * Represents the name of a chart object.
             *
             * [Api set: ExcelApi 1.1]
             */
            name?: string;
            /**
             *
             * Represents whether to display all field buttons on a PivotChart.
             *
             * [Api set: ExcelApi 1.7]
             */
            showAllFieldButtons?: boolean;
            /**
             *
             * Represents the distance, in points, from the top edge of the object to the top of row 1 (on a worksheet) or the top of the chart area (on a chart).
             *
             * [Api set: ExcelApi 1.1]
             */
            top?: number;
            /**
             *
             * Represents the width, in points, of the chart object.
             *
             * [Api set: ExcelApi 1.1]
             */
            width?: number;
        }
        /** An interface for updating data on the ChartAreaFormat object, for use in "chartAreaFormat.set({ ... })". */
        export interface ChartAreaFormatUpdateData {
            /**
            *
            * Represents the border format of chart area, which includes color, linestyle and weight.
            *
            * [Api set: ExcelApi 1.7]
            */
            border?: Excel.Interfaces.ChartBorderUpdateData;
            /**
            *
            * Represents the font attributes (font name, font size, color, etc.) for the current object.
            *
            * [Api set: ExcelApi 1.1]
            */
            font?: Excel.Interfaces.ChartFontUpdateData;
        }
        /** An interface for updating data on the ChartSeriesCollection object, for use in "chartSeriesCollection.set({ ... })". */
        export interface ChartSeriesCollectionUpdateData {
            items?: Excel.Interfaces.ChartSeriesData[];
        }
        /** An interface for updating data on the ChartSeries object, for use in "chartSeries.set({ ... })". */
        export interface ChartSeriesUpdateData {
            /**
            *
            * Represents the formatting of a chart series, which includes fill and line formatting.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartSeriesFormatUpdateData;
            /**
             *
             * Represents the chart type of a series. See Excel.ChartType for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            chartType?: Excel.ChartType | "Invalid" | "ColumnClustered" | "ColumnStacked" | "ColumnStacked100" | "3DColumnClustered" | "3DColumnStacked" | "3DColumnStacked100" | "BarClustered" | "BarStacked" | "BarStacked100" | "3DBarClustered" | "3DBarStacked" | "3DBarStacked100" | "LineStacked" | "LineStacked100" | "LineMarkers" | "LineMarkersStacked" | "LineMarkersStacked100" | "PieOfPie" | "PieExploded" | "3DPieExploded" | "BarOfPie" | "XYScatterSmooth" | "XYScatterSmoothNoMarkers" | "XYScatterLines" | "XYScatterLinesNoMarkers" | "AreaStacked" | "AreaStacked100" | "3DAreaStacked" | "3DAreaStacked100" | "DoughnutExploded" | "RadarMarkers" | "RadarFilled" | "Surface" | "SurfaceWireframe" | "SurfaceTopView" | "SurfaceTopViewWireframe" | "Bubble" | "Bubble3DEffect" | "StockHLC" | "StockOHLC" | "StockVHLC" | "StockVOHLC" | "CylinderColClustered" | "CylinderColStacked" | "CylinderColStacked100" | "CylinderBarClustered" | "CylinderBarStacked" | "CylinderBarStacked100" | "CylinderCol" | "ConeColClustered" | "ConeColStacked" | "ConeColStacked100" | "ConeBarClustered" | "ConeBarStacked" | "ConeBarStacked100" | "ConeCol" | "PyramidColClustered" | "PyramidColStacked" | "PyramidColStacked100" | "PyramidBarClustered" | "PyramidBarStacked" | "PyramidBarStacked100" | "PyramidCol" | "3DColumn" | "Line" | "3DLine" | "3DPie" | "Pie" | "XYScatter" | "3DArea" | "Area" | "Doughnut" | "Radar";
            /**
             *
             * Represents the doughnut hole size of a chart series.  Only valid on doughnut and doughnutExploded charts.
            Throws an invalid argument exception on invalid charts.
             *
             * [Api set: ExcelApi 1.7]
             */
            doughnutHoleSize?: number;
            /**
             *
             * Boolean value representing if the series is filtered or not. Not applicable for surface charts.
             *
             * [Api set: ExcelApi 1.7]
             */
            filtered?: boolean;
            /**
             *
             * Represents the gap width of a chart series.  Only valid on bar and column charts, as well as
            specific classes of line and pie charts.  Throws an invalid argument exception on invalid charts.
             *
             * [Api set: ExcelApi 1.7]
             */
            gapWidth?: number;
            /**
             *
             * Boolean value representing if the series has data labels or not.
             *
             * [Api set: ExcelApi 1.7]
             */
            hasDataLabels?: boolean;
            /**
             *
             * Represents markers background color of a chart series.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerBackgroundColor?: string;
            /**
             *
             * Represents markers foreground color of a chart series.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerForegroundColor?: string;
            /**
             *
             * Represents marker size of a chart series.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerSize?: number;
            /**
             *
             * Represents marker style of a chart series. See Excel.ChartMarkerStyle for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerStyle?: Excel.ChartMarkerStyle | "Invalid" | "Automatic" | "None" | "Square" | "Diamond" | "Triangle" | "X" | "Star" | "Dot" | "Dash" | "Circle" | "Plus" | "Picture";
            /**
             *
             * Represents the name of a series in a chart.
             *
             * [Api set: ExcelApi 1.1]
             */
            name?: string;
            /**
             *
             * Represents the plot order of a chart series within the chart group.
             *
             * [Api set: ExcelApi 1.7]
             */
            plotOrder?: number;
            /**
             *
             * Boolean value representing if the series has a shadow or not.
             *
             * [Api set: ExcelApi 1.7]
             */
            showShadow?: boolean;
            /**
             *
             * Boolean value representing if the series is smooth or not. Only applicable for line and scatter charts.
             *
             * [Api set: ExcelApi 1.7]
             */
            smooth?: boolean;
        }
        /** An interface for updating data on the ChartSeriesFormat object, for use in "chartSeriesFormat.set({ ... })". */
        export interface ChartSeriesFormatUpdateData {
            /**
            *
            * Represents line formatting.
            *
            * [Api set: ExcelApi 1.1]
            */
            line?: Excel.Interfaces.ChartLineFormatUpdateData;
        }
        /** An interface for updating data on the ChartPointsCollection object, for use in "chartPointsCollection.set({ ... })". */
        export interface ChartPointsCollectionUpdateData {
            items?: Excel.Interfaces.ChartPointData[];
        }
        /** An interface for updating data on the ChartPoint object, for use in "chartPoint.set({ ... })". */
        export interface ChartPointUpdateData {
            /**
            *
            * Returns the data label of a chart point.
            *
            * [Api set: ExcelApi 1.7]
            */
            dataLabel?: Excel.Interfaces.ChartDataLabelUpdateData;
            /**
            *
            * Encapsulates the format properties chart point.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartPointFormatUpdateData;
            /**
             *
             * Represents whether a data point has datalabel. Not applicable for surface charts.
             *
             * [Api set: ExcelApi 1.7]
             */
            hasDataLabel?: boolean;
            /**
             *
             * HTML color code representation of the marker background color of data point. E.g. #FF0000 represents Red.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerBackgroundColor?: string;
            /**
             *
             * HTML color code representation of the marker foreground color of data point. E.g. #FF0000 represents Red.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerForegroundColor?: string;
            /**
             *
             * Represents marker size of data point.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerSize?: number;
            /**
             *
             * Represents marker style of a chart data point. See Excel.ChartMarkerStyle for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerStyle?: Excel.ChartMarkerStyle | "Invalid" | "Automatic" | "None" | "Square" | "Diamond" | "Triangle" | "X" | "Star" | "Dot" | "Dash" | "Circle" | "Plus" | "Picture";
        }
        /** An interface for updating data on the ChartPointFormat object, for use in "chartPointFormat.set({ ... })". */
        export interface ChartPointFormatUpdateData {
            /**
            *
            * Represents the border format of a chart data point, which includes color, style and weight information.
            *
            * [Api set: ExcelApi 1.7]
            */
            border?: Excel.Interfaces.ChartBorderUpdateData;
        }
        /** An interface for updating data on the ChartAxes object, for use in "chartAxes.set({ ... })". */
        export interface ChartAxesUpdateData {
            /**
            *
            * Represents the category axis in a chart.
            *
            * [Api set: ExcelApi 1.1]
            */
            categoryAxis?: Excel.Interfaces.ChartAxisUpdateData;
            /**
            *
            * Represents the series axis of a 3-dimensional chart.
            *
            * [Api set: ExcelApi 1.1]
            */
            seriesAxis?: Excel.Interfaces.ChartAxisUpdateData;
            /**
            *
            * Represents the value axis in an axis.
            *
            * [Api set: ExcelApi 1.1]
            */
            valueAxis?: Excel.Interfaces.ChartAxisUpdateData;
        }
        /** An interface for updating data on the ChartAxis object, for use in "chartAxis.set({ ... })". */
        export interface ChartAxisUpdateData {
            /**
            *
            * Represents the formatting of a chart object, which includes line and font formatting.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartAxisFormatUpdateData;
            /**
            *
            * Returns a gridlines object that represents the major gridlines for the specified axis.
            *
            * [Api set: ExcelApi 1.1]
            */
            majorGridlines?: Excel.Interfaces.ChartGridlinesUpdateData;
            /**
            *
            * Returns a Gridlines object that represents the minor gridlines for the specified axis.
            *
            * [Api set: ExcelApi 1.1]
            */
            minorGridlines?: Excel.Interfaces.ChartGridlinesUpdateData;
            /**
            *
            * Represents the axis title.
            *
            * [Api set: ExcelApi 1.1]
            */
            title?: Excel.Interfaces.ChartAxisTitleUpdateData;
            /**
             *
             * Returns or sets the base unit for the specified category axis.
             *
             * [Api set: ExcelApi 1.7]
             */
            baseTimeUnit?: Excel.ChartAxisTimeUnit | "Days" | "Months" | "Years";
            /**
             *
             * Returns or sets the category axis type.
             *
             * [Api set: ExcelApi 1.7]
             */
            categoryType?: Excel.ChartAxisCategoryType | "Automatic" | "TextAxis" | "DateAxis";
            /**
             * [DEPRECATED; kept for back-compat with existing first-party solutions]. Please use `Position` instead.
             * Represents the specified axis where the other axis crosses. See Excel.ChartAxisPosition for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            crosses?: Excel.ChartAxisPosition | "Automatic" | "Maximum" | "Minimum" | "Custom";
            /**
             *
             * Represents the axis display unit. See Excel.ChartAxisDisplayUnit for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            displayUnit?: Excel.ChartAxisDisplayUnit | "None" | "Hundreds" | "Thousands" | "TenThousands" | "HundredThousands" | "Millions" | "TenMillions" | "HundredMillions" | "Billions" | "Trillions" | "Custom";
            /**
             *
             * Represents the base of the logarithm when using logarithmic scales.
             *
             * [Api set: ExcelApi 1.7]
             */
            logBase?: number;
            /**
             *
             * Represents the type of major tick mark for the specified axis. See Excel.ChartAxisTickMark for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            majorTickMark?: Excel.ChartAxisTickMark | "None" | "Cross" | "Inside" | "Outside";
            /**
             *
             * Returns or sets the major unit scale value for the category axis when the CategoryType property is set to TimeScale.
             *
             * [Api set: ExcelApi 1.7]
             */
            majorTimeUnitScale?: Excel.ChartAxisTimeUnit | "Days" | "Months" | "Years";
            /**
             *
             * Represents the interval between two major tick marks. Can be set to a numeric value or an empty string.  The returned value is always a number.
             *
             * [Api set: ExcelApi 1.1]
             */
            majorUnit?: any;
            /**
             *
             * Represents the maximum value on the value axis.  Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number.
             *
             * [Api set: ExcelApi 1.1]
             */
            maximum?: any;
            /**
             *
             * Represents the minimum value on the value axis. Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number.
             *
             * [Api set: ExcelApi 1.1]
             */
            minimum?: any;
            /**
             *
             * Represents the type of minor tick mark for the specified axis. See Excel.ChartAxisTickMark for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            minorTickMark?: Excel.ChartAxisTickMark | "None" | "Cross" | "Inside" | "Outside";
            /**
             *
             * Returns or sets the minor unit scale value for the category axis when the CategoryType property is set to TimeScale.
             *
             * [Api set: ExcelApi 1.7]
             */
            minorTimeUnitScale?: Excel.ChartAxisTimeUnit | "Days" | "Months" | "Years";
            /**
             *
             * Represents the interval between two minor tick marks. "Can be set to a numeric value or an empty string (for automatic axis values). The returned value is always a number.
             *
             * [Api set: ExcelApi 1.1]
             */
            minorUnit?: any;
            /**
             *
             * Represents whether Microsoft Excel plots data points from last to first.
             *
             * [Api set: ExcelApi 1.7]
             */
            reversePlotOrder?: boolean;
            /**
             *
             * Represents the value axis scale type. See Excel.ChartAxisScaleType for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            scaleType?: Excel.ChartAxisScaleType | "Linear" | "Logarithmic";
            /**
             *
             * Represents whether the axis display unit label is visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            showDisplayUnitLabel?: boolean;
            /**
             *
             * Represents the position of tick-mark labels on the specified axis. See Excel.ChartAxisTickLabelPosition for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            tickLabelPosition?: Excel.ChartAxisTickLabelPosition | "NextToAxis" | "High" | "Low" | "None";
            /**
             *
             * Represents the number of categories or series between tick-mark labels. Can be a value from 1 through 31999 or an empty string for automatic setting. The returned value is always a number.
             *
             * [Api set: ExcelApi 1.7]
             */
            tickLabelSpacing?: any;
            /**
             *
             * Represents the number of categories or series between tick marks.
             *
             * [Api set: ExcelApi 1.7]
             */
            tickMarkSpacing?: number;
            /**
             *
             * A boolean value represents the visibility of the axis.
             *
             * [Api set: ExcelApi 1.7]
             */
            visible?: boolean;
        }
        /** An interface for updating data on the ChartAxisFormat object, for use in "chartAxisFormat.set({ ... })". */
        export interface ChartAxisFormatUpdateData {
            /**
            *
            * Represents the font attributes (font name, font size, color, etc.) for a chart axis element.
            *
            * [Api set: ExcelApi 1.1]
            */
            font?: Excel.Interfaces.ChartFontUpdateData;
            /**
            *
            * Represents chart line formatting.
            *
            * [Api set: ExcelApi 1.1]
            */
            line?: Excel.Interfaces.ChartLineFormatUpdateData;
        }
        /** An interface for updating data on the ChartAxisTitle object, for use in "chartAxisTitle.set({ ... })". */
        export interface ChartAxisTitleUpdateData {
            /**
            *
            * Represents the formatting of chart axis title.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartAxisTitleFormatUpdateData;
            /**
             *
             * Represents the axis title.
             *
             * [Api set: ExcelApi 1.1]
             */
            text?: string;
            /**
             *
             * A boolean that specifies the visibility of an axis title.
             *
             * [Api set: ExcelApi 1.1]
             */
            visible?: boolean;
        }
        /** An interface for updating data on the ChartAxisTitleFormat object, for use in "chartAxisTitleFormat.set({ ... })". */
        export interface ChartAxisTitleFormatUpdateData {
            /**
            *
            * Represents the font attributes, such as font name, font size, color, etc. of chart axis title object.
            *
            * [Api set: ExcelApi 1.1]
            */
            font?: Excel.Interfaces.ChartFontUpdateData;
        }
        /** An interface for updating data on the ChartDataLabels object, for use in "chartDataLabels.set({ ... })". */
        export interface ChartDataLabelsUpdateData {
            /**
            *
            * Represents the format of chart data labels, which includes fill and font formatting.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartDataLabelFormatUpdateData;
            /**
             *
             * DataLabelPosition value that represents the position of the data label. See Excel.ChartDataLabelPosition for details.
             *
             * [Api set: ExcelApi 1.1]
             */
            position?: Excel.ChartDataLabelPosition | "Invalid" | "None" | "Center" | "InsideEnd" | "InsideBase" | "OutsideEnd" | "Left" | "Right" | "Top" | "Bottom" | "BestFit" | "Callout";
            /**
             *
             * String representing the separator used for the data labels on a chart.
             *
             * [Api set: ExcelApi 1.1]
             */
            separator?: string;
            /**
             *
             * Boolean value representing if the data label bubble size is visible or not.
             *
             * [Api set: ExcelApi 1.1]
             */
            showBubbleSize?: boolean;
            /**
             *
             * Boolean value representing if the data label category name is visible or not.
             *
             * [Api set: ExcelApi 1.1]
             */
            showCategoryName?: boolean;
            /**
             *
             * Boolean value representing if the data label legend key is visible or not.
             *
             * [Api set: ExcelApi 1.1]
             */
            showLegendKey?: boolean;
            /**
             *
             * Boolean value representing if the data label percentage is visible or not.
             *
             * [Api set: ExcelApi 1.1]
             */
            showPercentage?: boolean;
            /**
             *
             * Boolean value representing if the data label series name is visible or not.
             *
             * [Api set: ExcelApi 1.1]
             */
            showSeriesName?: boolean;
            /**
             *
             * Boolean value representing if the data label value is visible or not.
             *
             * [Api set: ExcelApi 1.1]
             */
            showValue?: boolean;
        }
        /** An interface for updating data on the ChartDataLabel object, for use in "chartDataLabel.set({ ... })". */
        export interface ChartDataLabelUpdateData {
            /**
             *
             * DataLabelPosition value that represents the position of the data label. See Excel.ChartDataLabelPosition for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            position?: Excel.ChartDataLabelPosition | "Invalid" | "None" | "Center" | "InsideEnd" | "InsideBase" | "OutsideEnd" | "Left" | "Right" | "Top" | "Bottom" | "BestFit" | "Callout";
            /**
             *
             * String representing the separator used for the data label on a chart.
             *
             * [Api set: ExcelApi 1.7]
             */
            separator?: string;
            /**
             *
             * Boolean value representing if the data label bubble size is visible or not.
             *
             * [Api set: ExcelApi 1.7]
             */
            showBubbleSize?: boolean;
            /**
             *
             * Boolean value representing if the data label category name is visible or not.
             *
             * [Api set: ExcelApi 1.7]
             */
            showCategoryName?: boolean;
            /**
             *
             * Boolean value representing if the data label legend key is visible or not.
             *
             * [Api set: ExcelApi 1.7]
             */
            showLegendKey?: boolean;
            /**
             *
             * Boolean value representing if the data label percentage is visible or not.
             *
             * [Api set: ExcelApi 1.7]
             */
            showPercentage?: boolean;
            /**
             *
             * Boolean value representing if the data label series name is visible or not.
             *
             * [Api set: ExcelApi 1.7]
             */
            showSeriesName?: boolean;
            /**
             *
             * Boolean value representing if the data label value is visible or not.
             *
             * [Api set: ExcelApi 1.7]
             */
            showValue?: boolean;
        }
        /** An interface for updating data on the ChartDataLabelFormat object, for use in "chartDataLabelFormat.set({ ... })". */
        export interface ChartDataLabelFormatUpdateData {
            /**
            *
            * Represents the font attributes (font name, font size, color, etc.) for a chart data label.
            *
            * [Api set: ExcelApi 1.1]
            */
            font?: Excel.Interfaces.ChartFontUpdateData;
        }
        /** An interface for updating data on the ChartGridlines object, for use in "chartGridlines.set({ ... })". */
        export interface ChartGridlinesUpdateData {
            /**
            *
            * Represents the formatting of chart gridlines.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartGridlinesFormatUpdateData;
            /**
             *
             * Boolean value representing if the axis gridlines are visible or not.
             *
             * [Api set: ExcelApi 1.1]
             */
            visible?: boolean;
        }
        /** An interface for updating data on the ChartGridlinesFormat object, for use in "chartGridlinesFormat.set({ ... })". */
        export interface ChartGridlinesFormatUpdateData {
            /**
            *
            * Represents chart line formatting.
            *
            * [Api set: ExcelApi 1.1]
            */
            line?: Excel.Interfaces.ChartLineFormatUpdateData;
        }
        /** An interface for updating data on the ChartLegend object, for use in "chartLegend.set({ ... })". */
        export interface ChartLegendUpdateData {
            /**
            *
            * Represents the formatting of a chart legend, which includes fill and font formatting.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartLegendFormatUpdateData;
            /**
             *
             * Represents the height, in points, of the legend on the chart. Null if legend is not visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            height?: number;
            /**
             *
             * Represents the left, in points, of a chart legend. Null if legend is not visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            left?: number;
            /**
             *
             * Boolean value for whether the chart legend should overlap with the main body of the chart.
             *
             * [Api set: ExcelApi 1.1]
             */
            overlay?: boolean;
            /**
             *
             * Represents the position of the legend on the chart. See Excel.ChartLegendPosition for details.
             *
             * [Api set: ExcelApi 1.1]
             */
            position?: Excel.ChartLegendPosition | "Invalid" | "Top" | "Bottom" | "Left" | "Right" | "Corner" | "Custom";
            /**
             *
             * Represents if the legend has a shadow on the chart.
             *
             * [Api set: ExcelApi 1.7]
             */
            showShadow?: boolean;
            /**
             *
             * Represents the top of a chart legend.
             *
             * [Api set: ExcelApi 1.7]
             */
            top?: number;
            /**
             *
             * A boolean value the represents the visibility of a ChartLegend object.
             *
             * [Api set: ExcelApi 1.1]
             */
            visible?: boolean;
            /**
             *
             * Represents the width, in points, of the legend on the chart. Null if legend is not visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            width?: number;
        }
        /** An interface for updating data on the ChartLegendEntry object, for use in "chartLegendEntry.set({ ... })". */
        export interface ChartLegendEntryUpdateData {
            /**
             *
             * Represents the visible of a chart legend entry.
             *
             * [Api set: ExcelApi 1.7]
             */
            visible?: boolean;
        }
        /** An interface for updating data on the ChartLegendEntryCollection object, for use in "chartLegendEntryCollection.set({ ... })". */
        export interface ChartLegendEntryCollectionUpdateData {
            items?: Excel.Interfaces.ChartLegendEntryData[];
        }
        /** An interface for updating data on the ChartLegendFormat object, for use in "chartLegendFormat.set({ ... })". */
        export interface ChartLegendFormatUpdateData {
            /**
            *
            * Represents the font attributes such as font name, font size, color, etc. of a chart legend.
            *
            * [Api set: ExcelApi 1.1]
            */
            font?: Excel.Interfaces.ChartFontUpdateData;
        }
        /** An interface for updating data on the ChartTitle object, for use in "chartTitle.set({ ... })". */
        export interface ChartTitleUpdateData {
            /**
            *
            * Represents the formatting of a chart title, which includes fill and font formatting.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartTitleFormatUpdateData;
            /**
             *
             * Represents the horizontal alignment for chart title.
             *
             * [Api set: ExcelApi 1.7]
             */
            horizontalAlignment?: Excel.ChartTextHorizontalAlignment | "Center" | "Left" | "Right" | "Justify" | "Distributed";
            /**
             *
             * Represents the distance, in points, from the left edge of chart title to the left edge of chart area. Null if chart title's not visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            left?: number;
            /**
             *
             * Boolean value representing if the chart title will overlay the chart or not.
             *
             * [Api set: ExcelApi 1.1]
             */
            overlay?: boolean;
            /**
             *
             * Represents the position of chart title. See Excel.ChartTitlePosition for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            position?: Excel.ChartTitlePosition | "Automatic" | "Top" | "Bottom" | "Left" | "Right";
            /**
             *
             * Represents a boolean value that determines if the chart title has a shadow.
             *
             * [Api set: ExcelApi 1.7]
             */
            showShadow?: boolean;
            /**
             *
             * Represents the title text of a chart.
             *
             * [Api set: ExcelApi 1.1]
             */
            text?: string;
            /**
             *
             * Represents the text orientation of chart title. The value should be an integer either from -90 to 90, or 180 for vertically-oriented text.
             *
             * [Api set: ExcelApi 1.7]
             */
            textOrientation?: number;
            /**
             *
             * Represents the distance, in points, from the top edge of chart title to the top of chart area. Null if chart title's not visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            top?: number;
            /**
             *
             * Represents the vertical alignment of chart title. See Excel.ChartTextVerticalAlignment for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            verticalAlignment?: Excel.ChartTextVerticalAlignment | "Center" | "Bottom" | "Top" | "Justify" | "Distributed";
            /**
             *
             * A boolean value the represents the visibility of a chart title object.
             *
             * [Api set: ExcelApi 1.1]
             */
            visible?: boolean;
        }
        /** An interface for updating data on the ChartFormatString object, for use in "chartFormatString.set({ ... })". */
        export interface ChartFormatStringUpdateData {
            /**
            *
            * Represents the font attributes, such as font name, font size, color, etc. of chart characters object.
            *
            * [Api set: ExcelApi 1.7]
            */
            font?: Excel.Interfaces.ChartFontUpdateData;
        }
        /** An interface for updating data on the ChartTitleFormat object, for use in "chartTitleFormat.set({ ... })". */
        export interface ChartTitleFormatUpdateData {
            /**
            *
            * Represents the border format of chart title, which includes color, linestyle and weight.
            *
            * [Api set: ExcelApi 1.7]
            */
            border?: Excel.Interfaces.ChartBorderUpdateData;
            /**
            *
            * Represents the font attributes (font name, font size, color, etc.) for an object.
            *
            * [Api set: ExcelApi 1.1]
            */
            font?: Excel.Interfaces.ChartFontUpdateData;
        }
        /** An interface for updating data on the ChartBorder object, for use in "chartBorder.set({ ... })". */
        export interface ChartBorderUpdateData {
            /**
             *
             * HTML color code representing the color of borders in the chart.
             *
             * [Api set: ExcelApi 1.7]
             */
            color?: string;
            /**
             *
             * Represents the line style of the border. See Excel.ChartLineStyle for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            lineStyle?: Excel.ChartLineStyle | "None" | "Continuous" | "Dash" | "DashDot" | "DashDotDot" | "Dot" | "Grey25" | "Grey50" | "Grey75" | "Automatic" | "RoundDot";
            /**
             *
             * Represents weight of the border, in points.
             *
             * [Api set: ExcelApi 1.7]
             */
            weight?: number;
        }
        /** An interface for updating data on the ChartLineFormat object, for use in "chartLineFormat.set({ ... })". */
        export interface ChartLineFormatUpdateData {
            /**
             *
             * HTML color code representing the color of lines in the chart.
             *
             * [Api set: ExcelApi 1.1]
             */
            color?: string;
            /**
             *
             * Represents the line style. See Excel.ChartLineStyle for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            lineStyle?: Excel.ChartLineStyle | "None" | "Continuous" | "Dash" | "DashDot" | "DashDotDot" | "Dot" | "Grey25" | "Grey50" | "Grey75" | "Automatic" | "RoundDot";
            /**
             *
             * Represents weight of the line, in points.
             *
             * [Api set: ExcelApi 1.7]
             */
            weight?: number;
        }
        /** An interface for updating data on the ChartFont object, for use in "chartFont.set({ ... })". */
        export interface ChartFontUpdateData {
            /**
             *
             * Represents the bold status of font.
             *
             * [Api set: ExcelApi 1.1]
             */
            bold?: boolean;
            /**
             *
             * HTML color code representation of the text color. E.g. #FF0000 represents Red.
             *
             * [Api set: ExcelApi 1.1]
             */
            color?: string;
            /**
             *
             * Represents the italic status of the font.
             *
             * [Api set: ExcelApi 1.1]
             */
            italic?: boolean;
            /**
             *
             * Font name (e.g. "Calibri")
             *
             * [Api set: ExcelApi 1.1]
             */
            name?: string;
            /**
             *
             * Size of the font (e.g. 11)
             *
             * [Api set: ExcelApi 1.1]
             */
            size?: number;
            /**
             *
             * Type of underline applied to the font. See Excel.ChartUnderlineStyle for details.
             *
             * [Api set: ExcelApi 1.1]
             */
            underline?: Excel.ChartUnderlineStyle | "None" | "Single";
        }
        /** An interface for updating data on the ChartTrendline object, for use in "chartTrendline.set({ ... })". */
        export interface ChartTrendlineUpdateData {
            /**
            *
            * Represents the formatting of a chart trendline.
            *
            * [Api set: ExcelApi 1.7]
            */
            format?: Excel.Interfaces.ChartTrendlineFormatUpdateData;
            /**
             *
             * Represents the intercept value of the trendline. Can be set to a numeric value or an empty string (for automatic values). The returned value is always a number.
             *
             * [Api set: ExcelApi 1.7]
             */
            intercept?: any;
            /**
             *
             * Represents the period of a chart trendline. Only applicable for trendline with MovingAverage type.
             *
             * [Api set: ExcelApi 1.7]
             */
            movingAveragePeriod?: number;
            /**
             *
             * Represents the name of the trendline. Can be set to a string value, or can be set to null value represents automatic values. The returned value is always a string
             *
             * [Api set: ExcelApi 1.7]
             */
            name?: string;
            /**
             *
             * Represents the order of a chart trendline. Only applicable for trendline with Polynomial type.
             *
             * [Api set: ExcelApi 1.7]
             */
            polynomialOrder?: number;
            /**
             *
             * Represents the type of a chart trendline.
             *
             * [Api set: ExcelApi 1.7]
             */
            type?: Excel.ChartTrendlineType | "Linear" | "Exponential" | "Logarithmic" | "MovingAverage" | "Polynomial" | "Power";
        }
        /** An interface for updating data on the ChartTrendlineCollection object, for use in "chartTrendlineCollection.set({ ... })". */
        export interface ChartTrendlineCollectionUpdateData {
            items?: Excel.Interfaces.ChartTrendlineData[];
        }
        /** An interface for updating data on the ChartTrendlineFormat object, for use in "chartTrendlineFormat.set({ ... })". */
        export interface ChartTrendlineFormatUpdateData {
            /**
            *
            * Represents chart line formatting.
            *
            * [Api set: ExcelApi 1.7]
            */
            line?: Excel.Interfaces.ChartLineFormatUpdateData;
        }
        /** An interface for updating data on the CustomXmlPartScopedCollection object, for use in "customXmlPartScopedCollection.set({ ... })". */
        export interface CustomXmlPartScopedCollectionUpdateData {
            items?: Excel.Interfaces.CustomXmlPartData[];
        }
        /** An interface for updating data on the CustomXmlPartCollection object, for use in "customXmlPartCollection.set({ ... })". */
        export interface CustomXmlPartCollectionUpdateData {
            items?: Excel.Interfaces.CustomXmlPartData[];
        }
        /** An interface for updating data on the PivotTableCollection object, for use in "pivotTableCollection.set({ ... })". */
        export interface PivotTableCollectionUpdateData {
            items?: Excel.Interfaces.PivotTableData[];
        }
        /** An interface for updating data on the PivotTable object, for use in "pivotTable.set({ ... })". */
        export interface PivotTableUpdateData {
            /**
             *
             * Name of the PivotTable.
             *
             * [Api set: ExcelApi 1.3]
             */
            name?: string;
        }
        /** An interface for updating data on the DocumentProperties object, for use in "documentProperties.set({ ... })". */
        export interface DocumentPropertiesUpdateData {
            /**
             *
             * Gets or sets the author of the workbook.
             *
             * [Api set: ExcelApi 1.7]
             */
            author?: string;
            /**
             *
             * Gets or sets the category of the workbook.
             *
             * [Api set: ExcelApi 1.7]
             */
            category?: string;
            /**
             *
             * Gets or sets the comments of the workbook.
             *
             * [Api set: ExcelApi 1.7]
             */
            comments?: string;
            /**
             *
             * Gets or sets the company of the workbook.
             *
             * [Api set: ExcelApi 1.7]
             */
            company?: string;
            /**
             *
             * Gets or sets the keywords of the workbook.
             *
             * [Api set: ExcelApi 1.7]
             */
            keywords?: string;
            /**
             *
             * Gets or sets the manager of the workbook.
             *
             * [Api set: ExcelApi 1.7]
             */
            manager?: string;
            /**
             *
             * Gets the revision number of the workbook. Read only.
             *
             * [Api set: ExcelApi 1.7]
             */
            revisionNumber?: number;
            /**
             *
             * Gets or sets the subject of the workbook.
             *
             * [Api set: ExcelApi 1.7]
             */
            subject?: string;
            /**
             *
             * Gets or sets the title of the workbook.
             *
             * [Api set: ExcelApi 1.7]
             */
            title?: string;
        }
        /** An interface for updating data on the CustomProperty object, for use in "customProperty.set({ ... })". */
        export interface CustomPropertyUpdateData {
            /**
             *
             * Gets or sets the value of the custom property.
             *
             * [Api set: ExcelApi 1.7]
             */
            value?: any;
        }
        /** An interface for updating data on the CustomPropertyCollection object, for use in "customPropertyCollection.set({ ... })". */
        export interface CustomPropertyCollectionUpdateData {
            items?: Excel.Interfaces.CustomPropertyData[];
        }
        /** An interface for updating data on the ConditionalFormatCollection object, for use in "conditionalFormatCollection.set({ ... })". */
        export interface ConditionalFormatCollectionUpdateData {
            items?: Excel.Interfaces.ConditionalFormatData[];
        }
        /** An interface for updating data on the ConditionalFormat object, for use in "conditionalFormat.set({ ... })". */
        export interface ConditionalFormatUpdateData {
            /**
            *
            * Returns the cell value conditional format properties if the current conditional format is a CellValue type.
            For example to format all cells between 5 and 10.
            *
            * [Api set: ExcelApi 1.6]
            */
            cellValue?: Excel.Interfaces.CellValueConditionalFormatUpdateData;
            /**
            *
            * Returns the cell value conditional format properties if the current conditional format is a CellValue type.
            For example to format all cells between 5 and 10.
            *
            * [Api set: ExcelApi 1.6]
            */
            cellValueOrNullObject?: Excel.Interfaces.CellValueConditionalFormatUpdateData;
            /**
            *
            * Returns the ColorScale conditional format properties if the current conditional format is an ColorScale type.
            *
            * [Api set: ExcelApi 1.6]
            */
            colorScale?: Excel.Interfaces.ColorScaleConditionalFormatUpdateData;
            /**
            *
            * Returns the ColorScale conditional format properties if the current conditional format is an ColorScale type.
            *
            * [Api set: ExcelApi 1.6]
            */
            colorScaleOrNullObject?: Excel.Interfaces.ColorScaleConditionalFormatUpdateData;
            /**
            *
            * Returns the custom conditional format properties if the current conditional format is a custom type.
            *
            * [Api set: ExcelApi 1.6]
            */
            custom?: Excel.Interfaces.CustomConditionalFormatUpdateData;
            /**
            *
            * Returns the custom conditional format properties if the current conditional format is a custom type.
            *
            * [Api set: ExcelApi 1.6]
            */
            customOrNullObject?: Excel.Interfaces.CustomConditionalFormatUpdateData;
            /**
            *
            * Returns the data bar properties if the current conditional format is a data bar.
            *
            * [Api set: ExcelApi 1.6]
            */
            dataBar?: Excel.Interfaces.DataBarConditionalFormatUpdateData;
            /**
            *
            * Returns the data bar properties if the current conditional format is a data bar.
            *
            * [Api set: ExcelApi 1.6]
            */
            dataBarOrNullObject?: Excel.Interfaces.DataBarConditionalFormatUpdateData;
            /**
            *
            * Returns the IconSet conditional format properties if the current conditional format is an IconSet type.
            *
            * [Api set: ExcelApi 1.6]
            */
            iconSet?: Excel.Interfaces.IconSetConditionalFormatUpdateData;
            /**
            *
            * Returns the IconSet conditional format properties if the current conditional format is an IconSet type.
            *
            * [Api set: ExcelApi 1.6]
            */
            iconSetOrNullObject?: Excel.Interfaces.IconSetConditionalFormatUpdateData;
            /**
            *
            * Returns the preset criteria conditional format such as above average/below average/unique values/contains blank/nonblank/error/noerror properties.
            *
            * [Api set: ExcelApi 1.6]
            */
            preset?: Excel.Interfaces.PresetCriteriaConditionalFormatUpdateData;
            /**
            *
            * Returns the preset criteria conditional format such as above average/below average/unique values/contains blank/nonblank/error/noerror properties.
            *
            * [Api set: ExcelApi 1.6]
            */
            presetOrNullObject?: Excel.Interfaces.PresetCriteriaConditionalFormatUpdateData;
            /**
            *
            * Returns the specific text conditional format properties if the current conditional format is a text type.
            For example to format cells matching the word "Text".
            *
            * [Api set: ExcelApi 1.6]
            */
            textComparison?: Excel.Interfaces.TextConditionalFormatUpdateData;
            /**
            *
            * Returns the specific text conditional format properties if the current conditional format is a text type.
            For example to format cells matching the word "Text".
            *
            * [Api set: ExcelApi 1.6]
            */
            textComparisonOrNullObject?: Excel.Interfaces.TextConditionalFormatUpdateData;
            /**
            *
            * Returns the Top/Bottom conditional format properties if the current conditional format is an TopBottom type.
            For example to format the top 10% or bottom 10 items.
            *
            * [Api set: ExcelApi 1.6]
            */
            topBottom?: Excel.Interfaces.TopBottomConditionalFormatUpdateData;
            /**
            *
            * Returns the Top/Bottom conditional format properties if the current conditional format is an TopBottom type.
            For example to format the top 10% or bottom 10 items.
            *
            * [Api set: ExcelApi 1.6]
            */
            topBottomOrNullObject?: Excel.Interfaces.TopBottomConditionalFormatUpdateData;
            /**
             *
             * The priority (or index) within the conditional format collection that this conditional format currently exists in. Changing this also
            changes other conditional formats' priorities, to allow for a contiguous priority order.
            Use a negative priority to begin from the back.
            Priorities greater than than bounds will get and set to the maximum (or minimum if negative) priority.
            Also note that if you change the priority, you have to re-fetch a new copy of the object at that new priority location if you want to make further changes to it.
             *
             * [Api set: ExcelApi 1.6]
             */
            priority?: number;
            /**
             *
             * If the conditions of this conditional format are met, no lower-priority formats shall take effect on that cell.
            Null on databars, icon sets, and colorscales as there's no concept of StopIfTrue for these
             *
             * [Api set: ExcelApi 1.6]
             */
            stopIfTrue?: boolean;
        }
        /** An interface for updating data on the DataBarConditionalFormat object, for use in "dataBarConditionalFormat.set({ ... })". */
        export interface DataBarConditionalFormatUpdateData {
            /**
            *
            * Representation of all values to the left of the axis in an Excel data bar.
            *
            * [Api set: ExcelApi 1.6]
            */
            negativeFormat?: Excel.Interfaces.ConditionalDataBarNegativeFormatUpdateData;
            /**
            *
            * Representation of all values to the right of the axis in an Excel data bar.
            *
            * [Api set: ExcelApi 1.6]
            */
            positiveFormat?: Excel.Interfaces.ConditionalDataBarPositiveFormatUpdateData;
            /**
             *
             * HTML color code representing the color of the Axis line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
            "" (empty string) if no axis is present or set.
             *
             * [Api set: ExcelApi 1.6]
             */
            axisColor?: string;
            /**
             *
             * Representation of how the axis is determined for an Excel data bar.
             *
             * [Api set: ExcelApi 1.6]
             */
            axisFormat?: Excel.ConditionalDataBarAxisFormat | "Automatic" | "None" | "CellMidPoint";
            /**
             *
             * Represents the direction that the data bar graphic should be based on.
             *
             * [Api set: ExcelApi 1.6]
             */
            barDirection?: Excel.ConditionalDataBarDirection | "Context" | "LeftToRight" | "RightToLeft";
            /**
             *
             * The rule for what consistutes the lower bound (and how to calculate it, if applicable) for a data bar.
             *
             * [Api set: ExcelApi 1.6]
             */
            lowerBoundRule?: Excel.ConditionalDataBarRule;
            /**
             *
             * If true, hides the values from the cells where the data bar is applied.
             *
             * [Api set: ExcelApi 1.6]
             */
            showDataBarOnly?: boolean;
            /**
             *
             * The rule for what constitutes the upper bound (and how to calculate it, if applicable) for a data bar.
             *
             * [Api set: ExcelApi 1.6]
             */
            upperBoundRule?: Excel.ConditionalDataBarRule;
        }
        /** An interface for updating data on the ConditionalDataBarPositiveFormat object, for use in "conditionalDataBarPositiveFormat.set({ ... })". */
        export interface ConditionalDataBarPositiveFormatUpdateData {
            /**
             *
             * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
            "" (empty string) if no border is present or set.
             *
             * [Api set: ExcelApi 1.6]
             */
            borderColor?: string;
            /**
             *
             * HTML color code representing the fill color, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
             *
             * [Api set: ExcelApi 1.6]
             */
            fillColor?: string;
            /**
             *
             * Boolean representation of whether or not the DataBar has a gradient.
             *
             * [Api set: ExcelApi 1.6]
             */
            gradientFill?: boolean;
        }
        /** An interface for updating data on the ConditionalDataBarNegativeFormat object, for use in "conditionalDataBarNegativeFormat.set({ ... })". */
        export interface ConditionalDataBarNegativeFormatUpdateData {
            /**
             *
             * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
            "Empty String" if no border is present or set.
             *
             * [Api set: ExcelApi 1.6]
             */
            borderColor?: string;
            /**
             *
             * HTML color code representing the fill color, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
             *
             * [Api set: ExcelApi 1.6]
             */
            fillColor?: string;
            /**
             *
             * Boolean representation of whether or not the negative DataBar has the same border color as the positive DataBar.
             *
             * [Api set: ExcelApi 1.6]
             */
            matchPositiveBorderColor?: boolean;
            /**
             *
             * Boolean representation of whether or not the negative DataBar has the same fill color as the positive DataBar.
             *
             * [Api set: ExcelApi 1.6]
             */
            matchPositiveFillColor?: boolean;
        }
        /** An interface for updating data on the CustomConditionalFormat object, for use in "customConditionalFormat.set({ ... })". */
        export interface CustomConditionalFormatUpdateData {
            /**
            *
            * Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties.
            *
            * [Api set: ExcelApi 1.6]
            */
            format?: Excel.Interfaces.ConditionalRangeFormatUpdateData;
            /**
            *
            * Represents the Rule object on this conditional format.
            *
            * [Api set: ExcelApi 1.6]
            */
            rule?: Excel.Interfaces.ConditionalFormatRuleUpdateData;
        }
        /** An interface for updating data on the ConditionalFormatRule object, for use in "conditionalFormatRule.set({ ... })". */
        export interface ConditionalFormatRuleUpdateData {
            /**
             *
             * The formula, if required, to evaluate the conditional format rule on.
             *
             * [Api set: ExcelApi 1.6]
             */
            formula?: string;
            /**
             *
             * The formula, if required, to evaluate the conditional format rule on in the user's language.
             *
             * [Api set: ExcelApi 1.6]
             */
            formulaLocal?: string;
            /**
             *
             * The formula, if required, to evaluate the conditional format rule on in R1C1-style notation.
             *
             * [Api set: ExcelApi 1.6]
             */
            formulaR1C1?: string;
        }
        /** An interface for updating data on the IconSetConditionalFormat object, for use in "iconSetConditionalFormat.set({ ... })". */
        export interface IconSetConditionalFormatUpdateData {
            /**
             *
             * An array of Criteria and IconSets for the rules and potential custom icons for conditional icons. Note that for the first criterion only the custom icon can be modified, while type, formula and operator will be ignored when set.
             *
             * [Api set: ExcelApi 1.6]
             */
            criteria?: Excel.ConditionalIconCriterion[];
            /**
             *
             * If true, reverses the icon orders for the IconSet. Note that this cannot be set if custom icons are used.
             *
             * [Api set: ExcelApi 1.6]
             */
            reverseIconOrder?: boolean;
            /**
             *
             * If true, hides the values and only shows icons.
             *
             * [Api set: ExcelApi 1.6]
             */
            showIconOnly?: boolean;
            /**
             *
             * If set, displays the IconSet option for the conditional format.
             *
             * [Api set: ExcelApi 1.6]
             */
            style?: Excel.IconSet | "Invalid" | "ThreeArrows" | "ThreeArrowsGray" | "ThreeFlags" | "ThreeTrafficLights1" | "ThreeTrafficLights2" | "ThreeSigns" | "ThreeSymbols" | "ThreeSymbols2" | "FourArrows" | "FourArrowsGray" | "FourRedToBlack" | "FourRating" | "FourTrafficLights" | "FiveArrows" | "FiveArrowsGray" | "FiveRating" | "FiveQuarters" | "ThreeStars" | "ThreeTriangles" | "FiveBoxes";
        }
        /** An interface for updating data on the ColorScaleConditionalFormat object, for use in "colorScaleConditionalFormat.set({ ... })". */
        export interface ColorScaleConditionalFormatUpdateData {
            /**
             *
             * The criteria of the color scale. Midpoint is optional when using a two point color scale.
             *
             * [Api set: ExcelApi 1.6]
             */
            criteria?: Excel.ConditionalColorScaleCriteria;
        }
        /** An interface for updating data on the TopBottomConditionalFormat object, for use in "topBottomConditionalFormat.set({ ... })". */
        export interface TopBottomConditionalFormatUpdateData {
            /**
            *
            * Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties.
            *
            * [Api set: ExcelApi 1.6]
            */
            format?: Excel.Interfaces.ConditionalRangeFormatUpdateData;
            /**
             *
             * The criteria of the Top/Bottom conditional format.
             *
             * [Api set: ExcelApi 1.6]
             */
            rule?: Excel.ConditionalTopBottomRule;
        }
        /** An interface for updating data on the PresetCriteriaConditionalFormat object, for use in "presetCriteriaConditionalFormat.set({ ... })". */
        export interface PresetCriteriaConditionalFormatUpdateData {
            /**
            *
            * Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties.
            *
            * [Api set: ExcelApi 1.6]
            */
            format?: Excel.Interfaces.ConditionalRangeFormatUpdateData;
            /**
             *
             * The rule of the conditional format.
             *
             * [Api set: ExcelApi 1.6]
             */
            rule?: Excel.ConditionalPresetCriteriaRule;
        }
        /** An interface for updating data on the TextConditionalFormat object, for use in "textConditionalFormat.set({ ... })". */
        export interface TextConditionalFormatUpdateData {
            /**
            *
            * Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties.
            *
            * [Api set: ExcelApi 1.6]
            */
            format?: Excel.Interfaces.ConditionalRangeFormatUpdateData;
            /**
             *
             * The rule of the conditional format.
             *
             * [Api set: ExcelApi 1.6]
             */
            rule?: Excel.ConditionalTextComparisonRule;
        }
        /** An interface for updating data on the CellValueConditionalFormat object, for use in "cellValueConditionalFormat.set({ ... })". */
        export interface CellValueConditionalFormatUpdateData {
            /**
            *
            * Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties.
            *
            * [Api set: ExcelApi 1.6]
            */
            format?: Excel.Interfaces.ConditionalRangeFormatUpdateData;
            /**
             *
             * Represents the Rule object on this conditional format.
             *
             * [Api set: ExcelApi 1.6]
             */
            rule?: Excel.ConditionalCellValueRule;
        }
        /** An interface for updating data on the ConditionalRangeFormat object, for use in "conditionalRangeFormat.set({ ... })". */
        export interface ConditionalRangeFormatUpdateData {
            /**
            *
            * Collection of border objects that apply to the overall conditional format range.
            *
            * [Api set: ExcelApi 1.6]
            */
            borders?: Excel.Interfaces.ConditionalRangeBorderCollectionUpdateData;
            /**
            *
            * Returns the fill object defined on the overall conditional format range.
            *
            * [Api set: ExcelApi 1.6]
            */
            fill?: Excel.Interfaces.ConditionalRangeFillUpdateData;
            /**
            *
            * Returns the font object defined on the overall conditional format range.
            *
            * [Api set: ExcelApi 1.6]
            */
            font?: Excel.Interfaces.ConditionalRangeFontUpdateData;
            /**
             *
             * Represents Excel's number format code for the given range. Cleared if null is passed in.
             *
             * [Api set: ExcelApi 1.6]
             */
            numberFormat?: any;
        }
        /** An interface for updating data on the ConditionalRangeFont object, for use in "conditionalRangeFont.set({ ... })". */
        export interface ConditionalRangeFontUpdateData {
            /**
             *
             * Represents the bold status of font.
             *
             * [Api set: ExcelApi 1.6]
             */
            bold?: boolean;
            /**
             *
             * HTML color code representation of the text color. E.g. #FF0000 represents Red.
             *
             * [Api set: ExcelApi 1.6]
             */
            color?: string;
            /**
             *
             * Represents the italic status of the font.
             *
             * [Api set: ExcelApi 1.6]
             */
            italic?: boolean;
            /**
             *
             * Represents the strikethrough status of the font.
             *
             * [Api set: ExcelApi 1.6]
             */
            strikethrough?: boolean;
            /**
             *
             * Type of underline applied to the font. See Excel.ConditionalRangeFontUnderlineStyle for details.
             *
             * [Api set: ExcelApi 1.6]
             */
            underline?: Excel.ConditionalRangeFontUnderlineStyle | "None" | "Single" | "Double";
        }
        /** An interface for updating data on the ConditionalRangeFill object, for use in "conditionalRangeFill.set({ ... })". */
        export interface ConditionalRangeFillUpdateData {
            /**
             *
             * HTML color code representing the color of the fill, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
             *
             * [Api set: ExcelApi 1.6]
             */
            color?: string;
        }
        /** An interface for updating data on the ConditionalRangeBorder object, for use in "conditionalRangeBorder.set({ ... })". */
        export interface ConditionalRangeBorderUpdateData {
            /**
             *
             * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
             *
             * [Api set: ExcelApi 1.6]
             */
            color?: string;
            /**
             *
             * One of the constants of line style specifying the line style for the border. See Excel.BorderLineStyle for details.
             *
             * [Api set: ExcelApi 1.6]
             */
            style?: Excel.ConditionalRangeBorderLineStyle | "None" | "Continuous" | "Dash" | "DashDot" | "DashDotDot" | "Dot";
        }
        /** An interface for updating data on the ConditionalRangeBorderCollection object, for use in "conditionalRangeBorderCollection.set({ ... })". */
        export interface ConditionalRangeBorderCollectionUpdateData {
            /**
            *
            * Gets the top border
            *
            * [Api set: ExcelApi 1.6]
            */
            bottom?: Excel.Interfaces.ConditionalRangeBorderUpdateData;
            /**
            *
            * Gets the top border
            *
            * [Api set: ExcelApi 1.6]
            */
            left?: Excel.Interfaces.ConditionalRangeBorderUpdateData;
            /**
            *
            * Gets the top border
            *
            * [Api set: ExcelApi 1.6]
            */
            right?: Excel.Interfaces.ConditionalRangeBorderUpdateData;
            /**
            *
            * Gets the top border
            *
            * [Api set: ExcelApi 1.6]
            */
            top?: Excel.Interfaces.ConditionalRangeBorderUpdateData;
            items?: Excel.Interfaces.ConditionalRangeBorderData[];
        }
        /** An interface for updating data on the Style object, for use in "style.set({ ... })". */
        export interface StyleUpdateData {
            /**
            *
            * The Fill of the style.
            *
            * [Api set: ExcelApi 1.7]
            */
            fill?: Excel.Interfaces.RangeFillUpdateData;
            /**
            *
            * A Font object that represents the font of the style.
            *
            * [Api set: ExcelApi 1.7]
            */
            font?: Excel.Interfaces.RangeFontUpdateData;
            /**
             *
             * Indicates if the formula will be hidden when the worksheet is protected.
             *
             * [Api set: ExcelApi 1.7]
             */
            formulaHidden?: boolean;
            /**
             *
             * Represents the horizontal alignment for the style. See Excel.HorizontalAlignment for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            horizontalAlignment?: Excel.HorizontalAlignment | "General" | "Left" | "Center" | "Right" | "Fill" | "Justify" | "CenterAcrossSelection" | "Distributed";
            /**
             *
             * Indicates if the style includes the AutoIndent, HorizontalAlignment, VerticalAlignment, WrapText, IndentLevel, and TextOrientation properties.
             *
             * [Api set: ExcelApi 1.7]
             */
            includeAlignment?: boolean;
            /**
             *
             * Indicates if the style includes the Color, ColorIndex, LineStyle, and Weight border properties.
             *
             * [Api set: ExcelApi 1.7]
             */
            includeBorder?: boolean;
            /**
             *
             * Indicates if the style includes the Background, Bold, Color, ColorIndex, FontStyle, Italic, Name, Size, Strikethrough, Subscript, Superscript, and Underline font properties.
             *
             * [Api set: ExcelApi 1.7]
             */
            includeFont?: boolean;
            /**
             *
             * Indicates if the style includes the NumberFormat property.
             *
             * [Api set: ExcelApi 1.7]
             */
            includeNumber?: boolean;
            /**
             *
             * Indicates if the style includes the Color, ColorIndex, InvertIfNegative, Pattern, PatternColor, and PatternColorIndex interior properties.
             *
             * [Api set: ExcelApi 1.7]
             */
            includePatterns?: boolean;
            /**
             *
             * Indicates if the style includes the FormulaHidden and Locked protection properties.
             *
             * [Api set: ExcelApi 1.7]
             */
            includeProtection?: boolean;
            /**
             *
             * An integer from 0 to 250 that indicates the indent level for the style.
             *
             * [Api set: ExcelApi 1.7]
             */
            indentLevel?: number;
            /**
             *
             * Indicates if the object is locked when the worksheet is protected.
             *
             * [Api set: ExcelApi 1.7]
             */
            locked?: boolean;
            /**
             *
             * The format code of the number format for the style.
             *
             * [Api set: ExcelApi 1.7]
             */
            numberFormat?: string;
            /**
             *
             * The localized format code of the number format for the style.
             *
             * [Api set: ExcelApi 1.7]
             */
            numberFormatLocal?: string;
            /**
             *
             * The reading order for the style.
             *
             * [Api set: ExcelApi 1.7]
             */
            readingOrder?: Excel.ReadingOrder | "Context" | "LeftToRight" | "RightToLeft";
            /**
             *
             * Indicates if text automatically shrinks to fit in the available column width.
             *
             * [Api set: ExcelApi 1.7]
             */
            shrinkToFit?: boolean;
            /**
             *
             * Represents the vertical alignment for the style. See Excel.VerticalAlignment for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            verticalAlignment?: Excel.VerticalAlignment | "Top" | "Center" | "Bottom" | "Justify" | "Distributed";
            /**
             *
             * Indicates if Microsoft Excel wraps the text in the object.
             *
             * [Api set: ExcelApi 1.7]
             */
            wrapText?: boolean;
        }
        /** An interface for updating data on the StyleCollection object, for use in "styleCollection.set({ ... })". */
        export interface StyleCollectionUpdateData {
            items?: Excel.Interfaces.StyleData[];
        }
        /** An interface describing the data returned by calling "application.toJSON()". */
        export interface ApplicationData {
            /**
             *
             * Returns the calculation mode used in the workbook. See Excel.CalculationMode for details.
             *
             * [Api set: ExcelApi 1.1 for get, 1.8 for set]
             */
            calculationMode?: Excel.CalculationMode | "Automatic" | "AutomaticExceptTables" | "Manual";
        }
        /** An interface describing the data returned by calling "workbook.toJSON()". */
        export interface WorkbookData {
            /**
            *
            * Represents the Excel application instance that contains this workbook.
            *
            * [Api set: ExcelApi 1.1]
            */
            application?: Excel.Interfaces.ApplicationData;
            /**
            *
            * Represents a collection of bindings that are part of the workbook.
            *
            * [Api set: ExcelApi 1.1]
            */
            bindings?: Excel.Interfaces.BindingData[];
            /**
            *
            * Represents the collection of custom XML parts contained by this workbook.
            *
            * [Api set: ExcelApi 1.5]
            */
            customXmlParts?: Excel.Interfaces.CustomXmlPartData[];
            /**
            *
            * Represents a collection of workbook scoped named items (named ranges and constants).
            *
            * [Api set: ExcelApi 1.1]
            */
            names?: Excel.Interfaces.NamedItemData[];
            /**
            *
            * Represents a collection of PivotTables associated with the workbook.
            *
            * [Api set: ExcelApi 1.3]
            */
            pivotTables?: Excel.Interfaces.PivotTableData[];
            /**
            *
            * Gets the workbook properties.
            *
            * [Api set: ExcelApi 1.7]
            */
            properties?: Excel.Interfaces.DocumentPropertiesData;
            /**
            *
            * Represents a collection of Settings associated with the workbook.
            *
            * [Api set: ExcelApi 1.4]
            */
            settings?: Excel.Interfaces.SettingData[];
            /**
            *
            * Represents a collection of styles associated with the workbook.
            *
            * [Api set: ExcelApi 1.7]
            */
            styles?: Excel.Interfaces.StyleData[];
            /**
            *
            * Represents a collection of tables associated with the workbook.
            *
            * [Api set: ExcelApi 1.1]
            */
            tables?: Excel.Interfaces.TableData[];
            /**
            *
            * Represents a collection of worksheets associated with the workbook.
            *
            * [Api set: ExcelApi 1.1]
            */
            worksheets?: Excel.Interfaces.WorksheetData[];
            /**
             *
             * Gets the workbook name.
             *
             * [Api set: ExcelApi 1.7]
             */
            name?: string;
        }
        /** An interface describing the data returned by calling "worksheet.toJSON()". */
        export interface WorksheetData {
            /**
            *
            * Returns collection of charts that are part of the worksheet.
            *
            * [Api set: ExcelApi 1.1]
            */
            charts?: Excel.Interfaces.ChartData[];
            /**
            *
            * Collection of names scoped to the current worksheet.
            *
            * [Api set: ExcelApi 1.4]
            */
            names?: Excel.Interfaces.NamedItemData[];
            /**
            *
            * Collection of PivotTables that are part of the worksheet.
            *
            * [Api set: ExcelApi 1.3]
            */
            pivotTables?: Excel.Interfaces.PivotTableData[];
            /**
            *
            * Returns sheet protection object for a worksheet.
            *
            * [Api set: ExcelApi 1.2]
            */
            protection?: Excel.Interfaces.WorksheetProtectionData;
            /**
            *
            * Collection of tables that are part of the worksheet.
            *
            * [Api set: ExcelApi 1.1]
            */
            tables?: Excel.Interfaces.TableData[];
            /**
             *
             * Returns a value that uniquely identifies the worksheet in a given workbook. The value of the identifier remains the same even when the worksheet is renamed or moved. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            id?: string;
            /**
             *
             * The display name of the worksheet.
             *
             * [Api set: ExcelApi 1.1]
             */
            name?: string;
            /**
             *
             * The zero-based position of the worksheet within the workbook.
             *
             * [Api set: ExcelApi 1.1]
             */
            position?: number;
            /**
             *
             * Returns the standard (default) height of all the rows in the worksheet, in points. Read-only.
             *
             * [Api set: ExcelApi 1.7]
             */
            standardHeight?: number;
            /**
             *
             * Returns or sets the standard (default) width of all the columns in the worksheet.
            One unit of column width is equal to the width of one character in the Normal style. For proportional fonts, the width of the character 0 (zero) is used.
             *
             * [Api set: ExcelApi 1.7]
             */
            standardWidth?: number;
            /**
             *
             * Gets or sets the worksheet tab color.
            When retrieving the tab color, if the worksheet is invisible, the value will be null. If the worksheet is visible but the tab color is set to auto, an empty string will be returned. Otherwise, the property will be set to a color, in the form "#123456"
            When setting the color, use an empty-string to set an "auto" color, or a real color otherwise.
             *
             * [Api set: ExcelApi 1.7]
             */
            tabColor?: string;
            /**
             *
             * The Visibility of the worksheet.
             *
             * [Api set: ExcelApi 1.1 for reading visibility; 1.2 for setting it.]
             */
            visibility?: Excel.SheetVisibility | "Visible" | "Hidden" | "VeryHidden";
        }
        /** An interface describing the data returned by calling "worksheetCollection.toJSON()". */
        export interface WorksheetCollectionData {
            items?: Excel.Interfaces.WorksheetData[];
        }
        /** An interface describing the data returned by calling "worksheetProtection.toJSON()". */
        export interface WorksheetProtectionData {
            /**
             *
             * Sheet protection options.
             *
             * [Api set: ExcelApi 1.2]
             */
            options?: Excel.WorksheetProtectionOptions;
            /**
             *
             * Indicates if the worksheet is protected. Read-Only.
             *
             * [Api set: ExcelApi 1.2]
             */
            protected?: boolean;
        }
        /** An interface describing the data returned by calling "range.toJSON()". */
        export interface RangeData {
            /**
            *
            * Collection of ConditionalFormats that intersect the range.
            *
            * [Api set: ExcelApi 1.6]
            */
            conditionalFormats?: Excel.Interfaces.ConditionalFormatData[];
            /**
            *
            * Returns a format object, encapsulating the range's font, fill, borders, alignment, and other properties. Read-only.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.RangeFormatData;
            /**
            *
            * The worksheet containing the current range.
            *
            * [Api set: ExcelApi 1.1]
            */
            worksheet?: Excel.Interfaces.WorksheetData;
            /**
             *
             * Represents the range reference in A1-style. Address value will contain the Sheet reference (e.g. Sheet1!A1:B4). Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            address?: string;
            /**
             *
             * Represents range reference for the specified range in the language of the user. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            addressLocal?: string;
            /**
             *
             * Number of cells in the range. This API will return -1 if the cell count exceeds 2^31-1 (2,147,483,647). Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            cellCount?: number;
            /**
             *
             * Represents the total number of columns in the range. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            columnCount?: number;
            /**
             *
             * Represents if all columns of the current range are hidden.
             *
             * [Api set: ExcelApi 1.2]
             */
            columnHidden?: boolean;
            /**
             *
             * Represents the column number of the first cell in the range. Zero-indexed. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            columnIndex?: number;
            /**
             *
             * Represents the formula in A1-style notation.
            When setting formulas to a range, the value argument can be either a single value (a string) or a two-dimensional array. If the argument is a single value, it will be applied to all cells in the range.
             *
             * [Api set: ExcelApi 1.1]
             */
            formulas?: any[][];
            /**
             *
             * Represents the formula in A1-style notation, in the user's language and number-formatting locale.  For example, the English "=SUM(A1, 1.5)" formula would become "=SUMME(A1; 1,5)" in German.
            When setting formulas to a range, the value argument can be either a single value (a string) or a two-dimensional array. If the argument is a single value, it will be applied to all cells in the range.
             *
             * [Api set: ExcelApi 1.1]
             */
            formulasLocal?: any[][];
            /**
             *
             * Represents the formula in R1C1-style notation.
            When setting formulas to a range, the value argument can be either a single value (a string) or a two-dimensional array. If the argument is a single value, it will be applied to all cells in the range.
             *
             * [Api set: ExcelApi 1.2]
             */
            formulasR1C1?: any[][];
            /**
             *
             * Represents if all cells of the current range are hidden.
             *
             * [Api set: ExcelApi 1.2]
             */
            hidden?: boolean;
            /**
             *
             * Represents the hyperlink for the current range.
             *
             * [Api set: ExcelApi 1.7]
             */
            hyperlink?: Excel.RangeHyperlink;
            /**
             *
             * Represents if the current range is an entire column.
             *
             * [Api set: ExcelApi 1.7]
             */
            isEntireColumn?: boolean;
            /**
             *
             * Represents if the current range is an entire row.
             *
             * [Api set: ExcelApi 1.7]
             */
            isEntireRow?: boolean;
            /**
             *
             * Represents Excel's number format code for the given range.
            When setting number format to a range, the value argument can be either a single value (string) or a two-dimensional array. If the argument is a single value, it will be applied to all cells in the range.
             *
             * [Api set: ExcelApi 1.1]
             */
            numberFormat?: any[][];
            /**
             *
             * Represents Excel's number format code for the given range as a string in the language of the user.
            When setting number format local to a range, the value argument can be either a single value (string) or a two-dimensional array. If the argument is a single value, it will be applied to all cells in the range.
             *
             * [Api set: ExcelApi 1.7]
             */
            numberFormatLocal?: any[][];
            /**
             *
             * Returns the total number of rows in the range. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            rowCount?: number;
            /**
             *
             * Represents if all rows of the current range are hidden.
             *
             * [Api set: ExcelApi 1.2]
             */
            rowHidden?: boolean;
            /**
             *
             * Returns the row number of the first cell in the range. Zero-indexed. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            rowIndex?: number;
            /**
             *
             * Represents the style of the current range.
            If the styles of the cells are inconsistent, null will be returned.
            For custom styles, the style name will be returned. For built-in styles, a string representing a value in the BuiltInStyle enum will be returned.
             *
             * [Api set: ExcelApi 1.7]
             */
            style?: string;
            /**
             *
             * Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that happens in Excel UI will not affect the text value returned by the API. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            text?: string[][];
            /**
             *
             * Represents the type of data of each cell. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            valueTypes?: Excel.RangeValueType[][];
            /**
             *
             * Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
            When setting values to a range, the value argument can be either a single value (string, number or boolean) or a two-dimensional array. If the argument is a single value, it will be applied to all cells in the range.
             *
             * [Api set: ExcelApi 1.1]
             */
            values?: any[][];
        }
        /** An interface describing the data returned by calling "rangeView.toJSON()". */
        export interface RangeViewData {
            /**
            *
            * Represents a collection of range views associated with the range.
            *
            * [Api set: ExcelApi 1.3]
            */
            rows?: Excel.Interfaces.RangeViewData[];
            /**
             *
             * Represents the cell addresses of the RangeView.
             *
             * [Api set: ExcelApi 1.3]
             */
            cellAddresses?: any[][];
            /**
             *
             * Returns the number of visible columns. Read-only.
             *
             * [Api set: ExcelApi 1.3]
             */
            columnCount?: number;
            /**
             *
             * Represents the formula in A1-style notation.
             *
             * [Api set: ExcelApi 1.3]
             */
            formulas?: any[][];
            /**
             *
             * Represents the formula in A1-style notation, in the user's language and number-formatting locale.  For example, the English "=SUM(A1, 1.5)" formula would become "=SUMME(A1; 1,5)" in German.
             *
             * [Api set: ExcelApi 1.3]
             */
            formulasLocal?: any[][];
            /**
             *
             * Represents the formula in R1C1-style notation.
             *
             * [Api set: ExcelApi 1.3]
             */
            formulasR1C1?: any[][];
            /**
             *
             * Returns a value that represents the index of the RangeView. Read-only.
             *
             * [Api set: ExcelApi 1.3]
             */
            index?: number;
            /**
             *
             * Represents Excel's number format code for the given cell.
             *
             * [Api set: ExcelApi 1.3]
             */
            numberFormat?: any[][];
            /**
             *
             * Returns the number of visible rows. Read-only.
             *
             * [Api set: ExcelApi 1.3]
             */
            rowCount?: number;
            /**
             *
             * Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that happens in Excel UI will not affect the text value returned by the API. Read-only.
             *
             * [Api set: ExcelApi 1.3]
             */
            text?: string[][];
            /**
             *
             * Represents the type of data of each cell. Read-only.
             *
             * [Api set: ExcelApi 1.3]
             */
            valueTypes?: Excel.RangeValueType[][];
            /**
             *
             * Represents the raw values of the specified range view. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
             *
             * [Api set: ExcelApi 1.3]
             */
            values?: any[][];
        }
        /** An interface describing the data returned by calling "rangeViewCollection.toJSON()". */
        export interface RangeViewCollectionData {
            items?: Excel.Interfaces.RangeViewData[];
        }
        /** An interface describing the data returned by calling "settingCollection.toJSON()". */
        export interface SettingCollectionData {
            items?: Excel.Interfaces.SettingData[];
        }
        /** An interface describing the data returned by calling "setting.toJSON()". */
        export interface SettingData {
            /**
             *
             * Returns the key that represents the id of the Setting. Read-only.
             *
             * [Api set: ExcelApi 1.4]
             */
            key?: string;
            /**
             *
             * Represents the value stored for this setting.
             *
             * [Api set: ExcelApi 1.4]
             */
            value?: any;
        }
        /** An interface describing the data returned by calling "namedItemCollection.toJSON()". */
        export interface NamedItemCollectionData {
            items?: Excel.Interfaces.NamedItemData[];
        }
        /** An interface describing the data returned by calling "namedItem.toJSON()". */
        export interface NamedItemData {
            /**
            *
            * Returns an object containing values and types of the named item.
            *
            * [Api set: ExcelApi 1.7]
            */
            arrayValues?: Excel.Interfaces.NamedItemArrayValuesData;
            /**
            *
            * Returns the worksheet on which the named item is scoped to. Throws an error if the items is scoped to the workbook instead.
            *
            * [Api set: ExcelApi 1.4]
            */
            worksheet?: Excel.Interfaces.WorksheetData;
            /**
            *
            * Returns the worksheet on which the named item is scoped to. Returns a null object if the item is scoped to the workbook instead.
            *
            * [Api set: ExcelApi 1.4]
            */
            worksheetOrNullObject?: Excel.Interfaces.WorksheetData;
            /**
             *
             * Represents the comment associated with this name.
             *
             * [Api set: ExcelApi 1.4]
             */
            comment?: string;
            /**
             *
             * Gets or sets the formula of the named item.  Formula always starts with a '=' sign.
             *
             * [Api set: ExcelApi 1.7]
             */
            formula?: any;
            /**
             *
             * The name of the object. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            name?: string;
            /**
             *
             * Indicates whether the name is scoped to the workbook or to a specific worksheet. Read-only.
             *
             * [Api set: ExcelApi 1.4]
             */
            scope?: Excel.NamedItemScope | "Worksheet" | "Workbook";
            /**
             *
             * Indicates the type of the value returned by the name's formula. See Excel.NamedItemType for details. Read-only.
             *
             * [Api set: ExcelApi 1.1 for String,Integer,Double,Boolean,Range,Error; 1.7 for Array]
             */
            type?: Excel.NamedItemType | "String" | "Integer" | "Double" | "Boolean" | "Range" | "Error" | "Array";
            /**
             *
             * Represents the value computed by the name's formula. For a named range, will return the range address. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            value?: any;
            /**
             *
             * Specifies whether the object is visible or not.
             *
             * [Api set: ExcelApi 1.1]
             */
            visible?: boolean;
        }
        /** An interface describing the data returned by calling "namedItemArrayValues.toJSON()". */
        export interface NamedItemArrayValuesData {
            /**
             *
             * Represents the types for each item in the named item array
             *
             * [Api set: ExcelApi 1.7]
             */
            types?: Excel.RangeValueType[][];
            /**
             *
             * Represents the values of each item in the named item array.
             *
             * [Api set: ExcelApi 1.7]
             */
            values?: any[][];
        }
        /** An interface describing the data returned by calling "binding.toJSON()". */
        export interface BindingData {
            /**
             *
             * Represents binding identifier. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            id?: string;
            /**
             *
             * Returns the type of the binding. See Excel.BindingType for details. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            type?: Excel.BindingType | "Range" | "Table" | "Text";
        }
        /** An interface describing the data returned by calling "bindingCollection.toJSON()". */
        export interface BindingCollectionData {
            items?: Excel.Interfaces.BindingData[];
        }
        /** An interface describing the data returned by calling "tableCollection.toJSON()". */
        export interface TableCollectionData {
            items?: Excel.Interfaces.TableData[];
        }
        /** An interface describing the data returned by calling "table.toJSON()". */
        export interface TableData {
            /**
            *
            * Represents a collection of all the columns in the table.
            *
            * [Api set: ExcelApi 1.1]
            */
            columns?: Excel.Interfaces.TableColumnData[];
            /**
            *
            * Represents a collection of all the rows in the table.
            *
            * [Api set: ExcelApi 1.1]
            */
            rows?: Excel.Interfaces.TableRowData[];
            /**
            *
            * Represents the sorting for the table.
            *
            * [Api set: ExcelApi 1.2]
            */
            sort?: Excel.Interfaces.TableSortData;
            /**
            *
            * The worksheet containing the current table.
            *
            * [Api set: ExcelApi 1.2]
            */
            worksheet?: Excel.Interfaces.WorksheetData;
            /**
             *
             * Indicates whether the first column contains special formatting.
             *
             * [Api set: ExcelApi 1.3]
             */
            highlightFirstColumn?: boolean;
            /**
             *
             * Indicates whether the last column contains special formatting.
             *
             * [Api set: ExcelApi 1.3]
             */
            highlightLastColumn?: boolean;
            /**
             *
             * Returns a value that uniquely identifies the table in a given workbook. The value of the identifier remains the same even when the table is renamed. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            id?: string;
            /**
             *
             * Name of the table.
             *
             * [Api set: ExcelApi 1.1]
             */
            name?: string;
            /**
             *
             * Indicates whether the columns show banded formatting in which odd columns are highlighted differently from even ones to make reading the table easier.
             *
             * [Api set: ExcelApi 1.3]
             */
            showBandedColumns?: boolean;
            /**
             *
             * Indicates whether the rows show banded formatting in which odd rows are highlighted differently from even ones to make reading the table easier.
             *
             * [Api set: ExcelApi 1.3]
             */
            showBandedRows?: boolean;
            /**
             *
             * Indicates whether the filter buttons are visible at the top of each column header. Setting this is only allowed if the table contains a header row.
             *
             * [Api set: ExcelApi 1.3]
             */
            showFilterButton?: boolean;
            /**
             *
             * Indicates whether the header row is visible or not. This value can be set to show or remove the header row.
             *
             * [Api set: ExcelApi 1.1]
             */
            showHeaders?: boolean;
            /**
             *
             * Indicates whether the total row is visible or not. This value can be set to show or remove the total row.
             *
             * [Api set: ExcelApi 1.1]
             */
            showTotals?: boolean;
            /**
             *
             * Constant value that represents the Table style. Possible values are: TableStyleLight1 thru TableStyleLight21, TableStyleMedium1 thru TableStyleMedium28, TableStyleStyleDark1 thru TableStyleStyleDark11. A custom user-defined style present in the workbook can also be specified.
             *
             * [Api set: ExcelApi 1.1]
             */
            style?: string;
        }
        /** An interface describing the data returned by calling "tableColumnCollection.toJSON()". */
        export interface TableColumnCollectionData {
            items?: Excel.Interfaces.TableColumnData[];
        }
        /** An interface describing the data returned by calling "tableColumn.toJSON()". */
        export interface TableColumnData {
            /**
            *
            * Retrieve the filter applied to the column.
            *
            * [Api set: ExcelApi 1.2]
            */
            filter?: Excel.Interfaces.FilterData;
            /**
             *
             * Returns a unique key that identifies the column within the table. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            id?: number;
            /**
             *
             * Returns the index number of the column within the columns collection of the table. Zero-indexed. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            index?: number;
            /**
             *
             * Represents the name of the table column.
             *
             * [Api set: ExcelApi 1.1 for getting the name; 1.4 for setting it.]
             */
            name?: string;
            /**
             *
             * Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
             *
             * [Api set: ExcelApi 1.1]
             */
            values?: any[][];
        }
        /** An interface describing the data returned by calling "tableRowCollection.toJSON()". */
        export interface TableRowCollectionData {
            items?: Excel.Interfaces.TableRowData[];
        }
        /** An interface describing the data returned by calling "tableRow.toJSON()". */
        export interface TableRowData {
            /**
             *
             * Returns the index number of the row within the rows collection of the table. Zero-indexed. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            index?: number;
            /**
             *
             * Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
             *
             * [Api set: ExcelApi 1.1]
             */
            values?: any[][];
        }
        /** An interface describing the data returned by calling "rangeFormat.toJSON()". */
        export interface RangeFormatData {
            /**
            *
            * Collection of border objects that apply to the overall range.
            *
            * [Api set: ExcelApi 1.1]
            */
            borders?: Excel.Interfaces.RangeBorderData[];
            /**
            *
            * Returns the fill object defined on the overall range.
            *
            * [Api set: ExcelApi 1.1]
            */
            fill?: Excel.Interfaces.RangeFillData;
            /**
            *
            * Returns the font object defined on the overall range.
            *
            * [Api set: ExcelApi 1.1]
            */
            font?: Excel.Interfaces.RangeFontData;
            /**
            *
            * Returns the format protection object for a range.
            *
            * [Api set: ExcelApi 1.2]
            */
            protection?: Excel.Interfaces.FormatProtectionData;
            /**
             *
             * Gets or sets the width of all colums within the range. If the column widths are not uniform, null will be returned.
             *
             * [Api set: ExcelApi 1.2]
             */
            columnWidth?: number;
            /**
             *
             * Represents the horizontal alignment for the specified object. See Excel.HorizontalAlignment for details.
             *
             * [Api set: ExcelApi 1.1]
             */
            horizontalAlignment?: Excel.HorizontalAlignment | "General" | "Left" | "Center" | "Right" | "Fill" | "Justify" | "CenterAcrossSelection" | "Distributed";
            /**
             *
             * Gets or sets the height of all rows in the range. If the row heights are not uniform, null will be returned.
             *
             * [Api set: ExcelApi 1.2]
             */
            rowHeight?: number;
            /**
             *
             * Gets or sets the text orientation of all the cells within the range.
            The text orientation should be an integer either from -90 to 90, or 180 for vertically-oriented text.
            If the orientation within a range are not uniform, then null will be returned.
             *
             * [Api set: ExcelApi 1.7]
             */
            textOrientation?: number;
            /**
             *
             * Determines if the row height of the Range object equals the standard height of the sheet.
            Returns True if the row height of the Range object equals the standard height of the sheet.
            Returns Null if the range contains more than one row and the rows aren't all the same height.
            Returns False otherwise.
             *
             * [Api set: ExcelApi 1.7]
             */
            useStandardHeight?: boolean;
            /**
             *
             * Indicates whether the columnwidth of the Range object equals the standard width of the sheet.
            Returns True if the column width of the Range object equals the standard width of the sheet.
            Returns Null if the range contains more than one column and the columns aren't all the same height.
            Returns False otherwise.
             *
             * [Api set: ExcelApi 1.7]
             */
            useStandardWidth?: boolean;
            /**
             *
             * Represents the vertical alignment for the specified object. See Excel.VerticalAlignment for details.
             *
             * [Api set: ExcelApi 1.1]
             */
            verticalAlignment?: Excel.VerticalAlignment | "Top" | "Center" | "Bottom" | "Justify" | "Distributed";
            /**
             *
             * Indicates if Excel wraps the text in the object. A null value indicates that the entire range doesn't have uniform wrap setting
             *
             * [Api set: ExcelApi 1.1]
             */
            wrapText?: boolean;
        }
        /** An interface describing the data returned by calling "formatProtection.toJSON()". */
        export interface FormatProtectionData {
            /**
             *
             * Indicates if Excel hides the formula for the cells in the range. A null value indicates that the entire range doesn't have uniform formula hidden setting.
             *
             * [Api set: ExcelApi 1.2]
             */
            formulaHidden?: boolean;
            /**
             *
             * Indicates if Excel locks the cells in the object. A null value indicates that the entire range doesn't have uniform lock setting.
             *
             * [Api set: ExcelApi 1.2]
             */
            locked?: boolean;
        }
        /** An interface describing the data returned by calling "rangeFill.toJSON()". */
        export interface RangeFillData {
            /**
             *
             * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange")
             *
             * [Api set: ExcelApi 1.1]
             */
            color?: string;
        }
        /** An interface describing the data returned by calling "rangeBorder.toJSON()". */
        export interface RangeBorderData {
            /**
             *
             * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
             *
             * [Api set: ExcelApi 1.1]
             */
            color?: string;
            /**
             *
             * Constant value that indicates the specific side of the border. See Excel.BorderIndex for details. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            sideIndex?: Excel.BorderIndex | "EdgeTop" | "EdgeBottom" | "EdgeLeft" | "EdgeRight" | "InsideVertical" | "InsideHorizontal" | "DiagonalDown" | "DiagonalUp";
            /**
             *
             * One of the constants of line style specifying the line style for the border. See Excel.BorderLineStyle for details.
             *
             * [Api set: ExcelApi 1.1]
             */
            style?: Excel.BorderLineStyle | "None" | "Continuous" | "Dash" | "DashDot" | "DashDotDot" | "Dot" | "Double" | "SlantDashDot";
            /**
             *
             * Specifies the weight of the border around a range. See Excel.BorderWeight for details.
             *
             * [Api set: ExcelApi 1.1]
             */
            weight?: Excel.BorderWeight | "Hairline" | "Thin" | "Medium" | "Thick";
        }
        /** An interface describing the data returned by calling "rangeBorderCollection.toJSON()". */
        export interface RangeBorderCollectionData {
            items?: Excel.Interfaces.RangeBorderData[];
        }
        /** An interface describing the data returned by calling "rangeFont.toJSON()". */
        export interface RangeFontData {
            /**
             *
             * Represents the bold status of font.
             *
             * [Api set: ExcelApi 1.1]
             */
            bold?: boolean;
            /**
             *
             * HTML color code representation of the text color. E.g. #FF0000 represents Red.
             *
             * [Api set: ExcelApi 1.1]
             */
            color?: string;
            /**
             *
             * Represents the italic status of the font.
             *
             * [Api set: ExcelApi 1.1]
             */
            italic?: boolean;
            /**
             *
             * Font name (e.g. "Calibri")
             *
             * [Api set: ExcelApi 1.1]
             */
            name?: string;
            /**
             *
             * Font size.
             *
             * [Api set: ExcelApi 1.1]
             */
            size?: number;
            /**
             *
             * Type of underline applied to the font. See Excel.RangeUnderlineStyle for details.
             *
             * [Api set: ExcelApi 1.1]
             */
            underline?: Excel.RangeUnderlineStyle | "None" | "Single" | "Double" | "SingleAccountant" | "DoubleAccountant";
        }
        /** An interface describing the data returned by calling "chartCollection.toJSON()". */
        export interface ChartCollectionData {
            items?: Excel.Interfaces.ChartData[];
        }
        /** An interface describing the data returned by calling "chart.toJSON()". */
        export interface ChartData {
            /**
            *
            * Represents chart axes.
            *
            * [Api set: ExcelApi 1.1]
            */
            axes?: Excel.Interfaces.ChartAxesData;
            /**
            *
            * Represents the datalabels on the chart.
            *
            * [Api set: ExcelApi 1.1]
            */
            dataLabels?: Excel.Interfaces.ChartDataLabelsData;
            /**
            *
            * Encapsulates the format properties for the chart area. Read-only.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartAreaFormatData;
            /**
            *
            * Represents the legend for the chart.
            *
            * [Api set: ExcelApi 1.1]
            */
            legend?: Excel.Interfaces.ChartLegendData;
            /**
            *
            * Represents either a single series or collection of series in the chart.
            *
            * [Api set: ExcelApi 1.1]
            */
            series?: Excel.Interfaces.ChartSeriesData[];
            /**
            *
            * Represents the title of the specified chart, including the text, visibility, position and formating of the title.
            *
            * [Api set: ExcelApi 1.1]
            */
            title?: Excel.Interfaces.ChartTitleData;
            /**
            *
            * The worksheet containing the current chart.
            *
            * [Api set: ExcelApi 1.2]
            */
            worksheet?: Excel.Interfaces.WorksheetData;
            /**
             *
             * Represents the type of the chart. See Excel.ChartType for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            chartType?: Excel.ChartType | "Invalid" | "ColumnClustered" | "ColumnStacked" | "ColumnStacked100" | "3DColumnClustered" | "3DColumnStacked" | "3DColumnStacked100" | "BarClustered" | "BarStacked" | "BarStacked100" | "3DBarClustered" | "3DBarStacked" | "3DBarStacked100" | "LineStacked" | "LineStacked100" | "LineMarkers" | "LineMarkersStacked" | "LineMarkersStacked100" | "PieOfPie" | "PieExploded" | "3DPieExploded" | "BarOfPie" | "XYScatterSmooth" | "XYScatterSmoothNoMarkers" | "XYScatterLines" | "XYScatterLinesNoMarkers" | "AreaStacked" | "AreaStacked100" | "3DAreaStacked" | "3DAreaStacked100" | "DoughnutExploded" | "RadarMarkers" | "RadarFilled" | "Surface" | "SurfaceWireframe" | "SurfaceTopView" | "SurfaceTopViewWireframe" | "Bubble" | "Bubble3DEffect" | "StockHLC" | "StockOHLC" | "StockVHLC" | "StockVOHLC" | "CylinderColClustered" | "CylinderColStacked" | "CylinderColStacked100" | "CylinderBarClustered" | "CylinderBarStacked" | "CylinderBarStacked100" | "CylinderCol" | "ConeColClustered" | "ConeColStacked" | "ConeColStacked100" | "ConeBarClustered" | "ConeBarStacked" | "ConeBarStacked100" | "ConeCol" | "PyramidColClustered" | "PyramidColStacked" | "PyramidColStacked100" | "PyramidBarClustered" | "PyramidBarStacked" | "PyramidBarStacked100" | "PyramidCol" | "3DColumn" | "Line" | "3DLine" | "3DPie" | "Pie" | "XYScatter" | "3DArea" | "Area" | "Doughnut" | "Radar";
            /**
             *
             * Represents the height, in points, of the chart object.
             *
             * [Api set: ExcelApi 1.1]
             */
            height?: number;
            /**
             *
             * The unique id of chart. Read-only.
             *
             * [Api set: ExcelApi 1.7]
             */
            id?: string;
            /**
             *
             * The distance, in points, from the left side of the chart to the worksheet origin.
             *
             * [Api set: ExcelApi 1.1]
             */
            left?: number;
            /**
             *
             * Represents the name of a chart object.
             *
             * [Api set: ExcelApi 1.1]
             */
            name?: string;
            /**
             *
             * Represents whether to display all field buttons on a PivotChart.
             *
             * [Api set: ExcelApi 1.7]
             */
            showAllFieldButtons?: boolean;
            /**
             *
             * Represents the distance, in points, from the top edge of the object to the top of row 1 (on a worksheet) or the top of the chart area (on a chart).
             *
             * [Api set: ExcelApi 1.1]
             */
            top?: number;
            /**
             *
             * Represents the width, in points, of the chart object.
             *
             * [Api set: ExcelApi 1.1]
             */
            width?: number;
        }
        /** An interface describing the data returned by calling "chartAreaFormat.toJSON()". */
        export interface ChartAreaFormatData {
            /**
            *
            * Represents the border format of chart area, which includes color, linestyle and weight.
            *
            * [Api set: ExcelApi 1.7]
            */
            border?: Excel.Interfaces.ChartBorderData;
            /**
            *
            * Represents the font attributes (font name, font size, color, etc.) for the current object.
            *
            * [Api set: ExcelApi 1.1]
            */
            font?: Excel.Interfaces.ChartFontData;
        }
        /** An interface describing the data returned by calling "chartSeriesCollection.toJSON()". */
        export interface ChartSeriesCollectionData {
            items?: Excel.Interfaces.ChartSeriesData[];
        }
        /** An interface describing the data returned by calling "chartSeries.toJSON()". */
        export interface ChartSeriesData {
            /**
            *
            * Represents the formatting of a chart series, which includes fill and line formatting.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartSeriesFormatData;
            /**
            *
            * Represents a collection of all points in the series.
            *
            * [Api set: ExcelApi 1.1]
            */
            points?: Excel.Interfaces.ChartPointData[];
            /**
            *
            * Represents a collection of trendlines in the series.
            *
            * [Api set: ExcelApi 1.7]
            */
            trendlines?: Excel.Interfaces.ChartTrendlineData[];
            /**
             *
             * Represents the chart type of a series. See Excel.ChartType for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            chartType?: Excel.ChartType | "Invalid" | "ColumnClustered" | "ColumnStacked" | "ColumnStacked100" | "3DColumnClustered" | "3DColumnStacked" | "3DColumnStacked100" | "BarClustered" | "BarStacked" | "BarStacked100" | "3DBarClustered" | "3DBarStacked" | "3DBarStacked100" | "LineStacked" | "LineStacked100" | "LineMarkers" | "LineMarkersStacked" | "LineMarkersStacked100" | "PieOfPie" | "PieExploded" | "3DPieExploded" | "BarOfPie" | "XYScatterSmooth" | "XYScatterSmoothNoMarkers" | "XYScatterLines" | "XYScatterLinesNoMarkers" | "AreaStacked" | "AreaStacked100" | "3DAreaStacked" | "3DAreaStacked100" | "DoughnutExploded" | "RadarMarkers" | "RadarFilled" | "Surface" | "SurfaceWireframe" | "SurfaceTopView" | "SurfaceTopViewWireframe" | "Bubble" | "Bubble3DEffect" | "StockHLC" | "StockOHLC" | "StockVHLC" | "StockVOHLC" | "CylinderColClustered" | "CylinderColStacked" | "CylinderColStacked100" | "CylinderBarClustered" | "CylinderBarStacked" | "CylinderBarStacked100" | "CylinderCol" | "ConeColClustered" | "ConeColStacked" | "ConeColStacked100" | "ConeBarClustered" | "ConeBarStacked" | "ConeBarStacked100" | "ConeCol" | "PyramidColClustered" | "PyramidColStacked" | "PyramidColStacked100" | "PyramidBarClustered" | "PyramidBarStacked" | "PyramidBarStacked100" | "PyramidCol" | "3DColumn" | "Line" | "3DLine" | "3DPie" | "Pie" | "XYScatter" | "3DArea" | "Area" | "Doughnut" | "Radar";
            /**
             *
             * Represents the doughnut hole size of a chart series.  Only valid on doughnut and doughnutExploded charts.
            Throws an invalid argument exception on invalid charts.
             *
             * [Api set: ExcelApi 1.7]
             */
            doughnutHoleSize?: number;
            /**
             *
             * Boolean value representing if the series is filtered or not. Not applicable for surface charts.
             *
             * [Api set: ExcelApi 1.7]
             */
            filtered?: boolean;
            /**
             *
             * Represents the gap width of a chart series.  Only valid on bar and column charts, as well as
            specific classes of line and pie charts.  Throws an invalid argument exception on invalid charts.
             *
             * [Api set: ExcelApi 1.7]
             */
            gapWidth?: number;
            /**
             *
             * Boolean value representing if the series has data labels or not.
             *
             * [Api set: ExcelApi 1.7]
             */
            hasDataLabels?: boolean;
            /**
             *
             * Represents markers background color of a chart series.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerBackgroundColor?: string;
            /**
             *
             * Represents markers foreground color of a chart series.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerForegroundColor?: string;
            /**
             *
             * Represents marker size of a chart series.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerSize?: number;
            /**
             *
             * Represents marker style of a chart series. See Excel.ChartMarkerStyle for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerStyle?: Excel.ChartMarkerStyle | "Invalid" | "Automatic" | "None" | "Square" | "Diamond" | "Triangle" | "X" | "Star" | "Dot" | "Dash" | "Circle" | "Plus" | "Picture";
            /**
             *
             * Represents the name of a series in a chart.
             *
             * [Api set: ExcelApi 1.1]
             */
            name?: string;
            /**
             *
             * Represents the plot order of a chart series within the chart group.
             *
             * [Api set: ExcelApi 1.7]
             */
            plotOrder?: number;
            /**
             *
             * Boolean value representing if the series has a shadow or not.
             *
             * [Api set: ExcelApi 1.7]
             */
            showShadow?: boolean;
            /**
             *
             * Boolean value representing if the series is smooth or not. Only applicable for line and scatter charts.
             *
             * [Api set: ExcelApi 1.7]
             */
            smooth?: boolean;
        }
        /** An interface describing the data returned by calling "chartSeriesFormat.toJSON()". */
        export interface ChartSeriesFormatData {
            /**
            *
            * Represents line formatting.
            *
            * [Api set: ExcelApi 1.1]
            */
            line?: Excel.Interfaces.ChartLineFormatData;
        }
        /** An interface describing the data returned by calling "chartPointsCollection.toJSON()". */
        export interface ChartPointsCollectionData {
            items?: Excel.Interfaces.ChartPointData[];
        }
        /** An interface describing the data returned by calling "chartPoint.toJSON()". */
        export interface ChartPointData {
            /**
            *
            * Returns the data label of a chart point.
            *
            * [Api set: ExcelApi 1.7]
            */
            dataLabel?: Excel.Interfaces.ChartDataLabelData;
            /**
            *
            * Encapsulates the format properties chart point. Read-only.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartPointFormatData;
            /**
             *
             * Represents whether a data point has datalabel. Not applicable for surface charts.
             *
             * [Api set: ExcelApi 1.7]
             */
            hasDataLabel?: boolean;
            /**
             *
             * HTML color code representation of the marker background color of data point. E.g. #FF0000 represents Red.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerBackgroundColor?: string;
            /**
             *
             * HTML color code representation of the marker foreground color of data point. E.g. #FF0000 represents Red.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerForegroundColor?: string;
            /**
             *
             * Represents marker size of data point.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerSize?: number;
            /**
             *
             * Represents marker style of a chart data point. See Excel.ChartMarkerStyle for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerStyle?: Excel.ChartMarkerStyle | "Invalid" | "Automatic" | "None" | "Square" | "Diamond" | "Triangle" | "X" | "Star" | "Dot" | "Dash" | "Circle" | "Plus" | "Picture";
            /**
             *
             * Returns the value of a chart point. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            value?: any;
        }
        /** An interface describing the data returned by calling "chartPointFormat.toJSON()". */
        export interface ChartPointFormatData {
            /**
            *
            * Represents the border format of a chart data point, which includes color, style and weight information.
            *
            * [Api set: ExcelApi 1.7]
            */
            border?: Excel.Interfaces.ChartBorderData;
        }
        /** An interface describing the data returned by calling "chartAxes.toJSON()". */
        export interface ChartAxesData {
            /**
            *
            * Represents the category axis in a chart.
            *
            * [Api set: ExcelApi 1.1]
            */
            categoryAxis?: Excel.Interfaces.ChartAxisData;
            /**
            *
            * Represents the series axis of a 3-dimensional chart.
            *
            * [Api set: ExcelApi 1.1]
            */
            seriesAxis?: Excel.Interfaces.ChartAxisData;
            /**
            *
            * Represents the value axis in an axis.
            *
            * [Api set: ExcelApi 1.1]
            */
            valueAxis?: Excel.Interfaces.ChartAxisData;
        }
        /** An interface describing the data returned by calling "chartAxis.toJSON()". */
        export interface ChartAxisData {
            /**
            *
            * Represents the formatting of a chart object, which includes line and font formatting.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartAxisFormatData;
            /**
            *
            * Returns a gridlines object that represents the major gridlines for the specified axis.
            *
            * [Api set: ExcelApi 1.1]
            */
            majorGridlines?: Excel.Interfaces.ChartGridlinesData;
            /**
            *
            * Returns a Gridlines object that represents the minor gridlines for the specified axis.
            *
            * [Api set: ExcelApi 1.1]
            */
            minorGridlines?: Excel.Interfaces.ChartGridlinesData;
            /**
            *
            * Represents the axis title.
            *
            * [Api set: ExcelApi 1.1]
            */
            title?: Excel.Interfaces.ChartAxisTitleData;
            /**
             *
             * Represents the group for the specified axis. See Excel.ChartAxisGroup for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            axisGroup?: Excel.ChartAxisGroup | "Primary" | "Secondary";
            /**
             *
             * Returns or sets the base unit for the specified category axis.
             *
             * [Api set: ExcelApi 1.7]
             */
            baseTimeUnit?: Excel.ChartAxisTimeUnit | "Days" | "Months" | "Years";
            /**
             *
             * Returns or sets the category axis type.
             *
             * [Api set: ExcelApi 1.7]
             */
            categoryType?: Excel.ChartAxisCategoryType | "Automatic" | "TextAxis" | "DateAxis";
            /**
             * [DEPRECATED; kept for back-compat with existing first-party solutions]. Please use `Position` instead.
             * Represents the specified axis where the other axis crosses. See Excel.ChartAxisPosition for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            crosses?: Excel.ChartAxisPosition | "Automatic" | "Maximum" | "Minimum" | "Custom";
            /**
             * [DEPRECATED; kept for back-compat with existing first-party solutions]. Please use `PositionAt` instead.
             * Represents the specified axis where the other axis crosses at. Read Only. Set to this property should use SetCrossesAt(double) method.
             *
             * [Api set: ExcelApi 1.7]
             */
            crossesAt?: number;
            /**
             *
             * Represents the custom axis display unit value. Read Only. To set this property, please use the SetCustomDisplayUnit(double) method.
             *
             * [Api set: ExcelApi 1.7]
             */
            customDisplayUnit?: number;
            /**
             *
             * Represents the axis display unit. See Excel.ChartAxisDisplayUnit for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            displayUnit?: Excel.ChartAxisDisplayUnit | "None" | "Hundreds" | "Thousands" | "TenThousands" | "HundredThousands" | "Millions" | "TenMillions" | "HundredMillions" | "Billions" | "Trillions" | "Custom";
            /**
             *
             * Represents the height, in points, of the chart axis. Null if the axis's not visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            height?: number;
            /**
             *
             * Represents the distance, in points, from the left edge of the axis to the left of chart area. Null if the axis's not visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            left?: number;
            /**
             *
             * Represents the base of the logarithm when using logarithmic scales.
             *
             * [Api set: ExcelApi 1.7]
             */
            logBase?: number;
            /**
             *
             * Represents the type of major tick mark for the specified axis. See Excel.ChartAxisTickMark for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            majorTickMark?: Excel.ChartAxisTickMark | "None" | "Cross" | "Inside" | "Outside";
            /**
             *
             * Returns or sets the major unit scale value for the category axis when the CategoryType property is set to TimeScale.
             *
             * [Api set: ExcelApi 1.7]
             */
            majorTimeUnitScale?: Excel.ChartAxisTimeUnit | "Days" | "Months" | "Years";
            /**
             *
             * Represents the interval between two major tick marks. Can be set to a numeric value or an empty string.  The returned value is always a number.
             *
             * [Api set: ExcelApi 1.1]
             */
            majorUnit?: any;
            /**
             *
             * Represents the maximum value on the value axis.  Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number.
             *
             * [Api set: ExcelApi 1.1]
             */
            maximum?: any;
            /**
             *
             * Represents the minimum value on the value axis. Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number.
             *
             * [Api set: ExcelApi 1.1]
             */
            minimum?: any;
            /**
             *
             * Represents the type of minor tick mark for the specified axis. See Excel.ChartAxisTickMark for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            minorTickMark?: Excel.ChartAxisTickMark | "None" | "Cross" | "Inside" | "Outside";
            /**
             *
             * Returns or sets the minor unit scale value for the category axis when the CategoryType property is set to TimeScale.
             *
             * [Api set: ExcelApi 1.7]
             */
            minorTimeUnitScale?: Excel.ChartAxisTimeUnit | "Days" | "Months" | "Years";
            /**
             *
             * Represents the interval between two minor tick marks. "Can be set to a numeric value or an empty string (for automatic axis values). The returned value is always a number.
             *
             * [Api set: ExcelApi 1.1]
             */
            minorUnit?: any;
            /**
             *
             * Represents whether Microsoft Excel plots data points from last to first.
             *
             * [Api set: ExcelApi 1.7]
             */
            reversePlotOrder?: boolean;
            /**
             *
             * Represents the value axis scale type. See Excel.ChartAxisScaleType for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            scaleType?: Excel.ChartAxisScaleType | "Linear" | "Logarithmic";
            /**
             *
             * Represents whether the axis display unit label is visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            showDisplayUnitLabel?: boolean;
            /**
             *
             * Represents the position of tick-mark labels on the specified axis. See Excel.ChartAxisTickLabelPosition for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            tickLabelPosition?: Excel.ChartAxisTickLabelPosition | "NextToAxis" | "High" | "Low" | "None";
            /**
             *
             * Represents the number of categories or series between tick-mark labels. Can be a value from 1 through 31999 or an empty string for automatic setting. The returned value is always a number.
             *
             * [Api set: ExcelApi 1.7]
             */
            tickLabelSpacing?: any;
            /**
             *
             * Represents the number of categories or series between tick marks.
             *
             * [Api set: ExcelApi 1.7]
             */
            tickMarkSpacing?: number;
            /**
             *
             * Represents the distance, in points, from the top edge of the axis to the top of chart area. Null if the axis's not visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            top?: number;
            /**
             *
             * Represents the axis type. See Excel.ChartAxisType for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            type?: Excel.ChartAxisType | "Invalid" | "Category" | "Value" | "Series";
            /**
             *
             * A boolean value represents the visibility of the axis.
             *
             * [Api set: ExcelApi 1.7]
             */
            visible?: boolean;
            /**
             *
             * Represents the width, in points, of the chart axis. Null if the axis's not visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            width?: number;
        }
        /** An interface describing the data returned by calling "chartAxisFormat.toJSON()". */
        export interface ChartAxisFormatData {
            /**
            *
            * Represents the font attributes (font name, font size, color, etc.) for a chart axis element.
            *
            * [Api set: ExcelApi 1.1]
            */
            font?: Excel.Interfaces.ChartFontData;
            /**
            *
            * Represents chart line formatting.
            *
            * [Api set: ExcelApi 1.1]
            */
            line?: Excel.Interfaces.ChartLineFormatData;
        }
        /** An interface describing the data returned by calling "chartAxisTitle.toJSON()". */
        export interface ChartAxisTitleData {
            /**
            *
            * Represents the formatting of chart axis title.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartAxisTitleFormatData;
            /**
             *
             * Represents the axis title.
             *
             * [Api set: ExcelApi 1.1]
             */
            text?: string;
            /**
             *
             * A boolean that specifies the visibility of an axis title.
             *
             * [Api set: ExcelApi 1.1]
             */
            visible?: boolean;
        }
        /** An interface describing the data returned by calling "chartAxisTitleFormat.toJSON()". */
        export interface ChartAxisTitleFormatData {
            /**
            *
            * Represents the font attributes, such as font name, font size, color, etc. of chart axis title object.
            *
            * [Api set: ExcelApi 1.1]
            */
            font?: Excel.Interfaces.ChartFontData;
        }
        /** An interface describing the data returned by calling "chartDataLabels.toJSON()". */
        export interface ChartDataLabelsData {
            /**
            *
            * Represents the format of chart data labels, which includes fill and font formatting.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartDataLabelFormatData;
            /**
             *
             * DataLabelPosition value that represents the position of the data label. See Excel.ChartDataLabelPosition for details.
             *
             * [Api set: ExcelApi 1.1]
             */
            position?: Excel.ChartDataLabelPosition | "Invalid" | "None" | "Center" | "InsideEnd" | "InsideBase" | "OutsideEnd" | "Left" | "Right" | "Top" | "Bottom" | "BestFit" | "Callout";
            /**
             *
             * String representing the separator used for the data labels on a chart.
             *
             * [Api set: ExcelApi 1.1]
             */
            separator?: string;
            /**
             *
             * Boolean value representing if the data label bubble size is visible or not.
             *
             * [Api set: ExcelApi 1.1]
             */
            showBubbleSize?: boolean;
            /**
             *
             * Boolean value representing if the data label category name is visible or not.
             *
             * [Api set: ExcelApi 1.1]
             */
            showCategoryName?: boolean;
            /**
             *
             * Boolean value representing if the data label legend key is visible or not.
             *
             * [Api set: ExcelApi 1.1]
             */
            showLegendKey?: boolean;
            /**
             *
             * Boolean value representing if the data label percentage is visible or not.
             *
             * [Api set: ExcelApi 1.1]
             */
            showPercentage?: boolean;
            /**
             *
             * Boolean value representing if the data label series name is visible or not.
             *
             * [Api set: ExcelApi 1.1]
             */
            showSeriesName?: boolean;
            /**
             *
             * Boolean value representing if the data label value is visible or not.
             *
             * [Api set: ExcelApi 1.1]
             */
            showValue?: boolean;
        }
        /** An interface describing the data returned by calling "chartDataLabel.toJSON()". */
        export interface ChartDataLabelData {
            /**
             *
             * DataLabelPosition value that represents the position of the data label. See Excel.ChartDataLabelPosition for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            position?: Excel.ChartDataLabelPosition | "Invalid" | "None" | "Center" | "InsideEnd" | "InsideBase" | "OutsideEnd" | "Left" | "Right" | "Top" | "Bottom" | "BestFit" | "Callout";
            /**
             *
             * String representing the separator used for the data label on a chart.
             *
             * [Api set: ExcelApi 1.7]
             */
            separator?: string;
            /**
             *
             * Boolean value representing if the data label bubble size is visible or not.
             *
             * [Api set: ExcelApi 1.7]
             */
            showBubbleSize?: boolean;
            /**
             *
             * Boolean value representing if the data label category name is visible or not.
             *
             * [Api set: ExcelApi 1.7]
             */
            showCategoryName?: boolean;
            /**
             *
             * Boolean value representing if the data label legend key is visible or not.
             *
             * [Api set: ExcelApi 1.7]
             */
            showLegendKey?: boolean;
            /**
             *
             * Boolean value representing if the data label percentage is visible or not.
             *
             * [Api set: ExcelApi 1.7]
             */
            showPercentage?: boolean;
            /**
             *
             * Boolean value representing if the data label series name is visible or not.
             *
             * [Api set: ExcelApi 1.7]
             */
            showSeriesName?: boolean;
            /**
             *
             * Boolean value representing if the data label value is visible or not.
             *
             * [Api set: ExcelApi 1.7]
             */
            showValue?: boolean;
        }
        /** An interface describing the data returned by calling "chartDataLabelFormat.toJSON()". */
        export interface ChartDataLabelFormatData {
            /**
            *
            * Represents the font attributes (font name, font size, color, etc.) for a chart data label.
            *
            * [Api set: ExcelApi 1.1]
            */
            font?: Excel.Interfaces.ChartFontData;
        }
        /** An interface describing the data returned by calling "chartGridlines.toJSON()". */
        export interface ChartGridlinesData {
            /**
            *
            * Represents the formatting of chart gridlines.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartGridlinesFormatData;
            /**
             *
             * Boolean value representing if the axis gridlines are visible or not.
             *
             * [Api set: ExcelApi 1.1]
             */
            visible?: boolean;
        }
        /** An interface describing the data returned by calling "chartGridlinesFormat.toJSON()". */
        export interface ChartGridlinesFormatData {
            /**
            *
            * Represents chart line formatting.
            *
            * [Api set: ExcelApi 1.1]
            */
            line?: Excel.Interfaces.ChartLineFormatData;
        }
        /** An interface describing the data returned by calling "chartLegend.toJSON()". */
        export interface ChartLegendData {
            /**
            *
            * Represents the formatting of a chart legend, which includes fill and font formatting.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartLegendFormatData;
            /**
            *
            * Represents a collection of legendEntries in the legend.
            *
            * [Api set: ExcelApi 1.7]
            */
            legendEntries?: Excel.Interfaces.ChartLegendEntryData[];
            /**
             *
             * Represents the height, in points, of the legend on the chart. Null if legend is not visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            height?: number;
            /**
             *
             * Represents the left, in points, of a chart legend. Null if legend is not visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            left?: number;
            /**
             *
             * Boolean value for whether the chart legend should overlap with the main body of the chart.
             *
             * [Api set: ExcelApi 1.1]
             */
            overlay?: boolean;
            /**
             *
             * Represents the position of the legend on the chart. See Excel.ChartLegendPosition for details.
             *
             * [Api set: ExcelApi 1.1]
             */
            position?: Excel.ChartLegendPosition | "Invalid" | "Top" | "Bottom" | "Left" | "Right" | "Corner" | "Custom";
            /**
             *
             * Represents if the legend has a shadow on the chart.
             *
             * [Api set: ExcelApi 1.7]
             */
            showShadow?: boolean;
            /**
             *
             * Represents the top of a chart legend.
             *
             * [Api set: ExcelApi 1.7]
             */
            top?: number;
            /**
             *
             * A boolean value the represents the visibility of a ChartLegend object.
             *
             * [Api set: ExcelApi 1.1]
             */
            visible?: boolean;
            /**
             *
             * Represents the width, in points, of the legend on the chart. Null if legend is not visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            width?: number;
        }
        /** An interface describing the data returned by calling "chartLegendEntry.toJSON()". */
        export interface ChartLegendEntryData {
            /**
             *
             * Represents the visible of a chart legend entry.
             *
             * [Api set: ExcelApi 1.7]
             */
            visible?: boolean;
        }
        /** An interface describing the data returned by calling "chartLegendEntryCollection.toJSON()". */
        export interface ChartLegendEntryCollectionData {
            items?: Excel.Interfaces.ChartLegendEntryData[];
        }
        /** An interface describing the data returned by calling "chartLegendFormat.toJSON()". */
        export interface ChartLegendFormatData {
            /**
            *
            * Represents the font attributes such as font name, font size, color, etc. of a chart legend.
            *
            * [Api set: ExcelApi 1.1]
            */
            font?: Excel.Interfaces.ChartFontData;
        }
        /** An interface describing the data returned by calling "chartTitle.toJSON()". */
        export interface ChartTitleData {
            /**
            *
            * Represents the formatting of a chart title, which includes fill and font formatting.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartTitleFormatData;
            /**
             *
             * Returns the height, in points, of the chart title. Read-only. Null if chart title is not visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            height?: number;
            /**
             *
             * Represents the horizontal alignment for chart title.
             *
             * [Api set: ExcelApi 1.7]
             */
            horizontalAlignment?: Excel.ChartTextHorizontalAlignment | "Center" | "Left" | "Right" | "Justify" | "Distributed";
            /**
             *
             * Represents the distance, in points, from the left edge of chart title to the left edge of chart area. Null if chart title's not visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            left?: number;
            /**
             *
             * Boolean value representing if the chart title will overlay the chart or not.
             *
             * [Api set: ExcelApi 1.1]
             */
            overlay?: boolean;
            /**
             *
             * Represents the position of chart title. See Excel.ChartTitlePosition for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            position?: Excel.ChartTitlePosition | "Automatic" | "Top" | "Bottom" | "Left" | "Right";
            /**
             *
             * Represents a boolean value that determines if the chart title has a shadow.
             *
             * [Api set: ExcelApi 1.7]
             */
            showShadow?: boolean;
            /**
             *
             * Represents the title text of a chart.
             *
             * [Api set: ExcelApi 1.1]
             */
            text?: string;
            /**
             *
             * Represents the text orientation of chart title. The value should be an integer either from -90 to 90, or 180 for vertically-oriented text.
             *
             * [Api set: ExcelApi 1.7]
             */
            textOrientation?: number;
            /**
             *
             * Represents the distance, in points, from the top edge of chart title to the top of chart area. Null if chart title's not visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            top?: number;
            /**
             *
             * Represents the vertical alignment of chart title. See Excel.ChartTextVerticalAlignment for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            verticalAlignment?: Excel.ChartTextVerticalAlignment | "Center" | "Bottom" | "Top" | "Justify" | "Distributed";
            /**
             *
             * A boolean value the represents the visibility of a chart title object.
             *
             * [Api set: ExcelApi 1.1]
             */
            visible?: boolean;
            /**
             *
             * Returns the width, in points, of the chart title. Read-only. Null if chart title is not visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            width?: number;
        }
        /** An interface describing the data returned by calling "chartFormatString.toJSON()". */
        export interface ChartFormatStringData {
            /**
            *
            * Represents the font attributes, such as font name, font size, color, etc. of chart characters object.
            *
            * [Api set: ExcelApi 1.7]
            */
            font?: Excel.Interfaces.ChartFontData;
        }
        /** An interface describing the data returned by calling "chartTitleFormat.toJSON()". */
        export interface ChartTitleFormatData {
            /**
            *
            * Represents the border format of chart title, which includes color, linestyle and weight.
            *
            * [Api set: ExcelApi 1.7]
            */
            border?: Excel.Interfaces.ChartBorderData;
            /**
            *
            * Represents the font attributes (font name, font size, color, etc.) for an object.
            *
            * [Api set: ExcelApi 1.1]
            */
            font?: Excel.Interfaces.ChartFontData;
        }
        /** An interface describing the data returned by calling "chartBorder.toJSON()". */
        export interface ChartBorderData {
            /**
             *
             * HTML color code representing the color of borders in the chart.
             *
             * [Api set: ExcelApi 1.7]
             */
            color?: string;
            /**
             *
             * Represents the line style of the border. See Excel.ChartLineStyle for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            lineStyle?: Excel.ChartLineStyle | "None" | "Continuous" | "Dash" | "DashDot" | "DashDotDot" | "Dot" | "Grey25" | "Grey50" | "Grey75" | "Automatic" | "RoundDot";
            /**
             *
             * Represents weight of the border, in points.
             *
             * [Api set: ExcelApi 1.7]
             */
            weight?: number;
        }
        /** An interface describing the data returned by calling "chartLineFormat.toJSON()". */
        export interface ChartLineFormatData {
            /**
             *
             * HTML color code representing the color of lines in the chart.
             *
             * [Api set: ExcelApi 1.1]
             */
            color?: string;
            /**
             *
             * Represents the line style. See Excel.ChartLineStyle for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            lineStyle?: Excel.ChartLineStyle | "None" | "Continuous" | "Dash" | "DashDot" | "DashDotDot" | "Dot" | "Grey25" | "Grey50" | "Grey75" | "Automatic" | "RoundDot";
            /**
             *
             * Represents weight of the line, in points.
             *
             * [Api set: ExcelApi 1.7]
             */
            weight?: number;
        }
        /** An interface describing the data returned by calling "chartFont.toJSON()". */
        export interface ChartFontData {
            /**
             *
             * Represents the bold status of font.
             *
             * [Api set: ExcelApi 1.1]
             */
            bold?: boolean;
            /**
             *
             * HTML color code representation of the text color. E.g. #FF0000 represents Red.
             *
             * [Api set: ExcelApi 1.1]
             */
            color?: string;
            /**
             *
             * Represents the italic status of the font.
             *
             * [Api set: ExcelApi 1.1]
             */
            italic?: boolean;
            /**
             *
             * Font name (e.g. "Calibri")
             *
             * [Api set: ExcelApi 1.1]
             */
            name?: string;
            /**
             *
             * Size of the font (e.g. 11)
             *
             * [Api set: ExcelApi 1.1]
             */
            size?: number;
            /**
             *
             * Type of underline applied to the font. See Excel.ChartUnderlineStyle for details.
             *
             * [Api set: ExcelApi 1.1]
             */
            underline?: Excel.ChartUnderlineStyle | "None" | "Single";
        }
        /** An interface describing the data returned by calling "chartTrendline.toJSON()". */
        export interface ChartTrendlineData {
            /**
            *
            * Represents the formatting of a chart trendline.
            *
            * [Api set: ExcelApi 1.7]
            */
            format?: Excel.Interfaces.ChartTrendlineFormatData;
            /**
             *
             * Represents the intercept value of the trendline. Can be set to a numeric value or an empty string (for automatic values). The returned value is always a number.
             *
             * [Api set: ExcelApi 1.7]
             */
            intercept?: any;
            /**
             *
             * Represents the period of a chart trendline. Only applicable for trendline with MovingAverage type.
             *
             * [Api set: ExcelApi 1.7]
             */
            movingAveragePeriod?: number;
            /**
             *
             * Represents the name of the trendline. Can be set to a string value, or can be set to null value represents automatic values. The returned value is always a string
             *
             * [Api set: ExcelApi 1.7]
             */
            name?: string;
            /**
             *
             * Represents the order of a chart trendline. Only applicable for trendline with Polynomial type.
             *
             * [Api set: ExcelApi 1.7]
             */
            polynomialOrder?: number;
            /**
             *
             * Represents the type of a chart trendline.
             *
             * [Api set: ExcelApi 1.7]
             */
            type?: Excel.ChartTrendlineType | "Linear" | "Exponential" | "Logarithmic" | "MovingAverage" | "Polynomial" | "Power";
        }
        /** An interface describing the data returned by calling "chartTrendlineCollection.toJSON()". */
        export interface ChartTrendlineCollectionData {
            items?: Excel.Interfaces.ChartTrendlineData[];
        }
        /** An interface describing the data returned by calling "chartTrendlineFormat.toJSON()". */
        export interface ChartTrendlineFormatData {
            /**
            *
            * Represents chart line formatting.
            *
            * [Api set: ExcelApi 1.7]
            */
            line?: Excel.Interfaces.ChartLineFormatData;
        }
        /** An interface describing the data returned by calling "tableSort.toJSON()". */
        export interface TableSortData {
            /**
             *
             * Represents the current conditions used to last sort the table.
             *
             * [Api set: ExcelApi 1.2]
             */
            fields?: Excel.SortField[];
            /**
             *
             * Represents whether the casing impacted the last sort of the table.
             *
             * [Api set: ExcelApi 1.2]
             */
            matchCase?: boolean;
            /**
             *
             * Represents Chinese character ordering method last used to sort the table.
             *
             * [Api set: ExcelApi 1.2]
             */
            method?: Excel.SortMethod | "PinYin" | "StrokeCount";
        }
        /** An interface describing the data returned by calling "filter.toJSON()". */
        export interface FilterData {
            /**
             *
             * The currently applied filter on the given column.
             *
             * [Api set: ExcelApi 1.2]
             */
            criteria?: Excel.FilterCriteria;
        }
        /** An interface describing the data returned by calling "customXmlPartScopedCollection.toJSON()". */
        export interface CustomXmlPartScopedCollectionData {
            items?: Excel.Interfaces.CustomXmlPartData[];
        }
        /** An interface describing the data returned by calling "customXmlPartCollection.toJSON()". */
        export interface CustomXmlPartCollectionData {
            items?: Excel.Interfaces.CustomXmlPartData[];
        }
        /** An interface describing the data returned by calling "customXmlPart.toJSON()". */
        export interface CustomXmlPartData {
            /**
             *
             * The custom XML part's ID. Read-only.
             *
             * [Api set: ExcelApi 1.5]
             */
            id?: string;
            /**
             *
             * The custom XML part's namespace URI. Read-only.
             *
             * [Api set: ExcelApi 1.5]
             */
            namespaceUri?: string;
        }
        /** An interface describing the data returned by calling "pivotTableCollection.toJSON()". */
        export interface PivotTableCollectionData {
            items?: Excel.Interfaces.PivotTableData[];
        }
        /** An interface describing the data returned by calling "pivotTable.toJSON()". */
        export interface PivotTableData {
            /**
            *
            * The worksheet containing the current PivotTable.
            *
            * [Api set: ExcelApi 1.3]
            */
            worksheet?: Excel.Interfaces.WorksheetData;
            /**
             *
             * Id of the PivotTable.
             *
             * [Api set: ExcelApi 1.5]
             */
            id?: string;
            /**
             *
             * Name of the PivotTable.
             *
             * [Api set: ExcelApi 1.3]
             */
            name?: string;
        }
        /** An interface describing the data returned by calling "documentProperties.toJSON()". */
        export interface DocumentPropertiesData {
            /**
            *
            * Gets the collection of custom properties of the workbook. Read only.
            *
            * [Api set: ExcelApi 1.7]
            */
            custom?: Excel.Interfaces.CustomPropertyData[];
            /**
             *
             * Gets or sets the author of the workbook.
             *
             * [Api set: ExcelApi 1.7]
             */
            author?: string;
            /**
             *
             * Gets or sets the category of the workbook.
             *
             * [Api set: ExcelApi 1.7]
             */
            category?: string;
            /**
             *
             * Gets or sets the comments of the workbook.
             *
             * [Api set: ExcelApi 1.7]
             */
            comments?: string;
            /**
             *
             * Gets or sets the company of the workbook.
             *
             * [Api set: ExcelApi 1.7]
             */
            company?: string;
            /**
             *
             * Gets the creation date of the workbook. Read only.
             *
             * [Api set: ExcelApi 1.7]
             */
            creationDate?: Date;
            /**
             *
             * Gets or sets the keywords of the workbook.
             *
             * [Api set: ExcelApi 1.7]
             */
            keywords?: string;
            /**
             *
             * Gets the last author of the workbook. Read only.
             *
             * [Api set: ExcelApi 1.7]
             */
            lastAuthor?: string;
            /**
             *
             * Gets or sets the manager of the workbook.
             *
             * [Api set: ExcelApi 1.7]
             */
            manager?: string;
            /**
             *
             * Gets the revision number of the workbook. Read only.
             *
             * [Api set: ExcelApi 1.7]
             */
            revisionNumber?: number;
            /**
             *
             * Gets or sets the subject of the workbook.
             *
             * [Api set: ExcelApi 1.7]
             */
            subject?: string;
            /**
             *
             * Gets or sets the title of the workbook.
             *
             * [Api set: ExcelApi 1.7]
             */
            title?: string;
        }
        /** An interface describing the data returned by calling "customProperty.toJSON()". */
        export interface CustomPropertyData {
            /**
             *
             * Gets the key of the custom property. Read only.
             *
             * [Api set: ExcelApi 1.7]
             */
            key?: string;
            /**
             *
             * Gets the value type of the custom property. Read only.
             *
             * [Api set: ExcelApi 1.7]
             */
            type?: Excel.DocumentPropertyType | "Number" | "Boolean" | "Date" | "String" | "Float";
            /**
             *
             * Gets or sets the value of the custom property.
             *
             * [Api set: ExcelApi 1.7]
             */
            value?: any;
        }
        /** An interface describing the data returned by calling "customPropertyCollection.toJSON()". */
        export interface CustomPropertyCollectionData {
            items?: Excel.Interfaces.CustomPropertyData[];
        }
        /** An interface describing the data returned by calling "conditionalFormatCollection.toJSON()". */
        export interface ConditionalFormatCollectionData {
            items?: Excel.Interfaces.ConditionalFormatData[];
        }
        /** An interface describing the data returned by calling "conditionalFormat.toJSON()". */
        export interface ConditionalFormatData {
            /**
            *
            * Returns the cell value conditional format properties if the current conditional format is a CellValue type.
            For example to format all cells between 5 and 10.
            *
            * [Api set: ExcelApi 1.6]
            */
            cellValue?: Excel.Interfaces.CellValueConditionalFormatData;
            /**
            *
            * Returns the cell value conditional format properties if the current conditional format is a CellValue type.
            For example to format all cells between 5 and 10.
            *
            * [Api set: ExcelApi 1.6]
            */
            cellValueOrNullObject?: Excel.Interfaces.CellValueConditionalFormatData;
            /**
            *
            * Returns the ColorScale conditional format properties if the current conditional format is an ColorScale type.
            *
            * [Api set: ExcelApi 1.6]
            */
            colorScale?: Excel.Interfaces.ColorScaleConditionalFormatData;
            /**
            *
            * Returns the ColorScale conditional format properties if the current conditional format is an ColorScale type.
            *
            * [Api set: ExcelApi 1.6]
            */
            colorScaleOrNullObject?: Excel.Interfaces.ColorScaleConditionalFormatData;
            /**
            *
            * Returns the custom conditional format properties if the current conditional format is a custom type.
            *
            * [Api set: ExcelApi 1.6]
            */
            custom?: Excel.Interfaces.CustomConditionalFormatData;
            /**
            *
            * Returns the custom conditional format properties if the current conditional format is a custom type.
            *
            * [Api set: ExcelApi 1.6]
            */
            customOrNullObject?: Excel.Interfaces.CustomConditionalFormatData;
            /**
            *
            * Returns the data bar properties if the current conditional format is a data bar.
            *
            * [Api set: ExcelApi 1.6]
            */
            dataBar?: Excel.Interfaces.DataBarConditionalFormatData;
            /**
            *
            * Returns the data bar properties if the current conditional format is a data bar.
            *
            * [Api set: ExcelApi 1.6]
            */
            dataBarOrNullObject?: Excel.Interfaces.DataBarConditionalFormatData;
            /**
            *
            * Returns the IconSet conditional format properties if the current conditional format is an IconSet type.
            *
            * [Api set: ExcelApi 1.6]
            */
            iconSet?: Excel.Interfaces.IconSetConditionalFormatData;
            /**
            *
            * Returns the IconSet conditional format properties if the current conditional format is an IconSet type.
            *
            * [Api set: ExcelApi 1.6]
            */
            iconSetOrNullObject?: Excel.Interfaces.IconSetConditionalFormatData;
            /**
            *
            * Returns the preset criteria conditional format such as above average/below average/unique values/contains blank/nonblank/error/noerror properties.
            *
            * [Api set: ExcelApi 1.6]
            */
            preset?: Excel.Interfaces.PresetCriteriaConditionalFormatData;
            /**
            *
            * Returns the preset criteria conditional format such as above average/below average/unique values/contains blank/nonblank/error/noerror properties.
            *
            * [Api set: ExcelApi 1.6]
            */
            presetOrNullObject?: Excel.Interfaces.PresetCriteriaConditionalFormatData;
            /**
            *
            * Returns the specific text conditional format properties if the current conditional format is a text type.
            For example to format cells matching the word "Text".
            *
            * [Api set: ExcelApi 1.6]
            */
            textComparison?: Excel.Interfaces.TextConditionalFormatData;
            /**
            *
            * Returns the specific text conditional format properties if the current conditional format is a text type.
            For example to format cells matching the word "Text".
            *
            * [Api set: ExcelApi 1.6]
            */
            textComparisonOrNullObject?: Excel.Interfaces.TextConditionalFormatData;
            /**
            *
            * Returns the Top/Bottom conditional format properties if the current conditional format is an TopBottom type.
            For example to format the top 10% or bottom 10 items.
            *
            * [Api set: ExcelApi 1.6]
            */
            topBottom?: Excel.Interfaces.TopBottomConditionalFormatData;
            /**
            *
            * Returns the Top/Bottom conditional format properties if the current conditional format is an TopBottom type.
            For example to format the top 10% or bottom 10 items.
            *
            * [Api set: ExcelApi 1.6]
            */
            topBottomOrNullObject?: Excel.Interfaces.TopBottomConditionalFormatData;
            /**
             *
             * The Priority of the Conditional Format within the current ConditionalFormatCollection.
             *
             * [Api set: ExcelApi 1.6]
             */
            id?: string;
            /**
             *
             * The priority (or index) within the conditional format collection that this conditional format currently exists in. Changing this also
            changes other conditional formats' priorities, to allow for a contiguous priority order.
            Use a negative priority to begin from the back.
            Priorities greater than than bounds will get and set to the maximum (or minimum if negative) priority.
            Also note that if you change the priority, you have to re-fetch a new copy of the object at that new priority location if you want to make further changes to it.
             *
             * [Api set: ExcelApi 1.6]
             */
            priority?: number;
            /**
             *
             * If the conditions of this conditional format are met, no lower-priority formats shall take effect on that cell.
            Null on databars, icon sets, and colorscales as there's no concept of StopIfTrue for these
             *
             * [Api set: ExcelApi 1.6]
             */
            stopIfTrue?: boolean;
            /**
             *
             * A type of conditional format. Only one can be set at a time. Read-Only.
             *
             * [Api set: ExcelApi 1.6]
             */
            type?: Excel.ConditionalFormatType | "Custom" | "DataBar" | "ColorScale" | "IconSet" | "TopBottom" | "PresetCriteria" | "ContainsText" | "CellValue";
        }
        /** An interface describing the data returned by calling "dataBarConditionalFormat.toJSON()". */
        export interface DataBarConditionalFormatData {
            /**
            *
            * Representation of all values to the left of the axis in an Excel data bar.
            *
            * [Api set: ExcelApi 1.6]
            */
            negativeFormat?: Excel.Interfaces.ConditionalDataBarNegativeFormatData;
            /**
            *
            * Representation of all values to the right of the axis in an Excel data bar.
            *
            * [Api set: ExcelApi 1.6]
            */
            positiveFormat?: Excel.Interfaces.ConditionalDataBarPositiveFormatData;
            /**
             *
             * HTML color code representing the color of the Axis line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
            "" (empty string) if no axis is present or set.
             *
             * [Api set: ExcelApi 1.6]
             */
            axisColor?: string;
            /**
             *
             * Representation of how the axis is determined for an Excel data bar.
             *
             * [Api set: ExcelApi 1.6]
             */
            axisFormat?: Excel.ConditionalDataBarAxisFormat | "Automatic" | "None" | "CellMidPoint";
            /**
             *
             * Represents the direction that the data bar graphic should be based on.
             *
             * [Api set: ExcelApi 1.6]
             */
            barDirection?: Excel.ConditionalDataBarDirection | "Context" | "LeftToRight" | "RightToLeft";
            /**
             *
             * The rule for what consistutes the lower bound (and how to calculate it, if applicable) for a data bar.
             *
             * [Api set: ExcelApi 1.6]
             */
            lowerBoundRule?: Excel.ConditionalDataBarRule;
            /**
             *
             * If true, hides the values from the cells where the data bar is applied.
             *
             * [Api set: ExcelApi 1.6]
             */
            showDataBarOnly?: boolean;
            /**
             *
             * The rule for what constitutes the upper bound (and how to calculate it, if applicable) for a data bar.
             *
             * [Api set: ExcelApi 1.6]
             */
            upperBoundRule?: Excel.ConditionalDataBarRule;
        }
        /** An interface describing the data returned by calling "conditionalDataBarPositiveFormat.toJSON()". */
        export interface ConditionalDataBarPositiveFormatData {
            /**
             *
             * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
            "" (empty string) if no border is present or set.
             *
             * [Api set: ExcelApi 1.6]
             */
            borderColor?: string;
            /**
             *
             * HTML color code representing the fill color, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
             *
             * [Api set: ExcelApi 1.6]
             */
            fillColor?: string;
            /**
             *
             * Boolean representation of whether or not the DataBar has a gradient.
             *
             * [Api set: ExcelApi 1.6]
             */
            gradientFill?: boolean;
        }
        /** An interface describing the data returned by calling "conditionalDataBarNegativeFormat.toJSON()". */
        export interface ConditionalDataBarNegativeFormatData {
            /**
             *
             * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
            "Empty String" if no border is present or set.
             *
             * [Api set: ExcelApi 1.6]
             */
            borderColor?: string;
            /**
             *
             * HTML color code representing the fill color, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
             *
             * [Api set: ExcelApi 1.6]
             */
            fillColor?: string;
            /**
             *
             * Boolean representation of whether or not the negative DataBar has the same border color as the positive DataBar.
             *
             * [Api set: ExcelApi 1.6]
             */
            matchPositiveBorderColor?: boolean;
            /**
             *
             * Boolean representation of whether or not the negative DataBar has the same fill color as the positive DataBar.
             *
             * [Api set: ExcelApi 1.6]
             */
            matchPositiveFillColor?: boolean;
        }
        /** An interface describing the data returned by calling "customConditionalFormat.toJSON()". */
        export interface CustomConditionalFormatData {
            /**
            *
            * Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties.
            *
            * [Api set: ExcelApi 1.6]
            */
            format?: Excel.Interfaces.ConditionalRangeFormatData;
            /**
            *
            * Represents the Rule object on this conditional format.
            *
            * [Api set: ExcelApi 1.6]
            */
            rule?: Excel.Interfaces.ConditionalFormatRuleData;
        }
        /** An interface describing the data returned by calling "conditionalFormatRule.toJSON()". */
        export interface ConditionalFormatRuleData {
            /**
             *
             * The formula, if required, to evaluate the conditional format rule on.
             *
             * [Api set: ExcelApi 1.6]
             */
            formula?: string;
            /**
             *
             * The formula, if required, to evaluate the conditional format rule on in the user's language.
             *
             * [Api set: ExcelApi 1.6]
             */
            formulaLocal?: string;
            /**
             *
             * The formula, if required, to evaluate the conditional format rule on in R1C1-style notation.
             *
             * [Api set: ExcelApi 1.6]
             */
            formulaR1C1?: string;
        }
        /** An interface describing the data returned by calling "iconSetConditionalFormat.toJSON()". */
        export interface IconSetConditionalFormatData {
            /**
             *
             * An array of Criteria and IconSets for the rules and potential custom icons for conditional icons. Note that for the first criterion only the custom icon can be modified, while type, formula and operator will be ignored when set.
             *
             * [Api set: ExcelApi 1.6]
             */
            criteria?: Excel.ConditionalIconCriterion[];
            /**
             *
             * If true, reverses the icon orders for the IconSet. Note that this cannot be set if custom icons are used.
             *
             * [Api set: ExcelApi 1.6]
             */
            reverseIconOrder?: boolean;
            /**
             *
             * If true, hides the values and only shows icons.
             *
             * [Api set: ExcelApi 1.6]
             */
            showIconOnly?: boolean;
            /**
             *
             * If set, displays the IconSet option for the conditional format.
             *
             * [Api set: ExcelApi 1.6]
             */
            style?: Excel.IconSet | "Invalid" | "ThreeArrows" | "ThreeArrowsGray" | "ThreeFlags" | "ThreeTrafficLights1" | "ThreeTrafficLights2" | "ThreeSigns" | "ThreeSymbols" | "ThreeSymbols2" | "FourArrows" | "FourArrowsGray" | "FourRedToBlack" | "FourRating" | "FourTrafficLights" | "FiveArrows" | "FiveArrowsGray" | "FiveRating" | "FiveQuarters" | "ThreeStars" | "ThreeTriangles" | "FiveBoxes";
        }
        /** An interface describing the data returned by calling "colorScaleConditionalFormat.toJSON()". */
        export interface ColorScaleConditionalFormatData {
            /**
             *
             * The criteria of the color scale. Midpoint is optional when using a two point color scale.
             *
             * [Api set: ExcelApi 1.6]
             */
            criteria?: Excel.ConditionalColorScaleCriteria;
            /**
             *
             * If true the color scale will have three points (minimum, midpoint, maximum), otherwise it will have two (minimum, maximum).
             *
             * [Api set: ExcelApi 1.6]
             */
            threeColorScale?: boolean;
        }
        /** An interface describing the data returned by calling "topBottomConditionalFormat.toJSON()". */
        export interface TopBottomConditionalFormatData {
            /**
            *
            * Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties.
            *
            * [Api set: ExcelApi 1.6]
            */
            format?: Excel.Interfaces.ConditionalRangeFormatData;
            /**
             *
             * The criteria of the Top/Bottom conditional format.
             *
             * [Api set: ExcelApi 1.6]
             */
            rule?: Excel.ConditionalTopBottomRule;
        }
        /** An interface describing the data returned by calling "presetCriteriaConditionalFormat.toJSON()". */
        export interface PresetCriteriaConditionalFormatData {
            /**
            *
            * Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties.
            *
            * [Api set: ExcelApi 1.6]
            */
            format?: Excel.Interfaces.ConditionalRangeFormatData;
            /**
             *
             * The rule of the conditional format.
             *
             * [Api set: ExcelApi 1.6]
             */
            rule?: Excel.ConditionalPresetCriteriaRule;
        }
        /** An interface describing the data returned by calling "textConditionalFormat.toJSON()". */
        export interface TextConditionalFormatData {
            /**
            *
            * Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties.
            *
            * [Api set: ExcelApi 1.6]
            */
            format?: Excel.Interfaces.ConditionalRangeFormatData;
            /**
             *
             * The rule of the conditional format.
             *
             * [Api set: ExcelApi 1.6]
             */
            rule?: Excel.ConditionalTextComparisonRule;
        }
        /** An interface describing the data returned by calling "cellValueConditionalFormat.toJSON()". */
        export interface CellValueConditionalFormatData {
            /**
            *
            * Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties.
            *
            * [Api set: ExcelApi 1.6]
            */
            format?: Excel.Interfaces.ConditionalRangeFormatData;
            /**
             *
             * Represents the Rule object on this conditional format.
             *
             * [Api set: ExcelApi 1.6]
             */
            rule?: Excel.ConditionalCellValueRule;
        }
        /** An interface describing the data returned by calling "conditionalRangeFormat.toJSON()". */
        export interface ConditionalRangeFormatData {
            /**
            *
            * Collection of border objects that apply to the overall conditional format range.
            *
            * [Api set: ExcelApi 1.6]
            */
            borders?: Excel.Interfaces.ConditionalRangeBorderData[];
            /**
            *
            * Returns the fill object defined on the overall conditional format range.
            *
            * [Api set: ExcelApi 1.6]
            */
            fill?: Excel.Interfaces.ConditionalRangeFillData;
            /**
            *
            * Returns the font object defined on the overall conditional format range.
            *
            * [Api set: ExcelApi 1.6]
            */
            font?: Excel.Interfaces.ConditionalRangeFontData;
            /**
             *
             * Represents Excel's number format code for the given range. Cleared if null is passed in.
             *
             * [Api set: ExcelApi 1.6]
             */
            numberFormat?: any;
        }
        /** An interface describing the data returned by calling "conditionalRangeFont.toJSON()". */
        export interface ConditionalRangeFontData {
            /**
             *
             * Represents the bold status of font.
             *
             * [Api set: ExcelApi 1.6]
             */
            bold?: boolean;
            /**
             *
             * HTML color code representation of the text color. E.g. #FF0000 represents Red.
             *
             * [Api set: ExcelApi 1.6]
             */
            color?: string;
            /**
             *
             * Represents the italic status of the font.
             *
             * [Api set: ExcelApi 1.6]
             */
            italic?: boolean;
            /**
             *
             * Represents the strikethrough status of the font.
             *
             * [Api set: ExcelApi 1.6]
             */
            strikethrough?: boolean;
            /**
             *
             * Type of underline applied to the font. See Excel.ConditionalRangeFontUnderlineStyle for details.
             *
             * [Api set: ExcelApi 1.6]
             */
            underline?: Excel.ConditionalRangeFontUnderlineStyle | "None" | "Single" | "Double";
        }
        /** An interface describing the data returned by calling "conditionalRangeFill.toJSON()". */
        export interface ConditionalRangeFillData {
            /**
             *
             * HTML color code representing the color of the fill, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
             *
             * [Api set: ExcelApi 1.6]
             */
            color?: string;
        }
        /** An interface describing the data returned by calling "conditionalRangeBorder.toJSON()". */
        export interface ConditionalRangeBorderData {
            /**
             *
             * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
             *
             * [Api set: ExcelApi 1.6]
             */
            color?: string;
            /**
             *
             * Constant value that indicates the specific side of the border. See Excel.ConditionalRangeBorderIndex for details. Read-only.
             *
             * [Api set: ExcelApi 1.6]
             */
            sideIndex?: Excel.ConditionalRangeBorderIndex | "EdgeTop" | "EdgeBottom" | "EdgeLeft" | "EdgeRight";
            /**
             *
             * One of the constants of line style specifying the line style for the border. See Excel.BorderLineStyle for details.
             *
             * [Api set: ExcelApi 1.6]
             */
            style?: Excel.ConditionalRangeBorderLineStyle | "None" | "Continuous" | "Dash" | "DashDot" | "DashDotDot" | "Dot";
        }
        /** An interface describing the data returned by calling "conditionalRangeBorderCollection.toJSON()". */
        export interface ConditionalRangeBorderCollectionData {
            items?: Excel.Interfaces.ConditionalRangeBorderData[];
        }
        /** An interface describing the data returned by calling "style.toJSON()". */
        export interface StyleData {
            /**
            *
            * A Border collection of four Border objects that represent the style of the four borders.
            *
            * [Api set: ExcelApi 1.7]
            */
            borders?: Excel.Interfaces.RangeBorderData[];
            /**
            *
            * The Fill of the style.
            *
            * [Api set: ExcelApi 1.7]
            */
            fill?: Excel.Interfaces.RangeFillData;
            /**
            *
            * A Font object that represents the font of the style.
            *
            * [Api set: ExcelApi 1.7]
            */
            font?: Excel.Interfaces.RangeFontData;
            /**
             *
             * Indicates if the style is a built-in style.
             *
             * [Api set: ExcelApi 1.7]
             */
            builtIn?: boolean;
            /**
             *
             * Indicates if the formula will be hidden when the worksheet is protected.
             *
             * [Api set: ExcelApi 1.7]
             */
            formulaHidden?: boolean;
            /**
             *
             * Represents the horizontal alignment for the style. See Excel.HorizontalAlignment for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            horizontalAlignment?: Excel.HorizontalAlignment | "General" | "Left" | "Center" | "Right" | "Fill" | "Justify" | "CenterAcrossSelection" | "Distributed";
            /**
             *
             * Indicates if the style includes the AutoIndent, HorizontalAlignment, VerticalAlignment, WrapText, IndentLevel, and TextOrientation properties.
             *
             * [Api set: ExcelApi 1.7]
             */
            includeAlignment?: boolean;
            /**
             *
             * Indicates if the style includes the Color, ColorIndex, LineStyle, and Weight border properties.
             *
             * [Api set: ExcelApi 1.7]
             */
            includeBorder?: boolean;
            /**
             *
             * Indicates if the style includes the Background, Bold, Color, ColorIndex, FontStyle, Italic, Name, Size, Strikethrough, Subscript, Superscript, and Underline font properties.
             *
             * [Api set: ExcelApi 1.7]
             */
            includeFont?: boolean;
            /**
             *
             * Indicates if the style includes the NumberFormat property.
             *
             * [Api set: ExcelApi 1.7]
             */
            includeNumber?: boolean;
            /**
             *
             * Indicates if the style includes the Color, ColorIndex, InvertIfNegative, Pattern, PatternColor, and PatternColorIndex interior properties.
             *
             * [Api set: ExcelApi 1.7]
             */
            includePatterns?: boolean;
            /**
             *
             * Indicates if the style includes the FormulaHidden and Locked protection properties.
             *
             * [Api set: ExcelApi 1.7]
             */
            includeProtection?: boolean;
            /**
             *
             * An integer from 0 to 250 that indicates the indent level for the style.
             *
             * [Api set: ExcelApi 1.7]
             */
            indentLevel?: number;
            /**
             *
             * Indicates if the object is locked when the worksheet is protected.
             *
             * [Api set: ExcelApi 1.7]
             */
            locked?: boolean;
            /**
             *
             * The name of the style.
             *
             * [Api set: ExcelApi 1.7]
             */
            name?: string;
            /**
             *
             * The format code of the number format for the style.
             *
             * [Api set: ExcelApi 1.7]
             */
            numberFormat?: string;
            /**
             *
             * The localized format code of the number format for the style.
             *
             * [Api set: ExcelApi 1.7]
             */
            numberFormatLocal?: string;
            /**
             *
             * The reading order for the style.
             *
             * [Api set: ExcelApi 1.7]
             */
            readingOrder?: Excel.ReadingOrder | "Context" | "LeftToRight" | "RightToLeft";
            /**
             *
             * Indicates if text automatically shrinks to fit in the available column width.
             *
             * [Api set: ExcelApi 1.7]
             */
            shrinkToFit?: boolean;
            /**
             *
             * Represents the vertical alignment for the style. See Excel.VerticalAlignment for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            verticalAlignment?: Excel.VerticalAlignment | "Top" | "Center" | "Bottom" | "Justify" | "Distributed";
            /**
             *
             * Indicates if Microsoft Excel wraps the text in the object.
             *
             * [Api set: ExcelApi 1.7]
             */
            wrapText?: boolean;
        }
        /** An interface describing the data returned by calling "styleCollection.toJSON()". */
        export interface StyleCollectionData {
            items?: Excel.Interfaces.StyleData[];
        }
        /** An interface describing the data returned by calling "functionResult.toJSON()". */
        export interface FunctionResultData<T> {
            /**
             *
             * Error value (such as "#DIV/0") representing the error. If the error string is not set, then the function succeeded, and its result is written to the Value field. The error is always in the English locale.
             *
             * [Api set: ExcelApi 1.2]
             */
            error?: string;
            /**
             *
             * The value of function evaluation. The value field will be populated only if no error has occurred (i.e., the Error property is not set).
             *
             * [Api set: ExcelApi 1.2]
             */
            value?: T;
        }
        /**
         *
         * Represents the Excel application that manages the workbook.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface ApplicationLoadOptions {
            $all?: boolean;
            /**
             *
             * Returns the calculation mode used in the workbook. See Excel.CalculationMode for details.
             *
             * [Api set: ExcelApi 1.1 for get, 1.8 for set]
             */
            calculationMode?: boolean;
        }
        /**
         *
         * Workbook is the top level object which contains related workbook objects such as worksheets, tables, ranges, etc.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface WorkbookLoadOptions {
            $all?: boolean;
            /**
            *
            * Represents the Excel application instance that contains this workbook.
            *
            * [Api set: ExcelApi 1.1]
            */
            application?: Excel.Interfaces.ApplicationLoadOptions;
            /**
            *
            * Represents a collection of bindings that are part of the workbook.
            *
            * [Api set: ExcelApi 1.1]
            */
            bindings?: Excel.Interfaces.BindingCollectionLoadOptions;
            /**
            *
            * Gets the workbook properties.
            *
            * [Api set: ExcelApi 1.7]
            */
            properties?: Excel.Interfaces.DocumentPropertiesLoadOptions;
            /**
            *
            * Represents a collection of tables associated with the workbook.
            *
            * [Api set: ExcelApi 1.1]
            */
            tables?: Excel.Interfaces.TableCollectionLoadOptions;
            /**
             *
             * Gets the workbook name.
             *
             * [Api set: ExcelApi 1.7]
             */
            name?: boolean;
        }
        /**
         *
         * An Excel worksheet is a grid of cells. It can contain data, tables, charts, etc.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface WorksheetLoadOptions {
            $all?: boolean;
            /**
            *
            * Returns collection of charts that are part of the worksheet.
            *
            * [Api set: ExcelApi 1.1]
            */
            charts?: Excel.Interfaces.ChartCollectionLoadOptions;
            /**
            *
            * Returns sheet protection object for a worksheet.
            *
            * [Api set: ExcelApi 1.2]
            */
            protection?: Excel.Interfaces.WorksheetProtectionLoadOptions;
            /**
            *
            * Collection of tables that are part of the worksheet.
            *
            * [Api set: ExcelApi 1.1]
            */
            tables?: Excel.Interfaces.TableCollectionLoadOptions;
            /**
             *
             * Returns a value that uniquely identifies the worksheet in a given workbook. The value of the identifier remains the same even when the worksheet is renamed or moved. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            id?: boolean;
            /**
             *
             * The display name of the worksheet.
             *
             * [Api set: ExcelApi 1.1]
             */
            name?: boolean;
            /**
             *
             * The zero-based position of the worksheet within the workbook.
             *
             * [Api set: ExcelApi 1.1]
             */
            position?: boolean;
            /**
             *
             * Returns the standard (default) height of all the rows in the worksheet, in points. Read-only.
             *
             * [Api set: ExcelApi 1.7]
             */
            standardHeight?: boolean;
            /**
             *
             * Returns or sets the standard (default) width of all the columns in the worksheet.
            One unit of column width is equal to the width of one character in the Normal style. For proportional fonts, the width of the character 0 (zero) is used.
             *
             * [Api set: ExcelApi 1.7]
             */
            standardWidth?: boolean;
            /**
             *
             * Gets or sets the worksheet tab color.
            When retrieving the tab color, if the worksheet is invisible, the value will be null. If the worksheet is visible but the tab color is set to auto, an empty string will be returned. Otherwise, the property will be set to a color, in the form "#123456"
            When setting the color, use an empty-string to set an "auto" color, or a real color otherwise.
             *
             * [Api set: ExcelApi 1.7]
             */
            tabColor?: boolean;
            /**
             *
             * The Visibility of the worksheet.
             *
             * [Api set: ExcelApi 1.1 for reading visibility; 1.2 for setting it.]
             */
            visibility?: boolean;
        }
        /**
         *
         * Represents a collection of worksheet objects that are part of the workbook.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface WorksheetCollectionLoadOptions {
            $all?: boolean;
            /**
            *
            * For EACH ITEM in the collection: Returns collection of charts that are part of the worksheet.
            *
            * [Api set: ExcelApi 1.1]
            */
            charts?: Excel.Interfaces.ChartCollectionLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: Returns sheet protection object for a worksheet.
            *
            * [Api set: ExcelApi 1.2]
            */
            protection?: Excel.Interfaces.WorksheetProtectionLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: Collection of tables that are part of the worksheet.
            *
            * [Api set: ExcelApi 1.1]
            */
            tables?: Excel.Interfaces.TableCollectionLoadOptions;
            /**
             *
             * For EACH ITEM in the collection: Returns a value that uniquely identifies the worksheet in a given workbook. The value of the identifier remains the same even when the worksheet is renamed or moved. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            id?: boolean;
            /**
             *
             * For EACH ITEM in the collection: The display name of the worksheet.
             *
             * [Api set: ExcelApi 1.1]
             */
            name?: boolean;
            /**
             *
             * For EACH ITEM in the collection: The zero-based position of the worksheet within the workbook.
             *
             * [Api set: ExcelApi 1.1]
             */
            position?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Returns the standard (default) height of all the rows in the worksheet, in points. Read-only.
             *
             * [Api set: ExcelApi 1.7]
             */
            standardHeight?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Returns or sets the standard (default) width of all the columns in the worksheet.
            One unit of column width is equal to the width of one character in the Normal style. For proportional fonts, the width of the character 0 (zero) is used.
             *
             * [Api set: ExcelApi 1.7]
             */
            standardWidth?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Gets or sets the worksheet tab color.
            When retrieving the tab color, if the worksheet is invisible, the value will be null. If the worksheet is visible but the tab color is set to auto, an empty string will be returned. Otherwise, the property will be set to a color, in the form "#123456"
            When setting the color, use an empty-string to set an "auto" color, or a real color otherwise.
             *
             * [Api set: ExcelApi 1.7]
             */
            tabColor?: boolean;
            /**
             *
             * For EACH ITEM in the collection: The Visibility of the worksheet.
             *
             * [Api set: ExcelApi 1.1 for reading visibility; 1.2 for setting it.]
             */
            visibility?: boolean;
        }
        /**
         *
         * Represents the protection of a sheet object.
         *
         * [Api set: ExcelApi 1.2]
         */
        export interface WorksheetProtectionLoadOptions {
            $all?: boolean;
            /**
             *
             * Sheet protection options.
             *
             * [Api set: ExcelApi 1.2]
             */
            options?: boolean;
            /**
             *
             * Indicates if the worksheet is protected. Read-Only.
             *
             * [Api set: ExcelApi 1.2]
             */
            protected?: boolean;
        }
        /**
         *
         * Range represents a set of one or more contiguous cells such as a cell, a row, a column, block of cells, etc.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface RangeLoadOptions {
            $all?: boolean;
            /**
            *
            * Returns a format object, encapsulating the range's font, fill, borders, alignment, and other properties.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.RangeFormatLoadOptions;
            /**
            *
            * The worksheet containing the current range.
            *
            * [Api set: ExcelApi 1.1]
            */
            worksheet?: Excel.Interfaces.WorksheetLoadOptions;
            /**
             *
             * Represents the range reference in A1-style. Address value will contain the Sheet reference (e.g. Sheet1!A1:B4). Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            address?: boolean;
            /**
             *
             * Represents range reference for the specified range in the language of the user. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            addressLocal?: boolean;
            /**
             *
             * Number of cells in the range. This API will return -1 if the cell count exceeds 2^31-1 (2,147,483,647). Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            cellCount?: boolean;
            /**
             *
             * Represents the total number of columns in the range. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            columnCount?: boolean;
            /**
             *
             * Represents if all columns of the current range are hidden.
             *
             * [Api set: ExcelApi 1.2]
             */
            columnHidden?: boolean;
            /**
             *
             * Represents the column number of the first cell in the range. Zero-indexed. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            columnIndex?: boolean;
            /**
             *
             * Represents the formula in A1-style notation.
                When setting formulas to a range, the value argument can be either a single value (a string) or a two-dimensional array. If the argument is a single value, it will be applied to all cells in the range.
             *
             * [Api set: ExcelApi 1.1]
             */
            formulas?: boolean;
            /**
             *
             * Represents the formula in A1-style notation, in the user's language and number-formatting locale.  For example, the English "=SUM(A1, 1.5)" formula would become "=SUMME(A1; 1,5)" in German.
                When setting formulas to a range, the value argument can be either a single value (a string) or a two-dimensional array. If the argument is a single value, it will be applied to all cells in the range.
             *
             * [Api set: ExcelApi 1.1]
             */
            formulasLocal?: boolean;
            /**
             *
             * Represents the formula in R1C1-style notation.
                When setting formulas to a range, the value argument can be either a single value (a string) or a two-dimensional array. If the argument is a single value, it will be applied to all cells in the range.
             *
             * [Api set: ExcelApi 1.2]
             */
            formulasR1C1?: boolean;
            /**
             *
             * Represents if all cells of the current range are hidden.
             *
             * [Api set: ExcelApi 1.2]
             */
            hidden?: boolean;
            /**
             *
             * Represents the hyperlink for the current range.
             *
             * [Api set: ExcelApi 1.7]
             */
            hyperlink?: boolean;
            /**
             *
             * Represents if the current range is an entire column.
             *
             * [Api set: ExcelApi 1.7]
             */
            isEntireColumn?: boolean;
            /**
             *
             * Represents if the current range is an entire row.
             *
             * [Api set: ExcelApi 1.7]
             */
            isEntireRow?: boolean;
            /**
             *
             * Represents Excel's number format code for the given range.
                When setting number format to a range, the value argument can be either a single value (string) or a two-dimensional array. If the argument is a single value, it will be applied to all cells in the range.
             *
             * [Api set: ExcelApi 1.1]
             */
            numberFormat?: boolean;
            /**
             *
             * Represents Excel's number format code for the given range as a string in the language of the user.
                When setting number format local to a range, the value argument can be either a single value (string) or a two-dimensional array. If the argument is a single value, it will be applied to all cells in the range.
             *
             * [Api set: ExcelApi 1.7]
             */
            numberFormatLocal?: boolean;
            /**
             *
             * Returns the total number of rows in the range. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            rowCount?: boolean;
            /**
             *
             * Represents if all rows of the current range are hidden.
             *
             * [Api set: ExcelApi 1.2]
             */
            rowHidden?: boolean;
            /**
             *
             * Returns the row number of the first cell in the range. Zero-indexed. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            rowIndex?: boolean;
            /**
             *
             * Represents the style of the current range.
                If the styles of the cells are inconsistent, null will be returned.
                For custom styles, the style name will be returned. For built-in styles, a string representing a value in the BuiltInStyle enum will be returned.
             *
             * [Api set: ExcelApi 1.7]
             */
            style?: boolean;
            /**
             *
             * Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that happens in Excel UI will not affect the text value returned by the API. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            text?: boolean;
            /**
             *
             * Represents the type of data of each cell. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            valueTypes?: boolean;
            /**
             *
             * Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
                When setting values to a range, the value argument can be either a single value (string, number or boolean) or a two-dimensional array. If the argument is a single value, it will be applied to all cells in the range.
             *
             * [Api set: ExcelApi 1.1]
             */
            values?: boolean;
        }
        /**
         *
         * RangeView represents a set of visible cells of the parent range.
         *
         * [Api set: ExcelApi 1.3]
         */
        export interface RangeViewLoadOptions {
            $all?: boolean;
            /**
             *
             * Represents the cell addresses of the RangeView.
             *
             * [Api set: ExcelApi 1.3]
             */
            cellAddresses?: boolean;
            /**
             *
             * Returns the number of visible columns. Read-only.
             *
             * [Api set: ExcelApi 1.3]
             */
            columnCount?: boolean;
            /**
             *
             * Represents the formula in A1-style notation.
             *
             * [Api set: ExcelApi 1.3]
             */
            formulas?: boolean;
            /**
             *
             * Represents the formula in A1-style notation, in the user's language and number-formatting locale.  For example, the English "=SUM(A1, 1.5)" formula would become "=SUMME(A1; 1,5)" in German.
             *
             * [Api set: ExcelApi 1.3]
             */
            formulasLocal?: boolean;
            /**
             *
             * Represents the formula in R1C1-style notation.
             *
             * [Api set: ExcelApi 1.3]
             */
            formulasR1C1?: boolean;
            /**
             *
             * Returns a value that represents the index of the RangeView. Read-only.
             *
             * [Api set: ExcelApi 1.3]
             */
            index?: boolean;
            /**
             *
             * Represents Excel's number format code for the given cell.
             *
             * [Api set: ExcelApi 1.3]
             */
            numberFormat?: boolean;
            /**
             *
             * Returns the number of visible rows. Read-only.
             *
             * [Api set: ExcelApi 1.3]
             */
            rowCount?: boolean;
            /**
             *
             * Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that happens in Excel UI will not affect the text value returned by the API. Read-only.
             *
             * [Api set: ExcelApi 1.3]
             */
            text?: boolean;
            /**
             *
             * Represents the type of data of each cell. Read-only.
             *
             * [Api set: ExcelApi 1.3]
             */
            valueTypes?: boolean;
            /**
             *
             * Represents the raw values of the specified range view. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
             *
             * [Api set: ExcelApi 1.3]
             */
            values?: boolean;
        }
        /**
         *
         * Represents a collection of RangeView objects.
         *
         * [Api set: ExcelApi 1.3]
         */
        export interface RangeViewCollectionLoadOptions {
            $all?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents the cell addresses of the RangeView.
             *
             * [Api set: ExcelApi 1.3]
             */
            cellAddresses?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Returns the number of visible columns. Read-only.
             *
             * [Api set: ExcelApi 1.3]
             */
            columnCount?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents the formula in A1-style notation.
             *
             * [Api set: ExcelApi 1.3]
             */
            formulas?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents the formula in A1-style notation, in the user's language and number-formatting locale.  For example, the English "=SUM(A1, 1.5)" formula would become "=SUMME(A1; 1,5)" in German.
             *
             * [Api set: ExcelApi 1.3]
             */
            formulasLocal?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents the formula in R1C1-style notation.
             *
             * [Api set: ExcelApi 1.3]
             */
            formulasR1C1?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Returns a value that represents the index of the RangeView. Read-only.
             *
             * [Api set: ExcelApi 1.3]
             */
            index?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents Excel's number format code for the given cell.
             *
             * [Api set: ExcelApi 1.3]
             */
            numberFormat?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Returns the number of visible rows. Read-only.
             *
             * [Api set: ExcelApi 1.3]
             */
            rowCount?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that happens in Excel UI will not affect the text value returned by the API. Read-only.
             *
             * [Api set: ExcelApi 1.3]
             */
            text?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents the type of data of each cell. Read-only.
             *
             * [Api set: ExcelApi 1.3]
             */
            valueTypes?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents the raw values of the specified range view. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
             *
             * [Api set: ExcelApi 1.3]
             */
            values?: boolean;
        }
        /**
         *
         * Represents a collection of worksheet objects that are part of the workbook.
         *
         * [Api set: ExcelApi 1.4]
         */
        export interface SettingCollectionLoadOptions {
            $all?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Returns the key that represents the id of the Setting. Read-only.
             *
             * [Api set: ExcelApi 1.4]
             */
            key?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents the value stored for this setting.
             *
             * [Api set: ExcelApi 1.4]
             */
            value?: boolean;
        }
        /**
         *
         * Setting represents a key-value pair of a setting persisted to the document.
         *
         * [Api set: ExcelApi 1.4]
         */
        export interface SettingLoadOptions {
            $all?: boolean;
            /**
             *
             * Returns the key that represents the id of the Setting. Read-only.
             *
             * [Api set: ExcelApi 1.4]
             */
            key?: boolean;
            /**
             *
             * Represents the value stored for this setting.
             *
             * [Api set: ExcelApi 1.4]
             */
            value?: boolean;
        }
        /**
         *
         * A collection of all the nameditem objects that are part of the workbook or worksheet, depending on how it was reached.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface NamedItemCollectionLoadOptions {
            $all?: boolean;
            /**
            *
            * For EACH ITEM in the collection: Returns an object containing values and types of the named item.
            *
            * [Api set: ExcelApi 1.7]
            */
            arrayValues?: Excel.Interfaces.NamedItemArrayValuesLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: Returns the worksheet on which the named item is scoped to. Throws an error if the items is scoped to the workbook instead.
            *
            * [Api set: ExcelApi 1.4]
            */
            worksheet?: Excel.Interfaces.WorksheetLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: Returns the worksheet on which the named item is scoped to. Returns a null object if the item is scoped to the workbook instead.
            *
            * [Api set: ExcelApi 1.4]
            */
            worksheetOrNullObject?: Excel.Interfaces.WorksheetLoadOptions;
            /**
             *
             * For EACH ITEM in the collection: Represents the comment associated with this name.
             *
             * [Api set: ExcelApi 1.4]
             */
            comment?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Gets or sets the formula of the named item.  Formula always starts with a '=' sign.
             *
             * [Api set: ExcelApi 1.7]
             */
            formula?: boolean;
            /**
             *
             * For EACH ITEM in the collection: The name of the object. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            name?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Indicates whether the name is scoped to the workbook or to a specific worksheet. Read-only.
             *
             * [Api set: ExcelApi 1.4]
             */
            scope?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Indicates the type of the value returned by the name's formula. See Excel.NamedItemType for details. Read-only.
             *
             * [Api set: ExcelApi 1.1 for String,Integer,Double,Boolean,Range,Error; 1.7 for Array]
             */
            type?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents the value computed by the name's formula. For a named range, will return the range address. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            value?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Specifies whether the object is visible or not.
             *
             * [Api set: ExcelApi 1.1]
             */
            visible?: boolean;
        }
        /**
         *
         * Represents a defined name for a range of cells or value. Names can be primitive named objects (as seen in the type below), range object, reference to a range. This object can be used to obtain range object associated with names.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface NamedItemLoadOptions {
            $all?: boolean;
            /**
            *
            * Returns an object containing values and types of the named item.
            *
            * [Api set: ExcelApi 1.7]
            */
            arrayValues?: Excel.Interfaces.NamedItemArrayValuesLoadOptions;
            /**
            *
            * Returns the worksheet on which the named item is scoped to. Throws an error if the items is scoped to the workbook instead.
            *
            * [Api set: ExcelApi 1.4]
            */
            worksheet?: Excel.Interfaces.WorksheetLoadOptions;
            /**
            *
            * Returns the worksheet on which the named item is scoped to. Returns a null object if the item is scoped to the workbook instead.
            *
            * [Api set: ExcelApi 1.4]
            */
            worksheetOrNullObject?: Excel.Interfaces.WorksheetLoadOptions;
            /**
             *
             * Represents the comment associated with this name.
             *
             * [Api set: ExcelApi 1.4]
             */
            comment?: boolean;
            /**
             *
             * Gets or sets the formula of the named item.  Formula always starts with a '=' sign.
             *
             * [Api set: ExcelApi 1.7]
             */
            formula?: boolean;
            /**
             *
             * The name of the object. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            name?: boolean;
            /**
             *
             * Indicates whether the name is scoped to the workbook or to a specific worksheet. Read-only.
             *
             * [Api set: ExcelApi 1.4]
             */
            scope?: boolean;
            /**
             *
             * Indicates the type of the value returned by the name's formula. See Excel.NamedItemType for details. Read-only.
             *
             * [Api set: ExcelApi 1.1 for String,Integer,Double,Boolean,Range,Error; 1.7 for Array]
             */
            type?: boolean;
            /**
             *
             * Represents the value computed by the name's formula. For a named range, will return the range address. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            value?: boolean;
            /**
             *
             * Specifies whether the object is visible or not.
             *
             * [Api set: ExcelApi 1.1]
             */
            visible?: boolean;
        }
        /**
         *
         * Represents an object containing values and types of a named item.
         *
         * [Api set: ExcelApi 1.7]
         */
        export interface NamedItemArrayValuesLoadOptions {
            $all?: boolean;
            /**
             *
             * Represents the types for each item in the named item array
             *
             * [Api set: ExcelApi 1.7]
             */
            types?: boolean;
            /**
             *
             * Represents the values of each item in the named item array.
             *
             * [Api set: ExcelApi 1.7]
             */
            values?: boolean;
        }
        /**
         *
         * Represents an Office.js binding that is defined in the workbook.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface BindingLoadOptions {
            $all?: boolean;
            /**
             *
             * Represents binding identifier. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            id?: boolean;
            /**
             *
             * Returns the type of the binding. See Excel.BindingType for details. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            type?: boolean;
        }
        /**
         *
         * Represents the collection of all the binding objects that are part of the workbook.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface BindingCollectionLoadOptions {
            $all?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents binding identifier. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            id?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Returns the type of the binding. See Excel.BindingType for details. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            type?: boolean;
        }
        /**
         *
         * Represents a collection of all the tables that are part of the workbook or worksheet, depending on how it was reached.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface TableCollectionLoadOptions {
            $all?: boolean;
            /**
            *
            * For EACH ITEM in the collection: Represents a collection of all the columns in the table.
            *
            * [Api set: ExcelApi 1.1]
            */
            columns?: Excel.Interfaces.TableColumnCollectionLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: Represents a collection of all the rows in the table.
            *
            * [Api set: ExcelApi 1.1]
            */
            rows?: Excel.Interfaces.TableRowCollectionLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: Represents the sorting for the table.
            *
            * [Api set: ExcelApi 1.2]
            */
            sort?: Excel.Interfaces.TableSortLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: The worksheet containing the current table.
            *
            * [Api set: ExcelApi 1.2]
            */
            worksheet?: Excel.Interfaces.WorksheetLoadOptions;
            /**
             *
             * For EACH ITEM in the collection: Indicates whether the first column contains special formatting.
             *
             * [Api set: ExcelApi 1.3]
             */
            highlightFirstColumn?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Indicates whether the last column contains special formatting.
             *
             * [Api set: ExcelApi 1.3]
             */
            highlightLastColumn?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Returns a value that uniquely identifies the table in a given workbook. The value of the identifier remains the same even when the table is renamed. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            id?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Name of the table.
             *
             * [Api set: ExcelApi 1.1]
             */
            name?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Indicates whether the columns show banded formatting in which odd columns are highlighted differently from even ones to make reading the table easier.
             *
             * [Api set: ExcelApi 1.3]
             */
            showBandedColumns?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Indicates whether the rows show banded formatting in which odd rows are highlighted differently from even ones to make reading the table easier.
             *
             * [Api set: ExcelApi 1.3]
             */
            showBandedRows?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Indicates whether the filter buttons are visible at the top of each column header. Setting this is only allowed if the table contains a header row.
             *
             * [Api set: ExcelApi 1.3]
             */
            showFilterButton?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Indicates whether the header row is visible or not. This value can be set to show or remove the header row.
             *
             * [Api set: ExcelApi 1.1]
             */
            showHeaders?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Indicates whether the total row is visible or not. This value can be set to show or remove the total row.
             *
             * [Api set: ExcelApi 1.1]
             */
            showTotals?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Constant value that represents the Table style. Possible values are: TableStyleLight1 thru TableStyleLight21, TableStyleMedium1 thru TableStyleMedium28, TableStyleStyleDark1 thru TableStyleStyleDark11. A custom user-defined style present in the workbook can also be specified.
             *
             * [Api set: ExcelApi 1.1]
             */
            style?: boolean;
        }
        /**
         *
         * Represents an Excel table.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface TableLoadOptions {
            $all?: boolean;
            /**
            *
            * Represents a collection of all the columns in the table.
            *
            * [Api set: ExcelApi 1.1]
            */
            columns?: Excel.Interfaces.TableColumnCollectionLoadOptions;
            /**
            *
            * Represents a collection of all the rows in the table.
            *
            * [Api set: ExcelApi 1.1]
            */
            rows?: Excel.Interfaces.TableRowCollectionLoadOptions;
            /**
            *
            * Represents the sorting for the table.
            *
            * [Api set: ExcelApi 1.2]
            */
            sort?: Excel.Interfaces.TableSortLoadOptions;
            /**
            *
            * The worksheet containing the current table.
            *
            * [Api set: ExcelApi 1.2]
            */
            worksheet?: Excel.Interfaces.WorksheetLoadOptions;
            /**
             *
             * Indicates whether the first column contains special formatting.
             *
             * [Api set: ExcelApi 1.3]
             */
            highlightFirstColumn?: boolean;
            /**
             *
             * Indicates whether the last column contains special formatting.
             *
             * [Api set: ExcelApi 1.3]
             */
            highlightLastColumn?: boolean;
            /**
             *
             * Returns a value that uniquely identifies the table in a given workbook. The value of the identifier remains the same even when the table is renamed. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            id?: boolean;
            /**
             *
             * Name of the table.
             *
             * [Api set: ExcelApi 1.1]
             */
            name?: boolean;
            /**
             *
             * Indicates whether the columns show banded formatting in which odd columns are highlighted differently from even ones to make reading the table easier.
             *
             * [Api set: ExcelApi 1.3]
             */
            showBandedColumns?: boolean;
            /**
             *
             * Indicates whether the rows show banded formatting in which odd rows are highlighted differently from even ones to make reading the table easier.
             *
             * [Api set: ExcelApi 1.3]
             */
            showBandedRows?: boolean;
            /**
             *
             * Indicates whether the filter buttons are visible at the top of each column header. Setting this is only allowed if the table contains a header row.
             *
             * [Api set: ExcelApi 1.3]
             */
            showFilterButton?: boolean;
            /**
             *
             * Indicates whether the header row is visible or not. This value can be set to show or remove the header row.
             *
             * [Api set: ExcelApi 1.1]
             */
            showHeaders?: boolean;
            /**
             *
             * Indicates whether the total row is visible or not. This value can be set to show or remove the total row.
             *
             * [Api set: ExcelApi 1.1]
             */
            showTotals?: boolean;
            /**
             *
             * Constant value that represents the Table style. Possible values are: TableStyleLight1 thru TableStyleLight21, TableStyleMedium1 thru TableStyleMedium28, TableStyleStyleDark1 thru TableStyleStyleDark11. A custom user-defined style present in the workbook can also be specified.
             *
             * [Api set: ExcelApi 1.1]
             */
            style?: boolean;
        }
        /**
         *
         * Represents a collection of all the columns that are part of the table.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface TableColumnCollectionLoadOptions {
            $all?: boolean;
            /**
            *
            * For EACH ITEM in the collection: Retrieve the filter applied to the column.
            *
            * [Api set: ExcelApi 1.2]
            */
            filter?: Excel.Interfaces.FilterLoadOptions;
            /**
             *
             * For EACH ITEM in the collection: Returns a unique key that identifies the column within the table. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            id?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Returns the index number of the column within the columns collection of the table. Zero-indexed. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            index?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents the name of the table column.
             *
             * [Api set: ExcelApi 1.1 for getting the name; 1.4 for setting it.]
             */
            name?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
             *
             * [Api set: ExcelApi 1.1]
             */
            values?: boolean;
        }
        /**
         *
         * Represents a column in a table.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface TableColumnLoadOptions {
            $all?: boolean;
            /**
            *
            * Retrieve the filter applied to the column.
            *
            * [Api set: ExcelApi 1.2]
            */
            filter?: Excel.Interfaces.FilterLoadOptions;
            /**
             *
             * Returns a unique key that identifies the column within the table. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            id?: boolean;
            /**
             *
             * Returns the index number of the column within the columns collection of the table. Zero-indexed. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            index?: boolean;
            /**
             *
             * Represents the name of the table column.
             *
             * [Api set: ExcelApi 1.1 for getting the name; 1.4 for setting it.]
             */
            name?: boolean;
            /**
             *
             * Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
             *
             * [Api set: ExcelApi 1.1]
             */
            values?: boolean;
        }
        /**
         *
         * Represents a collection of all the rows that are part of the table.

                Note that unlike Ranges or Columns, which will adjust if new rows/columns are added before them,
                a TableRow object represent the physical location of the table row, but not the data.
                That is, if the data is sorted or if new rows are added, a table row will continue
                to point at the index for which it was created.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface TableRowCollectionLoadOptions {
            $all?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Returns the index number of the row within the rows collection of the table. Zero-indexed. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            index?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
             *
             * [Api set: ExcelApi 1.1]
             */
            values?: boolean;
        }
        /**
         *
         * Represents a row in a table.

                Note that unlike Ranges or Columns, which will adjust if new rows/columns are added before them,
                a TableRow object represent the physical location of the table row, but not the data.
                That is, if the data is sorted or if new rows are added, a table row will continue
                to point at the index for which it was created.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface TableRowLoadOptions {
            $all?: boolean;
            /**
             *
             * Returns the index number of the row within the rows collection of the table. Zero-indexed. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            index?: boolean;
            /**
             *
             * Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
             *
             * [Api set: ExcelApi 1.1]
             */
            values?: boolean;
        }
        /**
         *
         * A format object encapsulating the range's font, fill, borders, alignment, and other properties.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface RangeFormatLoadOptions {
            $all?: boolean;
            /**
            *
            * Collection of border objects that apply to the overall range.
            *
            * [Api set: ExcelApi 1.1]
            */
            borders?: Excel.Interfaces.RangeBorderCollectionLoadOptions;
            /**
            *
            * Returns the fill object defined on the overall range.
            *
            * [Api set: ExcelApi 1.1]
            */
            fill?: Excel.Interfaces.RangeFillLoadOptions;
            /**
            *
            * Returns the font object defined on the overall range.
            *
            * [Api set: ExcelApi 1.1]
            */
            font?: Excel.Interfaces.RangeFontLoadOptions;
            /**
            *
            * Returns the format protection object for a range.
            *
            * [Api set: ExcelApi 1.2]
            */
            protection?: Excel.Interfaces.FormatProtectionLoadOptions;
            /**
             *
             * Gets or sets the width of all colums within the range. If the column widths are not uniform, null will be returned.
             *
             * [Api set: ExcelApi 1.2]
             */
            columnWidth?: boolean;
            /**
             *
             * Represents the horizontal alignment for the specified object. See Excel.HorizontalAlignment for details.
             *
             * [Api set: ExcelApi 1.1]
             */
            horizontalAlignment?: boolean;
            /**
             *
             * Gets or sets the height of all rows in the range. If the row heights are not uniform, null will be returned.
             *
             * [Api set: ExcelApi 1.2]
             */
            rowHeight?: boolean;
            /**
             *
             * Gets or sets the text orientation of all the cells within the range.
                The text orientation should be an integer either from -90 to 90, or 180 for vertically-oriented text.
                If the orientation within a range are not uniform, then null will be returned.
             *
             * [Api set: ExcelApi 1.7]
             */
            textOrientation?: boolean;
            /**
             *
             * Determines if the row height of the Range object equals the standard height of the sheet.
                Returns True if the row height of the Range object equals the standard height of the sheet.
                Returns Null if the range contains more than one row and the rows aren't all the same height.
                Returns False otherwise.
             *
             * [Api set: ExcelApi 1.7]
             */
            useStandardHeight?: boolean;
            /**
             *
             * Indicates whether the columnwidth of the Range object equals the standard width of the sheet.
                Returns True if the column width of the Range object equals the standard width of the sheet.
                Returns Null if the range contains more than one column and the columns aren't all the same height.
                Returns False otherwise.
             *
             * [Api set: ExcelApi 1.7]
             */
            useStandardWidth?: boolean;
            /**
             *
             * Represents the vertical alignment for the specified object. See Excel.VerticalAlignment for details.
             *
             * [Api set: ExcelApi 1.1]
             */
            verticalAlignment?: boolean;
            /**
             *
             * Indicates if Excel wraps the text in the object. A null value indicates that the entire range doesn't have uniform wrap setting
             *
             * [Api set: ExcelApi 1.1]
             */
            wrapText?: boolean;
        }
        /**
         *
         * Represents the format protection of a range object.
         *
         * [Api set: ExcelApi 1.2]
         */
        export interface FormatProtectionLoadOptions {
            $all?: boolean;
            /**
             *
             * Indicates if Excel hides the formula for the cells in the range. A null value indicates that the entire range doesn't have uniform formula hidden setting.
             *
             * [Api set: ExcelApi 1.2]
             */
            formulaHidden?: boolean;
            /**
             *
             * Indicates if Excel locks the cells in the object. A null value indicates that the entire range doesn't have uniform lock setting.
             *
             * [Api set: ExcelApi 1.2]
             */
            locked?: boolean;
        }
        /**
         *
         * Represents the background of a range object.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface RangeFillLoadOptions {
            $all?: boolean;
            /**
             *
             * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange")
             *
             * [Api set: ExcelApi 1.1]
             */
            color?: boolean;
        }
        /**
         *
         * Represents the border of an object.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface RangeBorderLoadOptions {
            $all?: boolean;
            /**
             *
             * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
             *
             * [Api set: ExcelApi 1.1]
             */
            color?: boolean;
            /**
             *
             * Constant value that indicates the specific side of the border. See Excel.BorderIndex for details. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            sideIndex?: boolean;
            /**
             *
             * One of the constants of line style specifying the line style for the border. See Excel.BorderLineStyle for details.
             *
             * [Api set: ExcelApi 1.1]
             */
            style?: boolean;
            /**
             *
             * Specifies the weight of the border around a range. See Excel.BorderWeight for details.
             *
             * [Api set: ExcelApi 1.1]
             */
            weight?: boolean;
        }
        /**
         *
         * Represents the border objects that make up the range border.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface RangeBorderCollectionLoadOptions {
            $all?: boolean;
            /**
             *
             * For EACH ITEM in the collection: HTML color code representing the color of the border line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
             *
             * [Api set: ExcelApi 1.1]
             */
            color?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Constant value that indicates the specific side of the border. See Excel.BorderIndex for details. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            sideIndex?: boolean;
            /**
             *
             * For EACH ITEM in the collection: One of the constants of line style specifying the line style for the border. See Excel.BorderLineStyle for details.
             *
             * [Api set: ExcelApi 1.1]
             */
            style?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Specifies the weight of the border around a range. See Excel.BorderWeight for details.
             *
             * [Api set: ExcelApi 1.1]
             */
            weight?: boolean;
        }
        /**
         *
         * This object represents the font attributes (font name, font size, color, etc.) for an object.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface RangeFontLoadOptions {
            $all?: boolean;
            /**
             *
             * Represents the bold status of font.
             *
             * [Api set: ExcelApi 1.1]
             */
            bold?: boolean;
            /**
             *
             * HTML color code representation of the text color. E.g. #FF0000 represents Red.
             *
             * [Api set: ExcelApi 1.1]
             */
            color?: boolean;
            /**
             *
             * Represents the italic status of the font.
             *
             * [Api set: ExcelApi 1.1]
             */
            italic?: boolean;
            /**
             *
             * Font name (e.g. "Calibri")
             *
             * [Api set: ExcelApi 1.1]
             */
            name?: boolean;
            /**
             *
             * Font size.
             *
             * [Api set: ExcelApi 1.1]
             */
            size?: boolean;
            /**
             *
             * Type of underline applied to the font. See Excel.RangeUnderlineStyle for details.
             *
             * [Api set: ExcelApi 1.1]
             */
            underline?: boolean;
        }
        /**
         *
         * A collection of all the chart objects on a worksheet.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface ChartCollectionLoadOptions {
            $all?: boolean;
            /**
            *
            * For EACH ITEM in the collection: Represents chart axes.
            *
            * [Api set: ExcelApi 1.1]
            */
            axes?: Excel.Interfaces.ChartAxesLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: Represents the datalabels on the chart.
            *
            * [Api set: ExcelApi 1.1]
            */
            dataLabels?: Excel.Interfaces.ChartDataLabelsLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: Encapsulates the format properties for the chart area.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartAreaFormatLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: Represents the legend for the chart.
            *
            * [Api set: ExcelApi 1.1]
            */
            legend?: Excel.Interfaces.ChartLegendLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: Represents either a single series or collection of series in the chart.
            *
            * [Api set: ExcelApi 1.1]
            */
            series?: Excel.Interfaces.ChartSeriesCollectionLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: Represents the title of the specified chart, including the text, visibility, position and formating of the title.
            *
            * [Api set: ExcelApi 1.1]
            */
            title?: Excel.Interfaces.ChartTitleLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: The worksheet containing the current chart.
            *
            * [Api set: ExcelApi 1.2]
            */
            worksheet?: Excel.Interfaces.WorksheetLoadOptions;
            /**
             *
             * For EACH ITEM in the collection: Represents the type of the chart. See Excel.ChartType for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            chartType?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents the height, in points, of the chart object.
             *
             * [Api set: ExcelApi 1.1]
             */
            height?: boolean;
            /**
             *
             * For EACH ITEM in the collection: The unique id of chart. Read-only.
             *
             * [Api set: ExcelApi 1.7]
             */
            id?: boolean;
            /**
             *
             * For EACH ITEM in the collection: The distance, in points, from the left side of the chart to the worksheet origin.
             *
             * [Api set: ExcelApi 1.1]
             */
            left?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents the name of a chart object.
             *
             * [Api set: ExcelApi 1.1]
             */
            name?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents whether to display all field buttons on a PivotChart.
             *
             * [Api set: ExcelApi 1.7]
             */
            showAllFieldButtons?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents the distance, in points, from the top edge of the object to the top of row 1 (on a worksheet) or the top of the chart area (on a chart).
             *
             * [Api set: ExcelApi 1.1]
             */
            top?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents the width, in points, of the chart object.
             *
             * [Api set: ExcelApi 1.1]
             */
            width?: boolean;
        }
        /**
         *
         * Represents a chart object in a workbook.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface ChartLoadOptions {
            $all?: boolean;
            /**
            *
            * Represents chart axes.
            *
            * [Api set: ExcelApi 1.1]
            */
            axes?: Excel.Interfaces.ChartAxesLoadOptions;
            /**
            *
            * Represents the datalabels on the chart.
            *
            * [Api set: ExcelApi 1.1]
            */
            dataLabels?: Excel.Interfaces.ChartDataLabelsLoadOptions;
            /**
            *
            * Encapsulates the format properties for the chart area.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartAreaFormatLoadOptions;
            /**
            *
            * Represents the legend for the chart.
            *
            * [Api set: ExcelApi 1.1]
            */
            legend?: Excel.Interfaces.ChartLegendLoadOptions;
            /**
            *
            * Represents either a single series or collection of series in the chart.
            *
            * [Api set: ExcelApi 1.1]
            */
            series?: Excel.Interfaces.ChartSeriesCollectionLoadOptions;
            /**
            *
            * Represents the title of the specified chart, including the text, visibility, position and formating of the title.
            *
            * [Api set: ExcelApi 1.1]
            */
            title?: Excel.Interfaces.ChartTitleLoadOptions;
            /**
            *
            * The worksheet containing the current chart.
            *
            * [Api set: ExcelApi 1.2]
            */
            worksheet?: Excel.Interfaces.WorksheetLoadOptions;
            /**
             *
             * Represents the type of the chart. See Excel.ChartType for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            chartType?: boolean;
            /**
             *
             * Represents the height, in points, of the chart object.
             *
             * [Api set: ExcelApi 1.1]
             */
            height?: boolean;
            /**
             *
             * The unique id of chart. Read-only.
             *
             * [Api set: ExcelApi 1.7]
             */
            id?: boolean;
            /**
             *
             * The distance, in points, from the left side of the chart to the worksheet origin.
             *
             * [Api set: ExcelApi 1.1]
             */
            left?: boolean;
            /**
             *
             * Represents the name of a chart object.
             *
             * [Api set: ExcelApi 1.1]
             */
            name?: boolean;
            /**
             *
             * Represents whether to display all field buttons on a PivotChart.
             *
             * [Api set: ExcelApi 1.7]
             */
            showAllFieldButtons?: boolean;
            /**
             *
             * Represents the distance, in points, from the top edge of the object to the top of row 1 (on a worksheet) or the top of the chart area (on a chart).
             *
             * [Api set: ExcelApi 1.1]
             */
            top?: boolean;
            /**
             *
             * Represents the width, in points, of the chart object.
             *
             * [Api set: ExcelApi 1.1]
             */
            width?: boolean;
        }
        /**
         *
         * Encapsulates the format properties for the overall chart area.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface ChartAreaFormatLoadOptions {
            $all?: boolean;
            /**
            *
            * Represents the border format of chart area, which includes color, linestyle and weight.
            *
            * [Api set: ExcelApi 1.7]
            */
            border?: Excel.Interfaces.ChartBorderLoadOptions;
            /**
            *
            * Represents the font attributes (font name, font size, color, etc.) for the current object.
            *
            * [Api set: ExcelApi 1.1]
            */
            font?: Excel.Interfaces.ChartFontLoadOptions;
        }
        /**
         *
         * Represents a collection of chart series.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface ChartSeriesCollectionLoadOptions {
            $all?: boolean;
            /**
            *
            * For EACH ITEM in the collection: Represents the formatting of a chart series, which includes fill and line formatting.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartSeriesFormatLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: Represents a collection of all points in the series.
            *
            * [Api set: ExcelApi 1.1]
            */
            points?: Excel.Interfaces.ChartPointsCollectionLoadOptions;
            /**
             *
             * For EACH ITEM in the collection: Represents the chart type of a series. See Excel.ChartType for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            chartType?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents the doughnut hole size of a chart series.  Only valid on doughnut and doughnutExploded charts.
                Throws an invalid argument exception on invalid charts.
             *
             * [Api set: ExcelApi 1.7]
             */
            doughnutHoleSize?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Boolean value representing if the series is filtered or not. Not applicable for surface charts.
             *
             * [Api set: ExcelApi 1.7]
             */
            filtered?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents the gap width of a chart series.  Only valid on bar and column charts, as well as
                specific classes of line and pie charts.  Throws an invalid argument exception on invalid charts.
             *
             * [Api set: ExcelApi 1.7]
             */
            gapWidth?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Boolean value representing if the series has data labels or not.
             *
             * [Api set: ExcelApi 1.7]
             */
            hasDataLabels?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents markers background color of a chart series.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerBackgroundColor?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents markers foreground color of a chart series.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerForegroundColor?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents marker size of a chart series.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerSize?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents marker style of a chart series. See Excel.ChartMarkerStyle for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerStyle?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents the name of a series in a chart.
             *
             * [Api set: ExcelApi 1.1]
             */
            name?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents the plot order of a chart series within the chart group.
             *
             * [Api set: ExcelApi 1.7]
             */
            plotOrder?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Boolean value representing if the series has a shadow or not.
             *
             * [Api set: ExcelApi 1.7]
             */
            showShadow?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Boolean value representing if the series is smooth or not. Only applicable for line and scatter charts.
             *
             * [Api set: ExcelApi 1.7]
             */
            smooth?: boolean;
        }
        /**
         *
         * Represents a series in a chart.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface ChartSeriesLoadOptions {
            $all?: boolean;
            /**
            *
            * Represents the formatting of a chart series, which includes fill and line formatting.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartSeriesFormatLoadOptions;
            /**
            *
            * Represents a collection of all points in the series.
            *
            * [Api set: ExcelApi 1.1]
            */
            points?: Excel.Interfaces.ChartPointsCollectionLoadOptions;
            /**
             *
             * Represents the chart type of a series. See Excel.ChartType for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            chartType?: boolean;
            /**
             *
             * Represents the doughnut hole size of a chart series.  Only valid on doughnut and doughnutExploded charts.
                Throws an invalid argument exception on invalid charts.
             *
             * [Api set: ExcelApi 1.7]
             */
            doughnutHoleSize?: boolean;
            /**
             *
             * Boolean value representing if the series is filtered or not. Not applicable for surface charts.
             *
             * [Api set: ExcelApi 1.7]
             */
            filtered?: boolean;
            /**
             *
             * Represents the gap width of a chart series.  Only valid on bar and column charts, as well as
                specific classes of line and pie charts.  Throws an invalid argument exception on invalid charts.
             *
             * [Api set: ExcelApi 1.7]
             */
            gapWidth?: boolean;
            /**
             *
             * Boolean value representing if the series has data labels or not.
             *
             * [Api set: ExcelApi 1.7]
             */
            hasDataLabels?: boolean;
            /**
             *
             * Represents markers background color of a chart series.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerBackgroundColor?: boolean;
            /**
             *
             * Represents markers foreground color of a chart series.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerForegroundColor?: boolean;
            /**
             *
             * Represents marker size of a chart series.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerSize?: boolean;
            /**
             *
             * Represents marker style of a chart series. See Excel.ChartMarkerStyle for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerStyle?: boolean;
            /**
             *
             * Represents the name of a series in a chart.
             *
             * [Api set: ExcelApi 1.1]
             */
            name?: boolean;
            /**
             *
             * Represents the plot order of a chart series within the chart group.
             *
             * [Api set: ExcelApi 1.7]
             */
            plotOrder?: boolean;
            /**
             *
             * Boolean value representing if the series has a shadow or not.
             *
             * [Api set: ExcelApi 1.7]
             */
            showShadow?: boolean;
            /**
             *
             * Boolean value representing if the series is smooth or not. Only applicable for line and scatter charts.
             *
             * [Api set: ExcelApi 1.7]
             */
            smooth?: boolean;
        }
        /**
         *
         * encapsulates the format properties for the chart series
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface ChartSeriesFormatLoadOptions {
            $all?: boolean;
            /**
            *
            * Represents line formatting.
            *
            * [Api set: ExcelApi 1.1]
            */
            line?: Excel.Interfaces.ChartLineFormatLoadOptions;
        }
        /**
         *
         * A collection of all the chart points within a series inside a chart.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface ChartPointsCollectionLoadOptions {
            $all?: boolean;
            /**
            *
            * For EACH ITEM in the collection: Returns the data label of a chart point.
            *
            * [Api set: ExcelApi 1.7]
            */
            dataLabel?: Excel.Interfaces.ChartDataLabelLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: Encapsulates the format properties chart point.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartPointFormatLoadOptions;
            /**
             *
             * For EACH ITEM in the collection: Represents whether a data point has datalabel. Not applicable for surface charts.
             *
             * [Api set: ExcelApi 1.7]
             */
            hasDataLabel?: boolean;
            /**
             *
             * For EACH ITEM in the collection: HTML color code representation of the marker background color of data point. E.g. #FF0000 represents Red.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerBackgroundColor?: boolean;
            /**
             *
             * For EACH ITEM in the collection: HTML color code representation of the marker foreground color of data point. E.g. #FF0000 represents Red.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerForegroundColor?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents marker size of data point.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerSize?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents marker style of a chart data point. See Excel.ChartMarkerStyle for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerStyle?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Returns the value of a chart point. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            value?: boolean;
        }
        /**
         *
         * Represents a point of a series in a chart.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface ChartPointLoadOptions {
            $all?: boolean;
            /**
            *
            * Returns the data label of a chart point.
            *
            * [Api set: ExcelApi 1.7]
            */
            dataLabel?: Excel.Interfaces.ChartDataLabelLoadOptions;
            /**
            *
            * Encapsulates the format properties chart point.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartPointFormatLoadOptions;
            /**
             *
             * Represents whether a data point has datalabel. Not applicable for surface charts.
             *
             * [Api set: ExcelApi 1.7]
             */
            hasDataLabel?: boolean;
            /**
             *
             * HTML color code representation of the marker background color of data point. E.g. #FF0000 represents Red.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerBackgroundColor?: boolean;
            /**
             *
             * HTML color code representation of the marker foreground color of data point. E.g. #FF0000 represents Red.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerForegroundColor?: boolean;
            /**
             *
             * Represents marker size of data point.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerSize?: boolean;
            /**
             *
             * Represents marker style of a chart data point. See Excel.ChartMarkerStyle for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            markerStyle?: boolean;
            /**
             *
             * Returns the value of a chart point. Read-only.
             *
             * [Api set: ExcelApi 1.1]
             */
            value?: boolean;
        }
        /**
         *
         * Represents formatting object for chart points.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface ChartPointFormatLoadOptions {
            $all?: boolean;
            /**
            *
            * Represents the border format of a chart data point, which includes color, style and weight information.
            *
            * [Api set: ExcelApi 1.7]
            */
            border?: Excel.Interfaces.ChartBorderLoadOptions;
        }
        /**
         *
         * Represents the chart axes.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface ChartAxesLoadOptions {
            $all?: boolean;
            /**
            *
            * Represents the category axis in a chart.
            *
            * [Api set: ExcelApi 1.1]
            */
            categoryAxis?: Excel.Interfaces.ChartAxisLoadOptions;
            /**
            *
            * Represents the series axis of a 3-dimensional chart.
            *
            * [Api set: ExcelApi 1.1]
            */
            seriesAxis?: Excel.Interfaces.ChartAxisLoadOptions;
            /**
            *
            * Represents the value axis in an axis.
            *
            * [Api set: ExcelApi 1.1]
            */
            valueAxis?: Excel.Interfaces.ChartAxisLoadOptions;
        }
        /**
         *
         * Represents a single axis in a chart.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface ChartAxisLoadOptions {
            $all?: boolean;
            /**
            *
            * Represents the formatting of a chart object, which includes line and font formatting.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartAxisFormatLoadOptions;
            /**
            *
            * Returns a gridlines object that represents the major gridlines for the specified axis.
            *
            * [Api set: ExcelApi 1.1]
            */
            majorGridlines?: Excel.Interfaces.ChartGridlinesLoadOptions;
            /**
            *
            * Returns a Gridlines object that represents the minor gridlines for the specified axis.
            *
            * [Api set: ExcelApi 1.1]
            */
            minorGridlines?: Excel.Interfaces.ChartGridlinesLoadOptions;
            /**
            *
            * Represents the axis title.
            *
            * [Api set: ExcelApi 1.1]
            */
            title?: Excel.Interfaces.ChartAxisTitleLoadOptions;
            /**
             *
             * Represents the group for the specified axis. See Excel.ChartAxisGroup for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            axisGroup?: boolean;
            /**
             *
             * Returns or sets the base unit for the specified category axis.
             *
             * [Api set: ExcelApi 1.7]
             */
            baseTimeUnit?: boolean;
            /**
             *
             * Returns or sets the category axis type.
             *
             * [Api set: ExcelApi 1.7]
             */
            categoryType?: boolean;
            /**
             * [DEPRECATED; kept for back-compat with existing first-party solutions]. Please use `Position` instead.
             * Represents the specified axis where the other axis crosses. See Excel.ChartAxisPosition for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            crosses?: boolean;
            /**
             * [DEPRECATED; kept for back-compat with existing first-party solutions]. Please use `PositionAt` instead.
             * Represents the specified axis where the other axis crosses at. Read Only. Set to this property should use SetCrossesAt(double) method.
             *
             * [Api set: ExcelApi 1.7]
             */
            crossesAt?: boolean;
            /**
             *
             * Represents the custom axis display unit value. Read Only. To set this property, please use the SetCustomDisplayUnit(double) method.
             *
             * [Api set: ExcelApi 1.7]
             */
            customDisplayUnit?: boolean;
            /**
             *
             * Represents the axis display unit. See Excel.ChartAxisDisplayUnit for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            displayUnit?: boolean;
            /**
             *
             * Represents the height, in points, of the chart axis. Null if the axis's not visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            height?: boolean;
            /**
             *
             * Represents the distance, in points, from the left edge of the axis to the left of chart area. Null if the axis's not visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            left?: boolean;
            /**
             *
             * Represents the base of the logarithm when using logarithmic scales.
             *
             * [Api set: ExcelApi 1.7]
             */
            logBase?: boolean;
            /**
             *
             * Represents the type of major tick mark for the specified axis. See Excel.ChartAxisTickMark for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            majorTickMark?: boolean;
            /**
             *
             * Returns or sets the major unit scale value for the category axis when the CategoryType property is set to TimeScale.
             *
             * [Api set: ExcelApi 1.7]
             */
            majorTimeUnitScale?: boolean;
            /**
             *
             * Represents the interval between two major tick marks. Can be set to a numeric value or an empty string.  The returned value is always a number.
             *
             * [Api set: ExcelApi 1.1]
             */
            majorUnit?: boolean;
            /**
             *
             * Represents the maximum value on the value axis.  Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number.
             *
             * [Api set: ExcelApi 1.1]
             */
            maximum?: boolean;
            /**
             *
             * Represents the minimum value on the value axis. Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number.
             *
             * [Api set: ExcelApi 1.1]
             */
            minimum?: boolean;
            /**
             *
             * Represents the type of minor tick mark for the specified axis. See Excel.ChartAxisTickMark for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            minorTickMark?: boolean;
            /**
             *
             * Returns or sets the minor unit scale value for the category axis when the CategoryType property is set to TimeScale.
             *
             * [Api set: ExcelApi 1.7]
             */
            minorTimeUnitScale?: boolean;
            /**
             *
             * Represents the interval between two minor tick marks. "Can be set to a numeric value or an empty string (for automatic axis values). The returned value is always a number.
             *
             * [Api set: ExcelApi 1.1]
             */
            minorUnit?: boolean;
            /**
             *
             * Represents whether Microsoft Excel plots data points from last to first.
             *
             * [Api set: ExcelApi 1.7]
             */
            reversePlotOrder?: boolean;
            /**
             *
             * Represents the value axis scale type. See Excel.ChartAxisScaleType for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            scaleType?: boolean;
            /**
             *
             * Represents whether the axis display unit label is visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            showDisplayUnitLabel?: boolean;
            /**
             *
             * Represents the position of tick-mark labels on the specified axis. See Excel.ChartAxisTickLabelPosition for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            tickLabelPosition?: boolean;
            /**
             *
             * Represents the number of categories or series between tick-mark labels. Can be a value from 1 through 31999 or an empty string for automatic setting. The returned value is always a number.
             *
             * [Api set: ExcelApi 1.7]
             */
            tickLabelSpacing?: boolean;
            /**
             *
             * Represents the number of categories or series between tick marks.
             *
             * [Api set: ExcelApi 1.7]
             */
            tickMarkSpacing?: boolean;
            /**
             *
             * Represents the distance, in points, from the top edge of the axis to the top of chart area. Null if the axis's not visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            top?: boolean;
            /**
             *
             * Represents the axis type. See Excel.ChartAxisType for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            type?: boolean;
            /**
             *
             * A boolean value represents the visibility of the axis.
             *
             * [Api set: ExcelApi 1.7]
             */
            visible?: boolean;
            /**
             *
             * Represents the width, in points, of the chart axis. Null if the axis's not visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            width?: boolean;
        }
        /**
         *
         * Encapsulates the format properties for the chart axis.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface ChartAxisFormatLoadOptions {
            $all?: boolean;
            /**
            *
            * Represents the font attributes (font name, font size, color, etc.) for a chart axis element.
            *
            * [Api set: ExcelApi 1.1]
            */
            font?: Excel.Interfaces.ChartFontLoadOptions;
            /**
            *
            * Represents chart line formatting.
            *
            * [Api set: ExcelApi 1.1]
            */
            line?: Excel.Interfaces.ChartLineFormatLoadOptions;
        }
        /**
         *
         * Represents the title of a chart axis.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface ChartAxisTitleLoadOptions {
            $all?: boolean;
            /**
            *
            * Represents the formatting of chart axis title.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartAxisTitleFormatLoadOptions;
            /**
             *
             * Represents the axis title.
             *
             * [Api set: ExcelApi 1.1]
             */
            text?: boolean;
            /**
             *
             * A boolean that specifies the visibility of an axis title.
             *
             * [Api set: ExcelApi 1.1]
             */
            visible?: boolean;
        }
        /**
         *
         * Represents the chart axis title formatting.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface ChartAxisTitleFormatLoadOptions {
            $all?: boolean;
            /**
            *
            * Represents the font attributes, such as font name, font size, color, etc. of chart axis title object.
            *
            * [Api set: ExcelApi 1.1]
            */
            font?: Excel.Interfaces.ChartFontLoadOptions;
        }
        /**
         *
         * Represents a collection of all the data labels on a chart point.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface ChartDataLabelsLoadOptions {
            $all?: boolean;
            /**
            *
            * Represents the format of chart data labels, which includes fill and font formatting.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartDataLabelFormatLoadOptions;
            /**
             *
             * DataLabelPosition value that represents the position of the data label. See Excel.ChartDataLabelPosition for details.
             *
             * [Api set: ExcelApi 1.1]
             */
            position?: boolean;
            /**
             *
             * String representing the separator used for the data labels on a chart.
             *
             * [Api set: ExcelApi 1.1]
             */
            separator?: boolean;
            /**
             *
             * Boolean value representing if the data label bubble size is visible or not.
             *
             * [Api set: ExcelApi 1.1]
             */
            showBubbleSize?: boolean;
            /**
             *
             * Boolean value representing if the data label category name is visible or not.
             *
             * [Api set: ExcelApi 1.1]
             */
            showCategoryName?: boolean;
            /**
             *
             * Boolean value representing if the data label legend key is visible or not.
             *
             * [Api set: ExcelApi 1.1]
             */
            showLegendKey?: boolean;
            /**
             *
             * Boolean value representing if the data label percentage is visible or not.
             *
             * [Api set: ExcelApi 1.1]
             */
            showPercentage?: boolean;
            /**
             *
             * Boolean value representing if the data label series name is visible or not.
             *
             * [Api set: ExcelApi 1.1]
             */
            showSeriesName?: boolean;
            /**
             *
             * Boolean value representing if the data label value is visible or not.
             *
             * [Api set: ExcelApi 1.1]
             */
            showValue?: boolean;
        }
        /**
         *
         * Represents the data label of a chart point.
         *
         * [Api set: ExcelApi 1.7]
         */
        export interface ChartDataLabelLoadOptions {
            $all?: boolean;
            /**
             *
             * DataLabelPosition value that represents the position of the data label. See Excel.ChartDataLabelPosition for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            position?: boolean;
            /**
             *
             * String representing the separator used for the data label on a chart.
             *
             * [Api set: ExcelApi 1.7]
             */
            separator?: boolean;
            /**
             *
             * Boolean value representing if the data label bubble size is visible or not.
             *
             * [Api set: ExcelApi 1.7]
             */
            showBubbleSize?: boolean;
            /**
             *
             * Boolean value representing if the data label category name is visible or not.
             *
             * [Api set: ExcelApi 1.7]
             */
            showCategoryName?: boolean;
            /**
             *
             * Boolean value representing if the data label legend key is visible or not.
             *
             * [Api set: ExcelApi 1.7]
             */
            showLegendKey?: boolean;
            /**
             *
             * Boolean value representing if the data label percentage is visible or not.
             *
             * [Api set: ExcelApi 1.7]
             */
            showPercentage?: boolean;
            /**
             *
             * Boolean value representing if the data label series name is visible or not.
             *
             * [Api set: ExcelApi 1.7]
             */
            showSeriesName?: boolean;
            /**
             *
             * Boolean value representing if the data label value is visible or not.
             *
             * [Api set: ExcelApi 1.7]
             */
            showValue?: boolean;
        }
        /**
         *
         * Encapsulates the format properties for the chart data labels.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface ChartDataLabelFormatLoadOptions {
            $all?: boolean;
            /**
            *
            * Represents the font attributes (font name, font size, color, etc.) for a chart data label.
            *
            * [Api set: ExcelApi 1.1]
            */
            font?: Excel.Interfaces.ChartFontLoadOptions;
        }
        /**
         *
         * Represents major or minor gridlines on a chart axis.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface ChartGridlinesLoadOptions {
            $all?: boolean;
            /**
            *
            * Represents the formatting of chart gridlines.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartGridlinesFormatLoadOptions;
            /**
             *
             * Boolean value representing if the axis gridlines are visible or not.
             *
             * [Api set: ExcelApi 1.1]
             */
            visible?: boolean;
        }
        /**
         *
         * Encapsulates the format properties for chart gridlines.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface ChartGridlinesFormatLoadOptions {
            $all?: boolean;
            /**
            *
            * Represents chart line formatting.
            *
            * [Api set: ExcelApi 1.1]
            */
            line?: Excel.Interfaces.ChartLineFormatLoadOptions;
        }
        /**
         *
         * Represents the legend in a chart.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface ChartLegendLoadOptions {
            $all?: boolean;
            /**
            *
            * Represents the formatting of a chart legend, which includes fill and font formatting.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartLegendFormatLoadOptions;
            /**
             *
             * Represents the height, in points, of the legend on the chart. Null if legend is not visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            height?: boolean;
            /**
             *
             * Represents the left, in points, of a chart legend. Null if legend is not visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            left?: boolean;
            /**
             *
             * Boolean value for whether the chart legend should overlap with the main body of the chart.
             *
             * [Api set: ExcelApi 1.1]
             */
            overlay?: boolean;
            /**
             *
             * Represents the position of the legend on the chart. See Excel.ChartLegendPosition for details.
             *
             * [Api set: ExcelApi 1.1]
             */
            position?: boolean;
            /**
             *
             * Represents if the legend has a shadow on the chart.
             *
             * [Api set: ExcelApi 1.7]
             */
            showShadow?: boolean;
            /**
             *
             * Represents the top of a chart legend.
             *
             * [Api set: ExcelApi 1.7]
             */
            top?: boolean;
            /**
             *
             * A boolean value the represents the visibility of a ChartLegend object.
             *
             * [Api set: ExcelApi 1.1]
             */
            visible?: boolean;
            /**
             *
             * Represents the width, in points, of the legend on the chart. Null if legend is not visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            width?: boolean;
        }
        /**
         *
         * Represents the legendEntry in legendEntryCollection.
         *
         * [Api set: ExcelApi 1.7]
         */
        export interface ChartLegendEntryLoadOptions {
            $all?: boolean;
            /**
             *
             * Represents the visible of a chart legend entry.
             *
             * [Api set: ExcelApi 1.7]
             */
            visible?: boolean;
        }
        /**
         *
         * Represents a collection of legendEntries.
         *
         * [Api set: ExcelApi 1.7]
         */
        export interface ChartLegendEntryCollectionLoadOptions {
            $all?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents the visible of a chart legend entry.
             *
             * [Api set: ExcelApi 1.7]
             */
            visible?: boolean;
        }
        /**
         *
         * Encapsulates the format properties of a chart legend.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface ChartLegendFormatLoadOptions {
            $all?: boolean;
            /**
            *
            * Represents the font attributes such as font name, font size, color, etc. of a chart legend.
            *
            * [Api set: ExcelApi 1.1]
            */
            font?: Excel.Interfaces.ChartFontLoadOptions;
        }
        /**
         *
         * Represents a chart title object of a chart.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface ChartTitleLoadOptions {
            $all?: boolean;
            /**
            *
            * Represents the formatting of a chart title, which includes fill and font formatting.
            *
            * [Api set: ExcelApi 1.1]
            */
            format?: Excel.Interfaces.ChartTitleFormatLoadOptions;
            /**
             *
             * Returns the height, in points, of the chart title. Read-only. Null if chart title is not visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            height?: boolean;
            /**
             *
             * Represents the horizontal alignment for chart title.
             *
             * [Api set: ExcelApi 1.7]
             */
            horizontalAlignment?: boolean;
            /**
             *
             * Represents the distance, in points, from the left edge of chart title to the left edge of chart area. Null if chart title's not visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            left?: boolean;
            /**
             *
             * Boolean value representing if the chart title will overlay the chart or not.
             *
             * [Api set: ExcelApi 1.1]
             */
            overlay?: boolean;
            /**
             *
             * Represents the position of chart title. See Excel.ChartTitlePosition for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            position?: boolean;
            /**
             *
             * Represents a boolean value that determines if the chart title has a shadow.
             *
             * [Api set: ExcelApi 1.7]
             */
            showShadow?: boolean;
            /**
             *
             * Represents the title text of a chart.
             *
             * [Api set: ExcelApi 1.1]
             */
            text?: boolean;
            /**
             *
             * Represents the text orientation of chart title. The value should be an integer either from -90 to 90, or 180 for vertically-oriented text.
             *
             * [Api set: ExcelApi 1.7]
             */
            textOrientation?: boolean;
            /**
             *
             * Represents the distance, in points, from the top edge of chart title to the top of chart area. Null if chart title's not visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            top?: boolean;
            /**
             *
             * Represents the vertical alignment of chart title. See Excel.ChartTextVerticalAlignment for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            verticalAlignment?: boolean;
            /**
             *
             * A boolean value the represents the visibility of a chart title object.
             *
             * [Api set: ExcelApi 1.1]
             */
            visible?: boolean;
            /**
             *
             * Returns the width, in points, of the chart title. Read-only. Null if chart title is not visible.
             *
             * [Api set: ExcelApi 1.7]
             */
            width?: boolean;
        }
        /**
         *
         * Represents the substring in chart related objects that contains text, like ChartTitle object, ChartAxisTitle object, etc.
         *
         * [Api set: ExcelApi 1.7]
         */
        export interface ChartFormatStringLoadOptions {
            $all?: boolean;
            /**
            *
            * Represents the font attributes, such as font name, font size, color, etc. of chart characters object.
            *
            * [Api set: ExcelApi 1.7]
            */
            font?: Excel.Interfaces.ChartFontLoadOptions;
        }
        /**
         *
         * Provides access to the office art formatting for chart title.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface ChartTitleFormatLoadOptions {
            $all?: boolean;
            /**
            *
            * Represents the border format of chart title, which includes color, linestyle and weight.
            *
            * [Api set: ExcelApi 1.7]
            */
            border?: Excel.Interfaces.ChartBorderLoadOptions;
            /**
            *
            * Represents the font attributes (font name, font size, color, etc.) for an object.
            *
            * [Api set: ExcelApi 1.1]
            */
            font?: Excel.Interfaces.ChartFontLoadOptions;
        }
        /**
         *
         * Represents the border formatting of a chart element.
         *
         * [Api set: ExcelApi 1.7]
         */
        export interface ChartBorderLoadOptions {
            $all?: boolean;
            /**
             *
             * HTML color code representing the color of borders in the chart.
             *
             * [Api set: ExcelApi 1.7]
             */
            color?: boolean;
            /**
             *
             * Represents the line style of the border. See Excel.ChartLineStyle for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            lineStyle?: boolean;
            /**
             *
             * Represents weight of the border, in points.
             *
             * [Api set: ExcelApi 1.7]
             */
            weight?: boolean;
        }
        /**
         *
         * Enapsulates the formatting options for line elements.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface ChartLineFormatLoadOptions {
            $all?: boolean;
            /**
             *
             * HTML color code representing the color of lines in the chart.
             *
             * [Api set: ExcelApi 1.1]
             */
            color?: boolean;
            /**
             *
             * Represents the line style. See Excel.ChartLineStyle for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            lineStyle?: boolean;
            /**
             *
             * Represents weight of the line, in points.
             *
             * [Api set: ExcelApi 1.7]
             */
            weight?: boolean;
        }
        /**
         *
         * This object represents the font attributes (font name, font size, color, etc.) for a chart object.
         *
         * [Api set: ExcelApi 1.1]
         */
        export interface ChartFontLoadOptions {
            $all?: boolean;
            /**
             *
             * Represents the bold status of font.
             *
             * [Api set: ExcelApi 1.1]
             */
            bold?: boolean;
            /**
             *
             * HTML color code representation of the text color. E.g. #FF0000 represents Red.
             *
             * [Api set: ExcelApi 1.1]
             */
            color?: boolean;
            /**
             *
             * Represents the italic status of the font.
             *
             * [Api set: ExcelApi 1.1]
             */
            italic?: boolean;
            /**
             *
             * Font name (e.g. "Calibri")
             *
             * [Api set: ExcelApi 1.1]
             */
            name?: boolean;
            /**
             *
             * Size of the font (e.g. 11)
             *
             * [Api set: ExcelApi 1.1]
             */
            size?: boolean;
            /**
             *
             * Type of underline applied to the font. See Excel.ChartUnderlineStyle for details.
             *
             * [Api set: ExcelApi 1.1]
             */
            underline?: boolean;
        }
        /**
         *
         * This object represents the attributes for a chart trendline object.
         *
         * [Api set: ExcelApi 1.7]
         */
        export interface ChartTrendlineLoadOptions {
            $all?: boolean;
            /**
            *
            * Represents the formatting of a chart trendline.
            *
            * [Api set: ExcelApi 1.7]
            */
            format?: Excel.Interfaces.ChartTrendlineFormatLoadOptions;
            /**
             *
             * Represents the intercept value of the trendline. Can be set to a numeric value or an empty string (for automatic values). The returned value is always a number.
             *
             * [Api set: ExcelApi 1.7]
             */
            intercept?: boolean;
            /**
             *
             * Represents the period of a chart trendline. Only applicable for trendline with MovingAverage type.
             *
             * [Api set: ExcelApi 1.7]
             */
            movingAveragePeriod?: boolean;
            /**
             *
             * Represents the name of the trendline. Can be set to a string value, or can be set to null value represents automatic values. The returned value is always a string
             *
             * [Api set: ExcelApi 1.7]
             */
            name?: boolean;
            /**
             *
             * Represents the order of a chart trendline. Only applicable for trendline with Polynomial type.
             *
             * [Api set: ExcelApi 1.7]
             */
            polynomialOrder?: boolean;
            /**
             *
             * Represents the type of a chart trendline.
             *
             * [Api set: ExcelApi 1.7]
             */
            type?: boolean;
        }
        /**
         *
         * Represents a collection of Chart Trendlines.
         *
         * [Api set: ExcelApi 1.7]
         */
        export interface ChartTrendlineCollectionLoadOptions {
            $all?: boolean;
            /**
            *
            * For EACH ITEM in the collection: Represents the formatting of a chart trendline.
            *
            * [Api set: ExcelApi 1.7]
            */
            format?: Excel.Interfaces.ChartTrendlineFormatLoadOptions;
            /**
             *
             * For EACH ITEM in the collection: Represents the intercept value of the trendline. Can be set to a numeric value or an empty string (for automatic values). The returned value is always a number.
             *
             * [Api set: ExcelApi 1.7]
             */
            intercept?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents the period of a chart trendline. Only applicable for trendline with MovingAverage type.
             *
             * [Api set: ExcelApi 1.7]
             */
            movingAveragePeriod?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents the name of the trendline. Can be set to a string value, or can be set to null value represents automatic values. The returned value is always a string
             *
             * [Api set: ExcelApi 1.7]
             */
            name?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents the order of a chart trendline. Only applicable for trendline with Polynomial type.
             *
             * [Api set: ExcelApi 1.7]
             */
            polynomialOrder?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents the type of a chart trendline.
             *
             * [Api set: ExcelApi 1.7]
             */
            type?: boolean;
        }
        /**
         *
         * Represents the format properties for chart trendline.
         *
         * [Api set: ExcelApi 1.7]
         */
        export interface ChartTrendlineFormatLoadOptions {
            $all?: boolean;
            /**
            *
            * Represents chart line formatting.
            *
            * [Api set: ExcelApi 1.7]
            */
            line?: Excel.Interfaces.ChartLineFormatLoadOptions;
        }
        /**
         *
         * Manages sorting operations on Table objects.
         *
         * [Api set: ExcelApi 1.2]
         */
        export interface TableSortLoadOptions {
            $all?: boolean;
            /**
             *
             * Represents the current conditions used to last sort the table.
             *
             * [Api set: ExcelApi 1.2]
             */
            fields?: boolean;
            /**
             *
             * Represents whether the casing impacted the last sort of the table.
             *
             * [Api set: ExcelApi 1.2]
             */
            matchCase?: boolean;
            /**
             *
             * Represents Chinese character ordering method last used to sort the table.
             *
             * [Api set: ExcelApi 1.2]
             */
            method?: boolean;
        }
        /**
         *
         * Manages the filtering of a table's column.
         *
         * [Api set: ExcelApi 1.2]
         */
        export interface FilterLoadOptions {
            $all?: boolean;
            /**
             *
             * The currently applied filter on the given column.
             *
             * [Api set: ExcelApi 1.2]
             */
            criteria?: boolean;
        }
        /**
         *
         * A scoped collection of custom XML parts.
                A scoped collection is the result of some operation, e.g. filtering by namespace.
                A scoped collection cannot be scoped any further.
         *
         * [Api set: ExcelApi 1.5]
         */
        export interface CustomXmlPartScopedCollectionLoadOptions {
            $all?: boolean;
            /**
             *
             * For EACH ITEM in the collection: The custom XML part's ID. Read-only.
             *
             * [Api set: ExcelApi 1.5]
             */
            id?: boolean;
            /**
             *
             * For EACH ITEM in the collection: The custom XML part's namespace URI. Read-only.
             *
             * [Api set: ExcelApi 1.5]
             */
            namespaceUri?: boolean;
        }
        /**
         *
         * A collection of custom XML parts.
         *
         * [Api set: ExcelApi 1.5]
         */
        export interface CustomXmlPartCollectionLoadOptions {
            $all?: boolean;
            /**
             *
             * For EACH ITEM in the collection: The custom XML part's ID. Read-only.
             *
             * [Api set: ExcelApi 1.5]
             */
            id?: boolean;
            /**
             *
             * For EACH ITEM in the collection: The custom XML part's namespace URI. Read-only.
             *
             * [Api set: ExcelApi 1.5]
             */
            namespaceUri?: boolean;
        }
        /**
         *
         * Represents a custom XML part object in a workbook.
         *
         * [Api set: ExcelApi 1.5]
         */
        export interface CustomXmlPartLoadOptions {
            $all?: boolean;
            /**
             *
             * The custom XML part's ID. Read-only.
             *
             * [Api set: ExcelApi 1.5]
             */
            id?: boolean;
            /**
             *
             * The custom XML part's namespace URI. Read-only.
             *
             * [Api set: ExcelApi 1.5]
             */
            namespaceUri?: boolean;
        }
        /**
         *
         * Represents a collection of all the PivotTables that are part of the workbook or worksheet.
         *
         * [Api set: ExcelApi 1.3]
         */
        export interface PivotTableCollectionLoadOptions {
            $all?: boolean;
            /**
            *
            * For EACH ITEM in the collection: The worksheet containing the current PivotTable.
            *
            * [Api set: ExcelApi 1.3]
            */
            worksheet?: Excel.Interfaces.WorksheetLoadOptions;
            /**
             *
             * For EACH ITEM in the collection: Id of the PivotTable.
             *
             * [Api set: ExcelApi 1.5]
             */
            id?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Name of the PivotTable.
             *
             * [Api set: ExcelApi 1.3]
             */
            name?: boolean;
        }
        /**
         *
         * Represents an Excel PivotTable.
         *
         * [Api set: ExcelApi 1.3]
         */
        export interface PivotTableLoadOptions {
            $all?: boolean;
            /**
            *
            * The worksheet containing the current PivotTable.
            *
            * [Api set: ExcelApi 1.3]
            */
            worksheet?: Excel.Interfaces.WorksheetLoadOptions;
            /**
             *
             * Id of the PivotTable.
             *
             * [Api set: ExcelApi 1.5]
             */
            id?: boolean;
            /**
             *
             * Name of the PivotTable.
             *
             * [Api set: ExcelApi 1.3]
             */
            name?: boolean;
        }
        /**
         *
         * Represents workbook properties.
         *
         * [Api set: ExcelApi 1.7]
         */
        export interface DocumentPropertiesLoadOptions {
            $all?: boolean;
            /**
             *
             * Gets or sets the author of the workbook.
             *
             * [Api set: ExcelApi 1.7]
             */
            author?: boolean;
            /**
             *
             * Gets or sets the category of the workbook.
             *
             * [Api set: ExcelApi 1.7]
             */
            category?: boolean;
            /**
             *
             * Gets or sets the comments of the workbook.
             *
             * [Api set: ExcelApi 1.7]
             */
            comments?: boolean;
            /**
             *
             * Gets or sets the company of the workbook.
             *
             * [Api set: ExcelApi 1.7]
             */
            company?: boolean;
            /**
             *
             * Gets the creation date of the workbook. Read only.
             *
             * [Api set: ExcelApi 1.7]
             */
            creationDate?: boolean;
            /**
             *
             * Gets or sets the keywords of the workbook.
             *
             * [Api set: ExcelApi 1.7]
             */
            keywords?: boolean;
            /**
             *
             * Gets the last author of the workbook. Read only.
             *
             * [Api set: ExcelApi 1.7]
             */
            lastAuthor?: boolean;
            /**
             *
             * Gets or sets the manager of the workbook.
             *
             * [Api set: ExcelApi 1.7]
             */
            manager?: boolean;
            /**
             *
             * Gets the revision number of the workbook. Read only.
             *
             * [Api set: ExcelApi 1.7]
             */
            revisionNumber?: boolean;
            /**
             *
             * Gets or sets the subject of the workbook.
             *
             * [Api set: ExcelApi 1.7]
             */
            subject?: boolean;
            /**
             *
             * Gets or sets the title of the workbook.
             *
             * [Api set: ExcelApi 1.7]
             */
            title?: boolean;
        }
        /**
         *
         * Represents a custom property.
         *
         * [Api set: ExcelApi 1.7]
         */
        export interface CustomPropertyLoadOptions {
            $all?: boolean;
            /**
             *
             * Gets the key of the custom property. Read only.
             *
             * [Api set: ExcelApi 1.7]
             */
            key?: boolean;
            /**
             *
             * Gets the value type of the custom property. Read only.
             *
             * [Api set: ExcelApi 1.7]
             */
            type?: boolean;
            /**
             *
             * Gets or sets the value of the custom property.
             *
             * [Api set: ExcelApi 1.7]
             */
            value?: boolean;
        }
        /**
         *
         * Contains the collection of customProperty objects.
         *
         * [Api set: ExcelApi 1.7]
         */
        export interface CustomPropertyCollectionLoadOptions {
            $all?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Gets the key of the custom property. Read only.
             *
             * [Api set: ExcelApi 1.7]
             */
            key?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Gets the value type of the custom property. Read only.
             *
             * [Api set: ExcelApi 1.7]
             */
            type?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Gets or sets the value of the custom property.
             *
             * [Api set: ExcelApi 1.7]
             */
            value?: boolean;
        }
        /**
         *
         * Represents a collection of all the conditional formats that are overlap the range.
         *
         * [Api set: ExcelApi 1.6]
         */
        export interface ConditionalFormatCollectionLoadOptions {
            $all?: boolean;
            /**
            *
            * For EACH ITEM in the collection: Returns the cell value conditional format properties if the current conditional format is a CellValue type.
                For example to format all cells between 5 and 10.
            *
            * [Api set: ExcelApi 1.6]
            */
            cellValue?: Excel.Interfaces.CellValueConditionalFormatLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: Returns the cell value conditional format properties if the current conditional format is a CellValue type.
                For example to format all cells between 5 and 10.
            *
            * [Api set: ExcelApi 1.6]
            */
            cellValueOrNullObject?: Excel.Interfaces.CellValueConditionalFormatLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: Returns the ColorScale conditional format properties if the current conditional format is an ColorScale type.
            *
            * [Api set: ExcelApi 1.6]
            */
            colorScale?: Excel.Interfaces.ColorScaleConditionalFormatLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: Returns the ColorScale conditional format properties if the current conditional format is an ColorScale type.
            *
            * [Api set: ExcelApi 1.6]
            */
            colorScaleOrNullObject?: Excel.Interfaces.ColorScaleConditionalFormatLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: Returns the custom conditional format properties if the current conditional format is a custom type.
            *
            * [Api set: ExcelApi 1.6]
            */
            custom?: Excel.Interfaces.CustomConditionalFormatLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: Returns the custom conditional format properties if the current conditional format is a custom type.
            *
            * [Api set: ExcelApi 1.6]
            */
            customOrNullObject?: Excel.Interfaces.CustomConditionalFormatLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: Returns the data bar properties if the current conditional format is a data bar.
            *
            * [Api set: ExcelApi 1.6]
            */
            dataBar?: Excel.Interfaces.DataBarConditionalFormatLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: Returns the data bar properties if the current conditional format is a data bar.
            *
            * [Api set: ExcelApi 1.6]
            */
            dataBarOrNullObject?: Excel.Interfaces.DataBarConditionalFormatLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: Returns the IconSet conditional format properties if the current conditional format is an IconSet type.
            *
            * [Api set: ExcelApi 1.6]
            */
            iconSet?: Excel.Interfaces.IconSetConditionalFormatLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: Returns the IconSet conditional format properties if the current conditional format is an IconSet type.
            *
            * [Api set: ExcelApi 1.6]
            */
            iconSetOrNullObject?: Excel.Interfaces.IconSetConditionalFormatLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: Returns the preset criteria conditional format such as above average/below average/unique values/contains blank/nonblank/error/noerror properties.
            *
            * [Api set: ExcelApi 1.6]
            */
            preset?: Excel.Interfaces.PresetCriteriaConditionalFormatLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: Returns the preset criteria conditional format such as above average/below average/unique values/contains blank/nonblank/error/noerror properties.
            *
            * [Api set: ExcelApi 1.6]
            */
            presetOrNullObject?: Excel.Interfaces.PresetCriteriaConditionalFormatLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: Returns the specific text conditional format properties if the current conditional format is a text type.
                For example to format cells matching the word "Text".
            *
            * [Api set: ExcelApi 1.6]
            */
            textComparison?: Excel.Interfaces.TextConditionalFormatLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: Returns the specific text conditional format properties if the current conditional format is a text type.
                For example to format cells matching the word "Text".
            *
            * [Api set: ExcelApi 1.6]
            */
            textComparisonOrNullObject?: Excel.Interfaces.TextConditionalFormatLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: Returns the Top/Bottom conditional format properties if the current conditional format is an TopBottom type.
                For example to format the top 10% or bottom 10 items.
            *
            * [Api set: ExcelApi 1.6]
            */
            topBottom?: Excel.Interfaces.TopBottomConditionalFormatLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: Returns the Top/Bottom conditional format properties if the current conditional format is an TopBottom type.
                For example to format the top 10% or bottom 10 items.
            *
            * [Api set: ExcelApi 1.6]
            */
            topBottomOrNullObject?: Excel.Interfaces.TopBottomConditionalFormatLoadOptions;
            /**
             *
             * For EACH ITEM in the collection: The Priority of the Conditional Format within the current ConditionalFormatCollection.
             *
             * [Api set: ExcelApi 1.6]
             */
            id?: boolean;
            /**
             *
             * For EACH ITEM in the collection: The priority (or index) within the conditional format collection that this conditional format currently exists in. Changing this also
                changes other conditional formats' priorities, to allow for a contiguous priority order.
                Use a negative priority to begin from the back.
                Priorities greater than than bounds will get and set to the maximum (or minimum if negative) priority.
                Also note that if you change the priority, you have to re-fetch a new copy of the object at that new priority location if you want to make further changes to it.
             *
             * [Api set: ExcelApi 1.6]
             */
            priority?: boolean;
            /**
             *
             * For EACH ITEM in the collection: If the conditions of this conditional format are met, no lower-priority formats shall take effect on that cell.
                Null on databars, icon sets, and colorscales as there's no concept of StopIfTrue for these
             *
             * [Api set: ExcelApi 1.6]
             */
            stopIfTrue?: boolean;
            /**
             *
             * For EACH ITEM in the collection: A type of conditional format. Only one can be set at a time. Read-Only.
             *
             * [Api set: ExcelApi 1.6]
             */
            type?: boolean;
        }
        /**
         *
         * An object encapsulating a conditional format's range, format, rule, and other properties.
         *
         * [Api set: ExcelApi 1.6]
         */
        export interface ConditionalFormatLoadOptions {
            $all?: boolean;
            /**
            *
            * Returns the cell value conditional format properties if the current conditional format is a CellValue type.
                For example to format all cells between 5 and 10.
            *
            * [Api set: ExcelApi 1.6]
            */
            cellValue?: Excel.Interfaces.CellValueConditionalFormatLoadOptions;
            /**
            *
            * Returns the cell value conditional format properties if the current conditional format is a CellValue type.
                For example to format all cells between 5 and 10.
            *
            * [Api set: ExcelApi 1.6]
            */
            cellValueOrNullObject?: Excel.Interfaces.CellValueConditionalFormatLoadOptions;
            /**
            *
            * Returns the ColorScale conditional format properties if the current conditional format is an ColorScale type.
            *
            * [Api set: ExcelApi 1.6]
            */
            colorScale?: Excel.Interfaces.ColorScaleConditionalFormatLoadOptions;
            /**
            *
            * Returns the ColorScale conditional format properties if the current conditional format is an ColorScale type.
            *
            * [Api set: ExcelApi 1.6]
            */
            colorScaleOrNullObject?: Excel.Interfaces.ColorScaleConditionalFormatLoadOptions;
            /**
            *
            * Returns the custom conditional format properties if the current conditional format is a custom type.
            *
            * [Api set: ExcelApi 1.6]
            */
            custom?: Excel.Interfaces.CustomConditionalFormatLoadOptions;
            /**
            *
            * Returns the custom conditional format properties if the current conditional format is a custom type.
            *
            * [Api set: ExcelApi 1.6]
            */
            customOrNullObject?: Excel.Interfaces.CustomConditionalFormatLoadOptions;
            /**
            *
            * Returns the data bar properties if the current conditional format is a data bar.
            *
            * [Api set: ExcelApi 1.6]
            */
            dataBar?: Excel.Interfaces.DataBarConditionalFormatLoadOptions;
            /**
            *
            * Returns the data bar properties if the current conditional format is a data bar.
            *
            * [Api set: ExcelApi 1.6]
            */
            dataBarOrNullObject?: Excel.Interfaces.DataBarConditionalFormatLoadOptions;
            /**
            *
            * Returns the IconSet conditional format properties if the current conditional format is an IconSet type.
            *
            * [Api set: ExcelApi 1.6]
            */
            iconSet?: Excel.Interfaces.IconSetConditionalFormatLoadOptions;
            /**
            *
            * Returns the IconSet conditional format properties if the current conditional format is an IconSet type.
            *
            * [Api set: ExcelApi 1.6]
            */
            iconSetOrNullObject?: Excel.Interfaces.IconSetConditionalFormatLoadOptions;
            /**
            *
            * Returns the preset criteria conditional format such as above average/below average/unique values/contains blank/nonblank/error/noerror properties.
            *
            * [Api set: ExcelApi 1.6]
            */
            preset?: Excel.Interfaces.PresetCriteriaConditionalFormatLoadOptions;
            /**
            *
            * Returns the preset criteria conditional format such as above average/below average/unique values/contains blank/nonblank/error/noerror properties.
            *
            * [Api set: ExcelApi 1.6]
            */
            presetOrNullObject?: Excel.Interfaces.PresetCriteriaConditionalFormatLoadOptions;
            /**
            *
            * Returns the specific text conditional format properties if the current conditional format is a text type.
                For example to format cells matching the word "Text".
            *
            * [Api set: ExcelApi 1.6]
            */
            textComparison?: Excel.Interfaces.TextConditionalFormatLoadOptions;
            /**
            *
            * Returns the specific text conditional format properties if the current conditional format is a text type.
                For example to format cells matching the word "Text".
            *
            * [Api set: ExcelApi 1.6]
            */
            textComparisonOrNullObject?: Excel.Interfaces.TextConditionalFormatLoadOptions;
            /**
            *
            * Returns the Top/Bottom conditional format properties if the current conditional format is an TopBottom type.
                For example to format the top 10% or bottom 10 items.
            *
            * [Api set: ExcelApi 1.6]
            */
            topBottom?: Excel.Interfaces.TopBottomConditionalFormatLoadOptions;
            /**
            *
            * Returns the Top/Bottom conditional format properties if the current conditional format is an TopBottom type.
                For example to format the top 10% or bottom 10 items.
            *
            * [Api set: ExcelApi 1.6]
            */
            topBottomOrNullObject?: Excel.Interfaces.TopBottomConditionalFormatLoadOptions;
            /**
             *
             * The Priority of the Conditional Format within the current ConditionalFormatCollection.
             *
             * [Api set: ExcelApi 1.6]
             */
            id?: boolean;
            /**
             *
             * The priority (or index) within the conditional format collection that this conditional format currently exists in. Changing this also
                changes other conditional formats' priorities, to allow for a contiguous priority order.
                Use a negative priority to begin from the back.
                Priorities greater than than bounds will get and set to the maximum (or minimum if negative) priority.
                Also note that if you change the priority, you have to re-fetch a new copy of the object at that new priority location if you want to make further changes to it.
             *
             * [Api set: ExcelApi 1.6]
             */
            priority?: boolean;
            /**
             *
             * If the conditions of this conditional format are met, no lower-priority formats shall take effect on that cell.
                Null on databars, icon sets, and colorscales as there's no concept of StopIfTrue for these
             *
             * [Api set: ExcelApi 1.6]
             */
            stopIfTrue?: boolean;
            /**
             *
             * A type of conditional format. Only one can be set at a time. Read-Only.
             *
             * [Api set: ExcelApi 1.6]
             */
            type?: boolean;
        }
        /**
         *
         * Represents an Excel Conditional Data Bar Type.
         *
         * [Api set: ExcelApi 1.6]
         */
        export interface DataBarConditionalFormatLoadOptions {
            $all?: boolean;
            /**
            *
            * Representation of all values to the left of the axis in an Excel data bar.
            *
            * [Api set: ExcelApi 1.6]
            */
            negativeFormat?: Excel.Interfaces.ConditionalDataBarNegativeFormatLoadOptions;
            /**
            *
            * Representation of all values to the right of the axis in an Excel data bar.
            *
            * [Api set: ExcelApi 1.6]
            */
            positiveFormat?: Excel.Interfaces.ConditionalDataBarPositiveFormatLoadOptions;
            /**
             *
             * HTML color code representing the color of the Axis line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
                "" (empty string) if no axis is present or set.
             *
             * [Api set: ExcelApi 1.6]
             */
            axisColor?: boolean;
            /**
             *
             * Representation of how the axis is determined for an Excel data bar.
             *
             * [Api set: ExcelApi 1.6]
             */
            axisFormat?: boolean;
            /**
             *
             * Represents the direction that the data bar graphic should be based on.
             *
             * [Api set: ExcelApi 1.6]
             */
            barDirection?: boolean;
            /**
             *
             * The rule for what consistutes the lower bound (and how to calculate it, if applicable) for a data bar.
             *
             * [Api set: ExcelApi 1.6]
             */
            lowerBoundRule?: boolean;
            /**
             *
             * If true, hides the values from the cells where the data bar is applied.
             *
             * [Api set: ExcelApi 1.6]
             */
            showDataBarOnly?: boolean;
            /**
             *
             * The rule for what constitutes the upper bound (and how to calculate it, if applicable) for a data bar.
             *
             * [Api set: ExcelApi 1.6]
             */
            upperBoundRule?: boolean;
        }
        /**
         *
         * Represents a conditional format DataBar Format for the positive side of the data bar.
         *
         * [Api set: ExcelApi 1.6]
         */
        export interface ConditionalDataBarPositiveFormatLoadOptions {
            $all?: boolean;
            /**
             *
             * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
                "" (empty string) if no border is present or set.
             *
             * [Api set: ExcelApi 1.6]
             */
            borderColor?: boolean;
            /**
             *
             * HTML color code representing the fill color, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
             *
             * [Api set: ExcelApi 1.6]
             */
            fillColor?: boolean;
            /**
             *
             * Boolean representation of whether or not the DataBar has a gradient.
             *
             * [Api set: ExcelApi 1.6]
             */
            gradientFill?: boolean;
        }
        /**
         *
         * Represents a conditional format DataBar Format for the negative side of the data bar.
         *
         * [Api set: ExcelApi 1.6]
         */
        export interface ConditionalDataBarNegativeFormatLoadOptions {
            $all?: boolean;
            /**
             *
             * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
                "Empty String" if no border is present or set.
             *
             * [Api set: ExcelApi 1.6]
             */
            borderColor?: boolean;
            /**
             *
             * HTML color code representing the fill color, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
             *
             * [Api set: ExcelApi 1.6]
             */
            fillColor?: boolean;
            /**
             *
             * Boolean representation of whether or not the negative DataBar has the same border color as the positive DataBar.
             *
             * [Api set: ExcelApi 1.6]
             */
            matchPositiveBorderColor?: boolean;
            /**
             *
             * Boolean representation of whether or not the negative DataBar has the same fill color as the positive DataBar.
             *
             * [Api set: ExcelApi 1.6]
             */
            matchPositiveFillColor?: boolean;
        }
        /**
         *
         * Represents a custom conditional format type.
         *
         * [Api set: ExcelApi 1.6]
         */
        export interface CustomConditionalFormatLoadOptions {
            $all?: boolean;
            /**
            *
            * Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties.
            *
            * [Api set: ExcelApi 1.6]
            */
            format?: Excel.Interfaces.ConditionalRangeFormatLoadOptions;
            /**
            *
            * Represents the Rule object on this conditional format.
            *
            * [Api set: ExcelApi 1.6]
            */
            rule?: Excel.Interfaces.ConditionalFormatRuleLoadOptions;
        }
        /**
         *
         * Represents a rule, for all traditional rule/format pairings.
         *
         * [Api set: ExcelApi 1.6]
         */
        export interface ConditionalFormatRuleLoadOptions {
            $all?: boolean;
            /**
             *
             * The formula, if required, to evaluate the conditional format rule on.
             *
             * [Api set: ExcelApi 1.6]
             */
            formula?: boolean;
            /**
             *
             * The formula, if required, to evaluate the conditional format rule on in the user's language.
             *
             * [Api set: ExcelApi 1.6]
             */
            formulaLocal?: boolean;
            /**
             *
             * The formula, if required, to evaluate the conditional format rule on in R1C1-style notation.
             *
             * [Api set: ExcelApi 1.6]
             */
            formulaR1C1?: boolean;
        }
        /**
         *
         * Represents an IconSet criteria for conditional formatting.
         *
         * [Api set: ExcelApi 1.6]
         */
        export interface IconSetConditionalFormatLoadOptions {
            $all?: boolean;
            /**
             *
             * An array of Criteria and IconSets for the rules and potential custom icons for conditional icons. Note that for the first criterion only the custom icon can be modified, while type, formula and operator will be ignored when set.
             *
             * [Api set: ExcelApi 1.6]
             */
            criteria?: boolean;
            /**
             *
             * If true, reverses the icon orders for the IconSet. Note that this cannot be set if custom icons are used.
             *
             * [Api set: ExcelApi 1.6]
             */
            reverseIconOrder?: boolean;
            /**
             *
             * If true, hides the values and only shows icons.
             *
             * [Api set: ExcelApi 1.6]
             */
            showIconOnly?: boolean;
            /**
             *
             * If set, displays the IconSet option for the conditional format.
             *
             * [Api set: ExcelApi 1.6]
             */
            style?: boolean;
        }
        /**
         *
         * Represents an IconSet criteria for conditional formatting.
         *
         * [Api set: ExcelApi 1.6]
         */
        export interface ColorScaleConditionalFormatLoadOptions {
            $all?: boolean;
            /**
             *
             * The criteria of the color scale. Midpoint is optional when using a two point color scale.
             *
             * [Api set: ExcelApi 1.6]
             */
            criteria?: boolean;
            /**
             *
             * If true the color scale will have three points (minimum, midpoint, maximum), otherwise it will have two (minimum, maximum).
             *
             * [Api set: ExcelApi 1.6]
             */
            threeColorScale?: boolean;
        }
        /**
         *
         * Represents a Top/Bottom conditional format.
         *
         * [Api set: ExcelApi 1.6]
         */
        export interface TopBottomConditionalFormatLoadOptions {
            $all?: boolean;
            /**
            *
            * Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties.
            *
            * [Api set: ExcelApi 1.6]
            */
            format?: Excel.Interfaces.ConditionalRangeFormatLoadOptions;
            /**
             *
             * The criteria of the Top/Bottom conditional format.
             *
             * [Api set: ExcelApi 1.6]
             */
            rule?: boolean;
        }
        /**
         *
         * Represents the the preset criteria conditional format such as above average/below average/unique values/contains blank/nonblank/error/noerror.
         *
         * [Api set: ExcelApi 1.6]
         */
        export interface PresetCriteriaConditionalFormatLoadOptions {
            $all?: boolean;
            /**
            *
            * Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties.
            *
            * [Api set: ExcelApi 1.6]
            */
            format?: Excel.Interfaces.ConditionalRangeFormatLoadOptions;
            /**
             *
             * The rule of the conditional format.
             *
             * [Api set: ExcelApi 1.6]
             */
            rule?: boolean;
        }
        /**
         *
         * Represents a specific text conditional format.
         *
         * [Api set: ExcelApi 1.6]
         */
        export interface TextConditionalFormatLoadOptions {
            $all?: boolean;
            /**
            *
            * Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties.
            *
            * [Api set: ExcelApi 1.6]
            */
            format?: Excel.Interfaces.ConditionalRangeFormatLoadOptions;
            /**
             *
             * The rule of the conditional format.
             *
             * [Api set: ExcelApi 1.6]
             */
            rule?: boolean;
        }
        /**
         *
         * Represents a cell value conditional format.
         *
         * [Api set: ExcelApi 1.6]
         */
        export interface CellValueConditionalFormatLoadOptions {
            $all?: boolean;
            /**
            *
            * Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties.
            *
            * [Api set: ExcelApi 1.6]
            */
            format?: Excel.Interfaces.ConditionalRangeFormatLoadOptions;
            /**
             *
             * Represents the Rule object on this conditional format.
             *
             * [Api set: ExcelApi 1.6]
             */
            rule?: boolean;
        }
        /**
         *
         * A format object encapsulating the conditional formats range's font, fill, borders, and other properties.
         *
         * [Api set: ExcelApi 1.6]
         */
        export interface ConditionalRangeFormatLoadOptions {
            $all?: boolean;
            /**
            *
            * Collection of border objects that apply to the overall conditional format range.
            *
            * [Api set: ExcelApi 1.6]
            */
            borders?: Excel.Interfaces.ConditionalRangeBorderCollectionLoadOptions;
            /**
            *
            * Returns the fill object defined on the overall conditional format range.
            *
            * [Api set: ExcelApi 1.6]
            */
            fill?: Excel.Interfaces.ConditionalRangeFillLoadOptions;
            /**
            *
            * Returns the font object defined on the overall conditional format range.
            *
            * [Api set: ExcelApi 1.6]
            */
            font?: Excel.Interfaces.ConditionalRangeFontLoadOptions;
            /**
             *
             * Represents Excel's number format code for the given range. Cleared if null is passed in.
             *
             * [Api set: ExcelApi 1.6]
             */
            numberFormat?: boolean;
        }
        /**
         *
         * This object represents the font attributes (font style,, color, etc.) for an object.
         *
         * [Api set: ExcelApi 1.6]
         */
        export interface ConditionalRangeFontLoadOptions {
            $all?: boolean;
            /**
             *
             * Represents the bold status of font.
             *
             * [Api set: ExcelApi 1.6]
             */
            bold?: boolean;
            /**
             *
             * HTML color code representation of the text color. E.g. #FF0000 represents Red.
             *
             * [Api set: ExcelApi 1.6]
             */
            color?: boolean;
            /**
             *
             * Represents the italic status of the font.
             *
             * [Api set: ExcelApi 1.6]
             */
            italic?: boolean;
            /**
             *
             * Represents the strikethrough status of the font.
             *
             * [Api set: ExcelApi 1.6]
             */
            strikethrough?: boolean;
            /**
             *
             * Type of underline applied to the font. See Excel.ConditionalRangeFontUnderlineStyle for details.
             *
             * [Api set: ExcelApi 1.6]
             */
            underline?: boolean;
        }
        /**
         *
         * Represents the background of a conditional range object.
         *
         * [Api set: ExcelApi 1.6]
         */
        export interface ConditionalRangeFillLoadOptions {
            $all?: boolean;
            /**
             *
             * HTML color code representing the color of the fill, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
             *
             * [Api set: ExcelApi 1.6]
             */
            color?: boolean;
        }
        /**
         *
         * Represents the border of an object.
         *
         * [Api set: ExcelApi 1.6]
         */
        export interface ConditionalRangeBorderLoadOptions {
            $all?: boolean;
            /**
             *
             * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
             *
             * [Api set: ExcelApi 1.6]
             */
            color?: boolean;
            /**
             *
             * Constant value that indicates the specific side of the border. See Excel.ConditionalRangeBorderIndex for details. Read-only.
             *
             * [Api set: ExcelApi 1.6]
             */
            sideIndex?: boolean;
            /**
             *
             * One of the constants of line style specifying the line style for the border. See Excel.BorderLineStyle for details.
             *
             * [Api set: ExcelApi 1.6]
             */
            style?: boolean;
        }
        /**
         *
         * Represents the border objects that make up range border.
         *
         * [Api set: ExcelApi 1.6]
         */
        export interface ConditionalRangeBorderCollectionLoadOptions {
            $all?: boolean;
            /**
             *
             * For EACH ITEM in the collection: HTML color code representing the color of the border line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
             *
             * [Api set: ExcelApi 1.6]
             */
            color?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Constant value that indicates the specific side of the border. See Excel.ConditionalRangeBorderIndex for details. Read-only.
             *
             * [Api set: ExcelApi 1.6]
             */
            sideIndex?: boolean;
            /**
             *
             * For EACH ITEM in the collection: One of the constants of line style specifying the line style for the border. See Excel.BorderLineStyle for details.
             *
             * [Api set: ExcelApi 1.6]
             */
            style?: boolean;
        }
        /**
         *
         * An object encapsulating a style's format and other properties.
         *
         * [Api set: ExcelApi 1.7]
         */
        export interface StyleLoadOptions {
            $all?: boolean;
            /**
            *
            * A Border collection of four Border objects that represent the style of the four borders.
            *
            * [Api set: ExcelApi 1.7]
            */
            borders?: Excel.Interfaces.RangeBorderCollectionLoadOptions;
            /**
            *
            * The Fill of the style.
            *
            * [Api set: ExcelApi 1.7]
            */
            fill?: Excel.Interfaces.RangeFillLoadOptions;
            /**
            *
            * A Font object that represents the font of the style.
            *
            * [Api set: ExcelApi 1.7]
            */
            font?: Excel.Interfaces.RangeFontLoadOptions;
            /**
             *
             * Indicates if the style is a built-in style.
             *
             * [Api set: ExcelApi 1.7]
             */
            builtIn?: boolean;
            /**
             *
             * Indicates if the formula will be hidden when the worksheet is protected.
             *
             * [Api set: ExcelApi 1.7]
             */
            formulaHidden?: boolean;
            /**
             *
             * Represents the horizontal alignment for the style. See Excel.HorizontalAlignment for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            horizontalAlignment?: boolean;
            /**
             *
             * Indicates if the style includes the AutoIndent, HorizontalAlignment, VerticalAlignment, WrapText, IndentLevel, and TextOrientation properties.
             *
             * [Api set: ExcelApi 1.7]
             */
            includeAlignment?: boolean;
            /**
             *
             * Indicates if the style includes the Color, ColorIndex, LineStyle, and Weight border properties.
             *
             * [Api set: ExcelApi 1.7]
             */
            includeBorder?: boolean;
            /**
             *
             * Indicates if the style includes the Background, Bold, Color, ColorIndex, FontStyle, Italic, Name, Size, Strikethrough, Subscript, Superscript, and Underline font properties.
             *
             * [Api set: ExcelApi 1.7]
             */
            includeFont?: boolean;
            /**
             *
             * Indicates if the style includes the NumberFormat property.
             *
             * [Api set: ExcelApi 1.7]
             */
            includeNumber?: boolean;
            /**
             *
             * Indicates if the style includes the Color, ColorIndex, InvertIfNegative, Pattern, PatternColor, and PatternColorIndex interior properties.
             *
             * [Api set: ExcelApi 1.7]
             */
            includePatterns?: boolean;
            /**
             *
             * Indicates if the style includes the FormulaHidden and Locked protection properties.
             *
             * [Api set: ExcelApi 1.7]
             */
            includeProtection?: boolean;
            /**
             *
             * An integer from 0 to 250 that indicates the indent level for the style.
             *
             * [Api set: ExcelApi 1.7]
             */
            indentLevel?: boolean;
            /**
             *
             * Indicates if the object is locked when the worksheet is protected.
             *
             * [Api set: ExcelApi 1.7]
             */
            locked?: boolean;
            /**
             *
             * The name of the style.
             *
             * [Api set: ExcelApi 1.7]
             */
            name?: boolean;
            /**
             *
             * The format code of the number format for the style.
             *
             * [Api set: ExcelApi 1.7]
             */
            numberFormat?: boolean;
            /**
             *
             * The localized format code of the number format for the style.
             *
             * [Api set: ExcelApi 1.7]
             */
            numberFormatLocal?: boolean;
            /**
             *
             * The reading order for the style.
             *
             * [Api set: ExcelApi 1.7]
             */
            readingOrder?: boolean;
            /**
             *
             * Indicates if text automatically shrinks to fit in the available column width.
             *
             * [Api set: ExcelApi 1.7]
             */
            shrinkToFit?: boolean;
            /**
             *
             * Represents the vertical alignment for the style. See Excel.VerticalAlignment for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            verticalAlignment?: boolean;
            /**
             *
             * Indicates if Microsoft Excel wraps the text in the object.
             *
             * [Api set: ExcelApi 1.7]
             */
            wrapText?: boolean;
        }
        /**
         *
         * Represents a collection of all the styles.
         *
         * [Api set: ExcelApi 1.7]
         */
        export interface StyleCollectionLoadOptions {
            $all?: boolean;
            /**
            *
            * For EACH ITEM in the collection: A Border collection of four Border objects that represent the style of the four borders.
            *
            * [Api set: ExcelApi 1.7]
            */
            borders?: Excel.Interfaces.RangeBorderCollectionLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: The Fill of the style.
            *
            * [Api set: ExcelApi 1.7]
            */
            fill?: Excel.Interfaces.RangeFillLoadOptions;
            /**
            *
            * For EACH ITEM in the collection: A Font object that represents the font of the style.
            *
            * [Api set: ExcelApi 1.7]
            */
            font?: Excel.Interfaces.RangeFontLoadOptions;
            /**
             *
             * For EACH ITEM in the collection: Indicates if the style is a built-in style.
             *
             * [Api set: ExcelApi 1.7]
             */
            builtIn?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Indicates if the formula will be hidden when the worksheet is protected.
             *
             * [Api set: ExcelApi 1.7]
             */
            formulaHidden?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents the horizontal alignment for the style. See Excel.HorizontalAlignment for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            horizontalAlignment?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Indicates if the style includes the AutoIndent, HorizontalAlignment, VerticalAlignment, WrapText, IndentLevel, and TextOrientation properties.
             *
             * [Api set: ExcelApi 1.7]
             */
            includeAlignment?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Indicates if the style includes the Color, ColorIndex, LineStyle, and Weight border properties.
             *
             * [Api set: ExcelApi 1.7]
             */
            includeBorder?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Indicates if the style includes the Background, Bold, Color, ColorIndex, FontStyle, Italic, Name, Size, Strikethrough, Subscript, Superscript, and Underline font properties.
             *
             * [Api set: ExcelApi 1.7]
             */
            includeFont?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Indicates if the style includes the NumberFormat property.
             *
             * [Api set: ExcelApi 1.7]
             */
            includeNumber?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Indicates if the style includes the Color, ColorIndex, InvertIfNegative, Pattern, PatternColor, and PatternColorIndex interior properties.
             *
             * [Api set: ExcelApi 1.7]
             */
            includePatterns?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Indicates if the style includes the FormulaHidden and Locked protection properties.
             *
             * [Api set: ExcelApi 1.7]
             */
            includeProtection?: boolean;
            /**
             *
             * For EACH ITEM in the collection: An integer from 0 to 250 that indicates the indent level for the style.
             *
             * [Api set: ExcelApi 1.7]
             */
            indentLevel?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Indicates if the object is locked when the worksheet is protected.
             *
             * [Api set: ExcelApi 1.7]
             */
            locked?: boolean;
            /**
             *
             * For EACH ITEM in the collection: The name of the style.
             *
             * [Api set: ExcelApi 1.7]
             */
            name?: boolean;
            /**
             *
             * For EACH ITEM in the collection: The format code of the number format for the style.
             *
             * [Api set: ExcelApi 1.7]
             */
            numberFormat?: boolean;
            /**
             *
             * For EACH ITEM in the collection: The localized format code of the number format for the style.
             *
             * [Api set: ExcelApi 1.7]
             */
            numberFormatLocal?: boolean;
            /**
             *
             * For EACH ITEM in the collection: The reading order for the style.
             *
             * [Api set: ExcelApi 1.7]
             */
            readingOrder?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Indicates if text automatically shrinks to fit in the available column width.
             *
             * [Api set: ExcelApi 1.7]
             */
            shrinkToFit?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Represents the vertical alignment for the style. See Excel.VerticalAlignment for details.
             *
             * [Api set: ExcelApi 1.7]
             */
            verticalAlignment?: boolean;
            /**
             *
             * For EACH ITEM in the collection: Indicates if Microsoft Excel wraps the text in the object.
             *
             * [Api set: ExcelApi 1.7]
             */
            wrapText?: boolean;
        }
        /**
         *
         * An object containing the result of a function-evaluation operation
         *
         * [Api set: ExcelApi 1.2]
         */
        export interface FunctionResultLoadOptions {
            $all?: boolean;
            /**
             *
             * Error value (such as "#DIV/0") representing the error. If the error string is not set, then the function succeeded, and its result is written to the Value field. The error is always in the English locale.
             *
             * [Api set: ExcelApi 1.2]
             */
            error?: boolean;
            /**
             *
             * The value of function evaluation. The value field will be populated only if no error has occurred (i.e., the Error property is not set).
             *
             * [Api set: ExcelApi 1.2]
             */
            value?: boolean;
        }
    }
}


////////////////////////////////////////////////////////////////
//////////////////////// End Excel APIs ////////////////////////
////////////////////////////////////////////////////////////////