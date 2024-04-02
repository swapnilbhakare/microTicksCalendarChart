import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api";
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin;
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions;
import DialogConstructorOptions = powerbiVisualsApi.extensibility.visual.DialogConstructorOptions;
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];
var microTicksCalendarChart955A15351BC74D6AB82487372E82C4C6_DEBUG: IVisualPlugin = {
    name: 'microTicksCalendarChart955A15351BC74D6AB82487372E82C4C6_DEBUG',
    displayName: 'microTicksCalendarChart',
    class: 'Visual',
    apiVersion: '5.1.0',
    create: (options?: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }
        throw 'Visual instance not found';
    },
    createModalDialog: (dialogId: string, options: DialogConstructorOptions, initialState: object) => {
        const dialogRegistry = (<any>globalThis).dialogRegistry;
        if (dialogId in dialogRegistry) {
            new dialogRegistry[dialogId](options, initialState);
        }
    },
    custom: true
};
if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["microTicksCalendarChart955A15351BC74D6AB82487372E82C4C6_DEBUG"] = microTicksCalendarChart955A15351BC74D6AB82487372E82C4C6_DEBUG;
}
export default microTicksCalendarChart955A15351BC74D6AB82487372E82C4C6_DEBUG;