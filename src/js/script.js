'use strict';

function customBind(fn, context, ...args) {
    return function (...newArgs) {
        const combinedArgs = args.concat(newArgs);
        const symbolKey = Symbol();
        context[symbolKey] = fn;
        const result = context[symbolKey](...combinedArgs);
        delete context[symbolKey];
        return result;
    };
}
const FirstName = {
    name: 'Vladislav',
};
function printX(extraText) {
    console.log(`${extraText}: ${this.name}`);
}
const boundFunc = customBind(printX, FirstName, 'name');
boundFunc();
